import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Navbar.css";

/**
 * Navigation bar component that displays the logo of the website, a hamburger menu
 * and a set of links to the different pages of the website.
 *
 * The component is responsive and will display the links in a column when the
 * screen size is small enough.
 *
 * The component uses the state hook to keep track of whether the menu is open or not.
 *
 * @returns {JSX.Element} The navbar component.
 */
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

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
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
