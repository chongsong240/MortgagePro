import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, TrendingUp, AlertTriangle, CheckCircle, DollarSign, Target } from 'lucide-react';
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

export default function CreditScoreNeeded() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="What Credit Score Do I Need to Buy a House?"
        description="A friend spent six months convinced he couldn't buy a house because his credit score was 640. Here's the real truth about minimum credit scores, rate tiers, and how much improving your score is actually worth."
        datePublished="2026-07-01"
        url="https://www.mortgagepro.io/blog/credit-score-needed"
        faqs={[
          { q: 'What is the minimum credit score to buy a house?', a: 'For conventional loans, most lenders require a minimum of 620. FHA loans accept scores as low as 580 with 3.5% down. VA loans have no official minimum but most lenders look for 620+. Higher scores qualify for lower interest rates.' },
          { q: 'How much does credit score affect mortgage rate?', a: 'Significantly. On a $350,000 loan, the difference between a 760+ score (6.25% rate) and a 620-639 score (7.25% rate) is about $233/month and $84,000 in total interest over 30 years.' },
          { q: 'How can I improve my credit score before buying a house?', a: 'Pay all bills on time (35% of FICO score), keep credit card balances below 30% of limits, avoid opening new accounts before applying, and check your credit report for errors at annualcreditreport.com.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>July 1, 2026</span>
          <span>·</span>
          <span>12 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          What Credit Score Do I Need to Buy a House?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A friend of mine spent six months convinced he couldn't buy a house. His credit score was 640, and everywhere 
          he looked online, the advice made it sound like anything below 700 was a problem. He stopped looking at 
          listings. He stopped talking to lenders. He figured he was years away from being ready.
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
            ['no-magic-number', "There's No One Magic Number"],
            ['can-you-buy-620', 'Can You Actually Buy With a 620 Score?'],
            ['rate-tiers-thresholds', 'The Rate Tiers That Actually Matter'],
            ['fha-loans-fit', 'Where FHA Loans Fit In'],
            ['score-isnt-everything', "Your Score Isn't the Whole Story"],
            ['what-improves-score', 'What Actually Moves the Needle'],
            ['should-you-wait', 'Should You Wait for a Better Score?'],
            ['see-what-it-means', 'See What Your Score Means in Real Dollars'],
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

      {/* 1. No Magic Number */}
      <section id="no-magic-number" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">There's No One Magic Number</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Different loan programs set different minimums. A score that's fine for an FHA loan might not work for a 
          conventional loan with the best rate. A score that works for one lender might get you a worse deal at 
          another. There's no single number that unlocks the door for everyone.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But here's what most people miss: the conversation is never just about whether you qualify. It's about 
          <em> what it costs you</em> to qualify. two people can both get approved for the same house—one at 6.25% 
          and one at 7.25%—and one of them will pay $84,000 more in interest over thirty years. Same house. Same 
          loan program. Different credit scores.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          That's the part the online articles don't scream loud enough. Getting approved is one thing. Getting 
          approved at a rate that doesn't quietly drain your bank account for three decades is another.
        </p>
      </section>

      {/* 2. Can You Buy With 620 */}
      <section id="can-you-buy-620" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Can You Actually Buy With a 620 Score?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Yes. A score around 620 is often the minimum for a conventional loan backed by Fannie Mae or Freddie Mac. 
          Most lenders won't go below that for conventional, but at 620, the door is open.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But yes comes with a caveat. Lenders price risk into the rate. A 620 score tells them you're a 
          higher-risk borrower than someone with a 760 score, so they charge more. The difference isn't symbolic. 
          It hits your monthly payment every single month.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Let me tell you about my friend's situation. He had 640 when he finally called a loan officer—fully 
          expecting to get turned down. The loan officer didn't hesitate. "640? That's workable. Let's talk." He 
          closed on a condo three months later. His rate wasn't the best on the market, but he was in a house. 
          His rent was gone. He was building equity. And he had a plan to refinance once his score climbed.
        </p>
      </section>

      {/* 3. Rate Tiers */}
      <section id="rate-tiers-thresholds" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Rate Tiers That Actually Matter</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Forget the myth that you need 760+ or you're locked out. Here are the real thresholds—and what they 
          mean for your wallet.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Credit Score</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">What It Usually Means</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-green-600">760+</td>
                <td className="py-3 px-4">You'll likely qualify for the best advertised rates.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-green-500">700–759</td>
                <td className="py-3 px-4">Very good. Most lenders will offer competitive terms.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-amber-500">680–699</td>
                <td className="py-3 px-4">Good enough for most conventional loans with decent rates.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium text-orange-500">620–679</td>
                <td className="py-3 px-4">You can qualify, but your rate will be noticeably higher.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-red-500">Below 620</td>
                <td className="py-3 px-4">Conventional gets harder. FHA or other programs become your likely path.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Take a second look at that 620 line. A lot of first-time buyers assume they're disqualified if they're 
          not above 700. They're not. They're just in a different rate bucket.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          And here's what those buckets actually cost. This table shows a $350,000 loan at today's approximate rates:
        </p>
        <div className="overflow-x-auto mb-4 mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Tier</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Approx. Rate</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Monthly P&I</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Interest Over 30 Yrs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">760+</td>
                <td className="text-right py-3 px-4">6.25%</td>
                <td className="text-right py-3 px-4">$2,155</td>
                <td className="text-right py-3 px-4">~$425,000</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">680–699</td>
                <td className="text-right py-3 px-4">6.5%</td>
                <td className="text-right py-3 px-4">$2,212</td>
                <td className="text-right py-3 px-4">~$446,000</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="py-3 px-4 font-medium">620–639</td>
                <td className="text-right py-3 px-4">7.25%</td>
                <td className="text-right py-3 px-4">$2,388</td>
                <td className="text-right py-3 px-4">~$509,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-center text-lg">
            The difference between excellent credit (760+) and fair credit (620–639) on this loan is{' '}
            <strong>over $230 a month</strong>, and roughly <strong>$84,000 in extra interest</strong> over the 
            life of the loan. That's not pocket change. That's a car. Several years of college tuition. A decade 
            of vacations.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground mt-4">
          This is why improving your score—even by 20 or 30 points—can matter a lot. Moving from 640 to 680 could 
          bump you into a better rate tier and save you tens of thousands of dollars. We break this down in more 
          detail in our{' '}
          <Link to="/blog/income-needed" className="text-primary hover:underline font-medium">income guide</Link>, 
          which shows how rate differences stack against your earnings.
        </p>
      </section>

      {/* 4. FHA Loans */}
      <section id="fha-loans-fit" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Where FHA Loans Fit In</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If your score is below 620—or you're in the low 600s and want a better shot at approval—FHA loans are 
          the safety net. They're backed by the Federal Housing Administration and designed for borrowers who 
          don't meet conventional standards.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          FHA loans accept scores as low as 580 with 3.5% down. Sometimes lower with a bigger down payment. 
          They're also more forgiving of past credit problems—late payments, collections, even bankruptcies 
          that have aged a few years. If you've been through some financial turbulence and have been stable 
          for a couple of years, FHA is worth a real look.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But here's the tradeoff that doesn't get explained clearly enough. On an FHA loan with less than 10% 
          down, the mortgage insurance premium stays for <strong>the life of the loan</strong>. You can't cancel 
          it. The only way out is refinancing into a conventional loan later.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          So FHA can absolutely get you in the door. But it's worth going in with a plan to move out of it once 
          your credit improves. For a full comparison of the costs, check out our{' '}
          <Link to="/blog/fha-vs-conventional" className="text-primary hover:underline font-medium">FHA vs Conventional loan guide</Link>——it shows you exactly where each one wins and loses.
        </p>
      </section>

      {/* 5. Score Isn't Everything */}
      <section id="score-isnt-everything" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Your Score Isn't the Whole Story</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's something lenders don't tell you in the pre-approval ad they mail to your house: they don't just 
          look at a three-digit number and stamp "approved" or "denied." They look at your whole financial picture.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Someone with a 660 score, a stable job, low debt, and a solid down payment can be a stronger applicant 
          than someone with a 740 score who's maxed out on credit cards and living paycheck to paycheck. I've seen 
          this happen. A friend of mine had better credit but worse numbers everywhere else. The lender was more 
          nervous about him than about the guy with 660 who had a decade at the same company and paid off his car 
          loan early.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-6">
          Other things lenders weigh:
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Your debt-to-income ratio
            </p>
            <p className="text-muted-foreground text-sm">How much of your monthly income goes to debt payments. Lower is always better. Most lenders cap this at 43%, but they prefer 36% or under.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Your employment history
            </p>
            <p className="text-muted-foreground text-sm">Steady income in the same field counts for a lot. Two years of consistent earnings is the usual benchmark. Job hopping isn't always a red flag, but gaps need explaining.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary" />
              Your down payment
            </p>
            <p className="text-muted-foreground text-sm">More money down reduces the lender's risk, which can sometimes offset a weaker credit score. If you're on the borderline, a bigger down payment can tip the scales.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Your savings reserves
            </p>
            <p className="text-muted-foreground text-sm">Having money left over after closing makes you look like less of a risk. Lenders like to see at least two to three months of PITI payments in reserve.</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          A credit score is one piece. An important piece. But it's not the only piece. If you're wondering how 
          your full financial picture stacks up, our{' '}
          <Link to="/blog/how-much-house-can-i-afford" className="text-primary hover:underline font-medium">affordability guide</Link>{' '}
          walks through exactly what lenders look at.
        </p>
      </section>

      {/* 6. What Improves Score */}
      <section id="what-improves-score" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What Actually Moves the Needle</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you're six to twelve months out from buying, there are a few things that can shift your score faster 
          than most people realize. Not all credit advice is created equal. Here's what actually works.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground mb-3">Pay everything on time. Full stop.</h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Payment history is the single biggest factor in your credit score—roughly 35% of the FICO formula. Even 
          one 30-day late payment can knock 60 to 100 points off. If you're prone to forgetting, set up autopay 
          for at least the minimum on every account. One missed utility bill that goes to collections can crater 
          six months of score-building work.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Keep credit card balances low</h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          This one surprises a lot of people. Using a big chunk of your available credit—even if you pay it off in 
          full every month—can lower your score. The credit bureaus look at the balance on your statement date, 
          not the date you pay it. Keep your utilization under 30% of your limit. Under 10% is even better. If 
          your card has a $10,000 limit, try to keep the statement balance below $3,000. Below $1,000 is ideal.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Do not open new accounts before applying</h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Every credit inquiry dings your score a few points. More importantly, opening a new car loan or credit 
          card changes your debt-to-income ratio, which lenders will see. I've watched people sabotage their 
          pre-approval by financing a car three weeks before closing. If you're house hunting, put other 
          borrowing on hold. Don't even open a new store credit card for that couch you're planning to buy.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Check your actual credit report</h3>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You can get a free copy from each of the three major bureaus once a year at{' '}
          <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            annualcreditreport.com
          </a>. If you want to monitor your score more regularly, services like{' '}
          <a href="https://www.tkqlhce.com/click-101868701-16981737" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            SmartCredit
          </a>{' '}
          show your score and the factors affecting it in real time. Look for errors—accounts you don't recognize, incorrect late payments, balances that are wrong. 
          Dispute anything that looks off. I know someone who found a medical collection on their report for a 
          bill they'd already paid. Removing it boosted their score by 45 points. That's three minutes of work 
          that saved them thousands.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          The{' '}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-report-en-309/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            CFPB has a good guide
          </a>{' '}
          on how to read and dispute credit report errors if you're unsure where to start.
        </p>
      </section>

      {/* 7. Should You Wait */}
      <section id="should-you-wait" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Should You Wait for a Better Score?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          This is the question that doesn't have a universal answer. It depends on how close you are to a 
          threshold and how much waiting would actually cost you.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If improving your score by 30 points moves you from the 620 bucket to the 680 bucket, and the 
          difference is $150 a month, waiting six months to do the work could save you <strong>$54,000</strong> 
          over 30 years. That math is compelling. Six months of patience for a return that big? Worth it.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But if you're already in your mid-600s, financially ready, and the house you want is within reach, 
          waiting for a 740 score that might take two or three years isn't necessarily smart. The market moves 
          while you wait. Prices and rates change. A modestly higher rate on a house you can afford now might 
          beat waiting two years and discovering that the same house costs 15% more.
        </p>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-center text-lg">
            <strong>The honest answer:</strong> Don't assume you need an 800 credit score to buy a house. You 
            don't. But also don't ignore the real cost of borrowing at a lower tier. The smartest thing you 
            can do is put actual numbers to both scenarios and see where you land.
          </p>
        </div>
        <p className="text-lg leading-relaxed text-foreground mt-4">
          If you're trying to figure out whether 5% down vs 20% down makes more sense for your credit situation, 
          our article on{' '}
          <Link to="/blog/can-i-buy-with-5-percent-down" className="text-primary hover:underline font-medium">buying with 5% down</Link>{' '}
          goes through the tradeoffs including how PMI interacts with your credit tier.
        </p>
      </section>

      {/* 8. See What It Means */}
      {/* ============================================ */}
      {/* Calculator Data Table - Unique to MortgagePro */}
      {/* ============================================ */}
      <section id="calculator-data" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          📊 From Our Calculator: How Your Rate Changes Your Payment
        </h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          These aren't estimates. They're exact calculations from <strong>MortgagePro's mortgage calculator</strong> 
          formula. Here's what different credit score tiers could mean for your monthly payment:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Credit Tier</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Est. Rate</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Monthly P&I</th>
                <th className="text-right py-2 pr-4 font-medium text-muted-foreground">Total PITI</th>
                <th className="text-right py-2 font-medium text-muted-foreground">vs. 740+ Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Excellent (740+)</td>
                <td className="text-right py-2 pr-4">6.5%</td>
                <td className="text-right py-2 pr-4">$2,528</td>
                <td className="text-right py-2 pr-4 font-semibold">$3,087</td>
                <td className="text-right py-2">—</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Good (700-739)</td>
                <td className="text-right py-2 pr-4">7.0%</td>
                <td className="text-right py-2 pr-4">$2,661</td>
                <td className="text-right py-2 pr-4 font-semibold">$3,220</td>
                <td className="text-right py-2 text-amber-600">+$133/mo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Fair (640-699)</td>
                <td className="text-right py-2 pr-4">7.5%</td>
                <td className="text-right py-2 pr-4">$2,797</td>
                <td className="text-right py-2 pr-4 font-semibold">$3,356</td>
                <td className="text-right py-2 text-amber-600">+$269/mo</td>
              </tr>
              <tr className="border-b border-border bg-red-50 dark:bg-red-950/20">
                <td className="py-2 pr-4 font-semibold">Poor (below 640)</td>
                <td className="text-right py-2 pr-4">8.0%+</td>
                <td className="text-right py-2 pr-4">$2,935</td>
                <td className="text-right py-2 pr-4 font-semibold text-red-600">$3,494</td>
                <td className="text-right py-2 text-red-600 font-semibold">+$407/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Assumptions:</strong> $400,000 loan (20% down on $500,000 home), 30-year fixed. 
          Taxes at 1% (~$417/mo), insurance at national average (~$142/mo). 
          Rates by credit tier are illustrative based on industry averages as of mid-2026.
        </p>
        <p className="text-sm text-muted-foreground">
          Source: <Link to="/mortgage-calculator" className="text-primary hover:underline">MortgagePro Calculator</Link> — 
          see how <em>your</em> rate changes your payment.
        </p>
      </section>

      <section id="see-what-it-means" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">See What Your Score Means in Real Dollars</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Credit score charts are helpful in the abstract. What's more useful is seeing how your actual 
          score—and a slightly better or worse score—changes your monthly payment in real dollars.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Go play with our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">mortgage calculator</Link>.
          Enter the rate you'd likely get with your current score. Then try a rate half a point lower—which might
          be available if your score were 30 points higher. The monthly difference tells you exactly how much 
          improving your credit is worth.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          That number might motivate you more than any chart or article ever could. For me, it was the moment 
          I realized that spending three months paying down credit cards and disputing one error on my report 
          would save me roughly $180 a month. That's $2,160 a year. For three months of disciplined habits.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">See Your Actual Payment</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our calculator lets you adjust the interest rate and instantly see how your monthly payment changes. 
            Try your current rate, then try a better one. The difference is your motivation.
          </p>
          <Link
            to="/mortgage-calculator"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Open the Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <AllCalculatorsGrid />

        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/blog/income-needed" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
              <div className="text-xs text-muted-foreground mb-1">Related guide</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much Income Do You Need for a $500,000 House?</div>
            </Link>
            <Link to="/blog/can-i-buy-with-5-percent-down" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
              <div className="text-xs text-muted-foreground mb-1">Related guide</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Can I Buy a House with 5% Down?</div>
            </Link>
            <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
              <div className="text-xs text-muted-foreground mb-1">Tools</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Browse All 10 Calculators →</div>
            </Link>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-foreground mt-8">
          And if you're curious what a lender would say about your specific numbers—not your credit score, but 
          your income, your debts, your down payment—our{' '}
          <Link to="/blog/income-needed" className="text-primary hover:underline font-medium">income guide for a $500,000 house</Link>{' '}
          shows you exactly how lenders calculate what you can afford. It might be closer than you think.
        </p>

        <p className="text-lg leading-relaxed text-foreground">
          Start by checking your current score.{' '}
          <a href="https://www.dpbolvw.net/click-101868701-16981737" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            SmartCredit
          </a>{' '}
          offers a $1 trial that shows your score and what's impacting it—so you know exactly where you stand before talking to lenders.
        </p>
      </section>

    </article>
  );
}
