import React from "react";
import logo from "../assets/crop-logo-white.png";
import logo2 from "../assets/logo-blanco.png";
import "../styles/header-styles.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <img
          className="header-logo"
          src={logo2}
          alt="Juliano Peluqueria Logo"
        />
        <nav className="navbar">
          <a href="#about">Trayectoria</a>
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#gallery">Efecto Juliano</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
