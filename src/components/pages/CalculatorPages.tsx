import CalculatorPageLayout, { PageConfig } from './CalculatorPageLayout';
import StandardCalculator from '@/src/components/calculators/StandardCalculator';
import AffordabilityCalculator from '@/src/components/calculators/AffordabilityCalculator';
import BiWeeklyCalculator from '@/src/components/calculators/BiWeeklyCalculator';
import RentVsBuyCalculator from '@/src/components/calculators/RentVsBuyCalculator';
import FIRECalculator from '@/src/components/calculators/FIRECalculator';
import PmiCalculator from '@/src/components/calculators/PmiCalculator';
import RefinanceCalculator from '@/src/components/calculators/RefinanceCalculator';
import ClosingCostCalculator from '@/src/components/calculators/ClosingCostCalculator';
import ExtraPaymentCalculator from '@/src/components/calculators/ExtraPaymentCalculator';
import ArmVsFixedCalculator from '@/src/components/calculators/ArmVsFixedCalculator';

// ============================================================
// 1. Mortgage Calculator
// ============================================================
const mortgageCalcConfig: PageConfig = {
  title: 'Mortgage Calculator',
  description: 'Calculate your monthly mortgage payment with real-time sliders for home price, down payment, interest rate, and loan term. Full PITI breakdown, amortization schedule, and charts.',
  howToUse: {
    intro: 'Adjust the four main sliders to explore different home prices, down payments, interest rates, and loan terms. The results update instantly — you\'ll see your total monthly payment, a PITI breakdown, and an interactive amortization chart.',
    steps: [
      { step: 1, title: 'Set the Home Price', desc: 'Drag the slider or type a dollar amount. The default is $400,000, the approximate U.S. median home price.' },
      { step: 2, title: 'Choose Your Down Payment', desc: 'Adjust the percentage (10%–50%). The dollar amount updates automatically. A 20% down payment eliminates PMI.' },
      { step: 3, title: 'Select Your Interest Rate', desc: 'Current 30-year fixed rates typically range from 5% to 8%. The default is 6.5%.' },
      { step: 4, title: 'Pick a Loan Term', desc: '15-year and 30-year are the most common. A shorter term means higher payments but much less interest.' },
      { step: 5, title: 'Fine-Tune with State & Costs', desc: 'Select your state for localized property tax rates and insurance estimates. You can also manually adjust the tax rate, insurance, HOA, and PMI.' },
    ],
  },
  example: {
    title: '📊 Example: $400,000 Home with 20% Down',
    scenario: 'Let\'s say you\'re buying a $400,000 home with a 20% down payment ($80,000), financing the remaining $320,000 at a 6.5% interest rate on a 30-year fixed-rate mortgage. Using national-average property taxes (1.2%) and insurance ($1,500/year), here\'s what your monthly payment looks like:',
    rows: [
      { label: 'Home Price', value: '$400,000' },
      { label: 'Down Payment (20%)', value: '$80,000' },
      { label: 'Loan Amount', value: '$320,000' },
      { label: 'Principal & Interest', value: '$2,022/mo' },
      { label: 'Property Taxes', value: '$400/mo' },
      { label: 'Homeowners Insurance', value: '$125/mo' },
      { label: 'Total Monthly Payment (PITI)', value: '$2,547/mo', highlight: true },
    ],
    insight: 'Over the first 12 months, roughly $20,800 of your payments go toward interest alone — that\'s about 78% of your total P&I payments in year one. Use the amortization chart to visualize this over time.',
  },
  faqs: [
    { q: 'How is my monthly mortgage payment calculated?', a: 'Your monthly payment (PITI) has four components: Principal (the loan amount), Interest (cost of borrowing), Taxes (property taxes), and Insurance (homeowner\'s insurance). The formula is: M = P × [r(1+r)^n] / [(1+r)^n − 1], where P is loan amount, r is monthly interest rate, and n is number of payments.' },
    { q: 'What is included in PITI?', a: 'PITI stands for Principal, Interest, Taxes, and Insurance. Principal and Interest are determined by your loan amount, rate, and term. Property taxes and homeowners insurance are estimated based on your home price and location.' },
    { q: 'How does the down payment affect my monthly payment?', a: 'A larger down payment reduces your loan amount, which lowers your monthly payment. It also may eliminate PMI if you put down 20% or more. Use the slider to see how different down payment percentages change your payment.' },
    { q: 'Does this calculator include PMI?', a: 'For simplicity, this calculator assumes a 20% down payment (no PMI). If you\'re putting down less than 20%, use our dedicated PMI Calculator for a more accurate picture that includes private mortgage insurance costs.' },
  ],
};

export function MortgageCalculatorPage() {
  return (
    <CalculatorPageLayout config={mortgageCalcConfig}>
      <StandardCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 2. Affordability Calculator
// ============================================================
const affordabilityConfig: PageConfig = {
  title: 'Home Affordability Calculator',
  description: 'How much house can you afford? Based on your income, debts, down payment, and location, this calculator uses the 28/36 rule to determine your maximum home price.',
  howToUse: {
    intro: 'Enter your annual income, monthly debts, and down payment. The calculator uses the 28/36 lending rule to find your maximum affordable home price. Results update instantly as you adjust any input.',
    steps: [
      { step: 1, title: 'Enter Your Annual Income', desc: 'Your gross (pre-tax) household income from all sources. Lenders use this to calculate the 28% front-end ratio.' },
      { step: 2, title: 'Add Monthly Debt Payments', desc: 'Include car loans, student loans, credit card minimums, and other recurring debts. This feeds into the 36% back-end ratio.' },
      { step: 3, title: 'Set Your Down Payment', desc: 'The percentage you plan to put down. A higher down payment increases your affordable price range and can eliminate PMI.' },
      { step: 4, title: 'Choose Interest Rate & Term', desc: 'Use current market rates (default 6.5%) and your preferred loan term. A lower rate increases your purchasing power.' },
      { step: 5, title: 'Select Your State', desc: 'State-specific property tax rates and insurance costs affect affordability. The calculator uses this to refine the result.' },
    ],
  },
  example: {
    title: '📊 Example: $100,000 Salary with 20% Down',
    scenario: 'Imagine you earn $100,000/year ($8,333/month), have $0 in monthly debts, and plan a 20% down payment. With a 6.5% 30-year fixed rate in a national-average tax state, here\'s what the 28/36 rule says you can afford:',
    rows: [
      { label: 'Annual Income', value: '$100,000' },
      { label: 'Monthly Income', value: '$8,333' },
      { label: 'Max Housing Payment (28%)', value: '$2,333/mo' },
      { label: 'Max Total Debt Payment (36%)', value: '$3,000/mo' },
      { label: 'Maximum Affordable Home Price', value: '$362,000', highlight: true },
      { label: 'Down Payment (20%)', value: '$72,400' },
      { label: 'Monthly PITI', value: '$2,330/mo' },
    ],
    insight: 'With $500/month in car loan and student loan payments, your max affordable price drops to roughly $330,000 — a $60,000 reduction. This shows why paying down debt before house hunting significantly expands your options.',
  },
  faqs: [

    { q: 'What is the 28/36 rule?', a: 'The 28/36 rule is a lending guideline stating that your total monthly housing costs should not exceed 28% of your gross monthly income, and your total debt payments (including housing, car loans, student loans, credit cards) should not exceed 36%.' },
    { q: 'How much house can I afford with a $100,000 salary?', a: 'With a $100,000 annual income ($8,333/month), following the 28% rule you can afford a monthly housing payment of about $2,333. Depending on your down payment and current interest rates, this typically translates to a home price between $350,000 and $450,000.' },
    { q: 'Does this calculator automatically detect my state?', a: 'Yes! We try to detect your location using your IP address to pre-fill state-specific property tax rates and insurance costs. You can manually override the state selection at any time.' },
    { q: 'Should I include future income in my affordability calculation?', a: 'No. Lenders base their decision on documented, current income. Future salary increases, bonuses, or job changes cannot be used to qualify for a mortgage. Use your current guaranteed income for accurate results.' },
  ],
};

export function AffordabilityCalculatorPage() {
  return (
    <CalculatorPageLayout config={affordabilityConfig}>
      <AffordabilityCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 3. Bi-Weekly Calculator
// ============================================================
const biweeklyConfig: PageConfig = {
  title: 'Bi-Weekly Mortgage Payment Calculator',
  description: 'Compare standard monthly payments against an accelerated bi-weekly schedule. See how much interest you can save and how many years you can shave off your 30-year loan.',
  howToUse: {
    intro: 'Enter your mortgage details on the left, then compare the standard monthly payment side-by-side with the bi-weekly accelerated plan. The results show the exact interest savings and years shaved off.',
    steps: [
      { step: 1, title: 'Enter Your Loan Details', desc: 'Set the home price, down payment, interest rate, and loan term just like the standard calculator.' },
      { step: 2, title: 'View the Side-by-Side Comparison', desc: 'The left card shows your standard monthly payment. The right card shows the bi-weekly alternative with half-payments every two weeks.' },
      { step: 3, title: 'Check the Savings Summary', desc: 'Look at the highlighted dollar amount showing how much interest you save and how many years you pay off early.' },
      { step: 4, title: 'Understand the Mechanics', desc: 'Bi-weekly means 26 half-payments per year = 13 full payments. That one extra payment per year goes entirely to principal.' },
    ],
  },
  example: {
    title: '📊 Example: Standard vs Bi-Weekly on a $400,000 Home',
    scenario: 'For a $400,000 home with 20% down ($80,000), a $320,000 loan at 6.5% on a 30-year term. Here\'s how the numbers compare:',
    rows: [
      { label: 'Loan Amount', value: '$320,000' },
      { label: 'Interest Rate', value: '6.5%' },
      { label: 'Standard Monthly P&I', value: '$2,022/mo' },
      { label: 'Bi-Weekly Half Payment', value: '$1,011 (every 2 weeks)' },
      { label: 'Interest Saved', value: '$62,425', highlight: true },
      { label: 'Loan Paid Off Early By', value: '4 years 3 months', highlight: true },
    ],
    insight: 'That extra $1,011 payment every year (the 13th month) is the secret. Over 30 years, compounding interest savings add up to over $62,000 — just by restructuring when you pay.',
  },
  faqs: [

    { q: 'How do bi-weekly payments save money?', a: 'Making half your monthly payment every two weeks results in 26 half-payments per year — the equivalent of 13 full monthly payments instead of 12. This extra payment per year goes entirely toward principal, reducing your loan balance faster.' },
    { q: 'How many years can bi-weekly payments save?', a: 'On a typical 30-year mortgage, switching to bi-weekly payments can shave 4 to 5 years off your loan term and save tens of thousands of dollars in interest.' },
    { q: 'Are there any downsides to bi-weekly payments?', a: 'Some lenders charge setup fees for bi-weekly programs. Also, make sure your lender applies the extra payment correctly — some hold the payment until the full monthly amount is received, defeating the purpose.' },
    { q: 'Can I do bi-weekly payments myself without a program?', a: 'Yes. You can simply divide your monthly payment by 12 and add that amount to each monthly payment (effectively making 13 payments per year on your own schedule). This gives you the same benefit without any lender program fees.' },
  ],
};

export function BiWeeklyCalculatorPage() {
  return (
    <CalculatorPageLayout config={biweeklyConfig}>
      <BiWeeklyCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 4. Rent vs Buy Calculator
// ============================================================
const rentVsBuyConfig: PageConfig = {
  title: 'Rent vs Buy Calculator',
  description: 'Is renting or buying the smarter financial move? This tool factors in home appreciation, rent inflation, property taxes, closing costs, and investment returns to find your breakeven year.',
  howToUse: {
    intro: 'Adjust the buy-side and rent-side parameters to match your situation. The chart updates automatically to show two cumulative cost curves — the point where they cross is your breakeven year.',
    steps: [
      { step: 1, title: 'Set the Buy-Side Parameters', desc: 'Enter the home price, down payment, interest rate, property tax rate, and maintenance assumptions for the purchase scenario.' },
      { step: 2, title: 'Set the Rent-Side Parameters', desc: 'Enter your current monthly rent and expected annual rent increase. Rents typically rise 2-4% per year.' },
      { step: 3, title: 'Adjust Investment Return', desc: 'Set the expected annual return on the money you\'d keep invested if you don\'t buy (down payment + monthly savings). Default is 7%.' },
      { step: 4, title: 'Find Your Breakeven Year', desc: 'Look at the chart where the red line (buying) and blue line (renting) cross. That\'s the year buying becomes cheaper.' },
    ],
  },
  example: {
    title: '📊 Example: $400,000 Home vs $2,000/Month Rent',
    scenario: 'You\'re deciding between buying a $400,000 home (20% down, 6.5% rate, 30-year fixed) or continuing to rent at $2,000/month. With 3% appreciation, 3% rent inflation, and 7% investment returns on the opportunity cost:',
    rows: [
      { label: 'Buy: Monthly Payment (PITI)', value: '$2,547/mo' },
      { label: 'Rent: Monthly Rent', value: '$2,000/mo' },
      { label: 'Down Payment (Opportunity Cost)', value: '$80,000' },
      { label: 'Breakeven Year', value: 'Year 4', highlight: true },
      { label: 'Net Worth After 10 Years (Buy)', value: '+$156,000' },
      { label: 'Net Worth After 10 Years (Rent)', value: '+$134,000' },
    ],
    insight: 'The breakeven comes at year 4 — meaning if you plan to stay 4+ years, buying wins financially. But if you might move in 2-3 years, renting is the safer bet given the high transaction costs of buying and selling.',
  },
  faqs: [

    { q: 'How do you calculate the breakeven year?', a: 'The breakeven year is when the cumulative cost of buying (down payment, closing costs, monthly payments, taxes, insurance, maintenance) intersects with the cumulative cost of renting. Before this point, renting is cheaper; after, buying becomes the better financial choice.' },
    { q: 'Does the calculator consider investment returns?', a: 'Yes. The rent vs buy analysis assumes your down payment and the difference between rent and mortgage payments could be invested in the stock market. We use a default 7% annual return (historical average) to calculate the opportunity cost.' },
    { q: 'What is home appreciation rate?', a: 'Home appreciation is the annual increase in your home\'s value. Historically, US home prices have appreciated about 3-5% annually on average. We default to 3% for a conservative estimate, but you can adjust this.' },
    { q: 'How long should I plan to stay in a home for buying to make sense?', a: 'Generally, you need to stay in a home for at least 3-5 years for buying to be financially worthwhile. This is due to the high transaction costs (closing costs, realtor fees) that are incurred when buying and selling. Use the calculator to find your exact breakeven year.' },
  ],
};

export function RentVsBuyCalculatorPage() {
  return (
    <CalculatorPageLayout config={rentVsBuyConfig}>
      <RentVsBuyCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 5. FIRE Impact Calculator
// ============================================================
const fireConfig: PageConfig = {
  title: 'FIRE Impact Calculator',
  description: 'Thinking about Financial Independence or Early Retirement? See how buying a home could delay — or accelerate — your FIRE timeline based on your savings rate and investment strategy.',
  howToUse: {
    intro: 'Enter your current investments, annual savings, and expenses. Then compare two scenarios: renting vs buying. The calculator shows how many years each scenario pushes your FIRE date.',
    steps: [
      { step: 1, title: 'Enter Your Current Financial Picture', desc: 'Your current investment portfolio balance, annual savings rate, and annual non-housing living expenses. These define your baseline FIRE trajectory.' },
      { step: 2, title: 'Set Your Safe Withdrawal Rate', desc: 'Default is 4% (the classic "4% rule"). More conservative investors may use 3-3.5%. This determines the nest egg size you need.' },
      { step: 3, title: 'Enter the Rent Scenario', desc: 'Your current monthly rent. The calculator builds a FIRE projection assuming you continue renting and invest the difference.' },
      { step: 4, title: 'Enter the Buy Scenario', desc: 'The home price, down payment amount, and estimated monthly housing costs (P&I, taxes, insurance, maintenance).' },
      { step: 5, title: 'Compare the Results', desc: 'The calculator shows "FIRE in X years if renting" vs "FIRE in Y years if buying" — the gap is the true cost of homeownership on your timeline.' },
    ],
  },
  example: {
    title: '📊 Example: Does Buying a $500,000 Home Delay FIRE?',
    scenario: 'You have $200,000 invested, save $60,000/year, and spend $40,000/year on non-housing expenses. You currently rent at $2,000/month. Should you buy a $500,000 home with $100,000 down?',
    rows: [
      { label: 'Current Investments', value: '$200,000' },
      { label: 'Annual Savings', value: '$60,000' },
      { label: 'FIRE Target (Rent Scenario)', value: '9.4 years' },
      { label: 'Down Payment', value: '$100,000' },
      { label: 'New Monthly Housing (Buy)', value: '$3,500/mo' },
      { label: 'FIRE Target (Buy Scenario)', value: '12.8 years', highlight: true },
      { label: 'FIRE Delayed By', value: '3.4 years', highlight: true },
    ],
    insight: 'Buying this home delays FIRE by 3.4 years — the combined effect of losing $100K in investment capital (down payment) and increasing monthly housing costs by $1,500. But you also gain a paid-off home, which lowers retirement expenses.',
  },
  faqs: [

    { q: 'How does buying a home affect FIRE?', a: 'A home purchase reduces your investable savings (down payment) and increases monthly expenses (mortgage, taxes, insurance), which can delay FIRE. However, a paid-off home also reduces your retirement expenses, potentially lowering the nest egg you need.' },
    { q: 'What is the 4% rule?', a: 'The 4% rule is a retirement withdrawal guideline suggesting you can safely withdraw 4% of your investment portfolio annually without running out of money over a 30-year retirement. A $1M portfolio would provide $40,000/year.' },
    { q: 'Should I pay off my mortgage before retiring early?', a: 'There\'s debate on this. Some prefer to pay off the mortgage to reduce sequence-of-returns risk and lower monthly expenses. Others prefer to invest the difference, especially if their mortgage rate is low. The calculator helps you model both scenarios.' },
    { q: 'Does the calculator include property taxes and insurance?', a: 'Yes. We include state-specific property tax rates, homeowners insurance, and maintenance costs (typically 1% of home value annually) to give you a realistic picture of homeownership costs in retirement.' },
  ],
};

export function FIRECalculatorPage() {
  return (
    <CalculatorPageLayout config={fireConfig}>
      <FIRECalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 6. PMI Calculator
// ============================================================
const pmiConfig: PageConfig = {
  title: 'PMI Calculator (Private Mortgage Insurance)',
  description: 'Calculate your PMI monthly cost, how long it will take to reach 20% equity, and the total PMI you\'ll pay. Includes home appreciation to accelerate LTV progress.',
  howToUse: {
    intro: 'Enter your home price, down payment, and interest rate. The calculator shows your PMI cost and — crucially — how many months until you can cancel PMI. Toggle the appreciation slider to see how rising home values accelerate your path to 20% equity.',
    steps: [
      { step: 1, title: 'Enter Your Home Price & Down Payment', desc: 'The down payment percentage determines your starting LTV. Any amount under 20% triggers PMI.' },
      { step: 2, title: 'Set the PMI Rate', desc: 'PMI typically costs 0.5% to 1% of the loan amount annually. The default is 0.85% — adjust based on your credit score and lender quote.' },
      { step: 3, title: 'Adjust Home Appreciation', desc: 'Default is 3% annually. Higher appreciation means you reach 80% LTV (and cancel PMI) faster. Try 0% for a worst-case scenario.' },
      { step: 4, title: 'Review the Results', desc: 'See your monthly PMI cost, how many months you\'ll pay PMI, and the total PMI cost over that period.' },
    ],
  },
  example: {
    title: '📊 Example: $400,000 Home with 10% Down',
    scenario: 'You\'re buying a $400,000 home with only 10% down ($40,000). Your loan is $360,000 at 6.5% with a PMI rate of 0.85%. Here\'s what PMI looks like:',
    rows: [
      { label: 'Home Price', value: '$400,000' },
      { label: 'Down Payment (10%)', value: '$40,000' },
      { label: 'Loan Amount', value: '$360,000' },
      { label: 'Monthly PMI Payment', value: '$255/mo' },
      { label: 'Months Until PMI Canceled (3% appreciation)', value: '46 months (3.8 yrs)' },
      { label: 'Total PMI Paid', value: '$11,730', highlight: true },
    ],
    insight: 'With 0% appreciation (flat market), you\'d pay PMI for 89 months (7.4 years) and spend over $22,000 in PMI premiums. That\'s why a 20% down payment — or accelerated principal payments — saves real money.',
  },
  faqs: [

    { q: 'What is PMI?', a: 'PMI (Private Mortgage Insurance) protects the lender, not you, in case you default on your loan. It\'s required when your down payment is less than 20% of the home\'s purchase price. PMI typically costs 0.5% to 1% of the loan amount annually.' },
    { q: 'When can I cancel PMI?', a: 'You can request PMI cancellation once your loan balance reaches 80% of the home\'s original value. Under the Homeowners Protection Act, PMI must be automatically terminated when your balance reaches 78% of the original value.' },
    { q: 'How does home appreciation affect PMI?', a: 'Rising home values can help you reach 20% equity faster. For example, if your home appreciates 5% annually, the combined effect of paying down your loan and your home gaining value accelerates when you can cancel PMI.' },
    { q: 'Can I avoid PMI without 20% down?', a: 'Yes. Options include: a piggyback loan (80% first mortgage + 10% down + 10% second mortgage), lender-paid PMI (higher rate but no monthly PMI), or an FHA loan (has MIP instead, with different rules). Compare all options with our calculators.' },
  ],
};

export function PmiCalculatorPage() {
  return (
    <CalculatorPageLayout config={pmiConfig}>
      <PmiCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 7. Refinance Calculator
// ============================================================
const refinanceConfig: PageConfig = {
  title: 'Refinance Calculator',
  description: 'Compare your current mortgage against a refinance. Calculate monthly savings, break-even point, and lifetime interest difference to decide if refinancing makes sense.',
  howToUse: {
    intro: 'Enter your current loan details (balance, rate, months remaining) and the proposed refinance terms (new rate, new term, closing costs). The calculator shows you monthly savings, break-even timeline, and lifetime interest difference.',
    steps: [
      { step: 1, title: 'Enter Your Current Loan', desc: 'Your remaining loan balance, current interest rate, and remaining months (e.g., 300 months left on a 30-year).' },
      { step: 2, title: 'Enter the Refinance Offer', desc: 'The new interest rate, new loan term (typically 15 or 30 years), and the total closing costs quoted by the lender.' },
      { step: 3, title: 'Check Monthly Savings', desc: 'The difference between your current monthly P&I and the new payment. Positive savings means cash flow improvement.' },
      { step: 4, title: 'Check the Break-Even Point', desc: 'Divide closing costs by monthly savings. If break-even is less than your planned stay, refinancing makes sense.' },
    ],
  },
  example: {
    title: '📊 Example: Refinancing from 7.5% to 6.5%',
    scenario: 'You have $320,000 remaining on your current mortgage at 7.5% with 25 years (300 months) left. You\'re offered a refinance at 6.5% on a new 30-year term with $6,000 in closing costs. Here\'s the analysis:',
    rows: [
      { label: 'Current Monthly Payment (P&I)', value: '$2,364/mo' },
      { label: 'New Monthly Payment (P&I)', value: '$2,022/mo' },
      { label: 'Monthly Savings', value: '$342/mo', highlight: true },
      { label: 'Closing Costs', value: '$6,000' },
      { label: 'Break-Even Point', value: '18 months', highlight: true },
      { label: 'Lifetime Interest Savings (after costs)', value: '+$76,500' },
    ],
    insight: 'If you plan to stay in your home for 18+ months, this refinance makes financial sense. The $342/month savings covers the $6,000 closing cost within a year and a half, and you save over $76K in total interest over the remaining loan life.',
  },
  faqs: [
    { q: 'When does refinancing make sense?', a: 'Refinancing typically makes sense when you can lower your rate by at least 0.5-1% and plan to stay in the home long enough to recoup closing costs through monthly savings — usually 2-3 years.' },
    { q: 'What is the break-even point?', a: 'The break-even point is when your cumulative monthly savings equal the closing costs paid to refinance. If it costs $5,000 to refinance and you save $200/month, your break-even is 25 months.' },
    { q: 'Should I refinance to a shorter term?', a: 'Refinancing from a 30-year to a 15-year loan usually comes with a lower rate but significantly higher monthly payment. This can save hundreds of thousands in interest over the life of the loan if you can afford the payments.' },
    { q: 'What closing costs should I expect for a refinance?', a: 'Refinance closing costs typically range from 2% to 5% of the loan amount and include application fees, appraisal, title search, origination fees, and prepaid interest. Our calculator lets you adjust this to your specific quote.' },
  ],
};

export function RefinanceCalculatorPage() {
  return (
    <CalculatorPageLayout config={refinanceConfig}>
      <RefinanceCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 8. Closing Cost Calculator
// ============================================================
const closingCostConfig: PageConfig = {
  title: 'Closing Cost Calculator',
  description: 'Estimate your home buying closing costs with itemized breakdown. Includes state-specific data, loan origination fees, title insurance, appraisal, and seller concessions.',
  howToUse: {
    intro: 'Enter the home price, down payment, and select your state for localized estimates. The calculator generates a detailed itemized breakdown of every closing cost — from origination fees to prepaid taxes.',
    steps: [
      { step: 1, title: 'Set the Home Price & Down Payment', desc: 'The higher the home price, the higher most closing costs. Your down payment percentage affects the loan amount, which determines lender fees.' },
      { step: 2, title: 'Select Your State', desc: 'Closing costs vary significantly by state due to different tax structures, title insurance requirements, and local fees. We use state averages for the best estimate.' },
      { step: 3, title: 'Adjust Origination Fee & Seller Concessions', desc: 'The loan origination fee is typically 0.5-1% of the loan amount. Seller concessions (e.g., 3%) reduce what you pay at closing.' },
      { step: 4, title: 'Review the Itemized Breakdown', desc: 'See every cost itemized: origination, appraisal, title, escrow, recording, prepaids, and more. Click each row for a brief explanation.' },
    ],
  },
  example: {
    title: '📊 Example: Closing Costs on a $400,000 Home in Texas',
    scenario: 'Buying a $400,000 home in Texas with 20% down ($320,000 loan). Texas has higher-than-average closing costs due to title insurance premiums and transfer taxes. Here\'s the expected breakdown:',
    rows: [
      { label: 'Home Price', value: '$400,000' },
      { label: 'Loan Amount (20% down)', value: '$320,000' },
      { label: 'Loan Origination Fee (1%)', value: '$3,200' },
      { label: 'Appraisal + Title + Escrow', value: '$2,500' },
      { label: 'Prepaid Taxes & Insurance', value: '$3,100' },
      { label: 'Total Estimated Closing Costs', value: '$12,800', highlight: true },
      { label: 'Total Cash Needed (Down + Closing)', value: '$92,800' },
    ],
    insight: 'Closing costs in Texas tend to run higher (3-4% of purchase price) due to title insurance requirements and transfer taxes. In states like Colorado or California, closing costs are often at the lower end (2-3%). Always get a Loan Estimate from at least 3 lenders to compare.',
  },
  faqs: [

    { q: 'What are typical closing costs?', a: 'Closing costs typically range from 2% to 5% of the home\'s purchase price. On a $400,000 home, that\'s $8,000 to $20,000. Costs include loan origination, appraisal, title insurance, attorney fees, prepaid taxes, and insurance.' },
    { q: 'Can I negotiate closing costs?', a: 'Yes. Some costs like lender origination fees and application fees are negotiable. You can also shop for third-party services like title insurance and appraisal. Getting multiple Loan Estimates (LEs) from different lenders lets you compare costs.' },
    { q: 'What is a seller concession?', a: 'A seller concession is when the seller agrees to pay a portion of your closing costs. This is common in buyer\'s markets or when a home has been on the market for a while. Concessions are typically 2-6% of the purchase price.' },
    { q: 'Can I roll closing costs into my loan?', a: 'In some cases, yes. You can finance closing costs by taking a slightly higher loan amount, but this means you\'ll pay interest on those costs over the life of the loan. Alternatively, you can ask the lender for a no-closing-cost refinance in exchange for a higher interest rate.' },
  ],
};

export function ClosingCostCalculatorPage() {
  return (
    <CalculatorPageLayout config={closingCostConfig}>
      <ClosingCostCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 9. Extra Payment Calculator
// ============================================================
const extraPaymentConfig: PageConfig = {
  title: 'Extra Payment Calculator',
  description: 'See how making extra principal payments can save you thousands in interest and pay off your mortgage years early. Includes year-by-year balance comparison chart.',
  howToUse: {
    intro: 'Enter your mortgage details and the extra amount you want to pay each month. The calculator compares the standard amortization against the accelerated schedule, showing year-by-year balance and total interest savings.',
    steps: [
      { step: 1, title: 'Enter Your Mortgage Details', desc: 'Home price, down payment, interest rate, and loan term. These define your baseline loan.' },
      { step: 2, title: 'Set Your Extra Monthly Payment', desc: 'Even $100/month makes a significant difference. The slider goes from $0 to $1,000 extra per month.' },
      { step: 3, title: 'Compare the Two Scenarios', desc: 'The top section shows "Standard" vs "With Extra Payments" — you\'ll see the new payoff timeline and total interest.' },
      { step: 4, title: 'Review the Year-by-Year Chart', desc: 'The area chart shows your standard balance trajectory vs the accelerated one. The gap widens over time.' },
    ],
  },
  example: {
    title: '📊 Example: $200/Month Extra on a $400,000 Loan',
    scenario: 'You have a $400,000 home with 20% down ($320,000 loan) at 6.5% on a 30-year term. You decide to add $200/month to your principal payment. Here\'s the impact:',
    rows: [
      { label: 'Standard Monthly P&I', value: '$2,022/mo' },
      { label: 'Extra Principal Payment', value: '+$200/mo' },
      { label: 'New Total Monthly Payment', value: '$2,222/mo' },
      { label: 'Total Interest (Standard)', value: '$408,000' },
      { label: 'Total Interest (With Extra)', value: '$330,000' },
      { label: 'Interest Saved', value: '$78,000', highlight: true },
      { label: 'Loan Paid Off Early By', value: '6 years 4 months', highlight: true },
    ],
    insight: 'For just $200/month extra (the cost of a nice dinner out), you save $78,000 in interest and own your home free and clear over 6 years earlier. Start early in the loan term for maximum impact — early payments reduce more future interest.',
  },
  faqs: [
    { q: 'How much can I save with extra payments?', a: 'Even small extra payments make a big difference. Adding $100/month to a $400,000 loan at 6.5% can save over $60,000 in interest and pay off the loan 5+ years early. Use the calculator to see your exact savings.' },
    { q: 'What\'s the best strategy for extra payments?', a: 'The most effective strategy is making consistent extra payments every month, starting as early as possible in the loan term. Early extra payments save more interest because they reduce the principal balance that future interest is calculated on.' },
    { q: 'Is it better to invest or make extra mortgage payments?', a: 'It depends on your mortgage rate vs. expected investment returns. If your rate is 6.5%, paying down the mortgage gives a guaranteed 6.5% return. If you expect higher investment returns (e.g., 7-10% in stocks), investing may be mathematically better — though the mortgage payoff provides peace of mind.' },
    { q: 'Can I make a lump sum extra payment instead of monthly?', a: 'Yes. Many people use bonuses, tax refunds, or inheritance for lump sum payments. A single $10,000 lump sum early in a 30-year mortgage can save over $20,000 in interest, depending on your rate.' },
  ],
};

export function ExtraPaymentCalculatorPage() {
  return (
    <CalculatorPageLayout config={extraPaymentConfig}>
      <ExtraPaymentCalculator />
    </CalculatorPageLayout>
  );
}

// ============================================================
// 10. ARM vs Fixed Calculator
// ============================================================
const armVsFixedConfig: PageConfig = {
  title: 'ARM vs Fixed Rate Mortgage Calculator',
  description: 'Compare 30-year fixed, 15-year fixed, 5/1 ARM, and 7/1 ARM side by side. See monthly payments over time with a chart showing when adjustable rates reset.',
  howToUse: {
    intro: 'Enter the loan amount and the rates for each mortgage type. The chart plots monthly payments over time so you can see exactly when ARM rates reset and how your payments would change.',
    steps: [
      { step: 1, title: 'Enter the Loan Amount', desc: 'The amount you plan to borrow. Default is $320,000 (80% of $400,000 home).' },
      { step: 2, title: 'Set Rates for Each Option', desc: 'Adjust the rate for 30-year fixed, 15-year fixed, 5/1 ARM, and 7/1 ARM. ARMs typically offer lower initial rates.' },
      { step: 3, title: 'Estimate the Post-Fixed Rate', desc: 'Set what you expect rates to look like when the ARM fixed period ends. Default is 7.5% — you can adjust based on your rate outlook.' },
      { step: 4, title: 'Set Your Planned Stay', desc: 'How many years do you plan to stay in this home? This determines which option is most cost-effective for your specific timeline.' },
    ],
  },
  example: {
    title: '📊 Example: 5/1 ARM vs 30-Year Fixed at Today\'s Rates',
    scenario: 'You\'re borrowing $320,000. The 30-year fixed is 6.75%, 15-year fixed is 6.0%, 5/1 ARM is 5.75%, and 7/1 ARM is 6.0%. After the fixed period, rates rise to 7.5%. You plan to stay for 7 years.',
    rows: [
      { label: 'Loan Amount', value: '$320,000' },
      { label: '30-Year Fixed Monthly P&I', value: '$2,075/mo' },
      { label: '15-Year Fixed Monthly P&I', value: '$2,700/mo' },
      { label: '5/1 ARM (first 5 years)', value: '$1,868/mo' },
      { label: '7/1 ARM (first 7 years)', value: '$1,918/mo' },
      { label: 'Best Option at 7 Years', value: '7/1 ARM saves $13,200 vs 30yr fixed', highlight: true },
    ],
    insight: 'If you\'re certain you\'ll move or refinance within 7 years, the 7/1 ARM is the clear winner — lower payments during the fixed period and no risk of rate resets before you sell. But if plans change and you stay 10+ years, the 30-year fixed protects against future rate hikes.',
  },
  faqs: [

    { q: 'What is the difference between ARM and fixed-rate mortgages?', a: 'A fixed-rate mortgage has the same interest rate for the entire loan term. An ARM (Adjustable-Rate Mortgage) has a fixed rate for an initial period (e.g., 5 or 7 years), then adjusts periodically based on market index rates plus a margin.' },
    { q: 'When does an ARM make sense?', a: 'An ARM makes sense if you plan to sell or refinance before the adjustable period begins. ARMs typically offer lower initial rates than fixed mortgages, which can save money in the short term. Common scenarios: first-time buyers planning to upgrade in 5-7 years.' },
    { q: 'What are the risks of an ARM?', a: 'The main risk is rate increases after the fixed period ends. If rates rise significantly, your monthly payment could increase substantially. Most ARMs have caps on how much the rate can increase per adjustment and over the life of the loan.' },
    { q: 'What is a 5/1 ARM vs 7/1 ARM?', a: 'A 5/1 ARM has a fixed rate for the first 5 years, then adjusts once per year (the "1" in 5/1). A 7/1 ARM is fixed for 7 years before annual adjustments begin. The 7/1 ARM offers a longer fixed period but typically has a slightly higher initial rate than a 5/1 ARM.' },
  ],
};

export function ArmVsFixedCalculatorPage() {
  return (
    <CalculatorPageLayout config={armVsFixedConfig}>
      <ArmVsFixedCalculator />
    </CalculatorPageLayout>
  );
}
