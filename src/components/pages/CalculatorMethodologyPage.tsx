import { Link } from 'react-router-dom';
import { Calculator, DollarSign, Percent, Home, Banknote, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function CalculatorMethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Calculator Methodology</h1>

      <div className="text-muted-foreground space-y-6 leading-relaxed">

        <p className="text-lg bg-card border border-border rounded-xl p-6">
          At MortgagePro, we believe transparency is essential. This page explains how each of our
          mortgage calculators works — the formulas, assumptions, and data sources behind every
          calculation. Our goal is to give you confidence in the numbers you see.
        </p>

        {/* Standard Mortgage Calculator */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calculator className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Standard Mortgage Calculator</h2>
            </div>
            <h3 className="font-semibold text-foreground mb-2">What It Calculates</h3>
            <p className="mb-4">
              The monthly payment for a fixed-rate mortgage, broken down into principal and interest,
              property taxes, homeowners insurance, and PMI (if applicable).
            </p>

            <h3 className="font-semibold text-foreground mb-2">Formula</h3>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4 whitespace-pre-wrap">
              M = P × [r(1+r)^n] / [(1+r)^n - 1]

              Where:
              M = Monthly principal & interest payment
              P = Loan amount (purchase price minus down payment)
              r = Monthly interest rate (annual rate ÷ 12)
              n = Total number of payments (loan term in years × 12)
            </div>

            <h3 className="font-semibold text-foreground mb-2">Additional Components</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Property Taxes:</strong> Monthly amount = (annual tax rate × home value) ÷ 12. Default rate is based on state-level averages from ATTOM Data Solutions.</li>
              <li><strong>Home Insurance:</strong> Monthly amount based on state-average annual premiums. Sources include NAIC (National Association of Insurance Commissioners) data.</li>
              <li><strong>PMI:</strong> Calculated as 0.5% to 1% of the loan amount annually, divided by 12, applied when down payment is less than 20%.</li>
            </ul>

            <h3 className="font-semibold text-foreground mb-2">Assumptions</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Fixed interest rate for the entire loan term</li>
              <li>Equal monthly payments</li>
              <li>Standard amortization schedule</li>
              <li>Tax and insurance estimates are approximate — actual amounts vary by location and property</li>
            </ul>
          </div>
        </div>

        {/* Affordability Calculator */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Affordability Calculator</h2>
            </div>
            <h3 className="font-semibold text-foreground mb-2">What It Calculates</h3>
            <p className="mb-4">
              The maximum home price a buyer can afford based on their income, debts, down payment,
              and current interest rates.
            </p>

            <h3 className="font-semibold text-foreground mb-2">Methodology</h3>
            <p className="mb-4">
              The calculator uses the 28/36% debt-to-income (DTI) rule, which is the standard
              guideline used by most mortgage lenders:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong>Front-end ratio (28%):</strong> Total monthly housing costs should not exceed 28% of gross monthly income</li>
              <li><strong>Back-end ratio (36%):</strong> Total monthly debt payments (housing + other debts) should not exceed 36% of gross monthly income</li>
            </ul>

            <h3 className="font-semibold text-foreground mb-2">Calculation Steps</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Calculate maximum allowable housing payment based on front-end ratio</li>
              <li>Calculate maximum allowable total debt payment based on back-end ratio</li>
              <li>Subtract estimated taxes, insurance, PMI, and HOA fees from housing payment</li>
              <li>Solve for loan amount using the standard mortgage formula</li>
              <li>Add down payment to determine maximum home price</li>
            </ol>
          </div>
        </div>

        {/* Bi-Weekly Calculator */}
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Percent className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Bi-Weekly Mortgage Calculator</h2>
            </div>
            <h3 className="font-semibold text-foreground mb-2">What It Calculates</h3>
            <p className="mb-4">
              The savings from switching to bi-weekly mortgage payments (half the monthly payment
              every two weeks), including interest saved and years reduced from the loan term.
            </p>

            <h3 className="font-semibold text-foreground mb-2">Methodology</h3>
            <p className="mb-4">
              With bi-weekly payments, you make 26 half-payments per year, equivalent to 13 full
              monthly payments — one extra payment per year. The calculator:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Simulates the standard amortization schedule with monthly payments</li>
              <li>Simulates the accelerated amortization schedule with bi-weekly payments</li>
              <li>Compares total interest paid and loan payoff dates</li>
            </ul>

            <h3 className="font-semibold text-foreground mb-2">Key Assumption</h3>
            <p>The lender applies each bi-weekly payment immediately rather than holding it until the monthly due date.</p>
          </div>
        </div>

        {/* Other calculators - concise */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Banknote className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Other Calculators</h2>
          </div>
          <p className="mb-4">All remaining calculators use standard financial formulas:</p>
          <div className="space-y-4">
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">Refinance Calculator</h3>
              <p>Compares remaining payments on the current loan vs. a new loan with a different rate and term. Uses the standard mortgage formula for both scenarios and calculates break-even point (closing costs ÷ monthly savings).</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">PMI Calculator</h3>
              <p>Calculates PMI cost based on loan-to-value ratio (LTV). PMI rates range from 0.5% to 1% annually depending on credit score and LTV, following industry-standard PMI pricing grids.</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">Closing Cost Calculator</h3>
              <p>Estimates closing costs as a percentage of the purchase price. Typical ranges: 2–5% for buyers, adjusted for state-level variations in transfer taxes and recording fees. Data sourced from national real estate settlement averages.</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">Extra Payment Calculator</h3>
              <p>Shows the impact of making additional principal payments. Uses standard amortization logic — extra payments reduce the principal balance faster, which reduces total interest and shortens the loan term.</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">ARM vs Fixed Rate Calculator</h3>
              <p>Compares the initial payments and potential future payments of an adjustable-rate mortgage (ARM) against a fixed-rate mortgage over the same period. ARM calculations use the initial rate for the fixed period, then estimate adjustments based on historical index rate assumptions.</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">Rent vs Buy Calculator</h3>
              <p>Compares the total cost of renting vs. buying over a user-defined time horizon. Buying costs include mortgage payments, taxes, insurance, maintenance (1% of home value annually), and closing costs. Renting costs include rent, renters insurance, and annual rent increases. Accounts for equity growth and home price appreciation.</p>
            </div>
            <div className="border-b border-border pb-4 last:border-0 last:pb-0">
              <h3 className="font-semibold text-foreground mb-1">FIRE Impact Calculator</h3>
              <p>Calculates how a mortgage affects Financial Independence / Retire Early (FIRE) goals. Compares the investment returns of a lump sum vs. using that money for a down payment, factoring in mortgage costs, expected market returns (7% average annual return assumption), and the 4% withdrawal rule.</p>
            </div>
          </div>
        </div>

        {/* General Methodology */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Home className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">General Methodology & Limitations</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Educational Estimates</strong>
                <p>All calculators provide estimates for educational and planning purposes. They are not a substitute for professional financial advice or formal loan pre-approval from a licensed mortgage lender.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Current Data</strong>
                <p>Interest rate defaults are based on current market averages from Freddie Mac's Primary Mortgage Market Survey (PMMS). Property tax and insurance defaults are based on the most recent state-level averages available.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Calculator className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground">Regular Updates</strong>
                <p>We review and update our calculator defaults quarterly to reflect changes in interest rates, tax data, and insurance costs. We also review our formulas annually to ensure they continue to reflect industry standards.</p>
              </div>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Questions About Our Calculations?</h2>
        <p>
          If you have questions about any specific calculation, or if you've found a discrepancy in
          our results, please{' '}
          <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link>.
          We're committed to accuracy and appreciate feedback from our users.
        </p>
      </div>
    </div>
  );
}
