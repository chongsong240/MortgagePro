import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

/**
 * Curated topical internal links between blog posts.
 *
 * Problem this solves: every article used to end with 2-3 hard-coded
 * "sibling" links in its footer, and most posts picked the same three
 * targets (biweekly-payments, what-is-pmi, amortization-schedule). Those
 * three collected 57-62 inbound links while ~15 other posts were left
 * with 2-4 (homepage + /blog + one calculator), which is why Google kept
 * them at "Discovered - currently not indexed" indefinitely.
 *
 * Fix: one shared, curated graph instead of ad-hoc footer links. Each post
 * points at 5 genuinely related posts, so link equity flows to every
 * article and the weakest ones pick up 5-10 contextual inbound links.
 *
 * To add a post: add it to LABELS and to the RELATED list of 2+ siblings.
 */
const LABELS: Record<string, string> = {
  '/blog/monthly-payment-breakdown': 'What Makes Up a Mortgage Payment',
  '/blog/amortization-schedule': 'How Amortization Works',
  '/blog/why-mostly-interest': 'Why Early Payments Are Mostly Interest',
  '/blog/biweekly-payments': 'Bi-Weekly Payments',
  '/blog/pay-off-early': 'Should You Pay Off Early?',
  '/blog/30-vs-15-year': '30-Year vs 15-Year',
  '/blog/arm-vs-fixed-arm': 'ARM vs Fixed',
  '/blog/when-should-you-refinance': 'When Should You Refinance?',
  '/blog/how-much-house-can-i-afford': 'How Much House Can You Afford?',
  '/blog/income-needed': 'Income Needed for a Mortgage',
  '/blog/debt-to-income-ratio': 'Debt-to-Income Ratio',
  '/blog/credit-score-needed': 'Credit Score Needed',
  '/blog/can-i-buy-with-5-percent-down': 'Buying With 5% Down',
  '/blog/fha-vs-conventional': 'FHA vs Conventional',
  '/blog/what-is-pmi': 'How PMI Is Calculated',
  '/blog/closing-costs-explained': 'Closing Costs Explained',
  '/blog/property-taxes-and-insurance': 'Property Taxes & Insurance',
  '/blog/is-buying-worth-it-2026': 'Is Buying Worth It in 2026?',
  '/blog/rent-vs-buy-2026': 'Rent vs Buy in 2026',
  '/blog/how-to-use-calculator': 'How to Use the Calculator',
};

const RELATED: Record<string, string[]> = {
  // Payment mechanics
  '/blog/monthly-payment-breakdown': [
    '/blog/amortization-schedule',
    '/blog/property-taxes-and-insurance',
    '/blog/why-mostly-interest',
    '/blog/closing-costs-explained',
    '/blog/30-vs-15-year',
  ],
  '/blog/amortization-schedule': [
    '/blog/monthly-payment-breakdown',
    '/blog/why-mostly-interest',
    '/blog/biweekly-payments',
    '/blog/pay-off-early',
    '/blog/30-vs-15-year',
  ],
  '/blog/why-mostly-interest': [
    '/blog/amortization-schedule',
    '/blog/monthly-payment-breakdown',
    '/blog/pay-off-early',
    '/blog/biweekly-payments',
    '/blog/30-vs-15-year',
  ],
  '/blog/biweekly-payments': [
    '/blog/amortization-schedule',
    '/blog/pay-off-early',
    '/blog/30-vs-15-year',
    '/blog/why-mostly-interest',
    '/blog/monthly-payment-breakdown',
  ],
  '/blog/pay-off-early': [
    '/blog/biweekly-payments',
    '/blog/amortization-schedule',
    '/blog/why-mostly-interest',
    '/blog/when-should-you-refinance',
    '/blog/30-vs-15-year',
  ],
  '/blog/30-vs-15-year': [
    '/blog/arm-vs-fixed-arm',
    '/blog/biweekly-payments',
    '/blog/amortization-schedule',
    '/blog/pay-off-early',
    '/blog/monthly-payment-breakdown',
    '/blog/when-should-you-refinance',
  ],
  // Rates, terms and refinancing
  '/blog/arm-vs-fixed-arm': [
    '/blog/30-vs-15-year',
    '/blog/when-should-you-refinance',
    '/blog/pay-off-early',
    '/blog/biweekly-payments',
    '/blog/amortization-schedule',
  ],
  '/blog/when-should-you-refinance': [
    '/blog/arm-vs-fixed-arm',
    '/blog/pay-off-early',
    '/blog/biweekly-payments',
    '/blog/30-vs-15-year',
    '/blog/amortization-schedule',
  ],
  // Affordability and qualifying
  '/blog/how-much-house-can-i-afford': [
    '/blog/income-needed',
    '/blog/debt-to-income-ratio',
    '/blog/credit-score-needed',
    '/blog/rent-vs-buy-2026',
    '/blog/property-taxes-and-insurance',
    '/blog/arm-vs-fixed-arm',
  ],
  '/blog/income-needed': [
    '/blog/debt-to-income-ratio',
    '/blog/how-much-house-can-i-afford',
    '/blog/credit-score-needed',
    '/blog/rent-vs-buy-2026',
    '/blog/can-i-buy-with-5-percent-down',
  ],
  '/blog/debt-to-income-ratio': [
    '/blog/income-needed',
    '/blog/credit-score-needed',
    '/blog/how-much-house-can-i-afford',
    '/blog/can-i-buy-with-5-percent-down',
    '/blog/fha-vs-conventional',
    '/blog/when-should-you-refinance',
  ],
  '/blog/credit-score-needed': [
    '/blog/fha-vs-conventional',
    '/blog/can-i-buy-with-5-percent-down',
    '/blog/debt-to-income-ratio',
    '/blog/how-much-house-can-i-afford',
    '/blog/income-needed',
  ],
  '/blog/can-i-buy-with-5-percent-down': [
    '/blog/fha-vs-conventional',
    '/blog/credit-score-needed',
    '/blog/income-needed',
    '/blog/closing-costs-explained',
    '/blog/rent-vs-buy-2026',
  ],
  '/blog/fha-vs-conventional': [
    '/blog/can-i-buy-with-5-percent-down',
    '/blog/credit-score-needed',
    '/blog/what-is-pmi',
    '/blog/closing-costs-explained',
    '/blog/debt-to-income-ratio',
    '/blog/arm-vs-fixed-arm',
  ],
  '/blog/what-is-pmi': [
    '/blog/fha-vs-conventional',
    '/blog/can-i-buy-with-5-percent-down',
    '/blog/closing-costs-explained',
    '/blog/how-much-house-can-i-afford',
    '/blog/debt-to-income-ratio',
    '/blog/when-should-you-refinance',
  ],
  // The buy-or-rent decision
  '/blog/is-buying-worth-it-2026': [
    '/blog/rent-vs-buy-2026',
    '/blog/how-much-house-can-i-afford',
    '/blog/closing-costs-explained',
    '/blog/property-taxes-and-insurance',
    '/blog/income-needed',
  ],
  '/blog/rent-vs-buy-2026': [
    '/blog/is-buying-worth-it-2026',
    '/blog/how-much-house-can-i-afford',
    '/blog/income-needed',
    '/blog/closing-costs-explained',
    '/blog/property-taxes-and-insurance',
  ],
  // Closing costs and carrying costs
  '/blog/closing-costs-explained': [
    '/blog/rent-vs-buy-2026',
    '/blog/is-buying-worth-it-2026',
    '/blog/property-taxes-and-insurance',
    '/blog/can-i-buy-with-5-percent-down',
    '/blog/income-needed',
  ],
  '/blog/property-taxes-and-insurance': [
    '/blog/monthly-payment-breakdown',
    '/blog/closing-costs-explained',
    '/blog/rent-vs-buy-2026',
    '/blog/is-buying-worth-it-2026',
    '/blog/how-much-house-can-i-afford',
  ],
  // Using the site
  '/blog/how-to-use-calculator': [
    '/blog/monthly-payment-breakdown',
    '/blog/how-much-house-can-i-afford',
    '/blog/income-needed',
    '/blog/amortization-schedule',
    '/blog/rent-vs-buy-2026',
  ],
};

/**
 * Renders the "Related Reading" section for the current blog route.
 * Returns null on routes without a curated list.
 */
export default function RelatedPosts() {
  const { pathname } = useLocation();
  const current = pathname.replace(/\/+$/, '') || '/';
  const paths = RELATED[current];
  if (!paths || paths.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
          <BookOpen className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Related Reading</h2>
          <p className="text-sm text-muted-foreground">
            Guides that pick up where this one leaves off.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {paths.map((to) => (
          <Link
            key={to}
            to={to}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
          >
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
            <span className="group-hover:text-primary transition-colors">{LABELS[to] ?? to}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

