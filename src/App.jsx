
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from  './components/Perfil/Perfil';
import Proyectos from './components/Proyectos/Proyectos';
import Habilidades from './components/Habilidades/Habilidades';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const sections = document.querySelectorAll('main > section, .site-footer');
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
