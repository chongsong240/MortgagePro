interface AmountReference {
  label: string;
  value: number;
  currency?: string;
}

interface StateReference {
  code: string;
  name: string;
}

interface AmountStateSchemaProps {
  amounts?: AmountReference[];
  states?: StateReference[];
}

/**
 * Renders schema.org structured data about specific monetary amounts and
 * US states referenced in an article, as a STATIC <script> tag. Because the
 * tag is part of the prerendered HTML, crawlers can read it without JS.
 */
export default function AmountStateSchema({ amounts, states }: AmountStateSchemaProps) {
  const nodes: object[] = [];

  if (amounts && amounts.length > 0) {
    amounts.forEach((amt) => {
      nodes.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: amt.label,
        offers: {
          '@type': 'Offer',
          price: amt.value,
          priceCurrency: amt.currency ?? 'USD',
        },
      });
    });
  }

  if (states && states.length > 0) {
    states.forEach((st) => {
      nodes.push({
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: st.name,
        address: {
          '@type': 'PostalAddress',
          addressRegion: st.code,
          addressCountry: 'US',
        },
      });
    });
  }

  if (nodes.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      data-amount-state-schema
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(nodes.length === 1 ? nodes[0] : { '@graph': nodes }).replace(/</g, '\\u003c'),
      }}
    />
  );
}
