import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, Shield, Home, DollarSign, AlertTriangle } from 'lucide-react';
import BlogSchema from './BlogSchema';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function FivePercentDown() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Can I Buy a House With 5% Down?"
        description="My brother-in-law Chris had $22,000 saved and was told he needed 20% down. Turned out he could buy with 5%. Here's the real math on low-down-payment mortgages."
        datePublished="2026-06-25"
        url="https://www.mortgagepro.io/blog/can-i-buy-with-5-percent-down"
        faqs={[
          { q: 'Can I buy a house with only 5% down?', a: 'Yes. Conventional loans allow as little as 3-5% down for first-time buyers. With 5% down on a $400,000 home, you need $20,000 plus closing costs (typically $8,000-$16,000). You will pay PMI until you reach 20% equity.' },
          { q: 'How much does PMI cost with 5% down?', a: 'PMI with 5% down typically costs $150-$250/month on a $400,000 home. It can be canceled once you reach 20% equity through a combination of loan paydown and home appreciation.' },
          { q: 'Is it better to wait for 20% down or buy with 5% down?', a: 'It depends. Waiting for 20% means years of rent payments while home prices may rise. Buying with 5% means higher monthly costs but you start building equity immediately. Calculate the total cost of waiting vs buying now.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>June 25, 2026</span>
          <span>·</span>
          <span>11 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Can I Buy a House With 5% Down?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          When my brother-in-law Chris started house hunting last year, he had exactly $22,000 saved. 
          He was looking at houses in the $400,000 range. Do the math—that's about 5.5%. His agent 
          told him he needed 20%. His parents said the same thing. Here's what he found out when he 
          finally talked to someone who actually knew what they were talking about.
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
            ['where-20-comes-from', 'Where the 20% Number Actually Comes From'],
            ['what-5-looks-like', 'What 5% Down Actually Looks Like (Real Numbers)'],
            ['hidden-cost-of-waiting', 'The Hidden Cost of Waiting'],
            ['is-pmi-really-that-bad', 'Is PMI Really That Bad?'],
            ['closing-costs', "Don't Forget About Closing Costs"],
            ['when-5-makes-sense', 'When 5% Down Makes Sense'],
            ['when-to-wait', 'When You Should Probably Wait'],
            ['fha-alternative', 'The FHA Alternative'],
            ['the-real-question', 'The Real Question'],
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

      {/* 1. Where 20% Comes From */}
      <section id="where-20-comes-from" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Where the 20% Number Actually Comes From</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The 20% figure isn't random, and it's not a scam. It comes from one specific rule: if you put 
          down 20% or more on a conventional loan, you don't have to pay Private Mortgage Insurance, or PMI.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          PMI is an insurance policy <em>you</em> pay for but the lender benefits from. If you default, 
          PMI covers the bank's losses. It adds anywhere from $100 to $400 a month to your payment depending 
          on the loan size and your credit.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          A lot of well-meaning people—parents, friends, even some real estate agents—hear "put down 20% or 
          you'll pay PMI" and turn it into "you need 20% to buy a house." They're not the same thing. One is 
          about avoiding an extra monthly cost. The other is about being locked out of homeownership entirely. 
          <strong> You're not locked out.</strong> You just need to understand the tradeoffs.
        </p>
      </section>

      {/* 2. What 5% Looks Like */}
      <section id="what-5-looks-like" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What 5% Down Actually Looks Like (Real Numbers)</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Let's use real numbers. Not abstract percentages. A house that costs $400,000.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground"></th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">20% Down</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">5% Down</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Down Payment</td>
                <td className="text-right py-3 px-4">$80,000</td>
                <td className="text-right py-3 px-4">$20,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Loan Amount</td>
                <td className="text-right py-3 px-4">$320,000</td>
                <td className="text-right py-3 px-4">$380,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Monthly P&I (6.5%, 30-yr)</td>
                <td className="text-right py-3 px-4">$2,023</td>
                <td className="text-right py-3 px-4">$2,402</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">PMI</td>
                <td className="text-right py-3 px-4">$0</td>
                <td className="text-right py-3 px-4">~$200–250/mo</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="py-3 px-4 font-semibold">Total Monthly Payment</td>
                <td className="text-right py-3 px-4 font-semibold text-green-600">Lower</td>
                <td className="text-right py-3 px-4 font-semibold text-amber-600">Higher</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          With 5% down, you're borrowing an extra $60,000. That means a higher monthly principal and interest 
          payment, plus PMI on top. The total difference could be $500 a month or more compared to the 20% down 
          version. That's not nothing. But the alternative—waiting years to save $80,000—has its own costs.
        </p>
      </section>

      {/* 3. Hidden Cost of Waiting */}
      <section id="hidden-cost-of-waiting" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Hidden Cost of Waiting</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Chris did the math on waiting. He needed another $58,000 to hit 20%. Saving $1,500 a 
          month—aggressively—that was over three years of waiting.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Meanwhile, the house he wanted was in a market where prices were rising about 4% a year. That $400,000 
          house would cost about $450,000 by the time he saved the full 20%. His target moved. The down payment 
          goalpost moved with it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          And his rent was going up too. $1,600 a month, increasing 5% a year. Over three years, he'd spend 
          over <strong>$60,000 on rent</strong> while trying to save for a down payment.
        </p>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-center text-lg">
            <strong>The trap:</strong> Waiting for 20% means your target price rises, your down payment target rises, 
            and you're paying rent the whole time. None of this means rush into a bad purchase. But "just wait until 
            you have 20%" is advice that deserves scrutiny. <strong>The cost of waiting isn't zero.</strong>
          </p>
        </div>
      </section>

      {/* 4. Is PMI Really That Bad */}
      <section id="is-pmi-really-that-bad" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Is PMI Really That Bad?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          PMI gets a bad reputation, and some of it is deserved. It's money you pay that doesn't reduce your 
          loan balance or build your equity. It purely protects the bank.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But PMI isn't forever. On a conventional loan, it can be canceled once your equity reaches 20%. That 
          can happen by paying down the balance, by your home appreciating in value, or—most commonly—a 
          combination of both.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Let's say Chris buys at $400,000 with 5% down. His loan is $380,000. If the home appreciates at 3% a 
          year, it'll be worth about $450,000 after five years. His loan balance will be down to around $355,000. 
          His equity is now about $95,000 on a $450,000 home—over 20%. He can request PMI cancellation.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          He paid PMI for roughly five years. At $200 a month, that's $12,000 total. But he also owned a home for 
          five years, built equity, and locked in his housing cost. Whether that $12,000 was "worth it" depends on 
          what would have happened if he'd kept renting and saving. For a full breakdown of how different down 
          payments affect your total costs, check out our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">mortgage calculator</Link>.
        </p>
      </section>

      {/* 5. Closing Costs */}
      <section id="closing-costs" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Don't Forget About Closing Costs</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's the part that catches people off guard. The down payment isn't the only cash you need at the 
          closing table.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Closing costs typically run 2% to 5% of the purchase price. On a $400,000 house, that's $8,000 to 
          $20,000—in addition to your down payment. These cover loan origination fees, the appraisal, title 
          insurance, attorney fees in some states, and prepaid property taxes and insurance.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-4">
          <p className="text-lg">
            <AlertTriangle className="w-5 h-5 inline text-amber-500 mr-2" />
            <strong>So with 5% down on a $400,000 house, you're not just bringing $20,000.</strong> You might need 
            $28,000 to $35,000 in total cash. That's a meaningful difference, and it's why saving beyond the 
            down payment matters.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          Our{' '}
          <Link to="/blog/monthly-payment-breakdown" className="text-primary hover:underline font-medium">PITI breakdown guide</Link>{' '}
          walks through all the costs that make up your true monthly housing payment, including taxes and insurance 
          that might vary based on where you buy.
        </p>
      </section>

      {/* 6. When 5% Makes Sense */}
      <section id="when-5-makes-sense" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When 5% Down Makes Sense</h2>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>Your income is stable and you have cash beyond the down payment for closing costs and emergencies</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>The monthly payment — including PMI — feels genuinely comfortable, not stretched</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>You plan to stay in the home long enough for equity to build</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-blue-600 mt-1">•</span>
              <span>You're a first-time buyer with a solid career but not a huge savings cushion</span>
            </li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          If these fit your situation, 5% down is often the bridge between renting indefinitely and actually 
          owning. If you want to see the income side of this equation, our{' '}
          <Link to="/blog/income-needed" className="text-primary hover:underline font-medium">income guide for home buying</Link>{' '}
          shows you exactly what lenders look for.
        </p>
      </section>

      {/* 7. When to Wait */}
      <section id="when-to-wait" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">When You Should Probably Wait</h2>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You'd be draining every dollar you have just to get to the closing table</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You don't have an emergency fund — one broken appliance becomes a crisis</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>The monthly payment already feels stretched before maintenance and utilities</span>
            </li>
            <li className="flex items-start gap-2 text-foreground">
              <span className="text-amber-600 mt-1">•</span>
              <span>You might move again in a year or two — transaction costs will eat any equity</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground italic">
            In these cases, waiting isn't failure. It's preparation.
          </p>
        </div>
      </section>

      {/* 8. FHA Alternative */}
      <section id="fha-alternative" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The FHA Alternative</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If 5% down on a conventional loan still feels out of reach, FHA loans are worth understanding. They 
          accept credit scores as low as 580 and require as little as 3.5% down.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The catch is the mortgage insurance. On an FHA loan with less than 10% down, the insurance premium 
          lasts for <strong>the entire life of the loan</strong>. You can't cancel it unless you refinance into 
          a conventional loan later. So while FHA makes the entry point lower, it can cost more over the long haul.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          There's no universally right answer between conventional 5% down and FHA 3.5% down. It depends on your 
          credit, your savings, and how long you plan to stay. If you're comparing the two, our{' '}
          <Link to="/blog/fha-vs-conventional" className="text-primary hover:underline font-medium">FHA vs Conventional comparison</Link>{' '}
          goes deeper into the tradeoffs — including the MIP trap that catches a lot of buyers.
        </p>
      </section>

      {/* 9. The Real Question */}
      <section id="the-real-question" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Real Question</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          "Can I buy with 5% down?" is the wrong question. The answer is almost always yes, assuming reasonable 
          credit and stable income.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The better questions are:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span>Do I have enough cash <em>beyond</em> the down payment for closing costs and a cushion?</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span>Does the monthly payment — PMI included — leave room in my budget for life to happen?</span>
          </li>
          <li className="flex items-start gap-3 text-lg leading-relaxed text-foreground">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1.5" />
            <span>Am I planning to stay long enough for the equity to start working in my favor?</span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          Chris closed with 5% down. His PMI is $195 a month. He knows exactly when it'll drop off, and he's 
          watching his home value creep up. He told me the other day that his only regret was not talking to a 
          loan officer sooner.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Compare Down Payment Scenarios</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our calculator lets you compare 5% down, 10% down, and 20% down — with PMI included — side by side. 
            See the total monthly payment for each one, and decide what actually fits your budget. Not the number 
            your relatives have been quoting for years. Your real budget.
          </p>
          <Link
            to="/pmi-calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Try the PMI Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/credit-score-needed" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">What Credit Score Do I Need to Buy a House?</div>
          </Link>
          <Link to="/blog/fha-vs-conventional" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">FHA vs Conventional: Which Loan Is Better?</div>
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
