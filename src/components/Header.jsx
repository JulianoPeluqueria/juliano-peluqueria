import React from "react";
import logo from "../assets/crop-logo-white.png";
import "../styles/header-styles.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <img className="header-logo" src={logo} alt="Juliano Peluqueria Logo" />
        <nav className="navbar">
          <a href="#about">Acerca de</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
