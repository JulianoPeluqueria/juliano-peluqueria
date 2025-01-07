import "../styles/footer-styles.css";
import logo from "../assets/crop-logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="Juliano Peluqueria Logo" />
      <div className="footer-socials">
        <a href="#" aria-label="Facebook" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="WhatsApp" className="social-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div>Dirección: Calle 123, Ciudad</div>
    </footer>
  );
}

export default Footer;
