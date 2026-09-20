import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "./components/CookieConsent";
import { OG_IMAGE, OG_IMAGE_ALT, SITE_NAME, SITE_URL } from "@/lib/site";

// THE HOME PAGE'S SHARE CARD IS THIS FILE. app/page.tsx exports no metadata of its own, so the
// most-linked URL on the site inherits everything below - which is why the title, the
// description and the image all have to be right here rather than only in pageMeta.
//
// It also had no `twitter` block at all. Interior pages got one from pageMeta and the home page
// did not, so the one URL most likely to be pasted into a timeline was the one page without a
// card declared. X falls back to Open Graph in practice, but "in practice" is a poor thing to
// rely on when the fix is four lines.
//
// The words changed with the rest of the site. The title promised "Meeting Prep" and the
// description "briefs you before meetings", which described a product for people whose day is
// meetings - the same office-only framing the copy was corrected for. Both now say what is
// true: one agent across the whole day, because the inbox does not separate the two halves.
const TITLE = "AI Personal Assistant for Work and Home | Inbox, Calendar and Admin";
const DESCRIPTION =
  "The Personal Agent triages your inbox, drafts the replies, runs your calendar and tracks what you promised - at work and at home. It reads only what you give it and sends only what you approve.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "Roslyn Heights, NY",
    "geo.position": "40.7998;-73.651",
    ICBM: "40.7998, -73.651",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      // Kept in step with the audience pages. It listed four job titles while the site had seven
      // audiences, three of whom are not at work - structured data that describes a narrower
      // product than the pages it sits on.
      description:
        "A private AI personal assistant for executives, founders, consultants, parents, caregivers and anyone running a household alongside a job. Inbox triage and reply drafting, calendar management, briefs before what matters, research, notes and follow-up.",
      telephone: "(917) 363-5487",
      address: {
        "@type": "PostalAddress",
        streetAddress: "69 Roslyn Road",
        addressLocality: "Roslyn Heights",
        addressRegion: "NY",
        postalCode: "11577",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 40.7998, longitude: -73.651 },
      areaServed: ["Long Island", "Nassau County", "New York City Metro", "United States"],
      founder: { "@type": "Person", name: "David Oralevich" },
      parentOrganization: {
        "@type": "Organization",
        name: "Apollo Claw",
        url: "https://apolloclaw.ai",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI personal assistant that triages an inbox and drafts replies in your voice, manages a calendar, prepares briefings before what matters, researches on demand and tracks open commitments, across work and personal life.",
      url: SITE_URL,
      publisher: { "@type": "Organization", name: "Apollo Claw", url: "https://apolloclaw.ai" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2YZ6FJGSF6" strategy="afterInteractive" />
        {/* Google Consent Mode v2, matching the pattern established on theceoagent.ai and
            apolloclaw.ai. analytics_storage starts DENIED, so GA writes no cookie and no
            identifier until the visitor accepts and CookieConsent calls
            gtag('consent','update',...). A returning visitor's stored choice is replayed
            synchronously here, before the config call, so acceptance from a prior visit is
            honored on first paint instead of flashing denied for the first 500ms.
            wait_for_update holds the first hit that long to give this a chance to run at all. */}
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          try {
            if (localStorage.getItem('personal-cookie-consent') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
          gtag('js', new Date());
          gtag('config', 'G-2YZ6FJGSF6');
        `}</Script>
        <CookieConsent />
      </body>
    </html>
  );
}
