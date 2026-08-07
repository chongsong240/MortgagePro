import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { findRouteMeta, SITE_URL } from '@/src/data/route-meta';

/**
 * Global SEO manager for non-calculator routes.
 * Calculator pages inject their own <Helmet> via CalculatorPageLayout,
 * so this component renders nothing for those paths (findRouteMeta returns
 * undefined for calculator routes, which are intentionally omitted).
 */
export default function RouteMetaManager() {
  const location = useLocation();
  const meta = findRouteMeta(location.pathname);

  if (!meta) return null;

  const canonical =
    location.pathname === '/'
      ? `${SITE_URL}/`
      : `${SITE_URL}${location.pathname}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
}
