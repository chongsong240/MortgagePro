import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, PieChart, BookOpen, Calculator, AlertTriangle, TrendingUp } from 'lucide-react';
import BlogSchema from './BlogSchema';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function PayOffEarly() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Should I Pay Off My Mortgage Early?"
        description="My aunt burned her mortgage statement in a fire pit. My financial advisor won't pay off his 2.75% rate. Two smart people, two different answers. Here's how to figure out yours."
        datePublished="2026-06-10"
        url="https://www.mortgagepro.io/blog/pay-off-early"
        faqs={[
          { q: 'Is it worth paying off your mortgage early?', a: 'It depends on your mortgage rate. At 6.5%+, paying extra gives a guaranteed 6.5% return, which is hard to beat safely. At 3% or below, investing the difference in a diversified portfolio may yield higher returns over time.' },
          { q: 'What should I do before making extra mortgage payments?', a: 'Build a 3-6 month emergency fund first, pay off high-interest debt (credit cards at 18-25%), and max out any employer 401(k) match. Only then does extra mortgage payment make financial sense.' },
          { q: 'How much can I save by paying $100 extra per month on my mortgage?', a: 'On a $400,000 loan at 6.5%, an extra $100/month saves about $46,000 in interest and pays off the loan roughly 4.5 years early.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Strategies
          </span>
          <span>June 10, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Should I Pay Off My Mortgage Early?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My aunt paid off her house three years ago and burned her mortgage statement in the fire pit. 
          My financial advisor could write a check tomorrow and pay off his. He chooses not to. Two 
          smart people, two completely different answers. Here's how to figure out yours.
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
            ['what-you-save', 'What You Actually Save'],
            ['other-side', 'When Not Paying It Off Makes More Sense'],
            ['emergency-fund', 'The Emergency Fund Rule'],
            ['credit-cards-first', 'Credit Cards Come First. Every Time.'],
            ['biweekly-strategy', 'The Bi-Weekly Strategy'],
            ['emotional-side', 'The Emotional Side'],
            ['middle-path', 'The Middle Path'],
            ['how-to-decide', 'How to Decide'],
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

      {/* ========== SECTION 1 ========== */}
      <section id="what-you-save" className="mb-10">
        <p className="text-lg leading-relaxed mb-4">
          My aunt paid off her house three years ago. She threw a small party in her backyard—grilled 
          some burgers, opened a bottle of wine, and burned a copy of her mortgage statement in the 
          fire pit. She says it was one of the best days of her life.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My financial advisor, on the other hand, told me he would never pay off his mortgage early. 
          His rate is 2.75%. He could write a check tomorrow and be done with it. He chooses not to.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Two smart people. Two completely different decisions. That should tell you something: the 
          "should I pay off my mortgage early" question doesn't have one right answer. But it does 
          have a right answer <em>for you</em>, and figuring it out isn't as complicated as it sounds.
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4 mt-10">
          Let's Start With What You Actually Save
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Paying extra toward your mortgage does something very specific: it reduces your principal, 
          which reduces the balance that future interest gets calculated on. That starts a chain reaction.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Here's a real example using numbers we've used before:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 text-muted-foreground">
          <li>Loan amount: <strong className="text-foreground">$400,000</strong></li>
          <li>Interest rate: <strong className="text-foreground">6.5%</strong></li>
          <li>Loan term: <strong className="text-foreground">30 years</strong></li>
          <li>Monthly payment (P&I): <strong className="text-foreground">$2,528</strong></li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          If you add one extra monthly payment per year—about $211 extra per month, or a lump sum of 
          $2,528 once a year—here's what happens:
        </p>

        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between text-lg">
              <span>Total interest saved:</span>
              <span className="font-semibold text-emerald-600">over $100,000</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Loan paid off:</span>
              <span className="font-semibold">about 5.7 years early</span>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          That's real money. And it's a <strong>guaranteed</strong> return. The bank doesn't get to 
          change the rules halfway through. There's no stock market crash that wipes it out. You pay 
          down the loan, you owe less interest. That's the deal.
        </p>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          If your mortgage rate is 6.5%, paying extra is basically earning a guaranteed 6.5% return 
          on that money, tax-free. In a world where safe investments pay 4-5% before taxes, that's 
          hard to beat.
        </p>
      </section>

      {/* ========== SECTION 2 ========== */}
      <section id="other-side" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Other Side: When Not Paying It Off Makes More Sense
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Now let's talk about my financial advisor and his 2.75% rate.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If you bought or refinanced between 2020 and early 2022, you might be sitting on a mortgage 
          rate in the 3% range or even lower. In that case, the math flips.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Pay off a 3% mortgage</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You get a <strong>guaranteed 3% return</strong>. Safe, predictable, but not exactly 
              exciting.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Invest that money instead</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Over long periods, a diversified stock portfolio has historically returned <strong>7-10% 
              annually</strong>, though with plenty of ups and downs along the way.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          The spread between 3% and even a conservative 7% is significant. Over 20 years, that gap 
          compounds into tens of thousands of dollars. My advisor looks at that math and concludes 
          he'd rather have his money in the market than in his house.
        </p>
        <p className="text-lg leading-relaxed">
          He might be right—mathematically. But he also doesn't lose sleep over market volatility. 
          Not everyone is wired that way.
        </p>
      </section>

      {/* ========== SECTION 3 ========== */}
      <section id="emergency-fund" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Emergency Fund Rule <span className="text-destructive">(Don't Skip This Part)</span>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Before you put a single extra dollar toward your mortgage, answer this question honestly: 
          If you lost your job next month, how long could you keep paying all your bills?
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If the answer is less than three to six months, you shouldn't be making extra mortgage 
          payments yet. Period.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Here's why: extra mortgage payments are nearly impossible to get back. Once you send that 
          money to the bank, it's gone into your home equity. You can't pull it out easily without 
          selling the house or taking out a home equity loan—which costs money and requires income 
          verification, exactly when you might not have a job.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4">
          <p className="text-muted-foreground leading-relaxed">
            I know someone who learned this the hard way. He'd been throwing every spare dollar at 
            his mortgage for three years. Then his company had layoffs. He had almost no cash savings. 
            His house had plenty of equity, but the bank wasn't interested in letting him skip payments 
            just because he'd paid extra in the past. He ended up borrowing from family to stay current.
          </p>
        </div>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          A paid-off house is a wonderful long-term goal. Cash in the bank is what keeps you alive in 
          the short term. You need both, in that order.
        </p>
      </section>

      {/* ========== SECTION 4 ========== */}
      <section id="credit-cards-first" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Credit Cards Come First. Every Time.
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          This one is simple math, but a lot of people get the order wrong.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If you have credit card debt at 18-25% interest, and a mortgage at 6.5%, paying extra on 
          the mortgage while carrying a credit card balance makes no financial sense. You're rushing 
          to save 6.5% while bleeding 20% somewhere else.
        </p>
        <p className="text-lg leading-relaxed mb-4 font-medium text-foreground">
          The priority list should be:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4 text-lg">
          <li><strong>Credit card debt</strong>—kill it first.</li>
          <li><strong>Emergency fund</strong>—build it.</li>
          <li><strong>Retirement contributions</strong>—at least enough to get any employer match.</li>
          <li><strong>Then extra mortgage payments.</strong></li>
        </ol>
        <p className="text-lg leading-relaxed">
          If steps 1 through 3 are covered, paying extra on the mortgage is a great use of your money. 
          If they're not, you're putting the cart before the horse.
        </p>
      </section>

      {/* ========== SECTION 5 ========== */}
      <section id="biweekly-strategy" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Bi-Weekly Strategy <span className="text-muted-foreground text-lg">(Easier Than You Think)</span>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          A lot of people want to pay off their mortgage faster but don't have a big lump sum to 
          throw at it. The bi-weekly approach works well here.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Instead of making one monthly payment of $2,528, you pay $1,264 every two weeks. Because 
          there are 52 weeks in a year, you end up making 26 half-payments—which equals 13 full 
          payments instead of 12.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          That extra payment goes entirely to principal. Over time, it shortens a 30-year loan to 
          roughly 24 years, with massive interest savings.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The beauty of this approach is that it aligns with how most people get paid. If your 
          paycheck comes every two weeks, your mortgage payment does too. You barely feel the 
          difference month to month.
        </p>
        <div className="text-center">
          <Link
            to="/calculator?tab=biweekly"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Calculator className="w-4 h-4" />
            Try our bi-weekly comparison tool →
          </Link>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 text-center">
        <div className="flex justify-center mb-3">
          <Calculator className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          See how much extra payments could save you
        </h3>
        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
          Our calculator has an extra payment feature that lets you play with different scenarios. 
          Add $100 a month. Add $500. Try a yearly lump sum. Watch the payoff date move.
        </p>
        <Link
          to="/calculator"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Open the Mortgage Calculator
        </Link>
      </div>

      {/* ========== SECTION 6 ========== */}
      <section id="emotional-side" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Emotional Side <span className="text-muted-foreground text-lg">(It's Not Just Math)</span>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          All the math in the world doesn't capture what my aunt felt when she burned that mortgage 
          statement.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          For some people, being completely debt-free matters in a way that spreadsheets can't 
          measure. They sleep better. They feel freer. They take career risks they wouldn't have 
          taken when they had a $2,500 monthly obligation hanging over them.
        </p>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          That's not irrational. It's just a different priority.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The key is to be honest with yourself about which camp you're in. Don't pretend you're 
          making a purely mathematical decision if what you really want is the peace of mind. And 
          don't pretend you're optimizing for returns if you're actually just afraid of debt.
        </p>
      </section>

      {/* ========== SECTION 7 ========== */}
      <section id="middle-path" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Middle Path
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Here's an option that doesn't get enough attention: <strong>do both</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Put most of your extra money into investments or savings. But make small, consistent extra 
          payments toward your mortgage too—even $50 or $100 a month. Those small amounts add up over 
          30 years, and they give you a sense of forward momentum without locking up all your liquidity.
        </p>
        <div className="bg-card border border-border rounded-xl p-5 mb-4">
          <p className="text-muted-foreground leading-relaxed">
            A <strong>$100 monthly</strong> extra payment on a $400,000 loan at 6.5% saves about 
            <strong> $46,000</strong> in interest and pays off the loan roughly 
            <strong> four and a half years early</strong>. That's meaningful. And it leaves you 
            plenty of cash for everything else.
          </p>
        </div>
      </section>

      {/* ========== SECTION 8 ========== */}
      <section id="how-to-decide" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          How to Decide
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Ask yourself these four questions. The answers will point you in the right direction.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">1. What's your mortgage rate?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Above 5-6%, paying extra is very attractive. Below 3-4%, the math favors investing.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">2. Do you have six months of expenses in cash?</h3>
            <p className="text-muted-foreground leading-relaxed">
              If not, build that first. See the rule above.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">3. Are you maxing out your retirement match?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Free money beats saved interest every time.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">4. How does debt make you feel?</h3>
            <p className="text-muted-foreground leading-relaxed">
              If carrying a mortgage genuinely stresses you out, that matters. Just don't sacrifice 
              your emergency fund to fix it.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          There's no wrong answer. But there is a wrong <em>order</em>. And the wrong order is paying 
          extra on your mortgage while you have credit card debt, no savings, and a 401(k) match 
          you're leaving on the table.
        </p>
      </section>

      {/* ========== RELATED ARTICLES ========== */}
      <section className="mb-10">
        <p className="font-medium text-foreground mb-3">Dive deeper into related topics:</p>
        <div className="space-y-3">
          <Link to="/calculator?tab=biweekly" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Bi-Weekly vs Monthly Payments</div>
              <div className="text-sm text-muted-foreground">See exactly how much bi-weekly payments save you.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/why-mostly-interest" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Why Do Mortgage Payments Go Mostly to Interest?</div>
              <div className="text-sm text-muted-foreground">Understanding amortization is the first step to beating it.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/30-vs-15-year" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">30-Year vs 15-Year Mortgage</div>
              <div className="text-sm text-muted-foreground">The math behind choosing a shorter loan term.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/monthly-payment-breakdown" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">What Goes Into Your Monthly Payment?</div>
              <div className="text-sm text-muted-foreground">The full PITI breakdown beyond just principal and interest.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        </div>
      </section>

    </article>
  );
}
