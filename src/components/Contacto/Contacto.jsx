import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contacto.css';

const Contacto = () => {
  // Estado centralizado para el formulario (Formulario Controlado)
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviando, setEnviando] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario((estadoActual) => ({
      ...estadoActual,
      [name]: value
    }));
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      await Swal.fire({
        title: 'Configuración pendiente',
        text: 'Configura las variables de EmailJS para poder enviar el mensaje.',
        icon: 'error'
      });
      return;
    }

    setEnviando(true);
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor, espera un momento.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const parametrosPlantilla = {
        ...formulario,
        from_name: formulario.nombre,
        from_email: formulario.email,
        reply_to: formulario.email,
        message: formulario.mensaje
      };

      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        parametrosPlantilla,
        VITE_EMAILJS_PUBLIC_KEY
      );
      setFormulario({ nombre: '', email: '', mensaje: '' });
      await Swal.fire({
        title: 'Drag me!',
        icon: 'success',
        draggable: true
      });
    } catch (error) {
      const mensajeError = error instanceof Error
        ? error.message
        : error && typeof error === 'object' && 'text' in error && typeof error.text === 'string'
          ? error.text
          : 'Inténtalo de nuevo más tarde.';

      await Swal.fire({
        title: 'No se pudo enviar',
        text: mensajeError,
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        <h2 className="section-title">Trabajemos Juntos</h2>
        <div className="contacto-grid">

          {/* =======================================
              COLUMNA IZQUIERDA: INFORMACIÓN
              ======================================= */}
          <div className="contacto-info">
            <h3 className="info-title">Ponte en Contacto</h3>
            <p className="info-desc">
              ¿Tienes un proyecto en mente o necesitas ayuda para automatizar tus flujos de trabajo?<br />
              Me encantaría escucharte.
            </p>

            <div className="info-items">
              {/* Ítem Email */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Email</span>
                  <a className="item-text contact-link" href="mailto:eliotmv.12@gmail.com">eliotmv.12@gmail.com</a>
                </div>
              </div>

              {/* Ítem Teléfono */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Teléfono</span>
                  <a className="item-text contact-link" href="tel:+51983486634">983-486-634</a>
                </div>
              </div>

              {/* Ítem Ubicación */}
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="item-label">Ubicación</span>
                  <p className="item-text">Lima - Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================
              COLUMNA DERECHA: FORMULARIO
              ======================================= */}
          <div className="contacto-form-wrapper">
            <form onSubmit={manejarEnvio} className="contacto-form">

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;