import React from 'react';
import {Link}  from 'react-router-dom';
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
    <ul className="nav-info">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/skills">
        <li>Skills</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="/contact">
        <li>Contact Me</li>
      </Link>
    </ul>
  </nav>
  );
}

export default Nav;