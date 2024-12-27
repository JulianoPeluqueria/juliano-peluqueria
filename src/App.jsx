import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
