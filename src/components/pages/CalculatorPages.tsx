import CalculatorPageLayout, { PageConfig } from './CalculatorPageLayout';
import CalculatorSchema from './CalculatorSchema';
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
  understandingResults: {
    intro: 'Your mortgage payment consists of four main components. Understanding each one helps you evaluate trade-offs between different loan options and home prices.',
    items: [
      { term: 'Principal & Interest (P&I)', explanation: 'P&I is determined by your loan amount, interest rate, and term length. The formula M = P × [r(1+r)^n]/[(1+r)^n−1] calculates your fixed monthly payment. Of every payment, interest is calculated on the remaining balance first, then the rest goes to principal.' },
      { term: 'Property Taxes', explanation: 'Taxes are based on your home\'s assessed value and local millage rates. We use state-level averages (e.g., CA ~0.76%, TX ~1.6%, NJ ~2.4%). Your actual rate may vary by county. Property taxes are typically paid into an escrow account.' },
      { term: 'Homeowners Insurance', explanation: 'Insurance covers damage to your property and liability. Lenders require it. We estimate based on state averages ($800–$2,500/year depending on location and climate risk). You can adjust this to your actual quote.' },
      { term: 'PMI & HOA', explanation: 'PMI (Private Mortgage Insurance) is required when your down payment is under 20%. HOA fees apply only in planned communities. Both are optional fields in this calculator — toggle them if applicable to your situation.' },
    ],
  },
  commonMistakes: {
    intro: 'Homebuyers often misunderstand how mortgage payments work. Here are the most common errors to watch out for:',
    items: [
      { mistake: 'Focusing only on the monthly payment without understanding total interest cost.', fix: 'A $320,000 loan at 6.5% for 30 years costs over $408,000 in interest alone. Use our amortization chart to see the true cost — and consider a 15-year term or extra payments to reduce total interest.' },
      { mistake: 'Forgetting property taxes and insurance when budgeting.', fix: 'A $2,022/mo P&I payment can easily become $2,500+ after taxes, insurance, and PMI. Always use a PITI calculator (like this one) to get a complete picture before setting your home shopping budget.' },
      { mistake: 'Assuming the advertised interest rate is the rate you\'ll qualify for.', fix: 'Your actual rate depends on your credit score, DTI ratio, down payment, and loan type. A borrower with a 760 credit score might get 6.5%, while a 640-score borrower could see 7.5% or higher — a difference of ~$220/mo on a $400K loan.' },
    ],
  },
  relatedContent: {
    intro: 'Deepen your understanding with these related tools and guides:',
    links: [
      { to: '/affordability-calculator', label: 'Affordability Calculator' },
      { to: '/pmi-calculator', label: 'PMI Calculator' },
      { to: '/extra-payment-calculator', label: 'Extra Payment Calculator' },
      { to: '/blog/monthly-payment-breakdown', label: 'Monthly Payment Breakdown Guide' },
      { to: '/blog/amortization-schedule', label: 'How Amortization Works' },
    ],
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
      <CalculatorSchema
        name="Mortgage Calculator"
        description="Calculate your monthly mortgage payment with real-time sliders for home price, down payment, interest rate, and loan term. Full PITI breakdown, amortization schedule, and charts."
        url="https://www.mortgagepro.io/mortgage-calculator"
      />
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
  understandingResults: {
    intro: 'The affordability calculation is based on two key lending ratios that lenders use to determine how much mortgage you qualify for.',
    items: [
      { term: 'Front-End Ratio (28%)', explanation: 'Your total monthly housing costs (PITI) should not exceed 28% of your gross monthly income. On a $100K salary ($8,333/mo), that caps your housing payment at $2,333/mo. This is the primary constraint for most borrowers.' },
      { term: 'Back-End Ratio (36%)', explanation: 'Your total debt payments — housing plus car loans, student loans, credit cards, child support, etc. — should not exceed 36% of your gross income. For a $100K salary, that\'s $3,000/mo total.' },
      { term: 'Down Payment Impact', explanation: 'Your down payment directly affects the loan amount and whether PMI is required. A 20% down payment eliminates PMI and reduces your monthly PITI, allowing you to afford a higher-priced home within the 28% constraint.' },
      { term: 'State-Specific Costs', explanation: 'Property tax rates vary dramatically by state. A homebuyer in New Jersey (2.4% avg tax rate) may afford $50K–$80K less home than one in Colorado (0.5% avg), even with the same income, because higher taxes consume more of the 28% allowance.' },
    ],
  },
  commonMistakes: {
    intro: 'First-time buyers frequently overestimate or underestimate what they can afford. Avoid these pitfalls:',
    items: [
      { mistake: 'Using gross income instead of after-tax income for budgeting.', fix: 'The 28/36 rule is based on gross income, but your actual budget should consider take-home pay. A $100K salary might net ~$6,000/mo after taxes and deductions — spending $2,333/mo on housing (39% of net) may feel tight. Use a personal budget in addition to this calculator.' },
      { mistake: 'Ignoring how existing debt reduces buying power.', fix: 'A $500/month car payment reduces your affordable home price by $60K–$80K. Before shopping for a home, consider paying down high-interest debt — it improves both your DTI ratio and your monthly cash flow.' },
      { mistake: 'Maxing out the affordability number without a cash flow buffer.', fix: 'Just because you qualify for a $362K home doesn\'t mean you should buy at that limit. Unexpected repairs, HOA special assessments, and rate changes can strain your budget. Aim for 25–28% of gross income for housing, not the maximum.' },
    ],
  },
  relatedContent: {
    intro: 'Explore more tools to understand your full financial picture:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/closing-cost-calculator', label: 'Closing Cost Calculator' },
      { to: '/blog/how-much-house-can-i-afford', label: 'How Much House Can I Afford?' },
      { to: '/blog/income-needed', label: 'Income Needed Guide' },
    ],
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
      <CalculatorSchema
        name="Home Affordability Calculator"
        description="How much house can you afford? Based on your income, debts, down payment, and location, this calculator uses the 28/36 rule to determine your maximum home price."
        url="https://www.mortgagepro.io/affordability-calculator"
      />
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
  understandingResults: {
    intro: 'The key numbers to understand when comparing standard vs bi-weekly mortgage payments:',
    items: [
      { term: 'Standard Monthly Payment', explanation: 'You make 12 equal payments per year. Each payment covers interest due on the current balance plus a portion of principal. In early years, most of the payment goes toward interest.' },
      { term: 'Bi-Weekly Payment', explanation: 'You make half your monthly payment every two weeks, totaling 26 half-payments = 13 full payments per year. That 13th payment is like a bonus — it goes 100% to principal reduction.' },
      { term: 'Interest Saved', explanation: 'Because your principal balance decreases faster, future interest is calculated on a lower base. Over 30 years, this compounding effect can save $50K–$80K depending on your loan size and rate.' },
      { term: 'Years Shaved Off', explanation: 'Paying extra principal each year accelerates your amortization timeline. A typical 30-year loan can be paid off in 25–26 years with a bi-weekly schedule — that\'s 4–5 years of payments you never have to make.' },
    ],
  },
  commonMistakes: {
    intro: 'Many homeowners misunderstand how bi-weekly payments work. Avoid these common pitfalls:',
    items: [
      { mistake: 'Assuming bi-weekly means you pay less each month overall.', fix: 'Bi-weekly payments don\'t reduce your total monthly outflow — they cost the same per payment but add one extra full payment per year. Your annual housing cost increases by one month\'s payment, which is what accelerates payoff.' },
      { mistake: 'Signing up for a paid bi-weekly program through your lender.', fix: 'Many lenders charge setup or processing fees for bi-weekly programs. You can achieve the exact same result for free by dividing your monthly payment by 12 and adding that amount to each monthly payment (or making 13 manual payments per year).' },
      { mistake: 'Not checking if the lender applies extra payments to principal correctly.', fix: 'Some lenders hold bi-weekly payments until the full monthly equivalent is received, defeating the purpose. Before enrolling, confirm in writing that each half-payment is applied immediately to reduce principal.' },
    ],
  },
  relatedContent: {
    intro: 'See how extra payments compare with other acceleration strategies:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/extra-payment-calculator', label: 'Extra Payment Calculator' },
      { to: '/blog/biweekly-payments', label: 'Bi-Weekly Payments Guide' },
      { to: '/blog/pay-off-early', label: 'Pay Off Your Mortgage Early' },
    ],
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
      <CalculatorSchema
        name="Bi-Weekly Mortgage Payment Calculator"
        description="Compare standard monthly payments against an accelerated bi-weekly schedule. See how much interest you can save and how many years you can shave off your 30-year loan."
        url="https://www.mortgagepro.io/biweekly-mortgage-calculator"
      />
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
  understandingResults: {
    intro: 'The rent vs buy decision is about more than just monthly costs. Here\'s what the key metrics in your results mean:',
    items: [
      { term: 'Breakeven Year', explanation: 'The year when cumulative buying costs equal cumulative renting costs. Before this point, renting is cheaper. After it, buying becomes more affordable over time due to home equity growth and fixed mortgage payments vs rising rents.' },
      { term: 'Opportunity Cost', explanation: 'The investment returns you give up by using your down payment (and monthly savings) for a home instead of investing them in stocks or bonds. At 7% average returns, $80K grows to ~$157K in 10 years — that\'s the "cost" of using that money for a down payment.' },
      { term: 'Home Equity', explanation: 'As you pay down your mortgage and your home appreciates, you build equity. After 10 years with 3% appreciation, a $400K home would be worth ~$538K, and you\'d have ~$178K in equity from appreciation plus principal paydown on your loan.' },
      { term: 'Total Cost Comparison', explanation: 'The chart shows two cumulative cost curves. The buying curve includes down payment, closing costs, PITI, and maintenance. The renting curve includes all rent payments. The gap between them at any point tells you the financial advantage of one option over the other.' },
    ],
  },
  commonMistakes: {
    intro: 'The rent vs buy decision is often clouded by emotion and common misconceptions. Watch out for these:',
    items: [
      { mistake: 'Assuming buying is always better because "renting is throwing money away."', fix: 'A $400K home with 20% down at 6.5% costs $2,547/mo in PITI — but only ~$500/mo goes to principal in year one. The rest goes to interest, taxes, and insurance, which is also "throwing money away." Renting is not a bad financial decision if you stay fewer than 4 years.' },
      { mistake: 'Ignoring maintenance and repair costs in the buying scenario.', fix: 'Homeownership comes with 1–2% of home value in annual maintenance. On a $400K home, that\'s $4K–$8K/year for roof repairs, HVAC, plumbing, and general upkeep. Renters don\'t pay these costs. Always factor maintenance into your buy vs rent analysis.' },
      { mistake: 'Not considering lifestyle flexibility when making the decision.', fix: 'Renting offers flexibility to move for jobs, relationships, or lifestyle changes without paying 6% in realtor commissions. If your career is unstable or you might relocate, the flexibility of renting has real financial value that goes beyond the breakeven calculation.' },
    ],
  },
  relatedContent: {
    intro: 'Dive deeper into the numbers with these related resources:',
    links: [
      { to: '/affordability-calculator', label: 'Affordability Calculator' },
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/blog/is-buying-worth-it-2026', label: 'Is Buying Worth It in 2026?' },
      { to: '/blog/closing-costs-explained', label: 'Closing Costs Explained' },
    ],
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
      <CalculatorSchema
        name="Rent vs Buy Calculator"
        description="Is renting or buying the smarter financial move? This tool factors in home appreciation, rent inflation, property taxes, closing costs, and investment returns to find your breakeven year."
        url="https://www.mortgagepro.io/rent-vs-buy-calculator"
      />
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
  understandingResults: {
    intro: 'Understanding how each scenario affects your FIRE trajectory helps you make an informed decision about homeownership:',
    items: [
      { term: 'FIRE Target (Rent Scenario)', explanation: 'The years needed to reach your FIRE number if you continue renting and invest the difference between rent and a mortgage payment. Renting is often cheaper month-to-month, freeing up cash for investments.' },
      { term: 'FIRE Target (Buy Scenario)', explanation: 'The years needed if you buy. Includes the down payment drain on investments plus higher monthly housing costs. However, a paid-off home in retirement reduces your required nest egg.' },
      { term: 'Safe Withdrawal Rate (SWR)', explanation: 'The percentage of your portfolio you can withdraw annually in retirement. The classic 4% rule assumes a balanced portfolio lasting 30 years. At 4%, you need 25× your annual expenses saved. At 3.5%, you need ~28.6×.' },
      { term: 'Paid-Off Home Effect', explanation: 'A paid-off mortgage eliminates your largest monthly expense in retirement. This lowers your FIRE number significantly. The calculator shows both "with mortgage" and "paid-off" scenarios to give you the full picture.' },
    ],
  },
  commonMistakes: {
    intro: 'FIRE-focused homebuyers often make these errors when evaluating the impact of a home purchase:',
    items: [
      { mistake: 'Not counting the opportunity cost of the down payment.', fix: 'A $100K down payment isn\'t just "spent" — it\'s $100K that could have grown to ~$197K in 10 years at 7% returns. That lost compounding is often the single biggest cost of buying a home for FIRE seekers.' },
      { mistake: 'Assuming a paid-off home eliminates ALL housing costs in retirement.', fix: 'Even a paid-off home has ongoing costs: property taxes (1–2.5% of value/year), insurance ($1K–$3K/year), maintenance (1–2%/year), and HOA fees (if applicable). A $500K home may still cost $10K–$20K/year to own, even without a mortgage.' },
      { mistake: 'Overlooking sequence-of-returns risk when taking a large mortgage into early retirement.', fix: 'If you retire early with a large mortgage balance and the stock market drops 30% in your first year (sequence-of-returns risk), you\'ll be forced to sell investments at a loss to make housing payments. Many FIRE advocates recommend paying off the mortgage before retiring.' },
    ],
  },
  relatedContent: {
    intro: 'Explore more FIRE and mortgage strategy content:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/extra-payment-calculator', label: 'Extra Payment Calculator' },
      { to: '/blog/pay-off-early', label: 'Should You Pay Off Early?' },
      { to: '/biweekly-mortgage-calculator', label: 'Bi-Weekly Calculator' },
    ],
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
      <CalculatorSchema
        name="FIRE Impact Calculator"
        description="Thinking about Financial Independence or Early Retirement? See how buying a home could delay — or accelerate — your FIRE timeline based on your savings rate and investment strategy."
        url="https://www.mortgagepro.io/fire-impact-calculator"
      />
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
  understandingResults: {
    intro: 'PMI can significantly increase your housing costs. Here\'s how to interpret the key results:',
    items: [
      { term: 'Monthly PMI Premium', explanation: 'PMI costs 0.5–1% of your loan amount annually, divided into monthly payments. For a $360K loan at 0.85%, that\'s $255/mo — $3,060/year added to your housing costs for zero benefit to you (it protects the lender).' },
      { term: 'LTV Ratio (Loan-to-Value)', explanation: 'Your loan balance divided by the home\'s current value. You start at 90% LTV with 10% down. PMI must be canceled when LTV reaches 80% (20% equity). Home appreciation accelerates reaching this threshold.' },
      { term: 'PMI Cancellation Timeline', explanation: 'With 3% annual appreciation, a 10%-down buyer reaches 80% LTV in ~46 months. With 0% appreciation, it takes ~89 months of regular principal payments to reach the same equity level. Appreciation is the biggest variable in determining how long you\'ll pay PMI.' },
      { term: 'Total PMI Cost', explanation: 'The total dollar amount you pay in PMI premiums before cancellation. This can range from ~$8K (high appreciation, 5% down with rapid repayment) to $25K+ (low appreciation, 3% down, standard amortization).' },
    ],
  },
  commonMistakes: {
    intro: 'Homebuyers often misunderstand PMI or fail to plan for it. Avoid these common errors:',
    items: [
      { mistake: 'Thinking PMI is tax-deductible for most people.', fix: 'PMI was tax-deductible for some taxpayers in prior years, but this deduction has expired for most filers. Check the current tax law — don\'t assume PMI will reduce your tax bill. If your AGI is over $109K, you almost certainly cannot deduct PMI.' },
      { mistake: 'Assuming PMI automatically cancels at 80% LTV without checking.', fix: 'Under the Homeowners Protection Act, PMI must automatically terminate at 78% LTV. But you can request cancellation at 80% LTV. You need to track your equity and send a written request. Some servicers don\'t notify you when you\'re eligible.' },
      { mistake: 'Not considering alternatives to PMI.', fix: 'Instead of paying PMI, consider: (1) a piggyback loan (80% first + 10% second + 10% down), (2) lender-paid PMI (higher rate, no monthly PMI), or (3) an FHA loan with MIP (different cost structure). Run all scenarios through our calculators before deciding.' },
    ],
  },
  relatedContent: {
    intro: 'Explore your options for avoiding or minimizing PMI:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/affordability-calculator', label: 'Affordability Calculator' },
      { to: '/blog/what-is-pmi', label: 'What is PMI? Complete Guide' },
      { to: '/blog/5-percent-down', label: 'Buying with 5% Down' },
    ],
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
      <CalculatorSchema
        name="PMI Calculator (Private Mortgage Insurance)"
        description="Calculate your PMI monthly cost, how long it will take to reach 20% equity, and the total PMI you'll pay. Includes home appreciation to accelerate LTV progress."
        url="https://www.mortgagepro.io/pmi-calculator"
      />
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
  understandingResults: {
    intro: 'Refinancing is a trade-off between upfront costs and long-term savings. Understanding these metrics is critical:',
    items: [
      { term: 'Monthly Savings', explanation: 'The difference between your current monthly P&I payment and the new one. This is your immediate cash flow improvement. A $342/mo savings adds up to $4,104/year — but don\'t forget closing costs.' },
      { term: 'Break-Even Point', explanation: 'The number of months needed for cumulative monthly savings to equal the closing costs paid. If closing costs are $6,000 and you save $342/mo, break-even is 18 months. If you move before 18 months, you lose money on the refinance.' },
      { term: 'Lifetime Interest Savings', explanation: 'The total interest you save over the full loan term. However, this number can be misleading if you restart a 30-year term — you\'re extending your years of payments. The calculator shows this figure both ways.' },
      { term: 'Resetting the Clock', explanation: 'If you\'re 5 years into a 30-year mortgage (300 months remaining) and refinance to a new 30-year, you\'re adding 60 months of payments. The monthly savings may come partly from stretching payments over a longer period. Always compare with a shorter new term if possible.' },
    ],
  },
  commonMistakes: {
    intro: 'Homeowners frequently make costly mistakes when evaluating refinance offers. Watch for these:',
    items: [
      { mistake: 'Focusing only on monthly savings without considering the extended term.', fix: 'Refinancing from a 300-month remaining to a new 360-month loan saves $342/mo, but adds 60 months of payments. Without the term extension, the "savings" partly come from stretching out your payments, not just a lower rate.' },
      { mistake: 'Ignoring closing costs and only looking at the rate difference.', fix: 'A great rate is worthless if closing costs are $10K+ and you plan to move in 2 years. Always calculate the break-even point. If break-even exceeds how long you\'ll keep the home, don\'t refinance regardless of the rate.' },
      { mistake: 'Refinancing too many times in a short period.', fix: 'Each refinance has hard costs (appraisal, title, origination) and soft costs (hard credit inquiry, time investment, paperwork). Frequent refinancing can cost thousands in cumulative fees. Wait until you can lower your rate by at least 0.75-1% before refinancing.' },
    ],
  },
  relatedContent: {
    intro: 'Learn more about refinancing strategies and alternatives:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/extra-payment-calculator', label: 'Extra Payment Calculator' },
      { to: '/blog/when-should-you-refinance', label: 'When Should You Refinance?' },
      { to: '/blog/30-vs-15-year', label: '30-Year vs 15-Year Mortgage' },
    ],
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
      <CalculatorSchema
        name="Refinance Calculator"
        description="Compare your current mortgage against a refinance. Calculate monthly savings, break-even point, and lifetime interest difference to decide if refinancing makes sense."
        url="https://www.mortgagepro.io/refinance-calculator"
      />
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
  understandingResults: {
    intro: 'Closing costs consist of many line items. Here\'s what each major category means and why they vary:',
    items: [
      { term: 'Loan Origination Fee', explanation: 'The lender\'s fee for processing and underwriting your loan. Typically 0.5–1% of the loan amount. This is negotiable — some lenders offer "no origination fee" loans with slightly higher rates.' },
      { term: 'Third-Party Services', explanation: 'Appraisal ($400–$800), title search & insurance ($800–$2,000), attorney fees, and survey costs. These are set by third parties, not your lender, and can vary significantly by location and property type.' },
      { term: 'Prepaid Items', explanation: 'Property taxes and homeowners insurance paid in advance into your escrow account. Lenders require 2–6 months of reserves to ensure these bills are paid on time. This is not a cost you "lose" — it\'s money held for future bills.' },
      { term: 'Transfer Taxes & Recording', explanation: 'State and local government fees to record the deed and mortgage. These vary dramatically: some states charge 0.1% of the purchase price, while others charge 2%+. Texas, New York, and Pennsylvania have some of the highest transfer taxes.' },
    ],
  },
  commonMistakes: {
    intro: 'First-time buyers are often surprised by closing costs. Avoid these common mistakes:',
    items: [
      { mistake: 'Only considering the down payment when calculating cash needed.', fix: 'On a $400K home with 20% down, you need $80K for the down payment PLUS $8K–$16K in closing costs. That\'s $88K–$96K total cash needed. Many first-time buyers don\'t save enough for the closing cost portion.' },
      { mistake: 'Not shopping for title insurance and other third-party services.', fix: 'Title insurance, appraisal, and settlement services can be shopped around. Your lender may recommend a provider, but you\'re not required to use them. Getting 2-3 quotes on title insurance alone can save $500+.' },
      { mistake: 'Accepting the first Loan Estimate without comparing.', fix: 'Always get Loan Estimates from at least 3 different lenders. Closing costs can vary by $3K–$8K between lenders for the same loan product. Use the Loan Estimate to compare "Section A" origination charges and "Section B" services.' },
    ],
  },
  relatedContent: {
    intro: 'Plan your home purchase budget with these related calculators and guides:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/affordability-calculator', label: 'Affordability Calculator' },
      { to: '/pmi-calculator', label: 'PMI Calculator' },
      { to: '/blog/closing-costs-explained', label: 'Closing Costs Explained Guide' },
    ],
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
      <CalculatorSchema
        name="Closing Cost Calculator"
        description="Estimate your home buying closing costs with itemized breakdown. Includes state-specific data, loan origination fees, title insurance, appraisal, and seller concessions."
        url="https://www.mortgagepro.io/closing-cost-calculator"
      />
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
  understandingResults: {
    intro: 'Understanding how extra payments save you money helps you design the best payoff strategy:',
    items: [
      { term: 'Interest Savings', explanation: 'Every extra dollar you pay toward principal reduces the balance on which future interest is calculated. This compounding effect means $200/month extra saves $78K over the life of a 30-year, $320K loan at 6.5%. The earlier you start, the greater the savings.' },
      { term: 'Payoff Timeline', explanation: 'A standard 30-year loan takes 360 months to pay off. With $200/month extra, the loan is paid in ~298 months — that\'s 62 fewer payments. Those 62 payments you don\'t make are a major part of your "savings."' },
      { term: 'Amortization Front-Loading', explanation: 'In year one of a standard 30-year loan, ~78% of each payment goes to interest. By year 15, roughly 50% goes to interest. Extra payments accelerate the shift toward principal — you reach the 50% mark years earlier than scheduled.' },
      { term: 'Lump Sum vs Monthly Extra', explanation: 'A single lump sum of $10K in year one saves more interest than $10K spread as small monthly extras over several years, because the full amount reduces principal immediately. The calculator supports both approaches — use the monthly slider for ongoing payments.' },
    ],
  },
  commonMistakes: {
    intro: 'Homeowners sometimes waste the potential of extra payments with these common errors:',
    items: [
      { mistake: 'Not checking if the lender applies extra payments to principal correctly.', fix: 'Some lenders automatically apply "extra" payments to next month\'s payment rather than reducing principal. Always check your mortgage statement and specify "apply to principal" when making extra payments. Confirm this in writing.' },
      { mistake: 'Paying down a low-rate mortgage instead of investing.', fix: 'If your mortgage rate is 3-4%, investing in the stock market (historical return ~7-10%) may be mathematically better than extra mortgage payments. But at 6.5-7.5% (current rates), paying down the mortgage gives a guaranteed, risk-free return equal to your rate.' },
      { mistake: 'Depleting emergency savings to make extra mortgage payments.', fix: 'Extra mortgage payments are illiquid — once you pay extra, you can\'t easily get that money back if you lose your job or face a medical emergency. Maintain 3-6 months of living expenses in an emergency fund before making extra principal payments.' },
    ],
  },
  relatedContent: {
    intro: 'Explore more mortgage acceleration strategies:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/biweekly-mortgage-calculator', label: 'Bi-Weekly Calculator' },
      { to: '/blog/pay-off-early', label: 'Pay Off Your Mortgage Early' },
      { to: '/blog/biweekly-payments', label: 'Bi-Weekly vs Extra Payments' },
    ],
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
      <CalculatorSchema
        name="Extra Payment Calculator"
        description="See how making extra principal payments can save you thousands in interest and pay off your mortgage years early. Includes year-by-year balance comparison chart."
        url="https://www.mortgagepro.io/extra-payment-calculator"
      />
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
  understandingResults: {
    intro: 'Each mortgage type has different risk and reward characteristics. Understanding them helps you choose the right fit:',
    items: [
      { term: '30-Year Fixed', explanation: 'Predictable payments forever. The highest monthly payment among fixed-rate options, but the lowest risk. Best for buyers who plan to stay 10+ years and want payment certainty regardless of market rate changes.' },
      { term: '15-Year Fixed', explanation: 'Higher monthly payment (~30% more than 30-year) but much lower total interest. A $320K loan at 6% for 15 years costs $166K in interest vs $408K for the 30-year at 6.5%. Best for buyers with strong cash flow who want to build equity fast.' },
      { term: '5/1 ARM', explanation: 'Fixed rate for the first 5 years, then adjusts annually based on a market index plus a margin. The lowest initial rate but highest risk. Best for buyers who are certain they\'ll move or refinance within 5 years.' },
      { term: '7/1 ARM', explanation: 'Fixed for 7 years before adjustments begin. A middle ground — lower rate than a 30-year fixed, with a longer runway than the 5/1 ARM. Best for buyers who expect to stay 5-10 years and want lower payments during that period.' },
    ],
  },
  commonMistakes: {
    intro: 'ARM and fixed-rate decisions are often misunderstood. Avoid these common mistakes:',
    items: [
      { mistake: 'Choosing an ARM solely because of the lower initial rate without a clear exit plan.', fix: 'An ARM only makes sense if you have a concrete plan to sell or refinance before the fixed period ends. If you\'re not sure, choose the 30-year fixed. Rate shock when an ARM resets from 5.75% to 7.5% can add $400+/mo to your payment.' },
      { mistake: 'Assuming rates will always drop, so an ARM will refinance easily.', fix: 'ARMs were a disaster for many borrowers in 2008-2009 when rates rose and home values fell simultaneously. If rates rise and your home value drops, you may not be able to refinance — leaving you stuck with resetting ARM payments.' },
      { mistake: 'Not checking ARM caps and margin when comparing offers.', fix: 'ARM rates are calculated as (index + margin). The margin is fixed for the life of the loan (typically 2.25–3%). Also check periodic caps (how much the rate can increase per adjustment) and lifetime caps (maximum rate over loan life). A 2/2/5 cap is common — 2% first adjustment, 2% annual, 5% lifetime.' },
    ],
  },
  relatedContent: {
    intro: 'Compare your options further with these calculators and guides:',
    links: [
      { to: '/mortgage-calculator', label: 'Mortgage Calculator' },
      { to: '/refinance-calculator', label: 'Refinance Calculator' },
      { to: '/blog/arm-vs-fixed-arm', label: 'ARM vs Fixed Guide' },
      { to: '/blog/30-vs-15-year', label: '30 vs 15 Year Mortgage' },
    ],
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
      <CalculatorSchema
        name="ARM vs Fixed Rate Mortgage Calculator"
        description="Compare 30-year fixed, 15-year fixed, 5/1 ARM, and 7/1 ARM side by side. See monthly payments over time with a chart showing when adjustable rates reset."
        url="https://www.mortgagepro.io/arm-vs-fixed-calculator"
      />
      <ArmVsFixedCalculator />
    </CalculatorPageLayout>
  );
}
