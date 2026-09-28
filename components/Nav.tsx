"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/about", label: "About Me" },
  { href: "/work", label: "Projects" },
  { href: "/moodboard", label: "Mood Board" },
  { href: "/about#values", label: "Values" },
];
const RESUME = "/kavya-ramireddy-resume.pdf";

export default function Nav() {
  const pathname = usePathname();
  // home opens on the wine hero, so start light to avoid a blend flash on first paint
  const [light, setLight] = useState(pathname === "/");
  const [open, setOpen] = useState(false);

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

  // close the mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav${light ? " nav-light" : ""}${open ? " nav-open" : ""}`}>
        <Link href="/" className="serif nav-logo" style={{ fontSize: 17, letterSpacing: "0.02em" }}>
          Kavya
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="micro">{l.label}</Link>
          ))}
          <a href={RESUME} target="_blank" rel="noopener" className="micro">R&eacute;sum&eacute;</a>
        </div>
        <button
          type="button"
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-drawer${open ? " is-open" : ""}`} onClick={() => setOpen(false)}>
        <div className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-drawer-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href={RESUME} target="_blank" rel="noopener" className="nav-drawer-link" onClick={() => setOpen(false)}>
            R&eacute;sum&eacute;
          </a>
        </div>
      </div>
    </>
  );
}
