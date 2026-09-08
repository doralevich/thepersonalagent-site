// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// THIS AGENT SEES EVERYTHING, and that is the difference from every sibling. A legal agent reads
// contracts, a marketing agent reads the brand guide. This one lives in an inbox and a calendar
// that do not separate work from the rest of a life: the doctor's appointment sits next to the
// board meeting, and the difficult family email sits next to the invoice. So the copy treats
// access as the thing to be earned rather than assumed, says plainly what it may read and send,
// and returns to the point that a private instance is not a nice-to-have here.
//
// The second thing: it acts toward people who know you. A cold outreach email that sounds
// slightly off costs a reply. A reschedule to your biggest client that sounds slightly off
// costs something else. So drafting in your voice is framed as a correctness requirement rather
// than a convenience, and the approval line is set per message type at setup.
//
// The apolloclaw.ai page for this one (/ai-agents/personal-assistant) names the same five jobs:
// inbox, calendar, research, notes, follow-up. The copy stays consistent with it deliberately.

export const CAPABILITIES = [
  {
    title: "An Inbox That Is Already Sorted",
    body: "Read, triaged and grouped by what actually needs you, with replies drafted for the ones that only need sending. You open a short list rather than a pile.",
  },
  {
    title: "The Calendar, Handled",
    body: "Scheduling, rescheduling and the back-and-forth that eats a morning. It protects the blocks you told it to protect, including the ones that are not meetings.",
  },
  {
    title: "Briefed Before Every Meeting",
    body: "Who you are seeing, what was said last time, what they care about and what is outstanding. It arrives before the meeting rather than after you needed it.",
  },
  {
    title: "Open Loops That Stay Visible",
    body: "What you promised, who owes you a reply, and what is quietly overdue. Surfaced on a schedule rather than remembered at 2am.",
  },
  {
    title: "Research on Demand",
    body: "A company, a person, a topic, a decision you are weighing. Summarized with sources you can check, before the conversation rather than during it.",
  },
  {
    title: "Notes That Become Actions",
    body: "What was decided, what you agreed to, and what happens next, written up from the call and turned into the follow-ups themselves.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Learn Your Day and Your Lines",
    body: "How you work, who matters, what protects your attention, and how you sound when you write. Then the boundaries: what it may read, what it may send unattended, and what always waits for you.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Pile Stops Being a Pile",
    body: "The inbox arrives sorted with drafts against it. Meetings come with a brief. Scheduling stops being a thread. The things you said you would do stop disappearing.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns How You Actually Sound",
    body: "Which drafts you send untouched, which people get the short reply and which get the careful one, and what you always want protected. The edits get lighter every week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Private Equity",
    quote:
      "Two hundred emails a day and maybe fifteen that needed me. Now I open a list of fifteen with drafts against them. I have not felt behind on email in months, which I did not think was possible.",
    name: "Managing Director",
    detail: "Mid-market PE firm",
  },
  {
    industry: "Founder",
    quote:
      "The meeting briefs changed the most. I used to walk in cold and reconstruct the last conversation in the first five minutes. Now I read for two minutes beforehand and start where we left off.",
    name: "Founder & CEO",
    detail: "Software company, 30 staff",
  },
  {
    industry: "Consulting",
    quote:
      "Scheduling was genuinely half a day a week across clients and time zones. It is not any more, and that half day is billable now. The maths on this was not complicated.",
    name: "Principal",
    detail: "Independent consultancy",
  },
  {
    industry: "Executive Support",
    quote:
      "I support three executives. It does not replace me, it removes the part of my job that was retyping and chasing. I run more calendars than I used to and I am less at the edge of it.",
    name: "Chief of Staff",
    detail: "Healthcare group",
  },
  {
    industry: "Professional Services",
    quote:
      "What I needed to be sure of was where it stops. Nothing goes to a client, nothing about money, nothing personal, without me reading it. That is written down and it holds.",
    name: "Partner",
    detail: "Advisory firm",
  },
  {
    industry: "Nonprofit",
    quote:
      "Open loops were where things went wrong for me. I would promise something in a meeting and it lived nowhere. Now it lives somewhere and it comes back before it is late.",
    name: "Executive Director",
    detail: "Regional nonprofit",
  },
];

export const FAQS = [
  {
    q: "Does it read all of my email?",
    a: "It reads what you give it access to, and that is a decision you make rather than a default you discover. Plenty of people scope it to work mail only, or exclude specific senders, threads or folders outright. Whatever it may see is agreed at setup, and it uses least-privilege access wherever the platform supports it.",
  },
  {
    q: "Will it send things as me?",
    a: "It drafts and you send, unless you decide otherwise. Some people later let it send specific low-stakes types on its own, a meeting confirmation or a document handoff. Anything to a client, anything about money, anything personal and anything that commits you tends to stay on the approval line permanently, and you write that list at setup.",
  },
  {
    q: "This sees my personal life too. Where does it actually live?",
    a: "On your own instance, not a shared pool. It is configured for you, it remembers only your world, and nothing you hand it is training data for anybody else's agent. Given what an inbox and a calendar contain, that is the part of this we would not compromise on.",
  },
  {
    q: "Does it work with my email and calendar?",
    a: "Google Workspace and Microsoft 365 are the two most people run, and both connect during setup. If the work lives somewhere else as well, documents, a notes app, a task tool, we build to what you already use rather than asking you to move.",
  },
  {
    q: "Can it tell my personal life from my work?",
    a: "Only if you tell it how. That is one of the setup questions, because the line is different for everybody: some people want the two handled together as one day, others want personal untouched entirely. Both are configurations, neither is assumed.",
  },
  {
    q: "Will it sound like me?",
    a: "That is the point, and it matters more here than on the other agents. These messages go to people who know you. It learns from how you already write, and the drafts need less editing each week. Anything it is unsure of comes to you rather than going out approximately right.",
  },
  {
    q: "Do I still need an assistant?",
    a: "If you have one, this takes the retyping and the chasing off them and they cover more. If you do not have one and were never going to hire one, this is the part of that job that can be done without a person, which for most people is most of it.",
  },
  {
    q: "How long does setup take?",
    a: "Most people are running within two weeks. We configure it on your day, your people, your voice and your boundaries, then connect the inbox and calendar the work already lives in.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your systems, your volume and how much you want it to own, book a consultation and we will give you a number.",
  },
];
