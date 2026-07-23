import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';
import { TipBox, WarningBox, InfoBox, KeyTakeaway, ComparisonTable, CalculatorCTA, StatHighlight } from './BlogComponents';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function IncomeNeeded() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="How Much Income Do I Need for a $500,000 House?"
        description="The short answer is around $135,000 a year. The longer answer depends on your down payment, interest rate, other debts, and the expenses most people forget."
        datePublished="2026-06-05"
        url="https://www.mortgagepro.io/blog/income-needed"
        faqs={[
          { q: 'How much income do I need to buy a $500,000 house?', a: 'With 20% down at 6.5% interest, the monthly payment is about $3,178. Using the 28% DTI rule, you need roughly $136,200/year in gross income. With only 5% down, the required income rises to about $158,500/year due to PMI and a larger loan.' },
          { q: 'Can I buy a $500,000 house on a $100,000 salary?', a: 'Generally no, not comfortably. A $100,000 salary allows a maximum housing payment of about $2,333/month under the 28% rule, but a $500,000 home with 20% down costs about $3,178/month. A very large down payment could make it work.' },
          { q: 'How does debt affect how much house I can afford?', a: 'Lenders use a 36% back-end DTI ratio for all debts combined. If you have $500/month in car and student loan payments, that reduces your available housing budget by $500/month, potentially lowering your maximum home price by $60,000-$80,000.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>June 5, 2026</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How Much Income Do I Need for a $500,000 House?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The short answer is around $135,000 a year. The longer answer depends on your down payment, 
          your other debts, and the stuff most people don't think about until closing.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Table of Contents
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            ['toms-story', '1. The Awkward Conversation'],
            ['income-formula', '2. The Income Formula Lenders Actually Use'],
            ['running-numbers', '3. Running the Numbers on a $500K Home'],
            ['what-changes', '4. What Changes the Math'],
            ['other-debts', '5. The Part People Forget: Your Other Debts'],
            ['100k-salary', '6. Can You Buy on a $100K Salary?'],
            ['income-table', '7. What Different Income Levels Actually Buy'],
            ['beyond-payment', '8. The Stuff Beyond the Payment'],
            ['know-your-number', '9. The Best Way to Know Your Number'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* ============================================ */}
      {/* Section 1 - Tom's Story */}
      {/* ============================================ */}
      <section id="toms-story" className="mb-10">
        <p className="text-lg leading-relaxed mb-4">
          My neighbor Tom spent most of last year convinced he could afford a half-million-dollar home. 
          His reasoning was straightforward: he made good money, his credit was solid, and houses in 
          our area cost around that much. What else was there to figure out?
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Then he actually sat down with a loan officer and ran the numbers.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The monthly payment, fully loaded, was almost $1,200 more than he expected. He hadn't accounted 
          for property taxes at our local rate. He hadn't factored in PMI because his down payment was 
          under 20%. And he was carrying a car loan that chewed into his debt-to-income ratio.
        </p>
        <p className="text-lg leading-relaxed">
          Tom could actually afford the house, as it turned out. But he needed to earn considerably more 
          than he'd assumed. Here's why, and how to run your own numbers so you don't end up in the 
          same awkward conversation.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 2 - Income Formula */}
      {/* ============================================ */}
      <section id="income-formula" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Income Formula Lenders Actually Use
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Banks don't guess. They follow a formula, and that formula is surprisingly simple.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Most conventional lenders use the <strong>28% front-end ratio</strong>: your total monthly housing 
          payment should not exceed 28% of your gross monthly income. "Gross" means before taxes and 
          deductions. "Housing payment" means everything—principal, interest, property taxes, insurance, 
          and PMI if it applies.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          So the income math works backward from the payment:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-center">
          <p className="font-mono text-lg font-semibold">
            Required Monthly Income = Estimated Housing Payment ÷ 0.28
          </p>
        </div>
        <InfoBox title="📘 The 28% Rule">
          <p>Lenders use this ratio because they want to ensure you have enough income left over for living expenses, savings, and other financial obligations after your housing payment. It's not a recommendation — it's the <strong>maximum</strong> they'll allow.</p>
        </InfoBox>
        <p className="text-lg leading-relaxed">
          That's it. Once you know your likely payment, divide by 0.28, and you've got your minimum 
          monthly income. Multiply by 12, and you've got your annual salary requirement.
        </p>
        <StatHighlight value="$136,200" label="Minimum annual income needed for a $500K home with 20% down at 6.5%" color="blue" />
      </section>

      {/* ============================================ */}
      {/* Section 3 - Running Numbers */}
      {/* ============================================ */}
      <section id="running-numbers" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Running the Numbers on a $500,000 Home
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Let's walk through a realistic scenario. Not best-case. Not worst-case. Just what a typical 
          buyer with decent credit and a 20% down payment would face right now.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 text-muted-foreground">
          <li>Home price: <strong className="text-foreground">$500,000</strong></li>
          <li>Down payment: <strong className="text-foreground">20% ($100,000)</strong></li>
          <li>Loan amount: <strong className="text-foreground">$400,000</strong></li>
          <li>Interest rate: <strong className="text-foreground">6.5%</strong></li>
          <li>Loan term: <strong className="text-foreground">30 years</strong></li>
        </ul>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Expense</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Monthly Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Principal & Interest</td>
                <td className="text-right py-2 font-semibold">$2,528</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Property Taxes (estimated)</td>
                <td className="text-right py-2">~$500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Homeowners Insurance</td>
                <td className="text-right py-2">~$150</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="py-3 pr-4 font-bold text-foreground">Total Housing Payment</td>
                <td className="text-right py-3 font-bold text-foreground text-lg">~$3,178</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          Now apply the 28% rule:
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4 text-center">
          <p className="text-lg">
            <span className="font-semibold">$3,178</span> ÷ 0.28 = 
            <span className="font-semibold"> $11,350</span> per month
          </p>
          <p className="text-lg">
            × 12 = <span className="font-semibold text-primary">~$136,200 per year</span>
          </p>
        </div>
        <p className="text-lg leading-relaxed">
          That's the income a lender would typically want to see for this loan. Roughly $135,000 to 
          $140,000 in household income.
        </p>
      </section>

      {/* ============================================ */}
      {/* Calculator Data Table - Unique to MortgagePro */}
      {/* ============================================ */}
      <section id="calculator-data" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          📊 From Our Calculator: Down Payment Comparison
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          These numbers are computed using <strong>MortgagePro's mortgage calculator</strong> formula — 
          the same amortization math lenders use. Every row is unique to your income scenario:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Down Payment</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Loan Amount</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Monthly P&I</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">+ PMI</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Total PITI</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Income Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5% ($25,000)</td>
                <td className="text-right py-2 pr-4">$475,000</td>
                <td className="text-right py-2 pr-4">$3,003</td>
                <td className="text-right py-2 pr-4 text-amber-600">$277</td>
                <td className="text-right py-2 pr-4 font-semibold">$3,839</td>
                <td className="text-right py-2 font-semibold text-amber-700">$164,500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">10% ($50,000)</td>
                <td className="text-right py-2 pr-4">$450,000</td>
                <td className="text-right py-2 pr-4">$2,844</td>
                <td className="text-right py-2 pr-4 text-amber-600">$263</td>
                <td className="text-right py-2 pr-4 font-semibold">$3,666</td>
                <td className="text-right py-2 font-semibold">$157,100</td>
              </tr>
              <tr className="border-b border-border bg-emerald-50 dark:bg-emerald-950/20">
                <td className="py-2 pr-4 font-semibold">20% ($100,000) ✓</td>
                <td className="text-right py-2 pr-4">$400,000</td>
                <td className="text-right py-2 pr-4">$2,528</td>
                <td className="text-right py-2 pr-4 text-emerald-600">$0</td>
                <td className="text-right py-2 pr-4 font-semibold text-emerald-700">$3,087</td>
                <td className="text-right py-2 font-semibold text-emerald-700">$132,300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Assumptions:</strong> $500,000 home price, 6.5% APR, 30-year fixed. Property taxes at 1% (~$417/mo), 
          homeowners insurance at national average (~$142/mo). PMI at 0.7% of loan annually. 
          Income calculated using the 28% front-end DTI rule.
        </p>
        <p className="text-sm text-muted-foreground">
          Source: <Link to="/mortgage-calculator" className="text-primary hover:underline">MortgagePro Calculator</Link> — 
          try your own numbers for free.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 4 - What Changes the Math */}
      {/* ============================================ */}
      <section id="what-changes" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          What Changes the Math
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          That $136,000 figure assumes a clean scenario. Here's what happens when you change one variable.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">What if you put down only 5%?</h3>
          <p className="text-muted-foreground mb-2">
            Now you're borrowing $475,000 instead of $400,000. PMI gets added—figure roughly $250 to 
            $300 a month. Your total housing payment could push past <strong>$3,700</strong>.
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold">$3,700</span> ÷ 0.28 = $13,214/month<br />
            × 12 = <strong className="text-amber-700 dark:text-amber-300">~$158,500 per year</strong>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            A smaller down payment just pushed the required income up by more than $20,000.
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">What if interest rates drop to 5.5%?</h3>
          <p className="text-muted-foreground mb-2">
            Same 20% down, same house. Now principal and interest drops to about $2,271, total housing 
            payment lands around $2,920.
          </p>
          <p className="text-muted-foreground">
            <span className="font-semibold">$2,920</span> ÷ 0.28 = $10,429/month<br />
            × 12 = <strong className="text-emerald-700 dark:text-emerald-300">~$125,000 per year</strong>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            A 1% rate drop just made the same house affordable at $11,000 less in annual income.
          </p>
        </div>

        <p className="text-lg leading-relaxed">
          These aren't small differences. And this is why the internet can't tell you one magic number 
          for "how much income you need."
        </p>
      </section>

      {/* ============================================ */}
      {/* CALCULATOR CTA */}
      {/* ============================================ */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 text-center">
        <div className="flex justify-center mb-3">
          <Calculator className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Run the numbers on your actual situation</h3>
        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
          Our interactive calculator factors in your home price, down payment, rate, and location — 
          and shows you the full monthly cost. No sign-up, no sales calls.
        </p>
        <Link
          to="/affordability-calculator"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Try the Mortgage Calculator Now
        </Link>
      </div>

      {/* ============================================ */}
      {/* Section 5 - Other Debts */}
      {/* ============================================ */}
      <section id="other-debts" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Part People Forget: Your Other Debts
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          The 28% rule only looks at housing. But lenders also apply a <strong>36% back-end ratio</strong>: 
          your total debts, including the mortgage, shouldn't exceed 36% of gross income.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          So if you earn $11,350 a month, your total debt payments—mortgage, car loan, student loans, 
          credit card minimums—should stay under:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-center">
          <p className="text-lg font-semibold">$11,350 × 0.36 = $4,086</p>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          Your mortgage alone is $3,178. That leaves <strong>$908 for everything else</strong>. If you 
          pay $500 a month on a car and $400 on student loans, you're at $900. Right at the edge. 
          The lender might approve you, but it's tight.
        </p>
        <p className="text-lg leading-relaxed">
          This is exactly what happened to Tom. His car payment was $620. Combined with the mortgage 
          estimate, his back-end ratio crossed 40%. The bank asked him to pay off the car first or 
          buy less house.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 6 - 100K Salary */}
      {/* ============================================ */}
      <section id="100k-salary" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Can You Buy a $500,000 House on a $100,000 Salary?
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          The math says probably not—at least not comfortably. A $100,000 salary gives you about 
          $8,333 in gross monthly income. Under the 28% rule, that means a maximum housing payment 
          of about <strong>$2,333</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The payment on a $500,000 house with 20% down is around $3,178. That's $845 over the guideline. 
          Even with no other debts and excellent credit, you'd be pushing well past what most lenders 
          consider prudent.
        </p>
        <p className="text-lg leading-relaxed">
          Could someone with a $100,000 salary and a <em>very large</em> down payment make it work? 
          Possibly. A $200,000 down payment shrinks the loan to $300,000, drops the payment significantly, 
          and eliminates PMI. But at that point, you're asking a different question: not "how much 
          income," but "how much cash."
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 7 - Income Table */}
      {/* ============================================ */}
      <section id="income-table" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          What Different Income Levels Actually Buy
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Here's a more useful way to think about it—starting from income and working forward, not backward.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Household Income</th>
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Max Housing (28%)</th>
                <th className="text-left py-2 font-medium text-muted-foreground">Approx. Home Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-semibold">$90,000</td>
                <td className="py-2 pr-4">$2,100</td>
                <td className="py-2">~$310,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-semibold">$120,000</td>
                <td className="py-2 pr-4">$2,800</td>
                <td className="py-2">~$420,000</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2 pr-4 font-semibold">$140,000</td>
                <td className="py-2 pr-4">$3,267</td>
                <td className="py-2 font-medium">~$500,000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">$175,000</td>
                <td className="py-2 pr-4">$4,083</td>
                <td className="py-2">~$630,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          These are ballpark figures (20% down, 6.5% rate). Your actual numbers depend on local property 
          taxes, insurance rates, and your personal debt load.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 8 - Beyond the Payment */}
      {/* ============================================ */}
      <section id="beyond-payment" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Stuff Beyond the Payment
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Before you commit to a number, remember that the mortgage isn't your only cost. Homeowners 
          discover this quickly.
        </p>
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
            <div className="w-7 h-7 rounded bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">$</div>
            <div>
              <div className="font-medium text-foreground">Closing costs</div>
              <div className="text-sm text-muted-foreground">Typically 2–5% of the purchase price, due at signing. On a $500,000 house, that's $10,000 to $25,000.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
            <div className="w-7 h-7 rounded bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">🔧</div>
            <div>
              <div className="font-medium text-foreground">Maintenance</div>
              <div className="text-sm text-muted-foreground">The rule of thumb is 1% of the home's value per year. On a $500,000 house, that's $5,000 annually — over $400/month, just for upkeep.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
            <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">H</div>
            <div>
              <div className="font-medium text-foreground">HOA fees & Utilities</div>
              <div className="text-sm text-muted-foreground">In some neighborhoods, HOA fees add hundreds per month. And a bigger home means bigger utility bills.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
            <div className="w-7 h-7 rounded bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">⚠️</div>
            <div>
              <div className="font-medium text-foreground">Emergency fund</div>
              <div className="text-sm text-muted-foreground">You need one after buying. Not instead of. If your mortgage leaves you with no breathing room, one broken water heater becomes a crisis instead of an annoyance.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Section 9 - Know Your Number */}
      {/* ============================================ */}
      <section id="know-your-number" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Best Way to Know Your Number
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          All of the above is the long version. Here's the short version.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">mortgage calculator</Link> lets you put in any
          home price, any down payment, any rate, and instantly see the full monthly payment—with 
          estimates for taxes and insurance based on your location. Then you can check it against 
          your own income and decide what's actually comfortable, not just what the bank will approve.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Want to dig deeper into related topics?
        </p>
        <div className="space-y-3 mb-4">
          <Link to="/blog/monthly-payment-breakdown" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much Will My Monthly Payment Be? (PITI Explained)</div>
              <div className="text-sm text-muted-foreground">Understand the four pieces of your mortgage payment — principal, interest, taxes, and insurance.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/how-much-house-can-i-afford" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 flex items-center justify-center flex-shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much House Can I Afford?</div>
              <div className="text-sm text-muted-foreground">Work from your income and budget forward — the exact math lenders use, step by step.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/what-is-pmi" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">PMI: What It Is and How to Cancel It</div>
              <div className="text-sm text-muted-foreground">That extra $250/month you pay when your down payment is under 20% — and how to get rid of it.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        </div>
        <div className="bg-muted/40 border border-border rounded-lg p-5 text-center">
          <p className="text-lg leading-relaxed italic text-muted-foreground">
            Tom did this eventually. He ended up buying at $430,000 instead of $500,000. His payment 
            feels manageable, and he sleeps fine. He told me the other day he's glad he ran the 
            numbers before signing anything. Me too.
          </p>
        </div>
      </section>
      <AllCalculatorsGrid />

    </article>
  );
}
