import Link from "next/link";

/**
 * Homepage projects — a fashion-editorial "cover story" block: a giant
 * wordmark behind an editorial hero image, a statement band, and the three
 * project covers as a shoppable-style tile row.
 */
const PROJECTS = [
  {
    href: "/work/chaumet",
    img: "/work/cover-chaumet.jpg",
    title: "The Next Chapter of Chaumet",
    cat: "Brand & Client Strategy",
    pos: "50% 50%",
  },
  {
    href: "/work/balmain",
    img: "/work/cover-balmain.jpg",
    title: "Balmain, after Olivier",
    cat: "Luxury Brand Strategy",
    pos: "50% 35%",
  },
  {
    href: "/work/laccordeur",
    img: "/work/cover-laccordeur.jpg",
    title: "L’Accordeur by YSL",
    cat: "Product Innovation",
    pos: "50% 50%",
  },
];

export default function ProjectCovers() {
  return (
    <section id="projects" className="pf">
      <div className="pf-inner">
        <div className="pf-top">
          <span className="micro">02 &mdash; Projects</span>
          <span className="micro pf-top-mid">Catalogue</span>
          <Link href="/work" className="micro">All work &rarr;</Link>
        </div>

        <div className="pf-wordwrap reveal">
          <h2 className="pf-word">Projects</h2>
        </div>

        <div className="pf-band reveal">
          <span className="pf-band-title">My Work</span>
          <span className="pf-band-sub">
            &ldquo;In order to be irreplaceable,<br />
            one must always be different.&rdquo;
            <em>&mdash; Coco Chanel</em>
          </span>
        </div>

        <div className="pf-tiles">
          {PROJECTS.map((p) => (
            <Link key={p.href} href={p.href} className="reveal pf-tile">
              <img src={p.img} alt={p.title} loading="lazy" style={{ objectPosition: p.pos }} />
              <span className="pf-tile-meta">
                <span className="pf-tile-title">{p.title}</span>
                <span className="pf-tile-cat">{p.cat}</span>
              </span>
            </Link>
          ))}
          <Link href="/work" className="reveal pf-tile pf-tile--cta">
            <span className="pf-cta-label">View<br />all work</span>
            <span className="pf-cta-arrow">&#8599;</span>
          </Link>
        </div>

        <p className="pf-manifesto reveal">
          My work revolves around helping brands stay true to their original
          identity while evolving with the times. I’m interested in finding that
          balance between preserving what makes a brand unique, responding to new
          trends, and understanding the changing expectations of a new generation
          of consumers.
        </p>
      </div>
    </section>
  );
}
