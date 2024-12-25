import React from "react";
import logo from "../assets/crop-logo.png";
import "../styles/header-styles.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <img className="header-logo" src={logo} alt="Juliano Peluqueria Logo" />
      </header>
    </>
  );
};

export default Header;
