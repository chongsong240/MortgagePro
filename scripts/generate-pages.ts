/**
 * Programmatic SEO page generator.
 * 
 * Run after `vite build` to generate static HTML pages for:
 *   Phase 1: /mortgage-payment/{amount}/  (loan amount pages)
 * 
 * Usage: npx tsx scripts/generate-pages.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// 1. Configuration - must match src/data/mortgage-templates.ts
// ============================================================

const LOAN_AMOUNTS = [
  150000, 200000, 250000, 300000, 350000, 400000,
  450000, 500000, 550000, 600000, 650000, 700000,
  750000, 800000
];

const DEFAULT_ASSUMPTIONS = {
  downPaymentPercent: 20,
  interestRate: 6.5,
  loanTermYears: 30,
  propertyTaxRate: 1.2,
  homeInsurance: 1500,
};

const SITE_URL = 'https://www.mortgagepro.io';
const SITE_NAME = 'MortgagePro';
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

// ============================================================
// 2. Mortgage calculation engine (standalone, no React deps)
// ============================================================

interface AmortRow {
  year: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

function calculateLoan(amount: number): {
  loanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  totalMonthly: number;
  totalInterest: number;
  payoffYear: number;
  amortization: AmortRow[];
  incomeNeeded: number;
} {
  const homePrice = amount;
  const downPct = DEFAULT_ASSUMPTIONS.downPaymentPercent;
  const downAmount = homePrice * (downPct / 100);
  const loanAmount = homePrice - downAmount;

  const annualRate = DEFAULT_ASSUMPTIONS.interestRate;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = DEFAULT_ASSUMPTIONS.loanTermYears * 12;

  // Monthly P&I
  let monthlyPI = 0;
  if (monthlyRate === 0) {
    monthlyPI = loanAmount / numPayments;
  } else {
    monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const monthlyTax = (homePrice * (DEFAULT_ASSUMPTIONS.propertyTaxRate / 100)) / 12;
  const monthlyInsurance = DEFAULT_ASSUMPTIONS.homeInsurance / 12;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;

  // Amortization
  const amortization: AmortRow[] = [];
  let remaining = loanAmount;
  let totalInterest = 0;
  let yearPrincipal = 0;
  let yearInterest = 0;

  for (let m = 1; m <= numPayments; m++) {
    const interestPmt = remaining * monthlyRate;
    let principalPmt = monthlyPI - interestPmt;
    if (m === numPayments) principalPmt = remaining;

    remaining -= principalPmt;
    totalInterest += interestPmt;
    yearPrincipal += principalPmt;
    yearInterest += interestPmt;

    if (m % 12 === 0 || m === numPayments) {
      amortization.push({
        year: Math.ceil(m / 12),
        principal: Math.round(yearPrincipal),
        interest: Math.round(yearInterest),
        remainingBalance: Math.max(0, Math.round(remaining)),
      });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  // 28/36 rule income
  const incomeNeeded = Math.ceil((totalMonthly / 0.28) * 12 / 1000) * 1000;

  return {
    loanAmount: Math.round(loanAmount),
    monthlyPI: Math.round(monthlyPI),
    monthlyTax: Math.round(monthlyTax),
    monthlyInsurance: Math.round(monthlyInsurance),
    totalMonthly: Math.round(totalMonthly),
    totalInterest: Math.round(totalInterest),
    payoffYear: new Date().getFullYear() + DEFAULT_ASSUMPTIONS.loanTermYears,
    amortization,
    incomeNeeded,
  };
}

// ============================================================
// 3. Formatting helpers
// ============================================================

const fmtCurrency = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

const fmtNumber = (v: number) =>
  new Intl.NumberFormat('en-US').format(v);

// ============================================================
// 4. Content generation functions
// ============================================================

function generateMetaTitle(amount: number): string {
  return `Mortgage Payment on a $${fmtNumber(amount)} House | Monthly Cost (2025)`;
}

function generateMetaDescription(amount: number, monthly: number): string {
  return `What's the monthly mortgage payment on a $${fmtNumber(amount)} house? With 20% down at 6.5% interest, the estimated payment is ${fmtCurrency(monthly)}/mo. Full PITI breakdown + amortization.`;
}

function generateIntroParagraph(amount: number): string {
  const k = amount / 1000;
  const category = amount <= 250000
    ? 'entry-level'
    : amount <= 450000
    ? 'mid-range'
    : amount <= 650000
    ? 'upper-mid-range'
    : 'premium';

  return `A $${fmtNumber(amount)} purchase price falls into the <strong>${category}</strong> tier of the US housing market. This price point is competitive across much of the country, especially in markets outside the highest-cost coastal metros. Below we break down the estimated monthly costs, the income you'll need, and exactly how your payments stack up over the life of the loan.`;
}

function generateIncomeSection(amount: number, income: number): string {
  const ratio = (income / amount).toFixed(2);
  return `Using the standard <strong>28% front-end DTI rule</strong>, you'd need a gross annual income of approximately <strong>${fmtCurrency(income)}</strong> to comfortably afford a $${fmtNumber(amount)} home with 20% down at 6.5%. This assumes your total monthly housing costs (principal, interest, taxes, and insurance) do not exceed 28% of your gross monthly income.

Your income-to-home-price ratio would be <strong>${ratio}</strong>, which is ${parseFloat(ratio) > 0.3 ? 'above' : 'in line with'} typical lending guidelines.`;
}

function generateAmortizationInsight(year1Interest: number, totalInterest: number, monthlyPI: number): string {
  const firstYearPct = Math.round((year1Interest / (monthlyPI * 12)) * 100);
  return `In your first year, approximately <strong>${fmtCurrency(year1Interest)}</strong> (${firstYearPct}% of your P&I payments) goes toward interest alone. Over the full 30-year term, you'll pay a total of <strong>${fmtCurrency(totalInterest)}</strong> in interest.`;
}

// ============================================================
// 5. HTML template
// ============================================================

function generateHtml(amount: number, data: ReturnType<typeof calculateLoan>): string {
  const neighbors = getNeighbors(amount);
  const firstYearInterest = data.amortization[0]?.interest ?? 0;

  const amortRows = data.amortization.slice(0, 10).map(row => `
        <tr>
          <td>${row.year}</td>
          <td>${fmtCurrency(row.principal)}</td>
          <td>${fmtCurrency(row.interest)}</td>
          <td>${fmtCurrency(row.remainingBalance)}</td>
        </tr>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${generateMetaTitle(amount)}</title>
  <meta name="description" content="${generateMetaDescription(amount, data.totalMonthly)}" />
  <link rel="canonical" href="${SITE_URL}/mortgage-payment/${amount}/" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${generateMetaTitle(amount)}" />
  <meta property="og:description" content="${generateMetaDescription(amount, data.totalMonthly)}" />
  <meta property="og:url" content="${SITE_URL}/mortgage-payment/${amount}/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  
  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${generateMetaTitle(amount)}",
    "description": "${generateMetaDescription(amount, data.totalMonthly)}",
    "publisher": {
      "@type": "Organization",
      "name": "${SITE_NAME}"
    }
  }
  </script>

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6; color: #1a1a2e; background: #f8fafc; 
    }
    .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
    
    /* Header */
    .site-header {
      background: #fff; border-bottom: 1px solid #e2e8f0; padding: 16px 0;
      position: sticky; top: 0; z-index: 100;
    }
    .site-header .container {
      display: flex; justify-content: space-between; align-items: center;
    }
    .logo { font-size: 1.5rem; font-weight: 800; color: #1a1a2e; text-decoration: none; }
    .logo span { color: #2563eb; }
    .nav-links { display: flex; gap: 24px; }
    .nav-links a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 500; }
    .nav-links a:hover { color: #2563eb; }

    /* Hero section */
    .hero {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white;
      padding: 48px 0; text-align: center; border-radius: 0 0 24px 24px;
    }
    .hero h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
    .hero p { font-size: 1.1rem; opacity: 0.9; max-width: 650px; margin: 0 auto; }
    
    /* Monthly payment display */
    .payment-card {
      background: white; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      padding: 32px; text-align: center; margin-top: -32px; position: relative; z-index: 10;
      max-width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 32px;
    }
    .payment-card .label { font-size: 0.85rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .payment-card .amount { font-size: 3rem; font-weight: 800; color: #1e3a8a; }
    .payment-card .sub { font-size: 0.9rem; color: #94a3b8; margin-top: 4px; }

    /* Cards */
    .card {
      background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      padding: 28px; margin-bottom: 24px; border: 1px solid #e2e8f0;
    }
    .card h2 { font-size: 1.3rem; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
    .card h3 { font-size: 1rem; font-weight: 600; color: #1a1a2e; margin-bottom: 8px; }
    
    /* Tables */
    table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
    th { text-align: left; padding: 10px 12px; border-bottom: 2px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
    tr:last-child td { border-bottom: none; }
    .total-row td { font-weight: 700; color: #1e3a8a; border-top: 2px solid #e2e8f0; }
    .text-right { text-align: right; }
    
    /* CTA */
    .cta-box {
      background: linear-gradient(135deg, #f0f7ff 0%, #e8f0fe 100%);
      border: 2px dashed #2563eb; border-radius: 16px; padding: 36px; text-align: center; margin: 32px 0;
    }
    .cta-box h3 { font-size: 1.4rem; font-weight: 700; color: #1e3a8a; margin-bottom: 12px; }
    .cta-box p { color: #475569; margin-bottom: 20px; }
    .cta-btn {
      display: inline-block; background: #2563eb; color: white; padding: 14px 36px;
      border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.1rem;
      transition: background 0.2s;
    }
    .cta-btn:hover { background: #1d4ed8; }

    /* Neighbor links */
    .neighbor-links {
      display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin: 24px 0;
    }
    .neighbor-links a {
      display: inline-block; padding: 10px 20px; background: #f1f5f9; border-radius: 8px;
      color: #2563eb; text-decoration: none; font-weight: 500; font-size: 0.95rem;
      transition: background 0.2s;
    }
    .neighbor-links a:hover { background: #e2e8f0; }

    /* Footer */
    .site-footer {
      background: #1a1a2e; color: #94a3b8; padding: 32px 0; margin-top: 48px;
      text-align: center; font-size: 0.85rem;
    }
    .site-footer a { color: #93c5fd; text-decoration: none; }

    /* Responsive */
    @media (max-width: 640px) {
      .hero h1 { font-size: 1.6rem; }
      .payment-card .amount { font-size: 2.2rem; }
      .nav-links { display: none; }
      .card { padding: 20px; }
      table { font-size: 0.85rem; }
      th, td { padding: 8px; }
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <a href="${SITE_URL}/" class="logo">Mortgage<span>Pro</span></a>
      <nav class="nav-links">
        <a href="${SITE_URL}/">Home</a>
        <a href="${SITE_URL}/#/calculator">Calculator</a>
        <a href="${SITE_URL}/#/blog">Blog</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <div class="container">
      <h1>Mortgage Payment on a $${fmtNumber(amount)} House</h1>
      <p>Complete monthly cost breakdown, amortization schedule, and income requirements — updated for 2025 rates.</p>
    </div>
  </section>

  <!-- Main monthly payment card -->
  <div class="payment-card">
    <div class="label">Estimated Monthly Payment</div>
    <div class="amount">${fmtCurrency(data.totalMonthly)}</div>
    <div class="sub">Principal & Interest + Taxes + Insurance • 20% down at 6.5% APR</div>
  </div>

  <main class="container">

    <!-- Intro -->
    <div class="card">
      <h2>What's the Monthly Payment on a $${fmtNumber(amount)} House?</h2>
      <p style="margin-bottom: 12px;">${generateIntroParagraph(amount)}</p>
      <p>With a standard <strong>20% down payment (${fmtCurrency(data.loanAmount)} loan)</strong> and a <strong>6.5% interest rate</strong> on a <strong>30-year fixed-rate mortgage</strong>, your estimated total monthly payment comes to <strong>${fmtCurrency(data.totalMonthly)}</strong>.</p>
    </div>

    <!-- PITI breakdown -->
    <div class="card">
      <h2>Monthly Payment Breakdown (PITI)</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th class="text-right">Monthly Cost</th>
            <th class="text-right">Annual Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Principal & Interest</strong></td>
            <td class="text-right">${fmtCurrency(data.monthlyPI)}</td>
            <td class="text-right">${fmtCurrency(data.monthlyPI * 12)}</td>
          </tr>
          <tr>
            <td>Property Taxes (1.2% est.)</td>
            <td class="text-right">${fmtCurrency(data.monthlyTax)}</td>
            <td class="text-right">${fmtCurrency(data.monthlyTax * 12)}</td>
          </tr>
          <tr>
            <td>Home Insurance</td>
            <td class="text-right">${fmtCurrency(data.monthlyInsurance)}</td>
            <td class="text-right">${fmtCurrency(data.monthlyInsurance * 12)}</td>
          </tr>
          <tr class="total-row">
            <td>Total Monthly Payment</td>
            <td class="text-right">${fmtCurrency(data.totalMonthly)}</td>
            <td class="text-right">${fmtCurrency(data.totalMonthly * 12)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Income needed -->
    <div class="card">
      <h2>Income Required for a $${fmtNumber(amount)} House</h2>
      <p>${generateIncomeSection(amount, data.incomeNeeded)}</p>
      <div style="margin-top: 16px; background: #f0f7ff; border-radius: 8px; padding: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <span style="font-weight: 600;">Recommended annual income:</span>
          <span style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a;">${fmtCurrency(data.incomeNeeded)}/yr</span>
        </div>
      </div>
    </div>

    <!-- First year insight -->
    <div class="card">
      <h2>How Interest Shapes Your Payments</h2>
      <p>${generateAmortizationInsight(firstYearInterest, data.totalInterest, data.monthlyPI)}</p>
      <p style="margin-top: 8px;">Making extra principal payments — even ${fmtCurrency(100)}/month — can save you tens of thousands in interest and shave years off your loan.</p>
    </div>

    <!-- Amortization table -->
    <div class="card">
      <h2>Amortization Schedule — First 10 Years</h2>
      <div style="overflow-x: auto;">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th class="text-right">Principal Paid</th>
              <th class="text-right">Interest Paid</th>
              <th class="text-right">Balance Remaining</th>
            </tr>
          </thead>
          <tbody>
${amortRows}
          </tbody>
        </table>
      </div>
      <p style="margin-top: 12px; font-size: 0.85rem; color: #94a3b8;">
        * Full 30-year amortization available in our interactive calculator.
      </p>
    </div>

    <!-- CTA -->
    <div class="cta-box">
      <h3>🧮 Try the Interactive Calculator</h3>
      <p>Adjust the down payment, interest rate, or loan term — see how your payment changes in real time.</p>
      <a href="${SITE_URL}/#/calculator" class="cta-btn">Open Full Calculator →</a>
    </div>

    <!-- Internal links -->
    <div class="card" style="text-align: center;">
      <h2>Compare Home Prices</h2>
      <div class="neighbor-links">
        ${neighbors.lower 
          ? `<a href="${SITE_URL}/mortgage-payment/${neighbors.lower}/">$${fmtNumber(neighbors.lower)}</a>` 
          : ''}
        ${neighbors.higher 
          ? `<a href="${SITE_URL}/mortgage-payment/${neighbors.higher}/">$${fmtNumber(neighbors.higher)}</a>` 
          : ''}
      </div>
      <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 8px;">
        View detailed breakdowns for similar price points.
      </p>
    </div>

    <!-- Disclaimer -->
    <div style="font-size: 0.8rem; color: #94a3b8; padding: 16px; text-align: center; line-height: 1.5;">
      <p><strong>Disclaimer:</strong> This is an estimate for informational purposes only. Actual mortgage payments depend on your credit score, exact interest rate, property taxes, insurance premiums, PMI, and other factors. Consult a qualified mortgage professional for personalized advice. See our full <a href="${SITE_URL}/#/disclaimer" style="color: #93c5fd;">Disclaimer</a>.</p>
    </div>

  </main>

  <footer class="site-footer">
    <div class="container">
      <p>${SITE_NAME} — Free mortgage calculators and educational resources.</p>
      <p style="margin-top: 4px;">
        <a href="${SITE_URL}/#/privacy">Privacy</a> &middot;
        <a href="${SITE_URL}/#/disclaimer">Disclaimer</a> &middot;
        <a href="${SITE_URL}/#/about">About</a>
      </p>
    </div>
  </footer>

  <!-- Analytics placeholder -->
</body>
</html>`;
}

// ============================================================
// 6. Helper: get neighbor amounts
// ============================================================

function getNeighbors(amount: number): { lower: number | null; higher: number | null } {
  const idx = LOAN_AMOUNTS.indexOf(amount);
  return {
    lower: idx > 0 ? LOAN_AMOUNTS[idx - 1] : null,
    higher: idx < LOAN_AMOUNTS.length - 1 ? LOAN_AMOUNTS[idx + 1] : null,
  };
}

// ============================================================
// 7. Main execution
// ============================================================

function main() {
  console.log('🏗️  Generating programmatic SEO pages...');
  console.log(`   Site URL: ${SITE_URL}`);
  console.log(`   Output: ${DIST_DIR}/mortgage-payment/`);
  console.log(`   Pages to generate: ${LOAN_AMOUNTS.length}\n`);

  let count = 0;

  for (const amount of LOAN_AMOUNTS) {
    const data = calculateLoan(amount);
    const html = generateHtml(amount, data);

    const outDir = path.join(DIST_DIR, 'mortgage-payment', String(amount));
    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, html, 'utf-8');

    count++;
    console.log(`   ✅  $${fmtNumber(amount)} → /mortgage-payment/${amount}/   (${fmtCurrency(data.totalMonthly)}/mo)`);
  }

  console.log(`\n✅ Done! Generated ${count} pages.`);
}

main();
