import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator, TrendingUp, AlertTriangle } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function WhyMostlyInterest() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Why Do Mortgage Payments Go Mostly to Interest?"
        description="My friend Rob paid over $15,000 in his first six months. His loan balance dropped by less than $3,000. Here's how the math really works."
        datePublished="2026-06-09"
        url="https://www.mortgagepro.io/blog/why-mostly-interest"
        faqs={[
          { q: 'Why do early mortgage payments go mostly to interest?', a: 'Interest is calculated monthly on the remaining balance. In month one, the full loan amount is outstanding, so interest is at its peak. On a $400,000 loan at 6.5%, the first payment is $2,167 interest and only $361 principal.' },
          { q: 'When does a mortgage payment become mostly principal?', a: 'On a 30-year mortgage, the crossover where principal exceeds interest occurs around year 18-19. In the final years, nearly 99% of each payment goes to principal.' },
          { q: 'How can I pay less interest on my mortgage?', a: 'Three main strategies: make extra principal payments (even $100/month saves tens of thousands), switch to bi-weekly payments (equivalent to one extra payment per year), or choose a 15-year term from the start.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>June 9, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Why Do Mortgage Payments Go Mostly to Interest?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My friend Rob paid over $15,000 in his first six months. His loan balance dropped by less than $3,000. 
          He asked if the bank was scamming him. They weren't. But what's actually happening inside your payment 
          is something most people never see until they sign.
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
            ['two-piles', '1. The Two Piles Your Payment Gets Split Into'],
            ['real-math', '2. A Real Example, With Real Math'],
            ['why-structured', '3. Why the Bank Structures It This Way'],
            ['first-five', '4. The First Five Years Are the Hardest'],
            ['when-flips', '5. When It Finally Flips'],
            ['move-needle', '6. What Actually Moves the Needle'],
            ['before-signing', '7. One Thing to Check Before You Sign'],
            ['what-rob-did', '8. What Rob Did'],
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
      {/* Section 1 - Two Piles */}
      {/* ============================================ */}
      <section id="two-piles" className="mb-10">
        <p className="text-lg leading-relaxed mb-4">
          My friend Rob sent me a screenshot of his mortgage statement a few months ago, with a single 
          question mark. He'd made six payments on his new condo—over <strong>$15,000 in total</strong>—
          and his loan balance had dropped by less than $3,000.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          "Is my bank scamming me?" he asked.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          They weren't. But nobody had explained to him what was actually happening inside his monthly 
          payment. And once you see it, you can't unsee it.
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4 mt-10">
          The Two Piles Your Payment Gets Split Into
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Every mortgage payment you make gets divided into two piles.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-2xl mb-2">📉</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Principal</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The money that actually reduces what you owe. If you borrowed $350,000, principal payments 
              are what slowly chip that number down toward zero. This is the part that builds your 
              equity—your actual ownership of the home.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-2xl mb-2">🏦</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Interest</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              What the bank charges for the privilege of borrowing their money. It's their profit. And 
              here's the part that surprises most people: interest isn't a flat fee spread evenly over 
              the life of the loan. It's calculated fresh every single month, based on whatever you 
              still owe.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          <strong>In month one, you owe the full amount. So interest in month one is as high as it will ever be.</strong>
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 2 - Real Math */}
      {/* ============================================ */}
      <section id="real-math" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          A Real Example, With Real Math
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Let's use the same numbers we've been working with throughout this site. They're realistic 
          for a buyer in today's market.
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 text-muted-foreground">
          <li>Loan amount: <strong className="text-foreground">$400,000</strong></li>
          <li>Interest rate: <strong className="text-foreground">6.5%</strong></li>
          <li>Loan term: <strong className="text-foreground">30 years</strong></li>
          <li>Monthly payment (P&I): <strong className="text-foreground">$2,528</strong></li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          Here's what happens to that $2,528 in month one.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4">
          <p className="text-muted-foreground mb-3">
            The bank takes your 6.5% annual rate, divides it by 12, and applies it to the full $400,000 balance:
          </p>
          <div className="text-center mb-3">
            <p className="text-lg font-semibold">
              $400,000 × (6.5% ÷ 12) = <span className="text-destructive">$2,167 in interest</span>
            </p>
          </div>
          <p className="text-muted-foreground mb-3">
            Your total payment is $2,528. So after interest takes its cut:
          </p>
          <div className="text-center">
            <p className="text-lg font-semibold">
              $2,528 – $2,167 = <span className="text-emerald-600">$361 going to principal</span>
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          You just paid over twenty-five hundred dollars. Your debt went down by <strong>three hundred 
          and sixty-one bucks</strong>.
        </p>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          Rob stared at his screen for a while after I walked him through this. "So I'm basically renting 
          money from the bank," he said. That's not far off.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 3 - Why Structured */}
      {/* ============================================ */}
      <section id="why-structured" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          Why the Bank Structures It This Way
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          This isn't a trick or a hidden fee. It's just how interest math works on any long-term loan 
          where the rate is fixed and the balance is huge at the start.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          The formula never changes:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-center">
          <p className="font-mono text-lg font-semibold">
            Monthly Interest = Remaining Balance × (Annual Rate ÷ 12)
          </p>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          In month one, the remaining balance is the full $400,000. So the interest is enormous. In month 
          60, after five years of payments, the balance might be around $372,000. Now the interest charge is:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-center">
          <p className="text-lg">
            $372,000 × (6.5% ÷ 12) = <span className="font-semibold">$2,015</span>
          </p>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          Your payment hasn't changed—it's still $2,528. But now <strong>$513</strong> goes to principal 
          instead of $361. You're making progress. It's just painfully slow at first.
        </p>
        <p className="text-lg leading-relaxed">
          The bank isn't front-loading the interest out of greed. They're applying the same rate to a 
          bigger number. As the number shrinks, so does the interest. This is what people mean when they 
          say mortgages are "front-loaded." It's not a design flaw. It's just math.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 4 - First Five Years */}
      {/* ============================================ */}
      <section id="first-five" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The First Five Years Are the Hardest
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          This is the part that makes people want to sell their house and go back to renting.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          On a $400,000 loan at 6.5%, after five full years of on-time payments, here's where you stand:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-5 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between text-lg">
              <span>Total paid:</span>
              <span className="font-semibold">~$151,680</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Gone to interest:</span>
              <span className="font-semibold text-destructive">~$123,000</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Gone to principal:</span>
              <span className="font-semibold text-emerald-600">~$28,000</span>
            </div>
            <hr className="border-border my-2" />
            <div className="flex justify-between text-lg">
              <span className="text-muted-foreground">Principal as % of total:</span>
              <span className="font-semibold">~18%</span>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          You've written checks for over $150,000. Your loan balance dropped by $28,000. That's about 
          <strong> 18 cents of every dollar</strong> actually reducing your debt.
        </p>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          If you sell during this period, you might not have much equity beyond whatever the market 
          happened to do while you owned the place. This is why short-term ownership can be financially 
          disappointing.
        </p>
      </section>

      {/* ============================================ */}
      {/* CTA - Calculator */}
      {/* ============================================ */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 text-center">
        <div className="flex justify-center mb-3">
          <Calculator className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          See exactly where your money goes, month by month
        </h3>
        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
          Our interactive calculator shows the full amortization schedule for any loan — every payment, 
          every split between principal and interest, for the entire life of the loan.
        </p>
        <Link
          to="/mortgage-calculator"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Try the Mortgage Calculator Now
        </Link>
      </div>

      {/* ============================================ */}
      {/* Section 5 - When It Flips */}
      {/* ============================================ */}
      <section id="when-flips" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          When It Finally Flips
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          There's good news, but it requires patience.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Sometime around <strong>year 18 or 19</strong> on a 30-year loan, the split crosses over. More 
          of your payment starts going to principal than interest. From that point on, your equity builds 
          faster and faster. In the final years, almost your entire payment is principal.
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-center">
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <div className="text-muted-foreground mb-1">Year 1</div>
              <div className="flex items-center gap-2">
                <span className="text-destructive font-semibold">86% Interest</span>
                <span className="text-emerald-600 font-semibold">14% Principal</span>
              </div>
            </div>
            <div className="hidden sm:block text-muted-foreground">→</div>
            <div>
              <div className="text-muted-foreground mb-1">Year 19</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-semibold">52% Principal</span>
                <span className="text-destructive font-semibold">48% Interest</span>
              </div>
            </div>
            <div className="hidden sm:block text-muted-foreground">→</div>
            <div>
              <div className="text-muted-foreground mb-1">Year 30</div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-semibold">99% Principal</span>
                <span className="text-destructive font-semibold">1% Interest</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          The problem is, most people don't stay in a home for 30 years. The average homeowner moves or 
          refinances long before the flip happens—which means they spend most of their mortgage life in 
          the "mostly interest" phase, then start over with a new loan.
        </p>
        <p className="text-lg leading-relaxed bg-muted/40 border border-border rounded-lg p-4">
          This is why refinancing, while sometimes smart for lowering your rate, also resets the 
          amortization clock. You go back to month one, paying mostly interest again. It's not a reason 
          to avoid refinancing, but it's something to understand before you do it.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 6 - Move the Needle */}
      {/* ============================================ */}
      <section id="move-needle" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          What Actually Moves the Needle
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          If you want to escape the interest trap faster, you have three real options.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-xl font-semibold text-foreground mb-2">1. Make extra principal payments</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Even small ones. An extra <strong>$100 a month</strong> on that $400,000 loan saves about 
              <strong> $46,000</strong> in interest and pays off the loan <strong>four and a half years early</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The reason is simple: every extra dollar goes entirely to principal, which lowers the balance, 
              which reduces next month's interest charge, which means more of your regular payment goes 
              to principal. It's a compounding effect in your favor.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-xl font-semibold text-foreground mb-2">2. Switch to bi-weekly payments</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pay half your monthly amount every two weeks instead of the full amount once a month. Because 
              of how the calendar works, you end up making the equivalent of <strong>13 full payments</strong> 
              per year instead of 12. That extra payment chips away at principal faster. 
              {' '}<Link to="/biweekly-mortgage-calculator" className="text-primary hover:underline font-medium">
                Try our bi-weekly comparison tool →
              </Link>
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-xl font-semibold text-foreground mb-2">3. Choose a 15-year term from the start</h3>
            <p className="text-muted-foreground leading-relaxed">
              The monthly payment is higher—sometimes a lot higher—but the interest rate is usually lower, 
              and you pay off the loan in half the time. The interest savings are enormous. 
              {' '}<Link to="/blog/30-vs-15-year" className="text-primary hover:underline font-medium">
                We have a full comparison of 15-year and 30-year loans →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Section 7 - Before Signing */}
      {/* ============================================ */}
      <section id="before-signing" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          One Thing to Check Before You Sign Anything
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          When you get a loan estimate from a lender, there's a section that shows the total interest 
          you'll pay over the life of the loan. Most people glance at it and move on.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-4 text-center">
          <p className="text-lg mb-2 font-semibold">Don't do that.</p>
          <p className="text-muted-foreground">
            Look at that number. Sit with it. On a $400,000 loan at 6.5% over 30 years, the total 
            interest is <strong className="text-destructive">over $500,000</strong>. That's more than you borrowed.
          </p>
        </div>
        <p className="text-lg leading-relaxed">
          Understanding why that number is so high—which you now do—is the first step toward reducing it.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 8 - What Rob Did */}
      {/* ============================================ */}
      <section id="what-rob-did" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          What Rob Did
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Rob didn't sell his condo. He didn't refinance. He just set up an automatic extra payment of 
          <strong> $150 a month</strong> toward principal. He told me he doesn't even notice the money 
          leaving his account. But his amortization schedule now shows the loan paid off about 
          <strong> six years early</strong>, with over <strong>$60,000 in interest saved</strong>.
        </p>
        <p className="text-lg leading-relaxed mb-4 bg-muted/40 border border-border rounded-lg p-4 italic">
          "That amortization table you showed me," he said. "That should be mandatory reading before 
          anyone signs a mortgage."
        </p>
        <p className="text-lg leading-relaxed">
          Couldn't agree more. You can pull up your own amortization breakdown right now with 
          {' '}<Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">our mortgage calculator</Link> —
          just enter your numbers and look for the schedule that shows exactly how much of each payment
          is interest versus principal, month by month, for the entire life of the loan.
        </p>

        <div className="mt-6 space-y-3">
          <p className="font-medium text-foreground">Dive deeper into related topics:</p>
          
          <Link to="/blog/amortization-schedule" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 flex items-center justify-center flex-shrink-0">
              <PieChart className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Full Amortization Schedule Guide</div>
              <div className="text-sm text-muted-foreground">The complete breakdown of how your payments split over 30 years.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/biweekly-mortgage-calculator" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Bi-Weekly vs Monthly Payments</div>
              <div className="text-sm text-muted-foreground">See exactly how much extra principal payments save you.</div>
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

        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
          <Link to="/blog/monthly-payment-breakdown" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">What Goes Into Your Monthly Payment?</div>
              <div className="text-sm text-muted-foreground">The full PITI breakdown beyond just principal and interest.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        </div>
      </section>
      <AllCalculatorsGrid />

    </article>
  );
}
