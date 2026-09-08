// The four audience pages. Same shape, different argument.
//
// Split by WHOSE DAY IT IS. Industry barely matters here - an executive and a consultant have
// the same inbox in different words - but what is being protected does. An executive is
// protecting attention, a founder is protecting the hours only they can spend, a consultant is
// protecting billable time, and an EA is protecting somebody else's day rather than their own.
// That last one is the genuinely different shape in the set, and it is also the page most
// likely to be read defensively, so it argues that the agent takes the retyping rather than
// the job.
//
// Every page holds the same two lines, because this agent sees more than any of its siblings:
// what it may read is a decision made at setup rather than a default discovered later, and
// anything that reaches a person who knows you waits for you unless you said otherwise.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-executives",
    label: "For Executives",
    eyebrow: "For Executives",
    title: "Two Hundred Emails. Fifteen That Need You.",
    intro:
      "The problem was never the volume, it was that finding the fifteen costs the same as reading all two hundred. The Personal Agent does the finding, and drafts most of the fifteen.",
    metaTitle: "AI Personal Assistant for Executives | Inbox, Calendar and Prep",
    metaDescription:
      "A private AI agent for executives. Triages the inbox and drafts replies, runs the calendar, briefs you before every meeting and keeps open loops visible. It reads only what you give it and sends only what you approve.",
    keywords: [
      "AI personal assistant for executives",
      "executive inbox management AI",
      "AI chief of staff",
      "calendar management AI",
      "meeting prep AI",
    ],
    problem: {
      heading: "Attention Is the Scarce Thing and It Leaks All Day",
      body: [
        "The job is a small number of decisions that only you can make, wrapped in several hundred interruptions that anybody could handle. The interruptions arrive with the same urgency as the decisions, and sorting them is itself the work that stops you doing either.",
        "By the time the day has been triaged, scheduled, prepped and followed up, the hours where you were going to think about the actual problem are gone. Not to anything important. To the overhead of being reachable.",
      ],
    },
    benefits: [
      {
        title: "You Open a Short List",
        body: "The inbox arrives triaged into what needs a decision, what needs a signature and what needed nothing, with drafts against the ones that only need sending.",
      },
      {
        title: "The Calendar Defends Itself",
        body: "Scheduling and rescheduling handled without the thread, and the blocks you told it to protect stay protected, including the ones that are not meetings.",
      },
      {
        title: "Never Walk In Cold",
        body: "Who you are seeing, what was said last time, what they want and what is outstanding. Two minutes of reading instead of five minutes of reconstruction.",
      },
      {
        title: "Nothing You Promised Disappears",
        body: "What you committed to in a meeting is captured and comes back before it is late, rather than living in your head until it does not.",
      },
      {
        title: "Research Before the Conversation",
        body: "The company, the person, the number you half-remember. Summarized with sources you can check, in time to be useful.",
      },
      {
        title: "It Sounds Like You",
        body: "These go to people who know you, so an approximately right message is worse than none. Anything it is unsure of comes to you instead of going out.",
      },
    ],
    closing: {
      heading: "Spend the Day on the Decisions",
      body: "Nothing here makes the hard calls. It removes everything standing between you and the hours in which you would make them.",
    },
  },
  {
    slug: "for-founders",
    label: "For Founders",
    eyebrow: "For Founders",
    title: "You Cannot Justify an Assistant. You Badly Need One.",
    intro:
      "Every hour on scheduling and inbox is an hour not spent on the two or three things only you can do. The Personal Agent is the part of that job that does not need a person.",
    metaTitle: "AI Personal Assistant for Founders | The Assistant You Cannot Hire Yet",
    metaDescription:
      "A private AI agent for founders. Handles the inbox, the calendar, meeting prep and follow-up, so the hours go to the work only a founder can do. Drafts for your approval, never sends unattended unless you say so.",
    keywords: [
      "AI assistant for founders",
      "startup founder productivity AI",
      "virtual assistant alternative",
      "founder inbox management",
      "AI executive assistant startup",
    ],
    problem: {
      heading: "The Job Is Everything, and Everything Is Interruptions",
      body: [
        "Product, hiring, fundraising, sales, and the four hundred small things that arrive because you are the person people email. All of it is genuinely yours, which is why none of it can be dropped and none of it gets a clear run.",
        "Hiring an assistant fixes most of it and is the exact expense that is hard to justify at your size. So the work stays, gets done badly at 11pm, and the things that compound quietly do not happen.",
      ],
    },
    benefits: [
      {
        title: "The Inbox Stops Setting the Day",
        body: "Sorted, drafted and reduced to what actually needs you, so the morning starts with your priorities rather than everybody else's.",
      },
      {
        title: "Scheduling Without the Thread",
        body: "The four-email dance to find a slot, handled. Across time zones, without you being in the middle of it.",
      },
      {
        title: "Prepared for Every Conversation",
        body: "Investor, candidate, customer. What was said last time and what is outstanding, before you sit down.",
      },
      {
        title: "Follow-Up That Survives a Bad Week",
        body: "What you promised in a meeting comes back on schedule, so the things that compound stop depending on a quiet week that never arrives.",
      },
      {
        title: "It Costs Less Than the Alternative",
        body: "This is the part of an assistant's job that does not need a person, at a price that does not need a funding round.",
      },
      {
        title: "You Keep Every Relationship",
        body: "Nothing reaches an investor, a customer or a candidate without you reading it. It writes the draft; you keep the relationship.",
      },
    ],
    closing: {
      heading: "Buy Back the Hours You Cannot Delegate",
      body: "The work only a founder can do never fitted in the day because the rest of the day was full. This is the rest of the day.",
    },
  },
  {
    slug: "for-consultants",
    label: "For Consultants",
    eyebrow: "For Consultants",
    title: "Every Hour on Admin Is an Hour You Cannot Bill.",
    intro:
      "Scheduling, notes, follow-up and proposals are the unbillable half of independent practice. The Personal Agent takes it, and the hours come back on the right side of the ledger.",
    metaTitle: "AI Assistant for Consultants | Reclaim Unbillable Hours",
    metaDescription:
      "A private AI agent for consultants and independent professionals. Handles scheduling across clients, writes up call notes, drafts follow-up and keeps commitments visible, so more of the week is billable.",
    keywords: [
      "AI assistant for consultants",
      "independent consultant productivity",
      "billable hours automation",
      "client scheduling AI",
      "consultant admin automation",
    ],
    problem: {
      heading: "The Unbillable Half Is Not Optional",
      body: [
        "Six clients means six calendars, six sets of notes, six follow-ups and six people who each think they are your only one. All of it is required to do the work well and none of it appears on an invoice.",
        "So the practical ceiling on an independent practice is not how much work you can do. It is how much overhead you can absorb before the quality of the actual work starts to show it.",
      ],
    },
    benefits: [
      {
        title: "Scheduling Across Every Client",
        body: "Time zones, reschedules and the back-and-forth, handled without you in the middle. For most consultants this alone is half a day a week.",
      },
      {
        title: "Notes Written After the Call",
        body: "What was decided, what you agreed to and what happens next, written up while it is accurate rather than reconstructed on Friday.",
      },
      {
        title: "Follow-Up That Goes Out",
        body: "The recap, the next step, the thing you said you would send. Drafted the same day, so momentum survives a busy week.",
      },
      {
        title: "Every Client Feels Like the Only One",
        body: "Each engagement's context held separately and surfaced before you speak to them, which is what actually makes a small practice feel senior.",
      },
      {
        title: "Proposals Started for You",
        body: "Drafted from what was actually discussed on the call, in your format, so the gap between a good conversation and a sent proposal stops being a week.",
      },
      {
        title: "Nothing Goes to a Client Unread",
        body: "Client-facing anything waits for you by default. Your name, your reputation, your call.",
      },
    ],
    closing: {
      heading: "The Ceiling Was Overhead, Not Capacity",
      body: "Move the overhead and the same practice carries more work, at the same quality, without becoming a firm.",
    },
  },
  {
    slug: "for-assistants",
    label: "For EAs & Chiefs of Staff",
    eyebrow: "For EAs & Chiefs of Staff",
    title: "You Are Already the Assistant. This Is Yours.",
    intro:
      "The part of your job that is retyping, chasing and reconciling calendars is the part a machine can do. The judgment, the relationships and the discretion are not going anywhere.",
    metaTitle: "AI Support for Executive Assistants and Chiefs of Staff",
    metaDescription:
      "A private AI agent for EAs and chiefs of staff. Takes the retyping, chasing and calendar reconciliation across the people you support, so you cover more without being at the edge of it.",
    keywords: [
      "AI for executive assistants",
      "chief of staff tools",
      "EA productivity AI",
      "calendar reconciliation AI",
      "executive support automation",
    ],
    problem: {
      heading: "Supporting Three People Is Not Three Times One Person",
      body: [
        "It is worse than that, because their calendars collide, their priorities compete, and every request arrives believing it is the urgent one. The reconciling is constant and invisible, and it is what makes the job exhausting rather than the work itself.",
        "The parts that actually need you, knowing which meeting genuinely cannot move, knowing how to say no on somebody's behalf without damage, reading a room you are not in, are the parts that get squeezed by everything else.",
      ],
    },
    benefits: [
      {
        title: "The Retyping Goes",
        body: "Confirmations, recaps, reschedule notes and the fortieth version of the same message, drafted for you to check rather than composed again.",
      },
      {
        title: "Calendars That Reconcile Themselves",
        body: "The collisions surfaced with options rather than found at 8am, across everybody you support.",
      },
      {
        title: "Chasing on a Schedule",
        body: "The replies that have not come, the documents that have not arrived, followed up without you holding the list in your head.",
      },
      {
        title: "Context Ready for Each Principal",
        body: "Each person's briefs, commitments and open loops kept separately, so switching between them stops costing you ten minutes each time.",
      },
      {
        title: "It Does Not Speak for You",
        body: "Anything going out under your principal's name comes to you first. Knowing how to say a thing on somebody's behalf is the job, and it stays yours.",
      },
      {
        title: "You Cover More, Not Less",
        body: "This is not a replacement argument. It is the reason one person can support four instead of two without living at the edge of it.",
      },
    ],
    closing: {
      heading: "Keep the Judgment. Hand Over the Typing.",
      body: "Nothing about discretion, relationships or knowing what actually matters is automatable. Almost everything around them is.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
