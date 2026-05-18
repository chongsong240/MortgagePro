export interface MortgageInputs {
  homePrice: number;
  downPaymentPercent: number;
  downPaymentAmount: number;
  interestRate: number; // annual
  loanTermYears: number;
  propertyTaxRate: number; // annual
  homeInsurance: number; // annual
  hoaFees: number; // monthly
  pmiRate: number; // annual, usually only if down payment < 20%
}

export interface AmortizationRow {
  month: number;
  year: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
  totalInterestGiven: number;
  totalPrincipalGiven: number;
}

export interface MortgageOutputs {
  monthlyPrincipalAndInterest: number;
  monthlyPropertyTax: number;
  monthlyHomeInsurance: number;
  monthlyHoaFees: number;
  monthlyPmi: number;
  totalMonthlyPayment: number;
  totalLoanAmount: number;
  totalInterestPaid: number;
  payoffDate: Date;
  amortizationSchedule: AmortizationRow[];
  annualAmortization: AmortizationRow[];
}

export function calculateMortgage(inputs: MortgageInputs): MortgageOutputs {
  const {
    homePrice,
    downPaymentAmount,
    interestRate,
    loanTermYears,
    propertyTaxRate,
    homeInsurance,
    hoaFees,
    pmiRate
  } = inputs;

  const totalLoanAmount = homePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  // Monthly P&I
  let monthlyPrincipalAndInterest = 0;
  if (monthlyInterestRate === 0) {
    monthlyPrincipalAndInterest = totalLoanAmount / numberOfPayments;
  } else {
    monthlyPrincipalAndInterest =
      (totalLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  }

  // Monthly additional costs
  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyHomeInsurance = homeInsurance / 12;
  const monthlyHoaFees = hoaFees;
  
  // PMI (only if down payment is less than 20%)
  const downPaymentPercent = (downPaymentAmount / homePrice) * 100;
  let monthlyPmi = 0;
  if (downPaymentPercent < 20) {
    monthlyPmi = (totalLoanAmount * (pmiRate / 100)) / 12;
  }

  const totalMonthlyPayment =
    monthlyPrincipalAndInterest +
    monthlyPropertyTax +
    monthlyHomeInsurance +
    monthlyHoaFees +
    monthlyPmi;

  // Calculate Amortization
  const amortizationSchedule: AmortizationRow[] = [];
  const annualAmortization: AmortizationRow[] = [];
  
  let remainingBalance = totalLoanAmount;
  let totalInterestGiven = 0;
  let totalPrincipalGiven = 0;
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth(); // 0-indexed

  let yearPrincipal = 0;
  let yearInterest = 0;

  for (let month = 1; month <= numberOfPayments; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    let principalPayment = monthlyPrincipalAndInterest - interestPayment;

    // Handle last month rounding
    if (month === numberOfPayments) {
      principalPayment = remainingBalance;
    }

    remainingBalance -= principalPayment;
    totalInterestGiven += interestPayment;
    totalPrincipalGiven += principalPayment;

    yearPrincipal += principalPayment;
    yearInterest += interestPayment;

    amortizationSchedule.push({
      month,
      year: currentYear,
      payment: monthlyPrincipalAndInterest,
      principal: principalPayment,
      interest: interestPayment,
      remainingBalance: Math.max(0, remainingBalance),
      totalInterestGiven,
      totalPrincipalGiven
    });

    currentMonth++;
    
    // Yearly roll-up
    if (currentMonth === 12 || month === numberOfPayments) {
      annualAmortization.push({
        month,
        year: currentYear,
        payment: yearPrincipal + yearInterest,
        principal: yearPrincipal,
        interest: yearInterest,
        remainingBalance: Math.max(0, remainingBalance),
        totalInterestGiven,
        totalPrincipalGiven
      });
      currentYear++;
      currentMonth = 0;
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }

  const payoffDate = new Date();
  payoffDate.setMonth(payoffDate.getMonth() + numberOfPayments);

  return {
    monthlyPrincipalAndInterest,
    monthlyPropertyTax,
    monthlyHomeInsurance,
    monthlyHoaFees,
    monthlyPmi,
    totalMonthlyPayment,
    totalLoanAmount,
    totalInterestPaid: totalInterestGiven,
    payoffDate,
    amortizationSchedule,
    annualAmortization
  };
}
