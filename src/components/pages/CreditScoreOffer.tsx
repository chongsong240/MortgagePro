import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SMARTCREDIT } from '@/src/data/affiliate-offers';

/**
 * High-intent affiliate CTA for the SmartCredit offer (our only affiliate link,
 * defined in src/data/affiliate-offers.ts).
 *
 * Placement: CalculatorPageLayout renders this immediately below the calculator
 * itself — i.e. right after a visitor has just seen their monthly payment and is
 * asking "will I even qualify for that rate?". Enable it per page with
 * `creditScoreOffer: true` on that page's PageConfig.
 *
 * The card carries its own FTC disclosure (with a link to /disclaimer) because
 * calculator pages do not render the blog-wide AffiliateDisclosure banner.
 */
export default function CreditScoreOffer() {
  return (
    <div className="bg-gradient-to-br from-primary/5 via-primary/[0.02] to-background border-2 border-primary/20 rounded-xl p-6 sm:p-8 text-center">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        <ShieldCheck className="h-4 w-4 text-primary" />
        Your next step
      </span>
      <h2 className="text-xl font-bold tracking-tight mb-2">{SMARTCREDIT.headline}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-5">
        {SMARTCREDIT.body}
      </p>
      <a
        href={SMARTCREDIT.url}
        target="_blank"
        rel={SMARTCREDIT.rel}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        {SMARTCREDIT.ctaLabel}
        <ArrowUpRight className="h-4 w-4" />
      </a>
      <p className="text-xs text-muted-foreground leading-relaxed mt-4 max-w-xl mx-auto">
        {SMARTCREDIT.terms}{' '}
        <Link to="/disclaimer" className="text-primary underline hover:opacity-80">
          Affiliate disclosure
        </Link>
      </p>
    </div>
  );
}
