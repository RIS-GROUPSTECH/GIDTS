const Hero = ({ onRegister }) => (
  <section className="hero-section" id="home">
    <div className="hero-bubbles" aria-hidden="true">
      <span className="bubble bubble-one" />
      <span className="bubble bubble-two" />
      <span className="bubble bubble-three" />
      <span className="bubble bubble-four" />
    </div>

    <div className="hero-copy">
      <p className="eyebrow"><span className="eyebrow-dot" /> A GHEF global learning initiative</p>
      <h1>Digital skills for a <span>world of possibility.</span></h1>
      <p className="hero-description">
        A free, one-month website development bootcamp helping you turn curiosity into practical skills and ideas into your first projects.
      </p>
      <div className="hero-actions">
        <button className="button-primary" type="button" onClick={onRegister}>
          Start your journey <span aria-hidden="true">↗</span>
        </button>
        <a className="text-link" href="#overview">Explore the programme <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-note">
        <span className="note-line" />
        <span>Beginner friendly <span className="note-separator">·</span> Learn by building</span>
      </div>
    </div>

    <div className="hero-visual">
      <div className="hero-image-frame">
        <img src="/istockphoto-468435098-612x612.jpg" alt="Learners working together on a digital project" />
        <div className="image-caption">
          <span className="caption-icon" aria-hidden="true">✳</span>
          <span><strong>Learn by doing</strong><small>Build skills that travel</small></span>
        </div>
      </div>
      <div className="floating-badge">
        <span className="badge-number">01</span>
        <span>One month<br />to get started</span>
      </div>
      <span className="visual-orbit orbit-one" aria-hidden="true" />
      <span className="visual-orbit orbit-two" aria-hidden="true" />
    </div>
  </section>
)

export default Hero
