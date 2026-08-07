/**
 * ============================================================
 * Build-time prerenderer for MortgagePro.
 *
 * Problem: the site is a client-side-only React SPA. When Googlebot
 * or the AdSense review crawls any route it receives a nearly-empty
 * <div id="root"></div> shell — all content (blog articles,
 * calculators, FAQs) renders only after JavaScript executes. That is
 * the classic "low value / thin content" signal that triggers AdSense
 * rejection.
 *
 * Fix: render every SPA route to a complete static HTML file at build
 * time with ReactDOMServer.renderToString. Crawlers then see the full
 * article/calculator text, headings, FAQ answers and inline JSON-LD
 * without executing JavaScript. The client still hydrates/mounts on
 * top of the same markup for interactivity.
 *
 * Run AFTER `vite build` (dist must exist):
 *   npx tsx scripts/prerender.tsx
 * ============================================================
 */
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../src/App';


const DIST = path.resolve(process.cwd(), 'dist');
const INDEX_TEMPLATE = path.join(DIST, 'index.html');

/** Every public SPA route that should exist as a static page. */
const ROUTES: string[] = [
  '/',
  '/mortgage-calculator',
  '/affordability-calculator',
  '/biweekly-mortgage-calculator',
  '/rent-vs-buy-calculator',
  '/fire-impact-calculator',
  '/pmi-calculator',
  '/refinance-calculator',
  '/closing-cost-calculator',
  '/extra-payment-calculator',
  '/arm-vs-fixed-calculator',
  '/blog',
  '/blog/how-to-use-calculator',
  '/blog/amortization-schedule',
  '/blog/biweekly-payments',
  '/blog/what-is-pmi',
  '/blog/30-vs-15-year',
  '/blog/how-much-house-can-i-afford',
  '/blog/monthly-payment-breakdown',
  '/blog/income-needed',
  '/blog/why-mostly-interest',
  '/blog/pay-off-early',
  '/blog/fha-vs-conventional',
  '/blog/is-buying-worth-it-2026',
  '/blog/can-i-buy-with-5-percent-down',
  '/blog/credit-score-needed',
  '/blog/when-should-you-refinance',
  '/blog/closing-costs-explained',
  '/blog/arm-vs-fixed-arm',
  '/blog/rent-vs-buy-2026',
  '/blog/property-taxes-and-insurance',
  '/blog/debt-to-income-ratio',
  '/about',
  '/contact',
  '/editorial-policy',
  '/calculator-methodology',
  '/privacy',
  '/disclaimer',
];

/**
 * Remove the default <title>/meta/canonical tags from the Vite template
 * head. react-helmet-async emits per-route versions of these, so keeping
 * the defaults would create duplicate SEO tags.
 */
const stripDefaultTags = (head: string): string =>
  head
    .replace(/<title>[^<]*<\/title>/i, '')
    .replace(/<meta name=["']description["'][^>]*>/i, '')
    .replace(/<meta property=["']og:title["'][^>]*>/i, '')
    .replace(/<meta property=["']og:description["'][^>]*>/i, '')
    .replace(/<meta property=["']og:url["'][^>]*>/i, '')
    .replace(/<link rel=["']canonical["'][^>]*>/i, '')
    .replace(/<meta name=["']twitter:title["'][^>]*>/i, '')
    .replace(/<meta name=["']twitter:description["'][^>]*>/i, '');

/**
 * With React 19 + react-helmet-async v3, <Helmet> children render
 * INLINE in the tree (the provider is inert). Extract those
 * <title>/<meta>/<link> tags from the body HTML and move them into
 * <head>, then remove them from the body so the markup stays valid.
 */
const extractMetadata = (html: string): { tags: string; body: string } => {
  const tags: string[] = [];

  // <title>...</title>. A page may render multiple inline <title> tags
  // (layout <Helmet> + page <Helmet>). Keep the LAST NON-EMPTY one —
  // layout Helmet components sometimes leave an empty <title></title>
  // which would otherwise clobber the page's real title.
  const titleMatches = html.match(/<title[^>]*>[\s\S]*?<\/title>/gi) ?? [];
  const nonEmpty = titleMatches.filter((t) => !/^<title[^>]*>\s*<\/title>$/i.test(t));
  if (nonEmpty.length > 0) {
    tags.push(nonEmpty[nonEmpty.length - 1]);
  }

  // <meta ... /> and <link ... /> (canonical/og/twitter tags from Helmet).
  // Deduplicate identical tags (layout + page Helmet can emit the same
  // canonical/description twice).
  const metaLinkTags = html.match(/<(?:meta|link)[^>]*\/?>/gi) ?? [];
  const seen = new Set<string>();
  for (const tag of metaLinkTags) {
    const key = tag.replace(/\s+/g, ' ').trim();
    if (seen.has(key)) continue;
    seen.add(key);
    tags.push(tag);
  }

  // Remove ALL extracted tags from the body HTML (global flag).
  const body = html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<(?:meta|link)[^>]*\/?>/gi, '');

  return { tags: tags.join('\n    '), body };
};



const renderRoute = (route: string, template: string): { html: string; textLength: number } => {
  let appHtml = renderToString(
    <MemoryRouter initialEntries={[route]} initialIndex={0}>
      <AppRoutes />
    </MemoryRouter>
  );

  const { tags: metadataTags, body } = extractMetadata(appHtml);
  appHtml = body;

  const head = stripDefaultTags(template);
  const finalHead = head.replace(
    '</head>',
    metadataTags.trim().length > 0 ? `    ${metadataTags}\n  </head>` : '  </head>'
  );
  // Replace whatever is currently inside #root. This is idempotent: if the
  // template is a pristine Vite shell (<div id="root"></div>) it just fills
  // it, but if the template was already prerendered it still swaps the body
  // instead of leaving stale content behind.
  //
  // Use a GREEDY match up to the LAST </div> before </body> — the rendered
  // app contains deeply nested <div>s, so a lazy match would stop at the
  // first closing tag and leave the old content behind (duplicating text).
  const html = finalHead.replace(
    /<div id="root">[\s\S]*<\/div>\s*<\/body>/i,
    `<div id="root">${appHtml}</div>\n  </body>`
  );



  const textLength = appHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
  return { html, textLength };
};


function main() {
  if (!fs.existsSync(INDEX_TEMPLATE)) {
    console.error('❌ dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  const template = fs.readFileSync(INDEX_TEMPLATE, 'utf-8');
  let count = 0;
  let warnings = 0;

  console.log('🏗️  Prerendering SPA routes to static HTML...');
  for (const route of ROUTES) {
    const { html, textLength } = renderRoute(route, template);

    if (route === '/') {
      fs.writeFileSync(INDEX_TEMPLATE, html, 'utf-8');
    } else {
      const dir = path.join(DIST, route.replace(/^\//, ''));
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    }

    const sizeKb = (html.length / 1024).toFixed(1);
    console.log(`  ✅ ${route}  (${textLength.toLocaleString()} chars text, ${sizeKb} KB)`);
    if (textLength < 300) {
      console.warn(`  ⚠️  LOW TEXT CONTENT on ${route} (${textLength} chars) — crawlers may still see this as thin!`);
      warnings++;
    }
    count++;
  }

  console.log(`\n✅ Prerendered ${count} routes into ${DIST}`);
  if (warnings > 0) {
    console.warn(`⚠️  ${warnings} route(s) have very low text — review the content on those pages.`);
  }
}

main();
