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
  /**
   * Upload day in ISO 8601 (YYYY-MM-DD). Date only, no invented time: this is
   * all YouTube reports on the public watch page, and VideoObject accepts a
   * date without a clock time. Optional because the VideoObject markup is only
   * emitted when both this and `duration` are known — a guess here would be
   * fabricated SEO data, which is worse than missing markup.
   */
  uploadDate?: string;
  /** ISO 8601 duration, e.g. PT59S for 0:59 and PT1M20S for 1:20. */
  duration?: string;
  /** One or two sentences for the VideoObject description. Must stay factually
   *  true of the video itself, not a copy of the article's meta description. */
  description: string;
}

export const YOUTUBE_VIDEOS: Record<'whatIsPmi' | 'closingCosts' | 'fhaVsConventional', YouTubeVideo> = {
  whatIsPmi: {
    id: 'H0cn9ru0yWo',
    title: 'What is PMI? Do All First Time Buyers Need To Pay?',
    thumbnail: 'https://i.ytimg.com/vi/H0cn9ru0yWo/hqdefault.jpg',
    uploadDate: '2026-10-16',
    duration: 'PT59S',
    description:
      'Private mortgage insurance costs roughly 0.5% to 1.5% of the loan amount a year, protects the lender rather than the borrower, and is required below a 20% down payment. A 59-second explainer of who pays PMI and when it can be removed.',
  },
  closingCosts: {
    id: 'gc3neZosbD0',
    title: 'Closing Costs Explained For First Time Home Buyers',
    thumbnail: 'https://i.ytimg.com/vi/gc3neZosbD0/hqdefault.jpg',
    uploadDate: '2026-10-23',
    duration: 'PT1M20S',
    description:
      'Closing costs typically run 2% to 5% of the purchase price, or $8,000 to $20,000 on a $400,000 home. A short walkthrough of the fees first-time buyers actually pay, from origination and title to prepaid taxes and insurance.',
  },
  fhaVsConventional: {
    id: 'SMbCBn91Nj8',
    title: 'FHA vs Conventional Loan: Which Is Better for First Time Buyers?',
    thumbnail: 'https://i.ytimg.com/vi/SMbCBn91Nj8/hqdefault.jpg',
    // No uploadDate/duration yet: the video is embedded, but VideoObject stays
    // off until the real values are supplied rather than guessed.
    description:
      'FHA loans allow a 3.5% down payment and credit scores from 580, but their mortgage insurance premium usually lasts the life of the loan. Conventional loans need stronger credit yet let PMI be cancelled at 20% equity. A short comparison of which loan costs less over time.',
  },
};

export function watchUrl(video: YouTubeVideo): string {
  return `https://www.youtube.com/watch?v=${video.id}`;
}

/**
 * Privacy-enhanced embed origin. No iframe is rendered until a visitor clicks,
 * so this URL shows up in the prerendered HTML only inside the VideoObject
 * markup (Google needs a playable location) — never as a live player.
 */
export function embedUrl(video: YouTubeVideo): string {
  return `https://www.youtube-nocookie.com/embed/${video.id}`;
}
