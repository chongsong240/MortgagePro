import { useState } from 'react';
import { Play, Youtube } from 'lucide-react';
import { embedUrl, watchUrl, type YouTubeVideo } from '@/src/data/youtube';

interface YouTubeEmbedProps {
  video: YouTubeVideo;
  caption?: string;
  className?: string;
}

/**
 * Click-to-load YouTube facade.
 *
 * Why not a plain <iframe>: the standard player writes YouTube cookies the
 * moment it mounts, which would contradict the Consent Mode v2 defaults
 * promised in section 5 of /privacy, and a third-party player is the heaviest
 * asset on an otherwise text-only article (LCP + CLS). This ships one lazy
 * thumbnail in the prerendered HTML; youtube-nocookie.com is only iframed
 * after an explicit click, and autoplay then needs no extra gesture.
 *
 * The caption is a real <figcaption>, so the video's title is crawlable text
 * even though the player itself is not rendered until interaction.
 */
export default function YouTubeEmbed({ video, caption, className = '' }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={`not-prose m-0 ${className}`}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`${embedUrl(video)}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40"
            />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        {caption && <span>{caption}</span>}
        <a
          href={watchUrl(video)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
        >
          <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
