const LINKEDIN = "https://www.linkedin.com/in/kavyaramireddy9/";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        className="reveal footer-big"
      >
        Let&rsquo;s connect &rarr;
      </a>
      <div className="reveal" style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="micro">
          LinkedIn
        </a>
        <span className="micro" style={{ opacity: 0.5 }}>
          &copy; 2026 Kavya Ramireddy
        </span>
      </div>
    </footer>
  );
}
