import { useState, useEffect, useMemo, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import stateDataRaw from '@/src/data/state_data.json';
import { calculateMortgage, MortgageInputs } from '@/src/lib/mortgage';
import { Building2, DollarSign, Percent, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Cast the raw imported JSON so TypeScript knows its shape
const stateData = stateDataRaw as Record<string, { name: string, property_tax_rate: number, closing_cost_pct: number, avg_insurance: number }>;

const COLORS = ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

export default function Calculator() {
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

  const [selectedState, setSelectedState] = useState<string>('National');
  const [flash, setFlash] = useState(false);
  const [flashDirection, setFlashDirection] = useState<'up' | 'down'>('down');
  const [showAmortizationTable, setShowAmortizationTable] = useState(false);
  const [stateDetecting, setStateDetecting] = useState<boolean>(true);

  // Auto-detect state from IP on first load
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
      .catch(() => {
        // Silent fail - just stay on National Average
      })
      .finally(() => {
        if (!cancelled) setStateDetecting(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Sync down payment % and amount
  const handleHomePriceChange = (val: number) => {
    setInputs(prev => ({
      ...prev,
      homePrice: val,
      downPaymentAmount: val * (prev.downPaymentPercent / 100)
    }));
  };

  const handleDownPercentChange = (val: number) => {
    setInputs(prev => ({
      ...prev,
      downPaymentPercent: val,
      downPaymentAmount: prev.homePrice * (val / 100)
    }));
  };

  const handleDownAmountChange = (val: number) => {
    setInputs(prev => ({
      ...prev,
      downPaymentAmount: val,
      downPaymentPercent: (val / prev.homePrice) * 100
    }));
  };

  const handleStateChange = (val: string) => {
    setSelectedState(val);
    if (val !== 'National' && stateData[val]) {
      const s = stateData[val];
      setInputs(prev => ({
        ...prev,
        propertyTaxRate: s.property_tax_rate * 100, // JSON has 0.012 -> 1.2%
        homeInsurance: s.avg_insurance
      }));
    }
  };

  const results = useMemo(() => calculateMortgage(inputs), [inputs]);

  // Flash animation on result change with direction detection
  const prevPayment = useRef(results.totalMonthlyPayment);
  useEffect(() => {
    const diff = results.totalMonthlyPayment - prevPayment.current;
    if (diff > 0) {
      setFlashDirection('up');
    } else if (diff < 0) {
      setFlashDirection('down');
    }
    prevPayment.current = results.totalMonthlyPayment;
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 300);
    return () => clearTimeout(timer);
  }, [results.totalMonthlyPayment]);

  const pieData = [
    { name: 'Principal & Interest', value: results.monthlyPrincipalAndInterest },
    { name: 'Property Tax', value: results.monthlyPropertyTax },
    { name: 'Home Insurance', value: results.monthlyHomeInsurance },
    ...(results.monthlyHoaFees > 0 ? [{ name: 'HOA Fees', value: results.monthlyHoaFees }] : []),
    ...(results.monthlyPmi > 0 ? [{ name: 'PMI', value: results.monthlyPmi }] : []),
  ];

  const areaData = results.annualAmortization.map(row => ({
    year: row.year.toString(),
    'Principal Paid': row.totalPrincipalGiven,
    'Interest Paid': row.totalInterestGiven,
    'Remaining Balance': row.remainingBalance
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 mt-8">
      {/* LEFT: Inputs */}
      <div className="flex flex-col gap-6">
        
        <Card>
          <CardHeader>
            <CardTitle>Home Details</CardTitle>
            <CardDescription>Enter the specifics of the home you want to buy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="homePrice" className="text-sm font-medium">Home Price</Label>
                <div className="relative w-32">
                  <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="homePrice" 
                    type="number" 
                    value={inputs.homePrice} 
                    onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                    className="pl-8"
                  />
                </div>
              </div>
              <Slider 
                value={[inputs.homePrice]} 
                min={50000} 
                max={2000000} 
                step={10000}
                onValueChange={(vals) => handleHomePriceChange(vals[0])}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm font-medium">Down Payment</Label>
                <div className="flex gap-2 w-48">
                  <div className="relative w-20">
                    <Input 
                      type="number" 
                      value={Math.round(inputs.downPaymentPercent * 10) / 10} 
                      onChange={(e) => handleDownPercentChange(Number(e.target.value))}
                      className="pr-6 text-right"
                    />
                    <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                  </div>
                  <div className="relative w-28">
                    <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="number" 
                      value={Math.round(inputs.downPaymentAmount)} 
                      onChange={(e) => handleDownAmountChange(Number(e.target.value))}
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>
              <Slider 
                value={[inputs.downPaymentPercent]} 
                min={0} 
                max={100} 
                step={1}
                onValueChange={(vals) => handleDownPercentChange(vals[0])}
              />
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="interestRate" className="text-sm font-medium">Interest Rate</Label>
                <div className="relative w-28">
                  <Input 
                    id="interestRate" 
                    type="number" 
                    value={inputs.interestRate} 
                    step={0.1}
                    onChange={(e) => setInputs({...inputs, interestRate: Number(e.target.value)})}
                    className="pr-8 text-right"
                  />
                  <Percent className="absolute right-2.5 top-2.5 h-3 w-3 text-muted-foreground" />
                </div>
              </div>
              <Slider 
                value={[inputs.interestRate]} 
                min={1} 
                max={15} 
                step={0.125}
                onValueChange={(vals) => setInputs({...inputs, interestRate: vals[0]})}
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
                    value={inputs.loanTermYears} 
                    min={1}
                    max={40}
                    onChange={(e) => setInputs({...inputs, loanTermYears: Math.min(40, Math.max(1, Number(e.target.value)))})}
                    className="pl-8"
                  />
                </div>
              </div>
              <Slider 
                value={[inputs.loanTermYears]} 
                min={1} 
                max={40} 
                step={1}
                onValueChange={(vals) => setInputs({...inputs, loanTermYears: vals[0]})}
              />
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxes, Insurance & Fees</CardTitle>
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
                  value={inputs.propertyTaxRate} 
                  step={0.1}
                  onChange={(e) => setInputs({...inputs, propertyTaxRate: Number(e.target.value)})}
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
                  value={inputs.homeInsurance} 
                  onChange={(e) => setInputs({...inputs, homeInsurance: Number(e.target.value)})}
                  className="pl-8"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Label htmlFor="hoaFees" className="text-sm font-medium">HOA Fees (/mo)</Label>
              <div className="relative w-28">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="hoaFees" 
                  type="number" 
                  value={inputs.hoaFees} 
                  onChange={(e) => setInputs({...inputs, hoaFees: Number(e.target.value)})}
                  className="pl-8"
                />
              </div>
            </div>

          </CardContent>
        </Card>

      </div>

      {/* RIGHT: Results */}
      <div className="flex flex-col gap-6">
        
        <Card className="bg-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Building2 className="w-48 h-48" />
          </div>
          <CardHeader>
            <CardTitle className="text-primary-foreground/80">Estimated Monthly Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={cn(
              "text-5xl font-bold tracking-tight transition-colors duration-300",
              flash && flashDirection === 'up' ? "text-red-300" : "",
              flash && flashDirection === 'down' ? "text-green-300" : "",
              !flash ? "text-white" : ""
            )}>
              {formatCurrency(results.totalMonthlyPayment)}
            </div>
            <div className="mt-6 flex flex-col gap-2 relative z-10">
              <div className="flex justify-between text-sm">
                <span>Principal & Interest</span>
                <span className="font-semibold">{formatCurrency(results.monthlyPrincipalAndInterest)}</span>
              </div>
              <div className="flex justify-between text-sm text-primary-foreground/80">
                <span>Property Tax</span>
                <span>{formatCurrency(results.monthlyPropertyTax)}</span>
              </div>
              <div className="flex justify-between text-sm text-primary-foreground/80">
                <span>Home Insurance</span>
                <span>{formatCurrency(results.monthlyHomeInsurance)}</span>
              </div>
              {results.monthlyHoaFees > 0 && (
                <div className="flex justify-between text-sm text-primary-foreground/80">
                  <span>HOA Fees</span>
                  <span>{formatCurrency(results.monthlyHoaFees)}</span>
                </div>
              )}
              {results.monthlyPmi > 0 && (
                <div className="flex justify-between text-sm text-destructive-foreground font-medium">
                  <span>PMI</span>
                  <span>{formatCurrency(results.monthlyPmi)}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Payment Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip formatter={(value: number) => formatCurrency(value)} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Loan Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Total Loan Amount</div>
                <div className="text-xl font-semibold">{formatCurrency(results.totalLoanAmount)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Total Interest Paid</div>
                <div className="text-xl font-semibold">{formatCurrency(results.totalInterestPaid)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Payoff Date</div>
                <div className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  {results.payoffDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Amortization Schedule</CardTitle>
                <CardDescription>Track your balance over {inputs.loanTermYears} years.</CardDescription>
              </div>
              <button
                onClick={() => setShowAmortizationTable(!showAmortizationTable)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {showAmortizationTable ? (
                  <>Hide Details <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>View Details <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={areaData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#60A5FA" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    tickLine={false} 
                    axisLine={false} 
                    tickMargin={10}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12, fill: '#6b7280' }}
                    width={50}
                  />
                  <RechartsTooltip formatter={(value: number) => formatCurrency(value)} />
                  <Area type="monotone" dataKey="Principal Paid" stackId="1" stroke="#1E3A8A" fill="url(#colorPrincipal)" />
                  <Area type="monotone" dataKey="Interest Paid" stackId="1" stroke="#60A5FA" fill="url(#colorInterest)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Expandable Amortization Table */}
            {showAmortizationTable && (
              <div className="mt-6 border rounded-lg overflow-hidden">
                <div className="max-h-80 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 sticky top-0">
                      <tr>
                        <th className="text-left py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Year</th>
                        <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Principal Paid</th>
                        <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Interest Paid</th>
                        <th className="text-right py-2.5 px-3 font-medium text-muted-foreground text-xs uppercase tracking-wider">Remaining Balance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {results.annualAmortization.map((row) => (
                        <tr key={row.year} className="hover:bg-muted/30 transition-colors">
                          <td className="py-2.5 px-3 font-medium">{row.year}</td>
                          <td className="text-right py-2.5 px-3">{formatCurrency(row.principal)}</td>
                          <td className="text-right py-2.5 px-3">{formatCurrency(row.interest)}</td>
                          <td className="text-right py-2.5 px-3 font-medium">{formatCurrency(row.remainingBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
