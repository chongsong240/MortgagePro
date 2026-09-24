/**
 * ============================================================
 * Build of src/data/county_data.json — the "largest county per state" facts
 * that every generated state page shows alongside its statewide numbers.
 *
 * WHY
 * ---
 * All 51 state pages quote the same three statewide sources (Zillow sale
 * prices, Tax Foundation tax rates, NAIC insurance), which makes them read as
 * templated. This script adds a second, independent U.S. Census Bureau
 * dataset per state: the largest county's owner-reported median home value,
 * the median real estate taxes those owners actually paid, their median
 * household income, and the county's population.
 *
 * WHAT IT DOES
 * ------------
 *  1. Pulls every county in the country in ONE request to one pinned ACS
 *     5-year release — `--year`, default 2024, i.e. the 2020-2024 vintage the
 *     generated pages print. The year is pinned on purpose: the release has to
 *     be bumped by hand (--year 2025 for 2021-2025) so a new vintage can never
 *     reach the site unnoticed.
 *
 *       https://api.census.gov/data/<year>/acs/acs5
 *         ?get=NAME,B01003_001E,B25077_001E,B25103_001E,B19013_001E,...
 *         &for=county:*&key=$CENSUS_API_KEY
 *
 *     The nationwide county pull is deliberate: a state-level response would
 *     be 51 rows and would still look plausible, so the row count doubles as
 *     a wrong-geography guard (see GUARDS below).
 *
 *  2. Picks for each state the county (or county equivalent — the District of
 *     Columbia is one) with the highest total population, and derives the
 *     implied effective property tax rate as
 *
 *       median real estate taxes paid / median home value
 *
 *     a median-of-medians view. That is NOT the statewide Tax Foundation rate
 *     the pages already cite; the page copy says which measure is which.
 *
 *  3. Writes src/data/county_data.json: a `_meta` block carrying the exact
 *     citation and vintage strings the pages must print, plus one line per
 *     state — the same one-entry-per-line style as state_data.json, so future
 *     refreshes stay reviewable in git.
 *
 * API KEY
 * -------
 * Read from process.env.CENSUS_API_KEY (or --key) and never written to disk.
 * Do not put a key in this file or in county_data.json: both are committed.
 * The key is required for a live pull: api.census.gov answers a keyless request
 * with a 302 to /data/missing_key.html, an HTML page the fetch below reports as
 * such instead of letting response.json() die on "Unexpected token '<'". Signup
 * is free and instant: https://api.census.gov/data/key_signup.html
 *
 * GUARDS (a wrong dataset must not reach the site)
 * -----------------------------------------------
 *   geography    fewer than 2500 county rows => the query answered at the
 *                wrong level; --write is refused.
 *   sentinels    ACS encodes "estimate not available" as a large negative
 *                value (-888888888 and friends). Those become null, and the
 *                four required measures must be present for the chosen county.
 *   plausibility home value 20k..5M, population 1k..20M, implied tax rate
 *                0.02%..6%, median income 5k..1M. A required measure outside
 *                its range (or missing) blocks --write unless --force.
 *   drift        against the county_data.json already in the repo: no state's
 *                median home value may move more than 25%, and no state's
 *                chosen county may change, unless --force is passed after a
 *                human has looked at the diff.
 *   vintage      every measure comes from the pinned release year, which is
 *                the year printed in _meta.vintage.
 *
 * USAGE
 * -----
 *   node scripts/fetch-county-data.mjs                    # dry run, print rows
 *   node scripts/fetch-county-data.mjs --all              # all 51 rows
 *   node scripts/fetch-county-data.mjs --write            # apply
 *   node scripts/fetch-county-data.mjs --check            # CI: exit 2 if stale
 *   node scripts/fetch-county-data.mjs --offline          # cache only, no net
 *   node scripts/fetch-county-data.mjs --year 2025        # next release, 2021-2025
 *   node scripts/fetch-county-data.mjs --file <json>      # local payload
 *   node scripts/fetch-county-data.mjs --report <path>    # save the table
 *   node scripts/fetch-county-data.mjs --quiet            # report file only
 *   node scripts/fetch-county-data.mjs --write --force    # override a guard
 *   node scripts/fetch-county-data.mjs --refresh          # ignore the cache
 *
 * CACHE
 * -----
 * Raw payloads live in data/census/ (gitignored: a local audit trail, not a
 * site asset). A cached payload is reused when one is present; pass --refresh
 * to ignore the cache and refetch, or --offline to forbid network calls
 * entirely — that is how this script runs in sandboxes and CI jobs with
 * restricted outbound HTTPS.
 *
 * EXIT CODES: 0 = up to date or written, 1 = error, 2 = --check found drift.
 * ============================================================
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const STATE_FILE = path.join(ROOT, 'src/data/state_data.json');
const COUNTY_FILE = path.join(ROOT, 'src/data/county_data.json');
const CACHE_DIR = path.join(ROOT, 'data/census');
const API_BASE = 'https://api.census.gov/data';

// ============================================================
// 1. Arguments + helpers
// ============================================================
const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const valueOf = (flag, fallback = '') => {
  const at = args.indexOf(flag);
  return at >= 0 && args[at + 1] && !args[at + 1].startsWith('--') ? args[at + 1] : fallback;
};

const YEAR = String(valueOf('--year', '2024')).trim();
const WRITE = has('--write');
const CHECK = has('--check');
const OFFLINE = has('--offline');
const FORCE = has('--force');
const REFRESH = has('--refresh');
const QUIET = has('--quiet');
const SHOW_ALL = has('--all');
const REPORT_PATH = valueOf('--report');
const LOCAL_FILE = valueOf('--file');
const KEY = String(process.env.CENSUS_API_KEY || valueOf('--key')).trim();

const report = [];
const say = (msg = '') => { if (!QUIET) console.log(msg); report.push(msg); };
const note = (msg = '') => { if (!QUIET) console.log(msg); report.push(msg); };
const warn = (msg) => { console.warn(`⚠️  ${msg}`); report.push(`WARN ${msg}`); };
const die = (msg) => {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
};

// ============================================================
// 2. What we ask the Census for
// ============================================================
/**
 * ACS 5-year detail-table variables keyed by the field name each one becomes
 * in county_data.json. The first four are required — they are the measures
 * the state pages print. The rest are stored so a future page section does
 * not need a new fetch.
 */
const MEASURES = {
  population: 'B01003_001E',               // Total population
  median_home_value: 'B25077_001E',        // Median value, owner-occupied units
  median_real_estate_taxes: 'B25103_001E', // Median real estate taxes paid (annual)
  median_household_income: 'B19013_001E',  // Median household income, past 12 months
  median_gross_rent: 'B25064_001E',        // Median gross rent
  median_owner_costs: 'B25088_001E',       // Median selected monthly owner costs
  owner_occupied: 'B25003_002E',           // Occupied units: owner occupied
  renter_occupied: 'B25003_003E',          // Occupied units: renter occupied
};
const REQUIRED = ['population', 'median_home_value', 'median_real_estate_taxes', 'median_household_income'];
const OPTIONAL = Object.keys(MEASURES).filter((k) => !REQUIRED.includes(k));
const VARIABLES = Object.values(MEASURES);
/** Detail tables as cited on the page, in measure order. */
const TABLE_LIST = ['B01003', 'B25077', 'B25103', 'B19013'];
/** En dash, exactly as the footer of every generated page prints it. */
const VINTAGE = `${Number(YEAR) - 4}\u2013${YEAR} ACS 5-year estimates`;

/** Plausibility envelope: [min, max] per measure, WARN outside, STOP outside hard. */
const RANGE = {
  population: [1000, 20000000],
  median_home_value: [20000, 5000000],
  median_real_estate_taxes: [0, 100000],
  median_household_income: [5000, 1000000],
  median_gross_rent: [200, 6000],
  median_owner_costs: [200, 10000],
  owner_occupied: [0, 20000000],
  renter_occupied: [0, 20000000],
  effective_tax_rate: [0.0002, 0.06],
};
const NATIONAL_COUNTY_CACHE = path.join(CACHE_DIR, `county-${YEAR}-acs5.json`);
const stateCachePath = (code) => path.join(CACHE_DIR, `state-${code}.json`);

/**
 * ACS estimates arrive as strings; "estimate not available" arrives as a large
 * negative sentinel (-888888888 etc) rather than null. Both become null so the
 * guards below can tell "missing" from "zero".
 */
function toNumber(raw) {
  if (raw === null || raw === undefined) return null;
  const text = String(raw).trim();
  if (text === '' || text === 'null') return null;
  const value = Number(text);
  if (!Number.isFinite(value)) return null;
  if (value <= -100000) return null;
  return value;
}

/** Short county name: "Harris County, Texas" -> "Harris County". */
function shortCountyName(fullName) {
  return String(fullName).split(',')[0].trim();
}

/**
 * What kind of geography the Census answered with. ACS reports "county
 * equivalents", and six states do not use the word County: Louisiana has
 * parishes, Alaska boroughs / municipalities / census areas, Connecticut
 * planning regions (its counties were retired in 2022), and the District of
 * Columbia is its own equivalent. The page copy has to say which one a state
 * uses, so the kind is stored next to the numbers instead of being guessed
 * from the name at render time.
 */
function geoKindOf(countyName, stateName) {
  if (countyName.endsWith(' County')) return 'county';
  if (countyName.endsWith(' Parish')) return 'parish';
  if (countyName.endsWith(' Planning Region')) return 'planning_region';
  if (countyName.endsWith(' Census Area')) return 'census_area';
  if (countyName.endsWith(' Municipality')) return 'municipality';
  if (countyName.endsWith(' City and Borough')) return 'city_and_borough';
  if (countyName.endsWith(' Borough')) return 'borough';
  if (countyName === stateName) return 'district';
  return 'county_equivalent';
}

const rel = (file) => path.relative(ROOT, file).replace(/\\/g, '/');

/** Paths that --offline may read, in preference order: one nationwide pull, then per state. */
function readJson(file, label) {
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (err) {
    die(`${label}: ${rel(file)} is not valid JSON (${err.message}).\n   Delete the file and re-run to refetch.`);
  }
}

// ============================================================
// 3. Read the raw payload (local file -> cache -> network)
// ============================================================
/** Columns a county-level ACS response must contain, on top of the measures. */
const KEY_COLUMNS = ['NAME', 'state', 'county'];

/**
 * The Census API answers as an array of arrays: row 0 is the header, then one
 * row per geography. This validates that shape and indexes the header once, so
 * the row loop below never searches strings.
 */
function parseAcsPayload(payload, label) {
  if (!Array.isArray(payload) || payload.length < 2) {
    die(`${label}: expected the ACS array-of-arrays payload, got ` +
        `${Array.isArray(payload) ? `${payload.length} row(s)` : typeof payload}.`);
  }
  if (!Array.isArray(payload[0])) die(`${label}: header row is not an array.`);
  const header = payload[0].map(String);
  const at = {};
  for (const column of [...KEY_COLUMNS, ...VARIABLES]) {
    const found = header.indexOf(column);
    if (found < 0) {
      die(`${label}: the response has no "${column}" column.\n` +
          `   Header: ${header.join(', ')}\n` +
          `   Is ${YEAR} a released ACS 5-year vintage? Check https://api.census.gov/data/${YEAR}/acs/acs5.html`);
    }
    at[column] = found;
  }
  return { header, at, rows: payload.slice(1) };
}

/**
 * Flattens every payload into one list of counties. Keyed by the API's own
 * state+county FIPS pair, so a county can never be counted twice when both a
 * nationwide pull and per-state caches are present.
 */
function collectCounties(parts) {
  const counties = new Map();
  let duplicates = 0;
  for (const { label, parsed } of parts) {
    for (const row of parsed.rows) {
      if (!Array.isArray(row)) die(`${label}: a data row is not an array.`);
      const state = String(row[parsed.at.state]).padStart(2, '0');
      const county = String(row[parsed.at.county]);
      const fips = `${state}${county}`;
      if (counties.has(fips)) { duplicates++; continue; }
      const record = { fips, state_fips: state, county_fips: county, name: String(row[parsed.at.NAME]) };
      for (const [field, column] of Object.entries(MEASURES)) {
        record[field] = toNumber(row[parsed.at[column]]);
      }
      counties.set(fips, record);
    }
  }
  return { counties, duplicates };
}

/** Cache first, then — unless --offline — one nationwide API call. */
async function loadParts() {
  const parts = [];
  const sources = [];

  if (LOCAL_FILE) {
    const file = path.resolve(LOCAL_FILE);
    const payload = readJson(file, '--file');
    if (!payload) die(`--file: ${file} does not exist.`);
    sources.push(rel(file));
    parts.push({ label: rel(file), parsed: parseAcsPayload(payload, rel(file)) });
    return { parts, sources };
  }

  const codes = Object.keys(readJson(STATE_FILE, 'state_data.json'));
  if (!REFRESH) {
    const cachedNational = readJson(NATIONAL_COUNTY_CACHE, 'cache');
    if (cachedNational) {
      sources.push(rel(NATIONAL_COUNTY_CACHE));
      parts.push({ label: rel(NATIONAL_COUNTY_CACHE), parsed: parseAcsPayload(cachedNational, rel(NATIONAL_COUNTY_CACHE)) });
      return { parts, sources };
    }

    // Per-state caches: the same query split by state (how a shell with a very
    // short command window fetches it). Merged here so both cache layouts feed
    // the same code path.
    for (const code of codes) {
      const file = stateCachePath(code);
      const payload = readJson(file, 'cache');
      if (!payload) continue;
      sources.push(rel(file));
      parts.push({ label: rel(file), parsed: parseAcsPayload(payload, rel(file)) });
    }
  }
  if (parts.length || OFFLINE) return { parts, sources };

  if (typeof fetch !== 'function') {
    die(`this Node has no global fetch (needs Node 18+), and no cached payload was found.\n` +
        `   Pass --file <acs.json> or run on a newer Node.`);
  }
  const url = `${API_BASE}/${YEAR}/acs/acs5?get=${encodeURIComponent(['NAME', ...VARIABLES].join(','))}&for=${encodeURIComponent('county:*')}` +
    (KEY ? `&key=${encodeURIComponent(KEY)}` : '');
  say(`🌐 GET ${API_BASE}/${YEAR}/acs/acs5?get=NAME,${VARIABLES.slice(0, 3).join(',')},…&for=county:*` +
    `${KEY ? '&key=***' : ' (no CENSUS_API_KEY set)'}`);
  let response;
  try {
    response = await fetch(url, { headers: { accept: 'application/json' } });
  } catch (err) {
    die(`the Census request failed: ${err.message}\n` +
        `   Sandboxed/offline shell? Re-run with --offline to read data/census/ instead.`);
  }
  if (!response.ok) {
    die(`the Census API answered ${response.status} ${response.statusText}.\n` +
        `   ${response.status === 404 ? `No ACS 5-year release for ${YEAR} — check https://api.census.gov/data/${YEAR}/acs/acs5.html` : 'Check the key, or retry later.'}`);
  }
  // The API does not always answer with JSON: a keyless request is redirected to
  // /data/missing_key.html, and a tired tier answers with a maintenance page.
  // Left alone, response.json() fails as a bare "Unexpected token '<'" — which
  // says nothing about the missing key, and in CI nothing about the secret.
  const contentType = response.headers.get('content-type') || '(no content type)';
  if (!contentType.includes('json')) {
    const body = (await response.text()).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
    die(`the Census API answered ${response.status} with ${contentType}, not JSON.\n` +
        `   ${response.url.includes('missing_key')
          ? `That is the missing-key page (${response.url}): the API turns keyless requests away, so ` +
            `set CENSUS_API_KEY (free signup: https://api.census.gov/data/key_signup.html).`
          : `Body starts: ${body || '(empty)'}`}`);
  }
  let payload;
  try {
    payload = await response.json();
  } catch (err) {
    die(`the Census API body is not valid JSON (${err.message}) — most often a rate-limit or ` +
        `maintenance page. Retry later, or set CENSUS_API_KEY.`);
  }
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  fs.writeFileSync(NATIONAL_COUNTY_CACHE, JSON.stringify(payload), 'utf8');
  note(`💾 cached ${rel(NATIONAL_COUNTY_CACHE)} (${(fs.statSync(NATIONAL_COUNTY_CACHE).size / 1024).toFixed(0)} KB)`);
  if (!KEY) warn('no CENSUS_API_KEY in the environment — the keyless tier is rate limited to a few hundred calls a day (this run needs one).');
  sources.push(rel(NATIONAL_COUNTY_CACHE));
  parts.push({ label: rel(NATIONAL_COUNTY_CACHE), parsed: parseAcsPayload(payload, rel(NATIONAL_COUNTY_CACHE)) });
  return { parts, sources };
}

// ============================================================
// 4. Pick the largest county per state and derive the tax rate
// ============================================================
/** State postal code -> Census state FIPS, the key the ACS response carries. */
const STATE_FIPS = {
  AL: '01', AK: '02', AZ: '04', AR: '05', CA: '06', CO: '08', CT: '09', DE: '10', DC: '11',
  FL: '12', GA: '13', HI: '15', ID: '16', IL: '17', IN: '18', IA: '19', KS: '20', KY: '21',
  LA: '22', ME: '23', MD: '24', MA: '25', MI: '26', MN: '27', MS: '28', MO: '29', MT: '30',
  NE: '31', NV: '32', NH: '33', NJ: '34', NM: '35', NY: '36', NC: '37', ND: '38', OH: '39',
  OK: '40', OR: '41', PA: '42', RI: '44', SC: '45', SD: '46', TN: '47', TX: '48', UT: '49',
  VT: '50', VA: '51', WA: '53', WV: '54', WI: '55', WY: '56',
};

const STATE_DATA = readJson(STATE_FILE, 'state_data.json');
const CODES = Object.keys(STATE_DATA);

/** Highest population wins; ties break on FIPS so the pick is deterministic. */
function pickLargestCounties(counties) {
  const picked = {};
  const missing = [];
  for (const code of CODES) {
    const fips = STATE_FIPS[code];
    if (!fips) die(`STATE_FIPS has no entry for ${code} — add one before running.`);
    const inState = [...counties.values()].filter((record) => record.state_fips === fips);
    if (inState.length === 0) { missing.push(code); continue; }
    inState.sort((a, b) => (b.population ?? -1) - (a.population ?? -1) || a.fips.localeCompare(b.fips));
    picked[code] = inState[0];
  }
  return { picked, missing };
}

/**
 * Turns the picked counties into the rows county_data.json stores. Every check
 * that can be made from a single row happens here and is collected rather than
 * thrown, so one run shows every problem at once.
 */
function buildRows(picked) {
  const rows = {};
  const problems = [];
  const warnings = [];

  for (const code of CODES) {
    const stateName = STATE_DATA[code].name;
    const county = picked[code];
    if (!county) { problems.push(`${code}: no county row in the payload.`); continue; }
    const label = `${code} ${county.name}`;

    // The ACS NAME always ends in ", <State>". If it does not, our FIPS mapping
    // is wrong and the whole row is suspect — so this is a hard problem.
    if (!county.name.endsWith(`, ${stateName}`)) {
      problems.push(`${label}: NAME does not end in ", ${stateName}" — check STATE_FIPS.`);
    }

    const value = county.median_home_value;
    const taxes = county.median_real_estate_taxes;
    const effective = value !== null && value > 0 && taxes !== null ? taxes / value : null;

    for (const field of REQUIRED) {
      if (county[field] === null) {
        problems.push(`${label}: ${field} (${MEASURES[field]}) is not published for this county in ${VINTAGE}.`);
      }
    }

    for (const field of [...REQUIRED, 'effective_tax_rate']) {
      const measured = field === 'effective_tax_rate' ? effective : county[field];
      if (measured === null) continue;
      const [min, max] = RANGE[field];
      if (measured < min || measured > max) {
        warnings.push(`${label}: ${field} = ${measured} falls outside the plausible ${min}..${max} band.`);
      }
    }

    const countyName = shortCountyName(county.name);
    const geoKind = geoKindOf(countyName, stateName);
    rows[code] = {
      county: countyName,
      county_full: county.name,
      geo_kind: geoKind,
      // True wherever "county" is not the local word for it (LA parishes, AK
      // boroughs, CT planning regions, DC): the page copy switches wording.
      county_equivalent: geoKind !== 'county',
      fips: county.fips,
      population: county.population,
      median_home_value: value,
      median_real_estate_taxes: taxes,
      effective_tax_rate: effective === null ? null : Math.round(effective * 1e6) / 1e6,
      median_household_income: county.median_household_income,
      median_gross_rent: county.median_gross_rent,
      median_owner_costs: county.median_owner_costs,
      owner_occupied: county.owner_occupied,
      renter_occupied: county.renter_occupied,
    };
  }

  return { rows, problems, warnings };
}

// ============================================================
// 5. Guards
// ============================================================
const existingFile = fs.existsSync(COUNTY_FILE) ? readJson(COUNTY_FILE, 'county_data.json') : null;
const existingMeta = existingFile && existingFile._meta ? existingFile._meta : null;
const existingRows = existingFile
  ? Object.fromEntries(Object.entries(existingFile).filter(([key]) => key !== '_meta'))
  : null;

/**
 * Drift guard: a new ACS vintage should move median home values by a few
 * percent, not repaint the map. Anything bigger — or a different largest
 * county — needs a human to look at the diff and pass --force.
 */
function checkDrift(rows) {
  if (!existingRows) return [];
  const drifted = [];
  for (const code of Object.keys(existingRows)) {
    const before = existingRows[code];
    const after = rows[code];
    if (!after) { drifted.push(`${code}: missing from the new build.`); continue; }
    if (before.fips !== after.fips) {
      drifted.push(`${code}: largest county changed ${before.county} (${before.fips}) -> ${after.county} (${after.fips})`);
    }
    if (before.median_home_value && after.median_home_value) {
      const move = after.median_home_value / before.median_home_value - 1;
      if (Math.abs(move) > 0.25) {
        drifted.push(`${code}: median home value ${before.median_home_value} -> ${after.median_home_value} (${(move * 100).toFixed(1)}%)`);
      }
    }
  }
  return drifted;
}

// ============================================================
// 6. Build the file
// ============================================================
/** Table number -> the measure it carries, as the page cites it. */
const TABLE_LABELS = {
  B01003: 'population',
  B25077: 'median home value',
  B25103: 'median real estate taxes paid',
  B19013: 'median household income',
};

/**
 * The exact provenance sentence every state page prints. Built from the same
 * constants as the numbers below it, so the citation can never name a vintage
 * or a table that the data did not come from — and the verifier can grep for
 * this string verbatim in dist/.
 */
const CITATION =
  `U.S. Census Bureau, American Community Survey ${VINTAGE.replace(' ACS ', ' ')} ` +
  `(${TABLE_LIST.map((table) => `${table} ${TABLE_LABELS[table]}`).join('; ')}).`;

function buildMeta(retrieved, sources) {
  return {
    title: 'Largest county per state — U.S. Census Bureau ACS county estimates',
    citation: CITATION,
    vintage: VINTAGE,
    year: Number(YEAR),
    source: 'U.S. Census Bureau, American Community Survey (ACS) 5-year estimates',
    api: `${API_BASE}/${YEAR}/acs/acs5`,
    query: `get=NAME,${VARIABLES.join(',')}&for=county:*`,
    tables: MEASURES,
    geography: 'county (county equivalent where a state has none, e.g. the District of Columbia)',
    selection: 'largest county per state by total population (B01003_001E)',
    derived: { effective_tax_rate: 'median_real_estate_taxes / median_home_value' },
    confidence: '5-year survey estimates of what owners report, not current sale prices — never compare these to the Zillow median sale price printed on the same page.',
    cache: `${rel(CACHE_DIR)} (${sources.length} payload${sources.length === 1 ? '' : 's'})`,
    retrieved,
    generator: 'scripts/fetch-county-data.mjs',
  };
}

/** One state per line, like state_data.json, so refreshes stay reviewable in git. */
function buildFileText(meta, rows) {
  const codes = CODES.filter((code) => rows[code]);
  const lines = codes.map((code, index) =>
    `  ${JSON.stringify(code)}: ${JSON.stringify(rows[code])}${index < codes.length - 1 ? ',' : ''}`);
  return `{\n  "_meta": ${JSON.stringify(meta)},\n${lines.join('\n')}\n}\n`;
}

// ============================================================
// 7. Report
// ============================================================
const money = (value) => (value === null || value === undefined ? '—' : `$${value.toLocaleString('en-US')}`);

function printTable(rows) {
  const codes = CODES.filter((code) => rows[code]);
  const shown = SHOW_ALL ? codes : codes.slice(0, 12);
  say('');
  say('   st  largest county              population   median value   taxes/yr   eff rate   median income');
  say(`   ${'-'.repeat(98)}`);
  for (const code of shown) {
    const row = rows[code];
    say('   ' + [
      code.padEnd(3),
      row.county.padEnd(25),
      String(row.population ?? '—').padStart(11),
      money(row.median_home_value).padStart(14),
      money(row.median_real_estate_taxes).padStart(11),
      (row.effective_tax_rate === null ? '—' : `${(row.effective_tax_rate * 100).toFixed(2)}%`).padStart(10),
      money(row.median_household_income).padStart(15),
    ].join(' '));
  }
  if (shown.length < codes.length) {
    say(`   … ${codes.length - shown.length} more row(s) — pass --all to print every state.`);
  }
  const odd = codes
    .filter((code) => rows[code].geo_kind !== 'county')
    .map((code) => `${code} ${rows[code].county} (${rows[code].geo_kind})`);
  if (odd.length) say(`   Non-county geographies: ${odd.join(', ')}`);
}

/**
 * Cross-source sanity: the two measures on a state page come from different
 * vendors, so a county median that is 4x the statewide sale price would mean
 * something is wrong. Informational only — they are different measures.
 */
function printComparisons(rows) {
  const ratios = CODES
    .filter((code) => rows[code] && rows[code].median_home_value && STATE_DATA[code].median_home_price)
    .map((code) => ({ code, ratio: rows[code].median_home_value / STATE_DATA[code].median_home_price }))
    .sort((a, b) => b.ratio - a.ratio);
  if (!ratios.length) return;
  const show = (list) => list.map((r) => `${r.code} ${Math.round(r.ratio * 100)}%`).join(', ');
  say('');
  say('   County median home value as a share of the statewide Zillow median sale price:');
  say(`     highest  ${show(ratios.slice(0, 3))}`);
  say(`     lowest   ${show([...ratios.slice(-3)].reverse())}`);
  say('     (Different measures from different vendors — for a sanity check, not for the page copy.)');
}

// ============================================================
// 8. Run
// ============================================================
async function main() {
  say(`📊 Census ACS county build — ${VINTAGE} (pinned year ${YEAR})`);

  const { parts, sources } = await loadParts();
  if (!parts.length) {
    die(`no ACS payload to read.\n` +
        `   Looked for ${rel(NATIONAL_COUNTY_CACHE)} and ${rel(stateCachePath('XX'))}, and ` +
        `${OFFLINE ? '--offline forbids the network call' : 'the network call was not attempted'}.\n` +
        `   Drop the cached JSON in data/census/, pass --file <acs.json>, or run without --offline.`);
  }
  say(`📥 read ${parts.length} payload(s): ${sources.slice(0, 3).join(', ')}` +
    `${sources.length > 3 ? `, +${sources.length - 3} more` : ''}`);

  const { counties, duplicates } = collectCounties(parts);
  if (duplicates) note(`ℹ️  ${duplicates} duplicate county row(s) collapsed by FIPS.`);

  // Wrong-geography guard: a state-level answer is ~51 rows and would still
  // look plausible, so anything well under the real county count is refused.
  if (counties.size < 2500) {
    const message = `only ${counties.size} county rows — a nationwide ACS county pull returns 3000+. ` +
      `This payload looks like the wrong geography.`;
    if (WRITE && !FORCE) die(message);
    warn(message);
  }
  note(`🗺️  ${counties.size} counties loaded (a county equivalent counts as one).`);

  const { picked, missing } = pickLargestCounties(counties);
  if (missing.length) die(`no county row for: ${missing.join(', ')} — is every STATE_FIPS entry correct?`);

  const { rows, problems, warnings } = buildRows(picked);
  for (const message of warnings) warn(message);

  if (problems.length) {
    say('');
    for (const message of problems) say(`   ✖ ${message}`);
    if (WRITE && !FORCE) {
      die(`${problems.length} problem(s) above — refusing to write county_data.json. ` +
          `Fix the source, or pass --force once you have checked each one.`);
    }
    warn(`${problems.length} problem(s) above — continuing only because --force is set.`);
  }
  if (CODES.some((code) => !rows[code])) die('some states have no row — refusing to continue.');

  // Up to date = same vintage AND byte-identical rows (key order is fixed by
  // buildRows, so a plain stringify compare is a valid staleness test).
  const stale = !existingMeta
    || existingMeta.year !== Number(YEAR)
    || JSON.stringify(existingRows) !== JSON.stringify(rows);

  printTable(rows);
  printComparisons(rows);
  say('');

  if (!existingFile) {
    note(`   ℹ️  ${rel(COUNTY_FILE)} does not exist yet — this build will create it.`);
  } else if (existingMeta && existingMeta.year !== Number(YEAR)) {
    note(`   🆕 newer vintage available: ${existingMeta.vintage} -> ${VINTAGE}`);
  } else if (!stale) {
    note(`   ✅ already up to date with ${VINTAGE} (${CODES.length} rows).`);
  } else {
    note(`   ✏️  the same vintage rebuilds differently — review the table above before --write.`);
  }

  const drifted = checkDrift(rows);
  if (drifted.length) {
    say('');
    say(`   Drift against the ${rel(COUNTY_FILE)} currently in the repo:`);
    for (const message of drifted) say(`   ⚠️  ${message}`);
    if (WRITE && !FORCE) {
      die(`${drifted.length} drift(s) above — refusing to write. ` +
          `Re-run with --force after reviewing the list.`);
    }
  }

  if (WRITE) {
    const text = buildFileText(buildMeta(new Date().toISOString().slice(0, 10), sources), rows);
    fs.mkdirSync(path.dirname(COUNTY_FILE), { recursive: true });
    fs.writeFileSync(COUNTY_FILE, text, 'utf8');
    say('');
    say(`   ✍️  wrote ${rel(COUNTY_FILE)} — ${CODES.length} state rows, ${(Buffer.byteLength(text) / 1024).toFixed(0)} KB`);
    say('');
    say('   Next steps:');
    say('     1. npm run lint                             # tsc --noEmit');
    say('     2. npm run build                            # regenerate the 51 state pages');
    say(`     3. node data/gsc/_x/_verify-county.mjs      # re-derive from data/census/ and diff dist/`);
  }

  if (REPORT_PATH) {
    const file = path.resolve(REPORT_PATH);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `${report.join('\n')}\n`, 'utf8');
    console.log(`📝 Report saved to ${rel(file)}`);
  }

  // Exit codes are set via process.exitCode (never process.exit) so stdout that
  // is being piped to a file or a CI log is flushed before the process ends.
  if (CHECK && stale) {
    fs.writeSync(2, `\n❌ --check: county_data.json is stale — it is not the ${VINTAGE} build.\n`);
    process.exitCode = 2;
  } else if (CHECK) {
    say(`\n✅ --check: county_data.json matches ${VINTAGE}.`);
  } else {
    say(`\n✅ ${stale
      ? `${counties.size} counties -> ${CODES.length} state rows`
      : `up to date with ${VINTAGE}`}${WRITE ? '' : ' — dry run, add --write to apply'}.`);
  }
}

main().catch((err) => die(err && err.stack ? err.stack : String(err)));
