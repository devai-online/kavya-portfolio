"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// Ink panel that wipes up over the page on internal link clicks, then
// wipes away once the new route has painted.
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const covering = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (covering.current) { e.preventDefault(); return; }
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank") return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      const [path] = href.split("#");
      if (!path || path === pathname) return;
      e.preventDefault();
      const el = ref.current!;
      covering.current = true;
      el.style.transition = "transform 0.55s var(--wipe)";
      el.style.transform = "translateY(0)";
      setTimeout(() => router.push(href), 560);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname, router]);

  useEffect(() => {
    if (!covering.current) return;
    covering.current = false;
    const el = ref.current!;
    // Two frames so the new page paints under the overlay before it lifts.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.transition = "transform 0.55s var(--wipe)";
        el.style.transform = "translateY(-101%)";
        setTimeout(() => {
          el.style.transition = "none";
          el.style.transform = "translateY(101%)";
        }, 600);
      })
    );
  }, [pathname]);

  return <div ref={ref} className="page-wipe" />;
}
