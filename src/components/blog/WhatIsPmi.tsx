import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight, BarChart3, AlertTriangle, ExternalLink, CheckCircle2, XCircle, Landmark, ClipboardCheck } from 'lucide-react';
import BlogSchema from './BlogSchema';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function WhatIsPmi() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="PMI in Mortgages: What It Is and How to Get Rid of It"
        description="If you're putting down less than 20%, you're paying for something that doesn't protect you. Here's exactly how to cancel PMI and save thousands."
        datePublished="2026-05-22"
        url="https://www.mortgagepro.io/blog/what-is-pmi"
        faqs={[
          { q: 'What is PMI and who does it protect?', a: 'PMI (Private Mortgage Insurance) protects the lender, not you. It is required when your down payment is less than 20% of the home price. PMI typically costs 0.5% to 1.5% of the loan amount annually.' },
          { q: 'When can I cancel PMI on my mortgage?', a: 'You can request PMI cancellation when your loan balance reaches 80% of the original home value. Under the Homeowners Protection Act, PMI must be automatically terminated when your balance reaches 78%.' },
          { q: 'Can home appreciation help me cancel PMI faster?', a: 'Yes. If your home has appreciated in value, you may already have 20% equity even without paying down much principal. A new appraisal ($400-$600) can confirm this and allow you to request PMI cancellation early.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>May 22, 2026</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          PMI in Mortgages: What It Is and How to Get Rid of It
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          If you're putting down less than 20%, you're paying for something that doesn't protect you. 
          Here's exactly how to cancel it—and save thousands.
        </p>
      </div>

      {/* Table of Contents - 10 sections */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Table of Contents
        </h2>
        <nav className="space-y-2 text-sm">
          <a href="#section-1" onClick={(e) => scrollToSection(e, 'section-1')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            1. The $178 Lesson
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. What Exactly Are You Paying For?
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. The Real Cost, in Real Numbers
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. Automatic Termination at 78% LTV
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. Your Right to Request at 80% LTV
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. Can You Use Current Market Value?
          </a>
          <a href="#section-7" onClick={(e) => scrollToSection(e, 'section-7')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            7. The Appraisal Shortcut
          </a>
          <a href="#section-8" onClick={(e) => scrollToSection(e, 'section-8')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            8. What If Your Lender Says No?
          </a>
          <a href="#section-9" onClick={(e) => scrollToSection(e, 'section-9')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            9. Faster Paths to PMI Freedom
          </a>
          <a href="#section-10" onClick={(e) => scrollToSection(e, 'section-10')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            10. The Calculator Tells the Story
          </a>
        </nav>
      </div>

      {/* Section 1 - The Story */}
      <section id="section-1" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. The $178 Lesson</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Marcus and Elena bought their first home in Atlanta in 2021. They had good jobs, decent credit, 
            and a 5% down payment. What they didn't have was an extra $60,000 sitting around for a 20% down 
            payment on a $300,000 house.
          </p>
          <p>
            So they paid PMI. Every month, $178 disappeared from their account—money that didn't build equity, 
            didn't pay down debt, and didn't come back.
          </p>
          <p>
            By 2024, their home had appreciated. They got a new appraisal for $450. It showed their equity 
            had crossed 20%. The PMI was canceled. That $450 investment saved them $2,136 per year, every year 
            going forward.
          </p>
          <p>
            This is the PMI game. The rules aren't complicated. But you have to know them. The{' '}
            <a 
              href="https://www.consumerfinance.gov/ask-cfpb/what-is-mortgage-insurance-en-1953/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              CFPB explains mortgage insurance clearly
              <ExternalLink className="w-3 h-3" />
            </a>
            , yet surveys consistently show that most borrowers don't know how or when they can cancel it.
          </p>
        </div>
      </section>

      {/* Section 2 - What is PMI */}
      <section id="section-2" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. What Exactly Are You Paying For?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Let's be blunt: <strong>PMI protects the lender, not you.</strong>
          </p>
          <p>
            When you put down less than 20%, the bank gets nervous. They're lending you more than 80% of the 
            home's value. If you default and they foreclose, the sale might not cover what you owe. PMI is an 
            insurance policy that covers that gap. You pay the premiums. They get the protection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-card border-2 border-red-200 dark:border-red-800/50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">💳</div>
              <h3 className="font-semibold text-foreground">You Pay</h3>
              <p className="text-sm text-muted-foreground mt-1">
                $178–$300/month in premiums added to your mortgage payment
              </p>
            </div>
            <div className="bg-card border-2 border-blue-200 dark:border-blue-800/50 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">🏦</div>
              <h3 className="font-semibold text-foreground">Lender Benefits</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Insurance payout if you default. PMI doesn't help you build equity
              </p>
            </div>
          </div>

          <p>
            Not exactly a great deal. But for most first-time buyers, it's the only path to homeownership without saving for years.
          </p>
        </div>
      </section>

      {/* Section 3 - Real Cost */}
      <section id="section-3" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. The Real Cost, in Real Numbers</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            PMI typically runs <strong>0.5% to 1.5%</strong> of your original loan amount per year. Where you 
            fall depends on your credit score and down payment size.
          </p>
          <p>
            Here's what it looks like on a typical first-time buyer's loan:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border my-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/60">
                <th className="text-left px-5 py-3 font-semibold text-foreground">Item</th>
                <th className="text-left px-5 py-3 font-semibold text-foreground">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Home Price</td>
                <td className="px-5 py-3 text-muted-foreground">$400,000</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Down Payment (10%)</td>
                <td className="px-5 py-3 text-muted-foreground">$40,000</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">Loan Amount</td>
                <td className="px-5 py-3 text-muted-foreground">$360,000</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-foreground">PMI Rate</td>
                <td className="px-5 py-3 text-muted-foreground">1.0%</td>
              </tr>
              <tr className="bg-red-50/50 dark:bg-red-950/20">
                <td className="px-5 py-3 font-semibold text-foreground">Annual PMI Cost</td>
                <td className="px-5 py-3 font-bold text-red-600 dark:text-red-400">$3,600</td>
              </tr>
              <tr className="bg-red-50/50 dark:bg-red-950/20">
                <td className="px-5 py-3 font-semibold text-foreground">Monthly PMI Cost</td>
                <td className="px-5 py-3 font-bold text-red-600 dark:text-red-400">$300 / month</td>
              </tr>
              <tr className="bg-amber-50/50 dark:bg-amber-950/20">
                <td className="px-5 py-3 font-semibold text-foreground">Over 5 Years</td>
                <td className="px-5 py-3 font-bold text-amber-600 dark:text-amber-400">$18,000 — gone</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          As{' '}
          <a 
            href="https://www.investopedia.com/mortgage/mortgage-insurance/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Investopedia highlights
            <ExternalLink className="w-3 h-3" />
          </a>
          , PMI doesn't reduce over time like your mortgage balance—it's a flat expense until canceled, making it one of the most impactful costs you can eliminate.
        </p>
      </section>

      {/* Section 4 - Automatic Termination (split from old section 4) */}
      <section id="section-4" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Automatic Termination at 78% LTV</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Here's where the <strong>Homeowners Protection Act of 1998</strong>—also called the PMI Cancellation 
            Act—comes in. This federal law gives you specific, enforceable rights.
          </p>
        </div>

        <div className="bg-card border-2 border-green-200 dark:border-green-800/50 rounded-xl p-6 my-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">Automatic Termination</h3>
              <p className="text-muted-foreground mt-2">
                When your loan balance drops to <strong>78%</strong> of the <em>original</em> home value, your 
                lender <strong>must</strong> cancel PMI automatically. No request needed. No fees. This is the law.
              </p>
              <p className="text-muted-foreground mt-2">
                The catch? You must be current on your payments. If you've missed payments recently, the 
                automatic termination may be delayed.
              </p>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50 rounded-lg p-3 mt-3">
                <p className="text-sm text-green-800 dark:text-green-300">
                  <strong>Key point:</strong> "Original value" means the purchase price or appraised value at 
                  loan origination—not today's market value.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground">
          On a $400,000 home with 10% down ($360k loan), you'd need to pay down to <strong>$312,000</strong> 
          to hit 78% LTV. That means paying off <strong>$48,000</strong> in principal—which takes about 
          11 years on a standard 30-year schedule.
        </p>
      </section>

      {/* Section 5 - Right to Request (split from old section 4) */}
      <section id="section-5" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Right to Request at 80% LTV</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            You don't have to wait for 78%. At <strong>80%</strong> loan-to-value, you can request 
            cancellation in writing.
          </p>

          <div className="bg-card border-2 border-blue-200 dark:border-blue-800/50 rounded-xl p-6 my-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">Your Right to Request</h3>
                <p className="text-muted-foreground mt-2">
                  Under the Homeowners Protection Act, the lender can require:
                </p>
                <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                  <li>A good payment history (current on all payments)</li>
                  <li>No other liens on the property</li>
                  <li>Possibly an appraisal to verify current value ($400–$600)</li>
                  <li>Written confirmation that the property hasn't declined in value</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            The law says the lender must respond to your request within <strong>30 days</strong> and 
            make a decision. If approved, PMI must be canceled within 45 days of the date you meet 
            the criteria.
          </p>
        </div>
      </section>

      {/* Section 6 - Can You Use Current Market Value (new split) */}
      <section id="section-6" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Can You Use Current Market Value?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">What Most People Miss</p>
                <p className="text-sm text-muted-foreground">
                  If your home has gone up in value, you might already be eligible. The{' '}
                  <a 
                    href="https://www.consumerfinance.gov/about-us/blog/how-to-cancel-pmi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    CFPB's guide on canceling PMI
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  explains that <strong>current market value</strong>—not just your original purchase price—can 
                  be used to calculate your loan-to-value ratio.
                </p>
              </div>
            </div>
          </div>

          <p>
            This is a game-changer for anyone who bought in 2020–2022 and has seen significant appreciation. 
            Even if you've barely paid down principal, a $50,000 increase in home value might push your LTV 
            below 80% all by itself.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 my-6">
            <h3 className="font-semibold text-foreground mb-4">How Appreciation Changes Your LTV</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-muted-foreground mb-2">At Purchase</div>
                <div className="relative h-6 bg-red-100 dark:bg-red-950/30 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-red-700 dark:text-red-300">
                    95% LTV — PMI Required
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$285k loan</span>
                  <span>$300k home</span>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">After Appreciation</div>
                <div className="relative h-6 bg-green-100 dark:bg-green-950/30 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-green-700 dark:text-green-300">
                    77% LTV — PMI Canceled!
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$285k loan</span>
                  <span>$370k home</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Appraisal Shortcut (renumbered) */}
      <section id="section-7" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. The Appraisal Shortcut</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            This is exactly what Marcus and Elena did. Their $300,000 home was now worth $370,000. Suddenly 
            their 5% down payment didn't matter—the market had built their equity for them.
          </p>

          <p>
            The rules for market-appreciation cancellation:
          </p>

          <div className="space-y-3 my-4">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Loan is 2-5 years old:</strong> You need 75% LTV for market-appreciation cancellation</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Loan over 5 years:</strong> 80% LTV applies</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Cost:</strong> A new appraisal runs $400–$600</span>
            </p>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-5">
            <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
              💡 That appraisal fee pays for itself in under two months if it eliminates $300/month in PMI.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 - What If Lender Says No (renumbered) */}
      <section id="section-8" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">8. What If Your Lender Says No?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            This happens. Sometimes a lender "loses" your request or claims you haven't met the criteria.
            Don't just accept it.
          </p>
          <div className="bg-card border-2 border-red-200 dark:border-red-800/50 rounded-xl p-6 my-6">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-6 h-6 text-red-500" />
              <h3 className="font-semibold text-foreground">Your Enforcement Path</h3>
            </div>
            <p className="text-muted-foreground">
              You can file a complaint with the{' '}
              <a 
                href="https://www.consumerfinance.gov/complaint/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Consumer Financial Protection Bureau (CFPB)
                <ExternalLink className="w-3 h-3" />
              </a>
              . The Homeowners Protection Act gives them enforcement authority. A CFPB complaint often gets 
              results surprisingly fast.
            </p>
          </div>
          <p>
            Make sure you have documentation: a copy of your amortization schedule, recent appraisal, and 
            any correspondence with your lender. Keeping a paper trail from day one is strongly recommended.
          </p>
        </div>
      </section>

      {/* Section 9 - Faster Paths (renumbered) */}
      <section id="section-9" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">9. Faster Paths to PMI Freedom</h2>
        <div className="space-y-4">
          {[
            { title: "Extra principal payments", desc: "Even $100/month can shave years off your PMI duration. Use our calculator to see the impact." },
            { title: "Home improvements that increase value", desc: "A kitchen remodel or bathroom update might push your equity over the 20% threshold." },
            { title: "Refinancing", desc: "If rates are favorable and your equity is solid, refinancing eliminates PMI entirely with a new loan." },
            { title: "The 80-10-10 piggyback loan", desc: "Split into a first mortgage (80%), second mortgage (10%), and down payment (10%) to avoid PMI from day one." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 10 - Calculator (renumbered) */}
      <section id="section-10" className="mb-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mb-4">10. The Calculator Tells the Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Our Mortgage Calculator shows you exactly when your PMI will end. Open the amortization table, 
            find the month your balance drops below 78%, and circle that date on your calendar.
          </p>
          <p>
            Then try adding <strong>$100/month</strong> in extra principal and watch that date jump forward—sometimes by years.
          </p>

          <div className="bg-gradient-to-br from-primary/5 via-primary/[0.02] to-background border-2 border-primary/20 rounded-xl p-8 text-center mt-8">
            <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Find Your PMI End Date</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Enter your loan details and see exactly when you'll hit 80% and 78% LTV—and how much 
              a few extra dollars per month can accelerate it.
            </p>
            <Link 
              to="/calculator" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Try the Calculator
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
            <Link to="/blog/amortization-schedule" className="text-primary hover:underline flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              Amortization Schedule
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
