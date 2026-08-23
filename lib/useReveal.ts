"use client";

import { useEffect } from "react";

// Scroll-reveal engine ported from the Elias Archive template:
// .reveal rises with sibling stagger, .vision-line does a line-mask rise,
// [data-parallax] drifts on scroll.
export function useReveal() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const vlines = Array.from(document.querySelectorAll<HTMLElement>(".vision-line"));

    if (reduced) {
      els.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
      vlines.forEach((el) => { el.style.transform = "none"; });
      return;
    }

    const rio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = Array.from(el.parentElement?.querySelectorAll(":scope > .reveal") ?? []);
          const d = Math.max(0, sibs.indexOf(el)) * 0.08;
          el.style.transition = `opacity 1s var(--ease) ${d}s, transform 1s var(--ease) ${d}s`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          rio.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => rio.observe(el));

    let vio: IntersectionObserver | undefined;
    const visionRoot = vlines[0]?.closest("section");
    if (visionRoot) {
      vio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            vlines.forEach((l, i) => {
              l.style.transition = `transform 1.1s var(--wipe) ${i * 0.09}s`;
              l.style.transform = "translateY(0)";
            });
            vio?.disconnect();
          });
        },
        { threshold: 0.4 }
      );
      vio.observe(visionRoot);
    }

    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const applyParallax = () => {
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        const rel = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        el.style.transform = `translateY(${rel * -(parseFloat(el.dataset.parallax || "0") * 260)}px)`;
      });
    };
    window.addEventListener("scroll", applyParallax, { passive: true });
    applyParallax();

    return () => {
      rio.disconnect();
      vio?.disconnect();
      window.removeEventListener("scroll", applyParallax);
    };
  }, []);
}
