import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

function amortize(principal: number, annualRate: number, months: number, extraMonthly: number) {
  const r = annualRate / 100 / 12;
  const basePayment = r === 0
    ? principal / months
    : principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);

  let balance = principal;
  let totalInterest = 0;
  let m = 0;
  const yearlyData: { year: number; balance: number; interestPaid: number }[] = [];
  let yearInterest = 0;

  for (let i = 1; i <= months; i++) {
    const interest = balance * r;
    let principal_pmt = basePayment - interest + extraMonthly;
    if (principal_pmt > balance) principal_pmt = balance;
    balance -= principal_pmt;
    totalInterest += interest;
    yearInterest += interest;
    m = i;

    if (i % 12 === 0 || balance <= 0) {
      yearlyData.push({ year: Math.ceil(i / 12), balance: Math.max(0, balance), interestPaid: Math.round(totalInterest) });
      yearInterest = 0;
    }
    if (balance <= 0) break;
  }

  return { months: m, totalInterest, basePayment, yearlyData };
}

export default function ExtraPaymentCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [extraMonthly, setExtraMonthly] = useState(200);

  const loanAmount = homePrice * (1 - downPct / 100);

  const standard = useMemo(() =>
    amortize(loanAmount, interestRate, loanTermYears * 12, 0),
    [loanAmount, interestRate, loanTermYears]
  );

  const withExtra = useMemo(() =>
    amortize(loanAmount, interestRate, loanTermYears * 12, extraMonthly),
    [loanAmount, interestRate, loanTermYears, extraMonthly]
  );

  const monthsSaved = standard.months - withExtra.months;
  const interestSaved = standard.totalInterest - withExtra.totalInterest;

  // Merge chart data
  const chartData = useMemo(() => {
    const maxYear = Math.ceil(standard.months / 12);
    return Array.from({ length: maxYear }, (_, i) => {
      const year = i + 1;
      const std = standard.yearlyData.find(d => d.year === year);
      const ext = withExtra.yearlyData.find(d => d.year === year);
      return {
        year: `Yr ${year}`,
        'Standard': std?.balance ?? 0,
        'With Extra': ext?.balance ?? 0,
      };
    });
  }, [standard, withExtra]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
            <CardDescription>Enter your mortgage and extra payment amount.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Home Price</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[homePrice]} min={50000} max={2000000} step={10000} onValueChange={(v) => setHomePrice(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Down Payment</Label>
                <div className="relative w-28">
                  <Input type="number" value={downPct} step={1} onChange={(e) => setDownPct(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[downPct]} min={0} max={50} step={1} onValueChange={(v) => setDownPct(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Interest Rate</Label>
                <div className="relative w-28">
                  <Input type="number" value={interestRate} step={0.1} onChange={(e) => setInterestRate(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[interestRate]} min={1} max={15} step={0.125} onValueChange={(v) => setInterestRate(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Loan Term</Label>
                <div className="relative w-28">
                  <Input type="number" value={loanTermYears} min={5} max={40} onChange={(e) => setLoanTermYears(Number(e.target.value))} className="pr-10 text-right" />
                  <span className="absolute right-2.5 top-2.5 text-xs text-muted-foreground">yrs</span>
                </div>
              </div>
              <Slider value={[loanTermYears]} min={5} max={40} step={5} onValueChange={(v) => setLoanTermYears(v[0])} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-primary">Extra Monthly Payment</CardTitle>
            <CardDescription>How much extra will you pay toward principal each month?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-sm font-medium">Extra Payment</Label>
              <div className="relative w-32">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="number" value={extraMonthly} step={50} onChange={(e) => setExtraMonthly(Math.max(0, Number(e.target.value)))} className="pl-8" />
              </div>
            </div>
            <Slider value={[extraMonthly]} min={0} max={2000} step={50} onValueChange={(v) => setExtraMonthly(v[0])} />
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        {/* Hero savings card */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-200 dark:border-green-800">
          <CardContent className="pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="space-y-1">
                <div className="text-green-700 dark:text-green-300 text-sm uppercase font-bold tracking-widest mb-1">Interest Saved</div>
                <div className="text-5xl md:text-6xl font-extrabold text-green-600 dark:text-green-400 leading-none">
                  {fmt(interestSaved)}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-700 dark:text-blue-300 text-sm uppercase font-bold tracking-widest mb-1">Pay Off Early</div>
                <div className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 leading-none">
                  {monthsSaved < 12
                    ? `${monthsSaved}mo`
                    : `${(monthsSaved / 12).toFixed(1)}yr`}
                </div>
              </div>
            </div>
            <div className="mt-6 bg-green-100/50 dark:bg-green-900/20 rounded-lg px-4 py-3 text-center text-sm text-green-800 dark:text-green-200">
              Paying an extra <strong>{fmt(extraMonthly)}/month</strong> saves <strong>{fmt(interestSaved)}</strong> in interest and pays off your loan <strong>{monthsSaved < 12 ? `${monthsSaved} months` : `${(monthsSaved / 12).toFixed(1)} years`}</strong> early.
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Standard Loan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Monthly Payment (P&I)</div>
                <div className="text-xl font-bold">{fmt(standard.basePayment)}/mo</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Total Interest</div>
                <div className="text-lg font-semibold">{fmt(standard.totalInterest)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Payoff</div>
                <div className="text-lg font-semibold">{loanTermYears} years</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-primary">With Extra {fmt(extraMonthly)}/mo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Monthly Payment (P&I)</div>
                <div className="text-xl font-bold text-primary">{fmt(standard.basePayment + extraMonthly)}/mo</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Total Interest</div>
                <div className="text-lg font-semibold">{fmt(withExtra.totalInterest)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Payoff</div>
                <div className="text-lg font-semibold">{(withExtra.months / 12).toFixed(1)} years</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Remaining Balance Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorStd" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="colorExt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#6b7280' }} interval="preserveStartEnd" />
                  <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#6b7280' }} width={50} />
                  <RechartsTooltip formatter={(v: number) => fmt(v)} />
                  <Area type="monotone" dataKey="Standard" stroke="#94a3b8" fill="url(#colorStd)" strokeWidth={2} />
                  <Area type="monotone" dataKey="With Extra" stroke="#2563eb" fill="url(#colorExt)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
