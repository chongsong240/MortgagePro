/**
 * YouTube channel + video registry.
 *
 * Why this exists: the channel is the public, verifiable face behind the
 * "Chong Song" byline, so the same URLs feed the footer link, the author page
 * and the Organization `sameAs` list in index.html. Keeping one handle here
 * stops those copies from drifting — the @ casing is part of the canonical
 * channel URL and YouTube treats it as one handle regardless.
 *
 * Videos are deliberately NOT rendered sitewide. Only an article whose topic
 * matches a video mounts <YouTubeEmbed />, so the player stays contextual
 * (Google's video guidelines and plain user trust both punish padded embeds).
 */
export const YOUTUBE_CHANNEL_HANDLE = 'MortgageProIO';

/** Canonical channel URL. The ?si= share token is dropped on purpose. */
export const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/@${YOUTUBE_CHANNEL_HANDLE}`;

/**
 * `sub_confirmation=1` makes YouTube open the subscribe dialog for signed-in
 * viewers who arrive from the site — the only free conversion lift a plain
 * channel link can get.
 */
export const YOUTUBE_SUBSCRIBE_URL = `${YOUTUBE_CHANNEL_URL}?sub_confirmation=1`;

export interface YouTubeVideo {
  /** 11-character video id, used for the embed, the thumbnail and watch URLs. */
  id: string;
  title: string;
  /** hqdefault always exists (maxresdefault does not, for some uploads). */
  thumbnail: string;
}

export const YOUTUBE_VIDEOS: Record<'whatIsPmi' | 'closingCosts', YouTubeVideo> = {
  whatIsPmi: {
    id: 'H0cn9ru0yWo',
    title: 'What is PMI? Do All First Time Buyers Need To Pay?',
    thumbnail: 'https://i.ytimg.com/vi/H0cn9ru0yWo/hqdefault.jpg',
  },
  closingCosts: {
    id: 'gc3neZosbD0',
    title: 'Closing Costs Explained For First Time Home Buyers',
    thumbnail: 'https://i.ytimg.com/vi/gc3neZosbD0/hqdefault.jpg',
  },
};

export function watchUrl(video: YouTubeVideo): string {
  return `https://www.youtube.com/watch?v=${video.id}`;
}
