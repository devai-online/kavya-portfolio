"use client";

import Footer from "@/components/Footer";
import { CaseHero, Sec, Stat, CaseFooter } from "@/components/Case";
import { useReveal } from "@/lib/useReveal";

const SEGMENTS = [
  {
    name: "Expressive Gen Z",
    img: "/work/chaumet-bee.jpg",
    stage: "Journey stage — First purchase",
    who: "8–12 million emerging professionals, 20–30, in marketing, media, technology and creative industries across Tier 1 and emerging Tier 2 cities.",
    rows: [
      { k: "Spending", v: "€1,000 – €5,000" },
      { k: "Motivation", v: "Self-expression, milestone celebration, lifestyle participation" },
      { k: "Channels", v: "Social media, KOLs, celebrity ambassadors, travel retail" },
      { k: "Hero product", v: "Bee de Chaumet · Liens" },
    ],
  },
  {
    name: "Career Millennial",
    img: "/work/chaumet-josephine.jpg",
    stage: "Journey stage — Membership",
    who: "4–6 million senior professionals, 30–40, in finance, technology, consulting and creative industries in Tier 1 cities.",
    rows: [
      { k: "Spending", v: "€5,000 – €20,000" },
      { k: "Motivation", v: "Self-achievement, personal milestones, refined lifestyle expression" },
      { k: "Channels", v: "Boutiques, private client events, curated social content, peer recommendation" },
      { k: "Hero product", v: "Joséphine · Bee de Chaumet" },
    ],
  },
  {
    name: "Milestone Woman",
    img: "/work/chaumet-diademe.jpg",
    stage: "Journey stage — Loyal client",
    who: "50–150 thousand entrepreneurs, senior executives, family office principals and cultural patrons, 40–55+, in Tier 1 cities and international destinations.",
    rows: [
      { k: "Spending", v: "€20,000 – €50,000+" },
      { k: "Motivation", v: "Legacy building, family milestones, emotional continuity, meaningful collecting" },
      { k: "Channels", v: "Dedicated client advisors, private events, personal referrals, VIP experiences" },
      { k: "Hero product", v: "High jewellery" },
    ],
  },
];

const CELEBS = [
  { name: "Wang Anyu", seg: "Expressive Gen Z", img: "/work/wang-anyu.jpg" },
  { name: "Xin Zhilei", seg: "Career Millennial", img: "/work/xin-zhilei.jpg" },
  { name: "Guo Jingjing", seg: "Milestone Woman", img: "/work/guo-jingjing.jpg" },
];

const PHASES = [
  { n: "Phase 1", title: "Foundation", items: ["Ambassador launch", "Shanghai exhibition", "KOL activation"] },
  { n: "Phase 2", title: "Conversion", items: ["Exhibition expansion", "Heritage masterclass", "VIC programme launch"] },
  { n: "Phase 3", title: "Institutionalisation", items: ["Permanent exhibition", "Full VIC tiering", "Relationship deepening"] },
];

const METRICS = [
  { g: "Brand", items: ["Top 3 recall", "Organic mentions", "Cultural visibility"] },
  { g: "Client", items: ["+40% VIC growth", "Self-purchase >35%", "CRM growth"] },
  { g: "Financial", items: ["3× LTV / CAC", "Higher retention", "Revenue growth"] },
];

export default function Chaumet() {
  useReveal();
  return (
    <main>
      <CaseHero
        kicker="01 — Case Study"
        title="The Next Chapter of Chaumet in China"
        sub="A strategic growth framework for the next generation of luxury clients — turning female self-purchase into lifetime loyalty."
        logo="/work/chaumet-logo.png"
        image="/work/chaumet-hero.jpg"
        meta={[
          { k: "Brand", v: "Chaumet · LVMH" },
          { k: "Discipline", v: "Brand & Client Strategy" },
          { k: "Market", v: "Greater China" },
          { k: "Year", v: "2025" },
        ]}
      />

      <Sec no="01" label="Context" right="The Market">
        <p className="reveal lead" style={{ maxWidth: "40ch", marginBottom: 64 }}>
          China remains critical for luxury jewellery, while consumer motivations
          are undergoing structural change.
        </p>
        <div className="stat-grid">
          <Stat v="USD 8.9B" l="China luxury jewellery revenue estimate, 2025" />
          <Stat v="–55%" l="Marriage registrations, 2013 → 2024" />
          <Stat v="60% / 37%" l="Female share of China luxury goods market / self-wear share of jewellery retailer sales" />
          <Stat v="77.3%" l="Laopu Gold customer overlap with LV, Hermès, Cartier, Bvlgari & Tiffany shoppers" />
        </div>
      </Sec>

      <Sec no="02" label="Position" right="Heritage Meets a New Consumer Era">
        <div className="gap-cols">
          <div className="reveal">
            <div data-parallax="0.04" className="case-figure" style={{ aspectRatio: "4 / 5", maxWidth: 380, marginBottom: 32 }}>
              <img src="/work/chaumet-boutique.jpg" alt="Chaumet boutique" className="img-cover" />
            </div>
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>Chaumet today</div>
            <div className="kv"><span className="serif" style={{ fontSize: 19 }}>46 boutiques</span> <span className="cap"> across Greater China</span></div>
            <div className="kv"><span className="serif" style={{ fontSize: 19 }}>31 boutiques</span> <span className="cap"> in Mainland China, 19 cities</span></div>
            <div className="kv"><span className="serif" style={{ fontSize: 19 }}>~1/4</span> <span className="cap"> of the global retail network</span></div>
            <div className="kv"><span className="serif" style={{ fontSize: 19 }}>Tmall Luxury Pavilion</span> <span className="cap"> flagship launched 2024</span></div>
          </div>
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 20 }}>The opportunity</div>
            <div className="kv">
              <div className="serif" style={{ fontSize: 19, marginBottom: 6 }}>Social media drives luxury consumption</div>
              <p className="cap">KOL ecosystems have become key drivers of discovery, trust and purchase consideration.</p>
            </div>
            <div className="kv">
              <div className="serif" style={{ fontSize: 19, marginBottom: 6 }}>Heritage requires cultural relevance</div>
              <p className="cap">Consumers engage most strongly with narratives adapted to contemporary Chinese culture.</p>
            </div>
            <div className="kv">
              <div className="serif" style={{ fontSize: 19, marginBottom: 6 }}>Emerging cities fuel growth</div>
              <p className="cap">Hangzhou, Chengdu, Chongqing and Nanjing are becoming important luxury growth markets beyond tier-one hubs.</p>
            </div>
          </div>
        </div>
      </Sec>

      <Sec no="03" label="Strategic Direction" right="Self-Definition">
        <div className="gap-cols" style={{ alignItems: "center" }}>
          <div>
            <h2 className="reveal display" style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)", marginBottom: 40 }}>
              Self-definition as a global narrative.
            </h2>
            <p className="reveal lead" style={{ maxWidth: "44ch" }}>
              Self-reward and self-expression are increasingly replacing traditional
              gifting and romance-led purchase occasions. Jewellery becomes a symbol
              of personal achievement, self-recognition and individual expression —
              rather than solely romantic milestones.
            </p>
          </div>
          <div data-parallax="0.05" className="reveal case-figure" style={{ aspectRatio: "1 / 1", maxWidth: 460, justifySelf: "end" }}>
            <img src="/work/chaumet-craft.jpg" alt="Chaumet craftsmanship" className="img-cover" />
          </div>
        </div>
      </Sec>

      <Sec no="04" label="Segment Strategy" right="Building Lifetime Client Value">
        <p className="reveal lead" style={{ maxWidth: "44ch", marginBottom: 56 }}>
          Different segments require different engagement models, but all
          contribute to a long-term client development journey.
        </p>
        <div className="reveal rule-top" style={{ marginBottom: 72, paddingTop: 24 }}>
          <img
            src="/work/chaumet-lifecycle.jpg"
            alt="Chaumet customer lifecycle journey"
            style={{ width: "100%", maxWidth: 860, display: "block", border: "1px solid var(--hair)" }}
          />
        </div>
        <div className="card-grid">
          {SEGMENTS.map((s) => (
            <div key={s.name} className="reveal seg-card">
              <div className="case-figure" style={{ aspectRatio: "4 / 3", marginBottom: 24, background: "#fff" }}>
                <img src={s.img} alt={s.rows[3].v} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <div className="micro" style={{ opacity: 0.55, marginBottom: 10 }}>{s.stage}</div>
              <h3 className="serif" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", marginBottom: 14 }}>{s.name}</h3>
              <p className="cap" style={{ marginBottom: 20 }}>{s.who}</p>
              {s.rows.map((r) => (
                <div key={r.k} className="kv">
                  <div className="micro" style={{ opacity: 0.55, marginBottom: 4 }}>{r.k}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.5 }}>{r.v}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Sec>

      <Sec no="05" label="Celebrity Strategy" right="Awareness & Demand">
        <h2 className="reveal display" style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)", maxWidth: "18ch", marginBottom: 56 }}>
          Celebrity as an engine of awareness and demand.
        </h2>
        <div className="stat-grid-3">
          {CELEBS.map((c) => (
            <div key={c.name} className="reveal">
              <div className="case-figure" style={{ aspectRatio: "3 / 4", marginBottom: 18 }}>
                <img src={c.img} alt={c.name} className="img-cover" style={{ objectPosition: "50% 20%" }} />
              </div>
              <div className="serif" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", marginBottom: 6 }}>{c.name}</div>
              <div className="micro" style={{ opacity: 0.6 }}>{c.seg}</div>
            </div>
          ))}
        </div>
      </Sec>

      <Sec no="06" label="Roadmap" right="From Awareness to Long-Term Value">
        <div className="card-grid" style={{ marginBottom: 90 }}>
          {PHASES.map((p) => (
            <div key={p.n} className="reveal seg-card">
              <div className="micro" style={{ opacity: 0.55, marginBottom: 12 }}>{p.n}</div>
              <h3 className="serif" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", marginBottom: 20 }}>{p.title}</h3>
              {p.items.map((it) => (
                <div key={it} className="kv" style={{ fontSize: 14 }}>{it}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="reveal micro" style={{ opacity: 0.55, marginBottom: 20 }}>Success metrics</div>
        <div className="stat-grid-3">
          {METRICS.map((m) => (
            <div key={m.g} className="reveal">
              <div className="micro" style={{ marginBottom: 12 }}>{m.g}</div>
              {m.items.map((it) => (
                <div key={it} className="kv serif" style={{ fontSize: 19 }}>{it}</div>
              ))}
            </div>
          ))}
        </div>
      </Sec>

      <Sec no="07" label="Defining the Next Chapter" right="Reposition · Recruit · Retain">
        <div className="stat-grid-3" style={{ marginBottom: 90 }}>
          <Stat v="Reposition" l="Own earned female distinction" />
          <Stat v="Recruit" l="Make entry jewellery the first step of lifetime client development" />
          <Stat v="Retain" l="Build loyalty through recognition, access and belonging" />
        </div>
        <div className="gap-cols" style={{ alignItems: "center" }}>
          <p className="reveal serif" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", lineHeight: 1.25, maxWidth: "30ch" }}>
            &ldquo;In China&rsquo;s next chapter of luxury consumption, heritage will
            remain the foundation, but relevance will define growth.&rdquo;
          </p>
          <div data-parallax="0.05" className="reveal case-figure" style={{ aspectRatio: "16 / 9", justifySelf: "end", width: "100%", maxWidth: 520 }}>
            <img src="/work/chaumet-tiara.jpg" alt="Chaumet high jewellery tiara" className="img-cover" />
          </div>
        </div>
      </Sec>

      <CaseFooter pdf="/decks/chaumet.pdf" next="/work/laccordeur" nextLabel="L’Accordeur by YSL" />
      <Footer />
    </main>
  );
}
