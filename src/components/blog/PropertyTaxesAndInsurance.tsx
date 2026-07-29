import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Home, Shield, LandPlot, BookOpen, Calculator, Info, Building, AlertTriangle } from 'lucide-react';
import { TipBox, WarningBox, InfoBox } from './BlogComponents';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function PropertyTaxesAndInsurance() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="How Much Are Property Taxes and Insurance on a Mortgage?"
        description="My brother-in-law Chris thought his mortgage payment was $2,528. Then the Loan Estimate arrived. Here's why property taxes and insurance add hundreds to your monthly payment — and how to estimate yours before you shop."
        datePublished="2026-07-29"
        url="https://www.mortgagepro.io/blog/property-taxes-and-insurance"
        faqs={[
          { q: 'What is PITI in a mortgage payment?', a: 'PITI stands for Principal, Interest, Taxes, and Insurance. These four components make up your total monthly mortgage payment. Many first-time buyers forget about the T and I when budgeting, which can lead to surprise costs of $400–$800 more per month than expected.' },
          { q: 'How much do property taxes add to a monthly mortgage payment?', a: 'Property taxes vary wildly by location. On a $400,000 home, monthly taxes can range from about $133 in Alabama (0.40% rate) to $800 in New Jersey (2.40% rate). Always check your local county tax rate before shopping for a home.' },
          { q: 'How does an escrow account work for taxes and insurance?', a: 'An escrow account is a holding account your lender uses to collect property taxes and insurance premiums. Each month, a portion of your payment goes into escrow. When the tax bill or insurance premium comes due, the lender pays it from that account on your behalf.' },
        ]}
      />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>July 29, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          How Much Are Property Taxes and Insurance on a Mortgage?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          My brother-in-law Chris thought he had his mortgage payment figured out to the dollar. Then his Loan Estimate showed up.
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
            ['chris-story', 'Chris\'s $600 Surprise'],
            ['pit-i', 'The Four Pieces of Your Payment'],
            ['property-taxes', 'Property Taxes: The Part That Changes Everything'],
            ['homeowners-insurance', 'Homeowners Insurance: The Other Monthly Cost'],
            ['escrow-account', 'The Escrow Account Explained'],
            ['budget', 'What This Means for Your Budget'],
            ['hoa-fees', 'One More Thing: HOA Fees'],
            ['short-version', 'The Short Version'],
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
      {/* Section 1 - Chris's Story */}
      {/* ============================================ */}
      <section id="chris-story" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Chris's $600 Surprise</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          My brother-in-law Chris thought he had his mortgage payment figured out to the dollar. He'd found a $400,000 house, plugged the numbers into a calculator, and arrived at $2,528 a month for principal and interest. He and his wife looked at their budget and decided it was tight but doable.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Then his loan officer sent over the Loan Estimate. The actual monthly payment wasn't $2,528. It was over $3,100.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Chris called me, confused and a little annoyed. "Did I do the math wrong? Is the bank adding hidden fees?"
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Neither. He'd done the principal and interest math correctly. What he'd forgotten—like a lot of first-time buyers—is that the bank collects more than just loan payments. They also collect your property taxes and your homeowners insurance. Every month. And those two things added nearly $600 to his payment.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          This is the single most common "surprise" in the mortgage process. And it's completely avoidable if you know what to expect. Let's walk through it so you don't end up like Chris.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 2 - PITI */}
      {/* ============================================ */}
      <section id="pit-i" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Four Pieces of Your Payment</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Most mortgage payments are actually four payments bundled into one. The industry calls it <strong>PITI</strong>. Not the most exciting acronym, but it's worth understanding because each piece behaves differently.
        </p>

        <div className="grid gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-700 dark:text-blue-300">P</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Principal</h3>
                <p className="text-sm text-muted-foreground">This is the money that actually reduces your loan balance. Every month, a small portion of your payment chips away at what you owe.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-amber-700 dark:text-amber-300">I</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Interest</h3>
                <p className="text-sm text-muted-foreground">What the bank charges you for lending the money. In the early years of a mortgage, interest takes the biggest bite — often 70–80% of your payment.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-green-700 dark:text-green-300">T</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Taxes</h3>
                <p className="text-sm text-muted-foreground">Your local government charges property taxes based on your home's assessed value. The bank collects a portion every month and holds it in escrow.</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-red-700 dark:text-red-300">I</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Insurance</h3>
                <p className="text-sm text-muted-foreground">Homeowners insurance protects the property from fire, storms, theft, and other damage. Your lender requires it, and they collect the premiums through your monthly payment.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          The first two—principal and interest—are what you see when you type numbers into a basic mortgage calculator. The last two—taxes and insurance—are what show up later and surprise people like Chris.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          The{' '}
          <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-piti-en-152/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            Consumer Financial Protection Bureau (CFPB) explains PITI in detail here
          </a>
          , and it's worth a read if you want the official explanation. But the short version is: if you only budget for principal and interest, you're probably off by hundreds of dollars a month.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 3 - Property Taxes */}
      {/* ============================================ */}
      <section id="property-taxes" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Property Taxes: The Part That Changes Everything</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Here's the thing about property taxes that most first-time buyers don't realize: they vary wildly depending on where you live. Not by a little. By a lot.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The same $400,000 house could have an annual property tax bill of <strong>$1,600</strong> in one county and <strong>$9,600</strong> in another. That's an $8,000 difference every year — over $650 a month. If you're shopping across county lines or considering a move to a different state, this alone can determine whether a home is affordable.
        </p>

        <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-4 font-semibold text-foreground">State</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Effective Tax Rate</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Tax on $400k Home</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Per Month</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">New Jersey</td>
                <td className="text-right py-3 px-4">2.40%</td>
                <td className="text-right py-3 px-4 text-red-500 font-medium">$9,600</td>
                <td className="text-right py-3 px-4">$800</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Illinois</td>
                <td className="text-right py-3 px-4">1.95%</td>
                <td className="text-right py-3 px-4 text-red-500 font-medium">$7,800</td>
                <td className="text-right py-3 px-4">$650</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">Texas</td>
                <td className="text-right py-3 px-4">1.60%</td>
                <td className="text-right py-3 px-4 text-red-500 font-medium">$6,400</td>
                <td className="text-right py-3 px-4">$533</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">California</td>
                <td className="text-right py-3 px-4">0.76%</td>
                <td className="text-right py-3 px-4">$3,040</td>
                <td className="text-right py-3 px-4">$253</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Hawaii</td>
                <td className="text-right py-3 px-4">0.31%</td>
                <td className="text-right py-3 px-4">$1,240</td>
                <td className="text-right py-3 px-4">$103</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          Property taxes are set by your local government — your county, your city, your school district. They're based on your home's assessed value and your area's tax rate, usually expressed as a percentage. The{' '}
          <a href="https://taxfoundation.org/data/all/state/property-taxes-by-state-county/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            Tax Foundation publishes detailed property tax data by state and county
          </a>
          , which is a great resource for comparing rates before you buy.
        </p>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          A home in a district with a 1% tax rate will owe about $4,000 a year on a $400,000 house — about <strong>$333 a month</strong>. A home in a district with a 2.5% tax rate will owe about $10,000 a year on the same-priced house. That's <strong>$833 a month</strong>. Same house price, same loan, same interest rate — but $500 more per month just because of taxes.
        </p>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          Chris bought in a state with relatively high property taxes. His $400,000 home came with an annual tax bill of about $5,200 — roughly $433 a month. Combined with his homeowners insurance at $1,400 a year, his monthly payment jumped by over $550.
        </p>

        <InfoBox>
          <strong>How to check property taxes before you buy:</strong> Every county assessor's office publishes their tax rates online. Your real estate agent should be able to tell you what the current owner is paying. Zillow and Redfin also show tax history on their listing pages. Don't skip this step — it can change your budget by hundreds of dollars a month.
        </InfoBox>
      </section>

      {/* ============================================ */}
      {/* Section 4 - Homeowners Insurance */}
      {/* ============================================ */}
      <section id="homeowners-insurance" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Homeowners Insurance: The Other Monthly Cost</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Insurance costs also vary by location, sometimes dramatically. A home in a wildfire-prone area of California or a hurricane zone in Florida will cost much more to insure than a similar home in a low-risk area in Ohio or Michigan.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          But even in normal markets, insurance is a meaningful monthly expense. On a $400,000 home, a typical annual premium might run <strong>$1,200 to $2,000</strong> — $100 to $170 a month. Older homes, homes with outdated electrical or plumbing, and homes in flood zones all push that number higher. According to the{' '}
          <a href="https://www.iii.org/fact-statistic/facts-statistics-homeowners-and-renters-insurance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            Insurance Information Institute
          </a>
          , the national average premium in 2024 was about $1,400 annually, but that number can double depending on where you live.
        </p>

        <TipBox>
          <strong>Flood insurance is separate.</strong> Standard homeowners insurance does not cover flood damage. If you live in or near a flood zone, you'll need a separate flood insurance policy — typically through FEMA's National Flood Insurance Program. Check your property's flood risk using{' '}
          <a href="https://www.fema.gov/flood-maps" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            FEMA's Flood Map Service Center
          </a>
          . Even properties outside high-risk zones can flood, so it's worth checking.
        </TipBox>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          The lender requires insurance because the house is their collateral. If it burns down and you walk away, they need to recover their money. So they make sure you have coverage, and they collect the premiums through your monthly payment.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          For a deeper look at what homeowners insurance covers and how to shop for it, the{' '}
          <a href="https://dfr.oregon.gov/help/outreach-education/Documents/publications/NAIC-Home-Insurance-Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            NAIC Home Insurance Guide
          </a>{' '}
          is a thorough (and free) resource. It walks through everything from policy types to how deductibles work.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 5 - Escrow Account */}
      {/* ============================================ */}
      <section id="escrow-account" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Escrow Account Explained</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Most lenders use something called an escrow account to handle taxes and insurance. Here's how it works.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Every month, along with your principal and interest, you send the lender extra money for taxes and insurance. They deposit it into an escrow account — basically a holding account. When your property tax bill comes due (usually once or twice a year), the lender pays it from that account. Same with your insurance premium.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          For you, this means you don't have to save up for a big tax bill. It's spread across 12 monthly payments. For the lender, it means they can be sure the taxes and insurance are actually getting paid. The{' '}
          <a href="https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/mortserv/mortgage-servicing-faqs/#escrow-accounts-general" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            CFPB has detailed information on how escrow accounts work
          </a>
          , including what happens if there's a shortage or overage.
        </p>

        <WarningBox>
          <strong>Your payment can go up over time.</strong> Even with a fixed-rate mortgage, your total monthly payment can creep up year after year. Property taxes tend to rise as your home's assessed value increases. Insurance premiums can increase too. That escrow cushion you have today might not be enough tomorrow — and your lender will adjust your payment to make up the difference. This is why buying at the very top of what a lender approves can be risky.
        </WarningBox>
      </section>

      {/* ============================================ */}
      {/* Section 6 - Budget */}
      {/* ============================================ */}
      <section id="budget" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">What This Means for Your Budget</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          When you're trying to figure out how much house you can afford, don't just plug a purchase price and rate into a calculator and call it a day. You need to add the taxes and insurance yourself — because the calculator doesn't know where you're buying.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            A Quick Way to Estimate
          </h3>
          <ol className="space-y-3 text-foreground">
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
              <span>Look up the property tax rate for the county you're shopping in. Multiply the home price by that rate. Divide by 12. That's your estimated monthly tax payment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
              <span>For insurance, assume <strong>$100 to $200 a month</strong> depending on your area and the home's condition. Get actual quotes from insurers before you commit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
              <span>Add both of those to your principal and interest estimate. Now you have a number that's much closer to reality.</span>
            </li>
          </ol>
        </div>

        <p className="text-lg leading-relaxed text-foreground mb-4">
          For Chris, that number was $3,100, not $2,528. It was still within his budget, but barely. And he was glad he found out before closing rather than after.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you want to skip the manual math, our{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline font-medium">Mortgage Calculator</Link>{' '}
          includes property tax and insurance estimates based on your location. You can also use our{' '}
          <Link to="/closing-cost-calculator" className="text-primary hover:underline font-medium">Closing Cost Calculator</Link>{' '}
          to see what you'll owe beyond the down payment, or the{' '}
          <Link to="/affordability-calculator" className="text-primary hover:underline font-medium">Affordability Calculator</Link>{' '}
          to figure out a safe budget based on your income.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 7 - HOA */}
      {/* ============================================ */}
      <section id="hoa-fees" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">One More Thing: HOA Fees</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          If you're buying a condo or a home in a planned community, there may also be HOA fees. These can run from <strong>$100 a month</strong> to over <strong>$500</strong>, depending on the building and what's included — think landscaping, pools, security, or elevator maintenance in high-rises.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          HOA fees don't go through your mortgage payment — you pay them separately — but they're still a monthly housing expense. A $2,500 mortgage payment plus a $400 HOA fee is really a <strong>$2,900 monthly housing cost</strong>. Lenders factor this in when they calculate your debt-to-income ratio, but it's easy to overlook when you're budgeting on your own.
        </p>
        <p className="text-lg leading-relaxed text-foreground">
          If you're looking at condos or townhomes, ask for the HOA's financial statements before you make an offer. A poorly managed HOA with inadequate reserves can hit you with special assessments — surprise bills for things like roof replacement or parking lot repairs that can run into the thousands.
        </p>
      </section>

      {/* ============================================ */}
      {/* Section 8 - Short Version + CTA */}
      {/* ============================================ */}
      <section id="short-version" className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">The Short Version</h2>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          Property taxes and insurance aren't optional extras. They're baked into the cost of owning a home, and your lender will collect them every month whether you remembered to budget for them or not.
        </p>
        <p className="text-lg leading-relaxed text-foreground mb-4">
          The difference between a basic principal-and-interest calculation and your true monthly cost can easily be <strong>$400, $600, even $800 a month</strong>. Knowing that before you start looking at houses will save you from falling in love with a home you can't actually afford.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center mt-8">
          <Calculator className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-3">Get Your Real Number</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Don't make Chris's mistake. Our mortgage calculator includes property taxes and insurance so you see the full picture — not just the principal and interest. Enter your numbers and see your true monthly cost in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mortgage-calculator"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Mortgage Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/affordability-calculator"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Affordability Calculator
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
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">How Much Will My Monthly Mortgage Payment Be? (PITI Explained)</div>
          </Link>
          <Link to="/blog/closing-costs-explained" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Related guide</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Closing Costs Explained: What You Need Beyond the Down Payment</div>
          </Link>
          <Link to="/mortgage-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Mortgage Calculator</div>
          </Link>
          <Link to="/affordability-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Calculator</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">Affordability Calculator</div>
          </Link>
        </div>
      </div>

      <AllCalculatorsGrid />
    </article>
  );
}
