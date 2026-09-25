import Link from "next/link";

/**
 * Homepage project covers. Each card shows the project's actual deck cover
 * artwork — so the work reads as a shelf of covers rather than a list of
 * names. Covers are rasterised from the source decks into /public/work.
 */
const COVERS = [
  {
    href: "/work/chaumet",
    img: "/work/cover-chaumet.jpg",
    title: "The Next Chapter of Chaumet",
    cat: "Brand & Client Strategy",
    year: "2025",
  },
  {
    href: "/work/balmain",
    img: "/work/cover-balmain.jpg",
    title: "Who is Balmain without Olivier?",
    cat: "Luxury Brand Strategy",
    year: "2026",
  },
  {
    href: "/work/laccordeur",
    img: "/work/cover-laccordeur.jpg",
    title: "L’Accordeur by YSL",
    cat: "Product Innovation",
    year: "2026",
  },
];

export default function ProjectCovers() {
  return (
    <div className="covers-grid">
      {COVERS.map((c) => (
        <Link key={c.href} href={c.href} className="reveal cover">
          <div className="cover-frame">
            <img src={c.img} alt={c.title} className="cover-img" loading="lazy" />
          </div>
          <div className="cover-cap">
            <div className="cover-cap-main">
              <span className="cover-name">{c.title}</span>
              <span className="cover-view">View case →</span>
            </div>
            <div className="cover-meta">
              <span>{c.cat}</span>
              <span>{c.year}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
