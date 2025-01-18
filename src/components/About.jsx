import "../styles/about-styles.css";
import julian from "../assets/about-pic.png";
import diploma1 from "../assets/diploma1.jpg";
import diploma2 from "../assets/diploma2.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <img className="about-img" src={julian} alt="Julián" />
        <div>
          <h2 className="about-title">Acerca de mi</h2>
          <p className="about-paragraph">
            ¡Hola! Soy Julián, y llevo más de 30 años dedicándome a lo que más
            me apasiona: cuidar y transformar el cabello de mis clientes. Empecé
            en el año 88, aprendiendo de mi peluquero mientras hacía mi primer
            curso, y desde entonces no he parado de crecer en este mundo. A
            mediados de los 90 me fui a Barcelona, donde trabajé en varias
            peluquerías y, luego de algunos años, abrí la mía propia. Después de
            8 años en Barcelona me mudé a Londres, donde perfeccioné mi técnica
            con cursos de corte, técnicas de coloración, extensiones y muchos
            más. Desde el 2006 estoy en Torremolinos, Málaga, donde abrí Juliano
            Peluquería, un espacio que fui ampliando con los años para ofrecerte
            siempre lo mejor. Mi experiencia, premios y formación son el
            respaldo, pero lo más importante para mí es que salgas de aquí
            sintiéndote espectacular. ¿Te animas a darme la oportunidad de
            cuidar tu cabello?
          </p>
        </div>
      </div>
      <div className="about-diplomas">
        <img className="diploma-img" src={diploma1} alt="Diploma 1" />
        <img className="diploma-img" src={diploma2} alt="Diploma 2" />
      </div>
    </section>
  );
}

export default About;
