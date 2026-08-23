"use client";

import Footer from "@/components/Footer";
import { useReveal } from "@/lib/useReveal";

const LINKEDIN = "https://www.linkedin.com/in/kavyaramireddy9/";

export default function Contact() {
  useReveal();
  return (
    <main>
      <header className="case-hero" style={{ paddingBottom: 60 }}>
        <div className="micro" style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
          <span>Contact</span>
          <span>Fontainebleau, FR</span>
        </div>
        <h1 className="case-title">Let&rsquo;s talk.</h1>
        <p className="lead" style={{ maxWidth: "44ch", marginTop: 28 }}>
          Open to conversations on luxury strategy, brand marketing and
          product innovation.
        </p>
      </header>

      <section style={{ padding: "0 32px 150px" }}>
        <div className="reveal rule-top" style={{ paddingTop: 34 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>LinkedIn</div>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="footer-big">
            kavyaramireddy9 &rarr;
          </a>
        </div>
        <div className="reveal rule-top" style={{ paddingTop: 34, marginTop: 56 }}>
          <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Location</div>
          <div className="serif" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            Fontainebleau, &Icirc;le-de-France, France
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
