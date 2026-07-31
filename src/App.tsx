import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Education />
        <Experience />
        <FeaturedProjects />
        <MoreProjects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;