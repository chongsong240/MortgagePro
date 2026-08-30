import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, PieChart, BookOpen, Calculator, AlertTriangle, TrendingUp, Home, Clock, BarChart3, Shield } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';
import { AffiliateDisclosure } from './BlogComponents';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ArmVsFixedArm() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="ARM vs Fixed Mortgage: Which One Makes Sense Right Now?"
        description="My friend Dave had two loan estimates on the same house. His agent told him fixed. His brother-in-law said ARM. Here's how he decided in five minutes."
        datePublished="2026-07-20"
        url="https://www.mortgagepro.io/blog/arm-vs-fixed-arm"
        faqs={[
          { q: 'What is the difference between an ARM and a fixed-rate mortgage?', a: 'A fixed-rate mortgage locks in your interest rate for the entire loan term (usually 30 or 15 years). An adjustable-rate mortgage (ARM) has a lower rate locked in for an initial period (5, 7, or 10 years), then the rate can adjust once per year based on market conditions.' },
          { q: 'When does an ARM make sense?', a: 'An ARM makes sense when you plan to sell, move, or refinance before the initial fixed period ends. If you are staying in the house for 5 years or less, a 5/1 ARM at a lower rate can save you thousands without ever exposing you to an adjustment.' },
          { q: 'What happens to an ARM after the fixed period?', a: 'After the fixed period ends, the ARM adjusts once per year based on a benchmark index (like SOFR) plus a margin set by your lender. Rate caps limit how much it can change each year and over the life of the loan. You never wake up to a rate that has doubled overnight.' },
          { q: 'Is an ARM riskier than a fixed-rate mortgage?', a: 'ARMs carry more uncertainty after the initial period, but built-in rate caps limit how high your rate can go. For buyers who plan to move before the adjustment period, the risk is mostly theoretical. For long-term homeowners, a fixed rate eliminates the uncertainty entirely.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 rounded-full px-3 py-1 font-medium text-xs">
            Comparisons
          </span>
          <span>July 20, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          ARM vs Fixed Mortgage: Which One Makes Sense Right Now?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My friend Dave had two loan estimates on the same house. His agent told him to take the fixed rate. 
          His brother-in-law told him to take the ARM. Dave just wanted to know which one was right for him — 
          not for his agent, not for his brother-in-law. For Dave.
        </p>
      </div>

      <AffiliateDisclosure />

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          What's in This Article
        </h2>
        <nav className="space-y-2">
          {[
            { id: 'two-loans', label: 'The Two Loans, in Plain English' },
            { id: 'daves-numbers', label: "What Dave's Numbers Actually Looked Like" },
            { id: 'after-year-5', label: 'What Happens After Year 5?' },
            { id: 'one-question', label: 'The One Question That Cuts Through Everything' },
            { id: 'when-each', label: 'When Each Loan Makes Sense' },
            { id: 'first-time', label: 'For First-Time Buyers Specifically' },
            { id: 'backup-plan', label: 'The Thing Nobody Asks About' },
            { id: 'how-to-decide', label: 'How to Decide' },
            { id: 'short-version', label: 'The Short Version' },
          ].map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="w-3 h-3" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Section 1 */}
      <section id="two-loans" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">The Two Loans, in Plain English</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          A <strong>fixed-rate mortgage</strong> is exactly what it sounds like. Your rate never changes. 
          If you get a 30-year fixed at 6.5%, you'll pay 6.5% every month for 30 years, unless you refinance. 
          Your payment is the same in year 25 as it is in year 1. That predictability is why fixed loans dominate the market.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          An <strong>adjustable-rate mortgage</strong>, or ARM, starts with a lower rate that's locked in for a set 
          number of years — usually 5, 7, or 10. After that initial period, the rate can change once a year based on 
          whatever interest rates are doing at the time.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          The most common ARM is a <strong>5/1</strong>. The "5" means five years of a fixed rate. The "1" means 
          the rate adjusts every one year after that. There are also 7/1 and 10/1 ARMs, which lock your rate for 
          seven or ten years before the first adjustment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Why would anyone take the risk of an adjustable rate? Because in exchange for that uncertainty, you get a 
          lower rate upfront. Sometimes significantly lower. That lower rate translates directly into a lower monthly 
          payment for those first few years.
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          If you want to dig deeper into the long-term math between different loan terms, our detailed comparison of{' '}
          <Link to="/blog/30-vs-15-year" className="text-primary hover:underline font-medium">
            30-year vs 15-year mortgages
          </Link>{' '}
          lays out which one saves you more and why.
        </p>
      </section>

      {/* Section 2 */}
      <section id="daves-numbers" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What Dave's Numbers Actually Looked Like</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Dave was buying a $450,000 house with 20% down. His loan amount was $360,000. Here's what his two 
          offers looked like side by side.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground"></th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">30-Year Fixed</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">5/1 ARM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-muted-foreground">Initial Rate</td>
                <td className="text-right py-3 px-4 font-medium">6.5%</td>
                <td className="text-right py-3 px-4 font-medium">5.875%</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-muted-foreground">Monthly Payment (P&I)</td>
                <td className="text-right py-3 px-4 font-medium">$2,276</td>
                <td className="text-right py-3 px-4 font-medium">$2,130</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 text-muted-foreground">Monthly Savings</td>
                <td className="text-right py-3 px-4 text-muted-foreground">—</td>
                <td className="text-right py-3 px-4 font-medium text-emerald-600">$146</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-muted-foreground">Savings Over First 5 Years</td>
                <td className="text-right py-3 px-4 text-muted-foreground">—</td>
                <td className="text-right py-3 px-4 font-medium text-emerald-600">~$8,760</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          $146 a month isn't life-changing, but it's real money. Over the first five years, Dave would save nearly 
          $9,000 by going with the ARM. That's a nice vacation. A chunk of a college fund. A very good reason to at 
          least consider the ARM. But that's only half the story.
        </p>
      </section>

      {/* Section 3 */}
      <section id="after-year-5" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What Happens After Year 5?</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          When the fixed period ends, the ARM starts adjusting. The new rate is calculated by taking a benchmark 
          index — like the Secured Overnight Financing Rate (SOFR) — and adding a margin set by your lender. If 
          the index has gone up, your rate goes up. If it's gone down, your rate goes down.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          This is where people get nervous, and it's where the loan's caps come in. ARMs have built-in protections 
          that limit how much your rate can change:
        </p>
        <ul className="space-y-3 mb-4 pl-5">
          <li className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Initial adjustment cap:</strong> The first time your rate adjusts, 
            it usually can't jump more than 2% to 5% above your starting rate, depending on the loan terms.
          </li>
          <li className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Periodic cap:</strong> After that, each yearly adjustment is 
            capped — typically 1% to 2% per year.
          </li>
          <li className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Lifetime cap:</strong> Your rate can never go above a certain 
            maximum over the life of the loan, often 5% above your initial rate.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          So for Dave's 5/1 ARM at 5.875%, the worst-case scenario isn't infinite. Even if rates soared, his rate 
          couldn't jump past around 10.875% — painful, yes, but not unlimited. And he'd have time to react. For a 
          deeper dive into how today's rates compare, try our{' '}
          <Link to="/arm-vs-fixed-calculator" className="text-primary hover:underline font-medium">
            ARM vs Fixed Calculator
          </Link>{' '}
          and see the side-by-side numbers for your own loan amount.
        </p>
      </section>

      {/* The Big Question */}
      <section id="one-question" className="mb-10">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">The One Question That Cuts Through Everything</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            When I asked Dave how long he planned to stay in the house, he didn't hesitate. "Five or six years, 
            probably. We're thinking about another kid, and this place only has two bedrooms. We'll need to upgrade 
            at some point."
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            There it was. The answer was sitting in that sentence.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            If you plan to sell, move, or refinance before the ARM's fixed period ends, the adjustable part of the 
            ARM never applies to you. You only experience the lower rate. The risk you're theoretically taking on 
            never actually materializes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            For Dave, a 5/1 ARM with plans to move in five or six years was almost perfect. He'd save roughly 
            $8,700 in lower payments during the fixed period, and he'd be selling right around when the rate 
            could start adjusting. Worst case, if plans changed and he stayed a little longer, the caps would 
            protect him from a catastrophic spike.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            If Dave planned to stay in the house for 20 years, I would have told him to take the fixed rate. 
            The certainty of a locked-in payment over decades is worth the premium. But that wasn't his situation.
          </p>
        </div>
      </section>

      {/* When Each Makes Sense */}
      <section id="when-each" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">When Each Loan Makes Sense</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          You're probably better off with a <strong>fixed-rate mortgage</strong> if this is your long-term home. 
          You're not moving anytime soon. You value predictability more than you value a few hundred dollars a 
          month in savings. You'd rather pay a premium for peace of mind than lie awake wondering what rates will do.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          You might want to look at an <strong>ARM</strong> if you're pretty sure you'll move, sell, or refinance 
          before the initial fixed period ends. Your income is likely to increase over the next few years, making a 
          potential rate adjustment less scary. Or you need the lower initial payment to get into a home and are 
          willing to accept some future uncertainty in exchange.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Neither is the "smart" option in a vacuum. The smart option is the one that matches your actual timeline. 
          Use our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">
            Mortgage Calculator
          </Link>{' '}
          to run your own numbers and see how different rates affect your monthly payment and total interest.
        </p>
      </section>

      {/* For First-Time Buyers */}
      <section id="first-time" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">For First-Time Buyers Specifically</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Buying your first home is already overwhelming. There are a dozen things to worry about. For most 
          first-timers, a fixed-rate mortgage eliminates one major source of uncertainty. You know your payment. 
          You know it won't change. That's valuable.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          But if you're a first-timer buying a starter home — and you're honest with yourself about upgrading in 
          five or seven years — an ARM deserves a serious look. The savings during those years are real, and if 
          you move before the adjustment, the risk was theoretical.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          And if you're trying to decide between a 30-year and a 15-year fixed instead, our{' '}
          <Link to="/blog/30-vs-15-year" className="text-primary hover:underline font-medium">
            comparison guide for 30-year vs 15-year mortgages
          </Link>{' '}
          breaks down the tradeoffs in plain numbers.
        </p>
      </section>

      {/* The Thing Nobody Asks */}
      <section id="backup-plan" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">The Thing Nobody Asks About</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Here's a scenario that doesn't get enough attention, and it's the one I've seen trip people up: 
          you're in a 5/1 ARM with a plan to move in five years. Life happens. You don't move. Suddenly 
          you're in year 6, the rate is adjusting, and you weren't prepared for it.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          If you're taking an ARM, have a backup plan. Know what you'll do if you end up staying longer than 
          expected. Maybe that means refinancing into a fixed loan before the adjustment hits. Maybe it means 
          having enough savings to absorb a higher payment for a while. Don't just assume everything will go 
          according to plan. Assume it won't, and have a response ready.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          That's exactly what our{' '}
          <Link to="/arm-vs-fixed-calculator" className="text-primary hover:underline font-medium">
            ARM vs Fixed Calculator
          </Link>{' '}
          helps with — you can run different adjustment scenarios and see what happens to your payment if rates 
          go up, down, or stay the same.
        </p>
      </section>

      {/* How to Decide */}
      <section id="how-to-decide" className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How to Decide</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Forget the debate about which loan is "better." Instead, answer these three questions honestly.
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">1. How many years do you realistically expect to own this home?</p>
            <p className="text-sm text-muted-foreground">If it's less than the ARM's fixed period, the ARM is probably the smarter financial move.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">2. If rates were higher when the ARM adjusted, could your budget handle it?</p>
            <p className="text-sm text-muted-foreground">If the answer is no, you might want the fixed rate even if it costs more.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">3. How much is certainty worth to you?</p>
            <p className="text-sm text-muted-foreground">Some people happily pay $150 a month for peace of mind. Others save the money and deal with the future when it arrives. Neither is wrong. Know yourself before you sign.</p>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Run both scenarios through our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">
            Mortgage Calculator
          </Link>{' '}
          and see exactly how much the ARM saves you during the fixed period, and what could happen if rates 
          adjust. That side-by-side comparison tends to make the decision a lot clearer than any article ever could.
        </p>
      </section>

      {/* The Short Version */}
      <section id="short-version" className="mb-10">
        <div className="bg-muted/30 border border-border rounded-xl p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Short Version</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            A fixed-rate mortgage is predictable and safe. You pay a premium for that safety. An ARM is cheaper 
            upfront but comes with uncertainty down the road.
          </p>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The right choice depends almost entirely on one question: how long are you going to stay in this house? 
            If the answer is less than the ARM's initial fixed period, the lower rate is probably worth taking. 
            If the answer is "I have no idea" or "a long time," the fixed rate is probably worth the peace of mind.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dave took the ARM. He's saving $146 a month. He told me he barely thinks about it anymore — which is 
            exactly how a mortgage decision should feel once it's made.
          </p>
        </div>
      </section>

      {/* All Calculators */}
      
      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/when-should-you-refinance" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Should You Refinance? The Honest Math</div>
          </Link>
          <Link to="/blog/30-vs-15-year" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">30-Year vs 15-Year Mortgage: Which Is Better?</div>
          </Link>
          <Link to="/arm-vs-fixed-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">ARM vs Fixed Calculator</div>
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
