import './Banner.css';
import mifoto from '../../assets/mifoto.jpg';

const Banner = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-content">

        {/* 1. Etiqueta de Estado (Badge) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Disponible para nuevos proyectos
        </div>

        {/* 2. Foto de Perfil Circular */}
        <div className="profile-photo-container">
          <img 
            src={mifoto} 
            alt="Retrato de Eliot Mayta Vergaray" 
            className="profile-photo" 
          />
        </div>

        {/* 3. Título Principal */}
        <h1 className="hero-title">
          ELIOT MAYTA
          <span className="hero-title-last">VERGARAY</span>
        </h1>

        {/* 4. Subtítulo (Rol) */}
        <h2 className="hero-subtitle">
          Estudiante de Ingeniería de Software en SENATI
        </h2>

        {/* 5. Descripción */}
        <p className="hero-description">
          Aprendo creando: diseño y desarrollo páginas web mientras sigo creciendo como futuro ingeniero de software.
        </p>

        {/* 6. Botones de Acción */}
        <div className="hero-buttons">
          <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contacto" className="btn btn-secondary">Contáctame</a>
        </div>

      </div>

      {/* 7. Indicador de Scroll (Flecha animada hacia abajo) */}
      <div className="scroll-indicator">
        ↓
      </div>
    </section>
  );
};

export default Banner;