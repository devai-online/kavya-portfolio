"use client";

import Footer from "@/components/Footer";
import { useReveal } from "@/lib/useReveal";

export default function MoodBoard() {
  useReveal();
  return (
    <main>
      <section className="mb-page">
        <figure className="mb-figure reveal">
          <div className="mb-scroll">
            <img src="/work/moodboard.jpg" alt="Kavya Ramireddy — mood board" />
          </div>
          <figcaption className="mb-scroll-hint">Scroll to explore &rarr;</figcaption>
        </figure>
      </section>
      <Footer />
    </main>
  );
}
