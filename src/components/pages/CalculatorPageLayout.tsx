import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '@/src/data/route-meta';


export interface FAQ {
  q: string;
  a: string;
}

export interface HowToStep {
  step: number;
  title: string;
  desc: string;
}

export interface ExampleRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface InternalLink {
  to: string;
  label: string;
}

export interface PageConfig {
  title: string;
  description: string;
  howToUse: {
    intro: string;
    steps: HowToStep[];
  };
  example: {
    title: string;
    scenario: string;
    rows: ExampleRow[];
    insight: string;
  };
  understandingResults?: {
    intro: string;
    items: { term: string; explanation: string }[];
  };
  commonMistakes?: {
    intro: string;
    items: { mistake: string; fix: string }[];
  };
  relatedContent?: {
    intro: string;
    links: InternalLink[];
  };
  faqs: FAQ[];
}

function UnderstandingResults({ config }: { config: PageConfig }) {
  if (!config.understandingResults) return null;
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Understanding Your Results</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">{config.understandingResults.intro}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {config.understandingResults.items.map((item, i) => (
          <div key={i} className="border border-border rounded-lg p-4">
            <span className="font-semibold text-foreground text-sm block mb-1">{item.term}</span>
            <span className="text-muted-foreground text-sm leading-relaxed">{item.explanation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommonMistakes({ config }: { config: PageConfig }) {
  if (!config.commonMistakes) return null;
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Common Mistakes to Avoid</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">{config.commonMistakes.intro}</p>
      <div className="space-y-4">
        {config.commonMistakes.items.map((item, i) => (
          <div key={i} className="border-l-4 border-red-400/60 pl-4">
            <p className="text-sm font-semibold text-foreground">❌ {item.mistake}</p>
            <p className="text-sm text-muted-foreground mt-1">✅ {item.fix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RelatedContent({ config }: { config: PageConfig }) {
  if (!config.relatedContent) return null;
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Related Tools & Guides</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">{config.relatedContent.intro}</p>
      <div className="flex flex-wrap gap-3">
        {config.relatedContent.links.map((link, i) => (
          <a
            key={i}
            href={link.to}
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default function CalculatorPageLayout({
  config,
  children,
}: {
  config: PageConfig;
  children: ReactNode;
}) {
  const location = useLocation();
  const canonical = `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname}`;

  return (
    <div className="space-y-8">
      {/* SEO: unique title + meta description + social tags for every calculator page */}
      <Helmet>
        <title>{config.title} | MortgagePro</title>
        <meta name="description" content={config.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${config.title} | MortgagePro`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={`${config.title} | MortgagePro`} />
        <meta name="twitter:description" content={config.description} />
      </Helmet>

      {/* H1 + description */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{config.title}</h1>
        <p className="text-muted-foreground text-lg">{config.description}</p>
      </div>


      {/* Calculator component */}
      {children}

      {/* How to Use */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">How to Use This Calculator</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{config.howToUse.intro}</p>
        <ol className="space-y-3">
          {config.howToUse.steps.map((s) => (
            <li key={s.step} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {s.step}
              </span>
              <div>
                <span className="font-semibold text-foreground">{s.title} — </span>
                <span className="text-muted-foreground text-sm">{s.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Example */}
      <div className="bg-muted/40 border border-border rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">{config.example.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{config.example.scenario}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {config.example.rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-border last:border-0 ${row.highlight ? 'bg-primary/5 font-semibold' : ''}`}
                >
                  <td className="py-2.5 pr-4 text-muted-foreground">{row.label}</td>
                  <td className={`py-2.5 text-right font-mono ${row.highlight ? 'text-primary text-base' : 'text-foreground'}`}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-4 italic">
          {config.example.insight}
        </p>
      </div>

      {/* Understanding Your Results */}
      <UnderstandingResults config={config} />

      {/* Common Mistakes */}
      <CommonMistakes config={config} />

      {/* Related Tools & Guides (internal links) */}
      <RelatedContent config={config} />

      {/* FAQ */}
      <div className="pt-4 border-t border-border">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {config.faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-card border border-border rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-foreground font-medium hover:bg-muted/50 transition-colors list-none">
                <span className="pr-4">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
