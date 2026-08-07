// Quick verification of prerendered HTML output quality (AdSense / SEO readiness).
const fs = require('node:fs');
const path = require('node:path');

const DIST = path.resolve(process.cwd(), 'dist');

function check(relPath) {
  const file = path.join(DIST, relPath, 'index.html');
  if (!fs.existsSync(file)) {
    console.log(`✗ ${relPath} -> MISSING`);
    return;
  }
  const html = fs.readFileSync(file, 'utf-8');
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || '(none)';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '(none)';
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/i) || [])[1] || '(none)';
  const ldJson = (html.match(/application\/ld\+json/g) || []).length;

  // If this is a React prerendered page use the #root body; standalone pages
  // (generated state/amount pages) have no #root, so use the whole <body>.
  const rootMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/i);
  const bodyArea = rootMatch ? rootMatch[1] : html.match(/<body>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const textLen = bodyArea.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
  const inlineTitleInBody = /<title/i.test(bodyArea);
  const h1 = (bodyArea.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '';
  const h1Text = h1.replace(/<[^>]+>/g, '').trim().slice(0, 80);

  console.log(`✓ ${relPath || '(home)'}`);
  console.log(`    title   : ${title}`);
  console.log(`    desc    : ${desc.slice(0, 90)}${desc.length > 90 ? '...' : ''}`);
  console.log(`    canon   : ${canonical}`);
  console.log(`    json-ld : ${ldJson} block(s)`);
  console.log(`    h1      : ${h1Text}`);
  console.log(`    textLen : ${textLen.toLocaleString()} chars | stray <title> in body: ${inlineTitleInBody}`);
  console.log('');
}

const routes = [
  '',
  'mortgage-calculator',
  'blog/credit-score-needed',
  'blog/amortization-schedule',
  'about',
  'contact',
  'mortgage-payment/florida',
  'mortgage-payment/400000',
];
for (const r of routes) check(r);
