import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar el menú hamburguesa en móviles
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Sección del Logo */}
      <div className="navbar-logo">
        <a href="#inicio" aria-label="Ir al inicio">ELIOT MAYTA VERGARAY</a>
      </div>

      {/* Enlaces de Navegación */}
      <div id="navbar-navigation" className={`navbar-links ${isOpen ? "open" : ""}`}>
        {/* Al hacer clic en un enlace en móvil, cerramos el menú */}
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Perfil</a>
        <a href="#tech-stack" onClick={() => setIsOpen(false)}>Tech Stack</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
      </div>

      {/* Ícono de Menú Hamburguesa (Solo visible en móviles) */}
      <button
        type="button"
        className={`navbar-toggle ${isOpen ? "active" : ""}`}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-controls="navbar-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;