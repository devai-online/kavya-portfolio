"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import VisionSection from "@/components/VisionSection";
import WorkIndex from "@/components/WorkIndex";
import { useReveal } from "@/lib/useReveal";

const NAME = "Kavya Ramireddy";

const PLATES = [
  { cls: "p1 tx-1", tag: "FIG 01", stat: "USD 8.9B", label: "China luxury jewellery · 2025", box: { left: 0, top: "12%", width: "26%", height: "42%" } },
  { cls: "p2 tx-2", tag: "FIG 02", stat: "€12M", label: "Investment case", box: { left: "40%", top: "6%", width: "9%", height: "15%" } },
  { cls: "p3 tx-3", tag: "FIG 03", stat: "3× LTV / CAC", label: "Chaumet · Client strategy", box: { right: 0, top: "18%", width: "33%", height: "52%" } },
  { cls: "p4 tx-4", tag: "FIG 04", stat: "100+", label: "Scent compositions", box: { left: "21%", top: "44%", width: "22%", height: "44%" } },
  { cls: "p5 tx-5", tag: "FIG 05", stat: "MiM ’27", label: "INSEAD", box: { right: "13%", top: "62%", width: "12%", height: "22%" } },
];

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
      qa(".plate").forEach((p, i) => {
        const d = 0.35 + i * 0.11;
        p.style.transition = `clip-path 1.15s var(--wipe) ${d}s`;
        p.style.clipPath = "inset(0 0 0 0)";
        const inner = p.querySelector<HTMLElement>(".plate-img");
        if (inner) {
          inner.style.transition = `transform 1.5s var(--ease) ${d}s`;
          inner.style.transform = "scale(1)";
        }
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
        {PLATES.map((pl) => (
          <div key={pl.tag} className={`plate ${pl.cls}`} style={pl.box}>
            <div className="plate-img">
              <span className="plate-stat">{pl.stat}</span>
              <span className="mono">{pl.label}</span>
            </div>
            <span className="plate-tag">{pl.tag}</span>
          </div>
        ))}

        <h1 className="title">
          {NAME.split("").map((c, i) => (
            <span key={i} className="ch-mask">
              <span className="ch">{c === " " ? " " : c}</span>
            </span>
          ))}
        </h1>

        <div className="tagline">
          <div className="micro">INSEAD MiM &rsquo;27 &mdash; Engineer</div>
          <p className="lead" style={{ fontSize: 21, lineHeight: 1.25, margin: "10px 0 18px" }}>
            Luxury strategy, built with an engineer&rsquo;s rigour.
          </p>
          <Link href="/work" className="micro underlink">Explore work &rarr;</Link>
        </div>

        <div className="cue micro">Scroll</div>
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
