"use client";

import Footer from "@/components/Footer";
import { CaseHero, Sec, Stat, CaseFooter } from "@/components/Case";
import { useReveal } from "@/lib/useReveal";

const SYSTEM = [
  {
    n: "1",
    title: "Insert the scent pods",
    text: "Four interchangeable, refillable pods. Signatures (€39–€69) — iconic fragrances adapted to the device ecosystem. Accords (€29–€59) — olfactive modifiers designed for layering: skin-like notes and scent enhancers.",
  },
  {
    n: "2",
    title: "The AI scent engine",
    text: "Guided scent creation through the mobile app. Start with pods and the AI refines the composition — or start with a mood and the AI suggests the pods, reading occasion, style, weather and intensity preference.",
  },
  {
    n: "3",
    title: "Smart composition",
    text: "Mixing rule: Signature ≥ 60% + Accords ≤ 40%. At least one Signature in every blend, up to two Accords — e.g. Babycat 70% · Musc 20% · Iris 10%. Over 100 unique compositions.",
  },
  {
    n: "4",
    title: "Daily scent atomizer",
    text: "The device prepares a portable daily atomizer in 15 seconds — 3 ml, 30 sprays. Your personalized fragrance, ready to carry.",
  },
];

const ALLOCATION = [
  { v: "35%", l: "Product & AI development — connected device engineering and AI scent engine" },
  { v: "30%", l: "Retail activation & marketing — flagship stores, travel retail, digital experience" },
  { v: "25%", l: "Manufacturing setup — modular refillable pods compatible with existing formulas" },
  { v: "10%", l: "Operations & logistics — supply chain integration and pod distribution" },
];

const SCALE = [
  { n: "Y1", title: "Pilot phase", text: "100 flagship stores. +0.5–1% conversion uplift." },
  { n: "Y2", title: "Retail expansion", text: "1,000 locations. Multiple fragrance brands integrated into the pod ecosystem." },
  { n: "Y3", title: "Global scale", text: "3,000+ locations worldwide. Full omnichannel integration and centralized scent data insights." },
];

export default function LAccordeur() {
  useReveal();
  return (
    <main>
      <CaseHero
        kicker="02 — Case Study"
        title="L’Accordeur by YSL"
        sub="A connected fragrance system that lets users create personalized scents by combining iconic fragrances with AI-generated accords. One bottle. Infinite scents. Your signature."
        image="/work/ysl-hero.jpg"
        imageLogo="/work/ysl-logo.png"
        meta={[
          { k: "Brand", v: "YSL · L’Oréal Luxe" },
          { k: "Discipline", v: "Product Innovation" },
          { k: "Programme", v: "L’Oréal Brandstorm 2026" },
          { k: "Category", v: "Connected Fragrance" },
        ]}
      />

      <Sec no="01" label="Market Momentum" right="Premiumization">
        <p className="reveal lead" style={{ maxWidth: "42ch", marginBottom: 64 }}>
          Fragrance is still sold as a fixed product in a world that demands
          personalization — while the category expands rapidly, driven by
          premiumization and strong demand for luxury fragrances.
        </p>
        <div className="stat-grid">
          <Stat v="$52.7B" l="Global fragrance market, 2023" />
          <Stat v="$76B" l="Projected market, 2030" />
          <Stat v="$28B" l="Luxury fragrance expected by 2030 — half of all sales come from luxury brands" />
          <Stat v="8–12" l="Fragrances owned by the average Gen Z consumer" />
        </div>
        <div className="grid-2" style={{ marginTop: 64, gap: 40, maxWidth: 700 }}>
          <Stat v="83%" l="Of Gen Z wear fragrance at least 3 times per week" />
          <Stat v="41%" l="Practice fragrance layering to reflect moods, identities and occasions" />
        </div>
      </Sec>

      <Sec no="02" label="Industry Gap" right="Static vs. Dynamic">
        <div className="gap-cols">
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>Luxury fragrance is still sold as</div>
            <div className="kv serif" style={{ fontSize: 21 }}>One bottle</div>
            <div className="kv serif" style={{ fontSize: 21 }}>One scent</div>
            <div className="kv serif" style={{ fontSize: 21 }}>One fixed identity</div>
          </div>
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>But consumers increasingly want</div>
            <div className="kv serif" style={{ fontSize: 21 }}>Personalization</div>
            <div className="kv serif" style={{ fontSize: 21 }}>Scent layering</div>
            <div className="kv serif" style={{ fontSize: 21 }}>Evolving daily routines</div>
          </div>
        </div>
        <p className="reveal lead" style={{ maxWidth: "42ch", marginTop: 64 }}>
          The opportunity for L&rsquo;Oréal Luxe: build the first connected
          fragrance ecosystem — transforming fragrance from a static product
          into an evolving luxury ritual.
        </p>
      </Sec>

      <Sec no="03" label="The Product System" right="One Device · Four Pods">
        <h2 className="reveal display" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)", maxWidth: "16ch", marginBottom: 64 }}>
          One device. Four pods. Infinite compositions.
        </h2>
        <div className="grid-2" style={{ marginBottom: 90 }}>
          {SYSTEM.map((s) => (
            <div key={s.n} className="reveal seg-card" style={{ paddingLeft: 0, borderLeft: "none" }}>
              <div className="serif" style={{ fontSize: 40, marginBottom: 16 }}>{s.n}</div>
              <div className="micro" style={{ marginBottom: 12 }}>{s.title}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: "48ch", opacity: 0.72 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="gap-cols" style={{ alignItems: "start" }}>
          <div>
            <div className="reveal micro" style={{ opacity: 0.55, marginBottom: 20 }}>Tech features</div>
            <div className="reveal micro" style={{ lineHeight: 2.2, maxWidth: 720, opacity: 0.8 }}>
              AI fragrance engine &middot; Aluminium device &middot; NFC pod recognition &middot;
              Bluetooth connected app &middot; USB-C rechargeable &middot; Device 210 g, 120 &times; 70 &times; 22 mm &middot;
              Pod 14 g / 8 ml
            </div>
            <div className="stat-grid-3" style={{ marginTop: 64, gridTemplateColumns: "1fr", gap: 32 }}>
              <Stat v="€199–349" l="L’Accordeur device" />
              <Stat v="€39–69" l="Signature fragrance pods" />
              <Stat v="€29–59" l="Accord pods" />
            </div>
          </div>
          <div data-parallax="0.05" className="reveal case-figure" style={{ aspectRatio: "3 / 4", maxWidth: 420, justifySelf: "end", width: "100%" }}>
            <img src="/work/ysl-atomizer.jpg" alt="L’Accordeur daily scent atomizer" className="img-cover" />
          </div>
        </div>
      </Sec>

      <Sec no="04" label="The Business Case" right="Connected Ecosystem Economics">
        <p className="reveal lead" style={{ maxWidth: "44ch", marginBottom: 64 }}>
          Launching L&rsquo;Accordeur requires an estimated €12M investment to
          develop the connected device, AI scent engine and refillable
          fragrance ecosystem.
        </p>
        <div className="stat-grid" style={{ marginBottom: 90 }}>
          {ALLOCATION.map((a) => (
            <Stat key={a.v} v={a.v} l={a.l} />
          ))}
        </div>
        <div className="reveal micro" style={{ opacity: 0.55, marginBottom: 20 }}>Three-year scale-up</div>
        <div className="card-grid" style={{ marginBottom: 90 }}>
          {SCALE.map((s) => (
            <div key={s.n} className="reveal seg-card">
              <div className="micro" style={{ opacity: 0.55, marginBottom: 12 }}>{s.n}</div>
              <h3 className="serif" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", marginBottom: 20 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.72 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="reveal lead" style={{ maxWidth: "44ch", marginBottom: 64 }}>
          A +1% conversion uplift across 3,000 stores within a €60B prestige
          fragrance market could generate tens of millions in incremental
          annual revenue — with 6–8 pods consumed per user per year, and
          long-term consumer scent insights enabling personalization at scale.
        </p>
        <p className="reveal serif" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", lineHeight: 1.25, maxWidth: "30ch" }}>
          &ldquo;Hardware drives adoption. Pods drive recurring revenue. Data
          drives long-term value.&rdquo;
        </p>
      </Sec>

      <CaseFooter pdf="/decks/laccordeur-ysl.pdf" next="/work/chaumet" nextLabel="The Next Chapter of Chaumet" />
      <Footer />
    </main>
  );
}
