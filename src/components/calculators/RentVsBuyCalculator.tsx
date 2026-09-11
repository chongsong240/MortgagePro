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
    monthlyRent: 2400,
    rentIncrease: 3.0,
    investmentReturn: 5.0, // Return on the cash a renter keeps invested (down payment + monthly savings)
    // Transaction costs & insurance
    closingCostRate: 3.0, // % of purchase price paid at closing (sunk)
    sellingCostRate: 6.0, // % of the sale price paid when you sell (sunk)
    pmiRate: 0.85, // % of the loan per year, charged while the down payment is under 20%
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

    // Monthly compounding keeps the timing of rent, costs, and appreciation honest
    const monthlyInvestRate = inputs.investmentReturn / 100 / 12;
    const monthlyAppreciation = Math.pow(1 + inputs.homeAppreciation / 100, 1 / 12);
    const monthlyRentGrowth = Math.pow(1 + inputs.rentIncrease / 100, 1 / 12);

    // PMI is charged on the original loan amount while LTV is above 80%
    const pmiMonthly = inputs.downPaymentPercent < 20 ? (loanAmount * (inputs.pmiRate / 100)) / 12 : 0;
    const pmiStopBalance = inputs.homePrice * 0.8;

    // Sunk transaction costs: the buyer pays closing costs up front and selling costs on the way out
    const closingCosts = inputs.homePrice * (inputs.closingCostRate / 100);
    const renterStartingCash = downPayment + closingCosts;

    let currentHomeValue = inputs.homePrice;
    let loanBalance = loanAmount;
    let currentRent = inputs.monthlyRent;
    let renterPortfolio = renterStartingCash; // Down payment + closing costs, invested instead of spent
    let buyerPortfolio = 0; // An owner only has spare cash when renting costs more than owning

    const data = [];
    let criticalYear = null;
    let yearTen: { buy: number; rent: number } | null = null;

    for (let year = 1; year <= 30; year++) {
      for (let m = 1; m <= 12; m++) {
        const interest = loanBalance * monthlyRate;
        let p = monthlyPI - interest;
        if (p > loanBalance) p = loanBalance;
        if (p < 0) p = 0;
        loanBalance -= p;

        // Everything the owner pays this month: P&I, PMI, property tax, and maintenance
        const pmi = loanBalance > pmiStopBalance ? pmiMonthly : 0;
        const taxMonthly = (currentHomeValue * (inputs.propertyTaxRate / 100)) / 12;
        const maintMonthly = (currentHomeValue * (inputs.maintenanceRate / 100)) / 12;
        const buyMonthlyCost = monthlyPI + pmi + taxMonthly + maintMonthly;

        // Whoever pays less this month invests the difference; the renter's portfolio funds any shortfall
        const monthlyDifference = buyMonthlyCost - currentRent;
        renterPortfolio = renterPortfolio * (1 + monthlyInvestRate) + monthlyDifference;
        buyerPortfolio = buyerPortfolio * (1 + monthlyInvestRate) + Math.max(0, -monthlyDifference);

        currentHomeValue *= monthlyAppreciation;
        currentRent *= monthlyRentGrowth;
      }

      // Net worth: the owner holds equity minus the cost of selling; the renter holds the portfolio
      const sellingCosts = currentHomeValue * (inputs.sellingCostRate / 100);
      const buyNetWorth = currentHomeValue - loanBalance - sellingCosts + buyerPortfolio;
      const rentNetWorth = renterPortfolio;

      if (criticalYear === null && buyNetWorth > rentNetWorth) {
        criticalYear = year;
      }
      if (year === 10) {
        yearTen = { buy: Math.round(buyNetWorth), rent: Math.round(rentNetWorth) };
      }

      data.push({
        year: `Year ${year}`,
        netWorthBuy: Math.round(buyNetWorth),
        netWorthRent: Math.round(rentNetWorth)
      });
    }

    return { data, criticalYear, yearTen };
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
              <div className="space-y-2">
                <Label className="text-xs">PMI Rate (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.pmiRate} step={0.05} onChange={e => setInputs({...inputs, pmiRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Closing Costs (% of price)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.closingCostRate} step={0.1} onChange={e => setInputs({...inputs, closingCostRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Selling Costs (% of sale)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.sellingCostRate} step={0.1} onChange={e => setInputs({...inputs, sellingCostRate: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground md:col-span-2">
                PMI is added automatically whenever the down payment is under 20% and stops once the loan reaches 80% LTV. Closing and selling costs are sunk costs — they are what make a short stay expensive.
              </p>

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
                <Label className="text-xs">Investment Return (/yr %)</Label>
                <div className="relative">
                  <Input type="number" value={inputs.investmentReturn} step={0.1} onChange={e => setInputs({...inputs, investmentReturn: Number(e.target.value)})} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Renters invest the down payment, the closing costs, and any month where rent costs less than owning.</p>
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
                <div className="text-muted-foreground text-sm uppercase font-semibold tracking-wider mb-2">Buying comes out ahead after</div>
                <div className="text-5xl font-bold text-primary">
                  Year {chartData.criticalYear}
                </div>
                <p className="text-sm text-muted-foreground mt-2">Plan on staying at least that long for buying to pay off.</p>
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
            {chartData.yearTen && (
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-primary/20 text-left">
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Buyer net worth, 10 yrs</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(chartData.yearTen.buy)}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Renter net worth, 10 yrs</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(chartData.yearTen.rent)}</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net Worth Over Time</CardTitle>
            <CardDescription>Higher is better. Buying builds home equity minus what it costs to sell; renting grows the down payment, closing costs, and any monthly savings.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData.data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={10} tick={{ fontSize: 12, fill: '#6b7280' }} minTickGap={30} />
                  <YAxis tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} width={60} />
                  <RechartsTooltip formatter={(value: number) => formatCurrency(value)} labelStyle={{color: 'black'}} />
                  <Line type="monotone" dataKey="netWorthBuy" name="Net Worth if You Buy" stroke="#1E3A8A" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="netWorthRent" name="Net Worth if You Rent" stroke="#F59E0B" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
