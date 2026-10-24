import { useEffect } from "react";
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
  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress span");
    const navbar = document.querySelector<HTMLElement>(".navbar");
    const pointerAura = document.querySelector<HTMLElement>(".pointer-aura");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress) progress.style.transform = `scaleX(${amount})`;
      navbar?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    if (!reducedMotion) {
      const targets = document.querySelectorAll<HTMLElement>(
        ".section-heading, .featured-project, .experience-entry, .education-profile, .skill-group, .small-project, .contact-card, .certification-card"
      );
      targets.forEach((target, index) => {
        target.classList.add("motion-reveal");
        target.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 75}ms`);
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
      targets.forEach((target) => observer.observe(target));

      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
      const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = (entry.target as HTMLElement).id;
            navLinks.forEach((link) => {
              if (link.hash === `#${activeId}`) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
        });
      }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
      sections.forEach((section) => navObserver.observe(section));

      const onPointerMove = (event: PointerEvent) => {
        if (pointerAura && event.pointerType === "mouse") {
          pointerAura.style.setProperty("--pointer-x", `${event.clientX}px`);
          pointerAura.style.setProperty("--pointer-y", `${event.clientY}px`);
          pointerAura.classList.add("is-active");
        }
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      return () => {
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("pointermove", onPointerMove);
        observer.disconnect();
        navObserver.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="pointer-aura" aria-hidden="true" />
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