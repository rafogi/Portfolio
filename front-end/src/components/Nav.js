import React from 'react';
import {NavLink}  from 'react-router-dom';
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
    <ul className="nav-info">
      <NavLink exact={true} to="/" activeClassName="nav-info-clicked">
        <li>Home</li>
      </NavLink>
      <NavLink exact={true} to="/skills" activeClassName="nav-info-clicked">
        <li>Skills</li>
      </NavLink>
      <NavLink exact={true} to="/projects" activeClassName="nav-info-clicked">
        <li>Projects</li>
      </NavLink>
      <NavLink exact={true} to="/contact" activeClassName="nav-info-clicked">
        <li>Contact Me</li>
      </NavLink>
    </ul>
  </nav>
  );
}

export default Nav;