import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("nav_menu");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");
  };

  return (
    <nav className="liens">
      <ul className={active}>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav_active" : "hover")}
          >
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            className={(nav) => (nav.isActive ? "nav_active" : "hover")}
          >
            A Propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projets"
            className={(nav) => (nav.isActive ? "nav_active" : "hover")}
          >
            Nos Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav_active" : "hover")}
          >
            Nous contacter
          </NavLink>
        </li>
      </ul>
      <div className="toggle">
        <i class="fa-solid fa-bars" onClick={navToggle}></i>
      </div>
    </nav>
  );
};

export default Navigation;
