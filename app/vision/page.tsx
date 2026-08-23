"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import { useReveal } from "@/lib/useReveal";

const THESIS = [
  {
    title: "Luxury’s next client buys for herself.",
    text: "Self-reward and self-expression are replacing gifting and romance-led occasions across luxury categories. Jewellery marks a promotion before it marks a proposal; fragrance signals a mood before it signals a milestone. Brands that still narrate only romance are narrating to a shrinking room.",
  },
  {
    title: "A first purchase is an opening line.",
    text: "The entry-price client is not a small client — she is an early one. Treating a €1,000 first purchase as the start of a decades-long journey, with recognition, access and belonging at each stage, is how maisons compound value instead of chasing seasons.",
  },
  {
    title: "Products become rituals.",
    text: "Personalization, layering and connected experiences are turning static products into daily rituals. The brands that own the ritual — not just the object — earn recurring revenue and something rarer: a place in the client’s routine.",
  },
];

const METHOD = [
  { n: "01", title: "Diagnose", text: "Start from the market’s structural shifts — demographics, occasions, channels — not from the brand’s assumptions." },
  { n: "02", title: "Segment", text: "Model clients by motivation and journey stage, each segment with its own engagement model and hero product." },
  { n: "03", title: "Build", text: "Ground every recommendation in unit economics — investment, revenue model, LTV/CAC — so strategy survives the CFO." },
  { n: "04", title: "Design", text: "Translate the numbers back into experiences: exhibitions, memberships, connected products — the things a client actually feels." },
];

export default function Vision() {
  useReveal();
  return (
    <main>
      <header className="case-hero" style={{ paddingBottom: 60 }}>
        <div className="micro" style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
          <span>My Vision</span>
          <span>Manifesto</span>
        </div>
      </header>

      <section style={{ padding: "0 32px 130px", overflow: "hidden" }}>
        <VisionSection />
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">The Thesis</span>
          <span className="micro">Three Beliefs</span>
        </div>
        <div>
          {THESIS.map((t) => (
            <div key={t.title} className="reveal gap-cols rule-top" style={{ padding: "40px 0" }}>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1, maxWidth: "18ch" }}>{t.title}</h2>
              <p className="lead" style={{ fontSize: 18, maxWidth: "52ch" }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Method</span>
          <span className="micro">How I Work</span>
        </div>
        <div className="stat-grid">
          {METHOD.map((m) => (
            <div key={m.n} className="reveal">
              <div className="serif" style={{ fontSize: 40, marginBottom: 16 }}>{m.n}</div>
              <div className="micro" style={{ marginBottom: 12 }}>{m.title}</div>
              <p className="cap" style={{ maxWidth: "32ch" }}>{m.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal rule-top" style={{ marginTop: 90, paddingTop: 34 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>In practice</div>
          <Link href="/work" className="footer-big">See the frameworks at work &rarr;</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
