const FACTS = [
  { k: "Based", v: "Fontainebleau, FR" },
  { k: "Education", v: "INSEAD MiM ’27" },
  { k: "Focus", v: "Luxury Strategy" },
];

const EXPERIENCE = [
  { role: "Marketing Strategy Intern", org: "Infyz", when: "2024 — 2025" },
  { role: "Digital Operations Intern", org: "Indian School of Business", when: "2023" },
  { role: "BE Computer Science (AI & ML)", org: "Chaitanya Bharathi Institute of Technology", when: "2021" },
];

const CERTS = ["LVMH Inside — Certificate of Excellence", "L’Oréal Brandstorm 2026"];

export default function AboutSection() {
  return (
    <div className="about-grid">
      <div data-parallax="0.06" className="reveal about-portrait">
        <img
          src="/work/kavya.jpg"
          alt="Kavya Ramireddy"
          className="img-cover"
          style={{ height: "118%", transform: "translateY(-6%)" }}
        />
      </div>
      <div>
        <p className="reveal lead" style={{ maxWidth: "36ch", marginBottom: 40 }}>
          I study how heritage maisons win the next generation of clients &mdash;
          and build the frameworks that turn a first purchase into a lifetime
          relationship.
        </p>
        <div className="reveal about-facts">
          {FACTS.map((f) => (
            <div key={f.k}>
              <div className="micro" style={{ opacity: 0.55, marginBottom: 8 }}>{f.k}</div>
              <div className="serif" style={{ fontSize: 19 }}>{f.v}</div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: 48, maxWidth: 560 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Experience &amp; Education</div>
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
