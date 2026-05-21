/**
 * Mortgage template page configuration for programmatic SEO.
 * 
 * Phase 1: Loan amount pages ($150k – $800k, $50k increments)
 * Phase 2: State pages (50 states, using state_data.json)
 * Phase 3: Income pages ($50k – $200k)
 */

// Phase 1: Loan amounts to generate pages for
export const LOAN_AMOUNTS = [
  150000, 200000, 250000, 300000, 350000, 400000,
  450000, 500000, 550000, 600000, 650000, 700000,
  750000, 800000
];

// Default assumptions for calculation
export const DEFAULT_ASSUMPTIONS = {
  downPaymentPercent: 20,
  interestRate: 6.5,
  loanTermYears: 30,
  propertyTaxRate: 1.2,     // National average
  homeInsurance: 1500,       // National average annual
  hoaFees: 0,
  pmiRate: 0.5,
};

// 28/36 rule: max 28% of gross monthly income on housing
// Max 36% on total debt
export const calculateRequiredIncome = (
  totalMonthlyPayment: number,
  dtiPercent = 28
): number => {
  return Math.ceil((totalMonthlyPayment / (dtiPercent / 100)) * 12 / 1000) * 1000;
};

// Generate natural language description based on loan amount
export const generateLoanDescription = (amount: number): string => {
  const range = amount <= 250000 ? "entry-level" 
    : amount <= 450000 ? "mid-range"
    : amount <= 650000 ? "upper-mid-range"
    : "premium";
  
  const audience = amount <= 250000 ? "first-time homebuyers and those looking for affordable housing options"
    : amount <= 450000 ? "growing families and professionals seeking comfortable living spaces in most markets"
    : amount <= 650000 ? "buyers in desirable neighborhoods or higher-cost metro areas"
    : "those seeking spacious properties in premium real estate markets";
  
  return `A $${(amount / 1000).toFixed(0)},000 purchase price falls into the <strong>${range}</strong> category, typically appealing to ${audience}.`;
};

// Generate income-based salary description
export const generateSalaryDescription = (salary: number): string => {
  const lifestyle = salary <= 60000 ? "modest"
    : salary <= 100000 ? "comfortable middle-class"
    : salary <= 150000 ? "upper-middle-class"
    : "high-earner";
  
  const suggestion = salary <= 60000 
    ? "focusing on affordable markets or considering first-time home buyer programs"
    : salary <= 100000 
    ? "exploring a wide range of options in most markets outside the most expensive coastal cities"
    : "considering premium properties while still maintaining prudent financial boundaries";
  
  return `A $${(salary / 1000).toFixed(0)},000 annual income places you in the <strong>${lifestyle}</strong> bracket, suggesting you could comfortably ${suggestion}.`;
};

// Format currency for display in template
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

// Format number with commas
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

// Format salary range
export const formatSalary = (value: number): string => {
  return `$${(value / 1000).toFixed(0)}k`;
};

// Neighboring loan amounts for internal linking
export const getNeighbors = (amount: number): { lower: number | null; higher: number | null } => {
  const idx = LOAN_AMOUNTS.indexOf(amount);
  return {
    lower: idx > 0 ? LOAN_AMOUNTS[idx - 1] : null,
    higher: idx < LOAN_AMOUNTS.length - 1 ? LOAN_AMOUNTS[idx + 1] : null,
  };
};
