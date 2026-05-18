import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

export default function RentVsBuyCalculator() {
  const [inputs, setInputs] = useState({
    homePrice: 400000,
    downPaymentPercent: 20,
    interestRate: 6.5,
    loanTermYears: 30,
    propertyTaxRate: 1.2,
    maintenanceRate: 1.0,
    homeAppreciation: 3.5,
    monthlyRent: 2000,
    rentIncrease: 3.0,
    investmentReturn: 7.0, // Opportunity cost / growth if invested instead
  });

  const chartData = useMemo(() => {
    const downPayment = inputs.homePrice * (inputs.downPaymentPercent / 100);
    const loanAmount = inputs.homePrice - downPayment;
    const monthlyRate = inputs.interestRate / 100 / 12;
    const numPayments = inputs.loanTermYears * 12;
    
    let monthlyPI = 0;
    if (monthlyRate === 0) {
      monthlyPI = loanAmount / numPayments;
    } else {
      monthlyPI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    let currentHomeValue = inputs.homePrice;
    let loanBalance = loanAmount;
    let cumBuySunk = 0;
    let cumRentSunk = 0;

    let currentRent = inputs.monthlyRent;
    let renterInvestedCash = downPayment; // Opportunity cost tracking

    const data = [];
    let criticalYear = null;

    for (let year = 1; year <= 30; year++) {
      // Rent calculations
      const yearlyRent = currentRent * 12;
      cumRentSunk += yearlyRent;
      // Rent increases at end of year for next year
      currentRent *= (1 + inputs.rentIncrease / 100);

      // Renter opportunity cost return (they didn't put down payment so it grows)
      const investmentGain = renterInvestedCash * (inputs.investmentReturn / 100);
      renterInvestedCash += investmentGain;

      // Net rent cost = Total rent paid - Investment gains from down payment
      // This is a simplified net cost metric
      const netRentCost = cumRentSunk - (renterInvestedCash - downPayment);


      // Buy calculations
      let interestThisYear = 0;
      for (let m = 1; m <= 12; m++) {
        const interest = loanBalance * monthlyRate;
        let p = monthlyPI - interest;
        if (p > loanBalance) p = loanBalance;
        loanBalance -= p;
        interestThisYear += interest;
      }

      const taxes = currentHomeValue * (inputs.propertyTaxRate / 100);
      const maint = currentHomeValue * (inputs.maintenanceRate / 100);
      
      const newHomeValue = currentHomeValue * (1 + inputs.homeAppreciation / 100);
      const appreciation = newHomeValue - currentHomeValue;
      currentHomeValue = newHomeValue;

      // Unrecoverable buy costs = Interest + Taxes + Maint
      cumBuySunk += interestThisYear + taxes + maint;
      
      // Net buy cost = Unrecoverable costs - Appreciation gain
      const netBuyCost = cumBuySunk - (currentHomeValue - inputs.homePrice);

      if (criticalYear === null && netBuyCost < netRentCost) {
        criticalYear = year;
      }

      data.push({
        year: `Year ${year}`,
        netRentCost: Math.round(netRentCost),
        netBuyCost: Math.round(netBuyCost)
      });
    }

    return { data, criticalYear };
  }, [inputs]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT: Inputs */}
      <div className="flex flex-col gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle>Buy Scenario</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs">Home Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={inputs.homePrice} onChange={e => setInputs({...inputs, homePrice: Number(e.target.value)})} className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Down Pmt (%)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.downPaymentPercent} onChange={e => setInputs({...inputs, downPaymentPercent: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Interest Rate (%)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.interestRate} step={0.1} onChange={e => setInputs({...inputs, interestRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Appreciation (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.homeAppreciation} step={0.1} onChange={e => setInputs({...inputs, homeAppreciation: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Property Tax (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.propertyTaxRate} step={0.1} onChange={e => setInputs({...inputs, propertyTaxRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Maintenance (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.maintenanceRate} step={0.1} onChange={e => setInputs({...inputs, maintenanceRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rent Scenario & Economics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                <Label className="text-xs">Monthly Rent</Label>
                <div className="relative">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={inputs.monthlyRent} onChange={e => setInputs({...inputs, monthlyRent: Number(e.target.value)})} className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Rent Increase (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.rentIncrease} step={0.1} onChange={e => setInputs({...inputs, rentIncrease: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-xs">Investment Return on Down Payment (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.investmentReturn} step={0.1} onChange={e => setInputs({...inputs, investmentReturn: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">If renting, the down payment cash is invested in the market instead.</p>
              </div>
             </div>
          </CardContent>
        </Card>

      </div>

      {/* RIGHT: Results */}
      <div className="flex flex-col gap-6">

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 text-center">
            {chartData.criticalYear ? (
              <>
                <div className="text-muted-foreground text-sm uppercase font-semibold tracking-wider mb-2">Buying becomes cheaper after</div>
                <div className="text-5xl font-bold text-primary">
                  Year {chartData.criticalYear}
                </div>
              </>
            ) : (
               <>
                <div className="text-muted-foreground text-sm uppercase font-semibold tracking-wider mb-2">Verdict over 30 years</div>
                <div className="text-5xl font-bold text-destructive">
                  Renting Wins
                </div>
                <p className="text-sm text-destructive/80 mt-2">Under these assumptions, buying never breaks even.</p>
               </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net Cumulative Cost</CardTitle>
            <CardDescription>Lower is better. Includes sunk costs minus asset appreciation or investment growth.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData.data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={10} tick={{ fontSize: 12, fill: '#6b7280' }} minTickGap={30} />
                  <YAxis tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={60} />
                  <RechartsTooltip formatter={(value: number) => formatCurrency(value)} labelStyle={{color: 'black'}} />
                  <Line type="monotone" dataKey="netBuyCost" name="Net Cost to Buy" stroke="#1E3A8A" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="netRentCost" name="Net Cost to Rent" stroke="#F59E0B" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
