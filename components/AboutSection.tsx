const FACTS = [
  { k: "Based", v: "Paris, France" },
  { k: "Education", v: "INSEAD MiM ’27" },
  { k: "Focus", v: "Luxury Marketing" },
];

const DELIGHTS = [
  { emo: "🗼", label: "Fontainebleau by week, Paris at heart" },
  { emo: "🐾", label: "Certified rescue-animal softie" },
  { emo: "💎", label: "Will always stop for good jewellery" },
  { emo: "☕", label: "Runs on espresso & a good brand story" },
  { emo: "🗣️", label: "Telugu · Hindi · English · un peu de français" },
];

const EXPERIENCE = [
  { role: "Marketing Strategy Intern", org: "INFYZ Solutions", when: "2024 — 2025" },
  { role: "Marketing & Communications Intern", org: "IETE", when: "2023 — 2024" },
  { role: "Brand Communications Intern", org: "Indian School of Business", when: "2022 — 2023" },
];

const EDUCATION = [
  { role: "Master in Management", org: "INSEAD — ranked #3 globally, FT 2024 & 2025", when: "2025 — 2027" },
];

const CERTS = [
  "Inside LVMH — Certified in luxury strategy & branding · 2025",
  "L’Oréal Brandstorm — Personalised luxury fragrance concept · 2026",
];

export default function AboutSection() {
  return (
    <div className="about-grid">
      <div data-parallax="0.06" className="reveal about-portrait-wrap">
        <div className="about-portrait">
          <img
            src="/work/kavya.jpg"
            alt="Kavya Ramireddy"
            className="img-cover"
            style={{ height: "118%", transform: "translateY(-6%)" }}
          />
        </div>
        <span className="portrait-tag">bonjour, c’est moi ✦</span>
      </div>
      <div>
        <div className="reveal about-hello">
          Hi, I’m Kavya <span className="wave">👋</span>
        </div>
        <p className="reveal lead" style={{ maxWidth: "38ch", marginBottom: 28 }}>
          A marketing &amp; brand communications girl at INSEAD &mdash; happiest
          in the world of luxury fashion, beauty and jewellery, and a little
          obsessed with the storytelling, consumer psychology and brand magic
          that make people fall for them.
        </p>
        <div className="reveal chip-row" style={{ marginBottom: 40 }}>
          {DELIGHTS.map((d) => (
            <span key={d.label} className="chip">
              <span className="emo">{d.emo}</span>
              {d.label}
            </span>
          ))}
        </div>
        <div className="reveal about-facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <div className="micro" style={{ opacity: 0.55, marginBottom: 8 }}>{f.k}</div>
              <div className="serif" style={{ fontSize: 19 }}>{f.v}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 48, maxWidth: 560 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Experience</div>
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="exp-row">
              <div>
                <div className="serif" style={{ fontSize: 18 }}>{e.role}</div>
                <div className="micro" style={{ opacity: 0.6, marginTop: 6 }}>{e.org}</div>
              </div>
              <span className="micro" style={{ opacity: 0.5 }}>{e.when}</span>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 40, maxWidth: 560 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Education</div>
          {EDUCATION.map((e) => (
            <div key={e.role} className="exp-row">
              <div>
                <div className="serif" style={{ fontSize: 18 }}>{e.role}</div>
                <div className="micro" style={{ opacity: 0.6, marginTop: 6 }}>{e.org}</div>
              </div>
              <span className="micro" style={{ opacity: 0.5 }}>{e.when}</span>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 40, maxWidth: 560 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Certifications</div>
          {CERTS.map((c) => (
            <div key={c} className="exp-row">
              <div className="serif" style={{ fontSize: 18 }}>{c}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
