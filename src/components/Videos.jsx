import "../styles/videos-styles.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import background from "../assets/efecto-juliano.png";

function Videos() {
  const videos = [
    { src: video1, title: "#EfectoJuliano" },
    { src: video2, title: "#EfectoJuliano" },
    { src: video3, title: "#EfectoJuliano" },
    { src: video4, title: "#EfectoJuliano" },
  ];

  return (
    <section id="videos" className="videos-section">
      <h2>Vive el #EfectoJuliano</h2>
      <p
        style={{ fontSize: "1.5rem", fontStyle: "italic", fontWeight: "bold" }}
      >
        ...El Efecto Juliano es una sensación de bienestar contigo mismo y con
        tu pelo...
      </p>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <video
              controls
              muted
              preload="none"
              loading="lazy"
              poster={background}
            >
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta este tipo de vídeos.
            </video>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Videos;
