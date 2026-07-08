import { useEffect } from 'react';

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
 * Injects Article + optional FAQPage schema.org JSON-LD into <head>.
 * Usage: place <BlogSchema ... /> at the top of each blog article component.
 */
export default function BlogSchema({ title, description, datePublished, dateModified, url, faqs }: BlogSchemaProps) {
  useEffect(() => {
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

    const existing = document.querySelectorAll('script[data-blog-schema]');
    existing.forEach((el) => el.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-blog-schema', String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-blog-schema]').forEach((el) => el.remove());
    };
  }, [title, description, datePublished, dateModified, url, faqs]);

  return null;
}
