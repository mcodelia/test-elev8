const footerLinks = [
  "Crear una marca",
  "Diseñar un sitio web",
  "Automatizar procesos",
  "Implementar inteligencia artificial",
  "Renovar un espacio físico",
  "Necesito una solución integral",
];

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="wrap">
        <h2>
          Elev8
          <br />
          crea sistemas que elevan negocios.
        </h2>
        <a className="btn footer-cta" href="mailto:hello@elev8.cl">
          Hablemos del próximo proyecto
        </a>

        <div className="footer-grid">
          <div className="footer-note">
            <p>
              No importa por dónde empiece tu proyecto. Nuestro trabajo es
              conectar estrategia, creatividad, tecnología y ejecución para
              construir una solución coherente.
            </p>
            <small>
              Santiago, Chile
              <br />
              hello@elev8.cl
            </small>
          </div>

          <div>
            <h3>¿Qué necesitas resolver?</h3>
            <nav className="footer-index" aria-label="Accesos rápidos">
              {footerLinks.map((link) => (
                <a href="#" key={link}>
                  <strong>{link}</strong>
                  <span aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
