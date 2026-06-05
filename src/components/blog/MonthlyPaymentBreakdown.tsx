import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, PieChart, BookOpen, Calculator } from 'lucide-react';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function MonthlyPaymentBreakdown() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded-full px-3 py-1 font-medium text-xs">
            Guides
          </span>
          <span>June 5, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How Much Will My Monthly Mortgage Payment Be?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Most first-time buyers focus on the loan amount and interest rate. Then the first statement arrives.
          Here's what actually goes into your monthly number — and how to figure yours out before you shop.
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
            ['the-story', '1. The $400 Surprise'],
            ['pit-i', '2. The Four (or Five) Pieces of Your Payment'],
            ['three-levers', '3. What Changes Your Payment the Most'],
            ['real-life-numbers', '4. A Real-Life Payment, Line by Line'],
            ['28-36-rule', '5. The 28/36 Rule (And When to Ignore It)'],
            ['amortization-surprise', '6. The Amortization Surprise'],
            ['find-out-yours', '7. The Fastest Way to Know Your Number'],
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
      {/* Section 1 - The Story */}
      {/* ============================================ */}
      <section id="the-story" className="mb-10">
        <p className="text-lg leading-relaxed mb-4">
          When my cousin Lisa bought her first place last year, she called me in a panic three days before closing. 
          "I thought I knew what my payment was going to be," she said. "But the final number they just sent me is almost $400 higher than what I budgeted for."
        </p>
        <p className="text-lg leading-relaxed mb-4">
          She's not bad at math. She just didn't know about PITI.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Most first-time buyers do the same thing. They look at the home price, plug in an interest rate, 
          multiply in their head, and think that's the number. Then the actual statement shows up with line 
          items they never considered — and they realize the loan payment was only half the story.
        </p>
        <p className="text-lg leading-relaxed">
          Lisa's situation wasn't unusual. It's just that nobody had walked her through what actually goes 
          into a monthly mortgage payment. So let's do that now. No textbook definitions. Just the real numbers.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 2 - PITI */}
      {/* ============================================ */}
      <section id="pit-i" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Four (or Five) Pieces of Your Payment
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Think of a mortgage payment like a restaurant bill with mandatory add-ons. The menu price is one 
          thing. What you actually pay is another.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Here's what's on the bill every single month:
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Principal</h3>
            <p className="text-muted-foreground">
              This is the money that goes toward paying down what you actually borrowed. If you took out a 
              $350,000 loan, your principal payments slowly chip away at that number. <em>Slowly</em> being 
              the key word — especially in the beginning.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Interest</h3>
            <p className="text-muted-foreground">
              This is what the bank charges for lending you the money. It's calculated on whatever you still 
              owe. So in month one, when you owe the full amount, interest is at its highest. That's why early 
              payments feel like you're running on a treadmill — a lot of motion, but you're not moving much.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Property Taxes</h3>
            <p className="text-muted-foreground">
              Your local government wants its cut. These are based on your home's assessed value, and they 
              vary wildly depending on where you live. The same $400,000 house could have an $800 monthly tax 
              bill in parts of New Jersey, or under $150 in parts of Alabama.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Homeowners Insurance</h3>
            <p className="text-muted-foreground">
              Lenders require this. It protects the property — and their investment — from fire, storm damage, 
              and other disasters. Your premium gets rolled into your monthly payment so the lender knows 
              it's always paid.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 border-amber-200 dark:border-amber-800">
            <h3 className="font-semibold text-foreground mb-1">
              PMI — Private Mortgage Insurance <span className="text-amber-600 text-sm font-normal">(the one everybody forgets)</span>
            </h3>
            <p className="text-muted-foreground">
              If you put down less than 20%, the bank considers you a higher risk. So they charge you an 
              insurance premium to protect <em>themselves</em>. It's money you pay every month that doesn't 
              build equity or pay down your loan. It just covers the bank if you default. 
              {' '}<Link to="/blog/what-is-pmi" className="text-primary hover:underline font-medium">
                We have a full guide on PMI and how to get rid of it →
              </Link>
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed">
          Lisa had forgotten about property taxes and PMI entirely. She'd budgeted based on the principal 
          and interest number her lender quoted, not realizing those other line items would add hundreds 
          to her monthly bill. That's where her $400 surprise came from.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 3 - Three Levers */}
      {/* ============================================ */}
      <section id="three-levers" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          What Changes Your Payment the Most
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Three levers move your monthly payment more than anything else. Here they are, ranked by impact.
        </p>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">1. The home price</h3>
            <p className="text-muted-foreground leading-relaxed">
              Obvious, but worth stating: a $350,000 house costs more each month than a $250,000 one. What's 
              less obvious is <em>how much</em> more. On a 30-year fixed at 6.5%, every extra $10,000 you 
              borrow adds about $63 to your monthly payment. Stretch that over a $100,000 price difference 
              and you're looking at $630 more per month — every month, for 30 years.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">2. The interest rate</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This is the one that keeps people up at night. A single percentage point difference changes 
              your payment by a shocking amount. Here's what it looks like on a $350,000 loan:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Loan Amount</th>
                    <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Rate</th>
                    <th className="text-left py-2 font-medium text-muted-foreground">Monthly P&I</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">$350,000</td>
                    <td className="py-2 pr-4">6.0%</td>
                    <td className="py-2 font-semibold">$2,098</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">$350,000</td>
                    <td className="py-2 pr-4">7.0%</td>
                    <td className="py-2 font-semibold text-destructive">$2,329</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              That's <strong>$231 more every single month</strong>, just from a 1% rate difference. Over 
              30 years, that single percentage point costs an extra $83,000 in interest. It's the most 
              expensive "small difference" you'll ever encounter.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">3. The down payment</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The bigger your down payment, the less you borrow. Simple math. But there's a second benefit: 
              put down 20% or more, and PMI disappears entirely. Here's how that plays out on a $400,000 purchase:
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Down Payment</th>
                    <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Loan</th>
                    <th className="text-left py-2 font-medium text-muted-foreground">PMI?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">20% ($80,000)</td>
                    <td className="py-2 pr-4">$320,000</td>
                    <td className="py-2 text-emerald-600 font-medium">No</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">5% ($20,000)</td>
                    <td className="py-2 pr-4">$380,000</td>
                    <td className="py-2 text-amber-600 font-medium">Yes (~$250/mo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The 5% buyer borrows $60,000 more <em>and</em> pays a monthly insurance premium on top. The gap 
              between those two payments isn't small — we're talking $500+ per month difference.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CALCULATOR EMBED - CTA */}
      {/* ============================================ */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 text-center">
        <div className="flex justify-center mb-3">
          <Calculator className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Want to know your exact number?</h3>
        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
          Plug in your home price, down payment, interest rate, and location into our interactive calculator. 
          It gives you the full PITI breakdown in seconds — no sign-up required.
        </p>
        <Link
          to="/calculator"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <Calculator className="w-4 h-4" />
          Try the Mortgage Calculator Now
        </Link>
      </div>

      {/* ============================================ */}
      {/* Section 4 - Real Life Numbers */}
      {/* ============================================ */}
      <section id="real-life-numbers" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          A Real-Life Payment, Line by Line
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Let's make this concrete. Here's a realistic scenario for a buyer in 2025:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-6 text-muted-foreground">
          <li>Home price: <strong className="text-foreground">$500,000</strong></li>
          <li>Down payment: <strong className="text-foreground">20% ($100,000)</strong></li>
          <li>Loan amount: <strong className="text-foreground">$400,000</strong></li>
          <li>Interest rate: <strong className="text-foreground">6.5%</strong></li>
          <li>Loan term: <strong className="text-foreground">30 years</strong></li>
        </ul>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Component</th>
                <th className="text-right py-2 font-medium text-muted-foreground">Monthly Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Principal & Interest</td>
                <td className="text-right py-2 font-semibold">$2,528</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Property Taxes <span className="text-muted-foreground text-xs">(varies by location)</span></td>
                <td className="text-right py-2">~$500</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Homeowners Insurance</td>
                <td className="text-right py-2">~$150</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="py-3 pr-4 font-bold text-foreground">Total Estimated Payment</td>
                <td className="text-right py-3 font-bold text-foreground text-lg">~$3,178</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          That's over $3,000 a month. Not because the house itself costs $500,000 — but because the loan, 
          taxes, and insurance all stack on top of each other.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Now change one variable. Same house, same price, but only <strong>5% down</strong>. The loan amount 
          jumps to $475,000, PMI kicks in at roughly $250/month, and the total monthly payment pushes past 
          <strong> $3,700</strong>. That's a $600 swing just from the down payment decision.
        </p>
        <p className="text-lg leading-relaxed">
          Want to run your own numbers? Our interactive calculator handles all of this automatically — 
          and it includes state-specific property tax estimates so you don't have to guess.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 5 - 28/36 Rule */}
      {/* ============================================ */}
      <section id="28-36-rule" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The 28/36 Rule (And When to Ignore It)
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Most lenders use something called the 28/36 rule when evaluating your application. 
          The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Consumer Financial Protection Bureau</a> has detailed 
          guidance on this, but the short version is:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground">
          <li><strong className="text-foreground">28%:</strong> Your total housing payment shouldn't exceed 28% of your gross monthly income.</li>
          <li><strong className="text-foreground">36%:</strong> All your debt payments combined — housing plus car loans, student loans, credit cards — shouldn't exceed 36%.</li>
        </ul>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-muted-foreground">Annual Income</th>
                <th className="text-left py-2 font-medium text-muted-foreground">Max Housing Payment (28%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">$75,000</td>
                <td className="py-2 font-semibold">~$1,750/month</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">$100,000</td>
                <td className="py-2 font-semibold">~$2,333/month</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">$150,000</td>
                <td className="py-2 font-semibold">~$3,500/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          But here's what the bank won't tell you: these are <strong>maximums</strong>, not recommendations. 
          A lender will happily approve you for a payment that leaves you house-poor. They're looking at 
          risk metrics, not your grocery budget or your plan to start a family in two years.
        </p>
        <p className="text-lg leading-relaxed">
          Lisa and her husband qualified for a payment well above $3,000. They chose to buy at a price 
          point that kept their payment under $2,400. "We want to actually enjoy living in the house," 
          she told me, "not just survive the mortgage."
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 6 - Amortization Surprise */}
      {/* ============================================ */}
      <section id="amortization-surprise" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Amortization Surprise
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          There's one more thing that catches people off guard. In the early years of a mortgage, your 
          payment breakdown is wildly lopsided toward interest. On a $400,000 loan at 6.5%, your very 
          first payment looks roughly like this:
        </p>
        <div className="bg-muted/40 border border-border rounded-lg p-4 mb-4 text-sm">
          <div className="flex justify-between mb-1">
            <span>Interest:</span>
            <span className="font-semibold">~$2,167</span>
          </div>
          <div className="flex justify-between">
            <span>Principal:</span>
            <span className="font-semibold">~$361</span>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-4">
          You're paying over $2,500, and only $361 of it actually reduces what you owe. It's not a scam — 
          it's just how interest on a large balance works. But knowing this in advance changes how you 
          think about extra payments, refinancing, and how long you plan to stay in the home.
        </p>
        <p className="text-lg leading-relaxed">
          We have a <Link to="/blog/amortization-schedule" className="text-primary hover:underline font-medium">
          full breakdown of how amortization works</Link> with charts and examples. 
          Worth reading before you sign anything.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 7 - Fastest Way */}
      {/* ============================================ */}
      <section id="find-out-yours" className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
          The Fastest Way to Know Your Number
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          You can do all this math on scratch paper. You can build a spreadsheet. But honestly? 
          The fastest way is to use a calculator that does it in about five seconds.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our <Link to="/calculator" className="text-primary hover:underline font-medium">mortgage calculator</Link> takes your home price, down payment, rate, and location, and 
          gives you a complete monthly payment breakdown — principal, interest, taxes, insurance, PMI 
          if applicable. The full picture. You can adjust any variable and watch the number update 
          instantly. No waiting. No forms to fill out.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Once you know your baseline number, here are some related guides to dive deeper:
        </p>
        <div className="space-y-3 mb-4">
          <Link to="/calculator?tab=biweekly" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center flex-shrink-0">
              <Percent className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Bi-Weekly Payment Comparison</div>
              <div className="text-sm text-muted-foreground">See how switching to bi-weekly payments can save you thousands in interest.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/what-is-pmi" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">PMI: What It Is and How to Cancel It</div>
              <div className="text-sm text-muted-foreground">That extra insurance charge is avoidable. Here's exactly how.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/amortization-schedule" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 flex items-center justify-center flex-shrink-0">
              <PieChart className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">Understanding Your Amortization Schedule</div>
              <div className="text-sm text-muted-foreground">Why 86% of your first payment goes to interest — and what to do about it.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/30-vs-15-year" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">30-Year vs 15-Year Mortgage</div>
              <div className="text-sm text-muted-foreground">The math favors one side clearly. But the right answer isn't just about math.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>

          <Link to="/blog/how-much-house-can-i-afford" className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 flex items-center justify-center flex-shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much House Can I Afford?</div>
              <div className="text-sm text-muted-foreground">A step-by-step guide to finding your number without the guesswork.</div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        </div>

        <p className="text-lg leading-relaxed text-center text-muted-foreground italic">
          No surprises at closing. Lisa wishes she'd done this before signing.
        </p>
      </section>

    </article>
  );
}
