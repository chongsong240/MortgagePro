import { Link } from 'react-router-dom';

/**
 * Long-form content block rendered below the Closing Cost Calculator.
 *
 * Targets the "closing cost calculator" / "how much are closing costs" family of
 * queries by answering them with this page's own cost model: the default
 * $400,000 purchase at 20% down, a 1% loan origination fee, title insurance at
 * 0.5% of price, 15 days of prepaid interest at 6.5%, three months of tax escrow
 * at 1.2%, and the state closing-cost factor stored in src/data/state_data.json
 * (3% for 35 states, 4% for 15 states, 5% for California; 2.5% national default).
 *
 * Every figure below is reproducible in the calculator above by moving the home
 * price, down payment, state, origination fee, and seller-concession controls.
 */
export default function ClosingCostDeepContent() {
  return (
    <section
      aria-label="Closing cost calculator: itemized fees, examples by down payment and state, and how to lower them"
      className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-10"
    >
      {/* ============ 1. Cash to close ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          What Are Closing Costs — and Why They Are Not Part of Your Down Payment
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          In the scenario this page opens with — a $400,000 home, 20% down — the down payment is{' '}
          <strong className="text-foreground">$80,000</strong> and the closing costs are{' '}
          <strong className="text-foreground">$14,980</strong>. The down payment builds equity. The
          closing costs do not: they pay lenders, title companies, appraisers, county recorders, and your
          own future escrow account. Budget only the down payment and you arrive at the closing table
          about $15,000 short.
        </p>

        <div className="bg-primary/5 border border-primary/25 rounded-xl px-4 py-4 text-center">
          <p className="font-mono text-foreground font-semibold text-base sm:text-lg">
            Cash to Close = Down Payment + Closing Costs − Seller Concessions
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          That one line is why the calculator above reports two numbers instead of one. On the same
          $400,000 purchase, the total cash picture looks like this:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Cash to close on a 400,000 dollar home at 5, 10 and 20 percent down"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Down Payment</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Down Amount</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Closing Costs</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Cash to Close</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$20,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$15,740</td>
                <td className="py-2.5 text-right text-foreground font-mono font-semibold">$35,740</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">10%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$40,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$15,487</td>
                <td className="py-2.5 text-right text-foreground font-mono font-semibold">$55,487</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">20%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$80,000</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$14,980</td>
                <td className="py-2.5 text-right text-foreground font-mono font-semibold">$94,980</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Notice the shape of it: quadrupling the down payment from 5% to 20% moves closing costs by only{' '}
          <strong className="text-foreground">$760</strong>, but it moves cash to close by{' '}
          <strong className="text-foreground">$59,240</strong>. Closing costs scale with the property and
          the loan, not with how much cash you bring — so if you are short on cash, the down payment is
          the lever you can actually pull, not the fees.
        </p>
      </div>
      {/* ============ 2. The 11 line items ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Closing Cost Calculator: What Each of the 11 Line Items Actually Is
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Closing costs are not one fee, they are a stack of eleven. Ranking them for the default
          $400,000 / 20% down purchase shows where the money actually goes — and which lines you can
          move before you sign:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Itemized closing cost breakdown on a 400,000 dollar home with 20 percent down"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Line Item</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Estimated Cost</th>
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Set By</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Shop Around?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">Transfer / State Tax</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$4,000</td>
                <td className="py-2.5 pr-4 text-muted-foreground">State &amp; county</td>
                <td className="py-2.5 text-right text-muted-foreground">No</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Loan Origination Fee</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$3,200</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Your lender</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Title Insurance</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$2,000</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Title company</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Prepaid Homeowners Insurance</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$1,500</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Insurance carrier</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Property Tax Escrow</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$1,200</td>
                <td className="py-2.5 pr-4 text-muted-foreground">County tax cycle</td>
                <td className="py-2.5 text-right text-muted-foreground">Sometimes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Prepaid Interest</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$855</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Your closing date</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Escrow / Settlement Fee</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$800</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Closing agent</td>
                <td className="py-2.5 text-right text-muted-foreground">Sometimes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Appraisal Fee</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$550</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Appraiser</td>
                <td className="py-2.5 text-right text-muted-foreground">No</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Home Inspection</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$450</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Inspector</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Title Search</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$300</td>
                <td className="py-2.5 pr-4 text-muted-foreground">Title company</td>
                <td className="py-2.5 text-right text-foreground font-semibold">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Recording Fee</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$125</td>
                <td className="py-2.5 pr-4 text-muted-foreground">County recorder</td>
                <td className="py-2.5 text-right text-muted-foreground">No</td>
              </tr>
              <tr className="border-t-2 border-border">
                <td className="py-2.5 pr-4 text-foreground font-bold">Total Closing Costs</td>
                <td className="py-2.5 pr-4 text-right text-primary font-mono font-bold">$14,980</td>
                <td className="py-2.5 pr-4 text-muted-foreground">3.74% of price</td>
                <td className="py-2.5 text-right text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Three of those lines are not really fees at all. Prepaid interest, the first year of homeowners
          insurance, and the property-tax escrow are{' '}
          <strong className="text-foreground">prepaids and reserves</strong> — money moved forward to
          fund your escrow account. That is why the same three appear on every Loan Estimate, even in a
          no-closing-cost refinance, and why they are the part of closing costs you get back in the form
          of paid bills rather than a service.
        </p>
      </div>

      {/* ============ 3. $400,000 worked example ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          How Much Are Closing Costs on a $400,000 Home?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          If you only remember one number from this page, make it <strong className="text-foreground">
          3%–4% of the purchase price</strong>. On a $400,000 home that is roughly{' '}
          <strong className="text-foreground">$12,000–$16,000</strong> in this model, and the exact
          figure barely reacts to your down payment:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Closing costs on a 400,000 dollar home at 5, 10, 15 and 20 percent down"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Down Payment</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Loan Amount</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Closing Costs</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">% of Price</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Cash to Close</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">5%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$380,000</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$15,740</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">3.94%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$35,740</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">10%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$360,000</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$15,487</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">3.87%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$55,487</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">15%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$340,000</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$15,233</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">3.81%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$75,233</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">20%</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$320,000</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono font-semibold">$14,980</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">3.74%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$94,980</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Two patterns are worth internalizing. First, closing costs are{' '}
          <strong className="text-foreground">slightly regressive on price</strong>: the flat $3,725 of
          appraisal, title search, escrow, recording, inspection, and first-year insurance fees do not
          grow with the house, so the same 20%-down buyer pays $10,759 on a $250,000 home (4.30% of
          price) but $26,235 on an $800,000 home (3.28%). Second, the down payment is not a cost-control
          lever — going from 5% down to 20% down saves $760 of fees while increasing the cash you need at
          closing by $59,240.
        </p>
      </div>

      {/* ============ 4. Fixed vs percentage ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Fixed Fees vs. Percentage Fees: What You Can Actually Negotiate
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Every one of the eleven lines is calculated one of three ways, and the way it is calculated
          decides whether you have any power over it:
        </p>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-primary" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Flat fees — $3,725, or 24.9% of the total.</strong>{' '}
              Appraisal ($550), title search ($300), escrow/settlement ($800), recording ($125), home
              inspection ($450), and the first year of homeowners insurance ($1,500). These barely move
              from house to house, which is exactly why they sting more on cheaper homes. Only the
              insurance policy, the inspection, and the settlement service are realistically shoppable.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-primary" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Loan-based fees — $4,055.</strong> The origination fee
              (1% of the $320,000 loan = $3,200) plus 15 days of prepaid interest ($855). Both are priced
              off the loan amount, so a 10% down payment pushes them up: $3,600 of origination and $962 of
              prepaid interest on the same house. The origination fee is the single most negotiable line
              on the whole page.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-primary" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Price-based fees — $7,200, or 48% of the total.</strong>{' '}
              Title insurance (0.5% of price = $2,000), three months of property-tax escrow ($1,200), and
              the transfer / state tax line ($4,000). These scale with the purchase price rather than the
              loan, and the transfer-tax portion is set by your state — the one line on the page that no
              amount of negotiating can change.
            </p>
          </li>
        </ul>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
          <p className="text-foreground font-semibold text-sm">Where the negotiating room actually is</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The origination fee alone spans <strong className="text-foreground">$1,600</strong> (0.5%)
            to <strong className="text-foreground">$4,800</strong> (1.5%) on a $320,000 loan — a $3,200
            swing on one line. Add a shopped title policy (commonly $500+), a cheaper homeowners policy,
            and a modest seller concession, and a well-prepared buyer routinely moves $4,000–$8,000 of
            the total. Chasing the $125 recording fee is not where the money is.
          </p>
        </div>
      </div>
      {/* ============ 5. By state ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Average Closing Costs by State (2026)
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The state selector above draws on this site's dataset for all 50 states plus the District of
          Columbia. Every jurisdiction is assigned a closing-cost level: <strong className="text-foreground">
          3% for 35 states</strong>, <strong className="text-foreground">4% for 15 states</strong>, and{' '}
          <strong className="text-foreground">5% for California</strong>, with a 2.5% national default
          when no state is chosen. Moving the selector changes one line of the breakdown — the transfer /
          state tax estimate — so the same $400,000 house costs the same $10,980 of ordinary fees and a
          very different state bill:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Closing costs by state on a 400,000 dollar home with 20 percent down"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">State (level)</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Transfer / State Tax</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Total Closing Costs</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">% of Price</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Cash to Close</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Georgia (3%)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$4,800</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$15,780</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">3.94%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$95,780</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">Texas &amp; Colorado (4%)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$6,400</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono">$17,380</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">4.34%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$97,380</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">California (5%)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$8,000</td>
                <td className="py-2.5 pr-4 text-right text-foreground font-mono font-semibold">$18,980</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">4.74%</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">$98,980</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          That is a <strong className="text-foreground">$3,200 swing</strong> between the lowest and
          highest level on an identical purchase — roughly the size of a full 1% origination fee, and
          21% of the entire closing bill. The 3% group covers most of the country: Alabama, Alaska,
          Arkansas, Delaware, Georgia, Idaho, Indiana, Iowa, Kansas, Kentucky, Maine, Michigan,
          Minnesota, Mississippi, Missouri, Montana, Nebraska, New Hampshire, New Mexico, North Carolina,
          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, South Carolina, South Dakota, Tennessee,
          Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming. The 4% group is
          Arizona, Colorado, Connecticut, the District of Columbia, Florida, Hawaii, Illinois, Louisiana,
          Maryland, Massachusetts, Nevada, New Jersey, New York, Rhode Island, and Texas. California
          stands alone at 5%.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          One caveat worth knowing before you plan around this table: the tax on a real estate transfer
          is paid by the buyer in some states, the seller in others, and split in a few — and it can be
          county-level rather than statewide. The calculator treats the state's overall closing-cost
          level as one budgeting line, which is the right granularity for choosing a price range but not
          for predicting a specific settlement statement. Your Loan Estimate is the document that
          matters.
        </p>
      </div>
      {/* ============ 6. Buyer vs seller ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Buyer vs. Seller Closing Costs: Who Pays What
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Everything itemized above is the buyer's side. The seller's list is shorter but, in most
          transactions, heavier: real estate commissions of roughly 5%–6% of the sale price —{' '}
          <strong className="text-foreground">$20,000–$24,000 on a $400,000 home</strong>, which is more
          than the buyer's entire $14,980 closing bill. Since 2024 buyer-agent compensation is negotiated
          separately from the listing agreement, so the structure varies more than it once did. On top of
          commissions, sellers commonly pay their share of transfer taxes, the owner's title policy in
          some states, outstanding liens, and any credits they agree to give the buyer.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That last item is the one buyers can actually negotiate for. A seller concession reduces the
          buyer's cash requirement without touching the down payment or the loan amount — the calculator
          handles it as a deduction from the closing-cost total:
        </p>

        <div className="overflow-x-auto">
          <table
            className="w-full text-sm"
            aria-label="Effect of seller concessions on cash to close for a 400,000 dollar home"
          >
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left py-2.5 pr-4 font-semibold text-foreground">Seller Concession</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Net Closing Costs</th>
                <th scope="col" className="text-right py-2.5 pr-4 font-semibold text-foreground">Cash to Close</th>
                <th scope="col" className="text-right py-2.5 font-semibold text-foreground">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">None</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$14,980</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$94,980</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">—</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2.5 pr-4 text-foreground">2% ($8,000)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$6,980</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono">$86,980</td>
                <td className="py-2.5 text-right text-muted-foreground font-mono">−$8,000</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2.5 pr-4 text-foreground font-semibold">3% ($12,000)</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono font-semibold">$2,980</td>
                <td className="py-2.5 pr-4 text-right text-muted-foreground font-mono font-semibold">$82,980</td>
                <td className="py-2.5 text-right text-foreground font-mono font-semibold">−$12,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          A 3% concession cuts the cash you bring to closing by <strong className="text-foreground">
          12.6%</strong> — from $94,980 to $82,980 — with no change to the price on the contract or the
          down payment percentage. Concession limits are set by loan type and loan-to-value ratio
          (commonly 3%–9% on conventional primary residences), so a large ask has to fit inside those
          caps, and concessions are far easier to win in a slow market than a competitive one.
        </p>
      </div>
      {/* ============ 7. How to lower them ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          How to Lower Your Closing Costs (What Each Move Is Actually Worth)
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Closing costs are one of the few parts of a home purchase where a few phone calls move real
          money. Priced against the $400,000 / 20% down example, here is what each move is worth:
        </p>

        <ol className="space-y-4">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Compare at least three Loan Estimates.</strong> Lenders
              quote the same 30-year fixed product with $3,000–$8,000 of difference in fees. Ask each one
              to quote at the same rate and the same points, then compare Section A (origination charges)
              and Section B (services you cannot shop for) line by line.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">2</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Negotiate the origination fee.</strong> The 1% line in
              this model is $3,200; 0.5% is $1,600 and a full lender credit takes it to $0. The trade-off
              is rate: on this $320,000 loan, 0.5% more in rate costs about $106/month, so buying the fee
              out for $3,200 breaks even around month 30. Worth it if you expect to refinance or move;
              expensive if you keep the loan for a decade.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">3</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Ask for a seller concession.</strong> Three percent of
              the price is $12,000 on this purchase and takes cash to close from $94,980 to $82,980.
              Sellers often prefer a credit to a price cut because it does not reset the neighborhood
              comps — which is exactly why it is worth asking for.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">4</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Shop title insurance and settlement services.</strong>{' '}
              The $2,000 title line here is 0.5% of the purchase price — a national average. Title rates
              are state-regulated in some states and freely priced in others, and competing quotes
              commonly differ by $500 or more. Your lender cannot require you to use a specific
              provider without telling you that you may shop.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">5</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Re-price the homeowners policy before closing.</strong>{' '}
              The estimate assumes $1,500 for the first year, paid up front into escrow. A policy that
              comes in $300 cheaper returns $300 at the table and lowers your escrow payment for as long
              as you own the home.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">6</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Choose the closing date deliberately.</strong> Prepaid
              interest accrues at about $57 per day on a $320,000 loan at 6.5% — the 15 days in this
              estimate cost $855. Closing in the last week of the month rather than the first can pull
              $800 or more out of that line, though it also shifts when your first payment is due.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">7</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Keep the home inspection.</strong> At $450 it is 3% of
              the closing total, and it is the only line that protects the other $14,530 — plus every
              future payment behind it.
            </p>
          </li>
        </ol>
      </div>
      {/* ============ 8. LE vs CD ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Loan Estimate vs. Closing Disclosure: The Three-Day Rule
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The calculator above produces a budget. Two federally required documents produce the truth: the{' '}
          <strong className="text-foreground">Loan Estimate (LE)</strong>, which your lender must send
          within three business days of your application, and the{' '}
          <strong className="text-foreground">Closing Disclosure (CD)</strong>, which you must receive at
          least three business days before you sign. Compare them line by line — the categories of fees
          are identical, and the rules decide which numbers are allowed to move:
        </p>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">Zero tolerance.</strong> The lender's own charges —
              origination, points, and the transfer taxes it itemizes — cannot increase between the LE and
              the CD at all. If they do, the lender refunds you the difference. This is the safest group
              to compare across lenders.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">10% cumulative tolerance.</strong> Recording fees and
              third-party services you are not permitted to shop for can rise, but not by more than 10%
              across the whole category. Small overages here are normal and not worth a fight.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">✓</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong className="text-foreground">No tolerance limit.</strong> Prepaid interest,
              homeowners insurance premiums, escrow deposits, and any service you shop for yourself can
              change freely. That is exactly the group where your closing date and your own shopping move
              the number — which is why the calculator shows prepaids as a separate block.
            </p>
          </li>
        </ul>

        <p className="text-muted-foreground leading-relaxed">
          The practical version: compare Section A of the Loan Estimate across three lenders, expect the
          prepaid lines to shift with your closing date, and never sign a Closing Disclosure you have not
          compared against the Loan Estimate. If a zero-tolerance fee jumped, ask for it in writing before
          you close — that request alone has resolved a lot of "surprise" fees.
        </p>
      </div>
      {/* ============ 9. Methodology ============ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          How This Calculator Estimates Your Closing Costs
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Every figure on this page comes from one model, and all of it is reproducible above. The
          estimate assembles eleven line items: loan origination at 1% of the loan amount (adjustable from
          0% to 3%), title insurance at 0.5% of the purchase price, 15 days of prepaid interest at a 6.5%
          rate, three months of property-tax escrow at a 1.2% tax rate, a flat $550 appraisal, an $800
          settlement fee, a $300 title search, a $125 recording fee, a $450 inspection, a $1,500
          first-year insurance premium, and a transfer / state tax line set to 40% of your state's average
          closing-cost level — 2.5% when National Average is selected. Seller concessions are subtracted
          from the total, and the down payment is added back to produce cash to close.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          What the model deliberately leaves out, because it varies too much to estimate responsibly:
          discount points and rate buydowns, HOA and condo dues, attorney fees in attorney states,
          prorated property taxes between buyer and seller, and per-diem interest beyond the 15 days
          assumed here. The prepaid lines also use the site-standard 6.5% rate and 1.2% tax rate rather
          than your own loan terms, so treat the result as a budgeting range and your Loan Estimate as the
          number to plan around. Our{' '}
          <Link to="/calculator-methodology" className="text-primary hover:underline font-medium">
            calculator methodology
          </Link>{' '}
          page documents the sourcing and review standards behind the state dataset this estimate uses.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
          <p className="text-foreground font-semibold text-sm">
            Ready to budget the whole purchase instead of just the fees?
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Take the cash-to-close figure from this page into the{' '}
            <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">
              Mortgage Calculator
            </Link>{' '}
            to see the monthly payment it buys, check how much house your income supports with the{' '}
            <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
              Affordability Calculator
            </Link>
            , and model the PMI that comes with any down payment under 20% in the{' '}
            <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">
              PMI Calculator
            </Link>
            . For the underlying payment math, see{' '}
            <Link to="/blog/monthly-payment-breakdown" className="text-primary hover:underline font-medium">
              how a monthly mortgage payment breaks down
            </Link>{' '}
            and our full{' '}
            <Link to="/blog/closing-costs-explained" className="text-primary hover:underline font-medium">
              closing costs explained
            </Link>{' '}
            guide.
          </p>
        </div>
      </div>
    </section>
  );
}
