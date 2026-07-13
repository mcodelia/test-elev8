import Footer from "@/components/Footer";
import Header from "@/components/Header";

const focusSteps = [
  {
    icon: "↓",
    title: "Leer",
    text: "Qué pasa y dónde duele.",
  },
  {
    icon: "→",
    title: "Elegir",
    text: "Qué mover primero.",
  },
  {
    icon: "✦",
    title: "Crear",
    text: "La pieza que falta.",
  },
  {
    icon: "",
    rotateIcon: true,
    title: "Lanzar",
    text: "Sin perder consistencia.",
  },
  {
    icon: "∞",
    title: "Medir",
    text: "Qué aprende el sistema.",
  },
];

const services = [
  {
    label: "Estrategia",
    title: "Estrategia y crecimiento",
    text: "Decisiones antes de inversión.",
    href: "/servicios/strategy-growth.html",
  },
  {
    label: "Marca",
    title: "Marca y creatividad",
    text: "Identidad, voz y presencia.",
    href: "/servicios/brand-creative.html",
  },
  {
    label: "Digital",
    title: "Experiencias digitales",
    text: "Webs y productos útiles.",
    href: "/servicios/digital-experiences.html",
  },
  {
    label: "Inteligencia",
    title: "Soluciones inteligentes",
    text: "Automatización aplicada.",
    href: "/servicios/smart-solutions.html",
  },
  {
    label: "Físico",
    title: "Marca física",
    text: "Espacios y puntos reales.",
    href: "/servicios/physical-brand.html",
  },
];

const solutionRoutes = [
  {
    step: "Lanzar",
    title: "Lanzar",
    chips: ["Marca", "Web", "Contenido"],
    text: "Marca, web y mensaje mínimo para salir bien.",
    action: "Descubrir ruta",
  },
  {
    step: "Mejorar",
    title: "Modernizar",
    chips: ["Reposicionamiento", "Experiencia", "Ventas"],
    text: "Presencia actualizada para vender con más confianza.",
    action: "Explorar ruta",
  },
  {
    step: "Integrar",
    title: "Integrar",
    chips: ["Estrategia", "Marca", "Web", "Inteligencia", "Físico"],
    text: "Marca, web, operación y experiencia bajo una misma lógica.",
    action: "Ver solución",
    featured: true,
  },
  {
    step: "Optimizar",
    title: "Automatizar",
    chips: ["IA", "Automatización", "Sistemas"],
    text: "Menos tareas repetidas y más flujo operativo.",
    action: "Conocer ruta",
  },
  {
    step: "Materializar",
    title: "Materializar",
    chips: ["Letreros", "Oficinas", "Vehículos"],
    text: "Señalética, gráfica y presencia física coherente.",
    action: "Explorar ruta",
  },
];

const clientNeeds = [
  ["Estoy lanzando algo nuevo.", "Lanzar"],
  ["La empresa creció, pero la marca no.", "Modernizar"],
  ["La web no explica ni convierte.", "Digital"],
  ["El equipo opera con demasiado trabajo manual.", "Automatizar"],
  ["El espacio físico no representa la marca.", "Materializar"],
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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <header className="hero">
          <div className="wrap hero-grid">
            <div className="hero-main">
              <div>
                <div className="kicker">Ecosistema creativo y digital</div>
                <h1>Diseñamos marcas, webs y sistemas para negocios que necesitan avanzar con más foco.</h1>
              </div>
              <div className="hero-system" aria-hidden="true">
                <span>Strategy</span>
                <span>Brand</span>
                <span>Web</span>
                <span>AI</span>
                <span>Space</span>
              </div>
              <div className="hero-copy">
                <strong>
                  Elev8 une criterio creativo, diseño digital y ejecución práctica.
                </strong>
                <p>
                  Trabajamos con empresas que necesitan verse mejor, vender mejor
                  u operar con menos fricción.
                </p>
              </div>
            </div>

            <div className="side">
              <div className="poster">
                <div className="poster-inner">
                  <span className="btn poster-pill">Elev8 Studio</span>
                  <div className="poster-index" aria-hidden="true">
                    <span>01</span>
                    <span>05</span>
                    <span>∞</span>
                  </div>
                  <h2>
                    Pensar
                    <br />
                    Crear
                    <br />
                    Escalar
                  </h2>
                </div>
              </div>
              <div className="mini-card">
                <p>
                  Estrategia cuando falta foco. Diseño cuando falta forma.
                  Tecnología cuando falta flujo.
                </p>
                <h3>Menos ruido.</h3>
              </div>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <span>
            Marca — Web — Automatización — Espacio — Contenido — Estrategia —
            Marca — Web — Automatización — Espacio — Contenido — Estrategia —
          </span>
        </div>

        <section id="modelo">
          <div className="wrap">
            <SectionHeading
              eyebrow="Enfoque"
              title="Una forma simple de trabajar."
            >
              Antes de producir, elegimos qué problema vale la pena resolver.
            </SectionHeading>

            <div className="logic">
              {focusSteps.map((step) => (
                <article className="logic-card" key={step.title}>
                  <span className="slash">/</span>
                  <b
                    className={step.rotateIcon ? "logic-icon-rotate" : undefined}
                    aria-hidden={step.rotateIcon ? "true" : undefined}
                  >
                    {step.icon}
                  </b>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Servicios"
              title="Qué podemos construir."
            >
              Cinco capacidades. Se usan solas o combinadas según el caso.
            </SectionHeading>

            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <span className="num">{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="service-cta-link" href={service.href}>
                    Explorar
                    <span className="arrow" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta">
          <div className="wrap">
            <SectionHeading
              eyebrow="Rutas de solución"
              title="Si no sabes qué pedir, parte por la situación."
            >
              Las rutas traducen problemas de negocio en próximos pasos concretos.
            </SectionHeading>

            <div className="offer-board">
              {solutionRoutes.map((route) => (
                <article
                  className={`offer-card${route.featured ? " offer-feature" : ""}`}
                  data-step={route.step}
                  key={route.title}
                >
                  {route.featured ? (
                    <span className="big-number" aria-hidden="true">
                      360
                    </span>
                  ) : null}
                  <div>
                    <h3>{route.title}</h3>
                    <div className="offer-meta">
                      {route.chips.map((chip) => (
                        <span className="offer-chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>{route.text}</p>
                  <div className="offer-action">
                    <span>{route.action}</span>
                    <span aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rutas">
          <div className="wrap route">
            <div className="route-left">
              <div className="eyebrow">Necesidades del cliente</div>
              <h2>Reconoce el punto de partida.</h2>
              <p>
                Cinco señales comunes. Una conversación posible.
              </p>
            </div>

            <div className="questions">
              {clientNeeds.map(([need, route]) => (
                <div className="q" key={need}>
                  <span className="mono">•</span>
                  <strong>“{need}”</strong>
                  <small>{route}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
