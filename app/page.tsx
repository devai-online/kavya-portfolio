"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import WorkIndex from "@/components/WorkIndex";
import { useReveal } from "@/lib/useReveal";

const NAME_LINES = ["Kavya", "Ramireddy"];

const CAPABILITIES = [
  { n: "01", name: "Brand strategy", cls: "tx-1", text: "Positioning heritage maisons for the next generation of luxury clients." },
  { n: "02", name: "Client segmentation", cls: "tx-5", text: "Segment models built on lifetime value, from first purchase to loyal client." },
  { n: "03", name: "Product innovation", cls: "tx-2", text: "Connected products and ecosystems that turn purchases into rituals." },
  { n: "04", name: "Business case", cls: "tx-4", text: "Investment, revenue models and scale-up plans grounded in market data." },
];

export default function Home() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    const q = (s: string) => root.querySelector<HTMLElement>(s);
    const qa = (s: string) => Array.from(root.querySelectorAll<HTMLElement>(s));
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = () => {
      qa(".ch").forEach((ch, i) => {
        ch.style.transition = `transform 1.15s var(--ease) ${i * 0.035}s`;
        ch.style.transform = "translateY(0)";
      });
      qa(".mast-rule").forEach((r, i) => {
        r.style.transition = `transform 1.3s var(--wipe) ${0.3 + i * 0.18}s`;
        r.style.transform = "scaleX(1)";
      });
      qa(".mast-label").forEach((el, i) => {
        el.style.transition = `opacity 0.9s var(--ease) ${0.7 + i * 0.1}s`;
        el.style.opacity = "1";
      });
      [q(".tagline"), q(".cue")].forEach((el, i) => {
        if (!el) return;
        el.style.transition = `opacity 0.9s var(--ease) ${1.1 + i * 0.12}s, transform 0.9s var(--ease) ${1.1 + i * 0.12}s`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    };

    let tick: ReturnType<typeof setInterval> | undefined;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    const loader = document.querySelector<HTMLElement>(".loader");
    const seen = sessionStorage.getItem("kv-loaded");
    if (reduced || seen || !loader) {
      if (loader) loader.style.display = "none";
      reveal();
    } else {
      sessionStorage.setItem("kv-loaded", "1");
      const count = loader.querySelector<HTMLElement>(".loader-count")!;
      const rule = loader.querySelector<HTMLElement>(".loader-rule")!;
      rule.style.transition = "transform 1.5s var(--ease)";
      requestAnimationFrame(() => { rule.style.transform = "scaleX(1)"; });
      let n = 0;
      tick = setInterval(() => {
        n += Math.ceil((100 - n) / 9) || 1;
        if (n >= 100) { n = 100; clearInterval(tick); }
        count.textContent = String(n).padStart(2, "0");
      }, 42);
      t1 = setTimeout(() => {
        loader.style.transition = "transform 1.2s var(--wipe)";
        loader.style.transform = "translateY(-101%)";
        t2 = setTimeout(reveal, 320);
      }, 1700);
    }

    // Capability tiles wipe open on scroll.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          document.querySelectorAll<HTMLElement>(".look").forEach((l, i) => {
            setTimeout(() => {
              const f = l.querySelector<HTMLElement>(".look-frame")!;
              const img = l.querySelector<HTMLElement>(".look-img")!;
              const cap = l.querySelector<HTMLElement>(".look-cap")!;
              f.style.transition = "clip-path 1s var(--wipe)";
              f.style.clipPath = "inset(0 0 0 0)";
              img.style.transition = "transform 1.1s var(--ease)";
              img.style.transform = "scale(1)";
              cap.style.transition = "opacity 0.6s var(--ease) 0.35s";
              cap.style.opacity = "1";
            }, i * 110);
          });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.2 }
    );
    const row = document.querySelector(".ea-row");
    if (row) io.observe(row);

    return () => {
      if (tick) clearInterval(tick);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={heroRef} style={{ position: "relative" }}>
      <div className="loader">
        <div className="loader-count">00</div>
        <div className="loader-rule" />
      </div>

      <header className="hero">
        <div>
          <div className="mast-row">
            <span className="micro mast-label" style={{ opacity: 0 }}>Portfolio</span>
            <span className="micro mast-label" style={{ opacity: 0 }}>Fontainebleau &mdash; MMXXVI</span>
          </div>
          <div className="mast-rule" />
        </div>

        <h1 className="title">
          {NAME_LINES.map((line) => (
            <span key={line} style={{ display: "block" }}>
              {line.split("").map((c, i) => (
                <span key={i} className="ch-mask">
                  <span className="ch">{c}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div>
          <div className="mast-rule" />
          <div className="mast-row">
            <div className="tagline">
              <div className="micro">Fashion &amp; Luxury Marketing &mdash; INSEAD MiM &rsquo;27</div>
              <p className="lead" style={{ fontSize: 21, lineHeight: 1.25, margin: "10px 0 18px" }}>
                Strategy for heritage maisons and the next generation of luxury clients.
              </p>
              <Link href="/work" className="micro underlink">Explore work &rarr;</Link>
            </div>
            <div className="cue micro">Scroll</div>
          </div>
        </div>
      </header>

      <section id="about" style={{ padding: "80px 32px 110px" }}>
        <div className="reveal sec-row rule-top" style={{ paddingTop: 14, marginBottom: 56 }}>
          <span className="micro">01 &mdash; About</span>
          <Link href="/about" className="micro">More &rarr;</Link>
        </div>
        <AboutSection />
      </section>

      <section id="capabilities" className="section" style={{ padding: "80px 32px 96px" }}>
        <div className="sec-row" style={{ marginBottom: 28 }}>
          <div className="micro">02 &mdash; Practice</div>
          <div className="micro">Strategy &times; Craft</div>
        </div>
        <div className="ea-row">
          {CAPABILITIES.map((c) => (
            <article key={c.n} className="look">
              <div className="look-frame">
                <div className={`look-img ${c.cls}`}>
                  <span className="serif" style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", color: "rgba(10,10,10,0.75)" }}>{c.name}</span>
                  <span className="mono" style={{ maxWidth: "24ch" }}>{c.text}</span>
                </div>
              </div>
              <div className="look-cap micro">
                <span>{c.n}</span>
                <span>{c.name}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 110 }}>
        <div className="reveal sec-row" style={{ marginBottom: 24 }}>
          <span className="micro">03 &mdash; Selected Work</span>
          <Link href="/work" className="micro">View all &rarr;</Link>
        </div>
        <WorkIndex />
      </section>

      <section id="vision" className="section" style={{ padding: "110px 32px 130px", overflow: "hidden" }}>
        <div className="reveal sec-row" style={{ marginBottom: 60 }}>
          <span className="micro">04 &mdash; Vision</span>
          <Link href="/vision" className="micro">More &rarr;</Link>
        </div>
        <VisionSection />
      </section>

      <Footer />
    </div>
  );
}
