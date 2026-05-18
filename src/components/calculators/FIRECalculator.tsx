import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

export default function FIRECalculator() {
  const [inputs, setInputs] = useState({
    currentInvestments: 200000,
    annualSavings: 60000,
    annualNonHousingExpenses: 40000,
    safeWithdrawalRate: 4.0,
    investmentReturn: 7.0,

    currentRentMonthly: 2000,
    
    homePrice: 500000,
    downPaymentAmount: 100000,
    newHousingMonthly: 3500, // Include P&I, taxes, insurance, maint
  });

  const fireResults = useMemo(() => {
    const swr = inputs.safeWithdrawalRate / 100;
    const r = inputs.investmentReturn / 100;

    // TARGET A: RENTING
    const targetA = (inputs.annualNonHousingExpenses + (inputs.currentRentMonthly * 12)) / swr;
    let yearsA = 0;
    let portA = inputs.currentInvestments;
    
    // Safety break at 100 years
    while(portA < targetA && yearsA < 100) {
      portA = portA * (1 + r) + inputs.annualSavings;
      yearsA++;
      if (yearsA >= 100) break;
    }

    // TARGET B: BUYING
    const targetB = (inputs.annualNonHousingExpenses + (inputs.newHousingMonthly * 12)) / swr;
    let yearsB = 0;
    let portB = inputs.currentInvestments - inputs.downPaymentAmount;
    
    // Adjusted savings: they save less if house costs more than rent
    const housingCostDiff = (inputs.newHousingMonthly - inputs.currentRentMonthly) * 12;
    const saveB = inputs.annualSavings - housingCostDiff;

    while(portB < targetB && yearsB < 100) {
      portB = portB * (1 + r) + saveB;
      yearsB++;
      if (yearsB >= 100) break;
    }

    const difference = yearsB - yearsA;

    return {
      targetA, yearsA,
      targetB, yearsB,
      difference,
      saveB
    };
  }, [inputs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
      {/* LEFT: Inputs */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle>Current Finances</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs">Current Portfolio Balance</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.currentInvestments} onChange={e => setInputs({...inputs, currentInvestments: Number(e.target.value)})} className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Annual Savings (While Renting)</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.annualSavings} onChange={e => setInputs({...inputs, annualSavings: Number(e.target.value)})} className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Non-Housing Yearly Living Expenses</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.annualNonHousingExpenses} onChange={e => setInputs({...inputs, annualNonHousingExpenses: Number(e.target.value)})} className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Current Monthly Rent</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.currentRentMonthly} onChange={e => setInputs({...inputs, currentRentMonthly: Number(e.target.value)})} className="pl-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Potential House Purchase</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-xs">Total Down Payment + Closing Costs</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.downPaymentAmount} onChange={e => setInputs({...inputs, downPaymentAmount: Number(e.target.value)})} className="pl-8" />
              </div>
              <p className="text-[10px] text-muted-foreground">This will be subtracted from your current portfolio.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">New Total Monthly House Cost</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={inputs.newHousingMonthly} onChange={e => setInputs({...inputs, newHousingMonthly: Number(e.target.value)})} className="pl-8" />
              </div>
              <p className="text-[10px] text-muted-foreground">Include P&I, taxes, insurance, and maintenance.</p>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* RIGHT: Results */}
      <div className="lg:col-span-8 flex flex-col gap-6">

        <Card className="bg-primary border-transparent text-primary-foreground">
          <CardContent className="pt-8 text-center px-4">
             {fireResults.difference > 0 ? (
               <div className="space-y-3">
                 <div className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">The impact</div>
                 <div className="text-3xl md:text-5xl font-bold leading-tight">
                   Buying a home will delay your FIRE goal by <span className="text-yellow-300">{fireResults.difference} years</span>.
                 </div>
               </div>
             ) : fireResults.difference < 0 ? (
                <div className="space-y-3">
                 <div className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">The impact</div>
                 <div className="text-3xl md:text-5xl font-bold leading-tight">
                   Buying a home will accelerate your FIRE goal by <span className="text-green-300">{Math.abs(fireResults.difference)} years</span>.
                 </div>
               </div>
             ) : (
                <div className="space-y-3">
                 <div className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">The impact</div>
                 <div className="text-3xl md:text-5xl font-bold leading-tight">
                   Buying a home has no impact on your FIRE timeline.
                 </div>
               </div>
             )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Scenario: Keep Renting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Years to FIRE</span>
                <span className="text-4xl font-bold">{fireResults.yearsA}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">FIRE Target Number</span>
                <span className="font-semibold">{formatCurrency(fireResults.targetA)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Annual Savings Rate</span>
                <span className="font-semibold">{formatCurrency(inputs.annualSavings)}/yr</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Scenario: Buy House</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="text-muted-foreground">Years to FIRE</span>
                <span className="text-4xl font-bold text-primary">{fireResults.yearsB}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">FIRE Target Number</span>
                <span className="font-semibold">{formatCurrency(fireResults.targetB)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Adjusted Savings Rate</span>
                <span className={`font-semibold ${fireResults.saveB < 0 ? 'text-destructive' : ''}`}>
                  {formatCurrency(fireResults.saveB)}/yr
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Note on Methodology:</strong> This is a simplified calculation. It assumes you sell the house or carry the mortgage into retirement (hence the Target FIRE number increases if your house payment is higher than rent). In reality, paying off the house before retirement would significantly drop your target number, altering the math. It also assumes your investments earn {inputs.investmentReturn}% after inflation, and uses a {inputs.safeWithdrawalRate}% Safe Withdrawal Rate.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
