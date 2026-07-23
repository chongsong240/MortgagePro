import { Link } from 'react-router-dom';
import { CheckCircle, FileText, BookOpen, Shield, RefreshCw, Users, Search, ExternalLink } from 'lucide-react';

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Editorial Policy</h1>

      <div className="text-muted-foreground space-y-6 leading-relaxed">

        <p className="text-lg bg-card border border-border rounded-xl p-6">
          MortgagePro is committed to producing accurate, clear, and trustworthy content that helps
          first-time homebuyers and refinancers make informed financial decisions. This Editorial
          Policy explains how we create, review, and maintain our content.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Our Content Principles</h2>

        <div className="grid gap-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Accuracy First</h3>
                <p>Every article, guide, and calculator on MortgagePro is grounded in verifiable data and authoritative sources. We cross-reference financial information against primary sources such as the Consumer Financial Protection Bureau (CFPB), IRS guidelines, Federal Reserve data, and government housing agency publications before publication.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">First-Time Buyer Focus</h3>
                <p>Our content is specifically designed for first-time homebuyers who are navigating the US real estate market for the first time. We avoid industry jargon without explanation, break complex concepts into digestible steps, and prioritize practical, actionable information over theoretical advice.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Editorial Independence</h3>
                <p>MortgagePro operates independently. We do not accept payment from lenders, real estate agents, or financial institutions to feature specific products, rates, or recommendations. Our calculators are unbiased tools — they do not steer users toward particular lenders or loan products.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Transparent Sources</h3>
                <p>Wherever possible, we cite our sources and link to original data. When we present statistics — median home prices, property tax rates, insurance premiums, or interest rate trends — we disclose the source and date of the data so readers can verify the information themselves.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Regular Updates</h3>
                <p>Mortgage rates, housing market conditions, and financial regulations change over time. We review and update our content regularly to reflect current market conditions. Articles include publication dates so readers can assess the timeliness of the information.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Content Creation Process</h2>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">1</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Topic Selection</h3>
                <p>We identify topics based on real questions from first-time homebuyers, searches people actually make, and gaps we see in existing online resources. Priority is given to topics that have a direct financial impact on our readers — saving money, avoiding costly mistakes, and understanding the home-buying process.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">2</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Research & Drafting</h3>
                <p>Each article is researched using authoritative primary sources — CFPB guidelines, IRS publications, HUD resources, Federal Reserve data, and peer-reviewed financial research. Drafts are written with a focus on clarity, accuracy, and practical utility. We include specific numerical examples, real-world scenarios, and direct links to our calculators wherever applicable.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">3</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Fact-Checking & Review</h3>
                <p>Before publication, every article undergoes a rigorous fact-checking process. All numbers, calculations, and citations are verified against original sources. Claims about mortgage products, tax implications, and legal requirements are double-checked for accuracy.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">4</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Publication & Maintenance</h3>
                <p>Articles are published with clear dates. We monitor reader feedback and comments to identify potential errors or areas for improvement. Content is reviewed on a recurring basis and updated as market conditions or regulations change.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Corrections Policy</h2>
        <p>
          If we discover an error in any of our content — whether reported by a reader or identified
          through our own review — we correct it promptly. Corrections of significant errors are noted
          at the bottom of the affected article. If you believe you've found an error in our content,
          please{' '}
          <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link>
          {' '}with the details.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Affiliate & Advertising Disclosure</h2>
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <p className="text-sm text-amber-800 dark:text-amber-300">
            MortgagePro currently does not accept affiliate commissions or sponsored content. We may
            serve advertisements through Google AdSense to support the cost of operating this website
            and keeping all tools free for users. Ad selection is managed by Google and is not
            influenced by our editorial team. We clearly distinguish advertisements from editorial
            content at all times.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">External Sources We Rely On</h2>
        <p>Our content regularly references and cites the following authoritative sources:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { name: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/' },
            { name: 'Federal Housing Finance Agency', url: 'https://www.fhfa.gov/' },
            { name: 'U.S. Department of Housing and Urban Development', url: 'https://www.hud.gov/' },
            { name: 'Internal Revenue Service', url: 'https://www.irs.gov/' },
            { name: 'Federal Reserve', url: 'https://www.federalreserve.gov/' },
            { name: 'Zillow Research (Home Values)', url: 'https://www.zillow.com/research/' },
            { name: 'ATTOM Data Solutions (Property Taxes)', url: 'https://www.attomdata.com/' },
            { name: 'Freddie Mac (Mortgage Rates)', url: 'https://www.freddiemac.com/' },
          ].map((source, i) => (
            <a
              key={i}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors text-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span className="text-foreground hover:text-primary transition-colors">{source.name}</span>
            </a>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-foreground mt-8">Questions or Concerns</h2>
        <p>
          If you have questions about our editorial process or content accuracy, please{' '}
          <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link>.
          We take content quality seriously and appreciate reader feedback.
        </p>
      </div>
    </div>
  );
}
