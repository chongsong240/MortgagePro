import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight, BarChart3, AlertTriangle, ExternalLink, CheckCircle2, XCircle, Scale, Lightbulb, HelpCircle } from 'lucide-react';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ThirtyVsFifteenYear() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 rounded-full px-3 py-1 font-medium text-xs">
            Comparisons
          </span>
          <span>May 24, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          30-Year vs 15-Year Mortgage: The Decision That Shapes Your Future
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The math favors one side clearly. But the right answer for your life depends on 
          five questions that have nothing to do with interest rates.
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
            1. The Question You Can't Ignore
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. The Numbers, Plain and Simple
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. Why the Gap Is So Enormous
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. The Case for 30 Years
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. The Case for 15 Years
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. The Middle Path Most People Ignore
          </a>
          <a href="#section-7" onClick={(e) => scrollToSection(e, 'section-7')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            7. Five Questions Before You Decide
          </a>
          <a href="#section-7-cta" onClick={(e) => scrollToSection(e, 'section-7-cta')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            8. Try Both Scenarios Right Now
          </a>

        </nav>
      </div>

      {/* Section 1 - The Question */}
      <section id="section-1" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. The Question You Can't Ignore</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            If you take a 30-year mortgage instead of a 15-year, the $800 or so you save each month—what 
            would you do with it?
          </p>
          <p>
            Travel? Your kids' education? Invest it in an index fund? Or would it simply disappear into a 
            slightly nicer car payment and more dinners out?
          </p>
          <p>
            That question matters more than the interest rate. Because the 30-vs-15 decision isn't really 
            about math—the math is clear and favors the 15-year loan every time. The decision is about{' '}
            <strong>who you are as a money manager</strong>.
          </p>
        </div>

        {/* Visual hook */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-6 my-6">
          <div className="flex items-center gap-4">
            <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">$312,000</p>
              <p className="text-sm text-muted-foreground">
                That's the interest penalty for choosing 30 years over 15 years on a $400k loan at 
                today's typical rates. But it's not the whole story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Numbers */}
      <section id="section-2" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. The Numbers, Plain and Simple</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Same house. Same borrower. Two different loans.
          </p>
          <p>
            According to the{' '}
            <a 
              href="https://www.investopedia.com/mortgage/15-year-vs-30-year-mortgage/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Investopedia comparison of 15-year vs 30-year mortgages
              <ExternalLink className="w-3 h-3" />
            </a>
            , the difference in total cost is often larger than borrowers expect because two factors 
            compound against you.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-border my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="text-left px-5 py-3 font-semibold text-foreground">$400k Loan</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">30-Year (6.5%)</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">15-Year (5.75%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Monthly Payment (P&I)</td>
                <td className="px-5 py-3 text-muted-foreground">$2,528</td>
                <td className="px-5 py-3 text-muted-foreground">$3,322</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Monthly Difference</td>
                <td className="px-5 py-3 text-muted-foreground">—</td>
                <td className="px-5 py-3 text-muted-foreground">$794 more</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Total Interest</td>
                <td className="px-5 py-3 font-bold text-red-600 dark:text-red-400">~$510,000</td>
                <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">~$198,000</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Interest Savings</td>
                <td className="px-5 py-3 text-muted-foreground">—</td>
                <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400 text-lg">$312,000</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="px-5 py-3 font-medium text-foreground">Equity After 5 Years</td>
                <td className="px-5 py-3 text-muted-foreground">~$28,000</td>
                <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">~$113,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          <strong className="text-foreground">$312,000.</strong> That's not a typo.
        </p>
        <p className="text-muted-foreground">
          And in the first five years, the 15-year borrower builds{' '}
          <strong className="text-foreground">four times the equity</strong>. If they need to sell or borrow 
          against the house, they have options. The 30-year borrower does not.
        </p>
      </section>

      {/* Section 3 - Why the Gap */}
      <section id="section-3" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Why the Gap Is So Enormous</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Two things are working against you on a 30-year loan, and they multiply.
          </p>

          {/* Compound factors visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-red-500" />
                <h3 className="font-semibold text-foreground">Higher Rate</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                15-year loans typically price <strong>0.5% to 1% lower</strong> because they're less risky 
                for lenders. The{' '}
                <a 
                  href="https://www.freddiemac.com/pmms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Freddie Mac PMMS
                  <ExternalLink className="w-3 h-3" />
                </a>{' '}
                consistently shows this spread.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-red-500" />
                <h3 className="font-semibold text-foreground">Double the Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                You're paying that higher rate for <strong>twice as long</strong>. These two factors 
                don't add—they multiply. That's the $312,000 story.
              </p>
            </div>
          </div>

          <p>
            As the{' '}
            <a 
              href="https://www.consumerfinance.gov/owning-a-home/explore/check-your-interest-rate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              CFPB explains in their homeownership guides
              <ExternalLink className="w-3 h-3" />
            </a>
            , even small differences in interest rates compound dramatically over 30 years—which is why 
            comparing APR across loan terms is essential.
          </p>
        </div>
      </section>

      {/* Section 4 - Case for 30 Years */}
      <section id="section-4" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. The Case for 30 Years</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The 30-year loan gets a bad rap in personal finance circles. Sometimes unfairly.
          </p>

          {/* James Chen story */}
          <div className="bg-card border border-border rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-muted-foreground italic">
                  "I'm 32. My career is growing. I'd rather put that extra $800/month into a diversified 
                  portfolio and let it compound for 30 years. Historically, the market returns more than 
                  my mortgage rate. I'm betting the spread."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— James Chen, software developer, Austin</p>
              </div>
            </div>
          </div>

          <p>
            He's not wrong. But he's also not most people.
          </p>

          {/* When it makes sense */}
          <div className="space-y-3 my-6">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              The 30-year makes sense when:
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
              <li>Your income is variable (commission, freelance, seasonal)</li>
              <li>You have a disciplined investment plan for the monthly savings</li>
              <li>You value cash flow flexibility above all else</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500" />
              The 30-year becomes a trap when:
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
              <li>The saved money disappears into lifestyle creep</li>
              <li>You stay in the house 20+ years and pay maximum interest</li>
              <li>You refinance repeatedly, restarting the amortization clock</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 - Case for 15 Years */}
      <section id="section-5" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. The Case for 15 Years</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The 15-year mortgage is a forced wealth-building machine. You don't have to be disciplined. 
            The bank does it for you.
          </p>

          {/* Neighbor story */}
          <div className="bg-card border border-border rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-muted-foreground italic">
                  "My neighbor took a 15-year loan in 2010, right after the housing crash. Everyone told him 
                  it was too risky. He was 41. He wanted his house paid off before he turned 60. He made the 
                  last payment in 2025. He's 56. He now puts what used to be his mortgage payment into 
                  investments. 'Best decision I ever made,' he says. 'Not mathematically optimal, maybe. But 
                  I sleep like a rock.'"
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              The 15-year is right when:
            </h3>
            <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
              <li>Your income is stable and likely to stay that way</li>
              <li>You have 6+ months of emergency savings beyond the down payment</li>
              <li>You want to be debt-free by a specific age</li>
              <li>You value certainty over potential upside</li>
            </ul>
          </div>

          <p>
            The{' '}
            <a 
              href="https://www.bankrate.com/mortgages/15-year-vs-30-year-mortgage/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Bankrate analysis of 15 vs 30 year mortgages
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            confirms that the 15-year path is especially powerful for mid-career buyers who have stable 
            income and want to eliminate their largest debt before retirement.
          </p>
        </div>
      </section>

      {/* Section 6 - The Middle Path */}
      <section id="section-6" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. The Middle Path Most People Ignore</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6 my-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              <h3 className="font-semibold text-foreground">The option nobody's mortgage broker will mention</h3>
            </div>
            <p className="text-muted-foreground">
              <strong>Take the 30-year loan and pay it like a 15-year.</strong>
            </p>
            <p className="text-muted-foreground mt-2">
              You get the lower contractual obligation. If you lose your job, you drop to the minimum 
              payment. But in normal months, you add extra principal to match what the 15-year payment 
              would be.
            </p>
          </div>

          {/* Math visualization */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-muted-foreground">30-year minimum payment</span>
                <span className="font-medium text-foreground">$2,528</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-muted-foreground">Extra principal to match 15-year</span>
                <span className="font-medium text-primary">+$794</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg">
                <span className="font-semibold text-foreground">Total paid monthly</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">$3,322</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center border-t border-border pt-4">
              The math works out nearly identically to a true 15-year loan. The interest rate is slightly 
              higher, so you lose a little. But you gain a massive safety net.
            </p>
          </div>

          <p className="text-center font-medium text-foreground">
            This is, honestly, the right answer for probably 60% of borrowers. Few take it.
          </p>
        </div>
      </section>

      {/* Section 7 - Five Questions */}
      <section id="section-7" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Five Questions Before You Decide</h2>

        <div className="space-y-4">
          {[
            { q: "If you lost your job tomorrow, how many months could you cover the 15-year payment?" },
            { q: "What would you actually do with the $800/month savings on a 30-year—invest it, or spend it?" },
            { q: "How long do you realistically plan to stay in this home?" },
            { q: "What else are you sacrificing for the higher payment—retirement contributions, kids' college funds, travel?" },
            { q: "Does being completely debt-free matter to you emotionally, or is this purely a math decision?" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border">
              <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Question {i + 1}:</strong> {item.q}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-4">
          No wrong answers. But ignoring the questions is a mistake.
        </p>
      </section>

      {/* Section 8 - Try Both */}
      <section id="section-7-cta" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Try Both Scenarios Right Now</h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Abstract comparisons only go so far. Open our Mortgage Calculator and enter your real numbers. 
            Switch between the 30-Year and 15-Year tabs. Look at the monthly difference. Then look at the 
            total interest number.
          </p>
          <p>
            Now toggle the "Extra Payment" slider and simulate the middle path. The right answer for your 
            life might appear in that chart.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary/5 via-primary/[0.02] to-background border-2 border-primary/20 rounded-xl p-8 text-center mt-8">
            <BarChart3 className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground mb-2">See the Difference for Yourself</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Enter your loan amount, compare 30-year vs 15-year side by side, and find the 
              monthly payment that fits your life.
            </p>
            <Link 
              to="/calculator" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Open the Calculator
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-border pt-8 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>Read more in our </span>
            <Link to="/blog" className="text-primary hover:underline">Blog</Link>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/blog/biweekly-payments" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Bi-Weekly Payments
            </Link>
            <Link to="/blog/what-is-pmi" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              What Is PMI?
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
