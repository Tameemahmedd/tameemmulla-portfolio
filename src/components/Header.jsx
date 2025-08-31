import React from 'react';

const Header = () => (
  <header className="site-header">
    <nav className="site-nav">
    <a href="#" className="logo-link">
      <div className="logo">MT</div>
    </a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;