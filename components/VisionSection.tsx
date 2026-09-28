const VISION_LINES = ["Heritage is", "the foundation.", "Relevance", "defines growth."];

export default function VisionSection() {
  return (
    <div className="serif" style={{ maxWidth: "16ch", fontSize: "clamp(2.6rem, 8.5vw, 9rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
      {VISION_LINES.map((ln) => (
        <span key={ln} className="vision-mask">
          <span className="vision-line">{ln}</span>
        </span>
      ))}
    </div>
  );
}
