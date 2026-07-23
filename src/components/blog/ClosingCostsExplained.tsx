import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, FileText, Home, Calculator, BookOpen, Shield, PieChart, AlertTriangle, Landmark } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ClosingCostsExplained() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Closing Costs Explained: The Money You Need Beyond the Down Payment"
        description="My neighbors Jen and Mike thought they had the numbers figured out. Then a week before closing, they found out they needed nearly $12,000 more than they'd planned."
        datePublished="2026-07-12"
        url="https://www.mortgagepro.io/blog/closing-costs-explained"
        faqs={[
          { q: 'How much are closing costs on a house?', a: 'Closing costs typically run 2% to 5% of the home purchase price. On a $400,000 home, that is $8,000 to $20,000. This range depends on your state, your lender, and your loan type.' },
          { q: 'What is included in closing costs?', a: 'Closing costs include loan origination fees, appraisal, title search and insurance, recording fees, prepaid property taxes, homeowners insurance, and sometimes attorney fees. These can vary significantly by location.' },
          { q: 'Can closing costs be rolled into the loan?', a: 'In some cases, yes. Certain costs can be financed into your loan balance, which lowers your upfront cash requirement but means you pay interest on those costs for years. It is a tradeoff worth understanding before you commit.' },
          { q: 'Who pays closing costs, the buyer or seller?', a: 'In most deals, the buyer pays the closing costs. However, sellers can agree to cover a portion of the buyer costs through something called a seller concession. This is more common in buyer markets or when a seller needs to close quickly.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>July 12, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Closing Costs Explained: The Money You Need Beyond the Down Payment
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My neighbors Jen and Mike thought they had it all figured out. They'd saved $40,000 for a down payment on a $400,000 house. 
          They knew their monthly budget. They'd gotten pre-approved. They were ready.
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
            ['jen-and-mike', 'Jen and Mike: A Cautionary Tale'],
            ['what-youre-paying-for', 'So What Are You Actually Paying For?'],
            ['where-12000-went', 'Where Jen and Mike\'s $12,000 Went'],
            ['big-ones', 'The Big Ones Worth Understanding'],
            ['who-pays', 'Who Actually Pays These Costs?'],
            ['loan-estimate', 'One Document You Should Actually Read'],
            ['location', 'Closing Costs Vary Wildly by Location'],
            ['keep-under-control', 'How to Keep These Costs Under Control'],
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

      {/* 1. Jen and Mike */}
      <section id="jen-and-mike" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Jen and Mike: A Cautionary Tale</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          My neighbors Jen and Mike thought they had it all figured out. They'd saved $40,000 for a down payment on a $400,000 house. 
          They knew their monthly budget. They'd gotten pre-approved. They were ready.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then, a week before closing, they got the final settlement statement. The cash they needed to bring to the table wasn't 
          $40,000. It was nearly <strong>$52,000</strong>.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          They were short. Not by a little—by almost $12,000. They scrambled. Parents helped. They postponed buying a new couch. 
          They closed on time, but the experience left them rattled.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          "Nobody warned us," Jen told me later. "Everyone talked about the down payment. Nobody talked about the other twelve grand."
        </p>
        <p className="text-lg leading-relaxed text-foreground mt-4">
          She's right. The down payment gets all the attention. Closing costs are the surprise guest at the end of the home-buying 
          process—always there, often underestimated, and capable of derailing a deal if you're not ready for them. Let's walk 
          through what they actually are, how much they cost, and how to avoid getting caught off guard like Jen and Mike did.
        </p>
      </section>

      {/* 2. What Are You Actually Paying For */}
      <section id="what-youre-paying-for" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">So What Are You Actually Paying For?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Closing costs are a collection of fees you pay to finalize your mortgage and legally transfer the property. They cover a 
          bunch of services you might not have thought about: the appraisal that tells the bank what the house is actually worth, 
          the title search that makes sure nobody else has a claim on the property, the lawyer who makes sure the paperwork is clean, 
          the government fees for recording the sale.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Think of it this way: the down payment is the price of admission to homeownership. Closing costs are the processing fees, 
          the service charges, the taxes, and the legal work that make the whole thing official.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          On a $400,000 home, closing costs typically run between <strong>$8,000 and $20,000</strong>. That's 2% to 5% of the 
          purchase price. It's a big range, and where you fall depends on your state, your lender, and your loan type. Want to 
          nail down the number for your specific situation? Our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">Closing Cost Calculator</Link>{' '}
          breaks it down line by line with your home price and location.
        </p>
      </section>

      {/* 3. Where the $12,000 Went */}
      <section id="where-12000-went" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Where Jen and Mike's $12,000 Went</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          To make this concrete, here's roughly how their closing costs broke down on their $400,000 purchase. These numbers are 
          specific to their situation—a conventional loan in a state with moderate closing costs—but the categories apply to just 
          about everyone.
        </p>

        <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left px-4 py-3 font-semibold text-foreground">Expense</th>
                <th className="text-right px-4 py-3 font-semibold text-foreground">Approximate Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Loan origination fee</td>
                <td className="text-right px-4 py-3 text-foreground">$3,200</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Appraisal</td>
                <td className="text-right px-4 py-3 text-foreground">$550</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Title search and insurance</td>
                <td className="text-right px-4 py-3 text-foreground">$2,100</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Recording and government fees</td>
                <td className="text-right px-4 py-3 text-foreground">$400</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Prepaid property taxes (6 months)</td>
                <td className="text-right px-4 py-3 text-foreground">$3,600</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Prepaid homeowners insurance (1 year)</td>
                <td className="text-right px-4 py-3 text-foreground">$1,500</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 text-foreground">Miscellaneous (credit report, flood cert, etc.)</td>
                <td className="text-right px-4 py-3 text-foreground">$350</td>
              </tr>
              <tr className="border-t-2 border-border bg-primary/5">
                <td className="px-4 py-3 font-bold text-foreground">Total</td>
                <td className="text-right px-4 py-3 font-bold text-foreground">~$11,700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed text-foreground">
          A few of these deserve more explanation, because they're the ones that catch first-timers off guard.
        </p>
      </section>

      {/* 4. The Big Ones */}
      <section id="big-ones" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Big Ones Worth Understanding</h2>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Loan origination fee
          </h3>
          <p className="text-foreground">
            This is what the lender charges for creating the loan. It's usually about <strong>1% of the loan amount</strong>. 
            Some lenders call it an "underwriting fee" or bundle it with other charges. This is one of the fees that varies 
            between lenders, so it's worth comparing. If you want to see how this fee fits into your big picture, check your 
            monthly payment with our{' '}
            <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">Mortgage Calculator</Link>{' '}
            to make sure you're comfortable with the total cost.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Home className="w-5 h-5 text-amber-600" />
            Appraisal
          </h3>
          <p className="text-foreground">
            The bank wants to know the house is worth at least what you're paying. You pay for an independent appraiser to go out 
            and assess the property. This usually runs <strong>$400 to $600</strong>. It's non-negotiable for most loans.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            Title search and insurance
          </h3>
          <p className="text-foreground">
            This is a big one. Before you buy, someone needs to verify that the seller actually owns the property and that there 
            aren't any liens or claims against it—old contractor bills, unpaid taxes, legal disputes. That's the title search. 
            Title insurance protects you and the lender if something was missed and a claim pops up later. In some states, the 
            buyer pays for the lender's title insurance policy. In others, the seller covers some of it. This varies a lot by region.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Prepaid taxes and insurance
          </h3>
          <p className="text-foreground">
            This is the part that surprised Jen and Mike most. At closing, lenders often require you to prepay several months of 
            property taxes and a full year of homeowners insurance. These get deposited into an <strong>escrow account</strong>—a 
            holding account the lender manages—so when the tax bill comes due, the money is already there. It's still your money. 
            But you have to come up with it upfront. Use our{' '}
            <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">Affordability Calculator</Link>{' '}
            to factor these prepaids into your total cash-to-close picture.
          </p>
        </div>
      </section>

      {/* 5. Who Pays */}
      <section id="who-pays" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Who Actually Pays These Costs?</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          In most deals, the buyer pays the closing costs. But there are exceptions.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Sometimes the seller agrees to cover a portion of the buyer's costs. This is called a <strong>seller concession</strong>, 
          and it's more common in buyers' markets or when a seller needs to close quickly. There are limits on how much a seller 
          can contribute, and they vary by loan type, but it's worth discussing with your real estate agent.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          You can also sometimes roll certain costs into your loan balance, effectively financing them over time. This lowers your 
          upfront cash requirement but means you pay interest on those costs for years. It's not free money—it's a tradeoff. 
          Sometimes worth it. Sometimes not. If you're going this route, check our{' '}
          <Link to="/pmi-calculator" className="text-primary hover:underline font-medium">PMI Calculator</Link>{' '}
          too, since a smaller down payment also means PMI payments that eat into your monthly budget.
        </p>
      </section>

      {/* 6. Loan Estimate */}
      <section id="loan-estimate" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">One Document You Should Actually Read</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A few days into the mortgage process, your lender is required to send you something called a <strong>Loan Estimate</strong>. 
          It's a three-page standardized form that breaks down your interest rate, monthly payment, and estimated closing costs. 
          This document matters more than most people realize.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          It shows a line called <strong>"Cash to Close"</strong>, which is the total amount you'll need to bring to the 
          table—down payment plus closing costs, minus any deposits you've already paid. The final numbers might shift a little 
          by closing day, but they shouldn't shift much. If the final Closing Disclosure looks significantly different from the 
          Loan Estimate, something is off, and you have the right to ask why.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          Jen and Mike didn't know this. They glanced at the Loan Estimate when it arrived and filed it away without really 
          studying it. By the time the final number came in higher than expected, it was too late to shop around or negotiate. 
          Lesson learned.
        </p>
      </section>

      {/* 7. Location */}
      <section id="location" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Closing Costs Vary Wildly by Location</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          A $400,000 house in New York doesn't cost the same to close as a $400,000 house in Texas. State transfer taxes, title 
          insurance regulations, and local recording fees all differ. Some states have attorney requirements that add to the bill. 
          Others don't.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you're shopping in{' '}
          <a href="/mortgage-payment/california/" className="text-primary hover:underline font-medium">California</a>,{' '}
          <a href="/mortgage-payment/texas/" className="text-primary hover:underline font-medium">Texas</a>,{' '}
          <a href="/mortgage-payment/florida/" className="text-primary hover:underline font-medium">Florida</a>,{' '}
          <a href="/mortgage-payment/new-york/" className="text-primary hover:underline font-medium">New York</a>, or 
          anywhere else, the rules look different. Your lender will give you a location-specific estimate. But it's also worth 
          asking your real estate agent what's typical in your market. They see closing statements every day and can tell you 
          what to expect.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          For a personalized estimate that accounts for your specific location, try our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">Closing Cost Calculator</Link>. 
          It uses state-specific data so you're not guessing.
        </p>
      </section>

      {/* 8. Keep Under Control */}
      <section id="keep-under-control" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">How to Keep These Costs Under Control</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          You can't eliminate closing costs, but you can manage them. Here's how:
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">Compare lenders</h3>
          <p className="text-foreground">
            Different lenders charge different origination fees and use different third-party services. Getting quotes from two or 
            three can save you real money. Ask for a breakdown. Don't just look at the bottom line. See what they're actually 
            charging for and whether any of it is optional.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">Ask the seller for concessions</h3>
          <p className="text-foreground">
            In the right market, sellers will contribute toward your costs. This is a negotiation point your agent can help with.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">Shop around for title services</h3>
          <p className="text-foreground">
            In some states, you can choose your own title company. Don't default to the one your lender recommends without checking 
            prices.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">Ask about lender credits</h3>
          <p className="text-foreground">
            Some lenders will cover a portion of your closing costs in exchange for a slightly higher interest rate. This can make 
            sense if you need to minimize upfront cash, but run the numbers—paying a higher rate for 30 years might cost more than 
            the upfront savings.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Get Your Personalized Closing Cost Estimate</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Don't get blindsided like Jen and Mike. Our Closing Cost Calculator gives you a personalized estimate based on your 
            home price, loan type, and location. It's quick, it's free, and it might save you from a very uncomfortable surprise 
            at the closing table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/closing-cost-calculator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Estimate Your Closing Costs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mortgage-calculator"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Calculate Monthly Payment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      
      {/* Continue Reading */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/monthly-payment-breakdown" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much Will My Monthly Mortgage Payment Be?</div>
          </Link>
          <Link to="/blog/how-much-house-can-i-afford" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much House Can I Afford?</div>
          </Link>
          <Link to="/closing-cost-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Closing Cost Calculator</div>
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
