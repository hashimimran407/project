import React from 'react';
import './header.css';

const Header = () => {

  const goTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-text">
          <span className="logo-highlight">h</span>omyz
        </span>
        <span className="logo-dot"></span>
      </div>

      <nav className="header-nav">
        <a href="#residencies" onClick={goTo('residencies')}>Residencies</a>
        <a href="#value" onClick={goTo('value')}>Our Value</a>
        <a href="#contact-us" onClick={goTo('contact-us')}>Contact Us</a>
        <a href="#get-started" className="get-started-btn" onClick={goTo('get-started')}>
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Header;