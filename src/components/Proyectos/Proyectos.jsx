import './Proyectos.css';
import ecolimImage from '../../assets/Ecolim.png';
import tareasImage from '../../assets/Tareas.png';
import tinkercadImage from '../../assets/Tinkercad1.png';
import tinkercadImage2 from '../../assets/Tinkercad2.png';

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
    },
    {
      id: 3,
      imagen: tinkercadImage,
      titulo: "Sistema de Invernadero Inteligente y Gestión de Energía Solar (Smart Greenhouse & Power Optimizer)",
      descripcion: "Proyecto grupal diseñado en Tinkercad que combina la automatización de un invernadero inteligente con la gestión de energía solar, buscando optimizar el uso de los recursos y mantener condiciones adecuadas para el cultivo.",
      tecnologias: ["Tinkercad", "Invernadero inteligente", "Energía solar"],
      linkCodigo: "https://www.tinkercad.com/things/bzm7IMFrNef-copy-of-proyecto-final-arduino/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard&sharecode=G6_hPzMZuR1FHcgaeL7bpWP3veqtnWFClo2y3iXXjr4",
      linkTexto: "Vista Tinkercad"
    },
    {
      id: 4,
      imagen: tinkercadImage2,
      titulo: "Sistema de Monitoreo y Alerta para Áreas Críticas",
      descripcion: "Prototipo grupal diseñado y simulado en Tinkercad para proteger el área de estantes de EMPRESARIOTEC S.A. Un sensor ultrasónico HC-SR04 monitorea la distancia y un Arduino Uno permite generar alertas ante la aproximación de personas u objetos no autorizados.",
      tecnologias: ["Tinkercad", "Arduino Uno", "Sensor HC-SR04", "Sistema de alertas"],
      linkCodigo: "https://www.tinkercad.com/things/3LffR4UseZs/editel?returnTo=%2Fdashboard%2Fdesigns%2Fcircuits&sharecode=oSY8yWEfRvuATorE6iCHFStzh5m00EVJtwGv2L3b6sk",
      linkTexto: "Vista Tinkercad"
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
                  aria-label={`Vista previa de ${proyecto.titulo}`}
                >
                  <svg aria-hidden="true" viewBox="0 0 64 64" fill="none">
                    <rect x="17" y="17" width="30" height="30" rx="4" />
                    <path d="M27 25v14m10-14v14M25 27h14m-14 10h14M17 25h-6m6 7h-6m6 7h-6m42-14h-6m6 7h-6m6 7h-6M25 17v-6m7 6v-6m7 6v-6M25 53v-6m7 6v-6m7 6v-6" />
                  </svg>
                  <span>Vista previa no disponible</span>
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
                    {proyecto.linkTexto ? (
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3h7v7M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    )}
                    {proyecto.linkTexto || "Ver repositorio"}
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