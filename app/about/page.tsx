"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { useReveal } from "@/lib/useReveal";

const JOURNEY = [
  "I treat every brand claim as a hypothesis — asking what the market data says before deciding what the story should be. That instinct has shaped how I approach marketing from the very start.",
  "At Infyz I spent eleven months turning strategy decks into campaigns that had to survive contact with real customers, and at the Indian School of Business I saw how digital operations quietly decide what a brand can actually deliver.",
  "INSEAD brought me to Fontainebleau — an hour from Paris, and close enough to the maisons to study them properly. Through LVMH Inside and L’Oréal Brandstorm I’ve been building the thing I care most about: growth strategy for heritage brands facing a new generation of clients.",
];

const SKILLS = [
  { k: "Luxury Brand Marketing", v: "Positioning, client segmentation and celebrity strategy for heritage maisons." },
  { k: "Sustainability", v: "Growth cases built to last — refillable ecosystems, longer product life cycles, durable client relationships." },
  { k: "People Management", v: "Leading project teams from research through final pitch." },
];

const PRACTICE = [
  { n: "01", title: "The Next Chapter of Chaumet", note: "Brand & client strategy · Greater China", href: "/work/chaumet" },
  { n: "02", title: "L’Accordeur by YSL", note: "Product innovation · L’Oréal Brandstorm 2026", href: "/work/laccordeur" },
];

export default function About() {
  useReveal();
  return (
    <main>
      <header className="case-hero" style={{ paddingBottom: 60 }}>
        <div className="micro" style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
          <span>About</span>
          <span>The Strategist</span>
        </div>
        <h1 className="case-title">About</h1>
      </header>

      <section style={{ padding: "0 32px 110px" }}>
        <AboutSection />
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">The Journey</span>
          <span className="micro">Data &rarr; Strategy</span>
        </div>
        <div style={{ maxWidth: "62ch" }}>
          {JOURNEY.map((p) => (
            <p key={p.slice(0, 20)} className="reveal lead" style={{ fontSize: 19, marginBottom: 32 }}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Top Skills</span>
          <span className="micro">What I Bring</span>
        </div>
        <div className="stat-grid-3">
          {SKILLS.map((s) => (
            <div key={s.k} className="reveal">
              <div className="serif" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", marginBottom: 12 }}>{s.k}</div>
              <p className="cap" style={{ maxWidth: "34ch" }}>{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">In Practice</span>
          <Link href="/work" className="micro">All work &rarr;</Link>
        </div>
        <div>
          {PRACTICE.map((w) => (
            <Link key={w.n} href={w.href} className="work-row reveal" style={{ gridTemplateColumns: "64px 1fr auto" }}>
              <span className="micro" style={{ opacity: 0.5, textTransform: "none" }}>{w.n}</span>
              <span className="work-title" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>{w.title}</span>
              <span className="micro" style={{ opacity: 0.6 }}>{w.note}</span>
            </Link>
          ))}
          <div className="rule-top" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
