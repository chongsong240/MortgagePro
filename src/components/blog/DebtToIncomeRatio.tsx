import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ExternalLink, Scale, Wallet, FileText, Calculator, AlertTriangle, Info, TrendingUp } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function DebtToIncomeRatio() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="What Is a Good Debt-to-Income Ratio for Buying a House?"
        description="My friend makes $100,000 a year and got pre-approved for $340,000 — way less than he expected. Here's the DTI math that explains why two people with the same salary get wildly different loan offers."
        datePublished="2026-08-03"
        url="https://www.mortgagepro.io/blog/debt-to-income-ratio"
        faqs={[
          { q: 'What is a good debt-to-income ratio for buying a house?', a: "Most lenders look for a back-end DTI under 36%. Below 43% is still workable for many borrowers, especially with good credit. Above 43% you'll usually need compensating factors like a larger down payment or substantial savings." },
          { q: 'How is debt-to-income ratio calculated?', a: 'DTI is your total monthly debt payments divided by your gross monthly income. Front-end DTI only counts housing costs (mortgage, taxes, insurance, PMI). Back-end DTI counts housing plus everything else — car loans, student loans, credit card minimums, and more.' },
          { q: 'Can I get a mortgage with a DTI above 43%?', a: "Sometimes. FHA loans are often more flexible and can go higher with compensating factors. Fannie Mae allows up to 45% for manually underwritten loans, or 50% through their automated underwriting system. But a payment that eats nearly half your gross income will feel heavy in practice." },
          { q: 'How do I lower my DTI before buying a house?', a: 'The two levers are simple: reduce your monthly debt payments or increase your income. Paying off a car loan or credit card balance is the fastest fix. And avoid financing a new car or opening store credit cards right before applying for a mortgage.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>August 3, 2026</span>
          <span>·</span>
          <span>12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          What Is a Good Debt-to-Income Ratio for Buying a House?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A few years ago, a friend of mine got pre-approved for a mortgage that shocked him. Not because it was low — because it was way lower than he expected. He made $100,000 a year. He had good credit. He'd saved a decent down payment. By every measure he could think of, he figured he'd qualify for a house in the $450,000 to $500,000 range.
        </p>
        <p className="text-xl text-muted-foreground leading-relaxed mt-4">
          The lender came back with $340,000.
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
            ['the-story', 'The $340,000 Pre-Approval'],
            ['what-dti-is', 'What DTI Actually Is'],
            ['two-numbers', 'The Two Numbers Lenders Actually Track'],
            ['what-counts', 'What Gets Counted (And What Doesn\'t)'],
            ['dti-and-budget', 'How DTI Changes What You Can Afford'],
            ['good-dti', 'What Counts as a "Good" DTI'],
            ['improve-dti', 'How to Actually Improve Your DTI'],
            ['the-question', 'The Question Nobody Asks'],
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
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The $340,000 Pre-Approval</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          He called me, baffled. "I make six figures. Why are they acting like I can barely afford a starter home?"
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The answer took about five minutes to find. It wasn't his income. It was his debt. Between a car payment, student loans, and a credit card balance he'd been chipping away at, nearly <strong>$1,800 of his monthly income was already spoken for</strong> before he even applied for a mortgage.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That's DTI — debt-to-income ratio. And it's the number that explains why two people with the exact same salary can get wildly different loan offers.
        </p>
      </section>

      {/* 2. What DTI is */}
      <section id="what-dti-is" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What DTI Actually Is</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          DTI is all your monthly debt payments divided by your gross monthly income — the <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-2">official definition from the CFPB</a>. Lenders use it to figure out how much room you have left for a mortgage payment after your existing obligations are covered.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's how the math plays out in real life. If you make <strong>$8,000 a month</strong> before taxes, and you pay <strong>$400</strong> for a car loan, <strong>$300</strong> for student loans, and <strong>$200</strong> in credit card minimums, your total monthly debt is <strong>$900</strong>. That's about 11% of your income. That's your current DTI.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But when you apply for a mortgage, the lender doesn't just look at your current debts. They add the proposed mortgage payment — principal, interest, taxes, insurance — to the pile. If that mortgage payment would be <strong>$2,500</strong>, your total monthly obligations jump to <strong>$3,400</strong>. Now you're at <strong>42.5% DTI</strong>.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">The quick math</p>
              <p>
                $900 (current debts) ÷ $8,000 (income) = <strong>11.25% DTI</strong>. Add a $2,500 mortgage payment and it becomes $3,400 ÷ $8,000 = <strong>42.5% DTI</strong>. Suddenly, that $100,000 salary doesn't stretch as far as you thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Two numbers */}
      <section id="two-numbers" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Two Numbers Lenders Actually Track</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          There are two versions of DTI, and they get confused all the time.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Front-end DTI</strong> only looks at housing costs. That's your future mortgage payment, property taxes, insurance, and PMI if it applies, divided by your income. Lenders typically want this under <strong>28%</strong>.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Back-end DTI</strong> is the one that really matters. That's housing plus everything else — car loans, student loans, credit card minimums, personal loans, child support, all of it. This is the number that got my friend in trouble.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          For conventional loans, <strong><a href="https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-2">Fannie Mae's guidelines</a></strong> set the standard. For manually underwritten loans, their maximum total DTI ratio is 36%, though it can go up to 45% if the borrower meets certain credit score and reserve requirements. For loans processed through their automated underwriting system, the maximum can reach 50% — but getting approved at that level usually requires strong compensating factors.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          FHA loans are often more flexible for borrowers with higher DTIs. According to <strong><a href="https://www.hud.gov/sites/documents/4155-1_4_secf.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-primary/40 hover:decoration-primary underline-offset-2">HUD's guidelines</a></strong>, the total fixed payment to effective income ratio is generally considered acceptable at 43%, but it can go higher if significant compensating factors exist — things like a larger down payment, demonstrated savings ability, or a history of successfully paying similar housing expenses.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-700 dark:text-amber-200 leading-relaxed">
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">The part that gets overlooked</p>
              <p>
                Just because a lender will approve you at 43% or even 50% DTI doesn't mean you should take it. A payment that consumes nearly half of your gross income before taxes is going to feel a lot heavier once taxes, retirement contributions, and grocery bills enter the picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What counts */}
      <section id="what-counts" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Gets Counted (And What Doesn't)</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The list of debts that lenders count is pretty straightforward: car payments, student loans, credit card minimums, personal loans, child support, alimony. Any monthly obligation that shows up on your credit report.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          What <em>doesn't</em> get counted is equally important to understand. Groceries, utilities, phone bills, gas, childcare, streaming subscriptions — the stuff that fills up your actual daily budget — none of that shows up in DTI. The lender doesn't care that you spend $800 a month on groceries or $200 on gas. They're looking at credit report data, not your checking account.
        </p>
        <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-purple-700 dark:text-purple-200 leading-relaxed">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-1">Why DTI can be misleading</p>
              <p>
                A lender might approve you for a payment that, on paper, only uses 36% of your income. But if childcare and commuting costs eat up another 30%, you're going to feel stretched every month. The bank's math and your real life are two different things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DTI and budget */}
      <section id="dti-and-budget" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">How DTI Changes What You Can Afford</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Let me show you what DTI does to a home-buying budget with a concrete example. Two buyers, same income, different debt loads.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
            <p className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Buyer A — Light debt</p>
            <ul className="space-y-2 text-sm text-emerald-700 dark:text-emerald-200">
              <li><strong>$8,000/month</strong> income</li>
              <li><strong>$500/month</strong> in existing debt</li>
              <li>36% back-end cap → <strong>$2,880</strong> for debt + housing</li>
              <li>Leaves <strong>$2,380</strong> for a mortgage payment</li>
              <li>≈ <strong>$350,000</strong> home price</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
            <p className="font-semibold text-red-800 dark:text-red-300 mb-3">Buyer B — Heavy debt</p>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-200">
              <li><strong>$8,000/month</strong> income</li>
              <li><strong>$1,800/month</strong> in existing debt</li>
              <li>36% back-end cap → <strong>$2,880</strong> for debt + housing</li>
              <li>Leaves <strong>$1,080</strong> for a mortgage payment</li>
              <li>≈ <strong>$200,000</strong> home price</li>
            </ul>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Same income. Dramatically different borrowing power. That's DTI at work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 my-6">
          <Link
            to="/affordability-calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            <Calculator className="w-4 h-4" />
            See Your Own Numbers
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/mortgage-calculator"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
          >
            <Wallet className="w-4 h-4" />
            Mortgage Payment Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. Good DTI */}
      <section id="good-dti" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Counts as a "Good" DTI</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Under 36%</strong> is generally considered the sweet spot. You'll have the most options and the best rates.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Between 36% and 43%</strong> is still workable for a lot of borrowers, especially with good credit and stable employment. You might not get the lowest rate, but you'll likely still qualify for conventional loans.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          <strong>Above 43%</strong> and things get harder. You'll need compensating factors — larger down payment, higher credit score, ample savings — to convince a lender to approve you. FHA loans are sometimes more flexible here, allowing approvals above 43% when the borrower has demonstrated an ability to handle housing expenses or has substantial cash reserves.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">DTI Range</th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">What It Means</th>
                <th className="py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider text-left">Loan Options</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-3 font-semibold text-emerald-600 dark:text-emerald-400">Under 36%</td>
                <td className="py-3 px-3 text-muted-foreground">The sweet spot. Best rates and most options.</td>
                <td className="py-3 px-3 text-muted-foreground">All loan types</td>
              </tr>
              <tr className="border-b border-border bg-emerald-50/40 dark:bg-emerald-950/10">
                <td className="py-3 px-3 font-semibold text-amber-600 dark:text-amber-400">36% – 43%</td>
                <td className="py-3 px-3 text-muted-foreground">Workable with good credit and stable employment.</td>
                <td className="py-3 px-3 text-muted-foreground">Most conventional loans</td>
              </tr>
              <tr className="border-b border-border bg-red-50/40 dark:bg-red-950/10">
                <td className="py-3 px-3 font-semibold text-red-600 dark:text-red-400">Above 43%</td>
                <td className="py-3 px-3 text-muted-foreground">Harder. Needs compensating factors.</td>
                <td className="py-3 px-3 text-muted-foreground">FHA, some exceptions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Improve DTI */}
      <section id="improve-dti" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">How to Actually Improve Your DTI</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Improving DTI isn't complicated, but it takes time. There are really only two levers: <strong>reduce your monthly debt payments</strong>, or <strong>increase your income</strong>.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Paying off a car loan or a credit card balance is the fastest way to make a difference. One $400 monthly payment disappearing from your credit report can shift your DTI by several percentage points. That might not sound like much, but on an $8,000 monthly income, 5% of DTI is $400 — which could mean $50,000 more in borrowing power.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Avoiding new debt before applying for a mortgage matters just as much. Financing a new car or opening a store credit card right before house-hunting can ding your DTI just enough to shrink what you qualify for.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A larger down payment helps indirectly. It reduces your loan amount, which lowers your monthly mortgage payment, which improves your front-end DTI. It doesn't reduce your existing debts, but it makes the housing side of the equation lighter.
        </p>
        <div className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-cyan-700 dark:text-cyan-200 leading-relaxed">
              <p className="font-semibold text-cyan-800 dark:text-cyan-300 mb-1">The $50,000 difference</p>
              <p>
                Drop one $400 car payment and your DTI improves by 5% on an $8,000 income. At the 36% back-end cap, that $400 in freed-up cash can be redirected to housing — which is roughly $50,000 in extra borrowing power on a typical mortgage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. The question */}
      <section id="the-question" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Question Nobody Asks</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Everyone wants to know "how much can I get approved for?" The smarter question is "how much payment can I live with?"
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Lenders don't know that you want to travel once a year, or that your kid needs braces next year, or that you just feel better with a cushion in your checking account. They're measuring risk, not happiness.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A buyer with 28% front-end DTI is probably going to feel a lot more comfortable than a buyer at 36%. The math looks the same on the lender's screen. The experience of making that payment every month does not.
        </p>
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-8 my-8 text-center">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Run Your Numbers Before Talking to a Lender</h3>
          <p className="text-muted-foreground mb-5 max-w-md mx-auto text-sm">
            DTI is not the most exciting part of buying a home. Nobody daydreams about debt-to-income ratios. But understanding yours before you apply for a mortgage will save you from the confusion my friend felt when his pre-approval came back lower than expected.
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
        <p className="text-lg leading-relaxed text-foreground">
          Our affordability calculator lets you plug in your income, your debts, and a few other numbers to see what home price fits within a reasonable DTI. It's faster than doing the math by hand, and it gives you a realistic starting point before you ever walk into a lender's office.
        </p>
      </section>

      {/* Sources — external links at the end */}
      <section id="sources" className="mb-12">
        <div className="bg-muted/40 border border-border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Sources
          </h2>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            These are the official guidelines and definitions referenced throughout this article. Worth a read if you want to dig into the fine print.
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
                  <strong>Consumer Financial Protection Bureau (CFPB)</strong> — "What is a debt-to-income ratio?" Official definition and explanation.
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
                  <strong>Fannie Mae Selling Guide</strong> — B3-6-02: Debt-to-Income Ratios. The official limits for conventional loans.
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.hud.gov/sites/documents/4155-1_4_secf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>U.S. Department of Housing and Urban Development (HUD)</strong> — FHA handbook on qualifying ratios, including the 43% guideline and compensating factors.
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
          <Link to="/blog/how-much-house-can-i-afford" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much House Can I Afford? A Step-by-Step Guide</div>
          </Link>
          <Link to="/blog/income-needed" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much Income Do I Need for a $500,000 House?</div>
          </Link>
          <Link to="/affordability-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Affordability Calculator</div>
          </Link>
          <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Mortgage Payment Calculator</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />

    </article>
  );
}
