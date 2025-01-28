import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Logo />
        </div>
        
        {/* Hamburger button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            SERVICES
          </NavLink>
          <NavLink to="/project" onClick={() => setIsOpen(false)}>
            PORTFOLIO
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </NavLink>
          <NavLink to="/mentionslegales" onClick={() => setIsOpen(false)}>
            MENTIONS LÉGALES
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;