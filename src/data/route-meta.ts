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

export const ROUTE_META: RouteMeta[] = [
  // ---------- Home ----------
  {
    path: '/',
    title: 'MortgagePro - Free Mortgage Calculator',
    description: 'Professional-grade US mortgage calculator with interactive sliders, state-specific tax data, amortization schedules, bi-weekly vs monthly comparison, rent vs buy analysis, and FIRE impact calculator.',
  },
  // ---------- Redirect (legacy) ----------
  {
    path: '/calculator',
    title: 'Mortgage Calculator - Free Online Mortgage Payment Calculator | MortgagePro',
    description: 'Free mortgage calculator with amortization schedule, PMI, taxes & insurance. Calculate your monthly payment in real time.',
  },
  // ---------- Blog index ----------
  {
    path: '/blog',
    title: 'Mortgage Blog - Guides, Tips & Resources | MortgagePro',
    description: 'Expert mortgage guides, affordability tips, and home buying resources. Learn about PMI, amortization, and more.',
  },
  // ---------- Blog articles ----------
  {
    path: '/blog/how-to-use-calculator',
    title: "How to Use Our Mortgage Calculator - Step by Step Guide | MortgagePro",
    description: "Learn how to use MortgagePro's mortgage calculator. Step-by-step guide to calculating your monthly payment.",
  },
  {
    path: '/blog/amortization-schedule',
    title: "What is an Amortization Schedule? Understanding Your Loan | MortgagePro",
    description: "Learn what an amortization schedule is and how it affects your mortgage. See how principal and interest change over 30 years.",
  },
  {
    path: '/blog/biweekly-payments',
    title: "Bi-Weekly Mortgage Payments: Are They Worth It? | MortgagePro",
    description: "Are bi-weekly mortgage payments worth it? We break down the math on interest savings and faster payoffs.",
  },
  {
    path: '/blog/what-is-pmi',
    title: "PMI in Mortgages: What It Is and How to Calculate It | MortgagePro",
    description: "Learn what PMI is, how it works, and how to calculate it. Tips for removing PMI from your mortgage payment.",
  },
  {
    path: '/blog/30-vs-15-year',
    title: "30-Year vs 15-Year Mortgage: More Than Just Time | MortgagePro",
    description: "Compare 30-year vs 15-year mortgages. See the total cost difference and which loan type fits your financial goals.",
  },
  {
    path: '/blog/how-much-house-can-i-afford',
    title: "How Much House Can I Afford? Complete Affordability Guide | MortgagePro",
    description: "Calculate how much house you can afford based on your income, down payment, and debt. Complete guide with real examples.",
  },
  {
    path: '/blog/monthly-payment-breakdown',
    title: "Mortgage Monthly Payment Breakdown - PITI Explained | MortgagePro",
    description: "Understand your monthly mortgage payment breakdown: Principal, Interest, Taxes, and Insurance (PITI).",
  },
  {
    path: '/blog/income-needed',
    title: "Income Needed to Buy a House in 2026 | MortgagePro",
    description: "How much income do you need to buy a house in 2026? State-by-state income requirements based on median home prices.",
  },
  {
    path: '/blog/why-mostly-interest',
    title: "Why Are My Mortgage Payments Mostly Interest? | MortgagePro",
    description: "Why most of your early mortgage payments go to interest. Understand front-loaded interest and how amortization works.",
  },
  {
    path: '/blog/pay-off-early',
    title: "Should You Pay Off Your Mortgage Early? | MortgagePro",
    description: "Should you pay off your mortgage early or invest the money? We analyze the pros, cons, and math behind each strategy.",
  },
  {
    path: '/blog/fha-vs-conventional',
    title: "FHA vs Conventional Loan: Which Is Better? | MortgagePro",
    description: "Compare FHA vs conventional loans. See the pros, cons, and costs of each mortgage type for first-time home buyers.",
  },
  {
    path: '/blog/is-buying-worth-it-2026',
    title: "Is Buying a Home Worth It in 2026? | MortgagePro",
    description: "Is buying a home still worth it in 2026? We analyze current market conditions, interest rates, and rent vs buy math.",
  },
  {
    path: '/blog/can-i-buy-with-5-percent-down',
    title: "Can I Buy a House with 5% Down? Complete Guide | MortgagePro",
    description: "Can you buy a house with only 5% down? Learn about low down payment options, PMI costs, and strategies to buy sooner.",
  },
  {
    path: '/blog/credit-score-needed',
    title: "What Credit Score Do You Need to Buy a House? | MortgagePro",
    description: "What credit score do you need to buy a house in 2026? Minimum requirements for FHA, conventional, and USDA loans.",
  },
  {
    path: '/blog/when-should-you-refinance',
    title: "When Should You Refinance Your Home Loan? | MortgagePro",
    description: "My friend Kevin refinanced his mortgage twice in three years. My cousin Lisa almost did but it would have cost her thousands. Here's how to know which camp you're in.",
  },
  {
    path: '/blog/closing-costs-explained',
    title: "Closing Costs Explained: The Money You Need Beyond the Down Payment | MortgagePro",
    description: "My neighbors Jen and Mike thought they had the numbers figured out. Then a week before closing, they found out they needed nearly $12,000 more than they'd planned.",
  },
  {
    path: '/blog/rent-vs-buy-2026',
    title: "Rent vs Buy in 2026: The Decision That's Keeping Everyone Up at Night | MortgagePro",
    description: "My neighbors Jen and Mike have been renting the same apartment for four years. They have a baby due in September. Should they buy a house or keep renting? Here's what they decided.",
  },
  {
    path: '/blog/arm-vs-fixed-arm',
    title: "ARM vs Fixed Mortgage: Which One Makes Sense Right Now? | MortgagePro",
    description: "My friend Dave had two loan estimates on the same house. His agent told him fixed. His brother-in-law said ARM. Here's how he decided in five minutes.",
  },
  {
    path: '/blog/property-taxes-and-insurance',
    title: "How Much Are Property Taxes and Insurance on a Mortgage? | MortgagePro",
    description: "My brother-in-law Chris thought his mortgage payment was $2,528. Then his Loan Estimate arrived. Here's why property taxes and insurance add hundreds to your monthly payment.",
  },
  {
    path: '/blog/debt-to-income-ratio',
    title: "What Is a Good Debt-to-Income Ratio for Buying a House? | MortgagePro",
    description: "My friend makes $100,000 a year and got pre-approved for $340,000 — way less than he expected. Here's the DTI math that explains why two people with the same salary get wildly different loan offers.",
  },
  // ---------- Other pages ----------
  {
    path: '/about',
    title: 'About MortgagePro - Free Mortgage Calculators & Resources',
    description: 'Learn about MortgagePro. We provide free mortgage calculators, educational resources, and state-specific data for home buyers.',
  },
  {
    path: '/contact',
    title: 'Contact Us | MortgagePro',
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
    title: 'Disclaimer | MortgagePro',
    description: 'MortgagePro disclaimer. Our calculators provide estimates for informational purposes only.',
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


