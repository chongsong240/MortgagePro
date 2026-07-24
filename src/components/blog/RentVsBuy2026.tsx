import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Calculator, TrendingUp, Shield, Building, DollarSign, Calendar, Clock, BookOpen } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function RentVsBuy2026() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Rent vs Buy in 2026: The Decision That's Keeping Everyone Up at Night"
        description="My neighbors Jen and Mike have been renting the same apartment for four years. Their rent is $2,400 a month. They could buy. They have a down payment saved. They have stable jobs. They have a baby due in September. So why can't they pull the trigger?"
        datePublished="2026-07-24"
        url="https://www.mortgagepro.io/blog/rent-vs-buy-2026"
        faqs={[
          { q: 'Is buying a home worth it in 2026?', a: 'It depends on how long you plan to stay. If you\'ll stay 5–7 years or more, buying usually wins financially. If you might move sooner, renting often makes more sense once you factor in closing costs, maintenance, and the opportunity cost of your down payment.' },
          { q: 'Is renting throwing money away?', a: 'No. Renting buys you flexibility, no maintenance costs, and the ability to invest your down payment elsewhere. In some markets, renting and investing the difference outperforms buying over a 10-year horizon.' },
          { q: 'What is the breakeven point for buying vs renting?', a: 'The breakeven point is typically 3 to 8 years depending on your local market, home prices, rent costs, and mortgage rates. Use a Rent vs Buy calculator to find your exact number.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">Decision Guide</span>
          <span>July 24, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
          Rent vs Buy in 2026: The Decision That's Keeping Everyone Up at Night
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My neighbors Jen and Mike have been renting the same apartment for four years. It's a perfectly fine place—two bedrooms, decent light, a landlord who actually fixes things when they break. Their rent is $2,400 a month, which feels steep but manageable.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          What's in This Article
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            ['section-0', 'The Gut Check That Matters More Than Math'],
            ['section-1', 'What Renting Actually Costs You'],
            ['section-2', 'What Buying Actually Costs You'],
            ['section-3', 'When Buying Wins'],
            ['section-4', 'When Renting Wins'],
            ['section-5', 'The Rule of Thumb That Actually Works'],
            ['section-6', 'What Jen and Mike Finally Decided'],
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

      {/* 1. Gut Check */}
      <section id="section-0" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Gut Check That Matters More Than Math</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before we get to the numbers, let's talk about the thing that usually gets skipped.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Buying a home is partly a financial decision. But it's also partly a life decision. Some people genuinely want to own—they want to paint the walls, never worry about a landlord selling the building, put down roots in a specific neighborhood. That's not irrational. It's just a preference.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Some people genuinely prefer renting—they like knowing they can move cities for a job without selling a house first, they don't want to deal with maintenance, they'd rather invest their money elsewhere. Also not irrational.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you're clear about which camp you're in, the financial analysis can confirm or challenge your instinct. But it shouldn't replace it entirely. A spreadsheet can't measure how much you'll hate calling a landlord every time the sink leaks. And it can't measure how much you'll love knowing your kid will stay in the same school for more than a year.
        </p>
      </section>

      {/* 2. What Renting Actually Costs */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Renting Actually Costs You</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The classic argument against renting is that you're "throwing money away." Every rent check disappears into your landlord's pocket, and you have nothing to show for it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That's true in the sense that rent doesn't build equity. But it's also misleading, because renting does buy you something of genuine value: flexibility, no maintenance costs, and the ability to invest your would-be down payment elsewhere.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's what Jen and Mike's rental situation actually looks like over five years:
        </p>
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Item</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Monthly rent</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">$2,400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Annual rent increase (3%)</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$72/year</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Total rent paid over 5 years</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$153,000</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-muted-foreground">Equity built</td>
                <td className="text-right py-3 px-4 text-red-500 font-medium">$0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          $153,000 is a lot of money. It's also the price of having a roof over your head for five years, with no property tax bills, no broken water heaters, and the ability to leave when their lease is up.
        </p>
      </section>

      {/* 3. What Buying Actually Costs */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Buying Actually Costs You</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Now let's say Jen and Mike buy a comparable place—a $400,000 condo with 10% down.
        </p>
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Cost Component</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Principal & Interest (6.5%, $360k loan)</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">$2,276</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Property taxes</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Homeowners insurance</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$130</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">PMI (under 20% down)</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$200</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 text-muted-foreground">Maintenance (1% of home value/yr)</td>
                <td className="text-right py-3 px-4 text-foreground font-medium">~$330</td>
              </tr>
              <tr className="bg-amber-50 dark:bg-amber-950/20">
                <td className="py-3 px-4 font-semibold text-foreground">True monthly cost</td>
                <td className="text-right py-3 px-4 font-bold text-foreground">~$3,336</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That's almost <strong>$900 more</strong> than their rent. Every single month.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          And that's before we talk about the upfront costs:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 text-lg text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span><strong>Down payment:</strong> $40,000</span>
          </li>
          <li className="flex items-start gap-2 text-lg text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span><strong>Closing costs:</strong> ~$12,000</span>
          </li>
          <li className="flex items-start gap-2 text-lg text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span><strong>Total cash at closing:</strong> ~$52,000</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground">
          That $52,000 could have been invested. At a conservative 7% annual return, it would grow to about <strong>$73,000</strong> over five years. By buying, they're pulling that money out of the market and putting it into a single, illiquid asset—their home. Curious what your true monthly payment would look like? Our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">Mortgage Calculator</Link>{' '}
          factors in taxes, insurance, and PMI to give you the real number, not just the principal and interest.
          Want to dig deeper into what goes into those upfront costs? Our{' '}
          <Link to="/blog/closing-costs-explained" className="text-primary hover:underline font-medium">Closing Costs Explained</Link>{' '}
          guide walks through every fee so nothing surprises you at the closing table.
        </p>
      </section>

      {/* 4. When Buying Wins */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When Buying Wins</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Buying starts to win in one of two scenarios: you stay long enough, or your home appreciates enough.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The longer you stay, the more your equity grows. In the early years, your equity builds slowly because most of your payment goes to interest. But as the years stack up, more of each payment goes to principal, and the math tilts in your favor.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The break-even point—the year when the total cost of buying drops below the total cost of renting a comparable place—is usually somewhere between <strong>year 5 and year 8</strong>, depending on your market, your rate, and your assumptions about rent increases and appreciation.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you're almost certain you'll stay in the same home for 10 years or more, buying is very likely the better financial move in the long run. Use our{' '}
          <Link to="/rent-vs-buy-calculator" className="text-primary hover:underline font-medium">Rent vs Buy Analyzer</Link>{' '}
          to find your exact breakeven year with your specific numbers.
        </p>
      </section>

      {/* 5. When Renting Wins */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When Renting Wins</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Renting wins when you're not staying long enough for the equity to compound. If you sell after three or four years, you've barely dented your principal, and the 5-6% you'll pay in real estate agent commissions to sell will wipe out most of your equity.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Renting also wins when the gap between your rent and the true cost of buying is very large, like it is for Jen and Mike right now. They'd pay $900 more per month to buy. Over five years, that's $54,000 in extra housing costs. Even accounting for equity buildup and potential appreciation, it's hard to close a gap that big.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          And renting wins in the flexibility department, which is hard to price but easy to value. If you might change jobs, change cities, or change your mind about what kind of home you want, renting gives you options that a mortgage doesn't.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          To see how these tradeoffs play out for your situation, check our{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">Affordability Calculator</Link>{' '}
          —it'll tell you the maximum home price and monthly payment you can handle based on your income and debts, which is the starting point for any buy vs rent comparison.
        </p>
      </section>

      {/* 6. Rule of Thumb */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Rule of Thumb That Actually Works</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Forget the one-size-fits-all advice. Here's a framework that gets most people to the right answer.
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2">
            <Home className="w-5 h-5" />
            Buy if:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-emerald-600 mt-1">•</span>
              <span>You plan to stay in the same home for at least 5 to 7 years</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-emerald-600 mt-1">•</span>
              <span>You have stable income and savings beyond the down payment</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-emerald-600 mt-1">•</span>
              <span>The true monthly cost of buying isn't dramatically higher than renting a comparable place</span>
            </li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
            <Building className="w-5 h-5" />
            Rent if:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>You might move within 5 years</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your income is variable or unstable</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>Buying would drain your savings</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>The monthly cost of buying a comparable place is significantly higher than your rent</span>
            </li>
          </ul>
        </div>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Don't try to time the market
          </h3>
          <p className="text-foreground">
            If you're waiting for rates to drop before you buy, know that lower rates typically bring more buyers into the market, which pushes prices up. The monthly payment you're waiting for might not materialize even if rates fall. Buy when you're financially ready, not when you think the market is about to turn in your favor.
          </p>
        </div>
      </section>

      {/* 7. What Jen and Mike Decided */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Jen and Mike Finally Decided</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          They're renting for one more year. Not because they're afraid of buying, but because the math told them something clear: with a baby coming, their expenses are about to change in ways they can't fully predict. Renting gives them a year to adjust, build up more savings, and see where rates and prices land.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          "We'll buy eventually," Mike told me. "Just not this year. And I'm okay with that."
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          Being okay with the decision—that's the whole point. Whether you rent or buy, the right move is the one that fits your numbers and lets you sleep at night. Everything else is noise.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Run Your Own Comparison</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            All the general advice in the world only gets you so far. What matters is how the numbers work for your income, your local market, and your timeline. See both paths side by side with your actual numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/rent-vs-buy-calculator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Rent vs Buy Analyzer
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mortgage-calculator"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Mortgage Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/closing-costs-explained" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Closing Costs Explained: What You Need Beyond the Down Payment</div>
          </Link>
          <Link to="/rent-vs-buy-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Rent vs Buy Analyzer</div>
          </Link>
          <Link to="/affordability-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Affordability Calculator</div>
          </Link>
          <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Tools</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Browse All 10 Calculators →</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />
    </article>
  );
}
