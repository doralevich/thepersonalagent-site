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
//
// WHOLE LIFE, WORK INCLUDED - David's call, and it is a correction rather than a widening.
//
// This file used to argue the product almost entirely in the vocabulary of the office: two
// hundred emails, the board meeting, the biggest client, the half day that is billable now.
// Every testimonial was a job title. For a product called The Personal Agent that was the wrong
// centre of gravity, and it was not even an accurate description of what the thing does: the
// inbox it reads carries the school email next to the board pack, and the calendar it runs
// carries the specialist appointment next to the quarterly review.
//
// So the examples now come from both halves of a day, deliberately mixed rather than segregated
// into a personal section. The jobs themselves did not change, because they were always the
// right jobs - what changed is that the copy stops pretending the day stops at six.
//
// WHAT IT STILL MAY NOT SAY. The agent connects mail, a calendar and a document store. It does
// not phone anybody, hold a bank login or do anything with a card. Personal-life copy is exactly
// where a product like this starts implying otherwise, so every line below names something that
// happens in an inbox, a calendar or a document.
//
// And it is ONE person's inbox and calendar - see the longer note in lib/audiences.ts. The
// "Two Careers" testimonial below is the one place that nearly said otherwise: a household's
// logistics are genuinely shared, but the agent reading them is not. It describes one person's
// calendar holding what used to be in neither.

export const CAPABILITIES = [
  {
    title: "An Inbox That Is Already Sorted",
    body: "The client thread, the school newsletter and the thing that needs an answer by Friday, separated from each other rather than stacked in arrival order, with replies drafted for the ones that only need sending.",
  },
  {
    title: "The Calendar, Handled",
    body: "Scheduling, rescheduling and the back-and-forth that eats a morning. It protects the blocks you told it to protect, and the ones that are not meetings are usually the ones that needed protecting.",
  },
  {
    title: "Briefed Before It Matters",
    body: "Who you are seeing, what was said last time and what is still outstanding - for the board meeting and for the appointment you have been waiting four months for. It arrives beforehand rather than after you needed it.",
  },
  {
    title: "Open Loops That Stay Visible",
    body: "What you promised, who owes you a reply, and what is quietly overdue. The proposal and the form that has to be back before term starts, surfaced on a schedule rather than remembered at 2am.",
  },
  {
    title: "Research on Demand",
    body: "A company, a supplier, a school, a decision you keep postponing because looking into it properly takes an evening you do not have. Summarized with sources you can check.",
  },
  {
    title: "Notes That Become Actions",
    body: "What was decided, what you agreed to and what happens next, written up and turned into the follow-ups themselves - whether that was a client call or a conversation with a consultant.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Learn Your Day and Your Lines",
    body: "How your week actually runs, who matters at work and at home, what has to be protected, and how you sound when you write. Then the boundaries: what it may read, what it may send unattended, and what always waits for you.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Pile Stops Being a Pile",
    body: "The inbox arrives sorted with drafts against it. What is coming arrives with a brief. Scheduling stops being a thread. The things you said you would do, at work and at home, stop disappearing.",
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
    industry: "Family Logistics",
    quote:
      "Three children, two schools and a job. The part that broke me was never the big stuff, it was forty small things a week that all had a deadline. They live somewhere now other than in my head, and they come back before they are late.",
    name: "Parent of three",
    detail: "Works full time",
  },
  {
    industry: "Founder",
    quote:
      "The briefs changed the most. I used to walk in cold and reconstruct the last conversation in the first five minutes. Now I read for two minutes beforehand and start where we left off.",
    name: "Founder & CEO",
    detail: "Software company, 30 staff",
  },
  {
    industry: "Caregiving",
    quote:
      "I was running my mother's appointments and correspondence on top of my own life, and the chasing was the worst of it. The referral that never arrived, the claim nobody answered. It writes those now and I press send.",
    name: "Caring for a parent",
    detail: "Alongside a full-time role",
  },
  {
    industry: "Consulting",
    quote:
      "Scheduling was genuinely half a day a week across clients and time zones. It is not any more, and that half day is billable now. The maths on this was not complicated.",
    name: "Principal",
    detail: "Independent consultancy",
  },
  {
    industry: "Two Careers",
    quote:
      "Nothing was ever forgotten because either of us was careless. It was forgotten because it belonged to both of us and was in neither calendar. It is in mine now, and it comes back at me before it is due, which has stopped most of our arguments about logistics.",
    name: "Both partners work",
    detail: "Two children, frequent travel",
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
];

export const FAQS = [
  {
    q: "Does it read all of my email?",
    a: "It reads what you give it access to, and that is a decision you make rather than a default you discover. Plenty of people scope it to work mail only, or exclude specific senders, threads or folders outright. Whatever it may see is agreed at setup, and it uses least-privilege access wherever the platform supports it.",
  },
  {
    q: "Is this for work or for home?",
    a: "Both, and that is the whole idea. The same inbox carries the client thread and the school newsletter, and the same calendar carries the review and the appointment you waited four months for, so an agent that only understood one half would hand you back the easy half of your week. Where the line sits is yours: some people want the two run as one day, some want personal left entirely alone. That is a setup question rather than an assumption.",
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
    q: "Will it sound like me?",
    a: "That is the point, and it matters more here than on the other agents. These messages go to people who know you. It learns from how you already write, and the drafts need less editing each week. Anything it is unsure of comes to you rather than going out approximately right.",
  },
  {
    q: "Do I still need an assistant?",
    a: "Most people asking this were never going to hire one, at work or at home - which is rather the point. This is the part of that job that can be done without a person, and for most people that is most of it. If you do have an assistant, it takes the retyping and the chasing off them and they cover more.",
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
