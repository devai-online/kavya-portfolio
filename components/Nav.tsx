"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  // home opens on the wine hero, so start light to avoid a blend flash on first paint
  const [light, setLight] = useState(pathname === "/");

  useEffect(() => {
    const compute = () => {
      const hero = document.querySelector<HTMLElement>(".hero--wine");
      if (!hero) {
        setLight(false);
        return;
      }
      const r = hero.getBoundingClientRect();
      // the nav band sits at the very top — light while the wine hero covers it
      setLight(r.top <= 34 && r.bottom > 34);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [pathname]);

  return (
    <nav className={`nav${light ? " nav-light" : ""}`}>
      <Link href="/" className="serif" style={{ fontSize: 17, letterSpacing: "0.02em" }}>
        Kavya
      </Link>
      <div className="nav-links">
        <Link href="/work" className="micro">Work</Link>
        <Link href="/about" className="micro">About</Link>
        <Link href="/vision" className="micro">Vision</Link>
        <Link href="/contact" className="micro">Contact</Link>
      </div>
    </nav>
  );
}
