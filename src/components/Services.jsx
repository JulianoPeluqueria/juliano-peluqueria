import "../styles/services-styles.css";
import service1 from "../assets/portada-juliano-fb-cortada.jpg";
import service2 from "../assets/services-2.jpg";
import service3 from "../assets/service-3.png";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Servicios</h2>
      <div className="services-grid">
        {/* Corte*/}
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service1})` }}
          >
            <div className="service-name">Corte</div>
          </div>
          <div className="price-table">
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
                  <td>Recogidos desde</td>
                  <td>40 €</td>
                </tr>
                <tr>
                  <td>Corte, lavar y estilo (hombres)</td>
                  <td>14 €</td>
                </tr>
                <tr>
                  <td>Corte a máquina y lavar (hombres)</td>
                  <td>12 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Coloración */}
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service2})` }}
          >
            <div className="service-name">Coloración</div>
          </div>
          <div className="price-table">
            <table>
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
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
                  <td>Color, lavar y estilo desde (hombres)</td>
                  <td>20 €</td>
                </tr>
                <tr>
                  <td>Mechas, lavar y estilo desde (hombres)</td>
                  <td>20 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tratamientos */}
        <div className="service-item">
          <div
            className="service-card"
            style={{ backgroundImage: `url(${service3})` }}
          >
            <div className="service-name">Tratamientos</div>
          </div>
          <div className="price-table">
            <table>
              <thead>
                <tr>
                  <th>Servicio</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
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
                  <td>Keratina Japonesa desde</td>
                  <td>120 €</td>
                </tr>
                <tr>
                  <td>Tratamiento Desrizante (hombres)</td>
                  <td>20 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
