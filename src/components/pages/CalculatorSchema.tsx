interface CalculatorSchemaProps {
  name: string;
  description: string;
  applicationCategory?: string;
  url: string;
}

/**
 * Renders SoftwareApplication schema.org JSON-LD as a STATIC <script> tag
 * in the page body. This helps Google understand the page contains a
 * functional web application, and (being static HTML) it is visible to
 * crawlers even without JavaScript.
 */
export default function CalculatorSchema({
  name,
  description,
  applicationCategory = 'FinanceApplication',
  url,
}: CalculatorSchemaProps) {
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

  return (
    <script
      type="application/ld+json"
      data-calc-schema
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
