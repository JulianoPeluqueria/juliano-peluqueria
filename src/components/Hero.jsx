import "../styles/hero-styles.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Juliano Peluquería</h1>
        <p>
          "Mi Filosofía es Cuidar tu Pelo y Crear un Look Natural fácil de
          llevar."
          <br />
          Juliano, arquitecto de tu pelo y alquimista del color.
        </p>
        <a href="tel:952919418" className="cta-button">
          <i style={{ marginRight: "20px" }} className="fas fa-phone"></i>{" "}
          Reserva una cita <br />
          +34 952 91 94 18
        </a>
        <p style={{ fontStyle: "italic", fontSize: "1rem" }}>
          -Es imprescindible solicitar una cita antes de acudir a la peluquería,
          -
        </p>
      </div>
    </section>
  );
}

export default Hero;
