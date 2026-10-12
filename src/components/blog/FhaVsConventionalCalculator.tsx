/**
 * FHA vs conventional loan calculator — the tool half of the FHA-vs-conventional
 * page.
 *
 * WHY THIS EXISTS
 * ---------------
 * GSC has this page ranking for "fha vs conventional calculator" (66 impressions,
 * avg position 30.8) and "fha vs conventional loan calculator" (84 impressions,
 * 40.0): ~150 impressions of *calculator* intent landing on a page that was a
 * pure guide. This is that calculator.
 *
 * Every number mirrors what the rest of the site already publishes, so the page
 * cannot contradict itself:
 *   - FHA upfront MIP 1.75% of the base loan, financed — as stated in
 *     PmiDeepContent, the PMI calculator FAQ, and MortgageCalculatorDeepContent,
 *   - FHA annual MIP 0.55% above 95% LTV, 0.50% at or below (same sources),
 *     lasting the life of the loan below 10% down and 11 years at 10% or more,
 *   - conventional PMI inside the 0.5%–1.5% range published by the PMI
 *     calculator and /blog/what-is-pmi, cancelable at 80% LTV,
 *   - P&I comes from the shared calculateMortgage() used by every calculator,
 *     so the widget cannot drift from the rest of the site.
 *
 * Nothing here is a quote. The copy says so and links to /calculator-methodology.
 */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { calculateMortgage } from '@/src/lib/mortgage';
import { AlertTriangle, Calculator } from 'lucide-react';

const money = (v: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);

/** Typical annual PMI by credit band, held inside the 0.5%–1.5% range we publish. */
const PMI_BY_SCORE: { value: string; label: string; rate: number }[] = [
  { value: '760', label: '760 or higher', rate: 0.5 },
  { value: '720', label: '700 – 759', rate: 0.6 },
  { value: '680', label: '660 – 699', rate: 0.75 },
  { value: '640', label: '620 – 659', rate: 1.0 },
  { value: '600', label: '580 – 619', rate: 1.3 },
];

/** More equity means a lower PMI rate; a thinner down payment means a higher one. */
const ltvAdjustment = (downPct: number) => (downPct < 10 ? 0.15 : downPct >= 15 ? -0.15 : 0);

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export default function FhaVsConventionalCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(3.5);
  const [score, setScore] = useState('720');
  const [rate, setRate] = useState(6.5);

  const r = useMemo(() => {
    const downAmount = homePrice * (downPct / 100);
    const baseLoan = homePrice - downAmount;
    const scoreBand = PMI_BY_SCORE.find((b) => b.value === score) ?? PMI_BY_SCORE[1];

    /**
     * P&I for a given loan size, through the site's own calculator. Upfront MIP
     * is financed, so the FHA side runs on a bigger loan than the conventional
     * side — that is one of the two reasons the P&I figures differ.
     */
    const piOn = (loan: number) =>
      calculateMortgage({
        homePrice: downAmount + loan,
        downPaymentPercent: downPct,
        downPaymentAmount: downAmount,
        interestRate: rate,
        loanTermYears: 30,
        propertyTaxRate: 0,
        homeInsurance: 0,
        hoaFees: 0,
        pmiRate: 0,
      });

    /* ---------- FHA ---------- */
    const upfrontMip = baseLoan * 0.0175;
    const fhaLoan = baseLoan + upfrontMip;
    const fhaAnnualMipRate = downPct < 5 ? 0.55 : 0.5;
    const fhaMipMonthly = (fhaLoan * (fhaAnnualMipRate / 100)) / 12;
    const fhaPi = piOn(fhaLoan).monthlyPrincipalAndInterest;

    /* ---------- Conventional ---------- */
    const convPmiRate = downPct >= 20 ? 0 : clamp(scoreBand.rate + ltvAdjustment(downPct), 0.5, 1.5);
    const convPmiMonthly = (baseLoan * (convPmiRate / 100)) / 12;
    const convCalc = piOn(baseLoan);
    const convSchedule = convCalc.amortizationSchedule;
    const pmiEndMonth = convPmiRate === 0
      ? 0
      : convSchedule.find((row) => row.remainingBalance <= homePrice * 0.8)?.month ?? 999;
    const convPi = convCalc.monthlyPrincipalAndInterest;

    /* ---------- the ten-year mortgage-insurance bill ---------- */
    const fhaMiTenYear = upfrontMip + fhaMipMonthly * 120; // below 10% down MIP never stops, so all 120 months count
    const convMiTenYear = convPmiMonthly * Math.min(120, pmiEndMonth);

    return {
      baseLoan, upfrontMip, fhaLoan, fhaAnnualMipRate, fhaMipMonthly, fhaPi,
      convPmiRate, convPmiMonthly, convPi, pmiEndMonth, fhaMiTenYear, convMiTenYear,
      cheaper: fhaMiTenYear < convMiTenYear ? 'fha' as const : 'conventional' as const,
      gap: Math.abs(fhaMiTenYear - convMiTenYear),
      pmiEndsInYears: pmiEndMonth === 999 || pmiEndMonth === 0 ? null : Math.ceil(pmiEndMonth / 12),
    };
  }, [homePrice, downPct, score, rate]);

  return (
    <section id="fha-calculator" className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-primary" />
        FHA vs Conventional Loan Calculator
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Same house, same rate, same 30 years — the only thing that changes is how the mortgage insurance
        is charged. That is usually the whole difference between the two loans, so it is the number worth
        running before you pick one.
      </p>

      <div className="bg-card border border-border rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <Label className="text-xs">Home Price</Label>
            <Input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Down Payment (%)</Label>
            <Input type="number" step={0.5} value={downPct} onChange={(e) => setDownPct(Number(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Credit Score</Label>
            <Select value={score} onValueChange={setScore}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a band" />
              </SelectTrigger>
              <SelectContent>
                {PMI_BY_SCORE.map((b) => (
                  <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Rate (%)</Label>
            <Input type="number" step={0.125} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          Enter the rate you were quoted for each loan — FHA rates are often lower than conventional for
          weaker credit, and that spread changes the answer. Below 20% down, FHA's floor is 3.5%.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4">
            <div className="font-semibold text-foreground mb-3">FHA loan</div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Loan amount</dt>
                <dd className="font-medium text-foreground">{money(r.fhaLoan)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Upfront MIP (1.75%, financed)</dt>
                <dd className="font-medium text-foreground">{money(r.upfrontMip)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">P&amp;I</dt>
                <dd className="font-medium text-foreground">{money(r.fhaPi)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">MIP ({r.fhaAnnualMipRate}%/yr)</dt>
                <dd className="font-medium text-foreground">{money(r.fhaMipMonthly)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3 pt-2 border-t border-border">
                <dt className="font-medium text-foreground">P&amp;I + MIP</dt>
                <dd className="font-bold text-foreground">{money(r.fhaPi + r.fhaMipMonthly)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Insurance over 10 yrs</dt>
                <dd className="font-medium text-foreground">{money(r.fhaMiTenYear)}</dd>
              </div>
            </dl>
          </div>

          <div className="border border-border rounded-lg p-4">
            <div className="font-semibold text-foreground mb-3">Conventional loan</div>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Loan amount</dt>
                <dd className="font-medium text-foreground">{money(r.baseLoan)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">PMI rate for this band</dt>
                <dd className="font-medium text-foreground">{r.convPmiRate.toFixed(2)}%/yr</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">P&amp;I</dt>
                <dd className="font-medium text-foreground">{money(r.convPi)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">PMI</dt>
                <dd className="font-medium text-foreground">{money(r.convPmiMonthly)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3 pt-2 border-t border-border">
                <dt className="font-medium text-foreground">P&amp;I + PMI</dt>
                <dd className="font-bold text-foreground">{money(r.convPi + r.convPmiMonthly)}/mo</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Insurance over 10 yrs</dt>
                <dd className="font-medium text-foreground">{money(r.convMiTenYear)}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-foreground">
            Over the first ten years, mortgage insurance costs{' '}
            <strong>{money(r.gap)} more on the {r.cheaper === 'fha' ? 'conventional' : 'FHA'} side</strong>
            {r.cheaper === 'fha'
              ? ` — FHA wins the first ten years, and here is why that reverses: FHA MIP has no cancellation date at this down payment, while conventional PMI stops once the balance reaches 80% of the price${r.pmiEndsInYears ? ` (year ${r.pmiEndsInYears} at this rate)` : ''}. Keep the loan long enough and the conventional side comes out ahead, which is what the FAQ below means by "cheaper long-term".`
              : r.pmiEndsInYears
                ? ` — conventional wins once PMI stops in year ${r.pmiEndsInYears}, when the balance falls to 80% of ${money(homePrice)}.`
                : ' — conventional wins on mortgage insurance alone.'}
          </p>
          <p className="text-sm text-muted-foreground mt-3 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              {downPct < 10
                ? 'At this down payment the FHA premium runs for the life of the loan — the only ways out are refinancing into a conventional loan or paying the balance down far enough to move to a different product.'
                : 'With 10% or more down, FHA MIP ends after 11 years; below 10% down it lasts the life of the loan.'}{' '}
              Estimates built from our published assumptions, not a lender quote: no home appreciation is
              modeled, which makes conventional PMI look slower to cancel than it would in a rising market.
              See our{' '}
              <Link to="/calculator-methodology" className="text-primary hover:underline font-medium">
                calculator methodology
              </Link>
              .
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
