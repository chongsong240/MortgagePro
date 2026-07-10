import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight, BarChart3, AlertTriangle, ExternalLink, CheckCircle2, XCircle } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function BiWeeklyPayments() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Bi-Weekly Mortgage Payments: Are They Worth It?"
        description="An honest look at the math, the gotchas, and whether accelerating your mortgage makes sense for your financial situation."
        datePublished="2026-05-20"
        url="https://www.mortgagepro.io/blog/biweekly-payments"
        faqs={[
          { q: 'How do bi-weekly mortgage payments save money?', a: 'Making 26 half-payments per year equals 13 full payments instead of 12. That extra payment goes entirely to principal, reducing the balance faster and saving tens of thousands in interest.' },
          { q: 'How many years can bi-weekly payments save on a 30-year mortgage?', a: 'On a typical 30-year mortgage, bi-weekly payments can shave 4-6 years off the loan term and save $50,000-$100,000+ in interest depending on the loan amount and rate.' },
          { q: 'What is the difference between bi-weekly and bi-monthly mortgage payments?', a: 'Bi-weekly means every two weeks (26 payments/year = 13 full payments). Bi-monthly means twice a month (24 payments/year = 12 full payments). Only bi-weekly saves money.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 rounded-full px-3 py-1 font-medium text-xs">
            Strategies
          </span>
          <span>May 20, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Bi-Weekly Mortgage Payments: Are They Worth It?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          An honest look at the math, the gotchas, and whether accelerating your mortgage 
          makes sense for your financial situation.
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
            1. The Story Behind the Strategy
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. The Simple Math Behind It
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. Let's Look at Real Money
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. The Catch Nobody Mentions
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. The DIY Alternative
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. The Real Question & What You'd Save
          </a>
        </nav>
      </div>

      {/* Section 1 - The Story */}
      <section id="section-1" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. The Story Behind the Strategy</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Sarah, a nurse in Phoenix, stumbled across something strange while checking her mortgage account. 
            She had switched to bi-weekly payments two years ago on a whim—her credit union offered it, and it 
            matched her paycheck schedule. What she didn't expect was seeing that her 30-year loan was now 
            projected to be paid off almost six years early.
          </p>
          <p>
            &ldquo;That can't be right,&rdquo; she thought. She did the math three times. It was right.
          </p>
          <p>
            That's the quiet power of bi-weekly payments. No refinancing. No lump sum. Just a small change 
            in how often you pay. According to the{' '}
            <a 
              href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-bi-weekly-mortgage-en-1955/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Consumer Financial Protection Bureau (CFPB)
              <ExternalLink className="w-3 h-3" />
            </a>
            , a bi-weekly payment plan is one of several strategies homeowners can use to pay down their 
            mortgage faster, but it comes with nuances that many lenders don't advertise.
          </p>
        </div>

        {/* Visual: Timeline comparison */}
        <div className="my-6 bg-muted/30 border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Payment Schedule Comparison
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="font-medium text-foreground">Monthly (12/year)</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-[10px] font-bold text-blue-700 dark:text-blue-300">
                    M
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Total: 12 payments</span> — no extra principal
              </div>
            </div>
            <div className="bg-card border-2 border-emerald-400 dark:border-emerald-600 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-medium text-foreground">Bi-Weekly (26/year)</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {Array.from({ length: 26 }).map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                    B
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Total: 13 equivalent payments</span> — one extra principal payment per year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Simple Math */}
      <section id="section-2" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. The Simple Math Behind It</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The trick behind bi-weekly payments is almost embarrassingly simple—and{' '}
            <a 
              href="https://www.investopedia.com/mortgage/bi-weekly-mortgage-payments/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Investopedia has covered it extensively
              <ExternalLink className="w-3 h-3" />
            </a>
            .
          </p>
          <p>
            A standard mortgage has you make <strong>12 monthly payments</strong> per year. A bi-weekly plan 
            splits your monthly payment in half and takes it <strong>every two weeks</strong>.
          </p>
          <p>
            There are 52 weeks in a year. Half-payments every two weeks means 26 half-payments. 
            That adds up to <strong>13 full payments</strong>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 text-blue-800 dark:text-blue-300">
            <div className="flex items-start gap-3">
              <Percent className="w-5 h-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">The Key Insight</p>
                <p>
                  26 half-payments = 13 full payments per year = <strong>1 extra payment annually</strong>
                </p>
                <p className="mt-2">
                  That extra payment goes entirely toward your principal—not interest—which sets off a 
                  compounding chain reaction that accelerates equity buildup over time.
                </p>
              </div>
            </div>
          </div>

          {/* Bi-Weekly vs Bi-Monthly distinction moved here */}
          <div className="bg-card border border-border rounded-xl p-5 mt-6">
            <h3 className="font-semibold text-foreground mb-3">⚠️ Don't Confuse Bi-Weekly with Bi-Monthly</h3>
            <p className="text-muted-foreground text-sm">
              These terms are often confused, but the difference matters. As{' '}
              <a 
                href="https://www.investopedia.com/personal-finance/bi-monthly-vs-bi-weekly-mortgage-payments/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Investopedia explains
                <ExternalLink className="w-3 h-3" />
              </a>
              :
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-300 shrink-0 mt-0.5">BW</span>
                <span><strong className="text-foreground">Bi-Weekly:</strong> Every 2 weeks = 26/year = 13 full payments</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400 shrink-0 mt-0.5">BM</span>
                <span><strong className="text-foreground">Bi-Monthly:</strong> Twice a month = 24/year = 12 payments — saves <em>nothing</em></span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3 border-l-4 border-amber-400 pl-3 bg-amber-50/50 dark:bg-amber-950/20 py-1 rounded-r">
              <strong>Tip:</strong> Some lenders advertise "bi-weekly" but set up bi-monthly. Confirm payments are every two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Real Money */}
      <section id="section-3" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Let's Look at Real Money</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Take a $400,000 loan at 6.5%. According to{' '}
            <a 
              href="https://www.freddiemac.com/pmms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              Freddie Mac's Primary Mortgage Market Survey
              <ExternalLink className="w-3 h-3" />
            </a>
            , 30-year fixed rates have been hovering in the 6-7% range since late 2023. This is a 
            realistic scenario for anyone buying today.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="text-left px-5 py-3 font-semibold text-foreground">$400k at 6.5%</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">Standard Monthly</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">Bi-Weekly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Payment</td>
                <td className="px-5 py-3 text-muted-foreground">$2,528 / month</td>
                <td className="px-5 py-3 text-muted-foreground">$1,264 every 2 weeks</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Total Interest</td>
                <td className="px-5 py-3 text-muted-foreground">~$510,000</td>
                <td className="px-5 py-3 font-medium text-emerald-600 dark:text-emerald-400">~$408,000</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Loan Payoff</td>
                <td className="px-5 py-3 text-muted-foreground">30 years</td>
                <td className="px-5 py-3 font-medium text-emerald-600 dark:text-emerald-400">~24.3 years</td>
              </tr>
              <tr className="bg-emerald-50/50 dark:bg-emerald-950/20">
                <td className="px-5 py-3 font-semibold text-foreground">You Save</td>
                <td className="px-5 py-3 text-muted-foreground">—</td>
                <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                  $102,000 & 5.7 years
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          One hundred and two thousand dollars. A decent chunk of a child's college education. A very nice car. Or, invested at 7%, that $102,000 could grow to over $400,000 by the time you retire.
        </p>
      </section>

      {/* Section 4 - The Catch */}
      <section id="section-4" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. The Catch Nobody Mentions</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Before you rush to call your lender, know this: not all bi-weekly plans are created equal.
            The{' '}
            <a 
              href="https://www.consumerfinance.gov/owning-a-home/prepare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              CFPB's homeownership toolkit
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            warns that some lenders charge fees for setting up bi-weekly payment plans, and third-party 
            services often come with strings attached.
          </p>
        </div>

        <div className="space-y-3 my-5">
          <div className="flex items-start gap-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/50 rounded-lg p-4">
            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-foreground">Setup Fees:</span>{' '}
              <span className="text-muted-foreground">Some lenders charge $300–$500 just to enroll. 
              Bankrate's analysis shows many of these fees are pure profit for the servicing company with 
              no benefit to the borrower.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 rounded-lg p-4">
            <XCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-foreground">Suspense Accounts:</span>{' '}
              <span className="text-muted-foreground">Many third-party services hold your first half-payment 
              until the second half arrives, meaning you get zero benefit from early principal reduction. 
              This defeats the entire purpose.</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 my-6">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Ask Your Lender These Three Questions Before Signing Up
          </h3>
          <ul className="space-y-3">
            {[
              { q: "Is there an enrollment fee?", yes: "Bad sign", no: "Good" },
              { q: "Are payments applied immediately, or held until the full amount arrives?", yes: "Held = bad", no: "Immediate = good" },
              { q: "Can I cancel anytime without penalty?", yes: "Bad sign", no: "Good" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-foreground">{item.q}</span>
                  <div className="text-sm text-muted-foreground mt-1">
                    If the answer is yes, think twice. If payments are held, skip the plan.
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 - DIY Alternative */}
      <section id="section-5" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. The DIY Alternative</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            You don't need anyone's permission to pay off your mortgage faster. As Bankrate's analysis 
            points out, the DIY approach is often superior because you keep full control.
          </p>
          <p>
            Here's how: take your monthly payment, divide by 12, and add that amount as 
            extra principal each month. On a $2,528 payment, that's <strong>$211/month extra</strong>.
          </p>

          <div className="bg-muted/40 border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-3">DIY Extra Payment Calculator</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-card rounded-lg p-3 border border-border">
                <div className="text-xs text-muted-foreground mb-1">Monthly Payment</div>
                <div className="text-lg font-bold text-foreground">$2,528</div>
              </div>
              <div className="bg-card rounded-lg p-3 border border-border">
                <div className="text-xs text-muted-foreground mb-1">÷ 12</div>
                <div className="text-lg font-bold text-foreground">—</div>
              </div>
              <div className="bg-card rounded-lg p-3 border-2 border-primary">
                <div className="text-xs text-muted-foreground mb-1">Extra/Month</div>
                <div className="text-lg font-bold text-primary">$211</div>
              </div>
              <div className="bg-card rounded-lg p-3 border-2 border-emerald-400">
                <div className="text-xs text-muted-foreground mb-1">Savings</div>
                <div className="text-lg font-bold text-emerald-600">~$100k</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Mathematically ~98% identical to a formal bi-weekly plan—with zero fees.
            </p>
          </div>

          <div className="space-y-3 text-muted-foreground">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Full control:</strong> Skip a month if cash gets tight, double up when you have a bonus.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Zero fees:</strong> No enrollment cost, no third-party middleman.</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Immediate effect:</strong> Extra principal reduces interest starting next month.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - The Real Question + CTA (merged former 7 + 8) */}
      <section id="section-6" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. The Real Question & What You'd Save</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The math is clear. Bi-weekly payments save you money. But the real question isn't 
            &ldquo;does it work&rdquo;—it's &ldquo;should I do this instead of something else?&rdquo;
          </p>
          
          <div className="bg-card border border-border rounded-xl p-6 my-6">
            <h3 className="font-semibold text-foreground mb-4">Where Does Mortgage Acceleration Fit in Your Financial Priority List?</h3>
            <div className="space-y-3">
              {[
                { step: "1", label: "Emergency Fund", text: "3-6 months of expenses saved", priority: "Non-negotiable" },
                { step: "2", label: "High-Interest Debt", text: "Credit cards at 22%+ — kill that first", priority: "Must do first" },
                { step: "3", label: "401(k) Match", text: "Free money from your employer beats saved interest", priority: "Max this out" },
                { step: "4", label: "Extra Mortgage Payments", text: "Only after the above boxes are checked", priority: "Then consider" },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    item.step === "4" 
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.text}</div>
                  </div>
                  <div className="text-xs font-medium shrink-0 text-muted-foreground">{item.priority}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            If you have credit card debt at 22% interest, paying that down first delivers a far higher 
            return than accelerating a 6.5% mortgage. If your employer matches 401(k) contributions, 
            max that out first—free money beats saved interest every time.
          </p>
          <p>
            But if those boxes are checked—and you plan to stay in your home long-term—bi-weekly payments 
            are one of the simplest wealth-building moves available. The{' '}
            <a 
              href="https://www.consumerfinance.gov/about-us/blog/guide-to-mortgage-payments/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              CFPB's guide to mortgage payments
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            reinforces that any extra principal payment—no matter how small—reduces the total cost of borrowing.
          </p>

          <p>
            Sarah's story isn't unusual. She just happened to notice the numbers. With our 
            Mortgage Calculator, you don't have to wait two years for the surprise.
          </p>
          
          <div className="bg-gradient-to-br from-primary/5 via-primary/[0.02] to-background border-2 border-primary/20 rounded-xl p-8 text-center">
            <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Crunch Your Own Numbers</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Enter your loan details, switch to the <strong>Bi-Weekly</strong> tab, and the savings appear 
              instantly. The number in the top-left corner might genuinely shock you.
            </p>
            <Link 
              to="/biweekly-mortgage-calculator" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Try the Bi-Weekly Calculator
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <AllCalculatorsGrid />

      {/* Footer / Related */}
      <div className="border-t border-border pt-8 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>Read more in our </span>
            <Link to="/blog" className="text-primary hover:underline">Blog</Link>
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/blog/how-to-use-calculator" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              How to Use the Calculator
            </Link>
            <Link to="/blog/amortization-schedule" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Amortization Schedule
            </Link>
            <Link to="/mortgage-calculator" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              All Calculators
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
