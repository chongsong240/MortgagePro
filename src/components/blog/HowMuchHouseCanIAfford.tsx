import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight, BarChart3, AlertTriangle, CreditCard, Calculator } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function HowMuchHouseCanIAfford() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="How Much House Can I Afford? A Step-by-Step Guide"
        description="Dave called me stressed out about whether he could afford a home. Here's the exact math lenders use and how to find your number."
        datePublished="2026-05-23"
        url="https://www.mortgagepro.io/blog/how-much-house-can-i-afford"
        faqs={[
          { q: 'How do lenders calculate how much house I can afford?', a: 'Lenders use the 28/36 rule: your total monthly housing costs (PITI) should not exceed 28% of gross monthly income, and all debt payments combined should not exceed 36%. On an $85,000 salary, the maximum housing payment is about $1,983/month.' },
          { q: 'How much house can I afford on an $85,000 salary?', a: 'With an $85,000 salary, 10% down, and 6.5% interest rate, you can typically afford a home around $310,000. Existing debts like car loans and student loans reduce this amount.' },
          { q: 'Does my debt affect how much house I can afford?', a: 'Yes significantly. The 36% back-end DTI rule means all debts combined cannot exceed 36% of gross income. A $750/month car and student loan payment can reduce your maximum home price by $40,000 or more.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>May 23, 2026</span>
          <span>.</span>
          <span>12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How Much House Can I Afford? (Don't Worry, It's Not as Complicated as It Sounds)
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A friend of mine, let's call him Dave, called me last year, stressed out. He and his wife had been
          scrolling through Zillow for weeks, saving listings of beautiful homes. But every time they found one
          they loved, the same anxiety popped up: &ldquo;Are we even looking at houses we can actually afford, or are
          we just wasting our time?&rdquo;
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Table of Contents
        </h2>
        <nav className="space-y-2 text-sm">
          <a href="#section-1" onClick={(e) => scrollToSection(e, 'section-1')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            1. Dave's Story (and Probably Yours Too)
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. The Rule Lenders Actually Use: Debt-to-Income (DTI)
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. Step 1: Figure Out Your Gross Monthly Income
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. Step 2: The 28% Rule for Housing Alone
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. Step 3: Work Backwards to a Home Price
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. Step 4: Don't Forget the Total DTI (36% Rule)
          </a>
          <a href="#section-7" onClick={(e) => scrollToSection(e, 'section-7')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            7. Real Numbers, Real Scenarios: Affordability by Income
          </a>
          <a href="#section-8" onClick={(e) => scrollToSection(e, 'section-8')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            8. Things That Mess Up the Math
          </a>
          <a href="#section-9" onClick={(e) => scrollToSection(e, 'section-9')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            9. The Question Most People Skip
          </a>
          <a href="#section-10" onClick={(e) => scrollToSection(e, 'section-10')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            10. Try It With Your Own Numbers
          </a>
        </nav>
      </div>

      {/* Section 1: Dave's Story */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Dave's Story (and Probably Yours Too)</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dave isn't alone. Almost every first-time buyer hits this wall. You know you want to buy. You might
          even have a ballpark idea of what homes cost in your area. But translating <strong className="text-foreground">&ldquo;I make $85,000 a year&rdquo;</strong>
          into <strong className="text-foreground">&ldquo;I can comfortably buy a $320,000 house&rdquo;</strong> feels like a magic trick that only mortgage
          brokers know.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The problem is that house prices and monthly payments don't move in a straight line. A $350,000 house
          in one state might cost you <strong className="text-foreground">$700 more per month</strong> than the same-priced house in another
          state &mdash; all because of property taxes, insurance, and local rates. And if you're putting down less than
          20%, PMI adds another layer of cost that most online calculators won't even show you.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          It's not magic. It's just a few simple ratios. Let's walk through them step by step.
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">Start Here</p>
          <p className="text-sm text-muted-foreground">
            If you want to skip ahead and see your number right now, open our{' '}
            <Link to="/affordability-calculator" className="text-primary font-medium hover:underline">Affordability Calculator</Link>.
            This article will help you understand exactly what those numbers mean and why they matter.
          </p>
        </div>
      </section>

      {/* Section 2: DTI */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. The Rule Lenders Actually Use: Debt-to-Income (DTI)</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When a bank looks at your application, they're not looking at your total salary in isolation. They're
          looking at your <strong className="text-foreground">DTI</strong>: your debt-to-income ratio. That's the percentage of your
          <strong className="text-foreground"> gross monthly income</strong> that goes toward paying debts.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-6 text-center">
          <p className="text-lg font-semibold text-foreground mb-3">The DTI Formula</p>
          <div className="bg-muted rounded-lg p-4 inline-block mb-3">
            <code className="text-sm font-mono">DTI = Total Monthly Debt Payments / Gross Monthly Income x 100</code>
          </div>
          <p className="text-sm text-muted-foreground">
            Example: $1,500 in debts / $5,000 monthly income = <strong className="text-foreground">30% DTI</strong>
          </p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For most conventional loans, lenders want your <strong className="text-foreground">total DTI</strong> &mdash; including the new mortgage &mdash;
          to stay under <strong className="text-foreground">36%</strong>. Some government-backed programs (FHA, VA) go up to 43% or
          even 50%, but 36% is the sweet spot where you get the best rates.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
            <div className="text-lg font-bold text-green-600 mb-1">{'\u2264'} 36%</div>
            <div className="text-xs text-green-700 dark:text-green-400">Ideal Range</div>
            <div className="text-[10px] text-green-600">Best rates and terms</div>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-center">
            <div className="text-lg font-bold text-amber-600 mb-1">37%&ndash;43%</div>
            <div className="text-xs text-amber-700 dark:text-amber-400">Acceptable</div>
            <div className="text-[10px] text-amber-600">May still qualify</div>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
            <div className="text-lg font-bold text-red-600 mb-1">{'\u2265'} 44%</div>
            <div className="text-xs text-red-700 dark:text-red-400">Hard to Qualify</div>
            <div className="text-[10px] text-red-600">Limited loan options</div>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Important: DTI has two parts</p>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                <strong>Front-end DTI (28%):</strong> Just your housing costs &mdash; mortgage payment, taxes, insurance.<br />
                <strong>Back-end DTI (36%):</strong> Everything &mdash; housing plus car loans, student loans, credit cards, child support, etc.<br />
                <span className="block mt-1">Both matter. But the back-end is often the one that limits you.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Gross Monthly Income */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Step 1: Figure Out Your Gross Monthly Income</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Take your annual salary and divide by 12. If you make <strong className="text-foreground">$85,000 a year</strong>, that's roughly
          <strong className="text-foreground"> $7,083 per month before taxes</strong>.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Don't use your take-home pay. Lenders use <strong className="text-foreground">gross income</strong>. I know it feels weird to
          budget based on money you haven't paid taxes on yet, but that's how the system works.
        </p>
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <p className="font-semibold text-foreground mb-3">Quick Reference: Monthly Gross by Annual Salary</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Annual Salary</th>
                  <th className="text-right py-2 px-3 font-medium text-muted-foreground">Monthly Gross</th>
                  <th className="text-right py-2 px-3 font-medium text-muted-foreground">28% Housing Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 px-3">$50,000</td><td className="text-right py-2 px-3">$4,167</td><td className="text-right py-2 px-3">$1,167</td></tr>
                <tr className="bg-muted/20"><td className="py-2 px-3 font-medium">$85,000</td><td className="text-right py-2 px-3 font-medium">$7,083</td><td className="text-right py-2 px-3 font-medium">$1,983</td></tr>
                <tr><td className="py-2 px-3">$120,000</td><td className="text-right py-2 px-3">$10,000</td><td className="text-right py-2 px-3">$2,800</td></tr>
                <tr><td className="py-2 px-3">$175,000</td><td className="text-right py-2 px-3">$14,583</td><td className="text-right py-2 px-3">$4,083</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4: 28% Rule */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Step 2: The 28% Rule for Housing Alone</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most financial advisors will tell you: keep your total housing payment &mdash; principal, interest, taxes,
          and insurance, the famous <strong className="text-foreground">PITI</strong> &mdash; under <strong className="text-foreground">28%</strong> of your gross monthly income.
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
          <p className="font-semibold text-foreground mb-3 text-center">Dave's 28% Calculation</p>
          <p className="text-center mb-4">
            <span className="text-muted-foreground">$7,083 (monthly gross)</span>
            <span className="mx-2 text-xl text-foreground">&times;</span>
            <span className="text-muted-foreground">0.28</span>
            <span className="mx-2 text-xl text-foreground">=</span>
            <span className="text-3xl font-bold text-primary">$1,983</span>
            <span className="text-muted-foreground text-sm block mt-1">Maximum monthly payment a lender would typically approve</span>
          </p>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">The #1 Mistake First-Time Buyers Make</p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                They fixate on the purchase price and ignore what the monthly cost will actually be. A
                <strong> $400,000</strong> house with a <strong>20% down payment</strong> costs very different per month
                than a <strong>$400,000</strong> house with <strong>5% down</strong> &mdash; even though the price tag
                is the same. The first avoids PMI and has a smaller loan; the second has PMI
                <strong className="text-foreground"> plus</strong> a larger loan amount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Working Backwards */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Step 3: Work Backwards to a Home Price</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Now we need to translate that monthly payment ceiling into an actual home price. This is where a
          calculator stops being optional and becomes essential, because the math depends on your down payment,
          interest rate, property taxes, and insurance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Let's run Dave's real numbers. He and his wife have <strong className="text-foreground">$30,000 saved</strong> for a down payment,
          and their credit is good enough for a <strong className="text-foreground">6.5% interest rate</strong>. They live in
          <strong className="text-foreground"> Texas</strong>, where property taxes are on the higher side.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Dave's Affordability Profile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Max Monthly (PITI)</div>
              <div className="text-xl font-bold text-foreground">$1,983</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Down Payment</div>
              <div className="text-xl font-bold text-foreground">$30,000</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Interest Rate</div>
              <div className="text-xl font-bold text-foreground">6.5%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Property Tax (TX)</div>
              <div className="text-xl font-bold text-foreground">~1.8%</div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">When you run those numbers through our calculator, the maximum home price is:</p>
            <p className="text-4xl font-bold text-green-600 mb-2">$310,000</p>
            <p className="text-sm text-green-700 dark:text-green-400">That keeps their monthly PITI payment under $1,983</p>
          </div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Percent className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">The PMI Trap</p>
              <p className="text-sm text-muted-foreground">
                Their $30,000 down payment is only about <strong>9.7%</strong> of that $310,000 price.
                That means they'll be paying <strong>PMI</strong> &mdash; private mortgage insurance &mdash; which adds
                <strong> $100&ndash;$300/month</strong> to their cost. Check out our{' '}
                <Link to="/blog/what-is-pmi" className="text-primary font-medium hover:underline">PMI Guide</Link> for more.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">Try this in the calculator</p>
          <p className="text-sm text-muted-foreground">
            Open our{' '}
            <Link to="/mortgage-calculator" className="text-primary font-medium hover:underline">Mortgage Calculator</Link>,
            set Home Price = $310,000, Down Payment = $30,000. Then try sliding the down payment to
            <strong> $62,000 (20%)</strong>. Watch PMI disappear from the payment breakdown &mdash; that's
            <strong> $133/month</strong> back in your pocket, or <strong>$1,596/year</strong>.
          </p>
        </div>
      </section>

      {/* Section 6: Total DTI */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Step 4: Don't Forget the Total DTI (36% Rule)</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The 28% rule covers housing. But lenders also look at your <strong className="text-foreground">total DTI</strong> &mdash; all
          your debts combined, including housing, should ideally stay under <strong className="text-foreground">36%</strong>.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Dave's Total DTI: The Limiting Factor</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Gross monthly income</span>
              <span className="font-semibold">$7,083</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">36% total debt ceiling</span>
              <span className="font-semibold text-blue-600">$2,550</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Student loans</span>
              <span className="font-semibold text-red-500">&minus;$450</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Car loan</span>
              <span className="font-semibold text-red-500">&minus;$300</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-amber-50 dark:bg-amber-950/20 rounded-lg px-2">
              <span className="font-semibold text-amber-800 dark:text-amber-300">Remaining for mortgage</span>
              <span className="text-xl font-bold text-amber-600">$1,800</span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dave and his wife pay <strong className="text-foreground">$450 a month on student loans</strong> and
          <strong className="text-foreground"> $300 on a car loan</strong> &mdash; that's $750 in existing debt. Subtract that from
          $2,550 (the 36% ceiling), and they're left with <strong className="text-foreground">$1,800</strong> for the mortgage &mdash;
          less than the $1,983 the 28% rule allowed.
        </p>
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <CreditCard className="w-6 h-6 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-300 mb-1">This changes everything</p>
              <p className="text-sm text-red-700 dark:text-red-400">
                In Dave's case, <strong>existing debt</strong>, not the housing ratio, becomes the limiting factor.
                That $450 student loan and $300 car payment reduce his max home price by roughly
                <strong> $40,000</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-5">
          <div className="flex items-start gap-3">
            <Calculator className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Our calculator handles this automatically</p>
              <p className="text-sm text-muted-foreground">
                In the <Link to="/mortgage-calculator" className="text-primary font-medium hover:underline">Mortgage Calculator</Link>,
                you can add your monthly debt payments and it will automatically calculate both your front-end and
                back-end DTI limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Real Scenarios */}
      <section id="section-7" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Real Numbers, Real Scenarios</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Here's how affordability changes at different income levels. These assume a <strong className="text-foreground">6.5% rate</strong>,
          <strong className="text-foreground">10% down</strong>, and <strong className="text-foreground">national average property taxes</strong>.
        </p>
        <div className="overflow-x-auto mb-6 border border-border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Annual Income</th>
                <th className="text-right py-3 px-4 font-medium">28% Housing Max</th>
                <th className="text-right py-3 px-4 font-medium">Approx. Max Home Price</th>
                <th className="text-right py-3 px-4 font-medium">Est. Monthly Payment</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-muted/30"><td className="py-3 px-4 font-medium">$50,000</td><td className="text-right py-3 px-4">$1,167</td><td className="text-right py-3 px-4">~$175,000</td><td className="text-right py-3 px-4">$1,133</td></tr>
              <tr className="hover:bg-muted/30 bg-muted/20"><td className="py-3 px-4 font-medium">$85,000</td><td className="text-right py-3 px-4">$1,983</td><td className="text-right py-3 px-4 font-bold">~$310,000</td><td className="text-right py-3 px-4 font-bold">$1,983</td></tr>
              <tr className="hover:bg-muted/30"><td className="py-3 px-4 font-medium">$120,000</td><td className="text-right py-3 px-4">$2,800</td><td className="text-right py-3 px-4">~$440,000</td><td className="text-right py-3 px-4">$2,800</td></tr>
              <tr className="hover:bg-muted/30"><td className="py-3 px-4 font-medium">$150,000</td><td className="text-right py-3 px-4">$3,500</td><td className="text-right py-3 px-4">~$550,000</td><td className="text-right py-3 px-4">$3,500</td></tr>
              <tr className="hover:bg-muted/30"><td className="py-3 px-4 font-medium">$175,000</td><td className="text-right py-3 px-4">$4,083</td><td className="text-right py-3 px-4">~$650,000</td><td className="text-right py-3 px-4">$4,083</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Surprises */}
      <section id="section-8" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Things That Mess Up the Math</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A few things can throw off these numbers, sometimes by a lot. Here are the most common surprises
          that first-time buyers don't see coming:
        </p>
        <div className="space-y-6">
          {/* Student Loans */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0"><span className="text-lg font-bold text-blue-600">S</span></div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Student Loans</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  If you're on an <strong className="text-foreground">income-driven repayment (IDR) plan</strong>, lenders used to
                  calculate your payment as <strong>1% of your loan balance</strong>. That rule changed in 2023.
                  Now, for most conventional loans, lenders use your <strong className="text-foreground">actual monthly payment</strong>.
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-700 dark:text-green-400">
                    <strong>Example:</strong> $40,000 student loan balance on IDR paying $0/month. Under
                    the old rule, lenders assumed $400/month (1%). Now they use $0. That's
                    an extra <strong>$400/month</strong> in buying power.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Property Taxes */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0"><span className="text-lg font-bold text-red-600">$</span></div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Property Taxes (The Hidden Bombshell)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Property taxes vary wildly by state. This is the single biggest variable
                  most generic online calculators get wrong.
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-1.5 px-2">Location</th>
                        <th className="text-right py-1.5 px-2">Tax Rate</th>
                        <th className="text-right py-1.5 px-2">Monthly Tax on $400k Home</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1.5 px-2">Alabama</td><td className="text-right py-1.5 px-2 text-green-600">0.40%</td><td className="text-right py-1.5 px-2 text-green-600">$133</td></tr>
                      <tr><td className="py-1.5 px-2">California</td><td className="text-right py-1.5 px-2 text-amber-600">0.76%</td><td className="text-right py-1.5 px-2 text-amber-600">$253</td></tr>
                      <tr className="bg-muted/20"><td className="py-1.5 px-2 font-medium">Texas</td><td className="text-right py-1.5 px-2 text-red-500 font-medium">1.80%</td><td className="text-right py-1.5 px-2 text-red-500 font-medium">$600</td></tr>
                      <tr><td className="py-1.5 px-2">New Jersey</td><td className="text-right py-1.5 px-2 text-red-600">2.40%</td><td className="text-right py-1.5 px-2 text-red-600">$800</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* PMI */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0"><span className="text-lg font-bold text-purple-600">P</span></div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">PMI (Private Mortgage Insurance)</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  If you put down less than <strong className="text-foreground">20%</strong>, PMI adds
                  <strong> $100&ndash;$400/month</strong> to your payment. On a $310,000 home with 10% down,
                  PMI adds roughly <strong>$133/month</strong> &mdash; money that goes nowhere near your equity.
                  Read our{' '}
                  <Link to="/blog/what-is-pmi" className="text-primary font-medium hover:underline">PMI Guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: The Question Most People Skip */}
      <section id="section-9" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">9. The Question Most People Skip</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Here's the thing the 28% rule doesn't answer: <strong className="text-foreground">what do you actually want your monthly
          payment to be?</strong>
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Banks tell you the <strong className="text-foreground">maximum</strong> they'll lend. They don't tell you what's
          comfortable for <strong className="text-foreground">your life</strong>.
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-semibold text-foreground mb-2">Questions to Ask Yourself</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">&rarr;</span><span>Do you like to <strong>travel</strong>? A lower payment might mean an extra vacation each year.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">&rarr;</span><span>Are you <strong>planning to have kids soon</strong>? Childcare costs can easily run $1,500+/month.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">&rarr;</span><span>Do you <strong>sleep better with a smaller payment</strong>? Peace of mind has real value.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">&rarr;</span><span>Are you investing for <strong>retirement</strong>? The more house you buy, the less you can save.</span></li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-300 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3">Dave's Smart Move</h3>
            <p className="text-sm text-green-700 dark:text-green-400 mb-3">
              Dave and his wife ended up buying at <strong className="text-foreground">$285,000</strong> &mdash; well under their
              $310,000 maximum. That $25,000 gap meant <strong>$185 less per month</strong> and breathing room in their budget.
            </p>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">The 25% Rule of Thumb</p>
          <p className="text-sm text-muted-foreground">
            Many financial independence enthusiasts recommend keeping housing to <strong>25%</strong>
            of your gross income. At $85,000/year, that's <strong>$1,479/month</strong>
            instead of $1,983. That extra $504/month invested in the S&P 500 over 30 years could grow to
            <strong> over $1 million</strong>.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* Calculator Data Table - Unique to MortgagePro */}
      {/* ============================================ */}
      <section id="calculator-data" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          📊 From Our Calculator: What Different Incomes Afford
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These numbers are computed using <strong>MortgagePro's affordability formula</strong> — 
          the same 28/36 DTI rules lenders use. See exactly what your income level buys:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Annual Income</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Max Monthly Payment</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Est. Home Price</th>
                <th className="text-right py-2 font-medium text-muted-foreground">vs. $100K Income</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-semibold">$75,000</td>
                <td className="text-right py-2 pr-4">$1,750</td>
                <td className="text-right py-2 pr-4">~$250,000</td>
                <td className="text-right py-2 text-muted-foreground">—</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-semibold">$100,000</td>
                <td className="text-right py-2 pr-4">$2,333</td>
                <td className="text-right py-2 pr-4">~$350,000</td>
                <td className="text-right py-2 text-muted-foreground">—</td>
              </tr>
              <tr className="border-b border-border bg-primary/5">
                <td className="py-2 pr-4 font-semibold">$136,000</td>
                <td className="text-right py-2 pr-4">$3,178</td>
                <td className="text-right py-2 pr-4 font-medium">~$500,000</td>
                <td className="text-right py-2 text-emerald-600 font-medium">+$150K house</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-semibold">$175,000</td>
                <td className="text-right py-2 pr-4">$4,083</td>
                <td className="text-right py-2 pr-4">~$630,000</td>
                <td className="text-right py-2 text-emerald-600 font-medium">+$280K house</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">$250,000</td>
                <td className="text-right py-2 pr-4">$5,833</td>
                <td className="text-right py-2 pr-4">~$900,000</td>
                <td className="text-right py-2 text-emerald-600 font-medium">+$550K house</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Assumptions:</strong> 20% down payment, 6.5% APR, 30-year fixed. Property taxes at 1% (~$417/mo per $500K), 
          homeowners insurance at national average (~$142/mo). Uses the 28% front-end DTI rule.
        </p>
        <p className="text-sm text-muted-foreground">
          Source: <Link to="/affordability-calculator" className="text-primary hover:underline">MortgagePro Affordability Calculator</Link> — 
          get your personalized number.
        </p>
      </section>

      {/* Section 10: CTA */}
      <section id="section-10" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">10. Try It With Your Own Numbers</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You don't need to do this math by hand. Our <strong className="text-foreground">Affordability Calculator</strong>
          does exactly what I just walked through, in real time with your actual numbers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3"><DollarSign className="w-5 h-5 text-primary" /></div>
            <h3 className="font-semibold text-foreground mb-2">1. Enter Your Income</h3>
            <p className="text-sm text-muted-foreground">Your annual gross income. The calculator does the monthly math automatically.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3"><CreditCard className="w-5 h-5 text-primary" /></div>
            <h3 className="font-semibold text-foreground mb-2">2. Add Your Debts</h3>
            <p className="text-sm text-muted-foreground">Student loans, car payments, credit cards are all factored into your DTI.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3"><Home className="w-5 h-5 text-primary" /></div>
            <h3 className="font-semibold text-foreground mb-2">3. Pick Your State</h3>
            <p className="text-sm text-muted-foreground">Automatically applies your state's property tax rate for accurate estimates.</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to find your number?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Open our interactive affordability calculator. No sign-up required, completely free.
          </p>
          <Link
            to="/affordability-calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Open Affordability Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <AllCalculatorsGrid />

      {/* Related Articles */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/how-to-use-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How to Use Our Mortgage Calculator</div>
          </Link>
          <Link to="/blog/what-is-pmi" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Important read</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">PMI in Mortgages: What It Is and How to Get Rid of It</div>
          </Link>
          <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Tools</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Browse All 10 Calculators →</div>
          </Link>
        </div>
      </div>
    </article>
  );
}
