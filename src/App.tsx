import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import CalculatorIndex from '@/src/components/calculators/CalculatorIndex';
import HowToUseCalculator from '@/src/components/blog/HowToUseCalculator';
import AmortizationSchedule from '@/src/components/blog/AmortizationSchedule';
import BiWeeklyPayments from '@/src/components/blog/BiWeeklyPayments';
import WhatIsPmi from '@/src/components/blog/WhatIsPmi';
import ThirtyVsFifteenYear from '@/src/components/blog/ThirtyVsFifteenYear';
import HowMuchHouseCanIAfford from '@/src/components/blog/HowMuchHouseCanIAfford';
import MonthlyPaymentBreakdown from '@/src/components/blog/MonthlyPaymentBreakdown';
import IncomeNeeded from '@/src/components/blog/IncomeNeeded';
import WhyMostlyInterest from '@/src/components/blog/WhyMostlyInterest';
import PayOffEarly from '@/src/components/blog/PayOffEarly';
import FhaVsConventional from '@/src/components/blog/FhaVsConventional';
import FhaVsConventional from '@/src/components/blog/FhaVsConventional';
import { Home, Calculator as CalculatorIcon, BookOpen, Info, ShieldAlert, Menu, X } from 'lucide-react';


function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Calculator', path: '/calculator', icon: CalculatorIcon },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between w-full sm:w-auto">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                M
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">MortgagePro</span>
            </div>
            
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          
          <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? 'border-primary text-foreground' 
                      : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden border-t">
          <div className="pt-2 pb-3 space-y-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-primary/10 border-l-4 border-primary text-primary' 
                      : 'border-l-4 border-transparent text-muted-foreground hover:bg-muted hover:border-border hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ShieldAlert className="w-5 h-5" />
            <span className="text-sm">Not intended to provide financial advice. Estimates only.</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// Home Page — rich content for SEO and user engagement
// ============================================================
function HomePage() {
  const calculatorTools = [
    {
      icon: "🏠",
      title: "Standard Mortgage Calculator",
      desc: "Calculate your monthly payment with real-time sliders for home price, down payment, interest rate, and loan term. See the full amortization schedule and your PITI breakdown at a glance.",
      link: "/calculator?tab=standard",
    },
    {
      icon: "📅",
      title: "Bi-Weekly vs Monthly",
      desc: "Compare standard monthly payments against an accelerated bi-weekly schedule. See how much interest you can save and how many years you can shave off your loan.",
      link: "/calculator?tab=biweekly",
    },
    {
      icon: "🏡",
      title: "Rent vs Buy Analyzer",
      desc: "Is renting or buying the smarter financial move for you? This tool factors in home appreciation, rent inflation, property taxes, and closing costs to find your breakeven year.",
      link: "/calculator?tab=rentvsbuy",
    },
    {
      icon: "🔥",
      title: "FIRE Impact Calculator",
      desc: "Thinking about Financial Independence or Early Retirement? See how buying a home could delay — or accelerate — your FIRE timeline.",
      link: "/calculator?tab=fire",
    },
  ];

  const blogPosts = [
    // Pinned: PITI article always first
    {
      title: "How Much Will My Monthly Mortgage Payment Be? (PITI Explained)",
      path: "/blog/monthly-payment-breakdown",
      date: "June 5, 2026",
    },
    // Sorted by date descending
    {
      title: "FHA vs Conventional Loan: Which One Actually Costs You Less?",
      path: "/blog/fha-vs-conventional",
      date: "June 19, 2026",
    },
    {
      title: "Should I Pay Off My Mortgage Early?",
      path: "/blog/pay-off-early",
      date: "June 10, 2026",
    },
    {
      title: "Why Do Mortgage Payments Go Mostly to Interest?",
      path: "/blog/why-mostly-interest",
      date: "June 9, 2026",
    },
    {
      title: "How Much Income Do I Need for a $500,000 House?",
      path: "/blog/income-needed",
      date: "June 5, 2026",
    },
    {
      title: "30-Year vs 15-Year Mortgage: The Decision That Shapes Your Future",
      path: "/blog/30-vs-15-year",
      date: "May 24, 2026",
    },
    {
      title: "How Much House Can I Afford? A Step-by-Step Guide",
      path: "/blog/how-much-house-can-i-afford",
      date: "May 23, 2026",
    },
    {
      title: "PMI in Mortgages: What It Is and How to Get Rid of It",
      path: "/blog/what-is-pmi",
      date: "May 22, 2026",
    },
    {
      title: "Bi-Weekly Mortgage Payments: Are They Worth It?",
      path: "/blog/biweekly-payments",
      date: "May 20, 2026",
    },
  ];

  const faqs = [
    {
      q: "How is my monthly mortgage payment calculated?",
      a: "Your monthly payment (often called PITI) has four components: Principal (the loan amount you borrowed), Interest (the cost of borrowing), Taxes (property taxes), and Insurance (homeowner's insurance). Our calculator uses the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is the loan amount, r is the monthly interest rate, and n is the number of payments.",
    },
    {
      q: "What credit score do I need to buy a house?",
      a: "Minimum credit score requirements vary by loan type. Conventional loans typically require 620+, FHA loans allow 580 (or 500 with 10% down), and VA loans have no official minimum but most lenders look for 620+. A higher score can qualify you for a lower interest rate, which can save tens of thousands of dollars over the life of the loan.",
    },
    {
      q: "How much should I put down on a house?",
      a: "While 20% down eliminates Private Mortgage Insurance (PMI), many first-time buyers put down much less. FHA loans require as little as 3.5% down, and conventional loans can go as low as 3–5%. However, a smaller down payment means higher monthly payments and the added cost of PMI — typically 0.5% to 1% of the loan amount annually.",
    },
    {
      q: "What is PMI and when can I cancel it?",
      a: "PMI (Private Mortgage Insurance) protects the lender, not you. It's required when your down payment is less than 20% of the home's value. You can request cancellation once your loan balance reaches 80% of the home's original value, and it must be automatically canceled at 78%. Making extra principal payments can help you reach this threshold faster.",
    },
    {
      q: "Should I choose a 30-year or 15-year mortgage?",
      a: "A 30-year mortgage offers lower monthly payments but you'll pay significantly more interest over time. A 15-year mortgage typically has a lower interest rate and cuts your total interest roughly in half, but the monthly payment is much higher. The right choice depends on your cash flow, other financial goals, and how long you plan to stay in the home.",
    },
    {
      q: "What is an amortization schedule?",
      a: "An amortization schedule breaks down every mortgage payment into principal and interest. In the early years, the vast majority of your payment goes toward interest — often 80% or more. Over time, this reverses. Understanding your amortization schedule can help you decide whether making extra payments, refinancing, or choosing a shorter term makes sense for you.",
    },
    {
      q: "Are bi-weekly mortgage payments worth it?",
      a: "Making half your monthly payment every two weeks results in 26 half-payments per year — the equivalent of 13 full monthly payments instead of 12. This extra payment per year can shave 4–5 years off a 30-year loan and save tens of thousands of dollars in interest. Before setting this up, confirm your lender applies payments correctly and check for any fees.",
    },
    {
      q: "How much house can I afford based on my income?",
      a: "Lenders typically follow the 28/36 rule: your total monthly housing costs should not exceed 28% of your gross monthly income, and your total debt payments (housing + car loans + student loans + credit cards) should not exceed 36%. For example, with a $100,000 annual income ($8,333/month), your housing budget would be about $2,333/month maximum.",
    },
    {
      q: "What's included in closing costs?",
      a: "Closing costs typically range from 2% to 5% of the home's purchase price. They include loan origination fees, appraisal, title search and insurance, attorney fees, prepaid property taxes, homeowners insurance, and escrow deposits. Some costs are negotiable, and you may be able to roll them into the loan or negotiate for the seller to pay a portion.",
    },
    {
      q: "How does my interest rate affect my monthly payment?",
      a: "Even a small change in interest rate can have a big impact. On a $400,000 loan, a 6% rate gives a monthly P&I payment of about $2,398, while a 7% rate increases it to $2,661 — that's $263 more per month and nearly $95,000 more in interest over 30 years. Use our interactive calculator to see how different rates affect your specific scenario.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">

      {/* ========== HERO ========== */}
      <section className="flex flex-col items-center text-center pt-8 md:pt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Free Mortgage Calculator & Home Financing Guide
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Professional-grade calculators, deep educational content, and transparent data — built for first-time buyers, 
          refinancers, and FIRE enthusiasts navigating the US real estate market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/calculator"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors text-lg"
          >
            <CalculatorIcon className="w-5 h-5 mr-2" />
            Open Mortgage Calculator
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors text-lg border border-border"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Read Guides & Articles
          </Link>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">Why Use MortgagePro?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Real-Time Calculators</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unlike static calculators that give you a single number, our tools respond instantly as you adjust sliders. 
              Drag the home price, down payment, or interest rate to see your monthly payment change in real time — 
              with visual charts that show exactly where every dollar goes.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Full Transparency, No Upsells</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We don't ask for your email, phone number, or any personal data. All calculations happen locally in your 
              browser. No ads disguised as "lender recommendations." No sales calls. Just the math — clear, accurate, 
              and honest.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">State-Specific Accuracy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Property taxes and insurance costs vary wildly across the US. Our calculators include real state-level data 
              — from California's 0.76% effective tax rate to New Jersey's 2.4% — so your estimates are grounded in 
              the reality of your local market.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Deep Educational Content</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every article we publish is researched and cross-verified against authoritative sources 
              (CFPB, Investopedia, IRS guidelines) to ensure accuracy. We don't just give you a number — 
              we help you understand the <em>why</em> behind it, so you can make informed decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ========== POPULAR CALCULATORS ========== */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 text-center">Popular Calculators</h2>
        <p className="text-muted-foreground text-center mb-8">
          Choose the tool that matches your situation — or use them all to build a complete picture.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {calculatorTools.map((tool, i) => (
            <Link
              key={i}
              to={tool.link}
              className="group bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{tool.icon}</div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== LATEST ARTICLES ========== */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Latest Articles</h2>
            <p className="text-muted-foreground">In-depth guides and strategies published by our editorial process.</p>
          </div>
          <Link to="/blog" className="text-sm text-primary hover:underline font-medium whitespace-nowrap">
            View all articles →
          </Link>
        </div>
        <div className="space-y-3">
          {blogPosts.map((post, i) => (
            <Link
              key={i}
              to={post.path}
              className="group flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 hover:shadow-sm hover:border-primary/30 transition-all duration-200"
            >
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                {post.title}
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{post.date}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Answers to the most common questions about mortgages, payments, and our tools.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-card border border-border rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-foreground font-medium hover:bg-muted/50 transition-colors list-none">
                <span className="pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}


function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">About MortgagePro</h1>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            MortgagePro is your independent guide to smarter home financing. Founded by <strong>Chong Song</strong>, a passionate software developer and personal finance enthusiast, this platform was born out of a simple frustration: most mortgage calculators are confusing, opaque, or loaded with hidden sales pitches.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
          <p>
            We believe that understanding the math behind your mortgage shouldn't require a finance degree — or a call to a salesperson. Our goal is to build the most intuitive and transparent mortgage tools on the web, empowering you to run your own numbers and gain the confidence to make one of life's biggest financial decisions.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Meet the Founder</h2>
          <p>
            Hi, I'm <strong>Chong Song</strong>. My background is in software engineering, but my passion lies in dissecting the financial structures that shape our lives. I built MortgagePro after spending weeks analyzing amortization tables for my own home purchase and realizing how much hidden information exists in a standard loan agreement.
          </p>
          <p>
            I'm dedicated to maintaining this platform as an independent, ad-supported resource, ensuring all tools remain free for everyone.
          </p>
          <h2 className="text-2xl font-semibold text-foreground mt-8">Our Editorial Process</h2>
          <p>
            Accuracy matters, especially when it comes to your money. Every article is researched, written, and reviewed through the MortgagePro editorial process — grounded in publicly available financial data and authoritative sources including Investopedia, the Consumer Financial Protection Bureau (CFPB), and official IRS guidelines. Each piece undergoes rigorous cross-verification before publication to ensure the information you receive is reliable, clear, and up to date.
          </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">What We Offer</h2>
        <p className="text-muted-foreground">
          All of our tools are free to use and run directly in your browser — no data is ever stored or shared.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interactive Mortgage Calculator</strong> — Real-time monthly payment estimates with adjustable sliders for home price, down payment, interest rate, and loan term.</li>
          <li><strong>Bi-Weekly vs Monthly Comparison</strong> — See exactly how much you can save by switching to bi-weekly payments.</li>
          <li><strong>Rent vs Buy Analysis</strong> — Data-driven comparison to determine whether renting or buying makes more financial sense in your situation.</li>
          <li><strong>FIRE Impact Calculator</strong> — Understand how buying a home affects your path to Financial Independence / Retire Early.</li>
          <li><strong>State-Specific Data</strong> — Location-aware property tax rates and insurance estimates for more accurate calculations.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Editorial Independence & Disclaimer</h2>
        <p>
          All tools and content are built with editorial independence as our core principle. We do not accept payment to feature specific lenders or products.
        </p>
        <p>
          <strong>Important Disclaimer:</strong> MortgagePro is an educational platform for informational purposes only. We do not provide financial, investment, or legal advice. All financial decisions should be made in consultation with a qualified professional. Please review our full <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/disclaimer" className="text-primary hover:underline">Terms of Use</Link>.
        </p>
        <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
        <p>
          I read every email. For suggestions, feedback, or corrections, reach out to <strong>hello@mortgagepro.io</strong>.
        </p>
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p><strong>Last updated:</strong> May 11, 2026</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">1. Information We Collect</h2>
        <p>MortgagePro does not require user registration and does not collect personal information such as your name, email address, or phone number.</p>
        <p>We may collect anonymous usage data through:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cookies and similar tracking technologies (e.g., Google Analytics, AdSense cookies)</li>
          <li>Anonymous aggregate data about page views and user interactions</li>
        </ul>

        <h3 className="text-lg font-semibold text-foreground mt-4">Important Note on Financial Data</h3>
        <p className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-blue-800 dark:text-blue-300">
          Our mortgage calculators run entirely in your browser. We do not store, transmit, or have access to any financial figures you enter (loan amounts, interest rates, down payments, etc.).
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">2. How We Use Your Information</h2>
        <p>Any data collected is used exclusively for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Improving the user experience and website functionality</li>
          <li>Serving relevant advertisements via Google AdSense</li>
          <li>Analyzing traffic patterns to enhance content</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-6">3. Third-Party Services</h2>
        <p>We use the following third-party services that may collect data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Google AdSense</strong> — Serves personalized ads based on your browsing history. See <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google's Advertising Privacy Policy</a>.</li>
          <li><strong>Cloudflare</strong> — Provides CDN and security services.</li>
          <li><strong>GitHub Pages</strong> — Hosting provider.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-6">4. Cookies</h2>
        <p>You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain website features.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">5. Do Not Track Signals</h2>
        <p>Our website does not respond to Do Not Track (DNT) signals. However, you can control the use of cookies through your browser settings as described above.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">6. Children's Privacy</h2>
        <p>MortgagePro is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">7. Data Security</h2>
        <p>We implement industry-standard security measures to protect any data collected. However, no method of transmission over the Internet is 100% secure.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">9. Contact</h2>
        <p>For questions about this privacy policy, contact us at <strong>hello@mortgagepro.io</strong>.</p>
      </div>
    </div>
  );
}

function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Disclaimer</h1>
      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p><strong>Last updated:</strong> May 11, 2026</p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Not Financial Advice</h2>
        <p>
          The calculators, tools, and content provided on MortgagePro are for <strong>informational and educational purposes only</strong>. They do not constitute financial, legal, or real estate advice. You should not rely solely on the information provided by this website when making financial decisions.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">No Professional-Client Relationship</h2>
        <p>
          Use of this website does not create a fiduciary, advisor-client, or broker-client relationship between you and MortgagePro or its operators.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Accuracy of Calculations</h2>
        <p>
          While we strive for accuracy, mortgage calculations involve complex variables and assumptions. The results generated by our calculators are <strong>estimates only</strong> and may differ from the actual figures provided by lenders, tax authorities, and insurance companies.
        </p>
        <p>
          We strongly recommend consulting with a qualified mortgage professional, tax advisor, or financial planner for personalized advice tailored to your specific circumstances.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Tax Advice Disclaimer</h2>
        <p>
          Any information related to taxes (including property tax estimates) is provided for general informational purposes only. It should not be construed as tax advice. Consult a qualified tax professional regarding your individual tax situation.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">No Guarantees</h2>
        <p>
          MortgagePro makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">External Links</h2>
        <p>
          This website may contain links to external websites. We have no control over the content, privacy policies, or practices of these third-party sites and assume no responsibility for them.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Liability</h2>
        <p>
          In no event will MortgagePro be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Changes</h2>
        <p>
          We reserve the right to update or change this disclaimer at any time. Changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-6">Contact</h2>
        <p>
          For questions about this disclaimer, contact us at <strong>hello@mortgagepro.io</strong>.
        </p>
      </div>
    </div>
  );
}

function BlogStub() {
  const posts = [
    { 
      title: "FHA vs Conventional Loan: Which One Actually Costs You Less?", 
      path: "/blog/fha-vs-conventional",
      category: "Comparisons",
      date: "June 19, 2026",
      readTime: "11 min read",
      description: "My cousin Maria bought her first house with an FHA loan because the bank said it was easier to qualify for. Two years later, she learned why that 'easy' loan could cost her $30K more. Here's what she wishes someone had explained on day one."
    },
    {
      title: "FHA vs Conventional Loan: Which One Actually Costs You Less?",
      path: "/blog/fha-vs-conventional",
      category: "Comparisons",
      date: "June 19, 2026",
      readTime: "11 min read",
      description: "FHA loans are easier to qualify for, but my cousin Maria learned the hard way why 'easier' can cost you thirty thousand dollars more. Here's the real breakdown."
    },
    { 
      title: "How to Use Our Mortgage Calculator to Plan Your Monthly Payment", 
      path: "/blog/how-to-use-calculator",
      category: "Guides",
      date: "May 10, 2026",
      readTime: "5 min read",
      description: "A step-by-step guide to calculating your optimal house budget using our interactive tools."
    },
    {
      title: "Amortization Schedule: The Hidden Truth About Your Mortgage Payments",
      path: "/blog/amortization-schedule",
      category: "Education",
      date: "May 15, 2026",
      readTime: "10 min read",
      description: "Discover why 86% of your first mortgage payment goes to interest and how understanding amortization can save you thousands."
    },
    {
      title: "Bi-Weekly Mortgage Payments: Are They Worth It?",
      path: "/blog/biweekly-payments",
      category: "Strategies",
      date: "May 20, 2026",
      readTime: "9 min read",
      description: "An honest look at the math, the gotchas, and whether accelerating your mortgage makes sense for your financial situation."
    },
    {
      title: "PMI in Mortgages: What It Is and How to Get Rid of It",
      path: "/blog/what-is-pmi",
      category: "Education",
      date: "May 22, 2026",
      readTime: "8 min read",
      description: "If you're putting down less than 20%, you're paying for something that doesn't protect you. Here's exactly how to cancel it."
    },
    {
      title: "30-Year vs 15-Year Mortgage: The Decision That Shapes Your Future",
      path: "/blog/30-vs-15-year",
      category: "Comparisons",
      date: "May 24, 2026",
      readTime: "10 min read",
      description: "The math favors one side clearly. But the right answer depends on five questions that have nothing to do with interest rates."
    },
    {
      title: "How Much House Can I Afford? A Step-by-Step Guide",
      path: "/blog/how-much-house-can-i-afford",
      category: "Education",
      date: "May 23, 2026",
      readTime: "12 min read",
      description: "Dave called me stressed out about whether he could afford a home. Here's the exact math lenders use and how to find your number."
    },
    {
      title: "How Much Will My Monthly Mortgage Payment Be? (PITI Explained)",
      path: "/blog/monthly-payment-breakdown",
      category: "Guides",
      date: "June 5, 2026",
      readTime: "9 min read",
      description: "Most first-time buyers only look at the loan amount and rate. Here's why your actual payment can be hundreds more — and how to calculate the real number before you shop."
    },
    {
      title: "How Much Income Do I Need for a $500,000 House?",
      path: "/blog/income-needed",
      category: "Education",
      date: "June 5, 2026",
      readTime: "8 min read",
      description: "The short answer is around $135,000 a year. The longer answer depends on your down payment, interest rate, other debts, and the expenses most people forget."
    },
    {
      title: "Why Do Mortgage Payments Go Mostly to Interest?",
      path: "/blog/why-mostly-interest",
      category: "Education",
      date: "June 9, 2026",
      readTime: "10 min read",
      description: "My friend Rob paid over $15,000 in his first six months. His loan balance dropped by less than $3,000. Here's how the math really works."
    },
    {
      title: "Should I Pay Off My Mortgage Early?",
      path: "/blog/pay-off-early",
      category: "Strategies",
      date: "June 10, 2026",
      readTime: "9 min read",
      description: "My aunt burned her mortgage statement in a fire pit. My financial advisor won't pay off his 2.75% rate. Two smart people, two different answers. Here's how to figure out yours."
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Guides': return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'Education': return 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300';
      case 'Strategies': return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';
      case 'Comparisons': return 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Financial Insights</h1>
        <p className="text-xl text-muted-foreground">Expert strategies and guides to navigate the US real estate market.</p>
      </div>
      
      <div className="grid gap-8">
        {posts.map((post, i) => (
          <article key={i} className="group relative flex flex-col items-start justify-between p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <time dateTime={post.date} className="text-muted-foreground">
                {post.date}
              </time>
              <span className={`relative z-10 rounded-full px-3 py-1 font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                {post.readTime}
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-8 text-foreground group-hover:text-primary transition-colors">
                <Link to={post.path}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
                {post.description}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-x-4">
               <div className="text-sm font-medium text-primary hover:underline flex items-center">
                 Read article
                 <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </div>
            </div>
          </article>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-8 border border-dashed border-border rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✍️</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">More Articles Coming Soon</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          The author is continuously working on in-depth guides, comparisons, and strategies. 
          Check back soon for new content!
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background font-sans">
        <Navigation />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<CalculatorIndex />} />
            <Route path="/blog" element={<BlogStub />} />
            <Route path="/blog/how-to-use-calculator" element={<HowToUseCalculator />} />
            <Route path="/blog/amortization-schedule" element={<AmortizationSchedule />} />
            <Route path="/blog/biweekly-payments" element={<BiWeeklyPayments />} />
            <Route path="/blog/what-is-pmi" element={<WhatIsPmi />} />
            <Route path="/blog/30-vs-15-year" element={<ThirtyVsFifteenYear />} />
            <Route path="/blog/how-much-house-can-i-afford" element={<HowMuchHouseCanIAfford />} />
            <Route path="/blog/monthly-payment-breakdown" element={<MonthlyPaymentBreakdown />} />
            <Route path="/blog/income-needed" element={<IncomeNeeded />} />
            <Route path="/blog/why-mostly-interest" element={<WhyMostlyInterest />} />
            <Route path="/blog/pay-off-early" element={<PayOffEarly />} />
            <Route path="/blog/fha-vs-conventional" element={<FhaVsConventional />} />
            <Route path="/blog/fha-vs-conventional" element={<FhaVsConventional />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<div className="text-center py-20 text-muted-foreground">Page under construction via the blueprint instructions.</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
