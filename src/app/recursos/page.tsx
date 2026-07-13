import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["CAS", "Casos", "/recursos/casos-de-exito.html"],
  ["DIA", "Diagnósticos", "/recursos/diagnosticos.html"],
  ["GUI", "Guías", "/recursos/guias.html"],
  ["ART", "Artículos", "/recursos/blog.html"],
];

const featuredArticles = [
  {
    type: "Artículo destacado",
    title: "¿Por qué una buena empresa sigue pareciendo amateur?",
    text: "Señales de marca, web y comunicación que reducen confianza antes de la primera conversación.",
    href: "/recursos/blog.html",
    action: "Descubrir",
  },
  {
    type: "Caso destacado",
    title: "Cómo reducir 18 horas semanales de trabajo manual.",
    text: "Un problema operativo común: tareas repetidas, información dispersa y equipos persiguiendo datos.",
    href: "/recursos/casos-de-exito.html",
    action: "Ver el caso",
  },
];

const guideCards = [
  {
    title: "Cómo lanzar una marca desde cero.",
    text: "Una guía para pasar de idea abierta a presencia mínima viable.",
    href: "/recursos/guias.html",
  },
  {
    title: "Cómo modernizar una empresa sin empezar de cero.",
    text: "Qué conservar, qué corregir y qué ordenar primero.",
    href: "/recursos/guias.html",
  },
  {
    title: "Cómo elegir una plataforma web.",
    text: "Preguntas prácticas antes de invertir en diseño o tecnología.",
    href: "/recursos/guias.html",
  },
];

const questions = [
  ["¿Mi marca se ve menos profesional que mi servicio?", "Marca y percepción"],
  ["¿Mi web informa, pero no convierte?", "Experiencia digital"],
  ["¿Mi equipo repite tareas que un sistema podría resolver?", "Automatización"],
  ["¿Mi espacio físico comunica el nivel real del negocio?", "Marca física"],
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
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

export default function RecursosPage() {
  return (
    <>
      <Header active="Recursos" />

      <main className="resources-page">
        <header className="resources-hero">
          <div className="wrap resources-hero-grid">
            <div className="resources-hero-main">
              <div>
                <div className="page-label">Recursos Elev8</div>
                <h1 className="resources-title">
                  Ideas útiles antes de invertir.
                </h1>
              </div>
              <div className="resources-hero-edition" aria-hidden="true">
                <span>Editorial index</span>
                <span>Casos / Guías / Diagnósticos / Artículos</span>
                <span>Vol. 01</span>
              </div>
              <div className="resources-intro">
                <strong>
                  Contenido para detectar señales, comparar opciones y decidir
                  con más calma.
                </strong>
                <p>
                  Casos, guías y diagnósticos breves. Sin biblioteca infinita.
                </p>
              </div>
            </div>

            <aside className="resources-panel">
              <div className="resource-radar" aria-label="Categorías de recursos Elev8">
                {radarItems.map(([code, title, href]) => (
                  <a className="resources-radar-item" href={href} key={code}>
                    <span className="resources-radar-num">{code}</span>
                    <h3>{title}</h3>
                    <span aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="resources-panel-note">
                <p>
                  Lee para decidir, no para acumular pestañas abiertas.
                </p>
                <a className="btn panel-cta" href="#destacados">
                  Explorar
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Preguntas reales — Casos útiles — Guías prácticas — Decisiones claras —
            Preguntas reales — Casos útiles — Guías prácticas — Decisiones claras —
          </span>
        </div>

        <section id="destacados">
          <div className="wrap">
            <SectionHeading eyebrow="Selección editorial" title="Dos lecturas para empezar.">
              Una para mirar la percepción. Otra para mirar la operación.
            </SectionHeading>

            <div className="topic-board">
              {featuredArticles.map((article) => (
                <article className="topic-card" data-topic={article.type} key={article.title}>
                  <div>
                    <h3>{article.title}</h3>
                    <div className="topic-meta">
                      <span className="topic-chip">{article.type}</span>
                    </div>
                  </div>
                  <p>{article.text}</p>
                  <a className="topic-action" href={article.href}>
                    <span>{article.action}</span>
                    <span aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="guias">
          <div className="wrap">
            <SectionHeading eyebrow="Guías" title="Tres decisiones frecuentes.">
              Lecturas prácticas para preparar una conversación de proyecto.
            </SectionHeading>

            <div className="seo-board">
              {guideCards.map((guide, index) => (
                <article className="seo-card" data-code={`0${index + 1}`} key={guide.title}>
                  <b>→</b>
                  <div>
                    <h3>{guide.title}</h3>
                    <p>{guide.text}</p>
                    <a className="btn" href={guide.href}>Aplicar</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="preguntas">
          <div className="wrap architecture">
            <div className="architecture-left">
              <div className="eyebrow">Preguntas frecuentes</div>
              <h2>Preguntas que suelen abrir proyectos.</h2>
              <p>
                Si una se repite dentro de la empresa, probablemente hay una
                oportunidad de mejora.
              </p>
            </div>
            <div className="intent-list">
              {questions.map(([question, type]) => (
                <a className="intent" href="/contacto#formulario" key={question}>
                  <span className="mono">•</span>
                  <strong>“{question}”</strong>
                  <small>{type}</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="siguiente">
          <div className="wrap">
            <div className="resource-cta">
              <div>
                <div className="eyebrow">Siguiente paso</div>
                <h2>¿Tienes una pregunta concreta?</h2>
                <p>
                  Escríbenos el contexto. Te diremos si conviene diagnóstico,
                  guía o proyecto.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href="/recursos/guias.html">Explorar guías</a>
                <a className="btn" href="/contacto#formulario">Iniciar un proyecto</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
