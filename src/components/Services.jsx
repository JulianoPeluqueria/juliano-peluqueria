import "../styles/services-styles.css";
import service1 from "../assets/portada-juliano-fb-cortada.jpg";
import service2 from "../assets/services-2.jpg";
import service3 from "../assets/service-3.jpg";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Servicios</h2>
      <div className="services-grid">
        <div
          className="service-card"
          style={{ backgroundImage: `url(${service1})` }}
        >
          <div className="service-name">Corte</div>
        </div>
        <div
          className="service-card"
          style={{ backgroundImage: `url(${service2})` }}
        >
          <div className="service-name">Coloración</div>
        </div>
        <div
          className="service-card"
          style={{ backgroundImage: `url(${service3})` }}
        >
          <div className="service-name">Peinado</div>
        </div>
      </div>
    </section>
  );
}

export default Services;
