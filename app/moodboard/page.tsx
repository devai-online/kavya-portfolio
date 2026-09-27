"use client";

import Footer from "@/components/Footer";
import { useReveal } from "@/lib/useReveal";

type Tile =
  | { type: "img"; src: string; cap?: string }
  | { type: "quote"; text: string }
  | { type: "palette" }
  | { type: "type" };

const TILES: Tile[] = [
  { type: "img", src: "/work/cover-balmain.jpg", cap: "Balmain — the spike vs. the code" },
  { type: "quote", text: "Luxury isn’t sold. It’s longed for." },
  { type: "img", src: "/work/chaumet-tiara.jpg", cap: "Chaumet — the tiara as heritage" },
  { type: "img", src: "/work/xin-zhilei.jpg", cap: "Casting — quiet confidence" },
  { type: "palette" },
  { type: "img", src: "/work/chaumet-craft.jpg", cap: "Métier — the hand behind the house" },
  { type: "img", src: "/work/ysl-atomizer.jpg", cap: "YSL — object as ritual" },
  { type: "img", src: "/work/chaumet-boutique.jpg", cap: "Retail as theatre" },
  { type: "type" },
  { type: "img", src: "/work/wang-anyu.jpg", cap: "Modern muse" },
  { type: "img", src: "/work/chaumet-diademe.jpg", cap: "Diadème — light & line" },
  { type: "quote", text: "The archive is the method." },
  { type: "img", src: "/work/guo-jingjing.jpg", cap: "Ambassadors with meaning" },
  { type: "img", src: "/work/ysl-hero.jpg", cap: "L’Accordeur — infinite scents" },
  { type: "img", src: "/work/practice-brand.jpg", cap: "Brand worlds" },
  { type: "img", src: "/work/chaumet-josephine.jpg", cap: "Joséphine — a house’s first icon" },
];

const SWATCHES = [
  { hex: "#7A1E24", name: "Wine" },
  { hex: "#5E161B", name: "Wine Deep" },
  { hex: "#F4EFE8", name: "Bone" },
  { hex: "#1A1210", name: "Ink" },
  { hex: "#C9A24B", name: "Gilt" },
];

export default function MoodBoard() {
  useReveal();
  return (
    <main>
      <header className="am-hero" style={{ paddingBottom: 24 }}>
        <p className="am-tagline reveal">
          The references, textures &amp; tones behind <em>how I see luxury</em>.
        </p>
        <h1 className="am-bigtitle" style={{ position: "static", whiteSpace: "normal", textAlign: "center", color: "var(--ink)" }}>
          Mood Board
        </h1>
      </header>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="mood-grid">
          {TILES.map((t, i) => {
            if (t.type === "img") {
              return (
                <figure key={i} className="reveal mood-tile mood-img">
                  <img src={t.src} alt={t.cap ?? ""} loading="lazy" />
                  {t.cap && <figcaption className="mood-cap">{t.cap}</figcaption>}
                </figure>
              );
            }
            if (t.type === "quote") {
              return (
                <div key={i} className="reveal mood-tile mood-quote">
                  <span>{t.text}</span>
                </div>
              );
            }
            if (t.type === "palette") {
              return (
                <div key={i} className="reveal mood-tile mood-palette">
                  <div className="mood-mini">Palette</div>
                  <div className="mood-swatches">
                    {SWATCHES.map((s) => (
                      <div key={s.hex} className="mood-swatch">
                        <span className="mood-chip" style={{ background: s.hex }} />
                        <span className="mood-swatch-label">{s.name}<br />{s.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div key={i} className="reveal mood-tile mood-type">
                <div className="mood-mini">Type</div>
                <div className="mood-type-serif">Bodoni Moda</div>
                <div className="mood-type-sub">Display · high-contrast serif</div>
                <div className="mood-type-mono">IBM PLEX MONO — labels</div>
                <div className="mood-type-sans">Inter — body &amp; interface</div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
