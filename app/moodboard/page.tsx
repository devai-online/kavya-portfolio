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

        <div className="mb-note reveal">
          <p className="mb-note-lead">Luxury, to me, is richness in the details.</p>
          <p>
            The leopard represents quiet confidence and effortless elegance. Red
            speaks to royalty, opulence and a sense of power.
          </p>
          <p>
            I’m drawn to Zardozi style embroidery for the richness of its
            metallic detailing and the craftsmanship behind every motif. It
            represents the kind of luxury I admire, where beauty comes from
            patience, detail and skill.
          </p>
          <p>
            The marble palace architecture represents another side of luxury to
            me, grandeur, scale and timelessness, where every surface and detail
            feels intentional.
          </p>
          <p>
            And then there is Ramesh Gorjala’s artwork, which brings together
            Indian mythology, intricate detail and contemporary expression. It
            reminds me that luxury can also be about storytelling, taking
            something deeply rooted in tradition and seeing it through a new
            perspective.
          </p>
          <p>
            Together, these elements reflect how I naturally see luxury: bold,
            intricate, regal and deeply rooted in craftsmanship.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
