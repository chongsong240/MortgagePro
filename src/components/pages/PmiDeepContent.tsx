import { Link } from 'react-router-dom';

/**
 * Long-form content block rendered below the PMI Calculator.
 *
 * Answers the exact questions people search when they type "pmi calculation":
 * the formula, rates by credit score, a worked $300,000 example, and how to
 * avoid or cancel PMI. All figures mirror the calculator's own math (0.85%
 * default rate; 80% LTV borrower-requested cancellation; 78% LTV auto-cancel).
 */
export default function PmiDeepContent() {
  return (
    <section
      aria-label="How PMI is calculated: formula, rates by credit score, example, and cancellation"
      className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-10"
    >
      {/* ============ 1. Formula & steps ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">How Is PMI Calculated?</h2>
        <p className="text-muted-foreground leading-relaxed">
          PMI is priced as an <strong className="text-foreground">annual percentage of your loan
          amount</strong>, but you pay it in 12 equal monthly installments inside your mortgage payment.
          Your credit score and your down payment set the rate; your loan size sets the dollar amount.
          The whole calculation comes down to one formula:
        </p>

        <div className="bg-primary/5 border border-primary/25 rounded-xl px-4 py-4 text-center">
          <p className="font-mono text-foreground font-semibold text-base sm:text-lg">
            Monthly PMI = (Loan Amount × Annual PMI Rate) ÷ 12
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">Here is how to work through it in four steps:</p>

        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Find your loan amount.</strong> Subtract your down
              payment from the home price. If the down payment is under 20%, PMI applies.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">2</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Get your annual PMI rate.</strong> Lenders publish rate
              grids based mainly on credit score and loan-to-value (LTV). Typical rates run 0.5% to 1.5%
              of the loan per year, though excellent credit plus a larger down payment can push quotes
              below 0.5% — and near-minimum credit pushes them above 1.5%.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">3</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Multiply: loan amount × annual rate.</strong> That gives
              the yearly premium. On a $300,000 loan at 0.6%, the annual premium is $300,000 × 0.006 ={' '}
              <strong className="text-foreground">$1,800</strong>.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">4</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Divide by 12</strong> to get the amount escrowed into
              your monthly payment: $1,800 ÷ 12 = <strong className="text-foreground">$150/month</strong>.
            </p>
          </li>
        </ol>

        <p className="text-muted-foreground text-sm leading-relaxed border-l-4 border-primary/40 pl-4">
          Key nuance: unlike principal and interest, your monthly PMI is based on the{' '}
          <strong className="text-foreground">original loan amount</strong> — not the declining balance.
          It stays flat every month until it is canceled. That is why the fastest way to lower the cost is
          to shorten the time you pay it, not to wait for it to shrink on its own.
        </p>
      </div>
      {/* ============ 2. Rates by credit score ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">PMI Rates by Credit Score</h2>
        <p className="text-muted-foreground leading-relaxed">
          Credit score is the single biggest driver of your PMI rate. Borrowers in the top tier often pay
          roughly one-third of what a borrower near the minimum score pays. The ranges below are typical
          estimates for a conventional loan with a 5% to 10% down payment:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Typical annual PMI rates by credit score">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Credit Score</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Typical Annual PMI Rate</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Monthly PMI on a $300,000 Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">760 or higher</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.25% – 0.60%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$63 – $150</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">720 – 759</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.30% – 0.75%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$75 – $188</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">680 – 719 (most common)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.50% – 1.00%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$125 – $250</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">640 – 679</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.70% – 1.50%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$175 – $375</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">580 – 639</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">1.00% – 2.00%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$250 – $500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          *Ranges are typical estimates, not a quote. Your lender's exact rate also depends on your LTV
          (down payment), loan type, and required coverage. Most borrowers land near the calculator's
          0.85% default — for a $300,000 loan that is about $213/month. Adjust the PMI rate slider on this
          page to match your actual lender quote.
        </p>
      </div>
      {/* ============ 3. Worked example ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">PMI Example: A $300,000 Loan, Step by Step</h2>
        <p className="text-muted-foreground leading-relaxed">
          Let's put the formula to work. Say you buy a $333,333 home with 10% down and a 720–759 credit
          score, and your lender quotes a 0.60% annual PMI rate:
        </p>

        <div className="bg-muted/40 border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Step 1 — Loan amount</td>
                <td className="py-3 px-4 text-right font-mono text-foreground">$333,333 − $33,333 = $300,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Step 2 — Annual PMI premium</td>
                <td className="py-3 px-4 text-right font-mono text-foreground">$300,000 × 0.60% = $1,800</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Step 3 — Monthly PMI</td>
                <td className="py-3 px-4 text-right font-mono text-foreground">$1,800 ÷ 12 = $150/month</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-3 px-4 font-semibold text-foreground">Principal &amp; interest (6.5%, 30-yr)</td>
                <td className="py-3 px-4 text-right font-mono text-foreground">$1,896/month</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="py-3 px-4 font-semibold text-foreground">Total housing payment with PMI</td>
                <td className="py-3 px-4 text-right font-mono text-primary font-semibold">$2,046/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed border-l-4 border-primary/40 pl-4">
          Now the part people miss: that $150 is pure expense — it builds no equity and protects the
          lender, not you. Over a year that is $1,800 gone. If your home appreciates 3% a year, our
          calculator shows this loan reaching 80% LTV around month 34 (about 2.8 years), so you'd pay
          roughly <strong className="text-foreground">34 × $150 ≈ $5,100</strong> before cancellation. If
          home values stay flat, federal rules only force automatic cancellation at 78% LTV — near month
          109 (over 9 years), turning that same $150 into more than $16,000. That gap is exactly why the
          cancellation strategies below matter.
        </p>
      </div>
      {/* ============ 4. Avoid or cancel ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">How to Avoid or Cancel PMI</h2>
        <p className="text-muted-foreground leading-relaxed">
          PMI is avoidable, and once you have it, cancelable. Four moves that work:
        </p>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Put down 20% (or structure an 80/10/10 piggyback loan).</strong>{' '}
              A 20% down payment means no PMI from day one. If you cannot get there, a piggyback second
              mortgage — or a low-down-payment conventional program — can shrink or eliminate it.{' '}
              <Link to="/blog/can-i-buy-with-5-percent-down" className="text-primary hover:underline font-medium">
                See how 5% down buyers handle PMI
              </Link>
              .
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Request cancellation at 80% LTV.</strong> Under the
              Homeowners Protection Act, you can cancel by written request once your balance hits 80% of
              the home's original value — you don't have to wait to be told. Track your balance and ask
              your servicer.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Automatic termination at 78% LTV.</strong> If you never
              request it, the law still requires your servicer to drop PMI automatically when the loan
              reaches 78% of the original value. The date should be on your initial PMI disclosure.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Refinance or re-appraise after appreciation.</strong>{' '}
              If your home's value has jumped, a new appraisal — or refinancing into a loan at 80% LTV or
              lower — can end PMI years early. An appraisal typically costs a few hundred dollars and can
              save thousands.
            </p>
          </li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
          <p className="text-foreground font-semibold text-sm">
            Want the full playbook — including the exact cancellation rules, exceptions, and the appraisal
            trick?
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Read{' '}
            <Link to="/blog/what-is-pmi" className="text-primary hover:underline font-medium">
              How Is PMI Calculated? What It Costs and How to Cancel It
            </Link>{' '}
            — our complete PMI guide — or run your exact numbers above with the PMI Calculator and its
            cancellation timeline.
          </p>
        </div>
      </div>
    </section>
  );
}
