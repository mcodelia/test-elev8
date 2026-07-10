"use client";

import { useLanguage } from "./LanguageProvider";

const footerLinks = [
  "Crear una marca",
  "Diseñar un sitio web",
  "Automatizar procesos",
  "Implementar inteligencia artificial",
  "Renovar un espacio físico",
  "Necesito una solución integral",
];

function projectMailto(projectType: string) {
  const subject = encodeURIComponent(`Proyecto Elev8: ${projectType}`);
  const body = encodeURIComponent(
    `Hola Elev8,\n\nQuiero conversar sobre: ${projectType}.\n\nContexto del proyecto:\n\nNombre:\nEmpresa:\nPlazo ideal:\n\nGracias.`,
  );

  return `mailto:hello@elev8.cl?subject=${subject}&body=${body}`;
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="footer">
      <div className="wrap">
        <h2>
          Elev8
          <br />
          {t("crea sistemas que elevan negocios.")}
        </h2>
        <a
          className="btn footer-cta"
          href="mailto:hello@elev8.cl?subject=Nuevo%20proyecto%20para%20Elev8"
        >
          {t("Hablemos del próximo proyecto")}
        </a>

        <div className="footer-grid">
          <div className="footer-note">
            <p>
              {t(
                "No importa por dónde empiece tu proyecto. Nuestro trabajo es conectar estrategia, creatividad, tecnología y ejecución para construir una solución coherente.",
              )}
            </p>
            <small>
              {t("Santiago, Chile")}
              <br />
              hello@elev8.cl
            </small>
          </div>

          <div>
            <h3>{t("¿Qué necesitas resolver?")}</h3>
            <nav className="footer-index" aria-label={t("Accesos rápidos")}>
              {footerLinks.map((link) => (
                <a href={projectMailto(t(link))} key={link}>
                  <strong>{t(link)}</strong>
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
