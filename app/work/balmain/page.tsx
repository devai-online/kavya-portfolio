"use client";

import Footer from "@/components/Footer";
import { CaseHero, Sec, Stat, CaseFooter } from "@/components/Case";
import { useReveal } from "@/lib/useReveal";

const TRENDS = [
  { yr: "2015", note: "H&M collaboration — queues round the block, sold out in hours, gone in a week." },
  { yr: "2018", note: "Beyoncé at Coachella — the biggest stage-costume moment of the year." },
  { yr: "2022", note: "Barbie collection with NFTs, then a Pokémon capsule — two internet trends in one year." },
  { yr: "2023", note: "Beyoncé “Renaissance” couture — a celebrity album turned into a collection." },
];

const SOLUTION = [
  {
    n: "1",
    title: "The designer works for the house",
    text: "Channels stop being a personal feed — no designer selfies as content, no front row as campaign, no ambassadors famous for being famous. The creative director appears the way a chef does: in the kitchen, with the work. The atelier, the archive and the object become the recurring characters, so the next change at the top costs nothing.",
  },
  {
    n: "2",
    title: "The identity is in the archive",
    text: "Make the archive the method, not a one-off: the Jolie Madame line, the structured shoulder, the “architecture of movement”. Every season is a re-reading of Pierre Balmain, not a new spectacle. A quarterly Then/Now series pairs an archive piece with its descendant, so the audience learns what Balmain has always been.",
  },
  {
    n: "3",
    title: "One signature bag — the Pli",
    text: "Structured like a 1950s Balmain jacket, with one gesture: a sculpted fold across the flap — the drape, in leather. No buckle, no logo; gold only at the clasp. One shape, three sizes, unchanged for 24 months, so it has time to become “the Balmain bag”.",
  },
];

export default function Balmain() {
  useReveal();
  return (
    <main>
      <CaseHero
        kicker="03 — Case Study"
        title="Who is Balmain without Olivier?"
        sub="Fourteen years of one designer, a celebrity army and a new trend every season built a spike — not a code. When Olivier Rousteing left in November 2025, the house lost its face, its voice and its cast in a single week. A brand-strategy plan to give Balmain back to the house."
        meta={[
          { k: "House", v: "Balmain · Paris" },
          { k: "Discipline", v: "Luxury Brand Strategy" },
          { k: "Role", v: "Brand Strategist & Concept Developer" },
          { k: "Format", v: "Six-page case study" },
        ]}
      />

      <Sec no="01" label="Context" right="Couture House → Hype Brand">
        <p className="reveal lead" style={{ maxWidth: "46ch", marginBottom: 64 }}>
          Pierre Balmain founded the house in 1945 on structured, ladylike
          tailoring — the Jolie Madame. From 2011, Olivier Rousteing rebuilt it
          for a different world: the H&amp;M collaboration, the “Balmain Army”,
          logo denim and gold buttons. It was loud, it was photographed
          everywhere, and it doubled revenue to about €300M — but each
          collection was a new spectacle rather than a new version of the same
          idea.
        </p>
        <div className="reveal micro" style={{ opacity: 0.55, marginBottom: 20 }}>
          Whatever was trending, Balmain did it next
        </div>
        <div>
          {TRENDS.map((t) => (
            <div key={t.yr} className="reveal exp-row" style={{ gridTemplateColumns: "120px 1fr" }}>
              <div className="serif" style={{ fontSize: 22 }}>{t.yr}</div>
              <p className="cap" style={{ maxWidth: "52ch" }}>{t.note}</p>
            </div>
          ))}
        </div>
        <p className="reveal serif" style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)", lineHeight: 1.25, maxWidth: "28ch", marginTop: 56 }}>
          Each one made news. None of them made a code.
        </p>
      </Sec>

      <Sec no="02" label="The Problem" right="Olivier Rousteing was Balmain">
        <p className="reveal lead" style={{ maxWidth: "46ch", marginBottom: 64 }}>
          For fourteen years the most recognisable image of the brand was the
          designer himself — in the campaigns, in the front row, in every
          selfie. Around him stood the “Balmain Army”: Kim, Rihanna, Kendall,
          Gigi, Kylie, Beyoncé, Naomi. They were ambassadors of celebrity
          culture, not of a house — and they changed with the news cycle, and so
          did what Balmain stood for.
        </p>
        <div className="stat-grid">
          <Stat v="2011" l="Rousteing named creative director, aged 25" />
          <Stat v="14 yrs" l="One face standing in for the brand" />
          <Stat v="1 week" l="To lose the face, voice, channel and cast — Nov 2025" />
        </div>
        <div className="gap-cols" style={{ marginTop: 90, alignItems: "start" }}>
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>Where is the Balmain bag?</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: "44ch", opacity: 0.78 }}>
              Hermès has the Birkin, Dior the Lady, Loewe the Puzzle, Bottega the
              Cassette. Say “the Balmain bag” and nothing comes to mind. B-Buzz,
              padlock, logo hobo, buckle tote — a different bag every season,
              with no shared line and a name written on the front. And a name is
              not a silhouette.
            </p>
          </div>
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>Why it hurts</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, maxWidth: "44ch", opacity: 0.78 }}>
              Leather goods are where luxury houses make their margin and their
              memory. An icon bag lets a brand tell one story for a decade
              instead of relaunching every six months. Without a signature
              object, the house has no anchor when the person at the top changes.
            </p>
          </div>
        </div>
      </Sec>

      <Sec no="03" label="The Solution" right="Give the brand back to the house">
        <h2 className="reveal display" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)", maxWidth: "15ch", marginBottom: 64 }}>
          Give the brand back to the house, then go back to 1945.
        </h2>
        <div className="card-grid" style={{ marginBottom: 90 }}>
          {SOLUTION.map((s) => (
            <div key={s.n} className="reveal seg-card">
              <div className="serif" style={{ fontSize: 40, marginBottom: 16 }}>{s.n}</div>
              <h3 className="serif" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", marginBottom: 18 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.72 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="gap-cols">
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>What this means in practice</div>
            <div className="kv serif" style={{ fontSize: 20 }}>Content — 70% from the codes; celebrity capped at 30%</div>
            <div className="kv serif" style={{ fontSize: 20 }}>Product — a permanent core of tailoring that returns each season</div>
            <div className="kv serif" style={{ fontSize: 20 }}>Governance — codes owned by the house; the CD interprets them</div>
          </div>
          <p className="reveal lead" style={{ maxWidth: "40ch" }}>
            The creative director interprets the codes — never replaces them. So
            when the next designer arrives, the house is still standing.
          </p>
        </div>
      </Sec>

      <Sec no="04" label="Impact" right="The Spike vs. The Code">
        <p className="reveal lead" style={{ maxWidth: "44ch", marginBottom: 64 }}>
          My estimates at month 24 — assuming fixed-rhythm formats bring people
          back, a single hero bag reaches 20–40% of leather goods within three
          years at comparable houses, and celebrity content is capped at 30%.
        </p>
        <div className="stat-grid" style={{ marginBottom: 90 }}>
          <Stat v="75%" l="Engagement no longer tied to the designer — from ~40%" />
          <Stat v="2×" l="Attention still there three months after a launch — 0.3× → 0.6× of peak" />
          <Stat v="20%" l="Of leather goods from one signature bag — from none" />
          <Stat v="70%" l="Content built on the house’s codes — from ~20%" />
        </div>
        <p className="reveal serif" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", lineHeight: 1.25, maxWidth: "32ch" }}>
          &ldquo;The old measure was how big the spike was. The new one is how
          much is still there three months later.&rdquo;
        </p>
      </Sec>

      <CaseFooter pdf="/decks/balmain.pdf" next="/work/chaumet" nextLabel="The Next Chapter of Chaumet" />
      <Footer />
    </main>
  );
}
