import "../styles/gallery-styles.css";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galería de Imágenes</h2>
      <div className="gallery-grid">
        <div className="gallery-item">Foto 1</div>
        <div className="gallery-item">Foto 2</div>
        <div className="gallery-item">Foto 3</div>
        <div className="gallery-item">Foto 4</div>
      </div>
    </section>
  );
}

export default Gallery;
