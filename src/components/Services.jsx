import "../styles/services-styles.css";
import service1 from "../assets/portada-juliano-fb-cortada.jpg";
import service2 from "../assets/services-2.jpg";
import service3 from "../assets/service-3.png";

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
        </div>
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service2})` }}
          >
            <div className="service-name">Coloración</div>
          </div>
        </div>
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service3})` }}
          >
            <div className="service-name">Tratamientos</div>
          </div>
        </div>
      </div>

      <div className="price-tables">
        <div className="price-table">
          <h3>Mujeres/Ladies</h3>
          <table>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lavar y peinar desde</td>
                <td>12 €</td>
              </tr>
              <tr>
                <td>Lavar, cortar y peinar (pelo corto)</td>
                <td>25 €</td>
              </tr>
              <tr>
                <td>Lavar, cortar y peinar (pelo largo)</td>
                <td>30 €</td>
              </tr>
              <tr>
                <td>Cambio de estilo</td>
                <td>35 €</td>
              </tr>
              <tr>
                <td>Color, lavar y peinar (pelo corto)</td>
                <td>25 €</td>
              </tr>
              <tr>
                <td>Color sin amoniaco (pelo corto)</td>
                <td>30 €</td>
              </tr>
              <tr>
                <td>Mechas, lavar y peinar (pelo corto)</td>
                <td>30 €</td>
              </tr>
              <tr>
                <td>Mechas Balayage desde</td>
                <td>40 €</td>
              </tr>
              <tr>
                <td>Tratamiento Olaplex desde</td>
                <td>15 €</td>
              </tr>
              <tr>
                <td>Tratamiento Keratina Brasileña desde</td>
                <td>65 €</td>
              </tr>
              <tr>
                <td>Tratamiento Derizante desde</td>
                <td>60 €</td>
              </tr>
              <tr>
                <td>Tratamiento Botox desde</td>
                <td>35 €</td>
              </tr>
              <tr>
                <td>Recogidos desde</td>
                <td>40 €</td>
              </tr>
              <tr>
                <td>Keratina Japonesa desde</td>
                <td>120 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="price-table">
          <h3>Hombres/Gentleman</h3>
          <table>
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corte, lavar y estilo</td>
                <td>14 €</td>
              </tr>
              <tr>
                <td>Color, lavar y estilo desde</td>
                <td>20 €</td>
              </tr>
              <tr>
                <td>Mechas, lavar y estilo desde</td>
                <td>20 €</td>
              </tr>
              <tr>
                <td>Corte a máquina y lavar</td>
                <td>12 €</td>
              </tr>
              <tr>
                <td>Tratamiento Desrizante</td>
                <td>20 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p style={{ color: "#000", fontWeight: "bold" }}>
        -Aclaración: Recuerda que es importante pedir un cita antes de acudir a
        la peluquería. Puedes llamar a este número para consultas:{" "}
        <a
          style={{ color: "#000", textDecoration: "underline" }}
          href="tel:952919418"
          aria-label="Teléfono"
          className="social-icon"
          target="_blank"
        >
          +34 952 91 94 18
        </a>{" "}
        -
      </p>
    </section>
  );
}

export default Services;
