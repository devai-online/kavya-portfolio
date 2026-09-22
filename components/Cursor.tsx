"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const c = ref.current;
    if (!c) return;
    let cx = 0, cy = 0, tx = 0, ty = 0, raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    document.addEventListener("mousemove", move);
    const loop = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      c.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    const over = (e: MouseEvent) => {
      const hit = (e.target as Element).closest("a, button, .plate, .look, .work-row");
      if (hit) {
        c.style.width = "60px";
        c.style.height = "60px";
        c.style.mixBlendMode = "difference";
        c.style.background = "#fff";
      } else {
        c.style.width = "9px";
        c.style.height = "9px";
        c.style.mixBlendMode = "normal";
        c.style.background = "var(--wine)";
      }
    };
    document.addEventListener("mouseover", over);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor" />;
}
