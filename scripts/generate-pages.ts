import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ============================================================
// 0. Configuration
// ============================================================

const SITE_URL = 'https://www.mortgagepro.io';
const SITE_NAME = 'MortgagePro';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.resolve(__dirname, '..', 'dist');
const DEBUG = true;

function log(msg: string) { if (DEBUG) console.log(`   ${msg}`); }

// ============================================================
// 1. Shared helpers
// ============================================================

function fmtCurrency(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function fmtNumber(n: number): string {
  return n.toLocaleString('en-US');
}

/** Round to nearest dollar and format */
function fmtDollar(n: number): string {
  return Math.round(n).toLocaleString('en-US');
}

// ============================================================
// 2. Data — state_data.json (embedded for portability)
// ============================================================

interface StateInfo {
  name: string;
  property_tax_rate: number;
  closing_cost_pct: number;
  avg_insurance: number;
  median_price?: number;
}

const STATE_DATA: Record<string, StateInfo> = {
  AL: { name: 'Alabama', property_tax_rate: 0.004, closing_cost_pct: 0.03, avg_insurance: 1500, median_price: 210000 },
  AK: { name: 'Alaska', property_tax_rate: 0.0099, closing_cost_pct: 0.04, avg_insurance: 1300, median_price: 330000 },
  AZ: { name: 'Arizona', property_tax_rate: 0.0066, closing_cost_pct: 0.04, avg_insurance: 1200, median_price: 425000 },
  AR: { name: 'Arkansas', property_tax_rate: 0.0062, closing_cost_pct: 0.03, avg_insurance: 2000, median_price: 195000 },
  CA: { name: 'California', property_tax_rate: 0.0076, closing_cost_pct: 0.05, avg_insurance: 1200, median_price: 735000 },
  CO: { name: 'Colorado', property_tax_rate: 0.0055, closing_cost_pct: 0.04, avg_insurance: 2300, median_price: 540000 },
  CT: { name: 'Connecticut', property_tax_rate: 0.0179, closing_cost_pct: 0.04, avg_insurance: 1600, median_price: 380000 },
  DE: { name: 'Delaware', property_tax_rate: 0.0056, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 365000 },
  DC: { name: 'District of Columbia', property_tax_rate: 0.0056, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 630000 },
  FL: { name: 'Florida', property_tax_rate: 0.009, closing_cost_pct: 0.04, avg_insurance: 3500, median_price: 395000 },
  GA: { name: 'Georgia', property_tax_rate: 0.0089, closing_cost_pct: 0.04, avg_insurance: 1700, median_price: 315000 },
  HI: { name: 'Hawaii', property_tax_rate: 0.0029, closing_cost_pct: 0.04, avg_insurance: 1200, median_price: 830000 },
  ID: { name: 'Idaho', property_tax_rate: 0.0067, closing_cost_pct: 0.04, avg_insurance: 1300, median_price: 430000 },
  IL: { name: 'Illinois', property_tax_rate: 0.0195, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 275000 },
  IN: { name: 'Indiana', property_tax_rate: 0.0078, closing_cost_pct: 0.03, avg_insurance: 1800, median_price: 235000 },
  IA: { name: 'Iowa', property_tax_rate: 0.0137, closing_cost_pct: 0.03, avg_insurance: 1700, median_price: 205000 },
  KS: { name: 'Kansas', property_tax_rate: 0.0126, closing_cost_pct: 0.03, avg_insurance: 2400, median_price: 240000 },
  KY: { name: 'Kentucky', property_tax_rate: 0.0081, closing_cost_pct: 0.03, avg_insurance: 2300, median_price: 220000 },
  LA: { name: 'Louisiana', property_tax_rate: 0.0054, closing_cost_pct: 0.04, avg_insurance: 3000, median_price: 210000 },
  ME: { name: 'Maine', property_tax_rate: 0.0122, closing_cost_pct: 0.04, avg_insurance: 1300, median_price: 390000 },
  MD: { name: 'Maryland', property_tax_rate: 0.0106, closing_cost_pct: 0.04, avg_insurance: 1500, median_price: 405000 },
  MA: { name: 'Massachusetts', property_tax_rate: 0.0108, closing_cost_pct: 0.04, avg_insurance: 1700, median_price: 625000 },
  MI: { name: 'Michigan', property_tax_rate: 0.0141, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 235000 },
  MN: { name: 'Minnesota', property_tax_rate: 0.0105, closing_cost_pct: 0.04, avg_insurance: 1700, median_price: 335000 },
  MS: { name: 'Mississippi', property_tax_rate: 0.0075, closing_cost_pct: 0.03, avg_insurance: 2600, median_price: 175000 },
  MO: { name: 'Missouri', property_tax_rate: 0.0094, closing_cost_pct: 0.03, avg_insurance: 2000, median_price: 245000 },
  MT: { name: 'Montana', property_tax_rate: 0.0082, closing_cost_pct: 0.04, avg_insurance: 1800, median_price: 450000 },
  NE: { name: 'Nebraska', property_tax_rate: 0.0151, closing_cost_pct: 0.03, avg_insurance: 2200, median_price: 280000 },
  NV: { name: 'Nevada', property_tax_rate: 0.0059, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 435000 },
  NH: { name: 'New Hampshire', property_tax_rate: 0.0184, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 480000 },
  NJ: { name: 'New Jersey', property_tax_rate: 0.024, closing_cost_pct: 0.04, avg_insurance: 1400, median_price: 495000 },
  NM: { name: 'New Mexico', property_tax_rate: 0.0067, closing_cost_pct: 0.04, avg_insurance: 1500, median_price: 290000 },
  NY: { name: 'New York', property_tax_rate: 0.0138, closing_cost_pct: 0.04, avg_insurance: 1700, median_price: 425000 },
  NC: { name: 'North Carolina', property_tax_rate: 0.0072, closing_cost_pct: 0.04, avg_insurance: 1600, median_price: 315000 },
  ND: { name: 'North Dakota', property_tax_rate: 0.0096, closing_cost_pct: 0.03, avg_insurance: 2200, median_price: 240000 },
  OH: { name: 'Ohio', property_tax_rate: 0.0152, closing_cost_pct: 0.03, avg_insurance: 1300, median_price: 215000 },
  OK: { name: 'Oklahoma', property_tax_rate: 0.0085, closing_cost_pct: 0.03, avg_insurance: 3000, median_price: 200000 },
  OR: { name: 'Oregon', property_tax_rate: 0.0091, closing_cost_pct: 0.04, avg_insurance: 1100, median_price: 480000 },
  PA: { name: 'Pennsylvania', property_tax_rate: 0.0154, closing_cost_pct: 0.04, avg_insurance: 1200, median_price: 250000 },
  RI: { name: 'Rhode Island', property_tax_rate: 0.0142, closing_cost_pct: 0.04, avg_insurance: 1700, median_price: 455000 },
  SC: { name: 'South Carolina', property_tax_rate: 0.0054, closing_cost_pct: 0.04, avg_insurance: 2100, median_price: 300000 },
  SD: { name: 'South Dakota', property_tax_rate: 0.011, closing_cost_pct: 0.03, avg_insurance: 2400, median_price: 290000 },
  TN: { name: 'Tennessee', property_tax_rate: 0.0067, closing_cost_pct: 0.04, avg_insurance: 2000, median_price: 315000 },
  TX: { name: 'Texas', property_tax_rate: 0.018, closing_cost_pct: 0.04, avg_insurance: 2500, median_price: 330000 },
  UT: { name: 'Utah', property_tax_rate: 0.0059, closing_cost_pct: 0.04, avg_insurance: 1200, median_price: 510000 },
  VT: { name: 'Vermont', property_tax_rate: 0.0179, closing_cost_pct: 0.04, avg_insurance: 1300, median_price: 340000 },
  VA: { name: 'Virginia', property_tax_rate: 0.0081, closing_cost_pct: 0.04, avg_insurance: 1500, median_price: 375000 },
  WA: { name: 'Washington', property_tax_rate: 0.0092, closing_cost_pct: 0.04, avg_insurance: 1300, median_price: 570000 },
  WV: { name: 'West Virginia', property_tax_rate: 0.0058, closing_cost_pct: 0.03, avg_insurance: 1700, median_price: 160000 },
  WI: { name: 'Wisconsin', property_tax_rate: 0.0157, closing_cost_pct: 0.04, avg_insurance: 1100, median_price: 300000 },
  WY: { name: 'Wyoming', property_tax_rate: 0.006, closing_cost_pct: 0.03, avg_insurance: 2000, median_price: 330000 },
};

// ============================================================
// 3. Mortgage math
// ============================================================

interface MortgageData {
  loanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  totalMonthly: number;
  incomeNeeded: number;
  totalInterest: number;
}

function calcMortgage(price: number, taxRate: number, insurance: number, downPct: number = 20, rate: number = 6.5): MortgageData {
  const downPayment = price * (downPct / 100);
  const loanAmount = price - downPayment;
  const monthlyRate = rate / 100 / 12;
  const numPayments = 30 * 12;

  let monthlyPI = 0;
  if (monthlyRate > 0) {
    monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyPI = loanAmount / numPayments;
  }

  const monthlyTax = (price * taxRate) / 12;
  const monthlyInsurance = insurance / 12;
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;

  return {
    loanAmount: Math.round(loanAmount),
    monthlyPI: Math.round(monthlyPI),
    monthlyTax: Math.round(monthlyTax),
    monthlyInsurance: Math.round(monthlyInsurance),
    totalMonthly: Math.round(totalMonthly),
    incomeNeeded: Math.ceil((totalMonthly / 0.28) * 12 / 1000) * 1000,
    totalInterest: Math.round(monthlyPI * numPayments - loanAmount),
  };
}

function calcFirstYearInterest(loanAmount: number, rate: number): number {
  const monthlyRate = rate / 100 / 12;
  const numPayments = 30 * 12;
  if (monthlyRate <= 0) return 0;
  const monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  let firstYearInterest = 0;
  let remaining = loanAmount;
  for (let m = 1; m <= 12; m++) {
    const ip = remaining * monthlyRate;
    firstYearInterest += ip;
    const pp = monthlyPI - ip;
    remaining -= pp;
  }
  return Math.round(firstYearInterest);
}

function calcAmortSchedule(loanAmount: number, rate: number): { year: number; principal: number; interest: number; balance: number }[] {
  const monthlyRate = rate / 100 / 12;
  const numPayments = 30 * 12;
  if (monthlyRate <= 0) return [];
  const monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  const years: { year: number; principal: number; interest: number; balance: number }[] = [];
  let remaining = loanAmount;
  for (let y = 1; y <= 10; y++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    for (let m = 1; m <= 12; m++) {
      const ip = remaining * monthlyRate;
      yearInterest += ip;
      const pp = monthlyPI - ip;
      yearPrincipal += pp;
      remaining -= pp;
    }
    years.push({
      year: y,
      principal: Math.round(yearPrincipal),
      interest: Math.round(yearInterest),
      balance: Math.round(Math.max(0, remaining)),
    });
  }
  return years;
}

// ============================================================
// 4a. Data-driven classifier helpers
// ============================================================

type Tier = 'affordable' | 'mid-range' | 'upper-mid-range' | 'high-cost';
type TaxTier = 'low' | 'moderate' | 'high';
type InsuranceTier = 'low' | 'moderate' | 'high';

function priceTier(price: number): { tier: Tier; desc: string } {
  if (price <= 250000) return { tier: 'affordable', desc: 'entry-level / affordable' };
  if (price <= 450000) return { tier: 'mid-range', desc: 'mid-range' };
  if (price <= 650000) return { tier: 'upper-mid-range', desc: 'upper-mid-range' };
  return { tier: 'high-cost', desc: 'high-cost / premium' };
}

function taxTier(rate: number): { tier: TaxTier; desc: string; label: string } {
  if (rate < 0.006) return { tier: 'low', desc: 'well below', label: 'low' };
  if (rate <= 0.015) return { tier: 'moderate', desc: 'moderate', label: 'moderate' };
  return { tier: 'high', desc: 'well above', label: 'high' };
}

function insuranceTier(annualCost: number): { tier: InsuranceTier; desc: string } {
  if (annualCost < 1300) return { tier: 'low', desc: 'low' };
  if (annualCost <= 2800) return { tier: 'moderate', desc: 'moderate' };
  return { tier: 'high', desc: 'high — likely driven by exposure to severe weather, coastal winds, or tornado activity' };
}

const NATIONAL_AVG_TAX_RATE = 0.0099;
const NATIONAL_AVG_INSURANCE = 1818;

function fmtPct(v: number): string {
  return (v * 100).toFixed(2);
}

// ============================================================
// 4b. Market Overview — dynamic paragraph
// ============================================================

function generateMarketOverview(stateName: string, medianPrice: number, taxRate: number, insurance: number): string {
  const pt = priceTier(medianPrice);
  const tt = taxTier(taxRate);
  const it = insuranceTier(insurance);
  const taxVsNational = taxRate < NATIONAL_AVG_TAX_RATE ? 'lower than' : taxRate > NATIONAL_AVG_TAX_RATE ? 'higher than' : 'close to';
  const insVsNational = insurance < NATIONAL_AVG_INSURANCE ? 'below' : 'above';

  return `<p><strong>${stateName}</strong> ranks as a <strong>${pt.desc}</strong> housing market, with a median home price of <strong>${fmtCurrency(medianPrice)}</strong>. The state's effective property tax rate of <strong>${fmtPct(taxRate)}%</strong> is <strong>${taxVsNational}</strong> the national average of ${fmtPct(NATIONAL_AVG_TAX_RATE)}%, and annual homeowners insurance averaging <strong>${fmtCurrency(insurance)}</strong> falls <strong>${insVsNational}</strong> the US median of ${fmtCurrency(NATIONAL_AVG_INSURANCE)}.</p>

<p>These three factors — price level, tax burden, and insurance costs — combine to shape the true monthly cost of homeownership in ${stateName}. Below we break down a realistic purchase scenario using state-specific data.</p>`;
}

// ============================================================
// 4c. Purchase Example — full breakdown with closing costs and PMI
// ============================================================

interface PurchaseExampleResult {
  homePrice: number;
  downPct: number;
  downAmount: number;
  loanAmount: number;
  monthlyPI: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyPMI: number;
  totalMonthly: number;
  incomeNeeded: number;
  closingCosts: number;
  totalCashNeeded: number;
  monthlyPI_10down: number;
  monthlyPMI_10down: number;
  totalMonthly_10down: number;
  incomeNeeded_10down: number;
  firstYearInterest: number;
  totalInterest: number;
}

function calculatePurchaseExample(homePrice: number, taxRate: number, insurance: number): PurchaseExampleResult {
  const downPct = 20;
  const downAmount = homePrice * (downPct / 100);
  const loanAmount = homePrice - downAmount;
  const annualRate = 6.5;
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = 30 * 12;

  let monthlyPI = 0;
  if (monthlyRate > 0) {
    monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyPI = loanAmount / numPayments;
  }

  const monthlyTax = (homePrice * taxRate) / 12;
  const monthlyInsurance = insurance / 12;
  const monthlyPMI = loanAmount * 0.006 / 12; // only used for display in 10%-down comparison
  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance; // 20% down = no PMI
  const incomeNeeded = Math.ceil((totalMonthly / 0.28) * 12 / 1000) * 1000;

  const closingCosts = Math.round(homePrice * 0.035);
  const totalCashNeeded = downAmount + closingCosts;

  // 10% down scenario
  const downAmount_10 = homePrice * 0.10;
  const loanAmount_10 = homePrice - downAmount_10;
  let monthlyPI_10 = 0;
  if (monthlyRate > 0) {
    monthlyPI_10 = (loanAmount_10 * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  } else {
    monthlyPI_10 = loanAmount_10 / numPayments;
  }
  const monthlyPMI_10 = loanAmount_10 * 0.007 / 12;
  const totalMonthly_10 = monthlyPI_10 + monthlyTax + monthlyInsurance + monthlyPMI_10;
  const incomeNeeded_10 = Math.ceil((totalMonthly_10 / 0.28) * 12 / 1000) * 1000;

  // Interest totals
  let remaining = loanAmount;
  let totalInterest = 0;
  let firstYearInterest = 0;
  for (let m = 1; m <= numPayments; m++) {
    const ip = remaining * monthlyRate;
    totalInterest += ip;
    if (m <= 12) firstYearInterest += ip;
    const pp = monthlyPI - ip;
    remaining -= pp;
  }

  return {
    homePrice, downPct, downAmount: Math.round(downAmount), loanAmount: Math.round(loanAmount),
    monthlyPI: Math.round(monthlyPI), monthlyTax: Math.round(monthlyTax),
    monthlyInsurance: Math.round(monthlyInsurance), monthlyPMI: Math.round(monthlyPMI),
    totalMonthly: Math.round(totalMonthly), incomeNeeded,
    closingCosts, totalCashNeeded: Math.round(totalCashNeeded),
    monthlyPI_10down: Math.round(monthlyPI_10), monthlyPMI_10down: Math.round(monthlyPMI_10),
    totalMonthly_10down: Math.round(totalMonthly_10), incomeNeeded_10down: incomeNeeded_10,
    firstYearInterest: Math.round(firstYearInterest), totalInterest: Math.round(totalInterest),
  };
}

function generatePurchaseExampleHtml(stateName: string, p: PurchaseExampleResult, taxRate: number): string {
  return `<div class="card">
  <h2>🏡 Purchase Example: Buying a ${fmtCurrency(p.homePrice)} Home in ${stateName}</h2>
  <p>Using the state's median home price of <strong>${fmtCurrency(p.homePrice)}</strong>, a <strong>${p.downPct}% down payment</strong>, and a <strong>6.5% 30-year fixed rate</strong>, here is the complete picture of what it costs to buy in ${stateName}:</p>

  <table>
    <thead>
      <tr><th>Cost Component</th><th class="text-right">Amount</th></tr>
    </thead>
    <tbody>
      <tr><td>Home Price</td><td class="text-right">${fmtCurrency(p.homePrice)}</td></tr>
      <tr><td>Down Payment (${p.downPct}%)</td><td class="text-right">${fmtCurrency(p.downAmount)}</td></tr>
      <tr><td>Loan Amount</td><td class="text-right">${fmtCurrency(p.loanAmount)}</td></tr>
      <tr><td>Estimated Closing Costs (3.5%)</td><td class="text-right">${fmtCurrency(p.closingCosts)}</td></tr>
      <tr><td><strong>Total Cash Needed at Closing</strong></td><td class="text-right"><strong>${fmtCurrency(p.totalCashNeeded)}</strong></td></tr>
    </tbody>
  </table>

  <h3 style="margin-top: 20px;">Monthly Payment (20% Down)</h3>
  <table>
    <thead><tr><th>Item</th><th class="text-right">Monthly</th></tr></thead>
    <tbody>
      <tr><td>Principal & Interest</td><td class="text-right">${fmtCurrency(p.monthlyPI)}</td></tr>
      <tr><td>Property Taxes (${fmtPct(taxRate)}%)</td><td class="text-right">${fmtCurrency(p.monthlyTax)}</td></tr>
      <tr><td>Homeowners Insurance</td><td class="text-right">${fmtCurrency(p.monthlyInsurance)}</td></tr>
      <tr><td>PMI (not needed at 20% down)</td><td class="text-right">$0</td></tr>
      <tr class="total-row"><td><strong>Total Monthly Payment</strong></td><td class="text-right"><strong>${fmtCurrency(p.totalMonthly)}</strong></td></tr>
    </tbody>
  </table>
  <p style="margin-top: 8px;">Annual income needed (28% DTI): <strong>${fmtCurrency(p.incomeNeeded)}/yr</strong></p>

  <h3 style="margin-top: 20px;">PMI Scenario: What If You Put Only 10% Down?</h3>
  <p>With a <strong>10% down payment</strong> (${fmtCurrency(Math.round(p.homePrice * 0.10))}), you'd have a loan of <strong>${fmtCurrency(Math.round(p.homePrice * 0.90))}</strong> and would need to pay Private Mortgage Insurance (PMI) at roughly 0.7% of the loan annually:</p>
  <table>
    <thead><tr><th>Item</th><th class="text-right">10% Down</th><th class="text-right">20% Down (savings)</th></tr></thead>
    <tbody>
      <tr><td>Principal & Interest</td><td class="text-right">${fmtCurrency(p.monthlyPI_10down)}</td><td class="text-right">${fmtCurrency(p.monthlyPI)}</td></tr>
      <tr><td>Monthly PMI</td><td class="text-right">${fmtCurrency(p.monthlyPMI_10down)}</td><td class="text-right">$0</td></tr>
      <tr><td>Total PITI+PMI</td><td class="text-right"><strong>${fmtCurrency(p.totalMonthly_10down)}</strong></td><td class="text-right"><strong>${fmtCurrency(p.totalMonthly)}</strong></td></tr>
    </tbody>
  </table>
  <p>The lower down payment costs you an extra <strong>${fmtCurrency(p.totalMonthly_10down - p.totalMonthly)}/month</strong> (P&I + PMI). You would need <strong>${fmtCurrency(p.incomeNeeded_10down)}/yr</strong> to qualify under the 28% DTI rule. PMI can typically be canceled once you reach 20% equity.</p>

  <p style="margin-top: 12px;"><strong>First-year interest:</strong> In year one, <strong>${fmtCurrency(p.firstYearInterest)}</strong> of your payments go to interest alone. Over the full 30-year term, you'll pay <strong>${fmtCurrency(p.totalInterest)}</strong> in total interest.</p>
</div>`;
}

// ============================================================
// 4d. State-specific cost notes
// ============================================================

function generateCostNotes(stateName: string, _code: string, taxRate: number, insurance: number, p: PurchaseExampleResult): string {
  const tt = taxTier(taxRate);
  const it = insuranceTier(insurance);
  const pt = priceTier(p.homePrice);
  const closingCostRange = pt.tier === 'high-cost' ? '3%–5%' : '2%–4%';
  const taxComment = tt.tier === 'high'
    ? `<strong>Property taxes</strong> in ${stateName} are among the highest in the nation at <strong>${fmtPct(taxRate)}%</strong>. On a ${fmtCurrency(p.homePrice)} home, that's <strong>${fmtCurrency(Math.round(p.homePrice * taxRate))}/year</strong> — significantly above the national norm. Buyers should factor this into their budget, as it adds roughly <strong>${fmtCurrency(p.monthlyTax)}/month</strong> to the payment.`
    : tt.tier === 'low'
    ? `<strong>Property taxes</strong> in ${stateName} are relatively low at <strong>${fmtPct(taxRate)}%</strong>, costing about <strong>${fmtCurrency(Math.round(p.homePrice * taxRate))}/year</strong> (${fmtCurrency(p.monthlyTax)}/month) on the median home. This is one area where ${stateName} offers a clear cost advantage.`
    : `<strong>Property taxes</strong> in ${stateName} are <strong>${fmtPct(taxRate)}%</strong>, meaning about <strong>${fmtCurrency(Math.round(p.homePrice * taxRate))}/year</strong> (${fmtCurrency(p.monthlyTax)}/month) on the median-priced home.`;

  const insComment = it.tier === 'high'
    ? `<strong>Homeowners insurance</strong> in ${stateName} is notably expensive — <strong>${fmtCurrency(insurance)}/year</strong>. This is likely due to exposure to severe weather patterns. It adds <strong>${fmtCurrency(p.monthlyInsurance)}/month</strong> to your housing costs.`
    : it.tier === 'low'
    ? `<strong>Homeowners insurance</strong> in ${stateName} is quite affordable at <strong>${fmtCurrency(insurance)}/year</strong> (${fmtCurrency(p.monthlyInsurance)}/month), well below the national median.`
    : `<strong>Homeowners insurance</strong> in ${stateName} averages <strong>${fmtCurrency(insurance)}/year</strong> (${fmtCurrency(p.monthlyInsurance)}/month).`;

  return `<div class="card">
  <h2>💰 State-Specific Cost Notes for ${stateName}</h2>
  ${taxComment}
  <p style="margin-top: 10px;">${insComment}</p>
  <p style="margin-top: 10px;"><strong>Closing costs</strong> in a ${pt.desc} market like ${stateName} typically run <strong>${closingCostRange}</strong> of the purchase price — roughly <strong>${fmtCurrency(p.closingCosts)}</strong> on a ${fmtCurrency(p.homePrice)} home. This includes loan origination, appraisal, title insurance, escrow fees, and prepaid taxes/insurance.</p>
</div>`;
}

// ============================================================
// 4e. State-specific FAQ (5 questions with real data)
// ============================================================

function getAgencyName(stateName: string): string {
  const agencyMap: Record<string, string> = {
    'California': 'CalHFA',
    'Texas': 'the Texas Department of Housing and Community Affairs',
    'Florida': 'Florida Housing',
    'New York': 'SONYMA',
    'Illinois': 'the Illinois Housing Development Authority',
    'Washington': 'the Washington State Housing Finance Commission',
    'Massachusetts': 'MassHousing',
    'Colorado': 'CHFA',
    'New Jersey': 'NJHMFA',
  };
  return agencyMap[stateName] || 'your state housing agency';
}

function generateStateFAQ(stateName: string, _code: string, taxRate: number, insurance: number, p: PurchaseExampleResult): string {
  const tt = taxTier(taxRate);
  const it = insuranceTier(insurance);
  const taxYear = Math.round(p.homePrice * taxRate);
  const agencyName = getAgencyName(stateName);

  const faqItems: { q: string; a: string }[] = [
    {
      q: `How much income do I need to buy a house in ${stateName}?`,
      a: `With the median home price in ${stateName} at <strong>${fmtCurrency(p.homePrice)}</strong> and a 20% down payment, you need roughly <strong>${fmtCurrency(p.incomeNeeded)}/year</strong> based on the 28% front-end DTI rule (total monthly housing costs of ${fmtCurrency(p.totalMonthly)}). If you put down 10%, the income requirement rises to about <strong>${fmtCurrency(p.incomeNeeded_10down)}/year</strong> due to the higher loan amount and PMI.`,
    },
    {
      q: `What's the minimum down payment in ${stateName}?`,
      a: `While 20% down (${fmtCurrency(p.downAmount)}) avoids PMI, many ${stateName} buyers opt for lower down payments. FHA loans require as little as 3.5% (${fmtCurrency(Math.round(p.homePrice * 0.035))}), and conventional loans can go as low as 3%–5% (${fmtCurrency(Math.round(p.homePrice * 0.03))}–${fmtCurrency(Math.round(p.homePrice * 0.05))}). However, a 10% down payment (${fmtCurrency(Math.round(p.homePrice * 0.10))}) would cost you <strong>${fmtCurrency(p.totalMonthly_10down)}/month</strong> — about <strong>${fmtCurrency(p.totalMonthly_10down - p.totalMonthly)} more</strong> than 20% down — due to PMI and a larger principal.`,
    },
    {
      q: `What are property taxes like in ${stateName}?`,
      a: `${stateName}'s effective property tax rate is <strong>${fmtPct(taxRate)}%</strong>, which is ${tt.desc} the national average of ${fmtPct(NATIONAL_AVG_TAX_RATE)}. On a ${fmtCurrency(p.homePrice)} home, you'd pay approximately <strong>${fmtCurrency(taxYear)}/year</strong> in property taxes (${fmtCurrency(p.monthlyTax)}/month).${tt.tier === 'high' ? ' This is a significant ongoing cost that buyers should weigh carefully against their monthly budget.' : tt.tier === 'low' ? ' This lower tax burden helps keep monthly costs more manageable.' : ''}`,
    },
    {
      q: `How much is homeowners insurance in ${stateName}?`,
      a: `The average annual premium in ${stateName} is <strong>${fmtCurrency(insurance)}</strong>, which is ${it.tier === 'high' ? 'well above' : it.tier === 'low' ? 'well below' : 'roughly in line with'} the US median of ${fmtCurrency(NATIONAL_AVG_INSURANCE)}. ${it.tier === 'high' ? ' This elevated cost is often tied to weather-related risks. Be sure to shop around and compare quotes from multiple insurers.' : ' This is a relatively affordable insurance market for homeowners.'} This adds <strong>${fmtCurrency(p.monthlyInsurance)}/month</strong> to your payment.`,
    },
    {
      q: `What are the total closing costs for a home in ${stateName}?`,
      a: `On a ${fmtCurrency(p.homePrice)} home in ${stateName}, expect to pay about <strong>${fmtCurrency(p.closingCosts)}</strong> in closing costs. Combined with a 20% down payment (${fmtCurrency(p.downAmount)}), you'd need approximately <strong>${fmtCurrency(p.totalCashNeeded)}</strong> in cash at closing. First-time buyers in ${stateName} may qualify for down payment assistance programs or reduced closing costs through local housing authorities — check <strong>${agencyName}</strong> for available grants and low-interest loan programs.`,
    },
  ];

  const faqHtml = faqItems.map((item, i) => {
    const borderStyle = i < faqItems.length - 1 ? 'margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;' : '';
    return `<div style="${borderStyle}">
      <h3 style="font-size: 1rem; margin-bottom: 6px;">${item.q}</h3>
      <p style="color: #475569; font-size: 0.95rem;">${item.a}</p>
    </div>`;
  }).join('\n');

  return `<div class="card">
  <h2>❓ Frequently Asked Questions — Buying a Home in ${stateName}</h2>
  <div style="margin-top: 16px;">
    ${faqHtml}
  </div>
</div>`;
}

// ============================================================
// 4f. HTML template - State pages (enhanced)
// ============================================================

function generateStateMetaTitle(stateName: string): string {
  return `${stateName} Mortgage Calculator (2025) | Monthly Payment & Home Affordability`;
}

function generateStateMetaDescription(stateName: string, medianPrice: number, monthly: number): string {
  return `Calculate your monthly mortgage payment in ${stateName} for 2025. See the breakdown of principal, interest, property taxes (state-specific rate), and insurance. Based on a median home price of ${fmtCurrency(medianPrice)} with 20% down at 6.5% APR, the estimated payment is ${fmtCurrency(monthly)}/mo.`;
}

function generateRecommendedReadingHtml(articles: { url: string; title: string }[]): string {
  if (!articles.length) return '';
  const items = articles.map(a =>
    `      <a href="${SITE_URL}${a.url}" class="neighbor-links-item">${a.title}</a>`
  ).join('\n');
  return `<div class="card">
      <h2>📖 Recommended Reading</h2>
      <div class="neighbor-links">
${items}
      </div>
    </div>`;
}

interface BlogArticle {
  url: string;
  title: string;
  category: string;
}

function getRecommendedArticles(_isState: boolean): BlogArticle[] {
  return [
    { url: '/blog/how-to-use-calculator', title: 'How to Use Our Mortgage Calculator', category: 'guides' },
    { url: '/blog/biweekly-payments', title: 'Bi-Weekly Mortgage Payments: Are They Worth It?', category: 'guides' },
    { url: '/blog/what-is-pmi', title: 'PMI in Mortgages: What It Is and How to Calculate It', category: 'guides' },
    { url: '/blog/amortization-schedule', title: 'What is an Amortization Schedule?', category: 'guides' },
    { url: '/blog/30-vs-15-year', title: '30-Year vs 15-Year Mortgage', category: 'guides' },
  ];
}

function generateStateHtml(
  stateName: string,
  code: string,
  medianPrice: number,
  taxRate: number,
  insurance: number,
  stateSlug: string,
): string {
  const data = calcMortgage(medianPrice, taxRate, insurance);
  const firstYearInterest = calcFirstYearInterest(data.loanAmount, 6.5);
  const amortRows = calcAmortSchedule(data.loanAmount, 6.5).map(y =>
    `            <tr><td>Year ${y.year}</td><td class="text-right">${fmtCurrency(y.principal)}</td><td class="text-right">${fmtCurrency(y.interest)}</td><td class="text-right">${fmtCurrency(y.balance)}</td></tr>`
  ).join('\n');

  // New data-driven sections
  const pt = priceTier(medianPrice);
  const marketOverview = generateMarketOverview(stateName, medianPrice, taxRate, insurance);
  const purchaseExample = calculatePurchaseExample(medianPrice, taxRate, insurance);
  const purchaseExampleHtml = generatePurchaseExampleHtml(stateName, purchaseExample, taxRate);
  const costNotes = generateCostNotes(stateName, code, taxRate, insurance, purchaseExample);
  const faqHtml = generateStateFAQ(stateName, code, taxRate, insurance, purchaseExample);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${generateStateMetaDescription(stateName, medianPrice, data.totalMonthly)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="#1e3a8a">
  <link rel="canonical" href="${SITE_URL}/mortgage-payment/${stateSlug}/">

  <title>${generateStateMetaTitle(stateName)}</title>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much income do I need to buy a house in ${stateName}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In ${stateName}, with a median home price of ${fmtCurrency(medianPrice)} and 20% down, you need about ${fmtCurrency(purchaseExample.incomeNeeded)} per year based on the 28% DTI rule."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical property tax rate in ${stateName}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${stateName}'s effective property tax rate is ${fmtPct(taxRate)}%, which is ${taxRate < NATIONAL_AVG_TAX_RATE ? 'below' : 'above'} the national average of ${fmtPct(NATIONAL_AVG_TAX_RATE)}%."
        }
      },
      {
        "@type": "Question",
        "name": "How much is homeowners insurance in ${stateName}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average annual premium in ${stateName} is ${fmtCurrency(insurance)}."
        }
      }
    ]
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
    .neighbor-links-item {
      display: inline-block; padding: 10px 20px; background: #f1f5f9; border-radius: 8px;
      color: #2563eb; text-decoration: none; font-weight: 500; font-size: 0.95rem;
      transition: background 0.2s;
    }
    .neighbor-links-item:hover { background: #e2e8f0; }

    .site-footer {
      background: #1a1a2e; color: #94a3b8; padding: 32px 0; margin-top: 48px;
      text-align: center; font-size: 0.85rem;
    }
    .site-footer a { color: #93c5fd; text-decoration: none; }

    .tier-badge {
      display: inline-block; padding: 4px 12px; border-radius: 999px;
      font-size: 0.8rem; font-weight: 600; margin-left: 6px;
    }
    .tier-affordable { background: #dcfce7; color: #166534; }
    .tier-mid-range { background: #dbeafe; color: #1e40af; }
    .tier-upper-mid-range { background: #fef3c7; color: #92400e; }
    .tier-high-cost { background: #fee2e2; color: #991b1b; }
    .tier-low { background: #dcfce7; color: #166534; }
    .tier-moderate { background: #fef3c7; color: #92400e; }
    .tier-high { background: #fee2e2; color: #991b1b; }

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
        <a href="${SITE_URL}/mortgage-calculator">Calculator</a>
        <a href="${SITE_URL}/blog">Blog</a>
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
      <h2>Market Overview: ${stateName} Housing ${pt.tier === 'affordable' ? '<span class="tier-badge tier-affordable">Affordable</span>' : pt.tier === 'mid-range' ? '<span class="tier-badge tier-mid-range">Mid-Range</span>' : pt.tier === 'upper-mid-range' ? '<span class="tier-badge tier-upper-mid-range">Upper Mid-Range</span>' : '<span class="tier-badge tier-high-cost">High Cost</span>'}</h2>
      ${marketOverview}
    </div>

    ${purchaseExampleHtml}

    ${costNotes}

    <div class="card">
      <h2>Monthly Payment on a ${fmtCurrency(medianPrice)} Home in ${stateName}</h2>
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

    ${faqHtml}

    <div class="cta-box">
      <h3>🧮 Try the Interactive Calculator</h3>
      <p>Adjust the down payment, interest rate, or loan term — see how your payment changes in real time.</p>
      <a href="${SITE_URL}/mortgage-calculator" class="cta-btn">Open Full Calculator →</a>
    </div>

    <div class="card" style="text-align: center;">
      <h2>Compare Mortgage Costs by State</h2>
      <div class="neighbor-links">
        <a href="${SITE_URL}/calculator" class="neighbor-links-item">Use the Interactive Calculator →</a>
      </div>
      <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 8px;">
        Explore state-specific rates, down payments, and loan terms.
      </p>
    </div>

    ${generateRecommendedReadingHtml(getRecommendedArticles(true))}

    <div style="font-size: 0.8rem; color: #94a3b8; padding: 16px; text-align: center; line-height: 1.5;">
      <p><strong>Disclaimer:</strong> This is an estimate for informational purposes only. Actual mortgage payments depend on your credit score, exact interest rate, property taxes, insurance premiums, PMI, and other factors. Sources: Zillow Q1 2025 (median home prices), ATTOM 2025 (property tax rates), Quadrant Information Services Feb 2025 (insurance premiums). Consult a qualified mortgage professional for personalized advice. See our full <a href="${SITE_URL}/disclaimer" style="color: #93c5fd;">Disclaimer</a>.</p>
    </div>

  </main>

  <footer class="site-footer">
    <div class="container">
      <p>${SITE_NAME} — Free mortgage calculators and educational resources.</p>
      <p style="margin-top: 4px;">
        <a href="${SITE_URL}/privacy">Privacy</a> &middot;
        <a href="${SITE_URL}/disclaimer">Disclaimer</a> &middot;
        <a href="${SITE_URL}/about">About</a>
      </p>
    </div>
  </footer>

</body>
</html>`;
}

// ============================================================
// 5a. Content generation - Amount pages
// ============================================================

function generateMetaTitle(amount: number): string {
  return `$${fmtNumber(amount)} Mortgage Calculator (2025) | Monthly Payment & Home Affordability`;
}

function generateMetaDescription(amount: number, monthly: number): string {
  return `Calculate your monthly mortgage payment on a $${fmtNumber(amount)} house for 2025. With 20% down at 6.5% APR, the estimated payment is ${fmtCurrency(monthly)}/mo including principal, interest, taxes & insurance. Full PITI breakdown and amortization schedule.`;
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
  return `<p>A <strong>$${fmtNumber(amount)}</strong> purchase price places you in the <strong>${category}</strong> tier of the US housing market. With a <strong>20% down payment</strong> and a <strong>6.5% APR on a 30-year fixed-rate mortgage</strong>, here is a complete breakdown of your estimated monthly costs.</p>`;
}

function generateAmountHtml(amount: number, slug: string): string {
  const taxRate = 0.0099; // national avg
  const insurance = 1818;  // national avg
  const data = calcMortgage(amount, taxRate, insurance);
  const firstYearInterest = calcFirstYearInterest(data.loanAmount, 6.5);
  const amortRows = calcAmortSchedule(data.loanAmount, 6.5).map(y =>
    `            <tr><td>Year ${y.year}</td><td class="text-right">${fmtCurrency(y.principal)}</td><td class="text-right">${fmtCurrency(y.interest)}</td><td class="text-right">${fmtCurrency(y.balance)}</td></tr>`
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${generateMetaDescription(amount, data.totalMonthly)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${SITE_URL}/mortgage-payment/${slug}/">
  <title>${generateMetaTitle(amount)}</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; background: #f8fafc; }
    .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
    .site-header { background: #fff; border-bottom: 1px solid #e2e8f0; padding: 16px 0; position: sticky; top: 0; z-index: 100; }
    .site-header .container { display: flex; justify-content: space-between; align-items: center; }
    .logo { font-size: 1.5rem; font-weight: 800; color: #1a1a2e; text-decoration: none; }
    .logo span { color: #2563eb; }
    .nav-links { display: flex; gap: 24px; }
    .nav-links a { color: #64748b; text-decoration: none; font-size: 0.9rem; font-weight: 500; }
    .nav-links a:hover { color: #2563eb; }
    .hero { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: white; padding: 48px 0; text-align: center; border-radius: 0 0 24px 24px; }
    .hero h1 { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
    .hero p { font-size: 1.1rem; opacity: 0.9; max-width: 650px; margin: 0 auto; }
    .payment-card { background: white; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); padding: 32px; text-align: center; margin-top: -32px; position: relative; z-index: 10; max-width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 32px; }
    .payment-card .label { font-size: 0.85rem; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .payment-card .amount { font-size: 3rem; font-weight: 800; color: #1e3a8a; }
    .payment-card .sub { font-size: 0.9rem; color: #94a3b8; margin-top: 4px; }
    .card { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); padding: 28px; margin-bottom: 24px; border: 1px solid #e2e8f0; }
    .card h2 { font-size: 1.3rem; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
    .card h3 { font-size: 1rem; font-weight: 600; color: #1a1a2e; margin-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
    th { text-align: left; padding: 10px 12px; border-bottom: 2px solid #e2e8f0; color: #64748b; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; }
    td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
    tr:last-child td { border-bottom: none; }
    .total-row td { font-weight: 700; color: #1e3a8a; border-top: 2px solid #e2e8f0; }
    .text-right { text-align: right; }
    .cta-box { background: linear-gradient(135deg, #f0f7ff 0%, #e8f0fe 100%); border: 2px dashed #2563eb; border-radius: 16px; padding: 36px; text-align: center; margin: 32px 0; }
    .cta-box h3 { font-size: 1.4rem; font-weight: 700; color: #1e3a8a; margin-bottom: 12px; }
    .cta-box p { color: #475569; margin-bottom: 20px; }
    .cta-btn { display: inline-block; background: #2563eb; color: white; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1.1rem; transition: background 0.2s; }
    .cta-btn:hover { background: #1d4ed8; }
    .site-footer { background: #1a1a2e; color: #94a3b8; padding: 32px 0; margin-top: 48px; text-align: center; font-size: 0.85rem; }
    .site-footer a { color: #93c5fd; text-decoration: none; }
    @media (max-width: 640px) { .hero h1 { font-size: 1.6rem; } .payment-card .amount { font-size: 2.2rem; } .nav-links { display: none; } .card { padding: 20px; } table { font-size: 0.85rem; } th, td { padding: 8px; } }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <a href="${SITE_URL}/" class="logo">Mortgage<span>Pro</span></a>
      <nav class="nav-links">
        <a href="${SITE_URL}/">Home</a>
        <a href="${SITE_URL}/mortgage-calculator">Calculator</a>
        <a href="${SITE_URL}/blog">Blog</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h1>$${fmtNumber(amount)} Mortgage Payment (2025)</h1>
      <p>Complete monthly cost breakdown for a $${fmtNumber(amount)} home — national average taxes, insurance, and full amortization schedule.</p>
    </div>
  </section>

  <div class="payment-card">
    <div class="label">Estimated Monthly Payment</div>
    <div class="amount">${fmtCurrency(data.totalMonthly)}</div>
    <div class="sub">Principal & Interest + Taxes + Insurance • 20% down at 6.5% APR</div>
  </div>

  <main class="container">
    <div class="card">
      <h2>Monthly Payment on a $${fmtNumber(amount)} Home</h2>
      ${generateIntroParagraph(amount)}
    </div>

    <div class="card">
      <h2>Monthly Payment Breakdown</h2>
      <table>
        <thead><tr><th>Component</th><th class="text-right">Monthly Cost</th><th class="text-right">Annual Cost</th></tr></thead>
        <tbody>
          <tr><td><strong>Principal & Interest</strong></td><td class="text-right">${fmtCurrency(data.monthlyPI)}</td><td class="text-right">${fmtCurrency(data.monthlyPI * 12)}</td></tr>
          <tr><td>Property Taxes (0.99% est.)</td><td class="text-right">${fmtCurrency(data.monthlyTax)}</td><td class="text-right">${fmtCurrency(data.monthlyTax * 12)}</td></tr>
          <tr><td>Home Insurance</td><td class="text-right">${fmtCurrency(data.monthlyInsurance)}</td><td class="text-right">${fmtCurrency(data.monthlyInsurance * 12)}</td></tr>
          <tr class="total-row"><td>Total Monthly Payment</td><td class="text-right">${fmtCurrency(data.totalMonthly)}</td><td class="text-right">${fmtCurrency(data.totalMonthly * 12)}</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card">
      <h2>Income Required</h2>
      <p>Using the standard <strong>28% front-end DTI rule</strong>, you'd need a gross annual income of approximately <strong>${fmtCurrency(data.incomeNeeded)}</strong> to comfortably afford this home with 20% down at 6.5%.</p>
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
          <thead><tr><th>Year</th><th class="text-right">Principal Paid</th><th class="text-right">Interest Paid</th><th class="text-right">Balance Remaining</th></tr></thead>
          <tbody>${amortRows}</tbody>
        </table>
      </div>
      <p style="margin-top: 12px; font-size: 0.85rem; color: #94a3b8;">* Full 30-year amortization available in our interactive calculator.</p>
    </div>

    <div class="cta-box">
      <h3>🧮 Try the Interactive Calculator</h3>
      <p>Adjust the down payment, interest rate, or loan term — see how your payment changes in real time.</p>
      <a href="${SITE_URL}/mortgage-calculator" class="cta-btn">Open Full Calculator →</a>
    </div>

    <div style="font-size: 0.8rem; color: #94a3b8; padding: 16px; text-align: center; line-height: 1.5;">
      <p><strong>Disclaimer:</strong> This is an estimate for informational purposes only. Actual mortgage payments depend on your credit score, exact interest rate, property taxes, insurance premiums, PMI, and other factors. Consult a qualified mortgage professional for personalized advice. See our full <a href="${SITE_URL}/disclaimer" style="color: #93c5fd;">Disclaimer</a>.</p>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>${SITE_NAME} — Free mortgage calculators and educational resources.</p>
      <p style="margin-top: 4px;">
        <a href="${SITE_URL}/privacy">Privacy</a> &middot;
        <a href="${SITE_URL}/disclaimer">Disclaimer</a> &middot;
        <a href="${SITE_URL}/about">About</a>
      </p>
    </div>
  </footer>
</body>
</html>`;
}

// ============================================================
// 5b. SPA route page generator
// ============================================================

interface SPAEntry {
  path: string;
  title: string;
  description: string;
  priority: number;
}

function generateSpaPage(_entry: SPAEntry, rootHtml: string): string {
  // Return the root index.html so React Router handles the route client-side.
  // This is the standard SPA fallback pattern for static hosts (Vercel/GitHub Pages).
  return rootHtml;
}

// ============================================================
// 5c. Sitemap generator
// ============================================================

function generateSitemap(): string {
  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    `  <url><loc>${SITE_URL}/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/mortgage-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/affordability-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/biweekly-mortgage-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/rent-vs-buy-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/fire-impact-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/pmi-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/refinance-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/closing-cost-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/extra-payment-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/arm-vs-fixed-calculator</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/blog</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/about</loc><priority>0.5</priority><changefreq>monthly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/privacy</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>`,
    `  <url><loc>${SITE_URL}/disclaimer</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>`,
  ];

  // Blog articles
  const blogs = [
    'how-to-use-calculator', 'amortization-schedule', 'biweekly-payments', 'what-is-pmi',
    '30-vs-15-year', 'how-much-house-can-i-afford', 'monthly-payment-breakdown',
    'income-needed', 'why-mostly-interest', 'pay-off-early', 'fha-vs-conventional',
    'is-buying-worth-it-2026', 'can-i-buy-with-5-percent-down', 'credit-score-needed',
  ];
  for (const slug of blogs) {
    lines.push(`  <url><loc>${SITE_URL}/blog/${slug}</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>`);
  }

  // Amount pages
  const amounts = [150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000];
  for (const a of amounts) {
    lines.push(`  <url><loc>${SITE_URL}/mortgage-payment/${fmtDollar(a).replace(/,/g, '')}/</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>`);
  }

  // State pages
  for (const [code] of Object.entries(STATE_DATA)) {
    const stateSlug = STATE_DATA[code].name.toLowerCase().replace(/\s+/g, '-');
    lines.push(`  <url><loc>${SITE_URL}/mortgage-payment/${stateSlug}/</loc><priority>0.6</priority><changefreq>monthly</changefreq></url>`);
  }

  lines.push(`</urlset>`);
  return lines.join('\n');
}

// ============================================================
// 6. Main
// ============================================================

function main() {
  console.log('🏗️  Generating programmatic SEO pages...');
  console.log(`   Site URL: ${SITE_URL}`);
  console.log(`   Output: ${OUTPUT_DIR}`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const slugs: string[] = [];
  let pageCount = 0;

  // ---------- Amount pages ----------
  const amounts = [150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000, 650000, 700000, 750000, 800000];
  console.log('\n📊 Amount pages: ' + amounts.length);
  for (const amount of amounts) {
    const slug = fmtDollar(amount).replace(/,/g, '');
    const dir = path.join(OUTPUT_DIR, 'mortgage-payment', slug);
    fs.mkdirSync(dir, { recursive: true });
    const html = generateAmountHtml(amount, slug);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    slugs.push(`mortgage-payment/${slug}`);
    const data = calcMortgage(amount, 0.0099, 1818);
    log(`✅  $${fmtNumber(amount)} → /mortgage-payment/${slug}/   (${fmtCurrency(data.totalMonthly)}/mo)`);
    pageCount++;
  }

  // ---------- State pages ----------
  console.log('\n🗺️  State pages: ' + Object.keys(STATE_DATA).length);
  for (const [code, info] of Object.entries(STATE_DATA)) {
    const medianPrice = info.median_price || 300000;
    const stateSlug = info.name.toLowerCase().replace(/\s+/g, '-');
    const dir = path.join(OUTPUT_DIR, 'mortgage-payment', stateSlug);
    fs.mkdirSync(dir, { recursive: true });
    const html = generateStateHtml(info.name, code, medianPrice, info.property_tax_rate, info.avg_insurance, stateSlug);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    slugs.push(`mortgage-payment/${stateSlug}`);
    const data = calcMortgage(medianPrice, info.property_tax_rate, info.avg_insurance);
    log(`✅  ${info.name} → /mortgage-payment/${stateSlug}/   (${fmtCurrency(data.totalMonthly)}/mo)`);
    pageCount++;
  }

  // ---------- SPA route pages ----------
  const spaEntries: SPAEntry[] = [
    { path: 'calculator', title: 'Mortgage Calculator - Free Online Mortgage Payment Calculator | MortgagePro', description: 'Free mortgage calculator with amortization schedule, PMI, taxes & insurance. Calculate your monthly payment in real time.', priority: 0.9 },
    { path: 'mortgage-calculator', title: 'Mortgage Calculator - Free Online Mortgage Payment Calculator | MortgagePro', description: 'Free mortgage calculator with amortization schedule, PMI, taxes & insurance. Calculate your monthly payment in real time.', priority: 0.9 },
    { path: 'affordability-calculator', title: 'Mortgage Affordability Calculator - How Much House Can I Afford? | MortgagePro', description: 'Calculate how much house you can afford based on your income, debt, down payment, and state-specific taxes.', priority: 0.9 },
    { path: 'biweekly-mortgage-calculator', title: 'Bi-Weekly Mortgage Payment Calculator | MortgagePro', description: 'See how much you can save with bi-weekly mortgage payments. Compare standard vs accelerated payment plans.', priority: 0.9 },
    { path: 'rent-vs-buy-calculator', title: 'Rent vs Buy Calculator - Should I Rent or Buy a Home? | MortgagePro', description: 'Compare the total cost of renting vs buying a home. Find your breakeven year with personalized data.', priority: 0.9 },
    { path: 'fire-impact-calculator', title: 'FIRE Mortgage Calculator - How Buying a Home Affects Your FIRE Goal | MortgagePro', description: 'Calculate how buying a home impacts your FIRE (Financial Independence Retire Early) timeline.', priority: 0.9 },
    { path: 'pmi-calculator', title: 'PMI Calculator - Private Mortgage Insurance Calculator | MortgagePro', description: 'Calculate PMI costs based on down payment, loan amount, and credit score. See when you can cancel PMI.', priority: 0.9 },
    { path: 'refinance-calculator', title: 'Refinance Calculator - Should You Refinance Your Mortgage? | MortgagePro', description: 'Compare your current mortgage vs refinancing. Calculate break-even point and total interest savings.', priority: 0.9 },
    { path: 'closing-cost-calculator', title: 'Closing Cost Calculator - Estimate Home Buying Closing Costs | MortgagePro', description: 'Estimate your closing costs by state. See a detailed breakdown of all fees involved in buying a home.', priority: 0.9 },
    { path: 'extra-payment-calculator', title: 'Extra Payment Calculator - Pay Off Mortgage Early | MortgagePro', description: 'See how extra payments reduce your mortgage term and save interest. Compare one-time vs recurring payments.', priority: 0.9 },
    { path: 'arm-vs-fixed-calculator', title: 'ARM vs Fixed Rate Mortgage Calculator | MortgagePro', description: 'Compare adjustable-rate (ARM) vs fixed-rate mortgages. See which loan type saves you more over time.', priority: 0.9 },
    { path: 'blog', title: 'Mortgage Blog - Guides, Tips & Resources | MortgagePro', description: 'Expert mortgage guides, affordability tips, and home buying resources. Learn about PMI, amortization, and more.', priority: 0.8 },
    { path: 'blog/how-to-use-calculator', title: 'How to Use Our Mortgage Calculator - Step by Step Guide | MortgagePro', description: 'Learn how to use MortgagePro\'s mortgage calculator. Step-by-step guide to calculating your monthly payment.', priority: 0.8 },
    { path: 'blog/amortization-schedule', title: 'What is an Amortization Schedule? Understanding Your Loan | MortgagePro', description: 'Learn what an amortization schedule is and how it affects your mortgage. See how principal and interest change over 30 years.', priority: 0.8 },
    { path: 'blog/biweekly-payments', title: 'Bi-Weekly Mortgage Payments: Are They Worth It? | MortgagePro', description: 'Are bi-weekly mortgage payments worth it? We break down the math on interest savings and faster payoffs.', priority: 0.8 },
    { path: 'blog/what-is-pmi', title: 'PMI in Mortgages: What It Is and How to Calculate It | MortgagePro', description: 'Learn what PMI is, how it works, and how to calculate it. Tips for removing PMI from your mortgage payment.', priority: 0.8 },
    { path: 'blog/30-vs-15-year', title: '30-Year vs 15-Year Mortgage: More Than Just Time | MortgagePro', description: 'Compare 30-year vs 15-year mortgages. See the total cost difference and which loan type fits your financial goals.', priority: 0.8 },
    { path: 'blog/how-much-house-can-i-afford', title: 'How Much House Can I Afford? Complete Affordability Guide | MortgagePro', description: 'Calculate how much house you can afford based on your income, down payment, and debt. Complete guide with real examples.', priority: 0.8 },
    { path: 'blog/monthly-payment-breakdown', title: 'Mortgage Monthly Payment Breakdown - PITI Explained | MortgagePro', description: 'Understand your monthly mortgage payment breakdown: Principal, Interest, Taxes, and Insurance (PITI).', priority: 0.8 },
    { path: 'blog/income-needed', title: 'Income Needed to Buy a House in 2025 | MortgagePro', description: 'How much income do you need to buy a house in 2025? State-by-state income requirements based on median home prices.', priority: 0.8 },
    { path: 'blog/why-mostly-interest', title: 'Why Are My Mortgage Payments Mostly Interest? | MortgagePro', description: 'Why most of your early mortgage payments go to interest. Understand front-loaded interest and how amortization works.', priority: 0.8 },
    { path: 'blog/pay-off-early', title: 'Should You Pay Off Your Mortgage Early? | MortgagePro', description: 'Should you pay off your mortgage early or invest the money? We analyze the pros, cons, and math behind each strategy.', priority: 0.8 },
    { path: 'blog/fha-vs-conventional', title: 'FHA vs Conventional Loan: Which Is Better? | MortgagePro', description: 'Compare FHA vs conventional loans. See the pros, cons, and costs of each mortgage type for first-time home buyers.', priority: 0.8 },
    { path: 'blog/is-buying-worth-it-2026', title: 'Is Buying a Home Worth It in 2026? | MortgagePro', description: 'Is buying a home still worth it in 2026? We analyze current market conditions, interest rates, and rent vs buy math.', priority: 0.8 },
    { path: 'blog/can-i-buy-with-5-percent-down', title: 'Can I Buy a House with 5% Down? Complete Guide | MortgagePro', description: 'Can you buy a house with only 5% down? Learn about low down payment options, PMI costs, and strategies to buy sooner.', priority: 0.8 },
    { path: 'blog/credit-score-needed', title: 'What Credit Score Do You Need to Buy a House? | MortgagePro', description: 'What credit score do you need to buy a house in 2026? Minimum requirements for FHA, conventional, and USDA loans.', priority: 0.8 },
    { path: 'about', title: 'About MortgagePro - Free Mortgage Calculators & Resources', description: 'Learn about MortgagePro. We provide free mortgage calculators, educational resources, and state-specific data for home buyers.', priority: 0.5 },
    { path: 'privacy', title: 'Privacy Policy | MortgagePro', description: 'MortgagePro privacy policy. Learn how we collect, use, and protect your data.', priority: 0.3 },
    { path: 'disclaimer', title: 'Disclaimer | MortgagePro', description: 'MortgagePro disclaimer. Our calculators provide estimates for informational purposes only.', priority: 0.3 },
  ];

  console.log(`\n📄 SPA route pages (GitHub Pages SEO fix)...`);
  const rootIndexPath = path.join(OUTPUT_DIR, 'index.html');
  if (!fs.existsSync(rootIndexPath)) {
    console.error('   ❌ dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }
  const rootHtml = fs.readFileSync(rootIndexPath, 'utf-8');
  for (const entry of spaEntries) {
    const dir = path.join(OUTPUT_DIR, entry.path);
    fs.mkdirSync(dir, { recursive: true });
    const html = generateSpaPage(entry, rootHtml);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
    log(`✅  /${entry.path}/index.html`);
    pageCount++;
  }
  console.log(`  ✅ ${spaEntries.length} SPA route pages generated.`);

  // ---------- Sitemap ----------
  console.log('\n🗺️  Generating sitemap.xml...');
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap, 'utf-8');
  console.log('   ✅  sitemap.xml generated');

  console.log(`\n✅ Done! Generated ${pageCount} pages total.\n`);
}

main();
