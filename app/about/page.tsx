"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { Stat } from "@/components/Case";
import { useReveal } from "@/lib/useReveal";

const VALUES = [
  {
    k: "Authenticity",
    v: "A brand should look and feel like itself. I build strategy from the maison’s real identity and codes — never from whatever is trending this season.",
  },
  {
    k: "Curiosity",
    v: "I’m always asking what makes a brand stand out and genuinely connect. The interesting answer usually lives one question deeper than the brief.",
  },
  {
    k: "Craft",
    v: "A brand voice is built sentence by sentence, detail by detail. Taste is in the finishing — and the finishing is the work.",
  },
  {
    k: "Heritage",
    v: "The archive is the method. The strongest ideas re-read a house’s history and carry it forward — reinterpreted, never replaced.",
  },
];

const JOURNEY = [
  "I found marketing at the Indian School of Business, supporting brand communication campaigns that reached 50,000+ alumni, students and corporate stakeholders — and learning that a brand voice is built sentence by sentence, channel by channel.",
  "From communications I moved into strategy: audience insight dashboards across IETE's 70,000-member base, then eleven months at INFYZ Solutions building segmented campaigns across 200+ enterprise accounts, generating 150+ qualified leads and leading go-to-market and customer journey strategy across 8 markets.",
  "Now I'm at INSEAD — ranked #3 globally for the Master in Management — studying Value Creation in Luxury, Consumer Behaviour and Brand Strategy, certified through Inside LVMH, and competing in L'Oréal Brandstorm, with the ambition to build my career in luxury marketing in Paris.",
];

const IMPACT = [
  { v: "~35%", l: "Increase in campaign engagement across 200+ enterprise accounts" },
  { v: "150+", l: "Qualified leads generated through targeted content and email marketing" },
  { v: "8", l: "Markets covered by go-to-market and customer journey strategy" },
  { v: "5,000+", l: "Community built through branding and communications" },
  { v: "6", l: "Brand partnerships secured through partnership development" },
  { v: "3×", l: "LinkedIn organic reach growth through targeted content" },
];

const SKILLS = [
  "Luxury Brand Strategy",
  "Marketing Communications",
  "Content Strategy & SMM",
  "Consumer Insights & CRM",
  "Integrated Campaign Planning",
  "Digital Marketing & Analytics",
];

const LEADERSHIP = [
  {
    role: "Founder & President",
    org: "Neural Nexus Student Community",
    when: "2024 — 2025",
    note: "Built a fast-growing student community: 40+ member board, 500+ students engaged, 5,000+ followers grown across Instagram and LinkedIn, 6 brand partnerships secured.",
  },
  {
    role: "Head of Logistics & Delegate Experience",
    org: "Model United Nations Conference",
    when: "2023",
    note: "Managed delegate experience for a 300+ delegate conference across 10+ committees, cutting operational costs 20% through vendor negotiations.",
  },
  {
    role: "Emergency Responder & Advocate",
    org: "Blue Cross",
    when: "2022 — 2025",
    note: "Supported 250+ animal rescues and 100+ adoptions through volunteer coordination and local outreach.",
  },
];

const LANGUAGES = "English · Telugu · Hindi · French (beginner)";

const CERTIFICATIONS = [
  { name: "Inside LVMH — Certified", issuer: "LVMH", when: "2025" },
  { name: "Master in Management (MiM)", issuer: "INSEAD", when: "Class of ’27" },
  { name: "L’Oréal Brandstorm", issuer: "L’Oréal", when: "2026" },
  { name: "Value Creation in Luxury", issuer: "INSEAD", when: "2026" },
];

const PRACTICE = [
  { n: "01", title: "The Next Chapter of Chaumet", note: "Brand & client strategy · Greater China", href: "/work/chaumet" },
  { n: "02", title: "Who is Balmain without Olivier?", note: "Luxury brand strategy · Case study", href: "/work/balmain" },
  { n: "03", title: "L’Accordeur by YSL", note: "Product innovation · L’Oréal Brandstorm 2026", href: "/work/laccordeur" },
];

export default function About() {
  useReveal();
  return (
    <main>
      <header className="am-hero" id="about">
        <p className="am-tagline reveal">
          Passionate about <em>luxury strategy</em> &amp; <em>branding</em> —
          curious about what makes a brand stand out, one story at a time.
        </p>

        <div className="am-stage">
          <h1 className="am-bigtitle" aria-hidden="true">About Me</h1>
          <img className="am-cutout reveal" src="/work/kavya-cutout.png" alt="Kavya Ramireddy" />
          <div className="am-bio reveal">
            <p>
              Hi there! I’m <strong>Kavya</strong> — a luxury marketing &amp;
              brand strategist, happiest making heritage maisons feel desirable
              to a new generation.
            </p>
            <p>
              In between moving cities — Paris, New York, Singapore — I’ve found
              the thing I’m truly passionate about: luxury strategy and branding.
              I love fashion, styling and anything creative, and I’m always
              curious about what makes a brand stand out and genuinely connect
              with people.
            </p>
            <p>
              My work reads a brand from the inside out — its codes, its archive,
              its clients — and turns that into strategy that feels timeless and
              modern at once. From Chaumet in China to Balmain after Olivier, I
              care about the idea that still holds three months after the launch.
            </p>
            <p>
              Outside the work, I’m 80% dog mom, very into my gym and tennis
              sessions, and probably thinking about my next outfit.
            </p>
          </div>
        </div>
      </header>

      <section className="values-section" id="values">
        <div className="values-inner">
          <h2 className="reveal values-heading">My Values</h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.k} className="reveal value-card">
                <h3 className="value-title">{v.k}</h3>
                <p className="value-text">{v.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">The Journey</span>
          <span className="micro">India &rarr; Paris</span>
        </div>
        <div style={{ maxWidth: "62ch" }}>
          {JOURNEY.map((p) => (
            <p key={p.slice(0, 20)} className="reveal lead" style={{ fontSize: 19, marginBottom: 32 }}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Impact</span>
          <span className="micro">What I Bring</span>
        </div>
        <div className="stat-grid-3" style={{ rowGap: 64 }}>
          {IMPACT.map((s) => (
            <Stat key={s.v} v={s.v} l={s.l} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Key Competencies</span>
          <span className="micro">Hard Skills</span>
        </div>
        <div className="stat-grid-3" style={{ rowGap: 40 }}>
          {SKILLS.map((s) => (
            <div key={s} className="reveal rule-top" style={{ paddingTop: 16 }}>
              <div className="serif" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>{s}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 64 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 10 }}>Languages</div>
          <div className="serif" style={{ fontSize: 19 }}>{LANGUAGES}</div>
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Leadership</span>
          <span className="micro">Beyond the R&eacute;sum&eacute;</span>
        </div>
        <div>
          {LEADERSHIP.map((l) => (
            <div key={l.role} className="reveal gap-cols rule-top" style={{ padding: "32px 0" }}>
              <div>
                <div className="serif" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", marginBottom: 8 }}>{l.role}</div>
                <div className="micro" style={{ opacity: 0.6 }}>{l.org} &middot; {l.when}</div>
              </div>
              <p className="cap" style={{ maxWidth: "52ch" }}>{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="resume">
        <div className="reveal sec-row">
          <span className="micro">R&eacute;sum&eacute; &amp; Certifications</span>
          <a href="/kavya-ramireddy-resume.pdf" className="micro" target="_blank" rel="noopener">Download PDF &darr;</a>
        </div>
        <div className="gap-cols" style={{ alignItems: "start" }}>
          <div className="reveal">
            <p className="lead" style={{ fontSize: 19, maxWidth: "40ch", marginBottom: 28 }}>
              A luxury marketing &amp; brand strategist in the making — the full
              story across strategy, communications and consumer insight.
            </p>
            <a href="/kavya-ramireddy-resume.pdf" target="_blank" rel="noopener" className="resume-btn">
              Download r&eacute;sum&eacute; &darr;
            </a>
          </div>
          <div>
            <div className="reveal micro" style={{ opacity: 0.55, marginBottom: 20 }}>Certifications &amp; Education</div>
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="reveal cert-row">
                <span className="serif" style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)" }}>{c.name}</span>
                <span className="micro" style={{ opacity: 0.6 }}>{c.issuer} &middot; {c.when}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="reveal sec-row">
          <span className="micro">Projects</span>
          <Link href="/work" className="micro">All work &rarr;</Link>
        </div>
        <div>
          {PRACTICE.map((w) => (
            <Link key={w.n} href={w.href} className="work-row reveal">
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
