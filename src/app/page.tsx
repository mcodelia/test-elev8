import Footer from "@/components/Footer";
import Header from "@/components/Header";

const focusSteps = [
  {
    icon: "↓",
    title: "Diagnóstico",
    text: "Encontramos el bloqueo real.",
  },
  {
    icon: "→",
    title: "Dirección",
    text: "Definimos qué mover primero.",
  },
  {
    icon: "✦",
    title: "Diseño",
    text: "Damos forma a la decisión.",
  },
  {
    icon: "",
    rotateIcon: true,
    title: "Ejecución",
    text: "Llevamos la idea al mundo.",
  },
  {
    icon: "∞",
    title: "Evolución",
    text: "Dejamos una base para crecer.",
  },
];

const services = [
  {
    label: "Estrategia",
    title: "Estrategia y crecimiento",
    text: "Dirección antes de producir.",
    href: "/servicios/strategy-growth.html",
  },
  {
    label: "Marca",
    title: "Marca y creatividad",
    text: "Percepción clara y reconocible.",
    href: "/servicios/brand-creative.html",
  },
  {
    label: "Digital",
    title: "Experiencias digitales",
    text: "Sitios y productos que orientan.",
    href: "/servicios/digital-experiences.html",
  },
  {
    label: "Inteligencia",
    title: "Soluciones inteligentes",
    text: "Menos fricción. Más sistema.",
    href: "/servicios/smart-solutions.html",
  },
  {
    label: "Físico",
    title: "Marca física",
    text: "La marca fuera de la pantalla.",
    href: "/servicios/physical-brand.html",
  },
];

const solutionRoutes = [
  {
    step: "Lanzar",
    title: "Ruta Lanzamiento",
    chips: ["Marca", "Web", "Contenido"],
    text: "Para salir al mercado con claridad.",
    action: "Descubrir ruta",
  },
  {
    step: "Mejorar",
    title: "Ruta evolución",
    chips: ["Reposicionamiento", "Experiencia", "Ventas"],
    text: "Para verse al nivel de lo que ya eres.",
    action: "Explorar ruta",
  },
  {
    step: "Integrar",
    title: "Ruta 360",
    chips: ["Estrategia", "Marca", "Web", "Inteligencia", "Físico"],
    text: "Para ordenar marca, web, operación y experiencia.",
    action: "Ver solución",
    featured: true,
  },
  {
    step: "Optimizar",
    title: "Ruta inteligente",
    chips: ["IA", "Automatización", "Sistemas"],
    text: "Para equipos que necesitan trabajar mejor.",
    action: "Conocer ruta",
  },
  {
    step: "Materializar",
    title: "Ruta Espacio",
    chips: ["Letreros", "Oficinas", "Vehículos"],
    text: "Para hacer visible la marca en el mundo real.",
    action: "Explorar ruta",
  },
];

const clientNeeds = [
  ["Necesito crear una marca desde cero.", "Ruta Lanzamiento"],
  ["Mi empresa se ve antigua o poco profesional.", "Ruta evolución"],
  ["Necesito una página web que venda mejor.", "Experiencias digitales"],
  ["Tengo procesos manuales y mucho Excel.", "Soluciones inteligentes"],
  ["Necesito letreros, impresión o gráfica física.", "Marca física"],
  ["Quiero ordenar todo mi negocio visual y digitalmente.", "Ruta 360"],
];

const marketingSignals = [
  {
    label: "Decisión 01",
    title: "Detectar",
    text: "Qué no está funcionando.",
  },
  {
    label: "Decisión 02",
    title: "Priorizar",
    text: "Qué cambia primero.",
  },
  {
    label: "Decisión 03",
    title: "Construir",
    text: "Qué pieza mueve el negocio.",
  },
  {
    label: "Decisión 04",
    title: "Avanzar",
    text: "Cuál es el próximo paso.",
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
                <h1>Conectamos estrategia, creatividad y tecnología para construir empresas más sólidas.</h1>
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
                  Elev8 existe para convertir complejidad en dirección.
                </strong>
                <p>
                  Un estudio para marcas que necesitan claridad, criterio y ejecución
                  en un mismo lugar.
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
                  Una entrada para ordenar lo visual, lo digital, lo operativo y
                  lo físico bajo una misma intención.
                </p>
                <h3>Una dirección.</h3>
              </div>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <span>
            Pensar antes de producir — Diseñar para decidir — Construir sistemas —
            Reducir fricción — Elevar percepción — Crear continuidad — Pensar antes de producir —
            Diseñar para decidir — Construir sistemas — Reducir fricción —
          </span>
        </div>

        <section id="modelo">
          <div className="wrap">
            <SectionHeading
              eyebrow="Enfoque"
              title="Primero el problema. Luego la forma."
            >
              El método debe entenderse en segundos. Mirar, ordenar, construir,
              mejorar.
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
              title="Un ecosistema. Cinco formas de entrar."
            >
              Separadas cuando conviene. Conectadas cuando el negocio lo pide.
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
              title="Elige por dónde empezar."
            >
              Cada ruta abre una conversación distinta. Lanzar, mejorar, integrar,
              optimizar o materializar.
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
              <h2>Encuentra tu puerta de entrada.</h2>
              <p>
                Si reconoces una frase, ya tienes una ruta.
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

        <section id="marketing">
          <div className="wrap campaign">
            <div className="campaign-copy">
              <div>
                <div className="eyebrow">Decisiones</div>
                <h2>Menos ruido. Mejores movimientos.</h2>
              </div>
              <p className="lead">
                Antes de producir más piezas, conviene saber qué decisión falta.
              </p>
            </div>

            <div className="signal-board">
              <div className="signal-map">
                {marketingSignals.map((signal) => (
                  <article className="signal-node" key={signal.label}>
                    <div>
                      <em>{signal.label}</em>
                      <h3>{signal.title}</h3>
                    </div>
                    <p>{signal.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
