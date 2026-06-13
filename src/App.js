
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Projects from './sections/Projects';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Stats from './sections/Stats';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
