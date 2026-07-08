import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

function calcMonthlyPI(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

interface ArmScenario {
  label: string;
  fixedYears: number;
  initialRate: number;
  color: string;
}

export default function ArmVsFixedCalculator() {
  const [loanAmount, setLoanAmount] = useState(320000);
  const [fixedRate30, setFixedRate30] = useState(6.75);
  const [fixedRate15, setFixedRate15] = useState(6.0);
  const [arm51Rate, setArm51Rate] = useState(5.75);
  const [arm71Rate, setArm71Rate] = useState(6.0);
  const [expectedRateAfterFixed, setExpectedRateAfterFixed] = useState(7.5);
  const [planToStayYears, setPlanToStayYears] = useState(7);

  const scenarios: ArmScenario[] = [
    { label: '30-Year Fixed', fixedYears: 30, initialRate: fixedRate30, color: '#1e3a8a' },
    { label: '15-Year Fixed', fixedYears: 15, initialRate: fixedRate15, color: '#7c3aed' },
    { label: '5/1 ARM', fixedYears: 5, initialRate: arm51Rate, color: '#059669' },
    { label: '7/1 ARM', fixedYears: 7, initialRate: arm71Rate, color: '#d97706' },
  ];

  const results = useMemo(() => {
    return scenarios.map(s => {
      const totalMonths = s.label.includes('15') ? 180 : 360;
      const fixedMonths = s.fixedYears * 12;
      const adjustedRate = s.label.includes('Fixed') ? s.initialRate : expectedRateAfterFixed;

      // Phase 1: fixed period
      const phase1Payment = calcMonthlyPI(loanAmount, s.initialRate, totalMonths);
      let balance = loanAmount;
      let totalInterest = 0;

      for (let m = 1; m <= Math.min(fixedMonths, totalMonths); m++) {
        const r = s.initialRate / 100 / 12;
        const interest = balance * r;
        const principal = phase1Payment - interest;
        balance -= principal;
        totalInterest += interest;
      }

      // Phase 2: adjusted rate (ARM only)
      let phase2Payment = phase1Payment;
      if (!s.label.includes('Fixed') && balance > 0) {
        const remainingMonths = totalMonths - fixedMonths;
        phase2Payment = calcMonthlyPI(balance, adjustedRate, remainingMonths);
        for (let m = 1; m <= remainingMonths; m++) {
          const r = adjustedRate / 100 / 12;
          const interest = balance * r;
          const principal = phase2Payment - interest;
          if (principal <= 0) break;
          balance -= Math.min(principal, balance);
          totalInterest += interest;
          if (balance <= 0) break;
        }
      }

      // Cost over planToStayYears
      const stayMonths = planToStayYears * 12;
      let stayCost = 0;
      let stayBalance = loanAmount;
      for (let m = 1; m <= Math.min(stayMonths, totalMonths); m++) {
        const rate = (s.label.includes('Fixed') || m <= fixedMonths) ? s.initialRate : adjustedRate;
        const r = rate / 100 / 12;
        const pmt = m <= fixedMonths ? phase1Payment : phase2Payment;
        const interest = stayBalance * r;
        const principal = pmt - interest;
        stayBalance -= Math.min(principal, stayBalance);
        stayCost += pmt;
      }

      return {
        label: s.label,
        color: s.color,
        phase1Payment: Math.round(phase1Payment),
        phase2Payment: Math.round(phase2Payment),
        totalInterest: Math.round(totalInterest),
        stayCost: Math.round(stayCost),
        stayBalance: Math.round(stayBalance),
      };
    });
  }, [loanAmount, fixedRate30, fixedRate15, arm51Rate, arm71Rate, expectedRateAfterFixed, planToStayYears]);

  // Chart: monthly payment by year
  const chartData = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const year = i + 1;
      const point: Record<string, number | string> = { year: `Yr ${year}` };
      scenarios.forEach((s, si) => {
        const isFixed = s.label.includes('Fixed');
        const inFixedPeriod = year <= s.fixedYears;
        point[s.label] = inFixedPeriod || isFixed
          ? results[si].phase1Payment
          : results[si].phase2Payment;
      });
      return point;
    });
  }, [results]);

  const cheapestStay = results.reduce((a, b) => a.stayCost < b.stayCost ? a : b);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Loan Amount</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[loanAmount]} min={50000} max={2000000} step={10000} onValueChange={(v) => setLoanAmount(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">How long you plan to stay</Label>
                <div className="relative w-28">
                  <Input type="number" value={planToStayYears} min={1} max={30} onChange={(e) => setPlanToStayYears(Number(e.target.value))} className="pr-10 text-right" />
                  <span className="absolute right-2.5 top-2.5 text-xs text-muted-foreground">yrs</span>
                </div>
              </div>
              <Slider value={[planToStayYears]} min={1} max={30} step={1} onValueChange={(v) => setPlanToStayYears(v[0])} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interest Rates</CardTitle>
            <CardDescription>Set rates for each loan type.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { label: '30-Year Fixed Rate', value: fixedRate30, set: setFixedRate30 },
              { label: '15-Year Fixed Rate', value: fixedRate15, set: setFixedRate15 },
              { label: '5/1 ARM Initial Rate', value: arm51Rate, set: setArm51Rate },
              { label: '7/1 ARM Initial Rate', value: arm71Rate, set: setArm71Rate },
              { label: 'ARM Rate After Fixed Period', value: expectedRateAfterFixed, set: setExpectedRateAfterFixed },
            ].map(({ label, value, set }) => (
              <div key={label} className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium">{label}</Label>
                  <div className="relative w-24">
                    <Input type="number" value={value} step={0.125} onChange={(e) => set(Number(e.target.value))} className="pr-6 text-right" />
                    <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
                <Slider value={[value]} min={1} max={15} step={0.125} onValueChange={(v) => set(v[0])} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-primary-foreground/80">Best Option for {planToStayYears}-Year Stay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">{cheapestStay.label}</div>
            <p className="text-primary-foreground/70 mt-1 text-sm">Lowest total cost over {planToStayYears} years</p>
            <div className="text-3xl font-bold text-white mt-3">{fmt(cheapestStay.stayCost)}</div>
            <p className="text-primary-foreground/70 text-sm">total payments over {planToStayYears} years</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Side-by-Side Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.map((r) => (
                <div key={r.label} className="flex items-center justify-between p-3 rounded-lg bg-muted/40 border">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: r.color }} />
                    <div>
                      <div className="font-semibold text-sm">{r.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {fmt(r.phase1Payment)}/mo initial
                        {r.phase2Payment !== r.phase1Payment && ` → ${fmt(r.phase2Payment)}/mo after`}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">{fmt(r.stayCost)}</div>
                    <div className="text-xs text-muted-foreground">over {planToStayYears} yrs</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Monthly Payment Over Time</CardTitle>
            <CardDescription>Shows when ARM rates adjust.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} interval={4} />
                  <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`} tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} width={50} />
                  <RechartsTooltip formatter={(v: number) => fmt(v)} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  {scenarios.map(s => (
                    <Line key={s.label} type="stepAfter" dataKey={s.label} stroke={s.color} strokeWidth={2} dot={false} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
