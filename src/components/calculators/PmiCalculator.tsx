import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Percent } from 'lucide-react';

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

export default function PmiCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(10);
  const [pmiRate, setPmiRate] = useState(0.85);
  const [interestRate, setInterestRate] = useState(6.5);
  const [appreciation, setAppreciation] = useState(3);

  const result = useMemo(() => {
    const downAmount = homePrice * (downPct / 100);
    const loanAmount = homePrice - downAmount;
    const monthlyPmi = (loanAmount * (pmiRate / 100)) / 12;

    // Monthly P&I
    const r = interestRate / 100 / 12;
    const n = 360;
    const monthlyPI = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Find month when LTV reaches 80% (principal paydown + appreciation)
    let balance = loanAmount;
    let month = 0;
    let totalPmiPaid = 0;
    let pmiMonths = 0;

    for (let m = 1; m <= n; m++) {
      const interest = balance * r;
      const principal = monthlyPI - interest;
      balance -= principal;
      month = m;

      // Current home value with appreciation
      const currentValue = homePrice * Math.pow(1 + appreciation / 100, m / 12);
      const ltv = (balance / currentValue) * 100;

      if (ltv <= 80) {
        pmiMonths = m;
        break;
      }
      totalPmiPaid += monthlyPmi;
    }

    // Auto-cancel at 78% LTV (no appreciation, principal only)
    let balance78 = loanAmount;
    let autoMonth = 0;
    for (let m = 1; m <= n; m++) {
      const interest = balance78 * r;
      const principal = monthlyPI - interest;
      balance78 -= principal;
      const ltv = (balance78 / homePrice) * 100;
      if (ltv <= 78) { autoMonth = m; break; }
    }

    return {
      downAmount,
      loanAmount,
      monthlyPmi,
      monthlyPI,
      pmiMonths: pmiMonths || autoMonth,
      totalPmiPaid: pmiMonths > 0 ? totalPmiPaid : monthlyPmi * autoMonth,
      autoMonth,
      ltv: 100 - downPct,
    };
  }, [homePrice, downPct, pmiRate, interestRate, appreciation]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
            <CardDescription>Enter your home price and down payment to calculate PMI.</CardDescription>
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
                  <Input type="number" value={downPct} step={1} min={0} max={19.9} onChange={(e) => setDownPct(Math.min(19.9, Number(e.target.value)))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[downPct]} min={0} max={19.9} step={0.5} onValueChange={(v) => setDownPct(v[0])} />
              <p className="text-xs text-muted-foreground">PMI is required when down payment is below 20%.</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">PMI Rate (annual)</Label>
                <div className="relative w-28">
                  <Input type="number" value={pmiRate} step={0.05} onChange={(e) => setPmiRate(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[pmiRate]} min={0.2} max={2.0} step={0.05} onValueChange={(v) => setPmiRate(v[0])} />
              <p className="text-xs text-muted-foreground">Typical range: 0.5%–1.5% of loan amount per year.</p>
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
                <Label className="text-sm font-medium">Annual Home Appreciation</Label>
                <div className="relative w-28">
                  <Input type="number" value={appreciation} step={0.5} onChange={(e) => setAppreciation(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[appreciation]} min={0} max={10} step={0.5} onValueChange={(v) => setAppreciation(v[0])} />
              <p className="text-xs text-muted-foreground">Appreciation accelerates reaching 80% LTV.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-primary-foreground/80">Monthly PMI Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold tracking-tight text-white">{fmt(result.monthlyPmi)}<span className="text-xl font-normal opacity-70">/mo</span></div>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Current LTV</span>
                <span className="font-semibold">{result.ltv.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Loan Amount</span>
                <span className="font-semibold">{fmt(result.loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span>Down Payment</span>
                <span className="font-semibold">{fmt(result.downAmount)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">PMI Removal Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">With {appreciation}% appreciation</div>
                <div className="text-2xl font-bold text-primary">
                  {result.pmiMonths < 12
                    ? `${result.pmiMonths} months`
                    : `${(result.pmiMonths / 12).toFixed(1)} years`}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Auto-cancel (78% LTV, no appreciation)</div>
                <div className="text-lg font-semibold">
                  {result.autoMonth < 12
                    ? `${result.autoMonth} months`
                    : `${(result.autoMonth / 12).toFixed(1)} years`}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total PMI Cost</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Total PMI you'll pay</div>
                <div className="text-2xl font-bold text-destructive">{fmt(result.totalPmiPaid)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Monthly P&I payment</div>
                <div className="text-lg font-semibold">{fmt(result.monthlyPI)}/mo</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How to Remove PMI Faster</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p><strong className="text-foreground">Request cancellation at 80% LTV:</strong> Once your loan balance drops to 80% of the original purchase price, you can request PMI removal in writing.</p>
            <p><strong className="text-foreground">Automatic cancellation at 78% LTV:</strong> Federal law (Homeowners Protection Act) requires automatic PMI cancellation when your balance reaches 78% of the original value.</p>
            <p><strong className="text-foreground">Make extra principal payments:</strong> Even $100/month extra can shave months off your PMI timeline.</p>
            <p><strong className="text-foreground">Get a new appraisal:</strong> If your home has appreciated significantly, a new appraisal may show LTV below 80%, allowing early removal.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
