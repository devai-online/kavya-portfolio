import Link from "next/link";

export function CaseHero({
  kicker,
  title,
  sub,
  meta,
  logo,
  image,
  imageLogo,
}: {
  kicker: string;
  title: string;
  sub: string;
  meta: { k: string; v: string }[];
  logo?: string;
  image?: string;
  imageLogo?: string;
}) {
  return (
    <header className="case-hero">
      <div className="micro" style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
        <span>{kicker}</span>
        <Link href="/work" className="micro">&larr; Index</Link>
      </div>
      {logo && <img src={logo} alt="" style={{ height: 72, marginBottom: 24, marginLeft: -8 }} />}
      <h1 className="case-title">{title}</h1>
      <p className="lead" style={{ maxWidth: "44ch", marginTop: 28 }}>{sub}</p>
      <div className="case-meta">
        {meta.map((m) => (
          <div key={m.k}>
            <div className="micro" style={{ opacity: 0.55, marginBottom: 8 }}>{m.k}</div>
            <div className="serif" style={{ fontSize: 18 }}>{m.v}</div>
          </div>
        ))}
      </div>
      {image && (
        <div className="reveal" style={{ marginTop: 64, height: "clamp(280px, 45vh, 440px)", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", height: "100%" }}>
            <img
              src={image}
              alt={title}
              style={{ height: "100%", width: "auto", maxWidth: "100%", display: "block", border: "1px solid var(--hair)" }}
            />
            {imageLogo && (
              <img src={imageLogo} alt="" style={{ position: "absolute", right: 20, bottom: 18, height: 48 }} />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export function Sec({
  no,
  label,
  right,
  children,
  id,
}: {
  no: string;
  label: string;
  right?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="section">
      <div className="reveal sec-row">
        <span className="micro">{no} &mdash; {label}</span>
        {right ? <span className="micro">{right}</span> : null}
      </div>
      {children}
    </section>
  );
}

export function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div className="reveal">
      <div className="stat-val">{v}</div>
      <div className="cap" style={{ maxWidth: "30ch" }}>{l}</div>
    </div>
  );
}

export function CaseFooter({ pdf, next, nextLabel }: { pdf: string; next: string; nextLabel: string }) {
  return (
    <section className="section" style={{ paddingBottom: 60 }}>
      <div className="reveal" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "baseline" }}>
        <a href={pdf} target="_blank" rel="noreferrer" className="micro underlink">
          View original deck (PDF) &rarr;
        </a>
        <Link href={next} className="footer-big">
          Next: {nextLabel} &rarr;
        </Link>
      </div>
    </section>
  );
}
