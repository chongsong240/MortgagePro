import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';
import { calculateMortgage, MortgageInputs } from '@/src/lib/mortgage';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

export default function BiWeeklyCalculator() {
  const [inputs, setInputs] = useState<MortgageInputs>({
    homePrice: 400000,
    downPaymentPercent: 20,
    downPaymentAmount: 80000,
    interestRate: 6.5,
    loanTermYears: 30,
    propertyTaxRate: 1.2,
    homeInsurance: 1500,
    hoaFees: 0,
    pmiRate: 0.5
  });

  const handleHomePriceChange = (val: number) => {
    setInputs(prev => ({ ...prev, homePrice: val, downPaymentAmount: val * (prev.downPaymentPercent / 100) }));
  };

  const handleDownPercentChange = (val: number) => {
    setInputs(prev => ({ ...prev, downPaymentPercent: val, downPaymentAmount: prev.homePrice * (val / 100) }));
  };

  const standard = useMemo(() => calculateMortgage(inputs), [inputs]);

  const biWeeklyStats = useMemo(() => {
    // Precise bi-weekly calculation: 26 half-payments per year (every 2 weeks)
    // Equivalent to 26 half = 13 full payments per year (1 extra payment)
    const halfPayment = standard.monthlyPrincipalAndInterest / 2;
    const biWeeklyRate = inputs.interestRate / 100 / 26; // 26 periods per year
    const numBiWeeklyPeriods = inputs.loanTermYears * 26;
    
    // Standard 30-year amortization via bi-weekly periods
    let balance = standard.totalLoanAmount;
    let totalInterest = 0;
    let paymentCount = 0;

    for (let i = 1; i <= numBiWeeklyPeriods; i++) {
      const interest = balance * biWeeklyRate;
      let principal = halfPayment - interest;
      
      if (principal <= 0) break; // Negative amortization
      if (principal > balance) principal = balance;
      
      balance -= principal;
      totalInterest += interest;
      paymentCount++;
      
      if (balance <= 0) break;
    }

    const totalMonths = Math.ceil(paymentCount / 26 * 12);
    const totalYears = totalMonths / 12;

    return {
      payment: halfPayment,
      totalInterest: totalInterest,
      interestSaved: standard.totalInterestPaid - totalInterest,
      monthsSaved: (inputs.loanTermYears * 12) - totalMonths,
      yearsSaved: totalYears > 0 ? (inputs.loanTermYears - totalYears) : 0,
      payoffYears: totalYears,
    };
  }, [standard, inputs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
      {/* LEFT: Inputs */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Scenarios</CardTitle>
            <CardDescription>Adjust your mortgage details to see the bi-weekly impact.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Home Price</Label>
                <div className="relative w-28">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={inputs.homePrice} onChange={(e) => handleHomePriceChange(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[inputs.homePrice]} min={50000} max={2000000} step={10000} onValueChange={(v) => handleHomePriceChange(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Down Payment</Label>
                <div className="relative w-20">
                  <Input type="number" value={Math.round(inputs.downPaymentPercent * 10) / 10} onChange={(e) => handleDownPercentChange(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[inputs.downPaymentPercent]} min={0} max={100} step={1} onValueChange={(v) => handleDownPercentChange(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Interest Rate</Label>
                <div className="relative w-20">
                  <Input type="number" value={inputs.interestRate} step={0.1} onChange={(e) => setInputs({...inputs, interestRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[inputs.interestRate]} min={1} max={15} step={0.125} onValueChange={(v) => setInputs({...inputs, interestRate: v[0]})} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT: Results */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* HERO SAVINGS CARD — large prominent display per blueprint spec */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M100 0L200 100L100 200L0 100Z" fill="currentColor" className="text-green-500" />
            </svg>
          </div>
          <CardContent className="pt-8 pb-8 relative z-10">
            {biWeeklyStats.interestSaved > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                  <div className="space-y-1">
                    <div className="text-green-700 dark:text-green-300 text-sm uppercase font-bold tracking-widest mb-1">
                      You'll Save
                    </div>
                    <div className="text-6xl md:text-7xl font-extrabold text-green-600 dark:text-green-400 leading-none tracking-tight">
                      {formatCurrency(Math.max(0, biWeeklyStats.interestSaved))}
                    </div>
                    <div className="text-green-600/60 dark:text-green-400/60 text-sm font-medium mt-1">
                      in total interest
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-blue-700 dark:text-blue-300 text-sm uppercase font-bold tracking-widest mb-1">
                      Pay Off
                    </div>
                    <div className="text-6xl md:text-7xl font-extrabold text-blue-600 dark:text-blue-400 leading-none tracking-tight">
                      {biWeeklyStats.yearsSaved.toFixed(1)}
                      <span className="text-3xl md:text-4xl text-blue-400 dark:text-blue-500 font-semibold ml-2">Years</span>
                    </div>
                    <div className="text-blue-600/60 dark:text-blue-400/60 text-sm font-medium mt-1">
                      earlier than standard
                    </div>
                  </div>
                </div>
                {/* Savings detail bar */}
                <div className="mt-6 max-w-lg mx-auto bg-green-100/50 dark:bg-green-900/20 rounded-lg px-4 py-3 text-center text-sm text-green-800 dark:text-green-200">
                  Switching from monthly to bi-weekly payments saves you <strong>{formatCurrency(Math.max(0, biWeeklyStats.interestSaved))}</strong> in interest and shortens your loan term by <strong>{biWeeklyStats.yearsSaved.toFixed(1)} years</strong>.
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-3xl font-bold text-muted-foreground">No savings calculated</div>
                <p className="text-muted-foreground/70 mt-2">Adjust your loan parameters to see the bi-weekly benefit.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Standard Monthly</CardTitle>
              <CardDescription>12 payments per year</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Payment Amount</span>
                <span className="text-2xl font-bold">{formatCurrency(standard.monthlyPrincipalAndInterest)}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="font-semibold">{formatCurrency(standard.totalInterestPaid)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payoff Time</span>
                <span className="font-semibold">{inputs.loanTermYears} Years</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Bi-Weekly</CardTitle>
              <CardDescription>26 half-payments per year</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Payment Amount</span>
                <span className="text-2xl font-bold text-primary">{formatCurrency(biWeeklyStats.payment)}<span className="text-sm font-normal text-muted-foreground">/2wks</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="font-semibold">{formatCurrency(biWeeklyStats.totalInterest)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payoff Time</span>
                <span className="font-semibold">{(inputs.loanTermYears - biWeeklyStats.yearsSaved).toFixed(1)} Years</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>How does it work?</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              By paying half of your monthly mortgage payment every two weeks, you end up making 26 half-payments over the course of a year. Because 26 halves equal 13 full payments, you are making <strong>one extra full payment per year</strong> directly toward your principal.
            </p>
            <p>
              This accelerated principal reduction significantly decreases the amount of interest that accrues over the life of your loan, allowing you to pay off your mortgage faster and save thousands of dollars in interest.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
