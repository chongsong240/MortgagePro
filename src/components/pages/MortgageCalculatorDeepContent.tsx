import { Link } from 'react-router-dom';

/**
 * Long-form content block rendered below the Mortgage Calculator.
 *
 * Targets the "mortgage calculator with pmi" / "mortgage payment calculator with
 * pmi" queries by answering them with this page's own payment model: the default
 * $400,000 / 20% down / 6.5% / 30-year setup, the flat national assumptions this
 * calculator ships with (1.2% property taxes, $1,500/year insurance) and the
 * site-wide 0.85% annual PMI rate.
 *
 * Those two assumptions are deliberately round and held constant so the tables
 * below stay comparable; the generated state pages instead use the real dataset
 * (Tax Foundation 2024 rates, NAIC 2021 premiums), so the copy here says "flat
 * national assumption" rather than "national average".
 *
 * Every figure below is reproducible in the calculator above by dragging the down
 * payment to 5%, 10%, or 15%, and by reading the amortization schedule for the
 * month the balance reaches 80% / 78% of the purchase price.
 */
export default function MortgageCalculatorDeepContent() {
  return (
    <section
      aria-label="Mortgage calculator with PMI: monthly payment examples, cancellation timeline, and total cost"
      className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-10"
    >
      {/* ============ 1. What changes with PMI ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Mortgage Calculator With PMI: What Actually Changes
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          PMI is a fifth line item that appears in your payment whenever your down payment is under
          20%. This calculator adds it automatically — you do not have to turn it on, and you cannot
          accidentally leave it out of a low-down-payment scenario. The moment the down payment
          slider drops below 20%, a PMI row appears in the PITI breakdown and in the payment chart,
          priced with the same formula every lender uses:
        </p>

        <div className="bg-primary/5 border border-primary/25 rounded-xl px-4 py-4 text-center">
          <p className="font-mono text-foreground font-semibold text-base sm:text-lg">
            Monthly PMI = (Loan Amount × Annual PMI Rate) ÷ 12
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Here is how to run a PMI scenario through the calculator above in four steps:
        </p>

        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Set the home price.</strong> The page defaults to
              $400,000, the approximate U.S. median price. Taxes and insurance recalculate with it, so
              only the PMI rate needs to be checked separately.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">2</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Drag the down payment below 20%.</strong> At 20% or
              more the PMI row is $0. At 19.9% and below it fills in — which is why a 10% down payment
              and a 20% down payment on the same home produce very different monthly numbers even
              before you compare the two loan amounts.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">3</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Match the PMI rate to your loan estimate.</strong>{' '}
              The default is <strong className="text-foreground">0.85%</strong> of the loan per year —
              the same default our{' '}
              <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">
                PMI Calculator
              </Link>{' '}
              uses. Credit-score adjustments can push the quote as low as 0.45% or above 1.5%, so
              type in whatever your lender quoted.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">4</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Read the PITI breakdown, not just the total.</strong>{' '}
              The breakdown splits principal and interest, taxes, insurance, HOA, and PMI — that split
              is what tells you how much of your payment is permanent and how much expires.
            </p>
          </li>
        </ol>
      </div>

      {/* ============ 2. The $400,000 payment table ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          A $400,000 Mortgage Payment With PMI, Line by Line
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Here is the same purchase modeled four ways with this page's defaults — a 6.5% 30-year
          fixed loan, flat national assumptions of 1.2% property taxes ($400/month) and $1,500 a
          year insurance ($125/month), and 0.85% annual PMI priced on the loan amount:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Mortgage payment with PMI on a 400,000 dollar home at 5, 10, 15 and 20 percent down"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Down Payment</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Loan Amount</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Principal &amp; Interest</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Taxes + Insurance</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">PMI</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Total Monthly</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">vs. 20% Down</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$380,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,402</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$525</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$269</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$3,196</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">+$648</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">10%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$360,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,275</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$525</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$255</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$3,055</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">+$508</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">15%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$340,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,149</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$525</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$241</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$2,915</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">+$367</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">20%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$320,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,023</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$525</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$0</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$2,548</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Taxes + insurance stay at $525 in every row because both are based on the home price, not
          the loan amount. The highlighted row is the calculator's default scenario.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Read the last column carefully, because it is where most buyers misread a PMI quote. The gap
          between 5% down and 20% down is <strong className="text-foreground">$648 a month</strong> —
          but only <strong className="text-foreground">$269</strong> of it is PMI. The other $379 is
          the cost of financing $60,000 more. PMI expires on a schedule; that $379 does not.
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed">
          Smaller homes follow the same shape. A $300,000 purchase with 10% down finances $270,000 at
          $1,707 in principal and interest, adds $191/month of PMI, and lands at $2,323 all-in with
          the same tax and insurance assumptions.
        </p>
      </div>

      {/* ============ 3. Two reasons the payment is higher ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Two Reasons That Payment Is Higher — Only One of Them Goes Away
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Compare the 10% down row to the 20% down row: the payment is $508 higher, and that $508 has
          two very different halves. Financing $40,000 more costs{' '}
          <strong className="text-foreground">$253 a month</strong> in principal and interest. The PMI
          line adds <strong className="text-foreground">$255 a month</strong>. Roughly half of what you
          feel as "the cost of a smaller down payment" is really a 30-year loan decision — and the two
          halves behave nothing alike.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The PMI half is also stubbornly flat. The premium is priced off the{' '}
          <strong className="text-foreground">original loan amount</strong>, not today's balance:
          $360,000 × 0.85% = $3,060 a year, or $255 a month, in month 1 and in month 90 alike. It does
          not shrink as you pay the loan down, which is why the only way to reduce the PMI line is to
          end it early rather than to wait for it to fade.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          One deliberate simplification: the calculator above holds PMI in place for the full term so
          the monthly figure stays stable while you compare scenarios. Real PMI stops earlier — you
          can request cancellation at 80% loan-to-value, and federal law forces automatic termination
          at 78%. The next table prices both.
        </p>
      </div>

      {/* ============ 4. When PMI ends ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          When PMI Ends and What Your Payment Falls To
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The month your PMI stops is not a guess — it is a point on the amortization schedule above.
          On a 6.5% 30-year loan it arrives when the balance reaches 80% of the purchase price, which
          is the threshold you can request. The table below holds the home value flat (the
          conservative case) and measures both the cancellation request and the automatic 78%
          backstop against the original $400,000 price:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="When PMI ends on a 400,000 dollar home at 5, 10 and 15 percent down, and the payment after it ends"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Down Payment</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">PMI per Month</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">PMI Ends (80% LTV)</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Total PMI Paid</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Payment After</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">If You Wait for 78%</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$269</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">Month 125 (10.4 yrs)</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$33,377</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,927</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">Month 136 · $36,338</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">10%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$255</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">Month 96 (8.0 yrs)</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$24,225</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,800</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">Month 110 · $27,795</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">15%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$241</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">Month 57 (4.8 yrs)</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$13,487</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,674</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">Month 76 · $18,063</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Two lessons sit in that table. First, the drop is real spending money: at 10% down the $255
          disappears, and the payment falls from $3,055 to $2,800 for the remaining 264 payments.
          Second, patience is expensive — waiting for automatic termination instead of asking for
          cancellation costs about <strong className="text-foreground">$3,570 extra</strong> at 10%
          down, and between $2,961 (5% down) and $4,576 (15% down), because the 78% threshold trails
          the 80% one by more than a year.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Appreciation is the other lever, and a big one. Our{' '}
          <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">
            PMI Calculator
          </Link>{' '}
          adds a 3% annual appreciation assumption and an appreciation slider to the same model; under
          that assumption PMI ends at months 49, 34, and 18 for these three down payments — a fraction
          of the flat-value timeline above. If you expect your market to rise, the cancellation
          threshold arrives years sooner.
        </p>
      </div>

      {/* ============ 5. The 10% down trade-off ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          The 10% Down Trade-Off: $40,000 in Cash vs $508 a Month
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Putting 10% down instead of 20% on this home keeps $40,000 in your pocket and adds $508 to
          every monthly payment. Run that through the numbers above and the five-year bill is{' '}
          <strong className="text-foreground">$30,470</strong> in extra payments, of which{' '}
          <strong className="text-foreground">$15,300</strong> is PMI — it is still running at month 60
          in every scenario in the table. Divide the $40,000 you kept by the $508 premium and the
          higher payment consumes your cash in about <strong className="text-foreground">79 months</strong>{' '}
          (6.6 years), and that ignores the return that $40,000 could earn while it waits.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That framing is the useful one: a down payment is not good or bad, it is a trade between cash
          you keep and a payment you carry. If you expect to move or refinance within a few years,
          paying PMI for 36 months to keep $40,000 liquid is usually the better deal. If you are
          staying put for 15 years, buying your way out of PMI up front and never paying it at all
          usually wins. The{' '}
          <Link to="/rent-vs-buy-calculator" className="text-primary hover:underline font-medium">
            Rent vs Buy Calculator
          </Link>{' '}
          prices both sides of that trade — PMI, closing costs, selling costs, and what the down
          payment could earn invested — and reports the year buying pulls ahead.
        </p>
      </div>

      {/* ============ 6. What rate to enter ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          What Rate Should You Enter in the PMI Field?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The calculator's default is 0.85% of the loan per year, which is a realistic quote for a
          conventional loan with a good credit score and a 10% down payment. Your own quote will land
          somewhere in the 0.45% to 1.5% band, driven mostly by credit score and loan-to-value. These
          are the values we use as quick estimates, shown on a $360,000 loan:
        </p>

        <div className="bg-muted/40 border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm"
              aria-label="Typical PMI rates by credit score and the monthly cost on a 360,000 dollar loan"
            >
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="text-left py-2.5 px-4 font-semibold text-foreground">Credit Score</th>
                  <th scope="col" className="text-right py-2.5 px-4 font-semibold text-foreground">Typical Annual Rate</th>
                  <th scope="col" className="text-right py-2.5 px-4 font-semibold text-foreground">Monthly PMI on $360,000</th>
                  <th scope="col" className="text-right py-2.5 px-4 font-semibold text-foreground">Per Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2.5 px-4 text-foreground">760 or higher</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">0.45%</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$135</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$1,620</td>
                </tr>
                <tr className="border-b border-border bg-primary/5">
                  <td className="py-2.5 px-4 text-foreground font-semibold">700 – 759 (default)</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">0.85%</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$255</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$3,060</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2.5 px-4 text-foreground">640 – 699</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">1.25%</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$375</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$4,500</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-foreground">Below 640</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">1.50%</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$450</td>
                  <td className="py-2.5 px-4 text-right text-muted-foreground font-mono">$5,400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Estimates for planning, not a quote. Your lender prices PMI on credit score, LTV, loan type,
          coverage percentage, and the insurer's own grid — a 30-year fixed at 95% LTV can price quite
          differently from the same loan at 85% LTV. Type your loan estimate's rate into the calculator
          to see your own payment.
        </p>
      </div>

      {/* ============ 7. Avoiding PMI ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          How to Avoid PMI Without Waiting Eight Years
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The flat-value table above says PMI runs 8 years at 10% down. You are not required to accept
          that timeline — every lever below shortens or removes it, and each one can be priced in this
          page's calculator:
        </p>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Put 20% down.</strong> The cleanest fix: at 20% down
              the PMI row is $0 from day one, and the only cost is the extra cash. Use the{' '}
              <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
                Affordability Calculator
              </Link>{' '}
              to see what a 20% down payment does to the price range you can actually shop in.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Request cancellation at 80% LTV.</strong> It takes a
              written request, and if your market has risen, an appraisal can measure the 80% against
              today's value rather than the purchase price — which can move the date forward by years.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Attack the balance with extra principal.</strong> At
              10% down, PMI ends at month 96 on schedule. Every extra dollar of principal moves that
              date forward, and the $255/month premium stops at the same time — so an extra payment
              saves twice. Model it in the{' '}
              <Link to="/extra-payment-calculator" className="text-primary hover:underline font-medium">
                Extra Payment Calculator
              </Link>
              .
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Trade the premium for a higher rate
              (lender-paid PMI).</strong> You can model this in the calculator above: set the PMI rate
              to 0 and raise the interest rate. At 10% down on this $400,000 home, 7.0% with no PMI
              gives a $2,920 payment versus $3,055 with 6.5% plus 0.85% PMI — an instant $135/month
              saving. But that higher rate never expires, so if you hold the loan for 30 years and never
              refinance, the difference is roughly $48,700 in favor of paying PMI. Lender-paid is a
              short-hold solution, not a permanent one.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Use a piggyback structure (80/10/10).</strong> A first
              mortgage at 80% LTV plus a 10% second mortgage and 10% down removes PMI entirely, because
              the first loan never exceeds 80% LTV. The trade-off is a second lien with its own rate,
              and the payment you see above covers the first mortgage only — price the second loan
              separately through your lender.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Compare an FHA loan honestly.</strong> FHA loans
              carry MIP rather than PMI: 1.75% up front plus an annual premium in the 0.50%–0.55% range
              that, below 10% down, lasts the life of the loan. To see that payment here, put the
              annual MIP rate in the PMI field — and read{' '}
              <Link to="/blog/fha-vs-conventional" className="text-primary hover:underline font-medium">
                FHA vs. conventional
              </Link>{' '}
              before you assume the lower down payment is the cheaper route.
            </p>
          </li>
        </ul>
      </div>

      {/* ============ 8. What to do next ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Use These Numbers Before You Write an Offer
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The PMI line is the one cost in a mortgage payment that both expires and can be removed early
          — which makes it the easiest expense to plan around, once you know the date it ends. The
          calculator above gives you the monthly amount; the pages below give you the deadline.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
          <p className="text-foreground font-semibold text-sm">
            Want the exact cancellation date for your loan, including the appreciation scenario?
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The{' '}
            <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">
              PMI Calculator
            </Link>{' '}
            tracks the month your balance reaches 80% and 78% LTV, totals every premium you would pay,
            and compares borrower-paid, lender-paid, and FHA MIP side by side. For the rules and the
            appraisal shortcut, read{' '}
            <Link to="/blog/what-is-pmi" className="text-primary hover:underline font-medium">
              How Is PMI Calculated? Formula, Cost &amp; Cancellation
            </Link>
            . And because PMI is only one of the cash costs of buying, price the rest with the{' '}
            <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">
              Closing Cost Calculator
            </Link>{' '}
            before you set a savings target.
          </p>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          All figures on this page come from this calculator's own model: a $400,000 home, 6.5%
          30-year fixed loan, flat national assumptions of 1.2% property taxes and $1,500 a year
          insurance, and a 0.85% annual PMI rate. State-level rates and premiums — Tax Foundation
          2024 and NAIC 2021 — are on our state pages. Change any input above to see your own numbers.
        </p>
      </div>
    </section>
  );
}
