import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["EST", "Estrategia y crecimiento", "/servicios/strategy-growth.html"],
  ["MAR", "Marca y creatividad", "/servicios/brand-creative.html"],
  ["WEB", "Experiencias digitales", "/servicios/digital-experiences.html"],
  ["IA", "Soluciones inteligentes", "/servicios/smart-solutions.html"],
  ["FIS", "Marca física", "/servicios/physical-brand.html"],
];

const capabilities = [
  {
    mark: "→",
    title: "Estrategia y crecimiento",
    href: "/servicios/strategy-growth.html",
    text: "Define foco, oportunidad y orden de inversión.",
    cta: "Ver estrategia",
  },
  {
    mark: "✦",
    title: "Marca y creatividad",
    href: "/servicios/brand-creative.html",
    text: "Construye identidad, tono, contenido y presencia.",
    cta: "Explorar capacidad",
  },
  {
    mark: "⌁",
    title: "Experiencias digitales",
    href: "/servicios/digital-experiences.html",
    text: "Diseña sitios, interfaces y plataformas que se entienden.",
    cta: "Conocer capacidad",
  },
  {
    mark: "∞",
    title: "Soluciones inteligentes",
    href: "/servicios/smart-solutions.html",
    text: "Reduce trabajo manual con flujos, IA e integraciones.",
    cta: "Descubrir más",
  },
  {
    mark: "●",
    title: "Marca física",
    href: "/servicios/physical-brand.html",
    text: "Lleva la marca a señalética, espacios y soportes físicos.",
    cta: "Explorar servicio",
  },
];

const combos = [
  {
    label: "Presencia",
    title: "Marca + Digital",
    text: "Cuando el problema es verse bien y convertir mejor.",
  },
  {
    label: "Operación",
    title: "Crecimiento + Inteligencia",
    text: "Cuando el equipo necesita procesos más livianos.",
  },
  {
    label: "Experiencia",
    title: "Creatividad + Físico",
    text: "Cuando la marca también debe sentirse en el espacio.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <div>
        <h2>{title}</h2>
        <p className="lead">{children}</p>
      </div>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <Header active="Servicios" />

      <main>
        <header className="services-hero">
          <div className="wrap services-hero-grid">
            <div className="services-hero-main">
              <div>
                <div className="page-label">Servicios Elev8</div>
                <h1 className="services-title">
                  Lo que construimos.
                </h1>
              </div>
              <div className="services-hero-map" aria-hidden="true">
                {radarItems.map(([code, title]) => (
                  <span key={code}>
                    <b>{code}</b>
                    {title}
                  </span>
                ))}
              </div>
              <div className="services-intro">
                <strong>
                  Servicios es el catálogo de capacidades de Elev8.
                </strong>
                <p>
                  Aquí está el “qué”. Si buscas el “por dónde empiezo”, entra
                  por Soluciones.
                </p>
              </div>
            </div>

            <aside className="services-panel">
              <div className="service-radar" aria-label="Capacidades Elev8">
                {radarItems.map(([code, title, href]) => (
                  <a className="radar-item" href={href} key={code}>
                    <span className="radar-num">{code}</span>
                    <h3>{title}</h3>
                    <span aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="panel-note">
                <p>
                  Cada área puede vivir sola. El valor aparece cuando se combina
                  con intención.
                </p>
                <a className="btn panel-cta" href="#capacidades">
                  Ver capacidades
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Estrategia y crecimiento — Marca y creatividad — Experiencias digitales —
            Soluciones inteligentes — Marca física — Estrategia y crecimiento — Marca y creatividad —
            Experiencias digitales — Soluciones inteligentes — Marca física —
          </span>
        </div>

        <section id="capacidades" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Capacidades"
              title="Cinco áreas, usos distintos."
            >
              Elige una capacidad cuando ya sabes qué necesitas construir.
            </SectionHeading>

            <div className="capability-index">
              {capabilities.map((capability) => (
                <article className="capability-row" key={capability.title}>
                  <a href={capability.href}>
                    <span className="capability-mark">{capability.mark}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.text}</p>
                    <div className="capability-tags">
                      <span className="capability-tag">{capability.cta}</span>
                    </div>
                    <span className="circle-link" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="combinaciones">
          <div className="wrap">
            <div className="combination-board">
              <div className="eyebrow">Combinaciones útiles</div>
              <h2>No todo proyecto necesita todo.</h2>
              <div className="combo-grid">
                {combos.map((combo) => (
                  <article className="combo" key={combo.title}>
                    <div>
                      <em>{combo.label}</em>
                      <h3>{combo.title}</h3>
                    </div>
                    <p>{combo.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="siguiente">
          <div className="wrap">
            <div className="service-cta">
              <div>
                <div className="eyebrow">Siguiente nivel</div>
                <h2>¿Ya sabes qué construir?</h2>
                <p>
                  Entra por una capacidad. Si todavía no está claro, entra por
                  una solución.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn" href="/servicios/strategy-growth.html">
                  Ver estrategia
                </a>
                <Link className="btn dark-btn" href="/soluciones">
                  Ver soluciones
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
