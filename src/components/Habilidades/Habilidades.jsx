import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import databaseDesign from '../../assets/Database-Design.png';
import databaseProgramming from '../../assets/Database-Programming.png';
import javaFundamentals from '../../assets/Java-Fundamentals.png';
import javaFoundations from '../../assets/Java-Fundations.png';
import './Habilidades.css'

const Habilidades  = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const skillsData = [
    { nombre: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { nombre: "CSS", logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { nombre: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { nombre: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { nombre: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
  ];
  const certificatesData = [
    {
      id: 1,
      simbolo: "J",
      titulo: "Java Fundamentals",
      descripcion: "Fundamentos del lenguaje, sintaxis, variables y estructuras de control.",
      imagen: javaFundamentals,
    },
    {
      id: 2,
      simbolo: "J+",
      titulo: "Java Foundations",
      descripcion: "Programación orientada a objetos y construcción de aplicaciones Java.",
      imagen: javaFoundations,
    },
    {
      id: 3,
      simbolo: "SQL",
      titulo: "Database Programming with SQL",
      descripcion: "Consultas, filtros y manipulación de datos relacionales con SQL.",
      imagen: databaseProgramming,
    },
    {
      id: 4,
      simbolo: "DB",
      titulo: "Database Design",
      descripcion: "Modelado de datos y diseño de estructuras para bases relacionales.",
      imagen: databaseDesign,
    },
  ];

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate]);

  return (
    <section id="tech-stack" className="habilidades-section">
      <div className="habilidades-container">
        <div className="habilidades-heading">
          <span className="habilidades-kicker">STACK / 01</span>
          <h2 className="section-title">Tecnologías y habilidades</h2>
          <p className="habilidades-intro">Lenguajes y herramientas que utilizo para crear y compartir proyectos.</p>
        </div>
        <div className="habilidades-grid">
          {skillsData.map((skill) => (
            <article key={skill.nombre} className="skill-card">
              <img className={`skill-logo${skill.nombre === 'CSS' ? ' skill-logo-css' : ''}`} src={skill.logo} alt="" loading="lazy" />
              <h3 className="skill-title">{skill.nombre}</h3>
            </article>
          ))}
        </div>
        <div className="certificados-section">
          <h3 className="certificados-title">Certificados</h3>
          <div className="certificados-grid">
            {certificatesData.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                className="certificate-card"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`Ver certificado: ${certificate.titulo}`}
              >
                <span className="certificate-header">
                  <span className="certificate-icon" aria-hidden="true">{certificate.simbolo}</span>
                  <span className="certificate-badge">VER CERTIFICADO</span>
                </span>
                <span className="certificate-name">{certificate.titulo}</span>
                <span className="certificate-description">{certificate.descripcion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedCertificate && (
        createPortal(
          <div
            className="certificate-modal-backdrop"
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedCertificate(null);
            }}
          >
            <div
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
            >
              <div className="certificate-modal-header">
                <h3 id="certificate-modal-title">{selectedCertificate.titulo}</h3>
                <button
                  type="button"
                  className="certificate-modal-close"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Cerrar certificado"
                >
                  &times;
                </button>
              </div>
              <img
                className="certificate-modal-image"
                src={selectedCertificate.imagen}
                alt={`Imagen del certificado ${selectedCertificate.titulo}`}
              />
            </div>
          </div>,
          document.body,
        )
      )}
    </section>
  );
};

export default Habilidades;