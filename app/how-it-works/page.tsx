import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero, Label } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { CAPABILITIES, PROCESS } from "@/lib/content";
import { breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "How It Works: From Consultation to Running in Two Weeks",
  description:
    "What The Personal Agent does, how it gets configured around your day, your voice and your boundaries, and what the first two weeks actually look like.",
  path: "/how-it-works",
  keywords: [
    "how an AI assistant works",
    "AI assistant setup",
    "email and calendar AI integration",
    "personal assistant AI onboarding",
  ],
});

const STACK = [
  {
    title: "Your Inbox",
    body: "Google Workspace or Microsoft 365. It reads exactly what you give it, which for plenty of people is work mail only, and drafts where you tell it to.",
  },
  {
    title: "Your Calendar",
    body: "Scheduling, reschedules and the blocks you told it to defend. It works around your day rather than filling it.",
  },
  {
    title: "Your Documents and Notes",
    body: "Drive, OneDrive, and wherever your notes and tasks live. Context comes from the same places you would have looked, which is what makes a brief useful.",
  },
  {
    title: "Your Boundaries",
    body: "What it may read, what it may send unattended, what always waits for you, and whether personal and work are one day or two. Written down at setup rather than discovered later.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("How It Works", "/how-it-works")) }}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="How It Works"
          title="Configured Around Your Day, Not a Generic Workflow"
        >
          <p className="max-w-2xl mx-auto">
            Every deployment starts with how you work, how you sound, what it may see, and what
            never goes out without you. Here is what that looks like.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Six Jobs It Takes Off Your Team
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">The Timeline</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Consultation to Running in 2 Weeks
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Connects To</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                It Plugs Into the Stack You Already Run
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                We do the integration work. You do not migrate systems to accommodate
                the agent.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {STACK.map((s) => (
                <div key={s.title} className="bg-white rounded p-6 border-l-4 border-brand shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{s.title}</h3>
                  <p className="text-ink leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/what-is-an-agent" className="text-sm font-semibold text-brand hover:underline">
                What is an agent, exactly? &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
