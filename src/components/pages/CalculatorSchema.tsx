import { useEffect } from 'react';

interface CalculatorSchemaProps {
  name: string;
  description: string;
  applicationCategory?: string;
  url: string;
}

/**
 * Injects SoftwareApplication schema.org JSON-LD into <head>
 * for each calculator page. This helps Google understand that
 * the page contains a functional web application (not just an article),
 * which can enable rich results and improved indexing.
 *
 * Usage: place <CalculatorSchema ... /> inside each calculator page component.
 */
export default function CalculatorSchema({
  name,
  description,
  applicationCategory = 'FinanceApplication',
  url,
}: CalculatorSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name,
      description,
      applicationCategory,
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url,
      browserRequirements: 'Requires JavaScript',
    };

    const id = 'calc-schema';
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [name, description, applicationCategory, url]);

  return null;
}
