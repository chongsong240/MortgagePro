import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent, Calendar } from 'lucide-react';

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

function calcMonthlyPI(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

function totalInterest(principal: number, annualRate: number, months: number): number {
  return calcMonthlyPI(principal, annualRate, months) * months - principal;
}

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(320000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [currentMonthsLeft, setCurrentMonthsLeft] = useState(300); // 25 years left
  const [newRate, setNewRate] = useState(6.5);
  const [newTermYears, setNewTermYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(6000);

  const result = useMemo(() => {
    const currentPayment = calcMonthlyPI(currentBalance, currentRate, currentMonthsLeft);
    const newPayment = calcMonthlyPI(currentBalance, newRate, newTermYears * 12);
    const monthlySavings = currentPayment - newPayment;

    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : Infinity;

    const remainingInterestCurrent = totalInterest(currentBalance, currentRate, currentMonthsLeft);
    const remainingInterestNew = totalInterest(currentBalance, newRate, newTermYears * 12);
    const lifetimeInterestDiff = remainingInterestCurrent - remainingInterestNew - closingCosts;

    return {
      currentPayment,
      newPayment,
      monthlySavings,
      breakEvenMonths,
      breakEvenYears: breakEvenMonths / 12,
      remainingInterestCurrent,
      remainingInterestNew,
      lifetimeInterestDiff,
      worthIt: breakEvenMonths < newTermYears * 12 && monthlySavings > 0,
    };
  }, [currentBalance, currentRate, currentMonthsLeft, newRate, newTermYears, closingCosts]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Loan</CardTitle>
            <CardDescription>Your existing mortgage details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Remaining Balance</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[currentBalance]} min={50000} max={2000000} step={10000} onValueChange={(v) => setCurrentBalance(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Current Interest Rate</Label>
                <div className="relative w-28">
                  <Input type="number" value={currentRate} step={0.1} onChange={(e) => setCurrentRate(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[currentRate]} min={1} max={15} step={0.125} onValueChange={(v) => setCurrentRate(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Months Remaining</Label>
                <div className="relative w-28">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={currentMonthsLeft} min={12} max={360} onChange={(e) => setCurrentMonthsLeft(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[currentMonthsLeft]} min={12} max={360} step={12} onValueChange={(v) => setCurrentMonthsLeft(v[0])} />
              <p className="text-xs text-muted-foreground">{(currentMonthsLeft / 12).toFixed(1)} years remaining</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Loan</CardTitle>
            <CardDescription>Your refinance terms.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">New Interest Rate</Label>
                <div className="relative w-28">
                  <Input type="number" value={newRate} step={0.1} onChange={(e) => setNewRate(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[newRate]} min={1} max={15} step={0.125} onValueChange={(v) => setNewRate(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">New Loan Term</Label>
                <div className="relative w-28">
                  <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={newTermYears} min={5} max={30} onChange={(e) => setNewTermYears(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[newTermYears]} min={5} max={30} step={5} onValueChange={(v) => setNewTermYears(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Closing Costs</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={closingCosts} step={500} onChange={(e) => setClosingCosts(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[closingCosts]} min={0} max={20000} step={500} onValueChange={(v) => setClosingCosts(v[0])} />
              <p className="text-xs text-muted-foreground">Typically 2–5% of loan amount.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <Card className={result.worthIt ? "bg-primary text-primary-foreground" : "bg-muted"}>
          <CardHeader>
            <CardTitle className={result.worthIt ? "text-primary-foreground/80" : ""}>
              {result.worthIt ? "✅ Refinancing Makes Sense" : "⚠️ Refinancing May Not Help"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-5xl font-bold tracking-tight ${result.worthIt ? "text-white" : "text-foreground"}`}>
              {result.monthlySavings > 0 ? `${fmt(result.monthlySavings)}/mo` : `+${fmt(Math.abs(result.monthlySavings))}/mo`}
            </div>
            <p className={`mt-2 text-sm ${result.worthIt ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {result.monthlySavings > 0 ? "monthly savings after refinancing" : "higher monthly payment after refinancing"}
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Current Payment</span>
                <span className="font-semibold">{fmt(result.currentPayment)}/mo</span>
              </div>
              <div className="flex justify-between">
                <span>New Payment</span>
                <span className="font-semibold">{fmt(result.newPayment)}/mo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Break-Even Point</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Months to recoup closing costs</div>
                <div className="text-2xl font-bold text-primary">
                  {result.breakEvenMonths === Infinity ? "Never" :
                    result.breakEvenMonths < 12 ? `${result.breakEvenMonths} months` :
                      `${result.breakEvenYears.toFixed(1)} years`}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {result.breakEvenMonths !== Infinity && result.breakEvenMonths < newTermYears * 12
                  ? `You'll start saving after month ${result.breakEvenMonths}.`
                  : "You won't recoup closing costs within the loan term."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Lifetime Interest</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Current remaining interest</div>
                <div className="text-lg font-semibold">{fmt(result.remainingInterestCurrent)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">New loan total interest</div>
                <div className="text-lg font-semibold">{fmt(result.remainingInterestNew)}</div>
              </div>
              <div className="pt-2 border-t">
                <div className="text-xs text-muted-foreground mb-1">Net savings (after closing costs)</div>
                <div className={`text-xl font-bold ${result.lifetimeInterestDiff > 0 ? "text-green-600" : "text-destructive"}`}>
                  {result.lifetimeInterestDiff > 0 ? fmt(result.lifetimeInterestDiff) : `-${fmt(Math.abs(result.lifetimeInterestDiff))}`}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>When Does Refinancing Make Sense?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p><strong className="text-foreground">The 1% rule:</strong> Refinancing is generally worth it if you can lower your rate by at least 1 percentage point.</p>
            <p><strong className="text-foreground">Break-even horizon:</strong> If you plan to stay in the home longer than the break-even period, refinancing saves money.</p>
            <p><strong className="text-foreground">Watch out for term resets:</strong> Refinancing a 25-year remaining loan into a new 30-year loan lowers your payment but increases total interest paid.</p>
            <p><strong className="text-foreground">Cash-out refinance:</strong> If you need funds for renovations or debt consolidation, a cash-out refi may make sense even at a higher rate.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
