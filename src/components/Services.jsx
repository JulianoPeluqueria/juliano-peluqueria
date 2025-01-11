import "../styles/services-styles.css";
import service1 from "../assets/portada-juliano-fb-cortada.jpg";
import service2 from "../assets/services-2.jpg";
import service3 from "../assets/service-3.jpg";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Servicios</h2>
      <div className="services-grid">
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service1})` }}
          >
            <div className="service-name">Corte</div>
          </div>
          <ul className="service-prices">
            <li>Corte clásico: $20</li>
            <li>Corte moderno: $25</li>
            <li>Corte infantil: $15</li>
          </ul>
        </div>
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service2})` }}
          >
            <div className="service-name">Coloración</div>
          </div>
          <ul className="service-prices">
            <li>Coloración completa: $50</li>
            <li>Mechas: $30</li>
            <li>Baño de color: $20</li>
          </ul>
        </div>
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service3})` }}
          >
            <div className="service-name">Tratamientos</div>
          </div>
          <ul className="service-prices">
            <li>Tratamiento hidratante: $40</li>
            <li>Tratamiento fortalecedor: $45</li>
            <li>Tratamiento anti-frizz: $35</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
