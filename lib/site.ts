// One place for the things that appear on every page and change rarely.

import { AUDIENCE_PAGES } from "@/lib/audiences";

export const SITE_URL = "https://thepersonalagent.ai";

export const SITE_NAME = "The Personal Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. The slug is `personal` - BUILD_SLUGS in apolloclaw2
 *  maps it to the `personal` agent type. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/personal";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

/**
 * The share card. One image for every page, and one constant so it cannot drift.
 *
 * It is the site's own hero rendered at 1200x630: the wordmark, the agent, the blueprint grid
 * and the glow, built from the same values as `.hero` in globals.css. Somebody who has seen a
 * link should recognise the page they land on.
 *
 * FILENAME CHANGED DELIBERATELY. This replaced a text-only card at /images/og-image.jpg, and
 * every scraper that had already seen a link to this site was holding that URL with the old
 * picture behind it. Facebook, LinkedIn and Slack cache by image URL and re-fetch on their own
 * schedule, so overwriting the file in place would have left the old card in circulation for
 * weeks. A new name means the first re-scrape of any page picks up the new one.
 */
export const OG_IMAGE = `${SITE_URL}/images/the-personal-agent-og.jpg`;
export const OG_IMAGE_ALT =
  "The Personal Agent: your inbox, your calendar, your day. Work and home.";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "david@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-executives" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/**
 * The audience pages, used by the nav and the footer.
 *
 * DERIVED, not declared. This was a second hand-written list of slugs and labels beside the real
 * one in lib/audiences.ts, and the two had to be edited together to stay true. They were not:
 * adding the personal audiences put three pages into the sitemap (which reads AUDIENCE_PAGES)
 * and into no menu on the site (which read this), so the new pages existed and nothing linked
 * to them. A page nobody can reach is worse than a page that does not exist, because it looks
 * finished.
 *
 * One list now. The reasoning about why the audiences are split the way they are lives with the
 * pages themselves, in lib/audiences.ts.
 */
export const AUDIENCES = AUDIENCE_PAGES.map((a) => ({ slug: a.slug, label: a.label }));

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE],
    },
  };
}
