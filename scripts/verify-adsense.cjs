/**
 * Final AdSense-compliance verification across all prerendered pages.
 * Checks: real <title>, meta description, canonical, JSON-LD schema,
 * non-trivial text content, and AdSense script presence.
 */
const fs = require('fs');
const path = require('path');

const routes = [
  'index.html', 'mortgage-calculator/index.html', 'affordability-calculator/index.html',
  'biweekly-mortgage-calculator/index.html', 'rent-vs-buy-calculator/index.html',
  'fire-impact-calculator/index.html', 'pmi-calculator/index.html',
  'refinance-calculator/index.html', 'closing-cost-calculator/index.html',
  'extra-payment-calculator/index.html', 'arm-vs-fixed-calculator/index.html',
  'blog/index.html', 'blog/how-to-use-calculator/index.html',
  'blog/amortization-schedule/index.html', 'blog/what-is-pmi/index.html',
  'blog/debt-to-income-ratio/index.html', 'blog/property-taxes-and-insurance/index.html',
  'about/index.html', 'contact/index.html', 'editorial-policy/index.html',
  'calculator-methodology/index.html', 'privacy/index.html', 'disclaimer/index.html',
];

let issues = 0;
for (const route of routes) {
  const file = path.join('dist', route);
  if (!fs.existsSync(file)) { console.log(`MISSING  ${route}`); issues++; continue; }
  const html = fs.readFileSync(file, 'utf8');

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const desc = html.match(/<meta name="description" content="([^"]*)"\/?>/i);
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"\/?>/i);
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;
  const adsense = html.includes('adsbygoogle.js') || html.includes('ca-pub-');
  // strip tags for text length
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                   .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                   .replace(/<[^>]+>/g, ' ')
                   .replace(/\s+/g, ' ').trim();

  const problems = [];
  if (!title || !title[1].trim()) problems.push('EMPTY/MISSING TITLE');
  if (!desc || desc[1].length < 50) problems.push('DESC<50');
  if (!canonical) problems.push('NO CANONICAL');
  if (jsonLdCount === 0) problems.push('NO JSON-LD');
  if (!adsense) problems.push('NO ADSENSE SCRIPT');
  if (text.length < 500) problems.push(`THIN CONTENT (${text.length} chars)`);

  const status = problems.length === 0 ? 'OK  ' : 'FAIL';
  if (problems.length) issues++;
  console.log(`${status} /${route}`);
  console.log(`     title: ${title ? JSON.stringify(title[1].trim().substring(0, 60)) : 'NONE'}`);
  console.log(`     text: ${text.length} chars | jsonld: ${jsonLdCount} | adsense: ${adsense} | ${problems.join(', ')}`);
}
console.log(`\n${issues === 0 ? 'ALL PASS ✓' : issues + ' page(s) with issues'}`);
