import type { Metadata } from "next";
import LegalDoc, { type LegalSection } from "../components/LegalDoc";
import { CONTACT_EMAIL, PARENT_SITE, SITE_NAME, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Terms of Use",
    description: `Terms for using the ${SITE_NAME} website.`,
    path: "/terms",
  }),
  robots: { index: true, follow: true },
};

// TERMS FOR THIS WEBSITE, and deliberately nothing more.
//
// This site sells nothing directly: every CTA hands off to Apollo Claw, where the purchase, the
// account and the service relationship live. So these terms cover reading these pages, and say
// plainly that buying an agent is a separate agreement made there. They are NOT a substitute for
// a customer agreement, and the "What you are agreeing to" section says so rather than implying
// this page governs the product.
//
// The boundary section here is about ACCESS, because that is what this product actually asks // for and what a buyer is actually weighing. Every sibling agent reads a bounded thing: contracts, // a brand guide, a book of business. This one is pointed at an inbox and a calendar, which do not // separate work from the rest of a life and which contain other people's information as much as // the customer's. // // So it says three things plainly: the customer decides what it may read rather than discovering // the default later, the customer stays responsible for anything sent under their name, and // third parties in that mailbox never agreed to anything. The third is the one a customer will // not think of and the one most likely to matter to them. // // Not reviewed by a lawyer, and governing law is asserted from the business address rather than // on advice. Have counsel read this before relying on it.
const EFFECTIVE = "September 6, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Who these terms are with",
    blocks: [
      {
        kind: "prose",
        text: `This website is operated by Apollo Claw AI Consulting ("Apollo Claw", "we", "us"), 69 Roslyn Road, Roslyn Heights, NY 11577. By using this site you agree to what follows. If you do not agree, please do not use the site.`,
      },
    ],
  },
  {
    heading: "What you are agreeing to",
    blocks: [
      {
        kind: "prose",
        text: `These terms cover this website only: reading these pages and following the links on them. They are not the agreement for the product.`,
      },
      {
        kind: "prose",
        text: `Building, buying, and using ${SITE_NAME} happens on Apollo Claw at ${PARENT_SITE}. That is a separate relationship, governed by the terms and the order you agree to there at the time of purchase, together with any written agreement signed with Apollo Claw. Nothing on this page changes those, and nothing on this page creates a contract to supply an agent.`,
      },
    ],
  },
  {
    heading: "What is on this site",
    blocks: [
      {
        kind: "prose",
        text: "The pages here describe what the agent does and who it is for. They are marketing and information, written in good faith and kept current as the product changes.",
      },
      {
        kind: "bullets",
        items: [
          "Descriptions of capability describe what the agent is built to do, not a guarantee of any particular result in your business.",
          "Any figures, timeframes, or example outcomes are illustrative. Results depend on your market, your data, your systems, and how you use the agent.",
          "Pricing and features shown here can change. The price that binds is the one shown at checkout on Apollo Claw.",
        ],
      },
    ],
  },
  {
    heading: "Access, and what stays yours",
    blocks: [
      {
        kind: "prose",
        text: "Nothing on this site is legal, financial or professional advice, and nothing here is a promise about results. What an agent saves depends on your work and your week, and no page on this site should be read as a guarantee of hours returned.",
      },
      {
        kind: "prose",
        text: "The agent works in the mailbox and calendar you connect it to, and what it may read is something you decide at setup rather than a default you discover later. It drafts; you send, unless you have explicitly allowed a specific message type to go unattended. Anything sent under your name is yours: the agent does not commit you to anything, and agreements, payments and anything binding wait for a person. One thing worth naming because it is easy to miss: an inbox contains other people's information as well as your own, and those people did not agree to anything here. Deciding what the agent may see is partly a decision on their behalf, which is why the scope is set deliberately and why the agent runs on your own instance rather than a shared one.",
      },
    ],
  },
  {
    heading: "What belongs to us",
    blocks: [
      {
        kind: "prose",
        text: `The content, design, wording, logo, and artwork on this site belong to Apollo Claw or its licensors. You are welcome to read it, quote it with attribution, and link to it. You may not copy the site or its artwork to present as your own, or use ${SITE_NAME} branding in a way that suggests we endorse or are affiliated with you.`,
      },
    ],
  },
  {
    heading: "Acceptable use",
    blocks: [
      {
        kind: "prose",
        text: "Please do not attempt to break, overload, or gain unauthorized access to this site or the systems behind it, scrape it in a way that degrades it for other people, or use it to mislead anyone about who you are or who we are.",
      },
    ],
  },
  {
    heading: "Links to other services",
    blocks: [
      {
        kind: "prose",
        text: `This site links out to Apollo Claw and to Cal.com for booking a call, and may link to other third parties. Those services are run by other people under their own terms and privacy policies, and we are not responsible for their content or their handling of your information.`,
      },
    ],
  },
  {
    heading: "No warranty, and limits on liability",
    blocks: [
      {
        kind: "prose",
        text: "This site is provided as it is. We work to keep it accurate and available, but we do not warrant that it will be uninterrupted, error free, or that everything on it is complete or current at every moment.",
      },
      {
        kind: "prose",
        text: "To the extent the law allows, Apollo Claw is not liable for indirect or consequential loss arising from your use of this website, including lost profits or lost business. Nothing here limits liability that cannot be limited by law, including for fraud or for death or personal injury caused by negligence. Liability for the product itself is dealt with in the agreement you enter at the time of purchase, not here.",
      },
    ],
  },
  {
    heading: "Governing law",
    blocks: [
      {
        kind: "prose",
        text: "These terms are governed by the laws of the State of New York, and the state and federal courts sitting in Nassau County, New York have jurisdiction over any dispute about this website.",
      },
    ],
  },
  {
    heading: "Changes, and how to reach us",
    blocks: [
      {
        kind: "prose",
        text: `We may update these terms as the site changes. The effective date above will tell you when they last changed. Questions about anything here: ${CONTACT_EMAIL}.`,
      },
    ],
  },
];

export default function Page() {
  return (
    <LegalDoc
      title="Terms of Use"
      effective={EFFECTIVE}
      intro="These terms cover this website. Buying and using the agent itself happens on Apollo Claw and is governed by the agreement you make there."
      sections={SECTIONS}
    />
  );
}
