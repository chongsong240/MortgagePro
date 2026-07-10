import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, PieChart, BookOpen, Calculator, AlertTriangle, TrendingUp, Home, Clock } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function WhenShouldYouRefinance() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="When Should You Refinance Your Home Loan?"
        description="My friend Kevin refinanced his mortgage twice in three years. My cousin Lisa almost did and it would have cost her thousands. Here's how to know which camp you're in."
        datePublished="2026-07-10"
        url="https://www.mortgagepro.io/blog/when-should-you-refinance"
        faqs={[
          { q: 'How do I know if refinancing is worth it?', a: 'The key number is your break-even point. Divide your total closing costs by your monthly savings. If you plan to stay in the home longer than that break-even period, refinancing makes financial sense. If not, you lose money.' },
          { q: 'How much does it cost to refinance a mortgage?', a: 'Closing costs on a refinance typically run 2% to 6% of the loan amount. On a $350,000 loan, that is $7,000 to $21,000. These cover loan origination fees, appraisal, title search and insurance, recording fees, and sometimes attorney fees.' },
          { q: 'Can I refinance with the same lender?', a: 'You can, but you should still shop around. Your current lender might offer a loyalty discount, but other lenders could offer better rates or lower closing costs. Getting 3-4 quotes can save you thousands of dollars.' },
          { q: 'Does refinancing hurt your credit?', a: 'A refinance requires a hard credit inquiry, which might temporarily drop your score by a few points. The new loan also replaces your old one, so the average age of your accounts could change. But these effects are usually minor and short-lived.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Strategies
          </span>
          <span>July 10, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          When Should You Refinance Your Home Loan?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My friend Kevin refinanced his mortgage twice in three years. My cousin Lisa almost did but it would have cost her thousands. 
          Two real people, two totally different outcomes. The difference wasn't luck. It was math—specifically, a calculation 
          most lenders won't do for you unless you ask.
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
            ['kevin-and-lisa', 'Kevin vs Lisa: Two Refinance Stories'],
            ['what-refinancing-is', 'What Refinancing Actually Is'],
            ['only-number', 'The Only Number That Really Matters'],
            ['when-it-works', 'The Scenarios Where Refinancing Actually Makes Sense'],
            ['costs', 'The Costs Nobody Warns You About'],
            ['when-not-to', 'When You Probably Shouldn\'t Refinance'],
            ['extra-payments', 'Refinancing vs. Just Making Extra Payments'],
            ['checklist', 'A Quick Refinance Checklist'],
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

      {/* 1. Kevin and Lisa */}
      <section id="kevin-and-lisa" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Kevin vs Lisa: Two Refinance Stories</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          My friend Kevin refinanced his mortgage twice in three years. The first time, rates had dropped about a point from 
          when he bought. The second time, they dropped again, and his credit score had improved enough to get an even better 
          deal. He figures he's saving about $380 a month compared to his original payment—same house, same loan amount, 
          just better timing.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then there's my cousin Lisa, who almost refinanced but didn't. She called me one evening with a quote from a lender 
          that looked great on paper—lower rate, lower monthly payment, save thousands over the life of the loan. But when we 
          sat down and ran the actual numbers together, the closing costs were nearly $7,000. She was planning to move in 
          three years. She would have lost money on the deal.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Two real people. Two different outcomes. The difference wasn't luck—it was math. And it's the same math you need 
          to run before you sign anything.
        </p>
      </section>

      {/* 2. What Refinancing Is */}
      <section id="what-refinancing-is" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Refinancing Actually Is</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Refinancing means replacing your current mortgage with a brand new one. You're not modifying the old loan. You're 
          paying it off entirely with a new loan that has different terms—ideally better ones.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          People refinance for a handful of reasons: to get a lower interest rate, to lower their monthly payment, to switch 
          from a 30-year to a 15-year term, to pull cash out of their home equity, or to get rid of mortgage insurance. 
          Sometimes it's one of these. Sometimes it's a combination.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The new loan might come with a lower rate, a different length, or different conditions. But it always comes with 
          closing costs. And those closing costs are the reason refinancing isn't automatically a good deal just because 
          rates went down. If you want to estimate those costs upfront, check out our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">Closing Cost Calculator</Link>{' '}
          to get an itemized breakdown of what you'd actually pay.
        </p>
      </section>

      {/* 3. The Only Number */}
      <section id="only-number" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Only Number That Really Matters</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          When Kevin refinanced, his lender showed him a shiny chart of "total interest saved over the life of the loan." 
          It was a big number. Very impressive-looking.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But Kevin did something smart. He asked: <strong>"How long until I actually break even on the closing costs?"</strong>
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That's the break-even point. It's the single most important number in any refinance decision, and a surprising number 
          of people never calculate it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's how it works. Say your closing costs for the new loan are $6,000. The refinance lowers your monthly payment 
          by $200. Divide the cost by the savings:
        </p>
        <div className="bg-card border border-border rounded-xl p-6 mb-4 text-center">
          <p className="text-lg">
            <strong>$6,000 ÷ $200 = 30 months</strong>
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            That's two and a half years. If you sell or move before then, you lose money.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Kevin's break-even was 14 months. He'd been in his house for four years and had no plans to move. Easy decision.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Lisa's break-even was 42 months—three and a half years. She was planning to move in three. The refinance would 
          have cost her money. She passed.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">Mortgage Calculator</Link>{' '}
          lets you run your own numbers and see how different rates and terms change your monthly payment, which makes 
          calculating your break-even point a lot easier.
        </p>
      </section>

      {/* 4. When It Works */}
      <section id="when-it-works" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Scenarios Where Refinancing Actually Makes Sense</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Not every drop in rates means you should refinance. Here are the situations where the math tends to work.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Percent className="w-5 h-5 text-primary" />
            Rates have dropped meaningfully
          </h3>
          <p className="text-foreground">
            The old rule of thumb was "refinance when rates drop 1%." That's too rigid. With today's loan sizes, even a 
            half-point drop can save real money. But you still need to run the break-even calculation with your specific numbers. 
            A $400,000 loan with a 0.5% rate drop saves about $125 a month. If closing costs are $4,000, the break-even is 
            32 months. Not terrible, not amazing. You decide if it's worth it.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Your credit score has improved
          </h3>
          <p className="text-foreground">
            Your original mortgage rate was based on your financial picture at that moment. If your score has jumped 50 or 
            80 points since then, you might qualify for a significantly better rate even if market rates haven't moved much. 
            This is more common than people realize, especially for first-time buyers who worked on their credit before purchasing. 
            Use our{' '}
            <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">Affordability Calculator</Link>{' '}
            to see how a better rate changes what you can afford.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Switching from 30-year to 15-year
          </h3>
          <p className="text-foreground">
            This is a different kind of refinance. Your monthly payment will probably go up. But you'll pay off the house in 
            half the time and save a fortune in interest. This is a wealth-building move, not a cash-flow move. We've got a 
            full comparison of{' '}
            <Link to="/blog/30-vs-15-year" className="text-primary hover:underline font-medium">30-year and 15-year loans</Link>{' '}
            if you're considering this path.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-600" />
            Dropping PMI
          </h3>
          <p className="text-foreground">
            If you bought with less than 20% down and have been paying PMI every month, refinancing might let you drop 
            it—if your home's value has appreciated enough that your equity now exceeds 20%. This can free up $100 to $400 
            a month, which adds up fast. Our{' '}
            <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">PMI Calculator</Link>{' '}
            can show you exactly how much you're paying and when it could drop off.
          </p>
        </div>
      </section>

      {/* 5. Costs Nobody Warns About */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Costs Nobody Warns You About</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Closing costs on a refinance typically run 2% to 6% of the loan amount. On a $350,000 loan, that's $7,000 to 
          $21,000. It's not a small line item.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          These costs cover loan origination fees, the appraisal, title search and insurance, recording fees, and sometimes 
          attorney fees depending on your state. Some lenders offer "no-closing-cost" refinances, but be careful with those. 
          The costs don't disappear—they either get rolled into your loan balance or paid for with a higher interest rate. 
          Either way, you're still paying.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Also worth checking: does your current mortgage have a prepayment penalty? Most don't, but some older loans do. 
          It's worth a phone call to your lender before you get too far down the road.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you're shopping for a home in <a href="/mortgage-payment/california/" className="text-primary hover:underline font-medium">California</a>,{' '}
           <a href="/mortgage-payment/texas/" className="text-primary hover:underline font-medium">Texas</a>,{' '}
           <a href="/mortgage-payment/florida/" className="text-primary hover:underline font-medium">Florida</a>,{' '}
           <a href="/mortgage-payment/new-york/" className="text-primary hover:underline font-medium">New York</a>, or 
          any other state, closing costs can vary a lot. Our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">Closing Cost Calculator</Link>{' '}
          uses state-specific data so you can get a realistic estimate for where you live.
        </p>
      </section>

      {/* 6. When Not To */}
      <section id="when-not-to" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When You Probably Shouldn't Refinance</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you're moving in the next couple of years, refinancing is almost never worth it. You won't stay long enough to 
          break even on the costs.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If your loan balance is already pretty low—say under $100,000—the closing costs eat up a much larger percentage 
          of your potential savings. The math gets harder to make work.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you've already paid off 20 years of a 30-year mortgage, refinancing into a new 30-year loan resets the 
          amortization clock. You'd go back to paying mostly interest again, which might undo years of progress. In that 
          case, refinancing into a shorter term—or not refinancing at all—might make more sense.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Basically, if you can't confidently say you'll be in the house for longer than your break-even period, the 
          refinance is a gamble. Sometimes it pays off. More often, it doesn't.
        </p>
      </section>

      {/* 7. Extra Payments */}
      <section id="extra-payments" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Refinancing vs. Just Making Extra Payments</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Refinancing isn't the only way to reduce your total mortgage cost. Some people skip the closing costs altogether 
          and just start making extra payments toward principal.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Extra payments don't change your interest rate. But they do reduce your balance faster, which means less interest 
          accrues over time. On a $350,000 loan at 7%, one extra payment per year—about $194 a month extra—can knock 
          roughly six years off the loan and save over $100,000 in interest.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-4">
          <p className="text-foreground">
            <strong>The catch:</strong> Extra payments require discipline. Refinancing locks in the savings automatically. 
            Extra payments only work if you keep making them. Which one is better depends on your rate, how much cash you 
            have, and whether you trust yourself to stick with an extra payment plan.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          Our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">Mortgage Calculator</Link>{' '}
          lets you add extra payments to see how much time and interest you'd save—without the hassle of refinancing.
        </p>
      </section>

      {/* 8. Checklist */}
      <section id="checklist" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">A Quick Refinance Checklist</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you're considering refinancing, here's what to do before you call any lenders:
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">1</span>
              <span><strong>Check your current rate and remaining balance.</strong> Know your numbers so you're comparing accurately.</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">2</span>
              <span><strong>Pull your credit score.</strong> Better than when you bought? That could change the math.</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">3</span>
              <span><strong>Get multiple quotes.</strong> Rates and closing costs vary between lenders. Getting three or four quotes can save you thousands.</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">4</span>
              <span><strong>Calculate the break-even for every offer.</strong> Don't let the lender do it for you. Do it yourself, or use a calculator that shows the break-even clearly.</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">5</span>
              <span><strong>Ask about prepayment penalties</strong> on your current loan. Unlikely, but worth checking.</span>
            </li>
            <li className="flex items-start gap-3 text-foreground">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium mt-0.5">6</span>
              <span><strong>Think honestly about how long you'll stay.</strong> If it's less than the break-even period, passing on the refinance is the smarter financial move.</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Run the Numbers Yourself</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            The key is running the actual numbers—not just the monthly payment, not just the interest rate, but the full 
            picture with closing costs and your planned timeline. Try different scenarios and see if refinancing makes 
            sense for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mortgage-calculator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Open Mortgage Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/closing-cost-calculator"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Estimate Closing Costs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <AllCalculatorsGrid />

    </article>
  );
}
