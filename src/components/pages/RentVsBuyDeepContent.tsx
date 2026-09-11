import { Link } from 'react-router-dom';

/**
 * Long-form content block rendered below the Rent vs Buy Calculator.
 *
 * Answers the questions people actually search when they type "rent vs buy
 * calculator": how the breakeven year is computed, what the numbers look like
 * year by year, the 5% rule, why transaction costs dominate short holds, and
 * how the down payment (and the PMI that comes with it) moves the answer.
 * Every figure is generated from the calculator's own net-worth model at its
 * default inputs: $400,000 home, 20% down, 6.5%, 3.5% appreciation, $2,400
 * rent rising 3%/yr, 5% investment return, 3% closing and 6% selling costs.
 */
export default function RentVsBuyDeepContent() {
  return (
    <section
      aria-label="How the rent vs buy breakeven year is calculated, with year-by-year net worth and the 5% rule"
      className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-10"
    >
      {/* ============ 1. Methodology ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">How the Breakeven Year Is Calculated</h2>
        <p className="text-muted-foreground leading-relaxed">
          Most rent vs buy tools add up what you pay — rent on one side, mortgage payments on the
          other — and call the crossing point "breakeven." That misses the two biggest items in the
          decision: the <strong className="text-foreground">equity you build</strong> by owning, and
          the <strong className="text-foreground">investment growth you give up</strong> on the cash
          you sink into a purchase. So this calculator compares net worth instead of spending.
        </p>

        <div className="bg-primary/5 border border-primary/25 rounded-xl px-4 py-4 space-y-2">
          <p className="font-mono text-foreground font-semibold text-sm sm:text-base text-center">
            Buyer net worth = Home value − Loan balance − Selling costs + side portfolio
          </p>
          <p className="font-mono text-foreground font-semibold text-sm sm:text-base text-center">
            Renter net worth = Side portfolio
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The <strong className="text-foreground">side portfolio</strong> is what makes the model rent
          sensitive. The renter starts with the exact cash a buyer would sink at closing — the down
          payment plus closing costs — invested at the return you enter (5% by default). Every month,
          whichever path costs less invests the difference. When rent is cheap, the renter's portfolio
          compounds faster than the owner builds equity, and buying can take a decade or more to catch
          up. When rent is expensive, the owner pulls ahead within a few years.
        </p>
      </div>

      {/* ============ 2. Default scenario ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">The Default Scenario, Line by Line</h2>
        <p className="text-muted-foreground leading-relaxed">
          Here is every input the calculator starts with, so you can reproduce the result before you
          change a single slider:
        </p>

        <div className="bg-muted/40 border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm" aria-label="Default rent vs buy scenario inputs and results">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Home price</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$400,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Down payment (20%)</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$80,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Loan at 6.5%, 30-year fixed</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$320,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Principal &amp; interest</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$2,023/mo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Property tax (1.2%) + maintenance (1%)</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$733/mo</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 px-4 font-semibold text-foreground">Total cost of owning, year one</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$2,756/mo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Rent (rising 3% per year)</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$2,400/mo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Cash to close (20% down + 3% closing)</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$92,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 px-4 text-muted-foreground">Selling costs when you exit (6%)</td>
                <td className="py-2.5 px-4 text-right font-mono text-foreground">$24,000 on a $400,000 sale</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="py-3 px-4 font-semibold text-foreground">Breakeven year</td>
                <td className="py-3 px-4 text-right font-mono text-primary font-semibold text-base">Year 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed border-l-4 border-primary/40 pl-4">
          Notice the shape of the trade. Owning costs $356 more than renting in month one, but rent
          rises 3% a year while a fixed-rate mortgage payment does not. By year four the owner's growing
          equity and frozen payment overtake the renter's portfolio — and if rent starts at $2,000
          instead of $2,400, the very same home takes until year eight to break even.
        </p>
      </div>

      {/* ============ 3. Year-by-year net worth ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Net Worth by Holding Period</h2>
        <p className="text-muted-foreground leading-relaxed">
          This is the table the breakeven year is read from. Buyer net worth nets home value against the
          remaining mortgage and a 6% selling cost; renter net worth is the invested portfolio. The
          winner flips in year four and never flips back:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Buyer versus renter net worth by holding period">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Hold Period</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Buyer Net Worth</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Renter Net Worth</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Who's Ahead</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">1 year</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$72,737</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$100,820</td>
                <td className="py-2.5 text-right text-muted-foreground">Rent by $28,083</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">3 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$108,343</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$118,065</td>
                <td className="py-2.5 text-right text-muted-foreground">Rent by $9,722</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">4 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$127,278</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$126,444</td>
                <td className="py-2.5 text-right text-primary font-semibold">Buy by $834 — breakeven</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$147,015</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$134,627</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $12,388</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">7 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$189,045</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$150,297</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $38,748</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">10 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$262,072</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$171,601</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $90,471</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">15 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$422,996</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$198,783</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $224,213</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">20 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$647,038</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$210,514</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $436,524</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">30 years</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$1,374,530</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$154,372</td>
                <td className="py-2.5 text-right text-muted-foreground">Buy by $1,220,158</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed border-l-4 border-primary/40 pl-4">
          Two things stand out. First, the advantage keeps widening instead of plateauing, because a
          fixed mortgage payment gets cheaper in real terms every year rent rises. Second, the margin at
          the breakeven point is razor thin — $834 after four years — so rent, rates, and especially how
          long you stay are what really decide the answer. By year ten the buyer is ahead by $90,471,
          and by year thirty by roughly $1.2 million.
        </p>
      </div>

      {/* ============ 4. The 5% rule ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">The 5% Rule, Checked Against the Model</h2>
        <p className="text-muted-foreground leading-relaxed">
          The classic shortcut says buying beats renting once annual rent exceeds 5% of the purchase
          price — property taxes, maintenance, and the cost of capital, all in one number. On a
          $400,000 home that line sits at $1,667 a month:
        </p>

        <div className="bg-primary/5 border border-primary/25 rounded-xl px-4 py-4 text-center">
          <p className="font-mono text-foreground font-semibold text-sm sm:text-base">
            5% rule rent = $400,000 × 0.05 ÷ 12 = $1,667/mo
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Run $1,667 through this calculator and buying edges ahead in <strong className="text-foreground">year
          28</strong>; drop rent to $1,600 and it never breaks even. So on this house the 5% rule is
          almost exactly the indifference point for someone who stays 30 years — a useful sanity check,
          but not a green light for a shorter hold. For a ten-year stay you need rent near $2,000 to
          break even by year eight:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Breakeven year at different monthly rent levels">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Monthly Rent</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Rent as % of Price</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Breakeven Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground font-mono">$1,500</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.38%/mo</td>
                <td className="py-2.5 text-right text-destructive font-semibold">Never</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground font-mono">$1,667</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.42%/mo</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">28</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground font-mono">$1,800</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.45%/mo</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">15</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground font-mono">$2,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.50%/mo</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">8</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground font-mono">$2,400</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.60%/mo</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">4</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground font-mono">$3,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">0.75%/mo</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ============ 5. Transaction costs ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Why Transaction Costs Decide Short Holds</h2>
        <p className="text-muted-foreground leading-relaxed">
          Two payments never show up in a monthly payment comparison, and together they are the single
          biggest reason short-term buying loses. On the default scenario the buyer sinks
          <strong className="text-foreground"> $12,000 in closing costs</strong> at the start and
          <strong className="text-foreground"> $24,000 in selling costs</strong> on the way out — about
          $36,000 that buys no equity at all. Strip those costs out of the model and the answer changes
          completely:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Breakeven year with and without transaction costs">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Assumption</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Breakeven Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Default: 3% closing + 6% selling</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">4</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">If selling were free (closing only)</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">If closing were free (selling only)</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">3</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">If both were free (unrealistic)</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Selling costs are the heavier of the two, which is why a 6% commission is a real
          consideration rather than a formality — a flat-fee or lower-commission sale shortens the
          breakeven period directly. Put another way: if you might move within three years, the model
          says rent, because the $24,000 exit cost alone eats roughly a year of equity growth.
        </p>
      </div>
      {/* ============ 6. Down payment and PMI ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Down Payment and PMI: The Hidden Cost of Buying Sooner</h2>
        <p className="text-muted-foreground leading-relaxed">
          A smaller down payment gets you into a house sooner, but it raises the loan balance, adds
          mortgage insurance, and weakens the buying case because more of each payment goes to PMI and
          interest instead of equity. Holding every other default constant:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Rent vs buy breakeven by down payment with PMI">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Down</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Loan</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">PMI</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Total PMI</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Breakeven</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$380,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$269/mo</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$33,108</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">7 yrs</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">10%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$360,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$255/mo</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$23,970</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">7 yrs</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">15%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$340,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$241/mo</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$13,246</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">6 yrs</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">20%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$320,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$0</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$0</td>
                <td className="py-2.5 text-right text-primary font-semibold font-mono">4 yrs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          PMI here is priced at 0.85% of the loan per year and charged while the balance is above 80% of
          the original price. Notice how much sooner it ends at 15% down than at 5% down — $13,246
          versus $33,108 — because appreciation and principal paydown clear the 80% threshold faster when
          you start closer to it. Buying at 5% down pushes breakeven from year four to year seven, and
          the ten-year net worth gap versus 20% down is $53,836. Run your own loan amount through the{' '}
          <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">
            PMI calculator
          </Link>{' '}
          to see the monthly cost and cancellation date for your scenario, where you can also cancel at 80% of the
          home's current value rather than the original price used here. Or use the{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">
            mortgage calculator
          </Link>{' '}
          to compare how a different down payment changes your payment.
        </p>
      </div>
      {/* ============ 7. When renting wins ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">When Renting Actually Wins</h2>
        <p className="text-muted-foreground leading-relaxed">
          The buying case in the defaults is strong — rent at $2,400 is 0.60% of the price every month,
          well above the 0.42% you need just to break even over 30 years on this house. But the answer
          is fragile in both directions, and the assumptions most likely to flip it are the ones buyers
          usually leave at their most optimistic setting: appreciation and investment return.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="How each assumption changes the rent vs buy breakeven year">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">If You Change This</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Breakeven Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Home appreciation 5% instead of 3.5%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Home appreciation stays at 0%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">13</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Rent never rises instead of +3%/yr</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Renter invests at 7% instead of 5%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">6</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Renter invests a cautious 3%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">4</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">0% appreciation and rent of $1,500</td>
                <td className="py-2.5 text-right text-destructive font-semibold font-mono">Never</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 text-foreground">$2,000 rent with only 5% down</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">16</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          So renting wins outright when rent is cheap relative to the price, when you will not stay five
          years or more, when appreciation lags inflation, and when the down payment can be invested at
          a decent return. Notice the middle row: a flat rent schedule is a milder problem than a flat
          home price, because a fixed mortgage payment still gets cheaper relative to a rising rent.
          That is the trade in one sentence — buying is a bet on time, on staying put, and on the home's
          value keeping pace.
        </p>
      </div>

      {/* ============ 8. Where to go next ============ */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
        <p className="text-foreground font-semibold text-sm">
          Want the narrative version — how these numbers play out for a real household deciding right
          now?
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Read{' '}
          <Link to="/blog/rent-vs-buy-2026" className="text-primary hover:underline font-medium">
            Rent vs Buy in 2026: The Math Most People Get Wrong
          </Link>{' '}
          for the story behind the breakeven year. If the down payment is the sticking point, start with{' '}
          <Link to="/blog/closing-costs-explained" className="text-primary hover:underline font-medium">
            Closing Costs Explained
          </Link>{' '}
          and{' '}
          <Link to="/blog/what-is-pmi" className="text-primary hover:underline font-medium">
            How Is PMI Calculated?
          </Link>{' '}
          — the two costs that decide whether a short hold works. Then check what you can actually
          afford with the{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
            affordability calculator
          </Link>{' '}
          and the{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">
            closing cost calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
