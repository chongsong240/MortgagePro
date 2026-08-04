import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Percent, Calendar, Home, Building2, PieChart, TrendingUp, BookOpen, ChevronRight, BarChart3, AlertTriangle } from 'lucide-react';
import BlogSchema from './BlogSchema';
import AllCalculatorsGrid from './AllCalculatorsGrid';

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function AmortizationSchedule() {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <BlogSchema
        title="Amortization Schedule: The Hidden Truth About Your Mortgage Payments"
        description="In month one of a $400,000 mortgage at 6.5%, only $361 of your $2,528 payment goes to principal. My friend Rob discovered this after six months of payments had barely moved his balance. Here's why that happens and how to change it."
        datePublished="2026-05-15"
        url="https://www.mortgagepro.io/blog/amortization-schedule"
        faqs={[
          { q: 'What is an amortization schedule?', a: 'An amortization schedule is a table showing every mortgage payment broken down into principal and interest, along with the remaining balance after each payment.' },
          { q: 'Why do early mortgage payments go mostly to interest?', a: 'Interest is calculated on the remaining balance. In month one, the balance is at its maximum, so interest is highest. As the balance decreases, more of each payment goes toward principal.' },
          { q: 'When does the principal exceed interest in a mortgage payment?', a: 'On a 30-year mortgage, the crossover point where principal exceeds interest typically occurs around year 18-19.' },
        ]}
      />
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-full px-3 py-1 font-medium text-xs">
            Education
          </span>
          <span>May 15, 2026</span>
          <span>·</span>
          <span>10 min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
          Amortization Schedule: The Hidden Truth About Your Mortgage Payments
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Buying a home is one of the most exciting milestones in life. But when most people think about a mortgage, 
          they focus on one number: the monthly payment. What many don't realize is that, especially with a long-term 
          loan like a 30-year mortgage, the way that payment is split between your loan balance and the bank's profit 
          can be shocking. In the early years, the vast majority of your hard-earned money is paying the bank, not your house.
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
            1. What Is an Amortization Schedule?
          </a>
          <a href="#section-2" onClick={(e) => scrollToSection(e, 'section-2')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            2. How Principal and Interest Work
          </a>
          <a href="#section-3" onClick={(e) => scrollToSection(e, 'section-3')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            3. A Realistic 30-Year Mortgage Example
          </a>
          <a href="#section-4" onClick={(e) => scrollToSection(e, 'section-4')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            4. The First Payment Shock
          </a>
          <a href="#section-5" onClick={(e) => scrollToSection(e, 'section-5')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            5. The Brutal Truth About the First 5 Years
          </a>
          <a href="#section-6" onClick={(e) => scrollToSection(e, 'section-6')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            6. Why Do Banks Structure Loans This Way?
          </a>
          <a href="#section-7" onClick={(e) => scrollToSection(e, 'section-7')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            7. Visualizing the Shift Over Time
          </a>
          <a href="#section-8" onClick={(e) => scrollToSection(e, 'section-8')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            8. Extra Payments: Your Secret Weapon
          </a>
          <a href="#section-9" onClick={(e) => scrollToSection(e, 'section-9')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            9. 15-Year vs 30-Year Mortgage
          </a>
          <a href="#section-10" onClick={(e) => scrollToSection(e, 'section-10')} className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
            10. Why a Good Amortization Calculator Matters
          </a>
        </nav>
      </div>

      {/* Section 1: What Is an Amortization Schedule? */}
      <section id="section-1" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. What Is an Amortization Schedule?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          An amortization schedule is a detailed, payment-by-payment table that breaks down every single mortgage 
          payment over the entire life of the loan. For each payment, it shows:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">The total payment amount</strong> — exactly what you owe each month.</li>
          <li><strong className="text-foreground">How much goes to principal</strong> — reducing your actual debt and building home equity.</li>
          <li><strong className="text-foreground">How much goes to interest</strong> — the bank's profit for lending you the money.</li>
          <li><strong className="text-foreground">The remaining loan balance</strong> — what you still owe after each payment.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For a typical fixed-rate mortgage, the total monthly payment stays exactly the same from month one to 
          month 360. But behind the scenes, a silent battle between principal and interest is being waged — and 
          interest has a massive head start.
        </p>

        {/* Amortization Schedule Table Visual */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4 text-center">First 5 Payments: $400,000 @ 6.5%</p>
          <div className="w-full max-w-md mx-auto bg-white dark:bg-blue-950/50 rounded-lg p-4 shadow-sm">
            <div className="grid grid-cols-4 gap-1 text-xs font-semibold text-muted-foreground mb-2 pb-2 border-b border-gray-200">
              <span>Payment</span>
              <span className="text-right">Principal</span>
              <span className="text-right">Interest</span>
              <span className="text-right">Balance</span>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grid grid-cols-4 gap-1 text-xs py-1.5 border-b border-dashed border-gray-100">
                <span className="font-medium">#{i}</span>
                <span className="text-right text-green-600 font-mono font-medium">${(361 + i * 3).toFixed(0)}</span>
                <span className="text-right text-red-500 font-mono font-medium">${(2167 - i * 3).toFixed(0)}</span>
                <span className="text-right text-gray-700 font-mono">${(400000 - (361 + i * 3)).toLocaleString()}</span>
              </div>
            ))}
            <div className="mt-3 pt-2 text-center text-xs text-blue-600 dark:text-blue-400">
              Color key: <span className="text-green-600 font-medium">Green = Principal</span> · <span className="text-red-500 font-medium">Red = Interest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How Principal and Interest Work */}
      <section id="section-2" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">2. How Principal and Interest Work</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Think of your mortgage payment as having two major components:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Home className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-green-800 dark:text-green-300">Principal</span>
            </div>
            <p className="text-sm text-green-700 dark:text-green-400">
              This is the money that pays down the actual amount you borrowed — the part that builds your 
              equity (ownership) in the home. Every dollar of principal you pay is a dollar of wealth 
              you keep when you sell.
            </p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="font-semibold text-red-800 dark:text-red-300">Interest</span>
            </div>
            <p className="text-sm text-red-700 dark:text-red-400">
              This is the fee the bank charges you for lending you the money. Interest is calculated on your 
              remaining balance, so when your balance is huge at the beginning, your interest payment is also 
              huge. It declines slowly as you pay down the loan.
            </p>
          </div>
        </div>
        <div className="bg-muted/30 border border-border rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">🔑 The Key Formula</p>
          <p className="text-sm text-muted-foreground">
            <code className="bg-muted px-2 py-0.5 rounded text-xs">Interest Payment = Remaining Balance × (Annual Rate / 12)</code>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This single formula is why your first payments are almost all interest — the balance is at its maximum.
          </p>
        </div>
      </section>

      {/* Section 3: A Realistic 30-Year Mortgage Example */}
      <section id="section-3" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. A Realistic 30-Year Mortgage Example</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Let's ground this in a realistic scenario. A $400,000 loan at a 6.5% interest rate is a very common 
          setup in the US market.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">$400,000</div>
            <div className="text-sm text-muted-foreground">Loan Amount</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <Percent className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">6.5%</div>
            <div className="text-sm text-muted-foreground">Interest Rate</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-5 text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">30 Years</div>
            <div className="text-sm text-muted-foreground">Loan Term</div>
          </div>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center mb-6">
          <p className="text-sm text-muted-foreground mb-1">Your principal & interest payment would be approximately:</p>
          <p className="text-4xl font-bold text-primary">$2,528<span className="text-lg font-normal text-muted-foreground"> /month</span></p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          That number feels concrete. But here is where the reality hits.
        </p>
      </section>

      {/* Section 4: The First Payment Shock */}
      <section id="section-4" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. The First Payment Shock</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In your very first mortgage payment, the bank applies the 6.5% annual rate to your full $400,000 balance. 
          The breakdown is stunning:
        </p>
        
        <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-6 mb-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Your First Mortgage Payment Breakdown</p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="bg-white dark:bg-red-950/30 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600">$361</div>
              <div className="text-xs text-green-700 mt-1">Going to <strong>Principal</strong></div>
              <div className="text-xs text-green-600 mt-1">↓ 14% of payment</div>
            </div>
            <div className="bg-white dark:bg-red-950/30 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-500">$2,167</div>
              <div className="text-xs text-red-700 mt-1">Going to <strong>Interest</strong></div>
              <div className="text-xs text-red-600 mt-1">↑ 86% of payment</div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Think About This</p>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                You paid over <strong>$2,500</strong>, and your $400,000 debt only dropped by 
                <strong> $361</strong>. <strong>86%</strong> of your payment was pure interest. 
                This is the harsh reality of the front-loaded interest model.
              </p>
            </div>
          </div>
        </div>

        {/* First Payment Breakdown Pie Chart */}
        <div className="bg-gradient-to-br from-red-50 to-amber-50 dark:from-red-950/30 dark:to-amber-950/30 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4 text-center">First Payment: $2,528 — 86% Goes to Interest</p>
          <div className="w-48 h-48 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#22c55e" strokeWidth="20" strokeDasharray="50.4 282.6" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="232.2 100.8" strokeDashoffset="-50.4" transform="rotate(-90 50 50)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">86%</div>
                <div className="text-[10px] text-muted-foreground">Interest</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 text-xs mt-3">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Interest: $2,167</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span> Principal: $361</span>
          </div>
        </div>
      </section>

      {/* Section 5: The Brutal Truth About the First 5 Years */}
      <section id="section-5" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">5. The Brutal Truth About the First 5 Years</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Many borrowers think that after paying their mortgage for five years, they've built significant equity. 
          The amortization schedule tells a different story.
        </p>

        <div className="overflow-x-auto mb-6 border border-border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Metric</th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">After 5 Years</th>
                <th className="text-right py-3 px-4 font-medium text-muted-foreground text-xs uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="py-3 px-4 font-medium text-foreground">Total You Paid</td>
                <td className="text-right py-3 px-4 font-semibold">$151,680</td>
                <td className="text-right py-3 px-4 text-muted-foreground">60 on-time payments</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-3 px-4 font-medium text-foreground">Interest You Paid</td>
                <td className="text-right py-3 px-4 font-semibold text-red-500">$123,639</td>
                <td className="text-right py-3 px-4 text-red-500">81.5% of total paid</td>
              </tr>
              <tr className="hover:bg-muted/30 bg-muted/20">
                <td className="py-3 px-4 font-medium text-foreground">Principal Paid Down</td>
                <td className="text-right py-3 px-4 font-semibold text-green-600">$28,041</td>
                <td className="text-right py-3 px-4 text-green-600">Only 18.5% of total paid</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="py-3 px-4 font-medium text-foreground">Remaining Balance</td>
                <td className="text-right py-3 px-4 font-semibold">$371,959</td>
                <td className="text-right py-3 px-4 text-muted-foreground">Still owe 93% of original loan</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-indigo-800 dark:text-indigo-300 mb-1">The "Stagnant Balance" Feeling</p>
              <p className="text-sm text-indigo-700 dark:text-indigo-400">
                You might feel like, <em>"I've been paying for years… why has my balance barely moved?"</em> 
                The answer is simple: Interest dominates the early years of amortization. This "stagnant" 
                feeling is not your imagination — it's mathematical design. After 5 years of paying $151,680, 
                you've only reduced your debt by 7%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Do Banks Structure Loans This Way? */}
      <section id="section-6" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Why Do Banks Structure Loans This Way?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          It often feels unfair, but it's not a scam — it's simply the math of how interest works on a standard 
          amortized loan. The formula driving it all is:
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">The Amortization Engine</p>
          <div className="bg-muted rounded-lg p-4 inline-block">
            <code className="text-sm font-mono">
              Interest Payment = Remaining Balance × (Annual Interest Rate ÷ 12)
            </code>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Since your balance is highest at the very start ($400,000), the interest portion is also at its peak.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-600">Year 1</div>
            <div className="text-xs text-muted-foreground">Balance ≈ $400K</div>
            <div className="text-sm font-semibold text-red-500">Interest: 86%</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-amber-600">Year 15</div>
            <div className="text-xs text-muted-foreground">Balance ≈ $240K</div>
            <div className="text-sm font-semibold text-amber-500">Interest: 65%</div>
          </div>
          <div className="bg-card border border-border rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-600">Year 30</div>
            <div className="text-xs text-muted-foreground">Balance ≈ $0</div>
            <div className="text-sm font-semibold text-green-500">Interest: 0%</div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The bank isn't taking more profit upfront out of malice — they are applying the same rate to a much 
          larger number. As the balance slowly shrinks, the interest calculated on it shrinks too, and your 
          principal payment naturally accelerates. It's not a trap; it's <strong className="text-foreground">compound interest in reverse</strong>.
        </p>
      </section>

      {/* Section 7: Visualizing the Shift Over Time */}
      <section id="section-7" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Visualizing the Shift Over Time</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A mortgage amortization chart looks like a giant <strong className="text-foreground">"X"</strong>. 
          One line (interest) starts high and falls over 30 years. The other line (principal) starts low and 
          rises until they cross.
        </p>

        {/* 30-Year Amortization: The "X" Chart */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4 text-center">30-Year Amortization: Principal vs Interest Over Time</p>
          <div className="w-full max-w-md mx-auto">
            <svg viewBox="0 0 300 160" className="w-full h-auto">
              {/* Background */}
              <rect x="0" y="0" width="300" height="160" fill="rgba(255,255,255,0.5)" rx="8" />
              {/* Principal line (climbing) */}
              <path d="M 20 140 Q 100 130 180 80 Q 230 50 280 20" fill="none" stroke="#22c55e" strokeWidth="3" />
              {/* Interest line (descending) */}
              <path d="M 20 20 Q 100 30 180 80 Q 230 110 280 140" fill="none" stroke="#ef4444" strokeWidth="3" />
              {/* Labels */}
              <text x="10" y="18" className="text-[10px]" fill="#ef4444" fontWeight="bold">Interest</text>
              <text x="10" y="150" className="text-[10px]" fill="#16a34a" fontWeight="bold">Principal</text>
              <text x="150" y="84" className="text-[9px]" fill="#6b7280" textAnchor="middle">Balance ~ Year 18</text>
              {/* X axis year labels */}
              <text x="20" y="158" className="text-[8px]" fill="#9ca3af">Yr 1</text>
              <text x="150" y="158" className="text-[8px]" fill="#9ca3af">Yr 15</text>
              <text x="280" y="158" className="text-[8px]" fill="#9ca3af">Yr 30</text>
            </svg>
          </div>
          <div className="flex justify-center gap-6 text-xs mt-3">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Interest declines</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span> Principal climbs</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded bg-red-400" />
              <span className="font-semibold text-foreground">Years 1-7: Interest Dominates</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The interest line completely dominates the chart. You are building equity at a snail's pace. 
              If you sell in this period, most of your gain will likely come from market appreciation, 
              not from paying down debt. Over 80% of each payment goes to the bank.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded bg-amber-400" />
              <span className="font-semibold text-foreground">Years 8-20: The Balance Shifts</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The lines move towards a more balanced split. Your monthly equity gain becomes more noticeable. 
              This is where you start to feel the momentum building — the principal you pay each month begins 
              to meaningfully reduce your balance.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded bg-green-400" />
              <span className="font-semibold text-foreground">Years 21-30: The Acceleration Phase</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your principal payoff enters an unstoppable acceleration phase. Only a tiny fraction of your 
              payment is interest, and your equity skyrockets. The last 5 years of your mortgage, you're 
              almost paying yourself entirely — close to 95% of each payment goes to principal.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Extra Payments - Your Secret Weapon */}
      <section id="section-8" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Extra Payments: Your Secret Weapon</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The amortization schedule might feel like a trap, but understanding it gives you the power to break it. 
          Any extra payment you make goes <strong className="text-foreground">100% toward your principal</strong>, 
          bypassing the interest schedule and slashing future interest costs.
        </p>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700 rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-4 text-center">One Extra Payment Per Year = Massive Savings</h3>
          <p className="text-sm text-green-700 dark:text-green-400 mb-4 text-center">
            On a $400,000 loan at 6.5% over 30 years, adding just <strong>one extra monthly payment per year</strong>:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="bg-white dark:bg-green-950/30 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600">$52,000+</div>
              <div className="text-xs text-green-700 mt-1">Interest Saved</div>
            </div>
            <div className="bg-white dark:bg-green-950/30 rounded-lg p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600">6 Years</div>
              <div className="text-xs text-green-700 mt-1">Shorter Loan Term</div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          This is why integrating an extra payment simulator into your mortgage calculator isn't just a feature 
          — it's a game-changer. On our 
          <Link to="/mortgage-calculator" className="text-primary font-medium hover:underline"> Mortgage Calculator</Link>,
          you can switch to the "Amortization" view and add an extra $100/month to your principal. 
          You'll watch the total interest cost drop immediately and see your loan term shrink in real-time.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
          <p className="text-foreground font-medium mb-1">💡 Try This in the Calculator</p>
          <p className="text-sm text-muted-foreground">
            Set Home Price = $400,000, Down Payment = 20%, Rate = 6.5%, Term = 30 years. 
            Then click "View Details" → Add <strong>$200/month extra payment</strong>. 
            Watch your interest savings hit <strong>$92,000+</strong> and your loan end 
            <strong> 9 years early</strong>. That's more than a decade of freedom!
          </p>
        </div>
      </section>

      {/* Section 9: 15-Year vs 30-Year Mortgage */}
      <section id="section-9" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">9. 15-Year vs 30-Year Mortgage: A Strategic Trade-off</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This brings us to the classic trade-off. Your choice isn't just about a number — it's about a philosophy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">The 30-Year Loan: Stability & Flexibility</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Lower, more manageable monthly payments</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Frees up cash flow for other investments</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Easier to qualify for</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-muted-foreground">Pay <strong>$408,142</strong> in total interest</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-muted-foreground">Build equity very slowly in first 10 years</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <div className="text-2xl font-bold text-foreground">$2,023<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            </div>
          </div>

          <div className="bg-card border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300">The 15-Year Loan: Wealth Building</h3>
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">Best Value</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Save <strong>$226,153</strong> in interest</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Build equity at double the speed</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-muted-foreground">Own your home free & clear 15 years sooner</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-muted-foreground">Monthly payment is <strong>$766 higher</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-muted-foreground">Requires stable, higher income</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">$2,789<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            </div>
          </div>
        </div>

        {/* 15-Year vs 30-Year Comparison Chart (Inline) */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-8 mb-6 text-center">
          <div className="text-5xl mb-4">📊</div>
          <p className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">30-Year vs 15-Year Mortgage: Interest Cost Comparison</p>
          <div className="w-full max-w-sm mx-auto flex items-end justify-center gap-8">
            <div className="text-center">
              <div className="w-20 bg-blue-400 rounded-t-md mb-1" style={{ height: '60px' }}>
                <div className="text-xs font-bold text-white pt-1">$408K</div>
              </div>
              <div className="text-xs font-semibold text-blue-700">30-Year</div>
            </div>
            <div className="text-center">
              <div className="w-20 bg-green-400 rounded-t-md mb-1" style={{ height: '28px' }}>
                <div className="text-xs font-bold text-white pt-1">$182K</div>
              </div>
              <div className="text-xs font-semibold text-green-700">15-Year</div>
              <div className="text-[10px] text-green-600">Save $226K!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Why a Good Amortization Calculator Matters */}
      <section id="section-10" className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">10. Why a Good Amortization Calculator Matters</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Reading about amortization is one thing; seeing your own loan's story is another. Most people never 
          do the complex math manually, which is why a specific, well-designed tool is so valuable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Look Under the Hood</h3>
            <p className="text-sm text-muted-foreground">
              See the exact principal-interest split for every single payment in the next 30 years. 
              No black boxes — complete transparency.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <PieChart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Plan Scenarios</h3>
            <p className="text-sm text-muted-foreground">
              Instantly compare a 30-year loan against a 15-year loan. Toggle extra payments. 
              See how changing one number affects your entire financial future.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Find Leverage Points</h3>
            <p className="text-sm text-muted-foreground">
              Create a custom extra payment plan and watch the savings accumulate in real-time. 
              See exactly how much one decision is worth.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          A proper calculator turns abstract numbers into a real, interactive story about your money. 
          On our <Link to="/mortgage-calculator" className="text-primary font-medium hover:underline">Mortgage Calculator</Link>,
          you can switch to the "Amortization" view, drag a slider to add an extra $100/month to your principal,
          and watch the total interest cost drop immediately on the chart.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">From Passive Borrower to Active Wealth Builder</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A mortgage is far more than a monthly payment — it's a long-term financial structure that can either 
            work for you or against you. By learning to read an amortization schedule, you move from being a 
            passive borrower to an active wealth builder. Before you take out a loan, always look beyond the 
            payment amount and study exactly how your money is being split, month by month.
          </p>
        </div>

        {/* Wealth Builder Journey */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-green-950/30 border-2 border-dashed border-green-300 dark:border-green-700 rounded-xl p-8 mt-6 text-center">
          <div className="text-5xl mb-4">🏠</div>
          <p className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">The Wealth Builder's Journey</p>
          <div className="w-full max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-6">
              {['Year 1', 'Year 7', 'Year 15', 'Year 20', 'Year 30'].map((year, i) => {
                const fillPercent = [14, 22, 35, 50, 95][i];
                return (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center mb-1 bg-white dark:bg-green-950/50">
                      <span className="text-xs font-bold text-green-600">{fillPercent}%</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{year}</div>
                  </div>
                );
              })}
            </div>
            <div className="relative">
              <div className="w-full h-1.5 bg-gradient-to-r from-red-300 via-amber-300 to-green-400 rounded-full" />
              <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
                <span>86% Interest</span>
                <span />  
                <span />  
                <span />  
                <span>95% Principal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border pt-10 mt-12">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to see your own amortization schedule?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Open our interactive mortgage calculator and see exactly how your payments break down. 
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

      <AllCalculatorsGrid />

      {/* Related Articles */}
      <div className="mt-10 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Continue Reading</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/blog/how-to-use-calculator" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Previous article</div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              How to Use Our Mortgage Calculator
            </div>
          </Link>
          <Link to="/blog/biweekly-payments" className="block p-4 bg-card border border-border rounded-lg hover:shadow-sm transition-all group">
            <div className="text-xs text-muted-foreground mb-1">Next article →</div>
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
