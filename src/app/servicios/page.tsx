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
    text: "Define dirección, prioridades y marco de crecimiento.",
    cta: "Ver estrategia",
  },
  {
    mark: "✦",
    title: "Marca y creatividad",
    href: "/servicios/brand-creative.html",
    text: "Da forma a identidad, discurso y presencia visual.",
    cta: "Explorar capacidad",
  },
  {
    mark: "⌁",
    title: "Experiencias digitales",
    href: "/servicios/digital-experiences.html",
    text: "Construye sitios, productos e interfaces claras.",
    cta: "Conocer capacidad",
  },
  {
    mark: "∞",
    title: "Soluciones inteligentes",
    href: "/servicios/smart-solutions.html",
    text: "Conecta automatización, IA, datos y sistemas.",
    cta: "Descubrir más",
  },
  {
    mark: "●",
    title: "Marca física",
    href: "/servicios/physical-brand.html",
    text: "Lleva la identidad a espacios, soportes y puntos reales.",
    cta: "Explorar servicio",
  },
];

const details = [
  {
    id: "EST",
    title: "Estrategia y crecimiento",
    href: "/servicios/strategy-growth.html",
    text: "Ordena decisiones antes de diseñar o construir.",
    items: ["Diagnóstico", "Prioridades", "Hoja de ruta"],
  },
  {
    id: "MAR",
    title: "Marca y creatividad",
    href: "/servicios/brand-creative.html",
    text: "Convierte criterio en identidad, voz y sistema visual.",
    items: ["Identidad", "Dirección de arte", "Contenido"],
  },
  {
    id: "WEB",
    title: "Experiencias digitales",
    href: "/servicios/digital-experiences.html",
    text: "Diseña presencia digital, interfaces y plataformas.",
    items: ["Sitios web", "Interfaces", "Plataformas"],
  },
  {
    id: "IA",
    title: "Soluciones inteligentes",
    href: "/servicios/smart-solutions.html",
    text: "Transforma procesos repetitivos en flujos conectados.",
    items: ["IA", "Automatización", "Integraciones"],
  },
  {
    id: "FIS",
    title: "Marca física",
    href: "/servicios/physical-brand.html",
    text: "Materializa identidad en espacios y soportes concretos.",
    items: ["Señalética", "Oficinas", "Stands"],
  },
];

const combos = [
  {
    label: "Sistema de presencia",
    title: "Marca + Digital",
    text: "Identidad y experiencia digital trabajando como una sola capa.",
  },
  {
    label: "Sistema operativo",
    title: "Crecimiento + Inteligencia",
    text: "Estrategia, automatización y datos conectando decisiones internas.",
  },
  {
    label: "Sistema tangible",
    title: "Creatividad + Físico",
    text: "Marca aplicada con continuidad fuera de la pantalla.",
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
                  Cinco capacidades. Un solo sistema.
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
                  El ecosistema Elev8 conecta criterio, diseño, tecnología y
                  ejecución.
                </strong>
                <p>
                  Servicios presenta lo que sabemos construir. Las soluciones
                  explican cuándo y por qué usarlo.
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
                  Capacidades independientes. Mejor resultado cuando trabajan
                  conectadas.
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

        <section id="vision">
          <div className="wrap">
            <SectionHeading
              eyebrow="Servicios"
              title="El sistema se entiende por sus partes."
            >
              Cada capacidad tiene una función clara. Juntas forman una base
              para construir con continuidad.
            </SectionHeading>
          </div>
        </section>

        <section id="capacidades" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Capacidades"
              title="Las cinco áreas de servicio."
            >
              Una lectura rápida. Para profundizar, entra en cada capacidad.
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

        <section id="detalle">
          <div className="wrap">
            <SectionHeading
              eyebrow="Resumen"
              title="Qué hace cada capacidad."
            >
              Sin metodología completa. Sólo el rol de cada pieza dentro del
              sistema.
            </SectionHeading>

            <div className="detail-grid">
              {details.map((detail) => (
                <article className="detail-card" data-id={detail.id} key={detail.id}>
                  <div>
                    <h3>{detail.title}</h3>
                    <p>{detail.text}</p>
                    <ul>
                      {detail.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="btn" href={detail.href}>
                    Explorar servicio
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="combinaciones">
          <div className="wrap">
            <div className="combination-board">
              <div className="eyebrow">Capacidades conectadas</div>
              <h2>Las capacidades se complementan.</h2>
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
                <h2>Profundiza en una capacidad.</h2>
                <p>
                  Cada área tiene metodología, entregables y ejemplos propios.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn" href="/servicios/strategy-growth.html">
                  Ver estrategia
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
