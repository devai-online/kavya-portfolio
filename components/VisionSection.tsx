const VISION_LINES = [
  "“In a star brand, you honor",
  "your past and invent your",
  "future at the same time.”",
];

export default function VisionSection() {
  return (
    <div>
      <div className="serif" style={{ maxWidth: "24ch", fontSize: "clamp(1.9rem, 5vw, 5rem)", lineHeight: 1.08, letterSpacing: "-0.01em" }}>
        {VISION_LINES.map((ln) => (
          <span key={ln} className="vision-mask">
            <span className="vision-line">{ln}</span>
          </span>
        ))}
      </div>
      <div className="micro" style={{ marginTop: 30, opacity: 0.6 }}>&mdash; Bernard Arnault</div>
    </div>
  );
}
