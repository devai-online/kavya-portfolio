"use client";

import { useEffect } from "react";
import Link from "next/link";

const WORKS = [
  { n: "01", title: "The Next Chapter of Chaumet", cat: "Brand Strategy", year: "2025", href: "/work/chaumet", img: "/work/chaumet-hero.jpg", pos: "50% 25%" },
  { n: "02", title: "L’Accordeur by YSL", cat: "Product Innovation", year: "2026", href: "/work/laccordeur", img: "/work/ysl-hero.jpg", pos: "50% 50%" },
];

export default function WorkIndex() {
  useEffect(() => {
    // Cursor-following typographic preview + row shift on hover.
    // Position and scale are one lerped transform per frame — no left/top
    // layout work.
    const preview = document.querySelector<HTMLElement>(".work-preview");
    let px = 0, py = 0, ptx = 0, pty = 0, ps = 0.9, pts = 0.9, praf = 0, shown = false;
    const pmove = (e: MouseEvent) => { ptx = e.clientX; pty = e.clientY; };
    document.addEventListener("mousemove", pmove);
    const ploop = () => {
      px += (ptx - px) * 0.12;
      py += (pty - py) * 0.12;
      ps += (pts - ps) * 0.14;
      if (preview) {
        preview.style.transform = `translate3d(${px}px,${py}px,0) translate(-50%,-50%) scale(${ps})`;
      }
      praf = requestAnimationFrame(ploop);
    };
    ploop();
    const rows = Array.from(document.querySelectorAll<HTMLElement>(".work-row"));
    rows.forEach((rowEl) => {
      const title = rowEl.querySelector<HTMLElement>(".work-title");
      rowEl.addEventListener("mouseenter", () => {
        if (preview) {
          if (!shown) { px = ptx; py = pty; shown = true; } // no fly-in from 0,0
          preview.querySelectorAll<HTMLElement>("img").forEach((img) => {
            img.style.display = img.dataset.img === rowEl.dataset.img ? "block" : "none";
          });
          preview.style.opacity = "1";
          pts = 1;
        }
        if (title) title.style.transform = "translateX(28px)";
      });
      rowEl.addEventListener("mouseleave", () => {
        if (preview) {
          preview.style.opacity = "0";
          pts = 0.9;
        }
        if (title) title.style.transform = "translateX(0)";
      });
    });
    return () => {
      document.removeEventListener("mousemove", pmove);
      cancelAnimationFrame(praf);
    };
  }, []);

  return (
    <>
      <div>
        {WORKS.map((w) => (
          <Link
            key={w.n}
            href={w.href}
            className="work-row reveal"
            data-img={w.img}
          >
            <span className="micro" style={{ opacity: 0.5, textTransform: "none" }}>{w.n}</span>
            <span className="work-title">{w.title}</span>
            <span className="micro work-cat" style={{ opacity: 0.6 }}>{w.cat}</span>
            <span className="micro" style={{ opacity: 0.6 }}>{w.year}</span>
          </Link>
        ))}
        <div className="rule-top" />
      </div>
      <div className="work-preview">
        {WORKS.map((w) => (
          <img
            key={w.n}
            src={w.img}
            data-img={w.img}
            alt=""
            className="img-cover"
            style={{ display: "none", objectPosition: w.pos }}
          />
        ))}
      </div>
    </>
  );
}
