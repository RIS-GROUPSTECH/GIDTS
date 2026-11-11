import React from 'react'

const Navbar = ({ onRegister }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar-brand" href="#home" onClick={closeMenu} aria-label="GHEF home">
          <img src="/GHEF Blue Giraffe Tech Logo.png" alt="GHEF" />
          <span>GHEF <span className="brand-divider">/</span> GDITS</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <div id="primary-navigation" className={`navbar-links${isMenuOpen ? ' is-open' : ''}`}>
          <a href="#overview" onClick={closeMenu}>The programme</a>
          <a href="#curriculum" onClick={closeMenu}>Learning journey</a>
          <button className="nav-cta" type="button" onClick={() => { closeMenu(); onRegister() }}>
            Apply now <span aria-hidden="true">↗</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
