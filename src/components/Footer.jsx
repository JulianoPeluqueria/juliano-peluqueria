import "../styles/footer-styles.css";
import logo from "../assets/crop-logo-white.png";
import logo2 from "../assets/new-logo-white.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Ubicación</h3>
          <div className="map-container">
            <iframe
              title="Mapa interactivo"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d200.15679542868978!2d-4.501524178567876!3d36.6141394191943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDM2JzUwLjkiTiA0wrAzMCcwNC45Ilc!5e0!3m2!1ses-419!2sar!4v1736797937083!5m2!1ses-419!2sar"
              width="90%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <p>
            Dirección: Calle Chiriva nro 15 bajos, Torremolinos-Málaga, España
          </p>
        </div>

        <div className="footer-column">
          <h3>Redes y contacto</h3>
          <ul className="social-list">
            <li>
              <a
                href="https://www.facebook.com/Julianopeluqueria"
                aria-label="Facebook"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/julianopeluqueria/"
                aria-label="Instagram"
                className="social-icon"
                target="_blank"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="tel:952919418"
                aria-label="Teléfono"
                className="social-icon"
                target="_blank"
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
              <a href="/">Hero</a>
            </li>
            <li>
              <a href="#about">Acerca de mi</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#videos">#EfectoJuliano</a>
            </li>
            <li>
              <a href="#gallery">Galería</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <a href="#top">
            <img
              className="footer-logo"
              src={logo2}
              alt="Juliano Peluqueria Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
