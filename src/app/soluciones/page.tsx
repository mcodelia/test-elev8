import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["Start", "Lanzar un negocio", "/soluciones/lanzar-negocio.html"],
  ["Next", "Modernizar una empresa", "/soluciones/modernizar-empresa.html"],
  ["Flow", "Automatizar procesos", "/soluciones/automatizar-procesos.html"],
  ["Espacio", "Renovar un espacio", "/soluciones/renovar-espacio-fisico.html"],
  ["360", "Proyecto 360", "/soluciones/proyecto-360.html"],
];

const solutions = [
  {
    mark: "✦",
    title: "Lanzar un negocio",
    href: "/soluciones/lanzar-negocio.html",
    text: "De idea suelta a salida clara al mercado.",
    tags: ["Oferta", "Nombre", "Presencia"],
  },
  {
    mark: "↑",
    title: "Modernizar una empresa",
    href: "/soluciones/modernizar-empresa.html",
    text: "De presencia antigua a percepción alineada.",
    tags: ["Diagnóstico", "Percepción", "Confianza"],
    rotateMark: true,
  },
  {
    mark: "∞",
    title: "Automatizar procesos",
    href: "/soluciones/automatizar-procesos.html",
    text: "De operación manual a flujo conectado.",
    tags: ["Procesos", "Tiempo", "Orden"],
  },
  {
    mark: "●",
    title: "Renovar un espacio",
    href: "/soluciones/renovar-espacio-fisico.html",
    text: "De espacio neutro a presencia reconocible.",
    tags: ["Espacio", "Señales", "Experiencia"],
  },
  {
    mark: "◇",
    title: "Proyecto 360",
    href: "/soluciones/proyecto-360.html",
    text: "De piezas aisladas a recorrido coherente.",
    tags: ["Recorrido", "Decisión", "Continuidad"],
  },
];

const clientNeeds = [
  ["Tengo una idea y necesito salir bien al mercado.", "Lanzar un negocio"],
  ["Mi empresa se ve más chica o antigua de lo que realmente es.", "Modernizar"],
  ["Mi equipo pierde tiempo en tareas manuales, seguimiento y Excel.", "Automatizar"],
  ["Necesito que mi espacio se vea más profesional, premium o funcional.", "Renovar espacio"],
  ["Quiero ordenar marca, web, operación y experiencia en una sola dirección.", "Proyecto 360"],
];

const methodSteps = [
  {
    label: "Entender",
    title: "Qué está pasando.",
    text: "Miramos el problema antes de producir.",
  },
  {
    label: "Definir",
    title: "Qué debe cambiar.",
    text: "Convertimos la necesidad en ruta.",
  },
  {
    label: "Construir",
    title: "Qué se materializa.",
    text: "Creamos sólo lo que empuja el resultado.",
  },
  {
    label: "Evolucionar",
    title: "Qué queda listo.",
    text: "Dejamos una base para seguir avanzando.",
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

export default function SolucionesPage() {
  return (
    <>
      <Header active="Soluciones" />

      <main className="solutions-page">
        <header className="solutions-hero">
          <div className="wrap solutions-hero-grid">
            <div className="solutions-hero-main">
              <div>
                <div className="page-label">Soluciones Elev8</div>
                <h1 className="solutions-title">
                  Elige la situación que necesitas resolver.
                </h1>
              </div>
              <div className="solutions-hero-path" aria-hidden="true">
                <span>Problema</span>
                <span>Decisión</span>
                <span>Ruta</span>
                <span>Resultado</span>
              </div>
              <div className="solutions-intro">
                <strong>
                  Cinco rutas para decisiones que suelen llegar mezcladas.
                </strong>
                <p>
                  Parte por el problema. Después definimos si conviene marca,
                  web, automatización, espacio o una mezcla más precisa.
                </p>
              </div>
            </div>

            <aside className="solutions-panel">
              <div className="solution-radar" aria-label="Rutas de solución Elev8">
                {radarItems.map(([code, title, href]) => (
                  <a className="solutions-radar-item" href={href} key={code}>
                    <span className="solutions-radar-num">{code}</span>
                    <h3>{title}</h3>
                    <span aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="solutions-panel-note">
                <p>
                  Elige la entrada más cercana. El alcance se ordena después.
                </p>
                <a className="btn panel-cta" href="#rutas">
                  Ver rutas
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Lanzar un negocio — Modernizar una empresa — Automatizar procesos —
            Renovar un espacio — Proyecto 360 — Lanzar un negocio — Modernizar
            una empresa — Automatizar procesos — Renovar un espacio — Proyecto
            360 —
          </span>
        </div>

        <section id="rutas" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Rutas de solución"
              title="Una entrada por cada tipo de problema."
            >
              Cada ruta resume señales, alcance probable y próximos pasos.
            </SectionHeading>

            <div className="solution-index">
              {solutions.map((solution) => (
                <article className="solution-row" key={solution.title}>
                  <a href={solution.href}>
                    <span className="solution-mark">
                      <span className={solution.rotateMark ? "solution-mark-rotate" : undefined}>
                        {solution.mark}
                      </span>
                    </span>
                    <h3>{solution.title}</h3>
                    <p>{solution.text}</p>
                    <div className="solution-tags">
                      {solution.tags.map((tag) => (
                        <span className="solution-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="circle-link" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="senales">
          <div className="wrap fit-layout">
            <div className="fit-left">
              <div className="eyebrow">Necesidades del cliente</div>
              <h2>Frases que escuchamos seguido.</h2>
              <p>
                Si una suena familiar, ya tenemos por dónde empezar.
              </p>
            </div>
            <div className="fit-list">
              {clientNeeds.map(([need, route]) => (
                <div className="fit-item" key={need}>
                  <span className="mono">•</span>
                  <strong>“{need}”</strong>
                  <small>{route}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo">
          <div className="wrap method-system">
            <div className="method-left">
              <div className="eyebrow">Método Elev8</div>
              <h2>De señal a plan.</h2>
              <p className="lead">
                Contexto breve, alcance claro y siguiente paso.
              </p>
            </div>
            <div className="method-steps">
              {methodSteps.map((step) => (
                <div className="method-step" key={step.label}>
                  <b>{step.label}</b>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="siguiente">
          <div className="wrap">
            <div className="solution-cta">
              <div>
                <div className="eyebrow">Siguiente nivel</div>
                <h2>¿Cuál situación se parece más a la tuya?</h2>
                <p>
                  Entra por ahí. Si ninguna calza, escríbenos y ordenamos la ruta.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href="/contacto#formulario">
                  Iniciar un proyecto
                </a>
                <a className="btn" href="/soluciones/lanzar-negocio.html">
                  Conocer la ruta
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
