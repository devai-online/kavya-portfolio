const FACTS = [
  { k: "Passion", v: "Luxury Strategy & Branding" },
  { k: "Education", v: "INSEAD MiM ’27" },
  { k: "Currently", v: "Between Paris & the world" },
];

const DELIGHTS = [
  { emo: "🐾", label: "80% dog mom" },
  { emo: "🎾", label: "Gym & tennis, on repeat" },
  { emo: "👗", label: "Always planning the next outfit" },
  { emo: "✈️", label: "Paris → New York → Singapore" },
  { emo: "💎", label: "Luxury strategy & branding nerd" },
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
        <p className="reveal lead" style={{ maxWidth: "40ch", marginBottom: 18 }}>
          In between moving cities from Paris to New York to Singapore, if
          there&rsquo;s one thing I&rsquo;ve found I&rsquo;m truly passionate
          about, it&rsquo;s luxury strategy and branding.
        </p>
        <p className="reveal" style={{ maxWidth: "44ch", fontSize: 16, lineHeight: 1.6, opacity: 0.78, marginBottom: 16 }}>
          I love fashion, styling and anything creative, and I&rsquo;m always
          curious about what makes a brand stand out and connect with people.
        </p>
        <p className="reveal" style={{ maxWidth: "44ch", fontSize: 16, lineHeight: 1.6, opacity: 0.78, marginBottom: 28 }}>
          Outside of that, I&rsquo;m 80% dog mom, very into my gym and tennis
          sessions, and probably thinking about my next outfit.
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
