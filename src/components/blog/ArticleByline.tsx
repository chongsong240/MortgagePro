import { Link } from 'react-router-dom';
import { UserCheck } from 'lucide-react';

/**
 * Visible author byline rendered at the bottom of every blog article.
 *
 * Why it is mounted from inside <RelatedPosts />: all blog posts render that
 * component at the end of the article body, so there is exactly ONE insertion
 * point. That matters during the current SEO measurement window — editing 20
 * content files by hand would risk breaking the articles we are measuring.
 *
 * It mirrors the Person entity emitted by BlogSchema (whose `url` now points at
 * /author), so the structured data and the visible page finally agree — which is
 * what Google (and the AdSense "who runs this site" review) actually checks.
 */
export const ARTICLE_LAST_UPDATED = 'September 2026';
export const ARTICLE_LAST_UPDATED_ISO = '2026-09-17';

/** Sources cited across the blog cluster, shown next to the byline. */
export const DEFAULT_SOURCES =
  'CFPB, HUD, FHA, FHFA, IRS and Federal Reserve published data';

interface ArticleBylineProps {
  /** Override the cited sources for posts that lean on a narrower set. */
  sources?: string;
}

export default function ArticleByline({ sources }: ArticleBylineProps) {
  return (
    <div className="mt-10 pt-8 border-t border-border">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
          <UserCheck className="w-5 h-5 text-primary" />
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed">
          <p className="text-foreground">
            Written by{' '}
            <Link to="/author" className="text-primary font-medium hover:underline">
              Chong Song
            </Link>
            {' '}· Last updated:{' '}
            <time dateTime={ARTICLE_LAST_UPDATED_ISO}>{ARTICLE_LAST_UPDATED}</time>
          </p>
          <p className="mt-1">
            Data sources: {sources ?? DEFAULT_SOURCES}. See our{' '}
            <Link to="/calculator-methodology" className="text-primary hover:underline">
              calculator methodology
            </Link>{' '}
            and{' '}
            <Link to="/editorial-policy" className="text-primary hover:underline">
              editorial policy
            </Link>{' '}
            for how these figures are compiled, reviewed and corrected.
          </p>
        </div>
      </div>
    </div>
  );
}
