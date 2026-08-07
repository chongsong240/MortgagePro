const fs = require('fs');
const path = require('path');

// 1. Count blog routes in App.tsx
const app = fs.readFileSync('src/App.tsx', 'utf8');
const routes = [...app.matchAll(/path="\/blog\/([^"]+)"/g)].map((m) => m[1]);
console.log('=== App.tsx blog routes:', routes.length, '===');
routes.forEach((r) => console.log('  ', r));

// 2. Count blog directories in dist with index.html
const distBlog = path.join('dist', 'blog');
let distBlogs = [];
if (fs.existsSync(distBlog)) {
  distBlogs = fs.readdirSync(distBlog, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(distBlog, d.name, 'index.html')))
    .map((d) => d.name);
}
console.log('\n=== dist/blog prerendered pages:', distBlogs.length, '===');
distBlogs.forEach((r) => console.log('  ', r));

// 3. Count blog sitemap entries
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapBlogs = [...sitemap.matchAll(/mortgagepro\.io\/blog\/([^<]+)/g)].map((m) => m[1]);
console.log('\n=== sitemap blog entries:', sitemapBlogs.length, '===');

// 4. Count blog components in src/components/blog (excluding non-blog helpers)
const blogDir = path.join('src', 'components', 'blog');
const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith('.tsx'));
console.log('\n=== src/components/blog files:', blogFiles.length, '===');
blogFiles.forEach((f) => console.log('  ', f));

// 5. Homepage blog list count (blogPosts array in App.tsx)
const homeMatch = app.match(/const blogPosts = \[([\s\S]*?)\n  \];/);
if (homeMatch) {
  const posts = [...homeMatch[1].matchAll(/path: "([^"]+)"/g)];
  console.log('\n=== HomePage blogPosts count:', posts.length, '===');
}
const blogStubMatch = app.match(/const posts = \[([\s\S]*?)\n  \];/);
if (blogStubMatch) {
  const posts = [...blogStubMatch[1].matchAll(/path: "([^"]+)"/g)];
  console.log('=== BlogStub posts count:', posts.length, '===');
}

// 6. Which blog routes are missing from HomePage's "Latest Articles" list?
// NOTE: blogPosts uses `path: "/blog/xxx"`, route defs use `path="/blog/xxx"`.
const homeMatch2 = app.match(/const blogPosts = \[([\s\S]*?)\n  \];/);
if (homeMatch2) {
  const homePaths = [...homeMatch2[1].matchAll(/path: "\/blog\/([^"]+)"/g)].map((m) => m[1]);
  const allBlogRoutes = [...app.matchAll(/path="\/blog\/([^"]+)"/g)].map((m) => m[1]);
  const missing = [...new Set(allBlogRoutes)].filter((r) => !homePaths.includes(r));
  console.log('\n=== Blog routes MISSING from HomePage Latest Articles:', missing.length, '===');
  missing.forEach((r) => console.log('  MISSING:', r));
  console.log(missing.length === 0 ? '  ✓ All 20 blogs appear on the homepage' : '');
}

// 7. Verify dist/index.html contains all blog links (final built homepage)
const distIndex = path.join('dist', 'index.html');
if (fs.existsSync(distIndex)) {
  const html = fs.readFileSync(distIndex, 'utf8');
  const homeLinks = [...html.matchAll(/href="\/blog\/([^"]+)"/g)].map((m) => m[1]);
  const unique = [...new Set(homeLinks)];
  console.log('\n=== dist/index.html (built homepage) /blog/ links:', unique.length, '===');
  unique.forEach((u) => console.log('  ', u));
  const all = [
    'how-to-use-calculator', 'amortization-schedule', 'biweekly-payments', 'what-is-pmi',
    '30-vs-15-year', 'how-much-house-can-i-afford', 'monthly-payment-breakdown',
    'income-needed', 'why-mostly-interest', 'pay-off-early', 'fha-vs-conventional',
    'is-buying-worth-it-2026', 'can-i-buy-with-5-percent-down', 'credit-score-needed',
    'when-should-you-refinance', 'closing-costs-explained', 'arm-vs-fixed-arm',
    'rent-vs-buy-2026', 'property-taxes-and-insurance', 'debt-to-income-ratio',
  ];
  const missing = all.filter((r) => !unique.includes(r));
  console.log(missing.length === 0 ? '  ✓ Built homepage contains all 20 blogs' : '  STILL MISSING: ' + JSON.stringify(missing));
}

// 8. Compare titles of the 2 fixed blogs across HomePage, BlogStub, and route-meta
console.log('\n=== Title comparison: amortization-schedule & how-to-use-calculator ===');
function titlesFor(listBody) {
  const found = [];
  for (const m of listBody.matchAll(/title: "([^"]+)",\s*\n\s*path: "\/blog\/(amortization-schedule|how-to-use-calculator)"/g)) {
    found.push(m[2] + ' => ' + m[1]);
  }
  return found;
}
if (homeMatch) {
  console.log('--- HomePage blogPosts ---');
  titlesFor(homeMatch[1]).forEach((x) => console.log('  ' + x));
}
if (blogStubMatch) {
  console.log('--- BlogStub posts ---');
  titlesFor(blogStubMatch[1]).forEach((x) => console.log('  ' + x));
}
const routeMeta = fs.readFileSync('src/data/route-meta.ts', 'utf8');
console.log('--- src/data/route-meta.ts ---');
for (const m of routeMeta.matchAll(/path: '(\/blog\/[^']+)',\s*\n\s*title: "([^"]+)"/g)) {
  if (m[1] === '/blog/amortization-schedule' || m[1] === '/blog/how-to-use-calculator') {
    console.log('  ' + m[1] + ' => ' + m[2].replace(' | MortgagePro', ''));
  }
}

// 9. Full-site check: does every blog's route-meta SEO title match its /blog listing title?
console.log('\n=== Full-site title consistency (list title vs route-meta SEO title) ===');
if (blogStubMatch) {
  const listTitles = new Map(
    [...blogStubMatch[1].matchAll(/title: "([^"]+)",\s*\n\s*path: "(\/blog\/[^"]+)"/g)].map((m) => [m[2], m[1]])
  );
  for (const m of routeMeta.matchAll(/path: '(\/blog\/[^']+)',\s*\n\s*title: "([^"]+)"/g)) {
    const listT = listTitles.get(m[1]);
    if (!listT) continue;
    const metaT = m[2].replace(' | MortgagePro', '');
    if (listT === metaT) {
      console.log('  ✓ same  ' + m[1]);
    } else {
      console.log('  ✗ DIFF  ' + m[1]);
      console.log('      list: ' + listT);
      console.log('      meta: ' + metaT);
    }
  }
}

// 10. What <title> did the built dist pages actually render?
console.log('\n=== Built dist/blog/<slug>/index.html <title> for the 2 fixed blogs ===');
for (const slug of ['amortization-schedule', 'how-to-use-calculator']) {
  const p = path.join('dist', 'blog', slug, 'index.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/<title>([^<]*)<\/title>/);
    console.log('  ' + slug + ' => ' + (m ? m[1] : '(no title)'));
  }
}





