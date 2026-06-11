import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { calculateMortgage, MortgageInputs } from '@/src/lib/mortgage';
import stateDataRaw from '@/src/data/state_data.json';
import { DollarSign, Percent, Calendar, Briefcase, CreditCard, Home, TrendingUp } from 'lucide-react';

const stateData = stateDataRaw as Record<string, {
  name: string, median_home_price: number,
  property_tax_rate: number, closing_cost_pct: number, avg_annual_insurance: number
}>;

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

/**
 * Brute-force search for max affordable home price using 28/36 rule.
 * Starts at $50k and increments by $5k until monthly payment exceeds allowable limit.
 */
function findMaxAffordablePrice(
  monthlyIncome: number,
  monthlyDebts: number,
  downPaymentPercent: number,
  interestRate: number,
  loanTermYears: number,
  propertyTaxRate: number,
  homeInsurance: number
): { maxPrice: number; monthlyPayment: number; dti28: number; dti36: number } {
  const maxBy28 = monthlyIncome * 0.28;
  const maxBy36 = (monthlyIncome - monthlyDebts) * 0.36;
  const maxAllowedPayment = Math.min(maxBy28, maxBy36);

  let bestPrice = 0;
  let bestPayment = 0;

  for (let price = 50000; price <= 5000000; price += 5000) {
    const downAmount = price * (downPaymentPercent / 100);
    const inputs: MortgageInputs = {
      homePrice: price,
      downPaymentPercent,
      downPaymentAmount: downAmount,
      interestRate,
      loanTermYears,
      propertyTaxRate,
      homeInsurance,
      hoaFees: 0,
      pmiRate: 0.5,
    };
    const result = calculateMortgage(inputs);
    if (result.totalMonthlyPayment <= maxAllowedPayment) {
      bestPrice = price;
      bestPayment = result.totalMonthlyPayment;
    } else {
      break;
    }
  }

  return { maxPrice: bestPrice, monthlyPayment: bestPayment, dti28: maxBy28, dti36: maxBy36 };
}

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(90000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [selectedState, setSelectedState] = useState<string>('National');
  const [stateDetecting, setStateDetecting] = useState(true);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.9);
  const [homeInsurance, setHomeInsurance] = useState(2258);

  // Auto-detect state from IP
  useEffect(() => {
    let cancelled = false;
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (cancelled) return;
        const regionCode = data?.region_code as string;
        if (regionCode && stateData[regionCode]) {
          handleStateChange(regionCode);
        }
      })
      .catch(() => { })
      .finally(() => {
        if (!cancelled) setStateDetecting(false);
      });
    return () => { cancelled = true; };
  }, []);

  const handleStateChange = (val: string) => {
    setSelectedState(val);
    if (val !== 'National' && stateData[val]) {
      const s = stateData[val];
      setPropertyTaxRate(s.property_tax_rate * 100);
      setHomeInsurance(s.avg_annual_insurance);
    } else {
      setPropertyTaxRate(0.9);
      setHomeInsurance(2258);
    }
  };

  const monthlyIncome = useMemo(() => annualIncome / 12, [annualIncome]);

  const result = useMemo(
    () => findMaxAffordablePrice(
      monthlyIncome, monthlyDebts, downPaymentPercent,
      interestRate, loanTermYears, propertyTaxRate, homeInsurance
    ),
    [monthlyIncome, monthlyDebts, downPaymentPercent, interestRate, loanTermYears, propertyTaxRate, homeInsurance]
  );

  const totalUpfront = useMemo(
    () => result.maxPrice * (downPaymentPercent / 100),
    [result.maxPrice, downPaymentPercent]
  );

  const incomeNeeded = useMemo(() => {
    const estimatedPayment = result.monthlyPayment;
    return Math.ceil((estimatedPayment / 0.28) * 12 / 1000) * 1000;
  }, [result.monthlyPayment]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT: Inputs */}
      <div className="flex flex-col gap-6">
        {/* Income & Debt */}
        <Card>
          <CardHeader>
            <CardTitle>Your Financial Profile</CardTitle>
            <CardDescription>Enter your income and existing debts to calculate your budget.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="annualIncome" className="text-sm font-medium">Annual Household Income</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="annualIncome"
                    type="number"
                    value={annualIncome}
                    step={5000}
                    onChange={(e) => setAnnualIncome(Math.max(20000, Number(e.target.value)))}
                    className="pl-8"
                  />
                </div>
              </div>
              <Slider
                value={[annualIncome]}
                min={20000}
                max={500000}
                step={5000}
                onValueChange={(vals) => setAnnualIncome(vals[0])}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="monthlyDebts" className="text-sm font-medium">Monthly Debt Payments</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="monthlyDebts"
                    type="number"
                    value={monthlyDebts}
                    step={50}
                    onChange={(e) => setMonthlyDebts(Math.max(0, Number(e.target.value)))}
                    className="pl-8"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Car loans, student loans, credit card minimums, etc.</p>
              <Slider
                value={[monthlyDebts]}
                min={0}
                max={5000}
                step={50}
                onValueChange={(vals) => setMonthlyDebts(vals[0])}
              />
            </div>
          </CardContent>
        </Card>

        {/* Loan Details */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Assumptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Down Payment</Label>
                <div className="relative w-28">
                  <Input
                    type="number"
                    value={downPaymentPercent}
                    step={1}
                    onChange={(e) => setDownPaymentPercent(Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="pr-6 text-right"
                  />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider
                value={[downPaymentPercent]}
                min={0}
                max={50}
                step={1}
                onValueChange={(vals) => setDownPaymentPercent(vals[0])}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate</Label>
                <div className="relative w-28">
                  <Input
                    id="interestRate"
                    type="number"
                    value={interestRate}
                    step={0.1}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="pr-8 text-right"
                  />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider
                value={[interestRate]}
                min={1}
                max={15}
                step={0.125}
                onValueChange={(vals) => setInterestRate(vals[0])}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="loanTerm" className="text-sm font-medium">Loan Term (Years)</Label>
                <div className="relative w-28">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="loanTerm"
                    type="number"
                    value={loanTermYears}
                    min={1} max={40}
                    onChange={(e) => setLoanTermYears(Math.min(40, Math.max(1, Number(e.target.value))))}
                    className="pl-8"
                  />
                </div>
              </div>
              <Slider
                value={[loanTermYears]}
                min={1} max={40} step={1}
                onValueChange={(vals) => setLoanTermYears(vals[0])}
              />
            </div>
          </CardContent>
        </Card>

        {/* State */}
        <Card>
          <CardHeader>
            <CardTitle>Taxes & Insurance</CardTitle>
            <CardDescription>Estimated based on your selected state.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <Label>Location (State)</Label>
              <Select value={selectedState} onValueChange={handleStateChange}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder={stateDetecting ? "Detecting..." : "Select State"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="National">National Average</SelectItem>
                  {Object.entries(stateData).map(([code, data]) => (
                    <SelectItem key={code} value={code}>{data.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Label htmlFor="propertyTaxRate" className="text-sm font-medium">Property Tax Rate (/yr)</Label>
              <div className="relative w-28">
                <Input
                  id="propertyTaxRate"
                  type="number"
                  value={propertyTaxRate}
                  step={0.1}
                  onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
                  className="pr-8 text-right"
                />
                <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Label htmlFor="homeInsurance" className="text-sm font-medium">Home Insurance (/yr)</Label>
              <div className="relative w-28">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="homeInsurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  className="pl-8"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT: Results */}
      <div className="flex flex-col gap-6">
        {/* Hero result */}
        <Card className="bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Home className="w-48 h-48" />
          </div>
          <CardHeader>
            <CardTitle className="text-primary-foreground/80">Maximum Affordable Home Price</CardTitle>
          </CardHeader>
          <CardContent>
            {result.maxPrice > 0 ? (
              <>
                <div className="text-5xl font-bold tracking-tight text-white">
                  {formatCurrency(result.maxPrice)}
                </div>
                <p className="text-primary-foreground/70 mt-2 text-sm">
                  Estimated monthly payment: {formatCurrency(result.monthlyPayment)}
                </p>
              </>
            ) : (
              <>
                <div className="text-3xl font-bold tracking-tight text-white">
                  Below minimum
                </div>
                <p className="text-primary-foreground/70 mt-2 text-sm">
                  Consider increasing your income, reducing debts, or a larger down payment.
                </p>
              </>
            )}
            <div className="mt-6 flex flex-col gap-2 relative z-10 text-sm">
              <div className="flex justify-between">
                <span>Monthly Income</span>
                <span className="font-semibold">{formatCurrency(monthlyIncome)}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Debts</span>
                <span className="font-semibold">{formatCurrency(monthlyDebts)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DTI Breakdown & Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DTI Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Debt-to-Income (DTI)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">28% Front-End (Housing only)</div>
                <div className="text-lg font-semibold">{formatCurrency(result.dti28)}/mo</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">36% Back-End (Housing + Debts)</div>
                <div className="text-lg font-semibold">{formatCurrency(result.dti36)}/mo</div>
              </div>
              <div className="pt-2 border-t">
                <div className="text-xs text-muted-foreground mb-1">Your max allowed monthly payment</div>
                <div className="text-xl font-bold text-primary">
                  {formatCurrency(Math.min(result.dti28, result.dti36))}/mo
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Purchase Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Down Payment ({downPaymentPercent}%)</div>
                <div className="text-lg font-semibold">{formatCurrency(totalUpfront)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Loan Amount</div>
                <div className="text-lg font-semibold">
                  {formatCurrency(result.maxPrice - totalUpfront)}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Income Needed (28% rule)</div>
                <div className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  {formatCurrency(incomeNeeded)}/yr
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <Card>
          <CardHeader>
            <CardTitle>How Affordability Is Calculated</CardTitle>
            <CardDescription>Based on the standard 28/36 underwriting rule.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">28% Rule:</strong> Your total monthly housing payment
              (PITI — Principal, Interest, Taxes, Insurance) should not exceed <strong>28%</strong> of your
              gross monthly income.
            </p>
            <p>
              <strong className="text-foreground">36% Rule:</strong> Your total monthly debt payments
              (housing + car loans, student loans, credit cards) should not exceed <strong>36%</strong> of
              your gross monthly income.
            </p>
            <p>
              The calculator uses the <strong>stricter</strong> of the two limits to determine your maximum
              affordable home price, then finds the highest price your monthly budget can support at current
              interest rates.
            </p>
            <p className="text-xs pt-2 border-t">
              * This is an educational estimate. Actual loan approval depends on credit score, exact
              rates, and lender-specific underwriting criteria. Consult a mortgage professional.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
