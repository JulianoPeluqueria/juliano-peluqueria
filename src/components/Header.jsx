import React from "react";
import logo from "../assets/crop-logo-white.png";
import logo2 from "../assets/logo-blanco.png";
import logo3 from "../assets/new-logo-white.png";
import "../styles/header-styles.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <a href="#top">
          <img
            className="header-logo"
            src={logo3}
            alt="Juliano Peluqueria Logo"
          />
        </a>
        <nav className="navbar">
          <a href="#about">Acerca de mi</a>
          <a href="#services">Servicios</a>
          <a href="#videos">Efecto Juliano</a>
          <a href="#gallery">Galería</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
