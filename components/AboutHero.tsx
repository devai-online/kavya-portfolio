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
            Hi there! I’m <strong>Kavya</strong> — a luxury marketing &amp;
            brand strategist, happiest making heritage maisons feel desirable
            to a new generation.
          </p>
          <p>
            In between moving cities — Paris, New York, Singapore — I’ve found
            the thing I’m truly passionate about: luxury strategy and branding.
            I love fashion, styling and anything creative, and I’m always
            curious about what makes a brand stand out and genuinely connect
            with people.
          </p>
          <p>
            My work reads a brand from the inside out — its codes, its archive,
            its clients — and turns that into strategy that feels timeless and
            modern at once. From Chaumet in China to Balmain after Olivier, I
            care about the idea that still holds three months after the launch.
          </p>
          <p>
            Outside the work, I’m 80% dog mom, very into my gym and tennis
            sessions, and probably thinking about my next outfit.
          </p>
        </div>
      </div>
    </header>
  );
}
