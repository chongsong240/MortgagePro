import { useEffect } from 'react';

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
 * Injects schema.org structured data about specific monetary amounts
 * and US states referenced in an article. This helps Google understand
 * the dollar values and geographic focus of the content.
 *
 * Usage: place <AmountStateSchema amounts={[...]} states={[...]} />
 * alongside BlogSchema at the top of each blog article.
 */
export default function AmountStateSchema({ amounts, states }: AmountStateSchemaProps) {
  useEffect(() => {
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

    if (nodes.length === 0) return;

    const containerId = 'amount-state-schema';
    const existing = document.getElementById(containerId);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = containerId;
    script.textContent = JSON.stringify(
      nodes.length === 1 ? nodes[0] : { '@graph': nodes }
    );
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(containerId);
      if (el) el.remove();
    };
  }, [amounts, states]);

  return null;
}
