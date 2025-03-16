import React, { useState } from 'react';
import logo from '../assets/images/logo-removebg.png'; // Import the image
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <img src={logo} alt="Solvaotions Logo" width="40" height="40" loading="eager" />
            <span>Solvaotions</span>
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQs</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


