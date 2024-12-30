import "../styles/about-styles.css";
import julian from "../assets/about-pic.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img className="about-img" src={julian} alt="Julián" />
        <div>
          <h2 className="about-title">Trayectoria</h2>
          <p className="about-paragraph">
            "En estos 30 años de experiencia, he transformado el estilo de
            cientos de clientes con un enfoque único y personalizado."
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            modi accusantium eum ducimus odit alias nihil ipsam commodi maiores
            eius! Officia, commodi sunt provident ipsam totam ducimus expedita
            corrupti alias.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
