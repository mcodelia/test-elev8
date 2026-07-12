import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["Start", "Lanzar un negocio", "/soluciones/lanzar-negocio.html"],
  ["Next", "Modernizar una empresa", "/soluciones/modernizar-empresa.html"],
  ["Flow", "Automatizar procesos", "/soluciones/automatizar-procesos.html"],
  ["Espacio", "Renovar un espacio", "/soluciones/renovar-espacio-fisico.html"],
  ["360", "Proyecto 360", "/soluciones/proyecto-360.html"],
];

const outcomes = [
  {
    label: "Claridad",
    title: "Salir con claridad",
    chips: ["Oferta", "Mensaje", "Ruta"],
    text: "Cuando hay una idea, pero falta estructura para lanzarla.",
    action: "Conocer la ruta",
  },
  {
    label: "Percepción",
    title: "Verse al nivel correcto",
    chips: ["Marca", "Digital", "Contenido"],
    text: "Cuando la empresa funciona, pero no se percibe así.",
    action: "Explorar decisión",
  },
  {
    label: "Sistema",
    title: "Ordenar todo el recorrido",
    chips: ["Presencia", "Operación", "Experiencia"],
    text: "Cuando todo existe, pero nada conversa bien entre sí.",
    action: "Ver solución",
    featured: true,
  },
  {
    label: "Operación",
    title: "Trabajar con menos fricción",
    chips: ["Procesos", "Datos", "Flujos"],
    text: "Cuando el equipo pierde tiempo en tareas repetidas.",
    action: "Resolver operación",
  },
  {
    label: "Experiencia",
    title: "Hacer visible la marca",
    chips: ["Espacio", "Señalética", "Ambientación"],
    text: "Cuando la experiencia física no refleja el estándar del negocio.",
    action: "Explorar ruta",
  },
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

const systemNodes = [
  {
    label: "Presencia",
    title: "Marca + Digital",
    text: "Para construir percepción, confianza, venta y claridad desde el primer contacto.",
  },
  {
    label: "Operación",
    title: "Crecimiento + Inteligencia",
    text: "Para ordenar procesos, conectar herramientas y liberar tiempo operativo.",
  },
  {
    label: "Experiencia",
    title: "Creatividad + Físico",
    text: "Para que la marca se vea coherente en presentaciones, contenido, oficinas, locales y puntos de contacto reales.",
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
                  Entra por el problema. Sal con una <em>ruta.</em>
                </h1>
              </div>
              <div className="solutions-intro">
                <strong>
                  Nadie llega buscando una lista. Llega con algo que necesita
                  cambiar.
                </strong>
                <p>
                  Esta página ordena ese cambio: lanzar, modernizar, automatizar,
                  renovar o alinear todo el recorrido.
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
                  Elige la situación que más se parece a la tuya. Desde ahí
                  empezamos mejor.
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

        <section id="enfoque">
          <div className="wrap">
            <SectionHeading
              eyebrow="Enfoque"
              title="Cada decisión abre una ruta."
            >
              La pregunta no es qué contratar. La pregunta es qué necesitas
              resolver primero.
            </SectionHeading>

            <div className="outcome-board">
              {outcomes.map((outcome) => (
                <article
                  className={`outcome-card${outcome.featured ? " outcome-feature" : ""}`}
                  data-label={outcome.label}
                  key={outcome.title}
                >
                  {outcome.featured ? (
                    <span className="ghost-mark" aria-hidden="true">
                      E8
                    </span>
                  ) : null}
                  <div>
                    <h3>{outcome.title}</h3>
                    <div className="outcome-meta">
                      {outcome.chips.map((chip) => (
                        <span className="outcome-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>{outcome.text}</p>
                  <div className="outcome-action">
                    <span>{outcome.action}</span>
                    <span aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rutas" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Rutas de solución"
              title="Cinco entradas. Cinco decisiones."
            >
              Cada una conduce a una página específica. Sin pasar por una lista
              de servicios.
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
              <h2>Si esto te pasa, entra por aquí.</h2>
              <p>
                Menos diagnóstico mental. Más punto de partida.
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
              <h2>Del problema a la ruta.</h2>
              <p className="lead">
                Cuatro pasos. El detalle vive en cada solución.
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

        <section id="sistema">
          <div className="wrap">
            <div className="system-board">
              <div className="eyebrow">Capas conectadas</div>
              <h2>
                Una solución no se arma por piezas. Se arma por continuidad.
              </h2>
              <div className="system-grid">
                {systemNodes.map((node) => (
                  <article className="system-node" key={node.title}>
                    <div>
                      <em>{node.label}</em>
                      <h3>{node.title}</h3>
                    </div>
                    <p>{node.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="siguiente">
          <div className="wrap">
            <div className="solution-cta">
              <div>
                <div className="eyebrow">Siguiente nivel</div>
                <h2>Explora la ruta que más se parece a tu problema.</h2>
                <p>
                  Cada página profundiza en señales, escenarios y próximos pasos.
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
