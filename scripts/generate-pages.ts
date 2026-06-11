/**
 * Programmatic SEO page generator.
 * 
 * Run after `vite build` to generate static HTML pages for:
 *   Phase 1: /mortgage-payment/{amount}/  (loan amount pages)
 *   Phase 2: /mortgage-payment/{state}/   (state-specific pages)
 * 
 * Usage: npx tsx scripts/generate-pages.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================
// 1. Configuration
// ============================================================

const LOAN_AMOUNTS = [
  150000, 200000, 250000, 300000, 350000, 400000,
  450000, 500000, 550000, 600000, 650000, 700000,
  750000, 800000
];

/** State data mirroring src/data/state_data.json (no React deps) */
const STATE_DATA: Record<string, { name: string, median_home_price: number, property_tax_rate: number, avg_annual_insurance: number }> = {
  "AL": { name: "Alabama", median_home_price: 228669, property_tax_rate: 0.0043, avg_annual_insurance: 2989 },
  "AK": { name: "Alaska", median_home_price: 371807, property_tax_rate: 0.012, avg_annual_insurance: 933 },
  "AZ": { name: "Arizona", median_home_price: 429140, property_tax_rate: 0.0043, avg_annual_insurance: 2245 },
  "AR": { name: "Arkansas", median_home_price: 210633, property_tax_rate: 0.006, avg_annual_insurance: 3151 },
  "CA": { name: "California", median_home_price: 788920, property_tax_rate: 0.0076, avg_annual_insurance: 1429 },
  "CO": { name: "Colorado", median_home_price: 551854, property_tax_rate: 0.005, avg_annual_insurance: 3167 },
  "CT": { name: "Connecticut", median_home_price: 414183, property_tax_rate: 0.0136, avg_annual_insurance: 1660 },
  "DE": { name: "Delaware", median_home_price: 389974, property_tax_rate: 0.005, avg_annual_insurance: 964 },
  "DC": { name: "District of Columbia", median_home_price: 606163, property_tax_rate: 0.006, avg_annual_insurance: 1400 },
  "FL": { name: "Florida", median_home_price: 387464, property_tax_rate: 0.009, avg_annual_insurance: 5488 },
  "GA": { name: "Georgia", median_home_price: 329110, property_tax_rate: 0.008, avg_annual_insurance: 1994 },
  "HI": { name: "Hawaii", median_home_price: 841274, property_tax_rate: 0.0033, avg_annual_insurance: 1224 },
  "ID": { name: "Idaho", median_home_price: 462014, property_tax_rate: 0.0039, avg_annual_insurance: 1293 },
  "IL": { name: "Illinois", median_home_price: 273186, property_tax_rate: 0.0184, avg_annual_insurance: 2265 },
  "IN": { name: "Indiana", median_home_price: 244855, property_tax_rate: 0.008, avg_annual_insurance: 1712 },
  "IA": { name: "Iowa", median_home_price: 219987, property_tax_rate: 0.015, avg_annual_insurance: 2197 },
  "KS": { name: "Kansas", median_home_price: 230884, property_tax_rate: 0.013, avg_annual_insurance: 4287 },
  "KY": { name: "Kentucky", median_home_price: 217447, property_tax_rate: 0.008, avg_annual_insurance: 3354 },
  "LA": { name: "Louisiana", median_home_price: 201100, property_tax_rate: 0.005, avg_annual_insurance: 4135 },
  "ME": { name: "Maine", median_home_price: 400642, property_tax_rate: 0.014, avg_annual_insurance: 1243 },
  "MD": { name: "Maryland", median_home_price: 425692, property_tax_rate: 0.011, avg_annual_insurance: 1671 },
  "MA": { name: "Massachusetts", median_home_price: 635252, property_tax_rate: 0.012, avg_annual_insurance: 1703 },
  "MI": { name: "Michigan", median_home_price: 248560, property_tax_rate: 0.015, avg_annual_insurance: 2117 },
  "MN": { name: "Minnesota", median_home_price: 337891, property_tax_rate: 0.011, avg_annual_insurance: 2628 },
  "MS": { name: "Mississippi", median_home_price: 181232, property_tax_rate: 0.007, avg_annual_insurance: 3339 },
  "MO": { name: "Missouri", median_home_price: 251663, property_tax_rate: 0.01, avg_annual_insurance: 2302 },
  "MT": { name: "Montana", median_home_price: 459370, property_tax_rate: 0.008, avg_annual_insurance: 2511 },
  "NE": { name: "Nebraska", median_home_price: 264859, property_tax_rate: 0.017, avg_annual_insurance: 5640 },
  "NV": { name: "Nevada", median_home_price: 448322, property_tax_rate: 0.006, avg_annual_insurance: 1031 },
  "NH": { name: "New Hampshire", median_home_price: 487482, property_tax_rate: 0.019, avg_annual_insurance: 1026 },
  "NJ": { name: "New Jersey", median_home_price: 548338, property_tax_rate: 0.0158, avg_annual_insurance: 1194 },
  "NM": { name: "New Mexico", median_home_price: 308031, property_tax_rate: 0.007, avg_annual_insurance: 2205 },
  "NY": { name: "New York", median_home_price: 485932, property_tax_rate: 0.017, avg_annual_insurance: 1752 },
  "NC": { name: "North Carolina", median_home_price: 331761, property_tax_rate: 0.007, avg_annual_insurance: 2055 },
  "ND": { name: "North Dakota", median_home_price: 269509, property_tax_rate: 0.009, avg_annual_insurance: 2709 },
  "OH": { name: "Ohio", median_home_price: 234906, property_tax_rate: 0.0132, avg_annual_insurance: 1303 },
  "OK": { name: "Oklahoma", median_home_price: 208281, property_tax_rate: 0.009, avg_annual_insurance: 4643 },
  "OR": { name: "Oregon", median_home_price: 500850, property_tax_rate: 0.009, avg_annual_insurance: 1011 },
  "PA": { name: "Pennsylvania", median_home_price: 272299, property_tax_rate: 0.016, avg_annual_insurance: 1245 },
  "RI": { name: "Rhode Island", median_home_price: 475865, property_tax_rate: 0.016, avg_annual_insurance: 2324 },
  "SC": { name: "South Carolina", median_home_price: 298029, property_tax_rate: 0.005, avg_annual_insurance: 2374 },
  "SD": { name: "South Dakota", median_home_price: 308842, property_tax_rate: 0.013, avg_annual_insurance: 3049 },
  "TN": { name: "Tennessee", median_home_price: 319167, property_tax_rate: 0.006, avg_annual_insurance: 2499 },
  "TX": { name: "Texas", median_home_price: 303321, property_tax_rate: 0.018, avg_annual_insurance: 3973 },
  "UT": { name: "Utah", median_home_price: 530787, property_tax_rate: 0.006, avg_annual_insurance: 1262 },
  "VT": { name: "Vermont", median_home_price: 388919, property_tax_rate: 0.014, avg_annual_insurance: 830 },
  "VA": { name: "Virginia", median_home_price: 400201, property_tax_rate: 0.008, avg_annual_insurance: 1664 },
  "WA": { name: "Washington", median_home_price: 603837, property_tax_rate: 0.009, avg_annual_insurance: 1513 },
  "WV": { name: "West Virginia", median_home_price: 167589, property_tax_rate: 0.006, avg_annual_insurance: 1009 },
  "WI": { name: "Wisconsin", median_home_price: 312361, property_tax_rate: 0.017, avg_annual_insurance: 1219 },
  "WY": { name: "Wyoming", median_home_price: 357698, property_tax_rate: 0.004, avg_annual_insurance: 1306 }
};

const STATE_ABBREVIATIONS = Object.keys(STATE_DATA);
const STATE_LIST = Object.entries(STATE_DATA).map(([code, d]) => ({ code, ...d }));

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

function calculateLoan(amount: number, propertyTaxRate = 1.2, homeInsurance = 1500): {
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
  const downPct = 20;
  const downAmount = homePrice * (downPct / 100);
  const loanAmount = homePrice - downAmount;

  const annualRate = 6.5;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = 30 * 12;

  // Monthly P&I
  let monthlyPI = 0;
  if (monthlyRate === 0) {
    monthlyPI = loanAmount / numPayments;
  } else {
    monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = homeInsurance / 12;
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
    payoffYear: new Date().getFullYear() + 30,
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

const fmtSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

// ============================================================
// 4. Content generation - State pages
// ============================================================

function generateStateMetaTitle(stateName: string): string {
  return `Mortgage Payment in ${stateName} | Monthly Cost & Calculator (2025)`;
}

function generateStateMetaDescription(stateName: string, medianPrice: number, monthly: number): string {
  return `What's the monthly mortgage payment in ${stateName}? The median home price is ${fmtCurrency(medianPrice)}. With 20% down at 6.5%, the estimated monthly payment is ${fmtCurrency(monthly)}. State-specific tax & insurance included.`;
}

function generateStateIntro(stateName: string, medianPrice: number, taxRateStr: string, insurance: number): string {
  const category = medianPrice <= 250000 ? 'affordable' : medianPrice <= 450000 ? 'mid-range' : medianPrice <= 650000 ? 'upper-mid-range' : 'high-cost';
  return `<p><strong>${stateName}</strong> falls into the <strong>${category}</strong> tier of the US housing market, with a median home price of <strong>${fmtCurrency(medianPrice)}</strong>. The state's effective property tax rate is <strong>${taxRateStr}%</strong> and average annual homeowners insurance is <strong>${fmtCurrency(insurance)}</strong>.</p>

<p>Below we break down the estimated monthly costs for a ${fmtCurrency(medianPrice)} home in ${stateName}, using state-specific data for property taxes and insurance.</p>`;
}

// ============================================================
// 5. HTML template - State pages
// ============================================================

function generateStateHtml(
  stateCode: string,
  stateName: string,
  medianPrice: number,
  taxRate: number,
  insurance: number,
  data: ReturnType<typeof calculateLoan>
): string {
  const slug = fmtSlug(stateName);
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
  <title>${generateStateMetaTitle(stateName)}</title>
  <meta name="description" content="${generateStateMetaDescription(stateName, medianPrice, data.totalMonthly)}" />
  <link rel="canonical" href="${SITE_URL}/mortgage-payment/${slug}/" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="${generateStateMetaTitle(stateName)}" />
  <meta property="og:description" content="${generateStateMetaDescription(stateName, medianPrice, data.totalMonthly)}" />
  <meta property="og:url" content="${SITE_URL}/mortgage-payment/${slug}/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  
  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${generateStateMetaTitle(stateName)}",
    "description": "${generateStateMetaDescription(stateName, medianPrice, data.totalMonthly)}",
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

    .hero {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white;
      padding: 48px 0; text-align: center; border-radius: 0 0 24px 24px;
    }
    .hero h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
    .hero p { font-size: 1.1rem; opacity: 0.9; max-width: 650px; margin: 0 auto; }
    
    .payment-card {
      background: white; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      padding: 32px; text-align: center; margin-top: -32px; position: relative; z-index: 10;
      max-width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 32px;
    }
    .payment-card .label { font-size: 0.85rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .payment-card .amount { font-size: 3rem; font-weight: 800; color: #1e3a8a; }
    .payment-card .sub { font-size: 0.9rem; color: #94a3b8; margin-top: 4px; }

    .card {
      background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      padding: 28px; margin-bottom: 24px; border: 1px solid #e2e8f0;
    }
    .card h2 { font-size: 1.3rem; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
    .card h3 { font-size: 1rem; font-weight: 600; color: #1a1a2e; margin-bottom: 8px; }
    
    table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
    th { text-align: left; padding: 10px 12px; border-bottom: 2px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
    tr:last-child td { border-bottom: none; }
    .total-row td { font-weight: 700; color: #1e3a8a; border-top: 2px solid #e2e8f0; }
    .text-right { text-align: right; }
    
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

    .neighbor-links {
      display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin: 24px 0;
    }
    .neighbor-links a {
      display: inline-block; padding: 10px 20px; background: #f1f5f9; border-radius: 8px;
      color: #2563eb; text-decoration: none; font-weight: 500; font-size: 0.95rem;
      transition: background 0.2s;
    }
    .neighbor-links a:hover { background: #e2e8f0; }

    .site-footer {
      background: #1a1a2e; color: #94a3b8; padding: 32px 0; margin-top: 48px;
      text-align: center; font-size: 0.85rem;
    }
    .site-footer a { color: #93c5fd; text-decoration: none; }

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

  <section class="hero">
    <div class="container">
      <h1>Mortgage Payment in ${stateName}</h1>
      <p>Complete monthly cost breakdown for ${stateName} home buyers — state-specific taxes, insurance, and amortization.</p>
    </div>
  </section>

  <div class="payment-card">
    <div class="label">Estimated Monthly Payment in ${stateName}</div>
    <div class="amount">${fmtCurrency(data.totalMonthly)}</div>
    <div class="sub">Principal & Interest + Taxes + Insurance • 20% down at 6.5% APR</div>
  </div>

  <main class="container">

    <div class="card">
      <h2>Monthly Payment on a ${fmtCurrency(medianPrice)} Home in ${stateName}</h2>
      ${generateStateIntro(stateName, medianPrice, (taxRate * 100).toFixed(2), insurance)}
      <p style="margin-top: 12px;">With a standard <strong>20% down payment (${fmtCurrency(data.loanAmount)} loan)</strong> and a <strong>6.5% interest rate</strong> on a <strong>30-year fixed-rate mortgage</strong>, your estimated total monthly payment comes to <strong>${fmtCurrency(data.totalMonthly)}</strong>.</p>
    </div>

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
            <td>Property Taxes (${(taxRate * 100).toFixed(2)}% est.)</td>
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

    <div class="card">
      <h2>Income Required in ${stateName}</h2>
      <p>Using the standard <strong>28% front-end DTI rule</strong>, you'd need a gross annual income of approximately <strong>${fmtCurrency(data.incomeNeeded)}</strong> to comfortably afford the median-priced home in ${stateName} with 20% down at 6.5%.</p>
      <div style="margin-top: 16px; background: #f0f7ff; border-radius: 8px; padding: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
          <span style="font-weight: 600;">Recommended annual income:</span>
          <span style="font-size: 1.8rem; font-weight: 800; color: #1e3a8a;">${fmtCurrency(data.incomeNeeded)}/yr</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h2>How Interest Shapes Your Payments</h2>
      <p>In your first year, approximately <strong>${fmtCurrency(firstYearInterest)}</strong> goes toward interest alone. Over the full 30-year term, you'll pay a total of <strong>${fmtCurrency(data.totalInterest)}</strong> in interest.</p>
    </div>

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

    <div class="cta-box">
      <h3>🧮 Try the Interactive Calculator</h3>
      <p>Adjust the down payment, interest rate, or loan term — see how your payment changes in real time.</p>
      <a href="${SITE_URL}/#/calculator" class="cta-btn">Open Full Calculator →</a>
    </div>

    <div class="card" style="text-align: center;">
      <h2>Compare Mortgage Costs by State</h2>
      <div class="neighbor-links">
        <a href="${SITE_URL}/#/calculator">Use the Interactive Calculator →</a>
      </div>
      <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 8px;">
        Explore state-specific rates, down payments, and loan terms.
      </p>
    </div>

    <div style="font-size: 0.8rem; color: #94a3b8; padding: 16px; text-align: center; line-height: 1.5;">
      <p><strong>Disclaimer:</strong> This is an estimate for informational purposes only. Actual mortgage payments depend on your credit score, exact interest rate, property taxes, insurance premiums, PMI, and other factors. Sources: Zillow Q1 2025 (median home prices), ATTOM 2025 (property tax rates), Quadrant Information Services Feb 2025 (insurance premiums). Consult a qualified mortgage professional for personalized advice. See our full <a href="${SITE_URL}/#/disclaimer" style="color: #93c5fd;">Disclaimer</a>.</p>
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

</body>
</html>`;
}

// ============================================================
// 4b [overloaded] - Content generation - Amount pages (existing)
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
// 5b [overloaded] - HTML template - Amount pages (existing)
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

    .hero {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white;
      padding: 48px 0; text-align: center; border-radius: 0 0 24px 24px;
    }
    .hero h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
    .hero p { font-size: 1.1rem; opacity: 0.9; max-width: 650px; margin: 0 auto; }
    
    .payment-card {
      background: white; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      padding: 32px; text-align: center; margin-top: -32px; position: relative; z-index: 10;
      max-width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 32px;
    }
    .payment-card .label { font-size: 0.85rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .payment-card .amount { font-size: 3rem; font-weight: 800; color: #1e3a8a; }
    .payment-card .sub { font-size: 0.9rem; color: #94a3b8; margin-top: 4px; }

    .card {
      background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      padding: 28px; margin-bottom: 24px; border: 1px solid #e2e8f0;
    }
    .card h2 { font-size: 1.3rem; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
    .card h3 { font-size: 1rem; font-weight: 600; color: #1a1a2e; margin-bottom: 8px; }
    
    table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
    th { text-align: left; padding: 10px 12px; border-bottom: 2px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
    tr:last-child td { border-bottom: none; }
    .total-row td { font-weight: 700; color: #1e3a8a; border-top: 2px solid #e2e8f0; }
    .text-right { text-align: right; }
    
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

    .neighbor-links {
      display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin: 24px 0;
    }
    .neighbor-links a {
      display: inline-block; padding: 10px 20px; background: #f1f5f9; border-radius: 8px;
      color: #2563eb; text-decoration: none; font-weight: 500; font-size: 0.95rem;
      transition: background 0.2s;
    }
    .neighbor-links a:hover { background: #e2e8f0; }

    .site-footer {
      background: #1a1a2e; color: #94a3b8; padding: 32px 0; margin-top: 48px;
      text-align: center; font-size: 0.85rem;
    }
    .site-footer a { color: #93c5fd; text-decoration: none; }

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

  <section class="hero">
    <div class="container">
      <h1>Mortgage Payment on a $${fmtNumber(amount)} House</h1>
      <p>Complete monthly cost breakdown, amortization schedule, and income requirements — updated for 2025 rates.</p>
    </div>
  </section>

  <div class="payment-card">
    <div class="label">Estimated Monthly Payment</div>
    <div class="amount">${fmtCurrency(data.totalMonthly)}</div>
    <div class="sub">Principal & Interest + Taxes + Insurance • 20% down at 6.5% APR</div>
  </div>

  <main class="container">

    <div class="card">
      <h2>What's the Monthly Payment on a $${fmtNumber(amount)} House?</h2>
      <p style="margin-bottom: 12px;">${generateIntroParagraph(amount)}</p>
      <p>With a standard <strong>20% down payment (${fmtCurrency(data.loanAmount)} loan)</strong> and a <strong>6.5% interest rate</strong> on a <strong>30-year fixed-rate mortgage</strong>, your estimated total monthly payment comes to <strong>${fmtCurrency(data.totalMonthly)}</strong>.</p>
    </div>

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

    <div class="card">
      <h2>How Interest Shapes Your Payments</h2>
      <p>${generateAmortizationInsight(firstYearInterest, data.totalInterest, data.monthlyPI)}</p>
      <p style="margin-top: 8px;">Making extra principal payments — even ${fmtCurrency(100)}/month — can save you tens of thousands in interest and shave years off your loan.</p>
    </div>

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

    <div class="cta-box">
      <h3>🧮 Try the Interactive Calculator</h3>
      <p>Adjust the down payment, interest rate, or loan term — see how your payment changes in real time.</p>
      <a href="${SITE_URL}/#/calculator" class="cta-btn">Open Full Calculator →</a>
    </div>

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
// 7. Sitemap generator
// ============================================================

function generateSitemap(): string {
  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ];

  // Static SPA pages
  const staticPages: [string, string, string][] = [
    ['', '1.0', 'weekly'],
    ['#/calculator', '0.9', 'weekly'],
    ['#/blog', '0.8', 'weekly'],
    ['#/about', '0.5', 'monthly'],
    ['#/privacy', '0.3', 'yearly'],
    ['#/disclaimer', '0.3', 'yearly'],
  ];
  for (const [path, priority, freq] of staticPages) {
    lines.push(`  <url>`);
    lines.push(`    <loc>${SITE_URL}/${path}</loc>`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push(`    <changefreq>${freq}</changefreq>`);
    lines.push(`  </url>`);
  }

  // Blog articles
  const blogSlugs = [
    'how-to-use-calculator', 'amortization-schedule', 'biweekly-payments',
    'what-is-pmi', '30-vs-15-year', 'how-much-house-can-i-afford',
    'monthly-payment-breakdown', 'income-needed', 'why-mostly-interest', 'pay-off-early'
  ];
  for (const slug of blogSlugs) {
    lines.push(`  <url>`);
    lines.push(`    <loc>${SITE_URL}/#/blog/${slug}</loc>`);
    lines.push(`    <priority>0.8</priority>`);
    lines.push(`    <changefreq>monthly</changefreq>`);
    lines.push(`  </url>`);
  }

  // Amount-based SEO pages
  for (const amount of LOAN_AMOUNTS) {
    lines.push(`  <url>`);
    lines.push(`    <loc>${SITE_URL}/mortgage-payment/${amount}/</loc>`);
    lines.push(`    <priority>0.6</priority>`);
    lines.push(`    <changefreq>monthly</changefreq>`);
    lines.push(`  </url>`);
  }

  // State-based SEO pages
  for (const [code, state] of Object.entries(STATE_DATA)) {
    const slug = fmtSlug(state.name);
    lines.push(`  <url>`);
    lines.push(`    <loc>${SITE_URL}/mortgage-payment/${slug}/</loc>`);
    lines.push(`    <priority>0.6</priority>`);
    lines.push(`    <changefreq>monthly</changefreq>`);
    lines.push(`  </url>`);
  }

  lines.push(`</urlset>`);
  return lines.join('\n');
}

// ============================================================
// 8. Main execution
// ============================================================

function main() {
  console.log('🏗️  Generating programmatic SEO pages...');
  console.log(`   Site URL: ${SITE_URL}`);
  console.log(`   Output: ${DIST_DIR}`);

  // --- Phase 1: Amount-based pages ---
  console.log(`\n📊 Amount pages: ${LOAN_AMOUNTS.length}`);
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

  // --- Phase 2: State-based pages ---
  console.log(`\n🗺️  State pages: ${STATE_LIST.length}`);

  for (const state of STATE_LIST) {
    const slug = fmtSlug(state.name);
    // Use state's median home price + tax rate + insurance
    const data = calculateLoan(state.median_home_price, state.property_tax_rate * 100, state.avg_annual_insurance);
    const html = generateStateHtml(state.code, state.name, state.median_home_price, state.property_tax_rate, state.avg_annual_insurance, data);

    const outDir = path.join(DIST_DIR, 'mortgage-payment', slug);
    fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, html, 'utf-8');

    count++;
    console.log(`   ✅  ${state.name} → /mortgage-payment/${slug}/   (${fmtCurrency(data.totalMonthly)}/mo)`);
  }

  // --- Phase 3: Sitemap ---
  console.log(`\n🗺️  Generating sitemap.xml...`);
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`   ✅  sitemap.xml generated (${Object.keys(STATE_DATA).length + LOAN_AMOUNTS.length + 16} URLs)`);

  console.log(`\n✅ Done! Generated ${count} pages total.`);
}

main();
