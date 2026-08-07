interface FAQ {
  q: string;
  a: string;
}

interface BlogSchemaProps {
  title: string;
  description: string;
  datePublished: string;       // ISO format: "2026-05-22"
  dateModified?: string;
  url: string;                 // full canonical URL
  faqs?: FAQ[];
}

/**
 * Renders Article + optional FAQPage schema.org JSON-LD as a STATIC
 * <script> tag in the page body. Because the tag is part of the server
 * rendered / prerendered HTML, crawlers (Googlebot, AdSense review) can
 * read the structured data without executing JavaScript.
 */
export default function BlogSchema({ title, description, datePublished, dateModified, url, faqs }: BlogSchemaProps) {
  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished,
      dateModified: dateModified ?? datePublished,
      url,
      author: {
        '@type': 'Person',
        name: 'Chong Song',
        url: 'https://www.mortgagepro.io/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'MortgagePro',
        url: 'https://www.mortgagepro.io',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    },
  ];

  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          data-blog-schema={i}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
