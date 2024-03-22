import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <NavLink
        exact
        to="/"
        className="nav__title"
        activeClassName="activeLink"
        style={{ textDecoration: 'none' }}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className="nav__title"
        activeClassName="activeLink"
        style={{ textDecoration: 'none' }}
      >
        A propos
      </NavLink>
      <NavLink
        to="/projects"
        className="nav__title"
        activeClassName="activeLink"
        style={{ textDecoration: 'none' }}
      >
        Projets
      </NavLink>
      <NavLink
        to="/contact"
        className="nav__title"
        activeClassName="activeLink"
        style={{ textDecoration: 'none' }}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Nav;
