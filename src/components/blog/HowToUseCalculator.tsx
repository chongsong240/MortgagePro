import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';
import BlogSchema from './BlogSchema';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function HowToUseCalculator() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="How to Use Our Mortgage Calculator to Plan Your Monthly Payment"
        description="A complete step-by-step guide to understanding every input, reading your results, and making smarter home-buying decisions with our interactive calculator."
        datePublished="2026-05-10"
        url="https://www.mortgagepro.io/blog/how-to-use-calculator"
        faqs={[
          { q: 'What inputs do I need to use the mortgage calculator?', a: 'You need four main inputs: home price, down payment percentage, interest rate, and loan term. Optionally, select your state for accurate property tax and insurance estimates.' },
          { q: 'How does the down payment affect my monthly payment?', a: 'A larger down payment reduces your loan amount and monthly payment. Putting down 20% or more eliminates PMI, saving $100-$400/month. On a $400,000 home, going from 10% to 20% down saves about $133/month in PMI alone.' },
          { q: 'What is the amortization schedule in the calculator?', a: 'The amortization schedule shows every year of your loan broken down into principal paid, interest paid, and remaining balance. In year 1 of a 30-year mortgage, about 85% of your payment goes to interest.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 rounded-full px-3 py-1 font-medium text-xs">
            Guides
          </span>
          <span>May 10, 2026</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How to Use Our Mortgage Calculator to Plan Your Monthly Payment
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A complete step-by-step guide to understanding every input, reading your results, 
          and making smarter home-buying decisions with our interactive calculator.
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
            1. Getting Started: What You'll Need
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. Home Price & Down Payment
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. Interest Rate & Loan Term
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. Location & Local Costs
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. Reading Your Monthly Breakdown
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. Understanding the Amortization Schedule
          </a>
          <a href="#section-7" onClick={(e) => scrollToSection(e, 'section-7')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            7. Putting It All Together: Real-World Scenario
          </a>
        </nav>
      </div>

      {/* Section 1 */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Getting Started: What You'll Need</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Before you open the <Link to="/mortgage-calculator" className="text-primary font-medium hover:underline">Mortgage Calculator</Link>,
          take a moment to gather a few key numbers. You don't need to be pre-approved for a loan — estimates 
          are perfectly fine. Here's what you'll want to have handy:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Target home price</span>
            </div>
            <p className="text-sm text-muted-foreground">What price range are you looking at? Start with what you think you can afford.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Percent className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Down payment %</span>
            </div>
            <p className="text-sm text-muted-foreground">How much cash can you put down? 20% is the magic number (no PMI).</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Current interest rate</span>
            </div>
            <p className="text-sm text-muted-foreground">Check Bankrate or Mortgage News Daily for today's 30-year fixed rates.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Home className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Your state</span>
            </div>
            <p className="text-sm text-muted-foreground">Property tax rates vary wildly — from 0.3% in Hawaii to 2.5% in New Jersey.</p>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">💡 Pro Tip</p>
          <p className="text-sm text-muted-foreground">
            Don't stress about getting exact numbers. The beauty of an interactive calculator is that you can 
            adjust and experiment freely. Start with rough estimates and refine as you go.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Home Price & Down Payment</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These two inputs work together to determine your <strong className="text-foreground">loan amount</strong> — 
          the actual sum you'll be borrowing from the bank. Let's walk through each.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">Home Price</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This is the purchase price of the home. Drag the slider or type directly into the input field — 
          you'll see your monthly payment update instantly. Try dragging from <strong className="text-foreground">$400,000</strong> 
          up to <strong className="text-foreground">$500,000</strong> and watch how much your monthly payment jumps.
        </p>

        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <DollarSign className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Try it yourself:</p>
              <p className="text-sm text-muted-foreground">
                In the calculator, set <strong>Home Price = $400,000</strong> and note the monthly payment. 
                Then drag up to <strong>$500,000</strong>. On a 30-year loan at 6.5% with 20% down, 
                that extra $100,000 adds roughly <strong>$630/month</strong> to your payment!
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">Down Payment</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You can enter your down payment as either a <strong className="text-foreground">percentage</strong> or a 
          <strong className="text-foreground"> dollar amount</strong> — both fields are synchronized. 
          The calculator automatically adjusts one when you change the other.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A <strong className="text-foreground">20% down payment</strong> is the traditional benchmark because it lets you 
          avoid <strong className="text-foreground">Private Mortgage Insurance (PMI)</strong>. PMI typically costs 
          0.3%–1.5% of your loan amount per year. On a $320,000 loan, that's an extra <strong>$80–$400/month</strong> 
          you're paying for nothing but the bank's protection.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Percent className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Try this scenario:</p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Set Home Price = $400,000. Drag Down Payment from 20% → 10%. Notice PMI appears 
                in red in the payment breakdown! That's <strong>$133/month</strong> extra. Over 5 years, 
                that's nearly <strong>$8,000</strong> you could have saved by waiting for 20% down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Interest Rate & Loan Term</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These two inputs have the most dramatic impact on your long-term costs. Small changes here can 
          save — or cost — you tens of thousands of dollars over the life of your loan.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">Interest Rate</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The interest rate is the cost of borrowing money, expressed as an annual percentage. 
          As of mid-2026, 30-year fixed rates are hovering around <strong className="text-foreground">6.5%–7%</strong>. 
          Your actual rate depends on your credit score, loan type, and down payment size.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The slider lets you adjust in <strong className="text-foreground">0.125% increments</strong> 
          (⅛ of a percentage point). Even this seemingly tiny change matters. On a $320,000 loan:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2.5 px-3 font-medium text-muted-foreground">Interest Rate</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground">Monthly Payment</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground">Total Interest</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground">Monthly Difference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="py-2.5 px-3 font-medium">6.00%</td>
                <td className="text-right py-2.5 px-3">$1,919</td>
                <td className="text-right py-2.5 px-3">$370,683</td>
                <td className="text-right py-2.5 px-3 text-green-600 dark:text-green-400">—</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2.5 px-3 font-medium">6.50%</td>
                <td className="text-right py-2.5 px-3">$2,023</td>
                <td className="text-right py-2.5 px-3">$408,142</td>
                <td className="text-right py-2.5 px-3 text-red-600 dark:text-red-400">+$104</td>
              </tr>
              <tr className="hover:bg-muted/30 bg-muted/20">
                <td className="py-2.5 px-3 font-medium">7.00%</td>
                <td className="text-right py-2.5 px-3 font-semibold">$2,129</td>
                <td className="text-right py-2.5 px-3 font-semibold">$446,428</td>
                <td className="text-right py-2.5 px-3 text-red-600 dark:text-red-400">+$210</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">See it live:</p>
              <p className="text-sm text-muted-foreground">
                Drag the Interest Rate slider from 6% → 7%. Watch the monthly payment number flash 
                <span className="text-red-500 font-medium"> red</span> as it increases. The total interest 
                paid jumps by over <strong>$75,000</strong> — that's a nice car, or a year of college tuition.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">Loan Term (Years)</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most home buyers choose between a <strong className="text-foreground">30-year</strong> or 
          <strong className="text-foreground">15-year</strong> mortgage. Our calculator supports any term 
          from <strong>1 to 40 years</strong>, so you can experiment freely.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="text-lg font-bold text-foreground mb-1">30-Year Mortgage</div>
            <div className="text-2xl font-bold text-primary mb-2">$2,023<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <div className="text-sm text-muted-foreground">
              Total interest: <span className="font-semibold text-foreground">$408,142</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">✓ Lower monthly payment</div>
            <div className="text-xs text-muted-foreground">✗ Much more interest paid</div>
          </div>
          <div className="bg-card border-primary/30 border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-bold text-foreground">15-Year Mortgage</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Save big!</span>
            </div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">$2,789<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            <div className="text-sm text-muted-foreground">
              Total interest: <span className="font-semibold text-foreground">$181,989</span>
            </div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Save $226,153 in interest</div>
            <div className="text-xs text-muted-foreground">✗ $766/month higher payment</div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">💡 Key Insight</p>
          <p className="text-sm text-muted-foreground">
            A 15-year mortgage saves you over <strong>$226,000</strong> in interest on a $400k home at 6.5%, 
            but requires <strong>$766 more</strong> per month. If you can afford the higher payment, it's one of 
            the best financial moves you can make. Use our calculator to compare both side by side.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Location & Local Costs</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your monthly payment isn't just about the loan — property taxes, insurance, and HOA fees 
          can add <strong className="text-foreground">hundreds of dollars per month</strong>. 
          Our calculator includes all of these, with state-specific defaults.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">State Selector</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Pick your state from the dropdown, and the calculator automatically fills in:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground mb-1">0.40%</div>
            <div className="text-xs text-muted-foreground">Alabama property tax</div>
            <div className="text-xs text-green-600 dark:text-green-400">$133/mo on $400k home</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground mb-1">1.80%</div>
            <div className="text-xs text-muted-foreground">Texas property tax</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">$600/mo on $400k home</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground mb-1">2.40%</div>
            <div className="text-xs text-muted-foreground">New Jersey property tax</div>
            <div className="text-xs text-red-600 dark:text-red-400">$800/mo on $400k home</div>
          </div>
        </div>

        <div className="bg-muted/30 border border-border rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Try this comparison:</p>
              <p className="text-sm text-muted-foreground">
                Select <strong>Alabama</strong> → monthly payment is about <strong>$2,490</strong>.<br />
                Switch to <strong>New Jersey</strong> → it jumps to <strong>$3,157</strong>.<br />
                That's a <strong>$667/month</strong> difference — just because of location!
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">Fine-Tuning: Insurance, HOA & PMI</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Below the state selector, you can manually adjust property tax rate, insurance, and HOA fees. 
          You'll also see PMI appear automatically when your down payment is below 20%. 
          All of these feed into the <strong className="text-foreground">Payment Breakdown donut chart</strong>, 
          so you can see exactly where every dollar goes.
        </p>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Reading Your Monthly Breakdown</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Once you've dialed in your inputs, the right panel shows your <strong className="text-foreground">Estimated Monthly Payment</strong> 
          in large type. Here's what each component means:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
            <div className="w-3 h-3 rounded-full bg-[#1E3A8A] shrink-0 mt-1.5" />
            <div>
              <div className="font-semibold text-foreground">Principal & Interest</div>
              <div className="text-sm text-muted-foreground">
                The core of your payment. Principal pays down what you borrowed; interest is the bank's 
                fee. In the first year of a 30-year loan, roughly <strong>75%</strong> of this portion 
                goes to interest alone.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
            <div>
              <div className="font-semibold text-foreground">Property Tax</div>
              <div className="text-sm text-muted-foreground">
                Paid to your local government, usually held in an escrow account by your lender. 
                Varies dramatically by state and county.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
            <div className="w-3 h-3 rounded-full bg-[#60A5FA] shrink-0 mt-1.5" />
            <div>
              <div className="font-semibold text-foreground">Home Insurance</div>
              <div className="text-sm text-muted-foreground">
                Required by your lender. Covers damage to your home from fire, storms, theft, etc. 
                Typically <strong>$100–$300/month</strong> depending on location.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
            <div className="w-3 h-3 rounded-full bg-[#93C5FD] shrink-0 mt-1.5" />
            <div>
              <div className="font-semibold text-foreground">HOA Fees</div>
              <div className="text-sm text-muted-foreground">
                Homeowners Association fees for shared amenities and maintenance. Can range from 
                <strong>$0 to $500+/month</strong>. Leave at $0 if you're buying a single-family home.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-4">
            <div className="w-3 h-3 rounded-full bg-[#BFDBFE] shrink-0 mt-1.5" />
            <div className="text-foreground font-semibold">
              PMI <span className="text-xs font-normal text-muted-foreground">(if applicable)</span>
              <div className="text-sm font-normal text-muted-foreground mt-0.5">
                Private Mortgage Insurance — shown in <span className="text-red-500 font-medium">red</span> 
                when your down payment is under 20%. This is pure cost with no benefit to you. 
                Try to avoid it if possible!
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 border border-border rounded-xl p-5">
          <div className="flex items-start gap-3">
            <PieChart className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">Visualize with the Donut Chart</p>
              <p className="text-sm text-muted-foreground">
                The Payment Breakdown donut chart shows each component as a proportional slice. 
                Hover over any slice to see its dollar value. It's a powerful way to quickly 
                understand <strong>where your money is really going</strong> each month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Understanding the Amortization Schedule</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The amortization chart is one of the most eye-opening features of our calculator. 
          It shows you the <strong className="text-foreground">entire life of your loan</strong> — 
          every year's principal paid, interest paid, and remaining balance.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-3">The Stacked Area Chart</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The blue gradient areas show two things layered together:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li>
            <strong className="text-foreground">Dark blue (bottom layer):</strong> Cumulative principal paid — 
            how much of the actual home you've earned ownership of.
          </li>
          <li>
            <strong className="text-foreground">Light blue (top layer):</strong> Cumulative interest paid — 
            the total cost of borrowing.
          </li>
        </ul>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Calendar className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 dark:text-red-300 mb-1">The shocking truth about year 1</p>
              <p className="text-sm text-red-700 dark:text-red-400">
                On a $400,000 home with 20% down at 6.5% over 30 years: In year one, you'll pay about 
                <strong>$20,700 in interest</strong> but only <strong>$3,600 toward principal</strong>. 
                That's nearly <strong>85% pure interest</strong>. Click "View Details" under the chart 
                to see this year-by-year breakdown in the amortization table.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3">The Amortization Table</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Click <strong className="text-foreground">"View Details"</strong> below the chart to expand 
          the full amortization table. Every row shows a year of your loan:
        </p>

        <div className="overflow-x-auto mb-6 border border-border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Year</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Principal Paid</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Interest Paid</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">% to Interest</th>
                <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Remaining Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">1</td>
                <td className="text-right py-2 px-3">$3,567</td>
                <td className="text-right py-2 px-3">$20,708</td>
                <td className="text-right py-2 px-3 text-red-500 font-medium">85%</td>
                <td className="text-right py-2 px-3 font-medium">$316,433</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">5</td>
                <td className="text-right py-2 px-3">$22,041</td>
                <td className="text-right py-2 px-3">$101,049</td>
                <td className="text-right py-2 px-3 text-red-400">82%</td>
                <td className="text-right py-2 px-3 font-medium">$297,959</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">10</td>
                <td className="text-right py-2 px-3">$48,853</td>
                <td className="text-right py-2 px-3">$196,724</td>
                <td className="text-right py-2 px-3 text-amber-500">80%</td>
                <td className="text-right py-2 px-3 font-medium">$271,147</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">15</td>
                <td className="text-right py-2 px-3">$80,311</td>
                <td className="text-right py-2 px-3">$283,148</td>
                <td className="text-right py-2 px-3 text-amber-400">78%</td>
                <td className="text-right py-2 px-3 font-medium">$239,689</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">20</td>
                <td className="text-right py-2 px-3">$117,767</td>
                <td className="text-right py-2 px-3">$354,751</td>
                <td className="text-right py-2 px-3 text-green-500">75%</td>
                <td className="text-right py-2 px-3 font-medium">$202,233</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-2 px-3 font-medium">25</td>
                <td className="text-right py-2 px-3">$163,699</td>
                <td className="text-right py-2 px-3">$404,733</td>
                <td className="text-right py-2 px-3 text-green-500">71%</td>
                <td className="text-right py-2 px-3 font-medium">$156,301</td>
              </tr>
              <tr className="hover:bg-muted/30 bg-muted/20">
                <td className="py-2 px-3 font-medium">30</td>
                <td className="text-right py-2 px-3 font-semibold">$320,000</td>
                <td className="text-right py-2 px-3 font-semibold">$408,142</td>
                <td className="text-right py-2 px-3 text-green-500 font-semibold">56%</td>
                <td className="text-right py-2 px-3 font-semibold">$0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Notice how the <strong className="text-foreground">% to Interest</strong> column starts at 85% 
          in year 1 and gradually declines. By year 30, you've paid <strong>$408,142 in interest</strong> 
          on top of your $320,000 loan — that's more in interest than the original loan amount!
        </p>
      </section>

      {/* Section 7 */}
      <section id="section-7" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Putting It All Together: Real-World Scenario</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's walk through a complete example so you can follow along in the calculator:
        </p>

        <div className="bg-card border-2 border-primary/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">🏠 Sarah's First Home — A Step-by-Step Walkthrough</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</div>
              <div>
                <p className="font-semibold text-foreground">Set Home Price to <strong>$350,000</strong></p>
                <p className="text-sm text-muted-foreground">Sarah is looking at a 3-bedroom home in Texas. She types 350,000 into the input field.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</div>
              <div>
                <p className="font-semibold text-foreground">Set Down Payment to <strong>$70,000 (20%)</strong></p>
                <p className="text-sm text-muted-foreground">She's saved $70k. Notice PMI stays at $0 — that's the 20% benefit!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</div>
              <div>
                <p className="font-semibold text-foreground">Set Interest Rate to <strong>6.75%</strong></p>
                <p className="text-sm text-muted-foreground">Based on today's rates for her credit profile. She drags the slider to 6.75.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">4</div>
              <div>
                <p className="font-semibold text-foreground">Set Loan Term to <strong>30 years</strong></p>
                <p className="text-sm text-muted-foreground">She wants the lowest monthly payment initially—drag to 30.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">5</div>
              <div>
                <p className="font-semibold text-foreground">Select <strong>Texas</strong> from the state dropdown</p>
                <p className="text-sm text-muted-foreground">Property tax rate auto-fills to ~1.8%, insurance to $2,500/yr.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">6</div>
              <div>
                <p className="font-semibold text-foreground">📊 Read the Results</p>
                <p className="text-sm text-muted-foreground">
                  Monthly payment: <strong>$2,603</strong> 
                  (Principal & Interest: $1,816 + Property Tax: $525 + Insurance: $208 + HOA: $53)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-300 mb-1">Sarah's alternative: What if she chooses 15 years?</p>
              <p className="text-sm text-green-700 dark:text-green-400">
                If Sarah changes the loan term from 30→15 years, her payment jumps to <strong>$2,571/mo</strong> 
                (just $235 more for P&I), but her total interest plummets from <strong>$353,625 to $166,220</strong> — 
                saving <strong>$187,405</strong>. That's the power of understanding your amortization!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-10 mt-12">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to calculate your monthly payment?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Open our interactive mortgage calculator and start experimenting with different scenarios. 
            No sign-up required, completely free.
          </p>
          <Link 
            to="/mortgage-calculator" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Open Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/amortization-schedule" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Next article →</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              What is an Amortization Schedule?
            </div>
          </Link>
          <Link to="/blog/biweekly-payments" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              Bi-Weekly Mortgage Payments: Are They Worth It?
            </div>
          </Link>
          <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Tools</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              Browse All 10 Calculators →
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
