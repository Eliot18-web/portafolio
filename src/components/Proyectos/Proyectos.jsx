import './Proyectos.css';
import ecolimImage from '../../assets/Ecolim.png';
import tareasImage from '../../assets/Tareas.png';

const Proyectos = () => {
  const proyectosData = [
    {
      id: 1,
      imagen: ecolimImage,
      titulo: "Ecolim",
      descripcion: "Proyecto académico desarrollado en equipo con Java y Android Studio. Permite registrar productos y clasificarlos según el tipo de residuo; la información se almacena en SQLite y se gestiona con DB Browser for SQLite.",
      tecnologias: ["Java", "Android Studio", "SQLite", "DB Browser for SQLite"],
      linkCodigo: "https://github.com/DanielaMendoza4/appEcolim"
    },
    {
      id: 2,
      imagen: tareasImage,
      titulo: "App de gestión de tareas",
      descripcion: "Proyecto académico desarrollado en equipo con Java y Android Studio para organizar tareas y dar seguimiento a las actividades pendientes. La información se almacena en SQLite y se gestiona con DB Browser for SQLite.",
      tecnologias: ["Java", "Android Studio", "SQLite", "DB Browser for SQLite"],
      linkCodigo: "https://github.com/DanielaMendoza4/appTareas"
    }
  ];

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <h2 className="section-title text-center">Proyectos Destacados</h2>

        <div className="proyectos-grid">
          {proyectosData.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {proyecto.imagen ? (
                <div className="proyecto-imagen">
                  <img src={proyecto.imagen} alt={`Captura de ${proyecto.titulo}`} />
                </div>
              ) : (
                <div
                  className="proyecto-imagen proyecto-imagen-placeholder"
                  role="img"
                  aria-label="Ilustración de una lista de tareas"
                >
                  <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
                    <rect x="14" y="9" width="36" height="46" rx="4" />
                    <path d="M24 9.5h16v7H24zM22 28l3 3 6-6m4 4h8M22 41l3 3 6-6m4 4h8" />
                  </svg>
                  <span>Gestión de tareas</span>
                </div>
              )}
              <div className="proyecto-contenido">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-desc">{proyecto.descripcion}</p>

                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="proyecto-links">
                  <a href={proyecto.linkCodigo} target="_blank" rel="noopener noreferrer" className="btn-proyecto btn-codigo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Ver repositorio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;