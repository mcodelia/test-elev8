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
    title: "Convertir ideas en dirección",
    chips: ["Oferta", "Mensaje", "Ruta"],
    text: "Para dejar de improvisar y transformar una necesidad en una arquitectura clara de marca, web, contenido, sistemas o espacio.",
    action: "Más foco",
  },
  {
    label: "Percepción",
    title: "Elevar cómo se ve la empresa",
    chips: ["Marca", "Digital", "Contenido"],
    text: "Para que la presencia visual, comercial y digital esté a la altura de lo que la empresa realmente ofrece.",
    action: "Más valor percibido",
  },
  {
    label: "Sistema",
    title: "Construir un ecosistema completo",
    chips: ["Estrategia", "Marca", "Web", "Inteligencia", "Físico"],
    text: "Para conectar todas las capas del negocio y evitar el clásico Frankenstein corporativo: logo por un lado, web por otro, procesos en Excel y el cliente mirando raro.",
    action: "Proyecto 360",
    featured: true,
  },
  {
    label: "Operación",
    title: "Hacer que el negocio fluya mejor",
    chips: ["IA", "Automatización", "Gestión comercial"],
    text: "Para reducir tareas repetitivas, ordenar información y conectar herramientas que hoy trabajan como islas.",
    action: "Más eficiencia",
  },
  {
    label: "Experiencia",
    title: "Materializar la marca en el mundo real",
    chips: ["Espacio", "Señalética", "Ambientación"],
    text: "Para transformar oficinas, locales, stands, vehículos o espacios comerciales en experiencias coherentes con la marca.",
    action: "Más presencia",
  },
];

const solutions = [
  {
    mark: "✦",
    title: "Lanzar un negocio",
    href: "/soluciones/lanzar-negocio.html",
    text: "Convertimos una idea en una marca, oferta y presencia digital lista para salir al mercado con claridad y confianza.",
    tags: ["Nombre de marca", "Marca", "Web", "Contenido", "Presentación"],
  },
  {
    mark: "↑",
    title: "Modernizar una empresa",
    href: "/soluciones/modernizar-empresa.html",
    text: "Actualizamos marca, comunicación, sitio web y experiencia para que la empresa se vea y funcione como su próximo nivel.",
    tags: ["Diagnóstico", "Reposicionamiento", "Experiencia de usuario", "Presentaciones", "Hoja de ruta"],
    rotateMark: true,
  },
  {
    mark: "∞",
    title: "Automatizar procesos",
    href: "/soluciones/automatizar-procesos.html",
    text: "Diseñamos flujos inteligentes para conectar herramientas, ordenar información y eliminar trabajo repetitivo.",
    tags: ["IA", "Automatización", "Aplicaciones", "Integraciones", "Gestión comercial"],
  },
  {
    mark: "●",
    title: "Renovar un espacio",
    href: "/soluciones/renovar-espacio-fisico.html",
    text: "Transformamos espacios físicos en experiencias más memorables, funcionales y coherentes con la identidad de marca.",
    tags: ["Oficinas", "Locales", "Señalética", "Stands", "Renta corta"],
  },
  {
    mark: "◇",
    title: "Proyecto 360",
    href: "/soluciones/proyecto-360.html",
    text: "Integramos estrategia, marca, web, automatización y experiencia física en un proyecto de transformación total.",
    tags: ["Estrategia", "Marca", "Digital", "Inteligencia", "Físico"],
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
    label: "Detectar",
    title: "Entendemos el bloqueo.",
    text: "Revisamos oferta, marca, canales, procesos, herramientas, experiencia actual y objetivos del negocio.",
  },
  {
    label: "Diseñar",
    title: "Definimos la ruta correcta.",
    text: "Ordenamos prioridades, módulos, entregables y combinaciones de servicios según el resultado esperado.",
  },
  {
    label: "Construir",
    title: "Ejecutamos con dirección.",
    text: "Creamos marca, web, contenido, sistemas, automatizaciones o elementos físicos con una misma lógica visual y estratégica.",
  },
  {
    label: "Escalar",
    title: "Preparamos la evolución.",
    text: "Dejamos bases ordenadas para nuevos módulos, campañas, integraciones, páginas interiores o mejoras futuras.",
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
                  No vendemos servicios. Diseñamos <em>resultados.</em>
                </h1>
              </div>
              <div className="solutions-intro">
                <strong>
                  El cliente no llega buscando una lista. Llega con una meta, un
                  bloqueo o una oportunidad.
                </strong>
                <p>
                  Esta página ordena las soluciones de Elev8 por resultado:
                  lanzar, modernizar, automatizar, renovar o construir una
                  transformación completa. Desde aquí nacen las páginas
                  individuales de cada ruta.
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
                  Una entrada más comercial, más simple y más directa para
                  explicar qué puede lograr Elev8 sin obligar al cliente a
                  entender primero todos los servicios.
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
              title="Una solución no es una tarea. Es una forma de mover el negocio."
            >
              Partimos por el resultado que se quiere lograr y desde ahí armamos
              el camino: qué construir, qué ordenar, qué automatizar, qué
              comunicar y qué experiencia debe vivir el cliente.
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
              title="Cinco entradas para resolver problemas reales."
            >
              Cada ruta puede funcionar de forma independiente o combinarse con
              otras. La promesa no es “hacer cosas”; es acercar al negocio a un
              resultado concreto.
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
              <h2>El cliente entra por lo que quiere lograr.</h2>
              <p>
                Estas frases ayudan a convertir una consulta ambigua en una ruta
                concreta, vendible y fácil de entender.
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
              <h2>Del problema al sistema.</h2>
              <p className="lead">
                La solución se diseña antes de producir. Así evitamos parches,
                piezas aisladas y proyectos que se ven bonitos pero no mueven
                nada.
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
                Las soluciones combinan capacidades. El resultado se siente como
                una sola experiencia.
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
                <h2>Desde esta página nacen las páginas individuales de cada solución.</h2>
                <p>
                  El próximo paso es profundizar cada ruta con problema, promesa,
                  entregables, proceso, módulos recomendados, ejemplos de
                  aplicación y llamado a la acción específico.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href="/contacto#formulario">
                  Iniciar proyecto
                </a>
                <a className="btn" href="/soluciones/lanzar-negocio.html">
                  Primera solución
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
