// The audience pages. Same shape, different argument.
//
// Split by WHOSE DAY IT IS. Industry barely matters here - an executive and a consultant have
// the same inbox in different words - but what is being protected does. An executive is
// protecting attention, a founder is protecting the hours only they can spend, a consultant is
// protecting billable time, and an EA is protecting somebody else's day rather than their own.
// That last one is the genuinely different shape in the set, and it is also the page most
// likely to be read defensively, so it argues that the agent takes the retyping rather than
// the job.
//
// THE SECOND HALF OF THE LIST IS NOT A JOB TITLE, and that is the point of it.
//
// The first four were all bought with a work budget for a work problem, which left this site
// arguing for a product called The Personal Agent almost entirely in the vocabulary of the
// office: billable hours, board meetings, clients, proposals. The name promises something wider
// than that and the product delivers something wider than that - the same inbox carries the
// school email and the board pack, the same calendar carries the specialist appointment and the
// quarterly review - so the audiences now include people whose hardest day is not at work.
//
// They are split the same way, by whose day it is. A parent is protecting a household's
// logistics, a caregiver is running someone else's affairs on top of their own, and the person
// running a house alongside a job is carrying a list that belongs to two people.
// None of them is a softer version of the executive page; each is a different shape of load.
//
// WHAT THEY MAY NOT PROMISE. Two limits, and the second one was learned the hard way.
//
// The agent connects an inbox, a calendar and a document store. It does not phone the plumber,
// hold your bank login or walk the dog, and personal-life copy is exactly where a product like
// this starts implying that it does. Every benefit below names something that happens in mail, a
// calendar or a document, because that is what is true.
//
// AND IT IS ONE PERSON'S MAIL AND ONE PERSON'S CALENDAR. On the dashboard an app is connected or
// it is not - isToolkitConnected in the platform's IntegrationsView returns a boolean per toolkit,
// and there is no second-account path on a card that already reads connected. So an agent reads
// the mailbox its owner connected and no other, and the chat channels are the same shape: the
// first person to message one becomes its owner and everyone else is dropped.
//
// The for-households page originally promised the opposite - "out of two personal inboxes and
// into one sorted list", clashes spotted across both partners' calendars - three entries after
// this warning was written. It is the most natural thing in the world to write about a household
// as though the software can see all of it, which is exactly why the limit is spelled out here
// rather than left as a thing everybody knows. Copy about two people may describe their PROBLEM
// in two people's terms; every claim about what the agent DOES belongs to one of them.
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
  {
    slug: "for-parents",
    label: "For Parents",
    eyebrow: "For Parents",
    title: "The Household Runs on Somebody's Attention. Usually Yours.",
    intro:
      "Not one big job. Four hundred small ones, arriving as email, living in a calendar, and remembered by exactly one person. The Personal Agent takes the remembering.",
    metaTitle: "AI Personal Assistant for Parents | Family Admin, Calendar and Email",
    metaDescription:
      "A private AI agent for parents. Sorts the school and club email, keeps the family calendar straight, drafts the replies and surfaces what is coming before it is late. It reads only what you give it and sends only what you approve.",
    keywords: [
      "AI assistant for parents",
      "family admin AI",
      "family calendar assistant",
      "AI assistant for busy families",
      "household admin help",
    ],
    problem: {
      heading: "It Is Not Hard. There Is Just Never Any Gap Between the Next Two Things.",
      body: [
        "The forms, the deadlines, the kit that has to be somewhere on Thursday, the party you have to reply to, the appointment that has to move because of the other appointment. Each one takes four minutes and none of them can be skipped, and the whole of it is carried in one person's head alongside a job.",
        "The cost is not the four minutes. It is that the list never fully unloads, so there is no hour of the week that is actually free of it - and the thing that eventually gets dropped is never the urgent one, it is the one that mattered and had no deadline attached.",
      ],
    },
    benefits: [
      {
        title: "The School Email Stops Being a Pile",
        body: "Newsletters, permission slips, reminders and the three that actually need an answer, sorted apart from each other, with the answers drafted.",
      },
      {
        title: "One Calendar That Holds the Whole Family",
        body: "Terms, clubs, appointments and the trip you booked in March, in one place, with the clashes flagged while there is still time to move something.",
      },
      {
        title: "Told Before It Is Late",
        body: "What is due this week and what needs doing before it can happen. Surfaced on a schedule, not remembered in the car on the way there.",
      },
      {
        title: "The Replies You Keep Meaning to Send",
        body: "The invitation, the teacher, the club that needs a yes by Friday. Drafted and waiting, so answering is a glance rather than an evening.",
      },
      {
        title: "The Research You Never Get To",
        body: "Camps, clubs, a tutor, the thing you keep meaning to look into. Summarized with sources, so a decision takes ten minutes rather than another month.",
      },
      {
        title: "Work and Home in the Same Day",
        body: "Because they are. One agent across both, with the line between them drawn where you want it rather than where a tool assumed it.",
      },
    ],
    closing: {
      heading: "Be the Parent, Not the Project Manager",
      body: "None of this is the part that matters. It is the part that stands between you and the part that matters, and it is the part a machine can actually take.",
    },
  },
  {
    slug: "for-caregivers",
    label: "For Caregivers",
    eyebrow: "For Caregivers",
    title: "You Are Running Two Lives and Only One of Them Is Yours.",
    intro:
      "Appointments, paperwork, insurers and the family who need to be kept informed - on top of a job and a household. The Personal Agent carries the coordination so you can do the part that needs you in the room.",
    metaTitle: "AI Personal Assistant for Caregivers | Appointments, Admin and Coordination",
    metaDescription:
      "A private AI agent for people caring for a parent or family member. Keeps appointments and correspondence straight, drafts the chasing emails, tracks what is outstanding and keeps the family updated. It reads only what you give it and sends only what you approve.",
    keywords: [
      "AI assistant for caregivers",
      "caregiver admin help",
      "elderly parent care coordination",
      "medical appointment organiser AI",
      "family caregiver support tools",
    ],
    problem: {
      heading: "The Admin Is Relentless and It Arrives While You Are Already Somewhere Else",
      body: [
        "Referrals, prescriptions, insurers, benefits, the surgery that only answers between nine and eleven, the letter that needed a reply two weeks ago. It is a second full inbox and a second calendar, and it appeared without anybody making room for it.",
        "Worse, nothing about it is optional and none of it forgives being late. So it is carried on top of the job and the family, held together by one person's memory, in the weeks when that person has the least left to give it.",
      ],
    },
    benefits: [
      {
        title: "Every Appointment in One Place",
        body: "Consultants, tests, follow-ups and the ones that had to move. Held as a single sequence rather than across letters, texts and memory.",
      },
      {
        title: "The Chasing, Drafted",
        body: "The referral that has not arrived, the callback that never came, the claim still unanswered. Written and ready, so chasing costs a minute.",
      },
      {
        title: "Nothing Outstanding Gets Lost",
        body: "What you are waiting on and who owes it, surfaced before it becomes the reason something was delayed by a month.",
      },
      {
        title: "The Family Kept Informed",
        body: "The update to siblings that you never have the energy to write twice. Drafted from what actually happened, so everybody hears the same thing.",
      },
      {
        title: "Read the Letter, Get the Summary",
        body: "What a piece of correspondence says, what it wants, and by when. In plain language, with the original there to check.",
      },
      {
        title: "Nothing Personal Goes Out Unread",
        body: "Anything medical, anything financial, anything to family waits for you. That line is written at setup and it holds.",
      },
    ],
    closing: {
      heading: "Spend Your Attention Where Being There Matters",
      body: "There is no version of this where the caring gets automated. There is a version where the coordination around it stops taking the hours you would rather have spent doing it.",
    },
  },
  {
    slug: "for-households",
    label: "For Busy Households",
    eyebrow: "For Busy Households",
    title: "Two Jobs, One House, and One Person Tracking All of It.",
    intro:
      "Nothing is forgotten because somebody is careless. It is forgotten because it belonged to both of you and ended up carried by one. The Personal Agent takes that side of it - your inbox, your calendar, your half of the seam.",
    metaTitle: "AI Personal Assistant for Busy Households | Home Admin, Email and Calendar",
    metaDescription:
      "A private AI agent for the person running a household alongside a job. Sorts the home admin out of your inbox, keeps your calendar straight, drafts the replies and plans what is coming before it turns urgent. It reads only what you give it and sends only what you approve.",
    keywords: [
      "AI assistant for busy households",
      "household admin assistant",
      "home admin AI",
      "personal admin assistant AI",
      "work life logistics AI",
    ],
    problem: {
      heading: "The Handover Is the Hard Part and Nobody Owns It",
      body: [
        "Two jobs, two sets of travel, a household that assumes somebody is tracking it. The failures are never in the big things - they are the Tuesday that needed one of you home, agreed in a corridor, written down by neither, and discovered at four o'clock.",
        "So the coordination becomes its own evening job: comparing calendars, re-agreeing what was already agreed, and keeping a running list that exists only in two heads that are each certain the other one had it.",
      ],
    },
    benefits: [
      {
        title: "Clashes Found Early",
        body: "The week the travel lands on top of the thing at home, against everything already in your calendar. Flagged while it is still cheap to move rather than on the day.",
      },
      {
        title: "The Household Email, Sorted",
        body: "School, trades, insurers, the bookings. Separated from the work mail and from each other in the inbox they already arrive in, with the replies drafted.",
      },
      {
        title: "What Was Agreed, Written Down",
        body: "The thing decided in passing stops living in your memory alone, and comes back before it is due rather than after.",
      },
      {
        title: "Booking Without the Thread",
        body: "The thread with the other family, the trades, the restaurant, run down to a shortlist of times. You pick the one that works at your end, which is the part only you know anyway.",
      },
      {
        title: "Planned Before It Is Urgent",
        body: "The trip, the works on the house, the thing that needs booking in March. Researched and summarized while there are still options.",
      },
      {
        title: "Yours, and Only Yours",
        body: "It reads the mailbox and calendar you connect and nobody else's - your partner's stay entirely their own. If you both want one, you get one each, and neither can see into the other.",
      },
    ],
    closing: {
      heading: "Stop Running the House in the Evenings",
      body: "The coordination is real work, it is just work nobody was hired for. It is also the most automatable thing in the week.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
