import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* The anchor tag wraps the logo div */}
      <a href="#hero" className="logo-link">
        <div className="logo">DOKALA SARATH SANTHOSH</div>
      </a>
      <input
        type="checkbox"
        id="menu-toggle"
        checked={menuOpen}
        onChange={toggleMenu}
        style={{ display: 'none' }}
      />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;