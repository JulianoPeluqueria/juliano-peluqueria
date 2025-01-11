import "../styles/footer-styles.css";
import logo from "../assets/crop-logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Ubicación</h3>
          <div className="map-container">
            <iframe
              title="Mapa interactivo"
              src="https://www.google.com/maps/embed?pb=...tu_url_de_mapa..."
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <p>Dirección: Calle 123, Ciudad</p>
        </div>

        <div className="footer-column">
          <h3>Redes y contacto</h3>
          <ul className="social-list">
            <li>
              <a href="#" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="tel:+541112345678"
                aria-label="Teléfono"
                className="social-icon"
              >
                <i className="fas fa-phone-alt"></i> Teléfono
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Secciones</h3>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Trayectoria</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#videos">Efecto Juliano</a>
            </li>
            <li>
              <a href="#gallery">Galería</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <img
            className="footer-logo"
            src={logo}
            alt="Juliano Peluqueria Logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
