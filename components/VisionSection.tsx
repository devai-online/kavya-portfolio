const VISION_LINES = ["Heritage is", "the foundation.", "Relevance", "defines growth."];

const PRINCIPLES = [
  { n: "I", title: "Rigour", text: "Strategy built on data, segments and unit economics — not taste alone." },
  { n: "II", title: "Relevance", text: "Heritage earns attention only when it speaks the client’s culture. Narratives adapted, never diluted." },
  { n: "III", title: "Lifetime", text: "The first purchase is the beginning of the relationship. Every touchpoint designed for loyalty, not the season." },
];

export default function VisionSection() {
  return (
    <>
      <div className="serif" style={{ maxWidth: "16ch", fontSize: "clamp(2.6rem, 8.5vw, 9rem)", lineHeight: 0.98, letterSpacing: "-0.02em", marginBottom: 96 }}>
        {VISION_LINES.map((ln) => (
          <span key={ln} className="vision-mask">
            <span className="vision-line">{ln}</span>
          </span>
        ))}
      </div>
      <div className="vision-grid">
        {PRINCIPLES.map((p) => (
          <div key={p.n} className="reveal">
            <div className="serif" style={{ fontSize: 40, marginBottom: 16 }}>{p.n}</div>
            <div className="micro" style={{ marginBottom: 12 }}>{p.title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: "34ch", opacity: 0.72 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
