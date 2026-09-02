"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { useReveal } from "@/lib/useReveal";

const LINKEDIN = "https://www.linkedin.com/in/kavyaramireddy9/";
const FORMSPREE = "https://formspree.io/f/xljenjpl";

export default function Contact() {
  useReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

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
        <div className="gap-cols rule-top" style={{ paddingTop: 48 }}>
          <div className="reveal">
            <div className="micro" style={{ opacity: 0.55, marginBottom: 32 }}>Write a message</div>
            {status === "sent" ? (
              <p className="lead" style={{ maxWidth: "36ch" }}>
                Thank you &mdash; your message is on its way. I&rsquo;ll reply soon.
              </p>
            ) : (
              <form onSubmit={onSubmit} style={{ maxWidth: 520 }}>
                <label className="field">
                  <span className="micro" style={{ opacity: 0.55 }}>Name</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>
                <label className="field">
                  <span className="micro" style={{ opacity: 0.55 }}>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>
                <label className="field">
                  <span className="micro" style={{ opacity: 0.55 }}>Message</span>
                  <textarea name="message" rows={5} required />
                </label>
                <button type="submit" className="send-btn micro" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
                {status === "error" && (
                  <p className="cap" style={{ marginTop: 16 }}>
                    Something went wrong &mdash; please try again, or reach out on LinkedIn.
                  </p>
                )}
              </form>
            )}
          </div>
          <div>
            <div className="reveal">
              <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>LinkedIn</div>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="footer-big" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}>
                kavyaramireddy9 &rarr;
              </a>
            </div>
            <div className="reveal rule-top" style={{ paddingTop: 34, marginTop: 48 }}>
              <div className="micro" style={{ opacity: 0.55, marginBottom: 14 }}>Location</div>
              <div className="serif" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Fontainebleau, &Icirc;le-de-France, France
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
