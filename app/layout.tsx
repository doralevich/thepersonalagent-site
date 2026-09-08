import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Personal Assistant | Inbox, Calendar and Meeting Prep",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The Personal Agent triages your inbox and drafts replies, runs your calendar, briefs you before meetings and keeps open loops visible. It reads only what you give it and sends only what you approve.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
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
      description:
        "A private AI personal assistant for executives, founders, consultants and the people who support them. Inbox triage and reply drafting, calendar management, meeting briefs, research, call notes and follow-up.",
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
        "AI personal assistant that triages an inbox and drafts replies in your voice, manages a calendar, prepares briefings before meetings, researches on demand and tracks open commitments.",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
