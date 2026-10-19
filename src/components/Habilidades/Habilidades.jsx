import './Habilidades.css'

const Habilidades  = () => {
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
    },
    {
      id: 2,
      simbolo: "J+",
      titulo: "Java Foundations",
      descripcion: "Programación orientada a objetos y construcción de aplicaciones Java.",
    },
    {
      id: 3,
      simbolo: "SQL",
      titulo: "Database Programming with SQL",
      descripcion: "Consultas, filtros y manipulación de datos relacionales con SQL.",
    },
    {
      id: 4,
      simbolo: "DB",
      titulo: "Database Design",
      descripcion: "Modelado de datos y diseño de estructuras para bases relacionales.",
    },
  ];

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
              <article key={certificate.id} className="certificate-card">
                <div className="certificate-header">
                  <div className="certificate-icon" aria-hidden="true">{certificate.simbolo}</div>
                  <span className="certificate-badge">VER CERTIFICADO</span>
                </div>
                <h4 className="certificate-name">{certificate.titulo}</h4>
                <p className="certificate-description">{certificate.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;