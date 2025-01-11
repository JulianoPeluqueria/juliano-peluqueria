import "../styles/hero-styles.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tu estilo</h1>
        <p>
          "Mi Filosofía es Cuidar tu Pelo y Crear un Look Natural fácil de
          llevar."
          <br />
          Juliano, el arquitecto de tu pelo.
        </p>
        <a href="tel:+123456789" className="cta-button">
          <i className="fas fa-phone"></i> Reserva una cita
        </a>
      </div>
    </section>
  );
}

export default Hero;
