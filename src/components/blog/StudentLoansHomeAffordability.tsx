import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ExternalLink, FileText, Calculator, AlertTriangle, Info } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';
import RelatedPosts from './RelatedPosts';
import { AffiliateDisclosure } from './BlogComponents';
import { SMARTCREDIT } from '@/src/data/affiliate-offers';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function StudentLoansHomeAffordability() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="How Student Loans Affect How Much House You Can Afford"
        description="A $400 student loan payment can shrink your mortgage by about $63,000. Here is how lenders count student loans in your debt-to-income ratio, the exact math, and how to qualify for more house."
        datePublished="2026-11-12"
        dateModified="2026-11-12"
        url="https://www.mortgagepro.io/blog/student-loans-home-affordability"
        faqs={[
          { q: 'How much does a $400 student loan payment reduce my mortgage approval?', a: 'At a 6.5% rate on a 30-year loan, about $63,000 of loan amount. Every $100 of monthly payment buys roughly $15,800 of loan at that rate. Measured in purchase price, with taxes, insurance and PMI included, the drop is closer to $50,000-$55,000.' },
          { q: 'Do student loans count in my debt-to-income ratio?', a: 'Yes. Lenders count the qualifying monthly payment, not the balance. That is the payment shown on your credit report, the documented payment on an income-driven plan (including a verified $0), or a calculated payment when the loans are deferred or in forbearance.' },
          { q: 'Can I buy a house with student loans in forbearance?', a: 'Yes, but expect the lender to count a payment you are not currently making. Under Fannie Mae guidelines, a deferred or forbearance loan with no payment on the credit report can be qualified at 1% of the outstanding balance, or at a fully amortizing payment based on the documented repayment terms.' },
          { q: 'Will paying off my student loans let me afford more house?', a: 'It can, once the $0 balance reaches your credit reports. But paying off a $25,000 loan to free up $200 a month may cost more than the buying power it adds. Compare that cash against putting it toward the down payment or reserves before you decide.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>November 12, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How Student Loans Affect How Much House You Can Afford
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Mark makes $85,000 a year as an engineer. He had been saving for a down payment since his rent
          went up two years ago, and last month he finally walked into a lender's office with a number in
          his head: $350,000.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          The lender ran his file and came back with about $280,000.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          "My rent is $2,200 a month," he told me afterward. "How does a bank decide I can't afford this
          house when I'm already paying that?"
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          The rent isn't the problem. The $400 he sends his student loan servicer every month is.
        </p>
      </div>

      <AffiliateDisclosure />

      {/* Table of Contents */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          What's in This Article
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            ['the-story', 'The $280,000 Answer'],
            ['why-it-counts', 'One Payment, Two Places in the Math'],
            ['how-lenders-count', 'How Lenders Count the Student Loan Payment'],
            ['the-math', 'The Math: What $400 a Month Actually Costs'],
            ['the-ceiling', 'The Ceiling Matters as Much as the Debt'],
            ['improve', 'How to Improve Your Mortgage Readiness'],
            ['credit-score', 'Does Your Credit Score Change the Rate?'],
            ['check-credit', 'Check Your Credit Before You Apply'],
            ['bottom-line', 'The Bottom Line'],
            ['sources', 'Sources'],
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

      {/* 1. The story */}
      <section id="the-story" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The $280,000 Answer</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Mark's file was not weak. He makes good money, his credit is fine, and he had real cash saved.
          What he didn't have was room.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here is the arithmetic his lender ran. Gross monthly income: <strong>$7,083</strong>. A 36%
          back-end debt ceiling: <strong>$2,550</strong>. Subtract the <strong>$400</strong> student loan,
          and $2,150 is left for everything a mortgage payment includes — principal, interest, property
          taxes, homeowners insurance, and PMI if he puts less than 20% down.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          At 6.5% with 10% down and typical taxes and insurance, $2,150 a month buys a house in the
          $275,000 to $280,000 range. Not $350,000.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          None of that math is personal. It's the same subtraction for every buyer carrying student debt,
          and it's why two people with identical salaries can walk out of the same office with
          pre-approvals $70,000 apart.
        </p>
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-700 dark:text-red-200 leading-relaxed">
              <p className="font-semibold text-red-800 dark:text-red-300 mb-1">The part buyers miss</p>
              <p>
                A lender never compares your mortgage payment to your rent. It compares your mortgage
                payment <em>plus every other debt you carry</em> to your gross income. Your rent history
                proves you can handle a housing payment. It says nothing about the student loan that is
                already competing with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why it counts */}
      <section id="why-it-counts" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          One Payment, Two Places in the Math
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Lenders judge affordability with a debt-to-income ratio, or DTI. The{' '}
          <a
            href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-2"
          >
            CFPB defines it
          </a>{' '}
          as all your monthly debt payments divided by your gross monthly income — the money you earn
          before taxes and deductions.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          There are two versions of the number. The front-end ratio counts housing only. The back-end
          ratio counts housing plus every other monthly obligation a lender can see: car loans, credit
          cards, personal loans, child support, and student loans. The back-end number is the one that
          usually decides your file.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The 28/36 rule you see everywhere is a budgeting guideline, not a legal limit. Real caps depend
          on the loan program and how the file is underwritten. Fannie Mae's guide sets 36% as the
          starting point for manually underwritten loans, allows up to 45% with strong credit and
          reserves, and lets its automated system approve up to 50%. FHA and VA have their own limits and
          their own rules for counting the student loan payment.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That difference is enormous for someone in Mark's position. Here is what each ceiling does with
          his $85,000 income and the same $400 student loan:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  DTI ceiling
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  Left for housing
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  Approx. purchase price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-3 font-semibold text-red-600 dark:text-red-400">36%</td>
                <td className="py-3 px-3 text-muted-foreground">$2,150</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $275,000</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 font-semibold text-amber-600 dark:text-amber-400">43%</td>
                <td className="py-3 px-3 text-muted-foreground">$2,646</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $345,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-3 font-semibold text-emerald-600 dark:text-emerald-400">45%</td>
                <td className="py-3 px-3 text-muted-foreground">$2,788</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $365,000</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 font-semibold text-emerald-600 dark:text-emerald-400">50%</td>
                <td className="py-3 px-3 text-muted-foreground">$3,142</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $415,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Assumes $85,000 gross income, a $400 student loan payment, 10% down, a 6.5% rate, 0.9% property
          tax, $2,258 a year in insurance, and 0.85% annual PMI. Figures rounded to the nearest $5,000.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Run the same inputs through our{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
            Affordability Calculator
          </Link>{' '}
          and it will land near $250,000 — below every row in that table. That is deliberate. The
          calculator applies the 28% front-end guideline as well as the 36% back-end cap, so it errs
          toward a payment you can actually live with. Use it as a shopping floor, not as a prediction of
          what a lender will approve.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
                The balance is not the problem
              </p>
              <p>
                Lenders qualify the monthly payment, not what you owe. A $60,000 loan on a $250 payment
                hurts less than a $15,000 loan on a $350 payment. That is why two borrowers with very
                different student debt can end up with very different pre-approvals — and why the
                repayment plan you choose matters as much as the balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How lenders count */}
      <section id="how-lenders-count" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          How Lenders Count the Student Loan Payment
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          There is no single national formula. Each loan program publishes its own instructions, and the
          underwriter in front of you has to follow the one that matches your loan. In practice, your
          payment falls into one of three buckets.
        </p>
        <div className="space-y-4 my-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-semibold text-foreground mb-2">1. The payment on your credit report</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If your report shows a monthly payment, that is usually what the lender uses.
              Straightforward, and the most common outcome.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-semibold text-foreground mb-2">2. An income-driven repayment plan</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you are on an IDR plan, the amount you actually owe can be much lower than a standard
              ten-year payment. Fannie Mae's guidelines let a lender use your documented payment —
              including a verified $0 — rather than inventing one. The keyword is <em>documented</em>. A
              screenshot of your servicer's app will not survive underwriting; you need the plan
              confirmation or a statement that states the payment amount.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <p className="font-semibold text-foreground mb-2">3. Deferment or forbearance</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is where people get blindsided. If your loans are paused and the report shows no
              payment, Fannie Mae allows the lender to qualify you at <strong>1% of the outstanding
              balance</strong>, or at a fully amortizing payment based on your documented repayment terms.
              On $40,000 of loans, that is $400 a month on paper while you are paying nothing.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The 1% rule is easy to underestimate. Here is what it produces at different balances:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  Outstanding balance
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  Counted monthly payment
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  Loan it displaces at 6.5%
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-3 text-muted-foreground">$20,000</td>
                <td className="py-3 px-3 font-semibold text-foreground">$200</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $31,600</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 text-muted-foreground">$35,000</td>
                <td className="py-3 px-3 font-semibold text-foreground">$350</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $55,400</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-3 text-muted-foreground">$50,000</td>
                <td className="py-3 px-3 font-semibold text-foreground">$500</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $79,100</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 text-muted-foreground">$80,000</td>
                <td className="py-3 px-3 font-semibold text-foreground">$800</td>
                <td className="py-3 px-3 text-muted-foreground">≈ $126,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          The last column is what the same monthly payment would support as mortgage principal on a
          30-year loan at 6.5%, before taxes, insurance and PMI.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Two details are worth writing down. First, the formulas are not identical across programs. FHA
          and VA each have their own way of treating deferred student loans, so the same balance can
          produce a different qualifying payment depending on the loan type. Second, the payment in the
          file is the payment at closing. If your IDR payment is about to recertify upward, expect the
          underwriter to look at the new amount, not the old one.
        </p>
      </section>

      {/* 4. The math */}
      <section id="the-math" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The Math: What $400 a Month Actually Costs
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          To see the student loan's price tag clearly, strip the payment down to principal and interest.
          Taxes, insurance and PMI matter, but they muddy the comparison. Here is Mark's income with and
          without the $400:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">
                  &nbsp;
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">
                  With student loan
                </th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-right">
                  Without
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-3 text-muted-foreground">Gross monthly income</td>
                <td className="py-3 px-3 text-right text-foreground">$7,083</td>
                <td className="py-3 px-3 text-right text-foreground">$7,083</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 text-muted-foreground">Allowed at 36% back-end DTI</td>
                <td className="py-3 px-3 text-right text-foreground">$2,550</td>
                <td className="py-3 px-3 text-right text-foreground">$2,550</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-3 text-muted-foreground">Student loan payment</td>
                <td className="py-3 px-3 text-right text-red-600 dark:text-red-400">−$400</td>
                <td className="py-3 px-3 text-right text-muted-foreground">$0</td>
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="py-3 px-3 text-muted-foreground">Left for principal and interest</td>
                <td className="py-3 px-3 text-right font-semibold text-foreground">$2,150</td>
                <td className="py-3 px-3 text-right font-semibold text-foreground">$2,550</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-3 text-muted-foreground">Loan supported at 6.5%, 30 years</td>
                <td className="py-3 px-3 text-right text-foreground">≈ $340,000</td>
                <td className="py-3 px-3 text-right text-foreground">≈ $403,000</td>
              </tr>
              <tr className="border-b border-border bg-red-50/50 dark:bg-red-950/20">
                <td className="py-3 px-3 font-semibold text-foreground">Borrowing power lost</td>
                <td className="py-3 px-3 text-right font-bold text-red-600 dark:text-red-400" colSpan={2}>
                  ≈ $63,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          One $400 payment wiped out about $63,000 of loan amount. The rule of thumb is worth memorizing:{' '}
          <strong>every $100 a month of debt costs roughly $15,800 of borrowing power</strong> at 6.5% on a
          30-year term. A $250 car payment costs about $39,500. A $450 payment costs about $71,000.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The P&amp;I-only version is the honest way to isolate the debt, but it is not the number a lender
          will quote you. Property taxes, insurance and PMI come out of the same $2,150. At the full
          payment, Mark's budget supports a purchase price closer to $275,000; without the student loan it
          is around $330,000. Measured in house, the $400 costs about $55,000 — a little less than
          $63,000, because taxes, insurance and PMI shrink as the price falls.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Either way, the conclusion is the same. The student loan is not a rounding error in your
          pre-approval. It is one of the largest line items in it.
        </p>
      </section>

      {/* 5. The ceiling */}
      <section id="the-ceiling" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          The Ceiling Matters as Much as the Debt
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Mark wanted $350,000 with 10% down, which means a $315,000 loan. At 6.5%, the whole payment
          comes to about <strong>$2,665</strong> a month: $1,991 of principal and interest, $263 of
          property tax, $188 of insurance, and $223 of PMI. That is 37.6% of his gross income.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          At a 36% ceiling, his maximum was $2,550. He was $115 a month short <em>even if the student loan
          disappeared</em>. At 45%, the ceiling is $3,188; subtract the $400 and $2,788 remains — enough to
          cover $2,665 with about $120 to spare.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Same income. Same debt. Two different answers, depending on which underwriting path the lender
          used. That is not a loophole; it is how the guidelines work. The DTI ceiling lives inside the
          loan program, and programs differ. Fannie Mae's automated system can approve up to 50% when the
          rest of the file supports it. FHA has its own limits and its own compensating factors. A broker
          who can submit your file to several lenders is often worth more than the lowest advertised rate.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          So when you talk to a lender, ask a specific question: <em>what DTI will your automated approval
          allow on this file, and what would you need from me to get there?</em> That one question tells
          you whether you are looking at a 36% lender or a 50% one before you fall in love with a house.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <p className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                An approval is not a budget
              </p>
              <p>
                A 45% DTI approval means 45 cents of every gross dollar is committed before taxes,
                retirement contributions, groceries, or childcare. After withholding, Mark's take-home pay
                is roughly $5,300 a month depending on his state; a $2,665 payment would eat half of it.
                Use the lender's maximum as a ceiling for negotiation, not as a target.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Improve readiness */}
      <section id="improve" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          How to Improve Your Mortgage Readiness
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You can't make the loans disappear overnight. You can control what the lender counts, how much
          other debt you carry, which program you apply under, and how clean your credit file is. Those
          four levers are worth far more than a slightly better advertised rate.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Start with the servicer, not the lender
        </h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before you apply, request three things from your student loan servicer: your most recent
          statement, a payment schedule or IDR confirmation that states the exact monthly amount (including
          $0), and the name of the repayment plan you are on. Save them as PDFs. A $0 payment with
          paperwork is an asset on your application. A $0 payment without paperwork usually turns into 1%
          of the balance.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Retire the debt that moves the needle fastest
        </h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Paying off a car loan, a personal loan, or a credit card balance removes its payment from your
          DTI entirely, and the arithmetic is generous: $100 a month is worth about $15,800 of borrowing
          power. If you have $3,000 left on a car loan with a $250 payment, clearing it adds roughly
          $39,500 of loan capacity — often more than a year of saving for a bigger down payment.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Keep an emergency fund and enough cash for closing costs. Lenders verify reserves, and at higher
          DTIs those reserves become part of what makes the approval work.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Ask which underwriting path you are on
        </h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Two lenders can run the same file through different systems and reach different conclusions.
          Ask each one what DTI their approval allowed and what would move it. Get two or three quotes, and
          don't treat the first pre-approval as the final word on your budget.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Compare programs, not just rates
        </h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          FHA, VA, and conventional loans count student loan payments differently, and their mortgage
          insurance works differently too. FHA's mortgage insurance premium adds to the monthly payment,
          which can offset the DTI room it gives you. Conventional PMI cancels once you have enough
          equity. Run your numbers under both before you decide.{' '}
          <Link to="/blog/fha-vs-conventional" className="text-primary hover:underline font-medium">
            Our FHA vs conventional comparison
          </Link>{' '}
          walks through the trade-off.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
          Don't add debt before closing
        </h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A $450 car payment costs about $71,000 of borrowing power. That is why financing a car, opening
          a store card for the new furniture, or co-signing a relative's loan between pre-approval and
          closing can unravel an approval. Underwriters commonly re-pull credit before closing, and
          they count co-signed debt whether or not you make the payments.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <p className="font-semibold text-amber-900 dark:text-amber-300 mb-1">
                If you pay a loan off before closing
              </p>
              <p>
                Do it early enough for the credit report to update, keep the payoff letter, and use money
                you were not counting on for the down payment. A loan that is paid off but still reporting
                a balance can keep the payment in your DTI — and draining your reserves to clear it can
                create a different problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Credit score and rate */}
      <section id="credit-score" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Does Your Credit Score Change the Rate?
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Yes — but not in a straight line, and not by a fixed number of dollars per point. Your rate is
          priced on score tiers, loan-to-value, down payment, loan type, and what the market is doing that
          week. Two lenders can quote the same borrower differently.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          What is consistent is the direction and the size of the steps. On a $400,000 loan, the gap
          between a 760 score and a 640 score can be roughly a full percentage point — about{' '}
          <strong>$270 a month</strong> at today's spreads, or roughly $96,000 over 30 years. That is not a
          rounding error. That is a second student loan.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Rate and DTI also feed each other. At 7.5% instead of 6.5%, the same $2,150 payment supports
          about $307,000 of loan instead of $340,000. A worse rate costs you borrowing power twice: once in
          the monthly payment and once in the price you can reach.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That is why the order of operations matters. Review your score and your reports first, fix what
          is wrong, then get quotes. Our guide to{' '}
          <Link to="/blog/credit-score-needed" className="text-primary hover:underline font-medium">
            the credit score you need to buy a house
          </Link>{' '}
          covers the tiers and what each one costs.
        </p>
      </section>

      {/* 8. Check credit */}
      <section id="check-credit" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Check Your Credit Before You Apply
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Before a lender pulls your file, pull it yourself. You can get free reports from all three
          nationwide bureaus at{' '}
          <a
            href="https://www.annualcreditreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-2"
          >
            AnnualCreditReport.com
          </a>
          , the official site set up for that purpose. Access has been free weekly in recent years, so
          there is no reason to pay for a report just to review it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Look for four things: a student loan balance or payment that does not match your servicer's
          records, accounts you do not recognize, duplicate collections for the same debt, and late
          payments that are not yours. The first one matters most here. If a servicer reports a $600
          payment when your IDR payment is $150, your DTI is already wrong before underwriting starts.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Dispute errors with the bureau in writing and, for student loans, with the servicer as well. Give
          yourself 60 to 90 days. Corrections are not instant, and a mortgage application is the wrong
          moment to discover a problem.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you want ongoing monitoring and extra tools to track your score and catch reporting errors
          between now and closing, a service like{' '}
          <a href={SMARTCREDIT.url} target="_blank" rel={SMARTCREDIT.rel} className="text-primary hover:underline">
            SmartCredit
          </a>{' '}
          may be worth considering. The goal is simple: understand your profile before a lender reviews it,
          fix genuine errors, and give yourself time to do it.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Disclosure: we may earn a commission if you sign up through links on this page, at no additional
          cost to you. We only recommend tools we believe are useful for homebuyers. Pricing and terms are
          set by the provider, so confirm them on their site.
        </p>
      </section>

      {/* 9. Bottom line */}
      <section id="bottom-line" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Bottom Line</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Student loans are a subtraction, not a disqualification. Mark's problem wasn't that he had debt.
          It was that nobody explained how the debt would be counted, so he walked into a lender's office
          with a $350,000 number and no idea what had to be true for it to work.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">The order that actually helps:</p>
        <ul className="space-y-3 my-5 text-lg leading-relaxed text-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">1.</span>
            <span>
              Get your servicer's documentation first, including the payment amount on an income-driven
              plan. What the underwriter counts is decided by paperwork, not by what you know to be true.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">2.</span>
            <span>
              Clear the debt you can clear, starting with the payment that buys the most DTI room per
              dollar. Every $100 a month is worth about $15,800 of loan at 6.5%.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">3.</span>
            <span>
              Ask which underwriting path each lender uses, and get more than one quote. The same file can
              be a no at 36% and a yes at 45%.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold shrink-0">4.</span>
            <span>
              Clean up your credit reports before anyone pulls them. A misreported student loan payment
              can cost you tens of thousands in buying power, and it takes weeks to fix.
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then run your own numbers before someone runs them for you. Our{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">
            Affordability Calculator
          </Link>{' '}
          applies the 28/36 rule and includes taxes, insurance and PMI, so it will land below a lender's
          ceiling. Start there, then use the gap to decide what to work on. If you want the DTI mechanics in
          more detail, our{' '}
          <Link to="/blog/debt-to-income-ratio" className="text-primary hover:underline font-medium">
            debt-to-income guide
          </Link>{' '}
          goes deeper.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">
            See what your debt actually costs you
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto text-sm">
            Enter your income, then move the debt slider. The difference between $0 and $400 a month is the
            number most buyers never see until the pre-approval comes back lower than they expected.
          </p>
          <Link
            to="/affordability-calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Calculator className="w-4 h-4" />
            Open the Affordability Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section id="sources" className="mb-12">
        <div className="bg-muted/40 border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Sources
          </h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            These are the official guidelines and definitions referenced in this article. Worth reading if
            you want to check the rules yourself before you talk to a lender.
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Consumer Financial Protection Bureau (CFPB)</strong> — how debt-to-income ratios
                  are calculated, with a worked example.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://selling-guide.fanniemae.com/sel/b3-6-05/monthly-debt-obligations"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Fannie Mae Selling Guide B3-6-05</strong> — monthly debt obligations, including
                  the student loan rules for income-driven plans, deferment and forbearance.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Fannie Mae Selling Guide B3-6-02</strong> — maximum debt-to-income ratios for
                  manually underwritten loans and automated approvals.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://studentaid.gov/manage-loans/repayment/plans/income-driven"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Federal Student Aid</strong> — income-driven repayment plans, how the monthly
                  payment is set, and how to document it.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.annualcreditreport.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>AnnualCreditReport.com</strong> — the official site for free credit reports from
                  the three nationwide bureaus.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/debt-to-income-ratio" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">What Is a Good Debt-to-Income Ratio?</div>
          </Link>
          <Link to="/blog/income-needed" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Income Needed for a $500,000 House</div>
          </Link>
          <Link to="/blog/credit-score-needed" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">What Credit Score Do You Need?</div>
          </Link>
          <Link to="/affordability-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Affordability Calculator</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />

      {/* Curated topical links between posts - see RelatedPosts.tsx */}
      <RelatedPosts />

    </article>
  );
}
