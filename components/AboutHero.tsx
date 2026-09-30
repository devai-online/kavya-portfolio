/**
 * Editorial "About Me" hero — big title, cut-out portrait, bio.
 * Shared by the /about page and the home page so they read identically.
 */
export default function AboutHero() {
  return (
    <header className="am-hero" id="about">
      <p className="am-tagline reveal">
        Passionate about <em>luxury strategy</em> &amp; <em>branding</em> —
        curious about what makes a brand stand out, one story at a time.
      </p>

      <div className="am-stage">
        <h1 className="am-bigtitle" aria-hidden="true">About Me</h1>
        <img className="am-cutout reveal" src="/work/kavya-cutout.png" alt="Kavya Ramireddy" />
        <div className="am-bio reveal">
          <p>
            Hi, I am <strong>Kavya Ramireddy</strong> from Hyderabad, India,
            and I am currently pursuing my Master in Management at INSEAD in
            France. I have a background in analytics, and coming from a
            background in Computer Science, I also wanted to better understand
            the business side, which led me down this path.
          </p>
          <p>
            Moving between cities, from Paris to New York to Singapore. I found
            myself developing a strong interest in the luxury, FMCG and beauty
            space. I have worked on various projects, from the Chaumet case
            competition to L’Oréal Brandstorm. With every step I took, I felt an
            immense urge to work in luxury strategy and marketing.
          </p>
          <p>
            Apart from all this, I’m 80% dog mom personality, love lifting heavy
            at the gym, and enjoy styling. I also have an eye for the most unique
            jewellery
          </p>
        </div>
      </div>
    </header>
  );
}
