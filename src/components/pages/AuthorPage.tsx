import { Link } from 'react-router-dom';
import { Mail, BookOpen, ClipboardCheck, FileText, ShieldCheck } from 'lucide-react';

/**
 * Author page (/author).
 *
 * Why this page exists: the blog cluster has emitted a schema.org Person
 * ("Chong Song") for months, but nothing on the site visibly said who wrote the
 * articles — the structured data had no human counterpart. AdSense reviews and
 * Google's quality raters both look for a named, reachable author behind YMYL
 * money content, so the byline component (<ArticleByline />) now links here.
 *
 * Deliberately no headshot: a portrait is optional for Person markup, and a
 * missing photo is honest while there is no licensed one.
 */

const PAGE_URL = 'https://www.mortgagepro.io/author';
const LAST_UPDATED = 'September 17, 2026';

const SOURCES: { name: string; url: string; note: string }[] = [
  {
    name: 'Consumer Financial Protection Bureau (CFPB)',
    url: 'https://www.consumerfinance.gov/',
    note: 'Mortgage guides, Loan Estimate and Closing Disclosure rules, and the payment math we cross-check against.',
  },
  {
    name: 'HUD Handbook 4000.1 (FHA Single Family Housing Policy Handbook)',
    url: 'https://www.hud.gov/',
    note: 'Annual and upfront FHA mortgage insurance premium factors, and the rules for removing MIP.',
  },
  {
    name: 'FHFA conforming loan limits',
    url: 'https://www.fhfa.gov/',
    note: 'Baseline and high-cost-area loan limits that decide conventional vs. jumbo pricing.',
  },
  {
    name: 'IRS Publication 936 (Home Mortgage Interest Deduction)',
    url: 'https://www.irs.gov/',
    note: 'Which interest and points are deductible, and the mortgage-debt limits.',
  },
  {
    name: 'Zillow Research (Home Values) and Tax Foundation',
    url: 'https://www.zillow.com/research/data/',
    note: 'Statewide median sale prices for all homes (Zillow Research, July 2026 vintage) and the 2024 state effective property tax rates behind every generated payment page.',
  },
  {
    name: 'NAIC Homeowners Insurance Report (data via Triple-I)',
    url: 'https://www.iii.org/fact-statistic/facts-statistics-homeowners-and-renters-insurance',
    note: 'Statewide average HO-3 homeowners insurance premiums for the 2022 data year — the most recent national release — applied as a flat monthly cost on state pages.',
  },
  {
    name: 'Federal Reserve and Freddie Mac survey data',
    url: 'https://www.federalreserve.gov/',
    note: 'Rate and appreciation assumptions behind the rent vs. buy and FIRE models.',
  },
];

const PROFILE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Chong Song — MortgagePro Author',
      mainEntity: { '@id': `${PAGE_URL}#person` },
    },
    {
      '@type': 'Person',
      '@id': `${PAGE_URL}#person`,
      name: 'Chong Song',
      url: PAGE_URL,
      email: 'hello@mortgagepro.io',
      jobTitle: 'Founder and Editor, MortgagePro',
      description:
        'Software engineer and mortgage researcher who builds free first-time-buyer calculators and writes the mortgage guides on MortgagePro.io.',
      knowsAbout: [
        'Mortgage payments and PITI math',
        'Private mortgage insurance (PMI)',
        'FHA mortgage insurance premiums (MIP)',
        'Closing costs and cash-to-close',
        'Amortization and prepayment strategies',
        'First-time homebuyer programs',
      ],
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.mortgagepro.io/#organization',
        name: 'MortgagePro',
        url: 'https://www.mortgagepro.io',
      },
    },
  ],
};

export default function AuthorPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <script
        type="application/ld+json"
        data-author-schema="1"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PROFILE_SCHEMA).replace(/</g, '\\u003c'),
        }}
      />

      <h1 className="text-4xl font-bold tracking-tight mb-4">Chong Song</h1>
      <p className="text-xl text-muted-foreground leading-relaxed mb-2">
        I research mortgage costs and build calculators for first-time buyers.
      </p>
      <p className="text-sm text-muted-foreground mb-10">
        <strong>Last updated:</strong> {LAST_UPDATED}
      </p>

      <div className="text-muted-foreground space-y-6 leading-relaxed">
        <p>
          I built MortgagePro.io because I went through the home-buying process myself and found that most
          mortgage calculators were either too generic or too confusing. A number came out, but nothing explained
          where it came from — which fees were real, which were guesses, and which ones disappear as soon as the
          lender sends a Loan Estimate.
        </p>
        <p>
          I've spent the past several years researching mortgage products, PMI rules, closing costs, and
          first-time buyer programs — first for my own purchase, and then systematically across different states
          and loan types.
        </p>
        <p>
          My goal is simple: give first-time buyers a clear, no-nonsense way to understand what they'll actually
          pay.
        </p>
        <p>
          I'm not a licensed loan officer or financial advisor. What I offer is careful research, transparent
          methodology, and a tool that I wish I had when I started.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">What I Work From</h2>
        <p>
          Every number on this site is derived from published, verifiable sources rather than lender marketing
          material. These are the references I return to most often:
        </p>
        <div className="grid grid-cols-1 gap-3">
          {SOURCES.map((s) => (
            <div key={s.name} className="bg-card border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-1">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {s.name}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">How the Content Is Built</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Methodology first.</strong> The formulas, rounding, and default assumptions behind every tool
            are documented on the{' '}
            <Link to="/calculator-methodology" className="text-primary hover:underline">
              calculator methodology
            </Link>{' '}
            page before an article quotes a number.
          </li>
          <li>
            <strong>Cross-verification.</strong> Figures are checked against at least two independent sources
            (for example, a CFPB guideline plus the underlying FHA or IRS publication) before publication.
          </li>
          <li>
            <strong>Re-review.</strong> Rate, loan-limit, and insurance-factor pages are revisited when new data
            is published, and each article carries its own "last updated" line so you can see how current it is.
          </li>
          <li>
            <strong>Corrections.</strong> If something is wrong, email me and it gets fixed and credited. No
            corrections have been requested to date.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-8">What This Site Is Not</h2>
        <p>
          MortgagePro is an independent, ad-supported educational resource. We don't sell leads, we don't accept
          payment to feature a lender, and the calculators run entirely in your browser — the figures you type in
          are never transmitted or stored. Nothing here is financial, legal, or tax advice; please read the full{' '}
          <Link to="/disclaimer" className="text-primary hover:underline">
            disclaimer
          </Link>{' '}
          and{' '}
          <Link to="/editorial-policy" className="text-primary hover:underline">
            editorial policy
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Contact</h2>
        <p>I read every email — questions, data corrections, and tool requests are all welcome.</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:hello@mortgagepro.io"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@mortgagepro.io
          </a>
          <Link
            to="/calculator-methodology"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            <FileText className="w-4 h-4 text-primary" />
            Calculator methodology
          </Link>
          <Link
            to="/editorial-policy"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            <ClipboardCheck className="w-4 h-4 text-primary" />
            Editorial policy
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            Contact page
          </Link>
        </div>

        <p className="text-sm pt-4">
          <BookOpen className="w-4 h-4 inline-block mr-1 text-primary" />
          New to the site? Start with the{' '}
          <Link to="/blog/what-is-pmi" className="text-primary hover:underline">
            PMI guide
          </Link>{' '}
          or run your numbers in the{' '}
          <Link to="/mortgage-calculator" className="text-primary hover:underline">
            mortgage calculator
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
