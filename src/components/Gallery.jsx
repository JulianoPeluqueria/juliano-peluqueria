import "../styles/gallery-styles.css";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import gallery9 from "../assets/gallery-9.jpg";
import gallery10 from "../assets/gallery-10.jpg";
import gallery11 from "../assets/gallery-11.jpg";
import gallery12 from "../assets/gallery-12.jpg";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galería de Estilos</h2>
      <div className="gallery-grid">
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery1})` }}
        >
          <p></p>
        </div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery2})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery3})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery4})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery5})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery6})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery7})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery8})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery9})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery10})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery11})` }}
        ></div>
        <div
          className="gallery-item"
          style={{ backgroundImage: `url(${gallery12})` }}
        ></div>
      </div>
    </section>
  );
}

export default Gallery;
