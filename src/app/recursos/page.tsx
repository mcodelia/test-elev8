import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["CAS", "Casos de éxito", "/recursos/casos-de-exito.html"],
  ["DIA", "Diagnósticos", "/recursos/diagnosticos.html"],
  ["GUI", "Guías", "/recursos/guias.html"],
  ["ART", "Artículos", "/recursos/blog.html"],
];

const seoCards = [
  ["01", "↓", "Atraer tráfico útil", "Contenido pensado para búsquedas de negocio, marca, diseño web, automatización, IA y experiencia física."],
  ["02", "?", "Resolver dudas reales", "Guías y diagnósticos que ayudan al cliente a entender qué necesita antes de pedir una cotización."],
  ["03", "✦", "Demostrar criterio", "Casos y análisis que muestran cómo Elev8 piensa, decide y conecta estrategia con ejecución."],
  ["04", "→", "Guiar la decisión", "Cada recurso debe abrir un siguiente paso: leer más, diagnosticar, comparar rutas o iniciar conversación."],
  ["05", "∞", "Crear autoridad", "Un ecosistema editorial que crece con el tiempo y convierte conocimiento en posicionamiento."],
];

const hubs = [
  {
    mark: "↑",
    title: "Casos de éxito",
    href: "/recursos/casos-de-exito.html",
    text: "Transformaciones, antes/después, problemas resueltos y resultados visibles. Sirven para demostrar capacidad sin depender solo de promesas.",
    tags: ["Resultados", "Antes / Después", "Prueba social"],
    rotateMark: true,
  },
  {
    mark: "⌁",
    title: "Diagnósticos",
    href: "/recursos/diagnosticos.html",
    text: "Checklists, auditorías rápidas y señales para detectar si una marca, web, proceso o espacio necesita evolucionar.",
    tags: ["Auditoría", "Checklist", "Señales"],
  },
  {
    mark: "✦",
    title: "Guías",
    href: "/recursos/guias.html",
    text: "Contenido profundo para orientar decisiones: qué hacer, en qué orden, cuánto considerar y cómo evitar errores frecuentes.",
    tags: ["Educación", "Paso a paso", "Comparativas"],
  },
  {
    mark: "∞",
    title: "Artículos",
    href: "/recursos/blog.html",
    text: "Ideas, tendencias, puntos de vista y artículos cortos para mantener viva la autoridad editorial de Elev8.",
    tags: ["Opinión", "Tendencias", "Miradas"],
  },
];

const topics = [
  {
    topic: "Marca",
    title: "Marca y percepción",
    chips: ["Marca", "Nombre de marca", "Identidad"],
    text: "Cómo saber si una marca se ve débil, antigua, genérica o desconectada del nivel real del negocio.",
    action: "Guías + Diagnósticos",
  },
  {
    topic: "Web",
    title: "Sitios que convierten",
    chips: ["Experiencia", "Página de aterrizaje", "Búsqueda"],
    text: "Qué revisar antes de rediseñar una web, cómo mejorar conversión y cómo ordenar contenido para vender mejor.",
    action: "Guías + artículos",
  },
  {
    topic: "Autoridad",
    title: "Contenido que abre mercado",
    chips: ["Casos", "Guías", "Artículos", "Diagnóstico"],
    text: "La estrategia no es llenar el sitio de textos. Es construir un mapa de contenido que responda dudas, demuestre criterio y conecte con soluciones concretas.",
    action: "Sistema editorial",
    featured: true,
  },
  {
    topic: "Inteligencia",
    title: "Automatización e IA",
    chips: ["Procesos", "Gestión comercial", "IA"],
    text: "Señales de procesos manuales, herramientas desconectadas y oportunidades para trabajar con sistemas más inteligentes.",
    action: "Diagnósticos + Guías",
  },
  {
    topic: "Físico",
    title: "Espacios y marca física",
    chips: ["Oficinas", "Letreros", "Señalética"],
    text: "Cómo llevar la identidad al mundo real: espacios, vehículos, puntos de venta, stands y soportes tangibles.",
    action: "Casos + artículos",
  },
];

const intents = [
  ["¿Cómo saber si necesito renovar mi marca?", "Diagnóstico / Marca"],
  ["¿Qué debe tener una página web profesional?", "Guía / Experiencias digitales"],
  ["¿Cuándo conviene automatizar procesos?", "Diagnóstico / Soluciones inteligentes"],
  ["¿Cómo lanzar un negocio desde cero?", "Guía / Solución lanzamiento"],
  ["¿Qué errores hacen que una empresa se vea poco profesional?", "Artículo / Marca y web"],
  ["¿Cómo mejorar la experiencia de una oficina o local?", "Guía / Marca física"],
];

const calendar = [
  ["MES 01", "Diagnosticar", "Contenidos para detectar problemas: marca débil, web que no convierte, procesos manuales o espacios desconectados."],
  ["MES 02", "Educar", "Guías prácticas con pasos, criterios y decisiones clave antes de invertir en diseño, tecnología o implementación."],
  ["MES 03", "Demostrar", "Casos de éxito, procesos de transformación, antes/después y aprendizajes aplicables a nuevos proyectos."],
  ["MES 04", "Convertir", "Artículos conectados a soluciones específicas, con llamados hacia diagnóstico, contacto o rutas de proyecto."],
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
                  Contenido que ayuda a decidir, comparar y <em>avanzar.</em>
                </h1>
              </div>
              <div className="resources-intro">
                <strong>
                  Una biblioteca editorial para atraer búsquedas reales y convertir
                  curiosidad en conversaciones comerciales.
                </strong>
                <p>
                  Recursos no debe ser una sección decorativa. Debe funcionar
                  como un sistema de búsqueda: educa al cliente, posiciona a Elev8 y
                  ordena el camino hacia servicios, soluciones y proyectos más
                  grandes.
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
                  Visibilidad orgánica, pero con intención: que cada visita entienda mejor su
                  problema y encuentre una puerta de entrada hacia Elev8.
                </p>
                <a className="btn panel-cta" href="#hub">
                  Ver índice
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Casos de éxito — Diagnósticos — Guías — Artículos — Marca — Web —
            Automatización — IA — Espacios — Crecimiento — Casos de éxito —
            Diagnósticos — Guías — Artículos — Marca — Web — Automatización — IA —
            Espacios — Crecimiento —
          </span>
        </div>

        <section id="vision">
          <div className="wrap">
            <SectionHeading eyebrow="Búsqueda con intención" title="No perseguir visitas. Capturar intención.">
              La sección Recursos debe responder preguntas que los clientes ya
              están buscando: cómo lanzar, cómo modernizar, cómo mejorar una web,
              cómo automatizar, cómo renovar un espacio y cómo elegir bien antes
              de invertir.
            </SectionHeading>

            <div className="seo-board">
              {seoCards.map(([code, icon, title, text]) => (
                <article className="seo-card" data-code={code} key={code}>
                  <b>{icon}</b>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hub" className="dark">
          <div className="wrap">
            <SectionHeading eyebrow="Índice de recursos" title="Cuatro entradas para aprender mejor.">
              Cada subpágina cumple una función distinta dentro de la visibilidad orgánica: prueba,
              evaluación, educación y opinión experta.
            </SectionHeading>

            <div className="hub-index">
              {hubs.map((hub) => (
                <article className="hub-row" key={hub.title}>
                  <a href={hub.href}>
                    <span className="hub-mark">
                      <span className={hub.rotateMark ? "hub-mark-rotate" : undefined}>{hub.mark}</span>
                    </span>
                    <h3>{hub.title}</h3>
                    <p>{hub.text}</p>
                    <div className="hub-tags">
                      {hub.tags.map((tag) => (
                        <span className="hub-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="circle-link" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="temas">
          <div className="wrap">
            <SectionHeading eyebrow="Territorios de búsqueda" title="Los temas deben nacer desde problemas buscables.">
              La arquitectura editorial se puede organizar por grandes
              territorios para que Google entienda de qué sabe Elev8 y el cliente
              entienda cuándo debe pedir ayuda.
            </SectionHeading>

            <div className="topic-board">
              {topics.map((topic) => (
                <article className={`topic-card${topic.featured ? " topic-feature" : ""}`} data-topic={topic.topic} key={topic.title}>
                  {topic.featured ? <span className="big-word" aria-hidden="true">BUSCAR</span> : null}
                  <div>
                    <h3>{topic.title}</h3>
                    <div className="topic-meta">
                      {topic.chips.map((chip) => <span className="topic-chip" key={chip}>{chip}</span>)}
                    </div>
                  </div>
                  <p>{topic.text}</p>
                  <div className="topic-action">
                    <span>{topic.action}</span>
                    <span aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="arquitectura">
          <div className="wrap architecture">
            <div className="architecture-left">
              <div className="eyebrow">Intención de búsqueda</div>
              <h2>Cada artículo debe tener una misión.</h2>
              <p>
                El contenido puede entretener, pero en Elev8 debe hacer algo más
                importante: acercar al cliente correcto al siguiente paso correcto.
              </p>
            </div>
            <div className="intent-list">
              {intents.map(([question, type]) => (
                <div className="intent" key={question}>
                  <span className="mono">•</span>
                  <strong>“{question}”</strong>
                  <small>{type}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calendario">
          <div className="wrap">
            <div className="calendar-board">
              <div className="eyebrow">Sistema editorial</div>
              <h2>Una estructura simple para publicar sin improvisar.</h2>
              <div className="calendar-grid">
                {calendar.map(([label, title, text]) => (
                  <article className="calendar-node" key={label}>
                    <div>
                      <em>{label}</em>
                      <h3>{title}</h3>
                    </div>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="siguiente">
          <div className="wrap">
            <div className="resource-cta">
              <div>
                <div className="eyebrow">Siguiente nivel</div>
                <h2>Desde esta página nacen las cuatro subpáginas editoriales.</h2>
                <p>
                  El próximo paso es desarrollar Casos de éxito, Diagnósticos,
                  Guías y Artículos con estructura propia: hero, filtros, categorías,
                  artículos destacados, territorios de búsqueda y llamados hacia servicios o
                  soluciones.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href="/recursos/casos-de-exito.html">Primer recurso</a>
                <a className="btn" href="/contacto#formulario">Iniciar proyecto</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
