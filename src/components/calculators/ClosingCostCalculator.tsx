import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Percent } from 'lucide-react';
import stateDataRaw from '@/src/data/state_data.json';

const stateData = stateDataRaw as Record<string, {
  name: string; median_home_price: number;
  property_tax_rate: number; closing_cost_pct: number; avg_annual_insurance: number;
}>;

const fmt = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

interface CostItem { label: string; amount: number; note: string; }

export default function ClosingCostCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [selectedState, setSelectedState] = useState('National');
  const [originationPct, setOriginationPct] = useState(1.0);
  const [sellerConcessions, setSellerConcessions] = useState(0);

  const result = useMemo(() => {
    const loanAmount = homePrice * (1 - downPct / 100);
    const statePct = selectedState !== 'National' && stateData[selectedState]
      ? stateData[selectedState].closing_cost_pct
      : 0.025;

    const origination = loanAmount * (originationPct / 100);
    const appraisal = 550;
    const titleSearch = 300;
    const titleInsurance = homePrice * 0.005;
    const escrowFee = 800;
    const recordingFee = 125;
    const prepaidInterest = (loanAmount * 0.065 / 365) * 15; // 15 days prepaid
    const prepaidInsurance = 1500;
    const prepaidTax = homePrice * 0.012 / 12 * 3; // 3 months escrow
    const transferTax = homePrice * (statePct * 0.4); // ~40% of closing costs are transfer taxes
    const inspectionFee = 450;

    const items: CostItem[] = [
      { label: 'Loan Origination Fee', amount: origination, note: `${originationPct}% of loan amount` },
      { label: 'Appraisal Fee', amount: appraisal, note: 'Required by lender' },
      { label: 'Title Search', amount: titleSearch, note: 'Verifies ownership history' },
      { label: 'Title Insurance', amount: titleInsurance, note: '~0.5% of home price' },
      { label: 'Escrow / Settlement Fee', amount: escrowFee, note: 'Closing agent fee' },
      { label: 'Recording Fee', amount: recordingFee, note: 'County recording' },
      { label: 'Prepaid Interest', amount: prepaidInterest, note: '~15 days at close' },
      { label: 'Prepaid Homeowners Insurance', amount: prepaidInsurance, note: '1 year upfront' },
      { label: 'Property Tax Escrow', amount: prepaidTax, note: '3 months reserve' },
      { label: 'Transfer / State Tax', amount: transferTax, note: 'Varies by state' },
      { label: 'Home Inspection', amount: inspectionFee, note: 'Paid before closing' },
    ];

    const totalClosing = items.reduce((s, i) => s + i.amount, 0);
    const netClosing = Math.max(0, totalClosing - sellerConcessions);
    const cashNeeded = homePrice * (downPct / 100) + netClosing;

    return { items, totalClosing, netClosing, cashNeeded, loanAmount };
  }, [homePrice, downPct, selectedState, originationPct, sellerConcessions]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Purchase Details</CardTitle>
            <CardDescription>Enter your home purchase information.</CardDescription>
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

            <div className="flex justify-between items-center">
              <Label>State</Label>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="National">National Average</SelectItem>
                  {Object.entries(stateData).map(([code, d]) => (
                    <SelectItem key={code} value={code}>{d.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Origination Fee</Label>
                <div className="relative w-28">
                  <Input type="number" value={originationPct} step={0.1} onChange={(e) => setOriginationPct(Number(e.target.value))} className="pr-6 text-right" />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider value={[originationPct]} min={0} max={3} step={0.1} onValueChange={(v) => setOriginationPct(v[0])} />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Seller Concessions</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="number" value={sellerConcessions} step={500} onChange={(e) => setSellerConcessions(Number(e.target.value))} className="pl-8" />
                </div>
              </div>
              <Slider value={[sellerConcessions]} min={0} max={20000} step={500} onValueChange={(v) => setSellerConcessions(v[0])} />
              <p className="text-xs text-muted-foreground">Amount seller agrees to pay toward your closing costs.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-6">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-primary-foreground/80">Total Cash Needed at Closing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-5xl font-bold tracking-tight text-white">{fmt(result.cashNeeded)}</div>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <span>Down Payment ({downPct}%)</span>
                <span className="font-semibold">{fmt(homePrice * downPct / 100)}</span>
              </div>
              <div className="flex justify-between">
                <span>Closing Costs</span>
                <span className="font-semibold">{fmt(result.totalClosing)}</span>
              </div>
              {sellerConcessions > 0 && (
                <div className="flex justify-between text-green-300">
                  <span>Seller Concessions</span>
                  <span className="font-semibold">-{fmt(sellerConcessions)}</span>
                </div>
              )}
              <div className="flex justify-between border-t border-white/20 pt-2 font-bold">
                <span>Net Closing Costs</span>
                <span>{fmt(result.netClosing)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Closing Cost Breakdown</CardTitle>
            <CardDescription>Estimated itemized costs for your purchase.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {result.items.map((item, i) => (
                <div key={i} className="flex justify-between items-start py-2 border-b last:border-0">
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.note}</div>
                  </div>
                  <div className="text-sm font-semibold ml-4 shrink-0">{fmt(item.amount)}</div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3 font-bold text-primary">
                <span>Total Closing Costs</span>
                <span>{fmt(result.totalClosing)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
