// ============================================================
// Affiliate offers — single source of truth.
//
// Every outbound affiliate link on the site is defined here so the URL, the
// `rel` attribute and the required disclosure copy cannot drift apart or get
// duplicated across components.
//
// Two affiliate programmes are live today.
//
// SmartCredit is a single CJ (CJ Affiliate / Commission Junction) click ID
// 101868701-16981737 — publisher 101868701, link 16981737. CJ serves that same
// click ID from several tracking hosts; `url` is the canonical one and
// `alternateUrls` records the other host the account issues for the identical
// offer.
//
// LawDepot has two *different* offers, so each one gets its own entry: the
// Real Estate Purchase Agreement (link 16995732) and the standalone Offer to
// Purchase Real Estate (link 16995632). They are not alternates of each other —
// they cover different stages of a transaction — so neither carries
// `alternateUrls`.
// ============================================================

export interface AffiliateOffer {
  /** Stable id — also handy as a label when debugging click-throughs. */
  id: string;
  /** Brand name shown to readers. */
  name: string;
  /** The affiliate tracking link. */
  url: string;
  /** Other hosts CJ issues for the same click ID (reference only). */
  alternateUrls?: string[];
  /** rel attribute for the anchor — affiliate links are marked sponsored. */
  rel: string;
  /** Headline for the CTA card. */
  headline: string;
  /** Context sentence(s) for the CTA card, written for the page's intent. */
  body: string;
  /** Button label. */
  ctaLabel: string;
  /** Fine print shown inside the CTA card (offer terms + disclosure). */
  terms: string;
}

/**
 * Google's guidance for monetised outbound links: mark them `sponsored`, and
 * never let them leak ranking signals, so `nofollow` too. `noopener noreferrer`
 * stays on every `target="_blank"` link on this site.
 */
export const AFFILIATE_LINK_REL = 'sponsored nofollow noopener noreferrer';

export const SMARTCREDIT: AffiliateOffer = {
  id: 'smartcredit',
  name: 'SmartCredit',
  url: 'https://www.tkqlhce.com/click-101868701-16981737',
  alternateUrls: ['https://www.dpbolvw.net/click-101868701-16981737'],
  rel: AFFILIATE_LINK_REL,
  // The rate gap below is the same one our Mortgage Calculator page already
  // states in "Common Mistakes to Avoid" (760 score ≈ 6.5%, 640 score ≈ 7.5%
  // or higher, ≈ $220/mo on a $400K loan) — keep the two in sync.
  headline: 'Know your score before you talk to a lender',
  body: 'Your credit score sets the rate you are quoted, and that rate sets your monthly payment for the next 30 years. Score tiers move in wide steps, so a five-minute check is worth real money before you apply.',
  ctaLabel: 'Check my credit score',
  terms:
    'Affiliate link: we may earn a commission if you sign up, at no extra cost to you. SmartCredit offers a paid trial that shows your score and the factors behind it; pricing and terms are set by the provider and can change, so confirm them on their site.',
};

/**
 * LawDepot — Real Estate Purchase Agreement (CJ link 16995732).
 * Primary offer for the home-purchase-contract article: the full contract,
 * generated state by state after the buyer answers a guided questionnaire.
 */
export const LAWDEPOT_PURCHASE_AGREEMENT: AffiliateOffer = {
  id: 'lawdepot-real-estate-purchase-agreement',
  name: 'LawDepot',
  url: 'https://www.tkqlhce.com/click-101868701-16995732',
  rel: AFFILIATE_LINK_REL,
  headline: 'Build a state-specific purchase agreement',
  body: 'Answer a guided questionnaire and generate a Real Estate Purchase Agreement for your state, with the price, deposit, contingencies, closing date and possession terms in one document.',
  ctaLabel: 'Create the purchase agreement',
  terms:
    'Affiliate link: we may earn a commission if you purchase, at no extra cost to you. LawDepot is a document-template service, not a law firm, and its documents are not legal advice; pricing and terms are set by LawDepot and can change, so confirm them on their site.',
};

/**
 * LawDepot — Offer to Purchase Real Estate (CJ link 16995632).
 * Secondary, earlier-stage offer: used when a buyer wants the initial offer,
 * deposit and deadlines in writing before a full contract exists.
 */
export const LAWDEPOT_OFFER_TO_PURCHASE: AffiliateOffer = {
  id: 'lawdepot-offer-to-purchase',
  name: 'LawDepot',
  url: 'https://www.dpbolvw.net/click-101868701-16995632',
  rel: AFFILIATE_LINK_REL,
  headline: 'Put your first offer in writing',
  body: 'Generate a state-specific Offer to Purchase Real Estate that records the property, price, deposit and deadlines before the full contract is drafted.',
  ctaLabel: 'Create the offer to purchase',
  terms:
    'Affiliate link: we may earn a commission if you purchase, at no extra cost to you. LawDepot is a document-template service, not a law firm, and its documents are not legal advice; pricing and terms are set by LawDepot and can change, so confirm them on their site.',
};
