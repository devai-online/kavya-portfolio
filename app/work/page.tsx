"use client";

import Footer from "@/components/Footer";
import WorkIndex from "@/components/WorkIndex";
import { useReveal } from "@/lib/useReveal";

export default function Work() {
  useReveal();
  return (
    <main>
      <header className="case-hero" style={{ paddingBottom: 60 }}>
        <div className="micro" style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
          <span>Selected Work</span>
          <span>2025 &mdash; 26</span>
        </div>
        <h1 className="case-title">Work</h1>
        <p className="lead" style={{ maxWidth: "44ch", marginTop: 28 }}>
          Strategy and innovation for luxury maisons &mdash; from client
          development frameworks to connected product ecosystems.
        </p>
      </header>
      <section style={{ padding: "0 32px 120px" }}>
        <WorkIndex />
      </section>
      <Footer />
    </main>
  );
}
