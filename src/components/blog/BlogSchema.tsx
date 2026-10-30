import { embedUrl, watchUrl, type YouTubeVideo } from '@/src/data/youtube';

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
  /**
   * Set this only when the article actually embeds the video. Google requires
   * the VideoObject to describe a video that is watchable on the page, so
   * passing it from any other article would be spam markup.
   */
  video?: YouTubeVideo;
}

/**
 * Date the whole blog cluster was last edited (internal-link graph, meta
 * titles and descriptions were reworked in one pass). Articles that don't
 * pass their own `dateModified` inherit it, so the Article schema carries a
 * real "modified" signal instead of echoing `datePublished` — which is what
 * makes Google recrawl and refresh the SERP snippet.
 */
const BLOG_LAST_MODIFIED = '2026-09-17';

/**
 * Renders Article + optional FAQPage schema.org JSON-LD as a STATIC
 * <script> tag in the page body. Because the tag is part of the server
 * rendered / prerendered HTML, crawlers (Googlebot, AdSense review) can
 * read the structured data without executing JavaScript.
 */
export default function BlogSchema({ title, description, datePublished, dateModified, url, faqs, video }: BlogSchemaProps) {
  /**
   * Google requires `uploadDate` on VideoObject, so the markup only goes out
   * once the registry entry carries a real upload date and duration. Otherwise
   * the article would publish an invalid video block (and an Article `video`
   * pointer to nothing).
   */
  const videoDates =
    video?.uploadDate && video.duration
      ? { uploadDate: video.uploadDate, duration: video.duration }
      : null;

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished,
      dateModified: dateModified ?? BLOG_LAST_MODIFIED,
      url,
      author: {
        '@type': 'Person',
        name: 'Chong Song',
        url: 'https://www.mortgagepro.io/author',
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
      // Cross-reference the VideoObject block pushed below. They are separate
      // <script> tags, so this @id is the only thing that tells Google the video
      // belongs to this article rather than floating on its own.
      ...(videoDates ? { video: { '@id': `${url}#video` } } : {}),
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

  if (video && videoDates) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': `${url}#video`,
      name: video.title,
      description: video.description,
      thumbnailUrl: [video.thumbnail],
      uploadDate: videoDates.uploadDate,
      duration: videoDates.duration,
      // embedUrl is the playable location Google accepts for a hosted player;
      // sameAs ties the record back to the YouTube watch page.
      embedUrl: embedUrl(video),
      sameAs: [watchUrl(video)],
      publisher: {
        '@type': 'Organization',
        name: 'MortgagePro',
        url: 'https://www.mortgagepro.io',
      },
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
