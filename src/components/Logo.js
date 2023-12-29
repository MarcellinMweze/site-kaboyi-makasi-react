import React from "react";
import logo from "../assets/images/Logo.jpeg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="Logo de la Société" />
      </NavLink>
      <span>
        <strong>KABOYI MAKASI ENGINEERING SARL</strong>
      </span>
    </div>
  );
};

export default Logo;
