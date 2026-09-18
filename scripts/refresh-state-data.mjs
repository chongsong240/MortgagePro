/**
 * ============================================================
 * Quarterly refresh of src/data/state_data.json (median_home_price).
 *
 * WHAT IT DOES
 * ------------
 *  1. Downloads the Zillow Research series that every state page cites —
 *     "Median Sale Price (raw, all homes, monthly)" — straight from Zillow's
 *     public CDN (no API key, no scraping):
 *
 *       https://files.zillowstatic.com/research/public_csvs/median_sale_price/
 *         State_median_sale_price_uc_sfrcondo_month.csv
 *
 *     (`uc_sfrcondo` = single-family + condo = Zillow's "all homes" cut.)
 *     Rows are states, columns are months, so the script auto-detects the
 *     newest month that has a value for every region and keeps working when
 *     Zillow appends columns. The CSV is cached under data/zillow/ (that
 *     folder is gitignored — it is a local audit trail, not a site asset).
 *
 *  2. Prints a diff against the values currently in state_data.json: per
 *     state old -> new and +/-%, plus before/after mean, min and max, and the
 *     copy labels that must follow the new vintage.
 *
 *  3. With --write it rewrites ONLY the median_home_price numbers, in place.
 *     The one-state-per-line layout, key order and the name /
 *     property_tax_rate / closing_cost_pct / avg_annual_insurance values are
 *     preserved byte-for-byte; the script aborts unless exactly 51 state
 *     lines matched and nothing else drifted.
 *
 * INSURANCE IS NOT FETCHED AUTOMATICALLY
 * --------------------------------------
 * NAIC publishes homeowners insurance as a PDF table of statewide average
 * HO-3 premiums (most recent comparable year: 2022, via Triple-I's by-state
 * table). Pass --insurance-file <file.json> shaped like
 *   { "vintage": "NAIC 2022", "values": { "AL": 1748, "AK": 1129, ... } }
 * to apply a new vintage in the same guarded way; otherwise the existing
 * premiums are left untouched (and the script reminds you of the vintage it
 * finds in the citation strings).
 *
 * WRONG-SERIES GUARDS
 * -------------------
 * Zillow's home-value (ZHVI) and rent files use the same header prefix as the
 * median sale price file, and swapping in one of them shifts the 51-state mean
 * by only a few percent — i.e. it looks plausible. So two independent checks
 * run before anything is written:
 *   · structural — file name, first month (sale prices start 2008-02) and
 *     monthly column count (~225) must match the sale price series; and
 *   · numeric — no state may move more than 25%, nor the mean more than 15%.
 * Either check blocks --write; --force overrides after a human has looked.
 *
 * USAGE
 * -----
 *   node scripts/refresh-state-data.mjs                  # dry run, print diff
 *   node scripts/refresh-state-data.mjs --all            # diff all 51 states
 *   node scripts/refresh-state-data.mjs --write          # apply the prices
 *   node scripts/refresh-state-data.mjs --check          # CI/cron: exit 2 if stale
 *   node scripts/refresh-state-data.mjs --file <csv>     # use a local CSV
 *   node scripts/refresh-state-data.mjs --month 2026-07  # pin a month
 *   node scripts/refresh-state-data.mjs --offline        # cached CSV only
 *   node scripts/refresh-state-data.mjs --no-cache       # don't keep the CSV
 *   node scripts/refresh-state-data.mjs --report <path>  # save the diff table
 *   node scripts/refresh-state-data.mjs --quiet          # report file only
 *   node scripts/refresh-state-data.mjs --write --force  # override a guard
 *
 * EXIT CODES: 0 = up to date or written, 1 = error, 2 = --check found drift.
 * ============================================================
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const STATE_FILE = path.join(ROOT, 'src', 'data', 'state_data.json');
const ZILLOW_URL =
  'https://files.zillowstatic.com/research/public_csvs/median_sale_price/State_median_sale_price_uc_sfrcondo_month.csv';
const CACHE_DIR = path.join(ROOT, 'data', 'zillow');
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Wrong-series guards. Pointing --url at the SFR-only or the smoothed file
 * shows up as implausible swings, so hard-fail and make the operator confirm
 * with --force instead of silently publishing garbage.
 */
const MAX_STATE_MOVE_PCT = 25;
const MAX_MEAN_MOVE_PCT = 15;
const PRICE_FLOOR = 50_000;
const PRICE_CEIL = 3_000_000;

// ============================================================
// 0. CLI
// ============================================================
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name, fallback = null) => {
  const i = argv.indexOf(name);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : fallback;
};

const WRITE = flag('--write');
const CHECK = flag('--check');
const FORCE = flag('--force');
const SHOW_ALL = flag('--all');
const QUIET = flag('--quiet');
const OFFLINE = flag('--offline');
const NO_CACHE = flag('--no-cache');
const LOCAL_FILE = opt('--file');
const SOURCE_URL = opt('--url', ZILLOW_URL);
const MONTH_PIN = opt('--month');
const INSURANCE_FILE = opt('--insurance-file');
const REPORT_PATH = opt('--report');

if (WRITE && CHECK) die('--write and --check are mutually exclusive');

const say = (...a) => { if (!QUIET) console.log(...a); };
const report = [];
const note = (line = '') => { report.push(line); if (!QUIET) console.log(line); };
/**
 * Abort with a message. `fs.writeSync(2, ...)` + process.exit **flushes the
 * message first** — console.error() output is buffered when stdout/stderr are
 * piped to a file (cron, CI) and would be lost by an immediate process.exit().
 */
function die(msg) {
  fs.writeSync(2, `\n❌ ${msg}\n`);
  process.exit(1);
}
const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
const signed = (n) => (n > 0 ? '+' : n < 0 ? '-' : '') + money(Math.abs(n));
/** Node's fetch hides the real network problem in err.cause — surface both. */
const downloadError = (err) => (err?.cause?.message ? `${err.message} (${err.cause.message})` : String(err?.message ?? err));

// ============================================================
// 1. CSV helpers
// ============================================================

/**
 * Minimal RFC-4180 field splitter. Zillow's numbers never contain commas,
 * but region names are quoted in some of their files, so handle quotes.
 */
function splitCsvLine(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else quoted = false;
      } else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}

/**
 * "2026-07-31" -> "Month YYYY". That is the wording used in every site
 * citation ("Zillow Research, median sale price, all homes, <Month YYYY>"), so
 * the value this returns can be compared with those strings directly.
 */
function monthLabel(isoDate) {
  const [y, m] = isoDate.split('-');
  const name = MONTH_NAMES[Number(m) - 1];
  return name ? `${name} ${y}` : isoDate;
}

// ============================================================
// 2. Get the CSV (local file > cache > download)
// ============================================================
async function loadCsv() {
  if (LOCAL_FILE) {
    const p = path.resolve(LOCAL_FILE);
    if (!fs.existsSync(p)) die(`--file not found: ${p}`);
    say(`📄 Using local CSV ${p}`);
    return fs.readFileSync(p, 'utf8');
  }

  const cached = path.join(CACHE_DIR, path.basename(new URL(SOURCE_URL).pathname));

  if (OFFLINE) {
    if (!fs.existsSync(cached)) die(`--offline but nothing cached at ${cached}`);
    say(`📄 --offline: using cached CSV ${cached}`);
    return fs.readFileSync(cached, 'utf8');
  }

  say(`⬇️  Downloading ${SOURCE_URL}`);
  let res;
  try {
    res = await fetch(SOURCE_URL, { redirect: 'follow' });
  } catch (err) {
    if (fs.existsSync(cached)) {
      say(`   ⚠️  download failed (${downloadError(err)}) — falling back to cached copy`);
      return fs.readFileSync(cached, 'utf8');
    }
    die(`download failed: ${downloadError(err)}\n` +
        `   No cached copy at ${path.relative(ROOT, cached)} either — download the CSV\n` +
        `   manually from ${SOURCE_URL} and pass it with --file <path>.`);
  }
  if (!res.ok) {
    if (fs.existsSync(cached)) {
      say(`   ⚠️  HTTP ${res.status} — falling back to cached copy`);
      return fs.readFileSync(cached, 'utf8');
    }
    die(`download failed: HTTP ${res.status} ${res.statusText}`);
  }

  const csv = await res.text();
  say(`   received ${Buffer.byteLength(csv).toLocaleString()} bytes`);
  if (!NO_CACHE) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.writeFileSync(cached, csv, 'utf8');
    say(`   cached at ${path.relative(ROOT, cached)}`);
  }
  return csv;
}

// ============================================================
// 3. Parse the Zillow CSV
// ============================================================
function parseZillowCsv(csv) {
  const lines = csv.replace(/^\uFEFF/, '').split(/\r?\n/).filter((l) => l.trim().length);
  if (lines.length < 10) die('CSV looks empty or truncated — nothing to parse');

  const header = splitCsvLine(lines[0]);
  const expectedPrefix = ['RegionID', 'SizeRank', 'RegionName', 'RegionType', 'StateName'];
  expectedPrefix.forEach((col, i) => {
    if (header[i] !== col) {
      die(`unexpected CSV header: column ${i + 1} is "${header[i]}" but "${col}" was expected.\n` +
          `   Is --url pointing at Zillow's *median sale price* state file?`);
    }
  });

  const dateCols = [];
  header.forEach((h, i) => { if (/^\d{4}-\d{2}-\d{2}$/.test(h)) dateCols.push({ i, date: h }); });
  if (dateCols.length < 12) die('no monthly date columns found — wrong file?');

  const rows = lines.slice(1).map(splitCsvLine);
  const nameIdx = header.indexOf('RegionName');

  // Newest month that is NOT NULL for every row: Zillow fills the current
  // month in stages, so the last column can be blank for a few states.
  let chosen = null;
  for (let k = dateCols.length - 1; k >= 0; k--) {
    const { i, date } = dateCols[k];
    if (MONTH_PIN && !date.startsWith(MONTH_PIN)) continue;
    const complete = rows.every((r) => r[i] !== undefined && r[i] !== '' && Number.isFinite(Number(r[i])));
    if (complete) { chosen = { i, date, position: k + 1 }; break; }
  }
  if (!chosen) {
    die(MONTH_PIN
      ? `no month column matching ${MONTH_PIN} is complete across all regions`
      : 'no month column is complete across all regions');
  }

  const prices = new Map();
  for (const r of rows) {
    const name = (r[nameIdx] ?? '').trim();
    const value = Number(r[chosen.i]);
    if (name && Number.isFinite(value) && value > 0) prices.set(name, Math.round(value));
  }
  return {
    prices,
    month: chosen.date,
    firstDate: dateCols[0].date,
    monthPosition: chosen.position,
    monthCount: dateCols.length,
    rows: rows.length,
  };
}

// ============================================================
// 4. Load the current dataset (raw text + parsed)
// ============================================================
if (!fs.existsSync(STATE_FILE)) die(`not found: ${STATE_FILE}`);
const originalText = fs.readFileSync(STATE_FILE, 'utf8');
let current;
try {
  current = JSON.parse(originalText);
} catch (err) {
  die(`state_data.json is not valid JSON: ${err.message}`);
}
const codes = Object.keys(current);
if (codes.length !== 51) die(`expected 51 states in state_data.json, found ${codes.length}`);

const codeByName = new Map();
for (const code of codes) codeByName.set(current[code].name, code);

// ============================================================
// 5. Optional insurance vintage (hand-maintained, never auto-fetched)
// ============================================================
let insuranceValues = null;
let insuranceVintage = null;
if (INSURANCE_FILE) {
  const p = path.resolve(INSURANCE_FILE);
  if (!fs.existsSync(p)) die(`--insurance-file not found: ${p}`);
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (err) {
    die(`--insurance-file is not valid JSON: ${err.message}`);
  }
  insuranceValues = parsed.values ?? parsed;
  insuranceVintage = parsed.vintage ?? null;
  const missing = codes.filter((c) => !Number.isFinite(Number(insuranceValues[c])));
  const extra = Object.keys(insuranceValues).filter((k) => !codes.includes(k));
  if (missing.length) die(`--insurance-file is missing ${missing.length} state(s): ${missing.join(', ')}`);
  if (extra.length) die(`--insurance-file has unknown key(s): ${extra.join(', ')}`);
  say(`🛡️  Insurance vintage ${insuranceVintage ?? '(unlabelled)'} loaded from ${p}`);
}

// ============================================================
// 6. Resolve the new values and sanity-check them
// ============================================================
const csv = await loadCsv();
const zillow = parseZillowCsv(csv);
const vintageLabel = monthLabel(zillow.month);

/**
 * Series identity check. Zillow's ZHVI (typical home value) and rental CSVs use
 * the SAME header prefix as the median sale price file, and a home-value file
 * produces a plausible-looking handful of percent of drift — so numbers alone
 * cannot tell them apart. These three structural facts can:
 *   · the file name, and
 *   · the median sale price state file starts 2008-02 (ZHVI starts 2000-01), and
 *   · it carries ~225 monthly columns (ZHVI carries ~320).
 * Violations block --write unless --force is passed.
 */
const SERIES_FILE_RE = /median_sale_price/i;
const SERIES_EARLIEST = '2008-01-01';
const SERIES_MAX_MONTHS = 300;
const ZILLOW_EXPECTED = 'State_median_sale_price_uc_sfrcondo_month.csv (raw, all homes, monthly)';

const seriesFileName = LOCAL_FILE ? path.basename(LOCAL_FILE) : path.basename(new URL(SOURCE_URL).pathname);
const seriesWarnings = [];
// With --file the operator picked the name, so only the URL path is judged.
if (!LOCAL_FILE && !SERIES_FILE_RE.test(seriesFileName)) {
  seriesWarnings.push(`the URL ends in "${seriesFileName}", which does not match *median_sale_price*`);
}
if (zillow.firstDate < SERIES_EARLIEST) {
  seriesWarnings.push(`history starts ${zillow.firstDate}; the sale-price state file starts 2008-02 ` +
    '(earlier data = a home-value or rent series)');
}
if (zillow.monthCount > SERIES_MAX_MONTHS) {
  seriesWarnings.push(`${zillow.monthCount} monthly columns; the sale-price state file has ~225`);
}

const newPrice = new Map();
const ignoredRows = [];
for (const [name, value] of zillow.prices) {
  const code = codeByName.get(name);
  if (code) newPrice.set(code, value);
  else ignoredRows.push(name);
}

const notInCsv = codes.filter((c) => !newPrice.has(c));
if (notInCsv.length) {
  die(`the CSV has no row for ${notInCsv.length} state(s): ${notInCsv.map((c) => `${c} (${current[c].name})`).join(', ')}\n` +
      `   Fix the name in state_data.json, or check that the download is complete.`);
}
if (ignoredRows.length) {
  say(`   ℹ️  ignored ${ignoredRows.length} row(s) that are not in state_data.json: ${ignoredRows.join(', ')}`);
}

const implausible = codes.filter((c) => newPrice.get(c) < PRICE_FLOOR || newPrice.get(c) > PRICE_CEIL);
if (implausible.length) {
  die(`implausible values (outside ${money(PRICE_FLOOR)}–${money(PRICE_CEIL)}) for: ${implausible.join(', ')}`);
}

// ============================================================
// 7. Diff
// ============================================================
const rows = codes.map((code) => {
  const oldPrice = current[code].median_home_price;
  const newPriceValue = newPrice.get(code);
  const delta = newPriceValue - oldPrice;
  return {
    code,
    name: current[code].name,
    oldPrice,
    newPrice: newPriceValue,
    delta,
    pct: oldPrice ? (delta / oldPrice) * 100 : 0,
  };
});

const changed = rows.filter((r) => r.oldPrice !== r.newPrice);
const rises = changed.filter((r) => r.delta > 0).length;
const falls = changed.filter((r) => r.delta < 0).length;
const mean = (values) => values.reduce((s, v) => s + v, 0) / values.length;
const stats = (key) => {
  const values = rows.map((r) => r[key]);
  return { mean: Math.round(mean(values)), min: Math.min(...values), max: Math.max(...values) };
};
const before = stats('oldPrice');
const after = stats('newPrice');
const meanMovePct = before.mean ? ((after.mean - before.mean) / before.mean) * 100 : 0;
const biggestMovers = [...changed].sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct)).slice(0, 5);

note('');
note(`📊 Zillow median sale price — CSV month ${zillow.month} (${vintageLabel}), column ${zillow.monthPosition}/${zillow.monthCount}`);
note(`   ${zillow.rows} rows parsed · ${codes.length} states matched · ${changed.length} of ${codes.length} values differ`);
note('');
note('   state                                old          new       change');
note('   ----------------------------------------------------------------');
const pad = (s, n) => String(s).padEnd(n, ' ');
const padL = (s, n) => String(s).padStart(n, ' ');
const displayed = SHOW_ALL ? rows : changed;
if (!displayed.length) note('   (no differences — state_data.json already matches this vintage)');
for (const r of displayed) {
  note(`   ${pad(r.name, 32)} ${padL(money(r.oldPrice), 10)} ${padL(money(r.newPrice), 12)} ${padL(
    r.oldPrice === r.newPrice ? '—' : `${signed(r.delta)} (${r.pct >= 0 ? '+' : ''}${r.pct.toFixed(1)}%)`, 15)}`);
}
note('');
note(`   price mean  ${money(before.mean)}  ->  ${money(after.mean)}  (${meanMovePct >= 0 ? '+' : ''}${meanMovePct.toFixed(1)}%)`);
note(`   price range ${money(before.min)}–${money(before.max)}  ->  ${money(after.min)}–${money(after.max)}`);
note(`   moves: ${rises} up, ${falls} down, ${codes.length - changed.length} unchanged`);
if (biggestMovers.length) {
  note(`   largest: ${biggestMovers.map((r) => `${r.code} ${r.pct >= 0 ? '+' : ''}${r.pct.toFixed(1)}%`).join(', ')}`);
}

const meanIns = Math.round(mean(codes.map((c) => current[c].avg_annual_insurance)));
note(`   insurance (untouched): mean ${money(meanIns)}/yr — see --insurance-file to change the vintage`);

// ============================================================
// 8. Citation consistency — the label that must follow the vintage
// ============================================================
const CITATION_LABEL = /Zillow Research[^;]*?([A-Z][a-z]+ \d{4})/;
function citationLabelFrom(file) {
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) return null;
  const m = fs.readFileSync(abs, 'utf8').match(CITATION_LABEL);
  return m ? m[1] : null;
}

/** Files (src/ + scripts/) that still mention a given "Zillow ... <label>" string. */
function filesMentioningLabel(label) {
  const hits = [];
  const skip = new Set(['node_modules', 'dist', 'data', '.git', 'build']);
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (skip.has(entry.name)) continue;
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(p); continue; }
      if (!/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(entry.name)) continue;
      const text = fs.readFileSync(p, 'utf8');
      if (text.includes('Zillow') && text.includes(label)) hits.push(path.relative(ROOT, p).replace(/\\/g, '/'));
    }
  };
  for (const d of ['src', 'scripts']) {
    const abs = path.join(ROOT, d);
    if (fs.existsSync(abs)) walk(abs);
  }
  return hits;
}

const CITATION_FILES = [
  'scripts/generate-pages.ts',
  'src/App.tsx',
  'src/components/pages/CalculatorMethodologyPage.tsx',
];
const staleCitations = [];
for (const file of CITATION_FILES) {
  const label = citationLabelFrom(file);
  if (label && label !== vintageLabel) staleCitations.push({ file, label });
}
note('');
if (staleCitations.length) {
  note(`   ⚠️  citation month does not match the CSV vintage ${vintageLabel}:`);
  for (const s of staleCitations) note(`        ${s.file}: "${s.label}"`);
  const labels = [...new Set(staleCitations.map((s) => s.label))];
  note('      every file still carrying the old label:');
  for (const label of labels) {
    const hits = filesMentioningLabel(label);
    note(`        "${label}" -> ${hits.length ? hits.join(', ') : '(none found in src/ or scripts/)'}`);
  }
} else {
  note(`   ✅ citations already say "${vintageLabel}"`);
}

// ============================================================
// 9. Wrong-series guard (structural + numeric)
// ============================================================
if (seriesWarnings.length) {
  const why = seriesWarnings.map((w) => `      · ${w}`).join('\n');
  const fix = `   Expected file: ${ZILLOW_EXPECTED}\n` +
    `   Download:      ${ZILLOW_URL}`;
  if (WRITE && !FORCE) {
    die(`this CSV does not look like Zillow's median sale price series:\n${why}\n${fix}\n` +
        '   Re-run with --force only if you are certain the data is right.');
  }
  note('');
  note(`   ⚠️  this CSV may not be Zillow's median sale price series (use --force to write):\n${why}`);
  note(fix);
}

const bigMoves = changed
  .filter((r) => Math.abs(r.pct) > MAX_STATE_MOVE_PCT)
  .sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct));
const suspicious = bigMoves.length > 0 || Math.abs(meanMovePct) > MAX_MEAN_MOVE_PCT;
if (suspicious && changed.length) {
  const details = [
    bigMoves.length
      ? `      · ${bigMoves.length} state(s) move more than ${MAX_STATE_MOVE_PCT}%: ` +
        bigMoves.slice(0, 5).map((r) => `${r.code} ${r.pct.toFixed(1)}%`).join(', ')
      : null,
    Math.abs(meanMovePct) > MAX_MEAN_MOVE_PCT
      ? `      · the 51-state mean moves ${meanMovePct.toFixed(1)}% (limit ${MAX_MEAN_MOVE_PCT}%)`
      : null,
  ].filter(Boolean).join('\n');
  const advice =
    '   That is a red flag for the wrong Zillow series (SFR-only, condo-only, smoothed\n' +
    '   vs raw, value instead of sale price). Re-check --url and the CSV header, then\n' +
    '   re-run with --force only if the jump is genuinely real.';
  if (WRITE && !FORCE) die(`implausible change versus the current data:\n${details}\n${advice}`);
  note('');
  note(`   ⚠️  unusually large change:\n${details}`);
  note(advice.replace(/^ {3}/gm, '      '));
}

// ============================================================
// 10. Write (only with --write) — format preserving
// ============================================================
const LINE_RE =
  /^(\s*"([A-Z]{2})":\s*\{\s*"name":\s*"[^"]+",\s*"median_home_price":\s*)(\d+)(,\s*"property_tax_rate":\s*[\d.]+,\s*"closing_cost_pct":\s*[\d.]+,\s*"avg_annual_insurance":\s*)(\d+)(\s*\},?\s*)$/;

function buildUpdatedText() {
  let matched = 0;
  const text = originalText
    .split('\n')
    .map((line) => {
      const m = line.match(LINE_RE);
      if (!m) return line;
      const code = m[2];
      matched++;
      const price = newPrice.has(code) ? newPrice.get(code) : m[3];
      const insurance = insuranceValues ? Number(insuranceValues[code]) : m[5];
      return `${m[1]}${price}${m[4]}${insurance}${m[6]}`;
    })
    .join('\n');

  if (matched !== codes.length) {
    die(`expected ${codes.length} one-line state entries, matched ${matched} — refusing to write.\n` +
        `   state_data.json was reformatted (multi-line, reordered keys?). Keep one state per line.`);
  }

  let next;
  try {
    next = JSON.parse(text);
  } catch (err) {
    die(`the rewritten file would not be valid JSON: ${err.message}`);
  }
  for (const code of codes) {
    if (next[code].name !== current[code].name) die(`name drift on ${code} — refusing to write`);
    if (next[code].property_tax_rate !== current[code].property_tax_rate) die(`property_tax_rate drift on ${code} — refusing to write`);
    if (next[code].closing_cost_pct !== current[code].closing_cost_pct) die(`closing_cost_pct drift on ${code} — refusing to write`);
    if (next[code].median_home_price !== newPrice.get(code)) die(`median_home_price not applied for ${code}`);
    const expected = insuranceValues ? Number(insuranceValues[code]) : current[code].avg_annual_insurance;
    if (next[code].avg_annual_insurance !== expected) die(`avg_annual_insurance not applied for ${code}`);
  }
  return text;
}

if (WRITE) {
  if (!changed.length && !insuranceValues) {
    note('');
    note('   ✅ --write: nothing to do, state_data.json already matches this vintage.');
  } else {
    const nextText = buildUpdatedText();
    fs.writeFileSync(STATE_FILE, nextText, 'utf8');
    const nextLines = nextText.split('\n');
    const linesChanged = originalText.split('\n').filter((l, i) => l !== nextLines[i]).length;
    note('');
    note(`   ✍️  wrote ${path.relative(ROOT, STATE_FILE).replace(/\\/g, '/')} — ` +
      `${changed.length} price row(s)${insuranceValues ? `, insurance vintage ${insuranceVintage}` : ''}, ` +
      `${linesChanged} line(s) changed`);
  }
}

// ============================================================
// 11. Report file + exit code
// ============================================================
const reportPath = REPORT_PATH
  ? path.resolve(REPORT_PATH)
  : (WRITE ? path.join(CACHE_DIR, `refresh-${new Date().toISOString().slice(0, 10)}.txt`) : null);
if (reportPath) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${report.join('\n')}\n`, 'utf8');
  say(`📝 Report saved to ${path.relative(ROOT, reportPath).replace(/\\/g, '/')}`);
}

if (changed.length) {
  note('');
  note('   Next steps:');
  note('     1. npm run lint                     # tsc --noEmit');
  note('     2. npm run build                    # regenerate the 51 state pages + prerender');
  note('     3. git diff --stat src/data/state_data.json');
}

// Exit codes are set via process.exitCode (never process.exit) so stdout that
// is being piped to a file or CI log is flushed before the process ends.
if (CHECK && changed.length) {
  fs.writeSync(2, `\n❌ --check: state_data.json is stale — ${changed.length} of ${codes.length} states differ from ${vintageLabel}.\n`);
  process.exitCode = 2;
} else if (CHECK) {
  say(`\n✅ --check: state_data.json matches ${vintageLabel}.`);
} else {
  say(`\n✅ ${changed.length ? `${changed.length} state(s) differ from ${vintageLabel}` : `up to date with ${vintageLabel}`}` +
    `${WRITE ? '' : ' — dry run, add --write to apply'}.`);
}
