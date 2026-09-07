const LINKEDIN = "https://www.linkedin.com/in/kavyaramireddy9/";
const EMAIL = "kavyaramireddy9@gmail.com";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <a href={`mailto:${EMAIL}`} className="reveal footer-big">
        {EMAIL} &rarr;
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
