// ============================================================
// Route metadata — single source of truth for per-page SEO.
// Calculator pages are handled inside CalculatorPageLayout via
// their PageConfig (title/description) to avoid duplication.
// ============================================================

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const SITE_URL = 'https://www.mortgagepro.io';

/**
 * Robots directive shared by every indexable route.
 *
 * `max-image-preview:large` lets Google show full-width thumbnails and
 * `max-snippet:-1` removes the snippet length cap — both are free CTR
 * wins in the SERP and are ignored by crawlers that don't support them.
 */
export const ROBOTS_INDEX_FOLLOW =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export const ROUTE_META: RouteMeta[] = [
  // ---------- Home ----------
  {
    path: '/',
    title: 'Free Mortgage Calculator With Taxes, PMI & Insurance (2026)',
    description: 'See your real monthly payment: principal, interest, property taxes, insurance and PMI — with 2026 state-by-state tax data. Free, instant, no sign-up required.',
  },
  // ---------- Redirect (legacy) ----------
  {
    path: '/calculator',
    title: 'Mortgage Calculator (2026) - Monthly Payment Tool',
    description: 'Free mortgage calculator with amortization schedule, PMI, taxes and insurance. Estimate your monthly payment and full PITI breakdown in seconds.',
  },
  // ---------- Blog index ----------
  {
    path: '/blog',
    title: 'Mortgage Guides & Free Calculators (2026) | MortgagePro Blog',
    description: 'Step-by-step mortgage guides on PMI, amortization, DTI, closing costs and rent vs buy — with real numbers, worked examples and free calculators.',
  },
  // ---------- Blog articles ----------
  {
    path: '/blog/how-to-use-calculator',
    title: "How to Use a Mortgage Calculator: Step-by-Step Guide",
    description: "A 6-step walkthrough of every input — home price, down payment, rate, term, taxes and insurance — plus how to read the PITI breakdown and amortization chart.",
  },
  {
    path: '/blog/amortization-schedule',
    title: "What Is an Amortization Schedule? Example + 30-Year Table",
    description: "In month one of a $400,000 loan at 6.5%, only $361 of your payment touches principal. See how a 30-year amortization schedule splits principal and interest.",
  },
  {
    path: '/blog/biweekly-payments',
    title: "Bi-Weekly Mortgage Payments: Worth It in 2026? The Math",
    description: "Bi-weekly payments add one extra payment a year and cut years off a 30-year loan. See the real interest savings, the servicer traps, and who it actually fits.",
  },
  {
    path: '/blog/what-is-pmi',
    title: "How Is PMI Calculated? Formula, Cost & Cancellation",
    description: "PMI runs 0.5%-1.5% of your loan a year: about $145-$438/month on a $350,000 loan. See the formula, the 78% LTV auto-cancel rule, and how to remove it early.",
  },
  {
    path: '/blog/30-vs-15-year',
    title: "30-Year vs 15-Year Mortgage: Which Saves More in 2026?",
    description: "A 15-year loan saves six figures of interest but costs hundreds more every month. Compare payments, total cost and payoff timelines side by side.",
  },
  {
    path: '/blog/how-much-house-can-i-afford',
    title: "How Much House Can I Afford? The 28/36 Rule Explained",
    description: "Lenders size your loan with the 28/36 rule: housing under 28% of gross income, all debts under 36%. See your maximum price by income, down payment and state.",
  },
  {
    path: '/blog/monthly-payment-breakdown',
    title: "Mortgage Payment Breakdown: PITI Explained With Numbers",
    description: "Your payment is principal, interest, taxes and insurance — and PITI is often 30% higher than the loan payment alone. See a line-by-line example you can copy.",
  },
  {
    path: '/blog/income-needed',
    title: "Income Needed to Buy a House in 2026 (State by State)",
    description: "How much income you need to qualify in 2026, state by state — based on median home prices, the 28% rule, property taxes and insurance. Find your number.",
  },
  {
    path: '/blog/why-mostly-interest',
    title: "Why Your Early Mortgage Payments Are Mostly Interest",
    description: "In his first six months my friend Rob paid over $15,000 and his balance fell by less than $3,000. See why interest is front-loaded and how to shift the split.",
  },
  {
    path: '/blog/pay-off-early',
    title: "Pay Off Your Mortgage Early or Invest? How to Decide",
    description: "Paying off a 6.5% mortgage is a guaranteed 6.5% return — investing may beat it, or not. Compare both paths plus the liquidity and tax trade-offs.",
  },
  {
    path: '/blog/fha-vs-conventional',
    title: "FHA vs Conventional Loan: Which Costs Less in 2026?",
    description: "FHA allows lower credit scores but adds mortgage insurance for the life of the loan. Compare rates, MIP vs PMI, down payments and 10-year total cost.",
  },
  {
    path: '/blog/is-buying-worth-it-2026',
    title: "Is Buying a Home Worth It in 2026? The Break-Even Math",
    description: "How long you must stay to beat renting, what closing costs do to your break-even year, and the cases where buying still wins in 2026. Run the numbers.",
  },
  {
    path: '/blog/can-i-buy-with-5-percent-down',
    title: "Can I Buy a House With 5% Down? Costs and Trade-Offs",
    description: "A 5% down payment gets you in sooner but adds PMI and a bigger loan. See the real monthly cost on a $400,000 home and which programs allow it.",
  },
  {
    path: '/blog/credit-score-needed',
    title: "What Credit Score Do You Need to Buy a House in 2026?",
    description: "Minimum credit scores: 580 for FHA, 620 for conventional, 700+ for the best rates. See how each tier changes your rate and monthly payment in 2026.",
  },
  {
    path: '/blog/when-should-you-refinance',
    title: "When Should You Refinance? The Break-Even Rule",
    description: "Refinancing pays off when monthly savings outrun the closing costs. See how to compute your break-even month and the 1% rate-drop rule of thumb.",
  },
  {
    path: '/blog/closing-costs-explained',
    title: "Closing Costs Explained: What You Pay Beyond the Down Payment",
    description: "Closing costs run 2%-5% of the purchase price — $8,000-$20,000 on a $400,000 home. See every line item and which fees you can negotiate down.",
  },
  {
    path: '/blog/rent-vs-buy-2026',
    title: "Rent vs Buy in 2026: The Math Most People Get Wrong",
    description: "Buying is not automatically cheaper than renting. Compare the 5-year net-worth math: closing costs, equity, appreciation and what your down payment could earn.",
  },
  {
    path: '/blog/arm-vs-fixed-arm',
    title: "ARM vs Fixed Mortgage in 2026: Which Should You Pick?",
    description: "A 5/1 ARM starts lower but resets after five years. Compare ARM vs fixed monthly payments, the break-even horizon and who actually comes out ahead.",
  },
  {
    path: '/blog/property-taxes-and-insurance',
    title: "Property Taxes and Insurance: The Hidden Mortgage Cost",
    description: "Taxes and insurance can add 25% or more to your monthly payment. See average rates by state, how escrow works and how to estimate your real number.",
  },
  {
    path: '/blog/debt-to-income-ratio',
    title: "What Is a Good Debt-to-Income Ratio for a Mortgage?",
    description: "Most lenders cap DTI at 43%-50%, but 36% or lower earns the best terms. See how car, student and card payments shrink the loan you qualify for.",
  },
  // ---------- Other pages ----------
  {
    path: '/author',
    title: 'Chong Song — Author & Founder | MortgagePro',
    description: 'Chong Song researches mortgage costs and builds the free first-time-buyer calculators on MortgagePro.io. See the sources, methodology and contact details.',
  },
  {
    path: '/about',
    title: 'About MortgagePro - Free Mortgage Calculators & Resources',
    description: 'Learn about MortgagePro. We provide free mortgage calculators, educational resources, and state-specific data for home buyers.',
  },
  {
    path: '/contact',
    title: 'Contact MortgagePro | Questions & Feedback',
    description: 'Contact MortgagePro. Reach out with questions, bug reports, or suggestions for our mortgage calculators and content.',
  },
  {
    path: '/editorial-policy',
    title: 'Editorial Policy | MortgagePro',
    description: "MortgagePro editorial policy. Learn how we create, review, and maintain accurate, trustworthy mortgage content.",
  },
  {
    path: '/calculator-methodology',
    title: 'Calculator Methodology | MortgagePro',
    description: "MortgagePro calculator methodology. See the formulas, assumptions, and data sources behind every mortgage calculator.",
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | MortgagePro',
    description: 'MortgagePro privacy policy. Learn how we collect, use, and protect your data.',
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer | MortgagePro Calculator Estimates',
    description: 'MortgagePro disclaimer. Our calculators provide estimates for informational purposes only.',
  },
  {
    path: '/affiliate-disclosure.html',
    title: 'Affiliate Disclosure | MortgagePro',
    description: 'MortgagePro affiliate disclosure. Learn how affiliate links support our free mortgage tools and how we keep our content independent.',
  },
];

/** Find metadata for a given pathname (exact match first, then longest prefix). */
export function findRouteMeta(pathname: string): RouteMeta | undefined {
  const exact = ROUTE_META.find((m) => m.path === pathname);
  if (exact) return exact;

  let best: RouteMeta | undefined;
  for (const m of ROUTE_META) {
    // Prefix matching only for "folder-like" paths (e.g. /blog/xxx).
    // IMPORTANT: skip the bare "/" home path — every pathname starts with
    // "/", so without this guard unmatched routes (like calculator pages)
    // would incorrectly inherit the homepage title/description.
    if (m.path.length > 1 && m.path.endsWith('/') && pathname.startsWith(m.path)) {
      if (!best || m.path.length > best.path.length) best = m;
    }
  }
  return best;
}


