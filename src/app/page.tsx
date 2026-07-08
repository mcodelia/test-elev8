import Footer from "@/components/Footer";
import Header from "@/components/Header";

const focusSteps = [
  {
    icon: "↓",
    title: "Diagnóstico",
    text: "Detectamos qué está frenando la percepción, la venta o la operación del negocio.",
  },
  {
    icon: "→",
    title: "Dirección",
    text: "Elegimos el camino correcto: marca, web, tecnología, espacio físico o una solución integrada.",
  },
  {
    icon: "✦",
    title: "Diseño",
    text: "Creamos una experiencia clara, consistente y lista para representar mejor al negocio.",
  },
  {
    icon: "↗",
    title: "Ejecución",
    text: "Coordinamos la implementación para que la idea llegue bien a pantalla, papel, espacio o sistema.",
  },
  {
    icon: "∞",
    title: "Evolución",
    text: "Ajustamos, mejoramos y escalamos lo construido según nuevos objetivos y oportunidades.",
  },
];

const services = [
  {
    label: "Strategy",
    title: "Strategy & Growth",
    text: "Diagnóstico, posicionamiento, auditorías, roadmap digital y decisiones estratégicas antes de diseñar o construir.",
  },
  {
    label: "Brand",
    title: "Brand & Creative",
    text: "Identidad visual, dirección de arte, contenido, presentaciones, campañas y sistemas gráficos memorables.",
  },
  {
    label: "Digital",
    title: "Digital Experiences",
    text: "Sitios web, landing pages, e-commerce, UX/UI, plataformas, dashboards y experiencias digitales de alto estándar.",
  },
  {
    label: "Smart",
    title: "Smart Solutions",
    text: "Automatización, inteligencia artificial, integraciones, sistemas internos, CRM, apps y software a medida.",
  },
  {
    label: "Physical",
    title: "Physical Brand",
    text: "Letreros, gráfica vehicular, acrílicos, señalética, impresión, oficinas, stands e implementación visual.",
  },
];

const solutionRoutes = [
  {
    step: "Lanzar",
    title: "Ruta Lanzamiento",
    chips: ["Marca", "Web", "Contenido"],
    text: "Para negocios que necesitan salir al mercado con una identidad clara, presencia digital y material comercial listo para vender.",
    action: "Crear desde cero",
  },
  {
    step: "Mejorar",
    title: "Ruta Upgrade",
    chips: ["Rebrand", "UX", "Ventas"],
    text: "Para empresas que ya funcionan, pero necesitan verse más profesionales, actuales y alineadas al nivel de lo que ofrecen.",
    action: "Elevar percepción",
  },
  {
    step: "Integrar",
    title: "Ruta 360",
    chips: ["Estrategia", "Marca", "Web", "Smart", "Físico"],
    text: "Para empresas que quieren ordenar todo el ecosistema: cómo se ven, cómo comunican, cómo venden, cómo operan y cómo se viven en el mundo físico.",
    action: "Construir el sistema completo",
    featured: true,
  },
  {
    step: "Optimizar",
    title: "Ruta Smart",
    chips: ["AI", "Automatización", "Software"],
    text: "Para equipos que quieren reducir trabajo manual, conectar herramientas, implementar IA y operar con sistemas más inteligentes.",
    action: "Optimizar operación",
  },
  {
    step: "Materializar",
    title: "Ruta Espacio",
    chips: ["Letreros", "Oficinas", "Vehículos"],
    text: "Para marcas que necesitan verse bien en oficinas, locales, vehículos, ferias, puntos de venta o cualquier superficie real.",
    action: "Materializar la marca",
  },
];

const clientNeeds = [
  ["Necesito crear una marca desde cero.", "Ruta Lanzamiento"],
  ["Mi empresa se ve antigua o poco profesional.", "Ruta Upgrade"],
  ["Necesito una página web que venda mejor.", "Digital Experiences"],
  ["Tengo procesos manuales y mucho Excel.", "Smart Solutions"],
  ["Necesito letreros, impresión o gráfica física.", "Physical Brand"],
  ["Quiero ordenar todo mi negocio visual y digitalmente.", "Ruta 360"],
];

const marketingSignals = [
  {
    label: "SEÑAL 01",
    title: "Ideas con punto de vista",
    text: "Publicaciones que muestran cómo detectar una marca débil, una web que no convierte o una experiencia mal resuelta.",
  },
  {
    label: "SEÑAL 02",
    title: "Transformaciones visibles",
    text: "Antes y después con contexto: qué se corrigió, por qué importaba y cómo cambió la percepción o el resultado.",
  },
  {
    label: "SEÑAL 03",
    title: "Campañas por necesidad",
    text: "Mensajes separados para clientes que quieren lanzar, mejorar, automatizar, implementar o transformar todo su ecosistema.",
  },
  {
    label: "SEÑAL 04",
    title: "Diagnóstico inicial",
    text: "Una primera revisión para mostrar oportunidades concretas y convertir el interés en una conversación seria.",
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
                <h1>Una sola visión para elevar marcas, productos y experiencias.</h1>
              </div>
              <div className="hero-copy">
                <strong>
                  Estrategia, diseño y ejecución trabajando como un solo sistema.
                </strong>
                <p>
                  Elev8 acompaña a empresas que quieren verse mejor, operar con
                  más claridad y construir experiencias consistentes en lo
                  digital, lo visual y lo físico.
                </p>
              </div>
            </div>

            <div className="side">
              <div className="poster">
                <div className="poster-inner">
                  <span className="btn poster-pill">Elev8 Studio</span>
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
                  Un punto de entrada para convertir ideas, marcas y necesidades
                  operativas en soluciones visibles, funcionales y bien ejecutadas.
                </p>
                <h3>One team.</h3>
              </div>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <span>
            Estrategia & Growth — Marca & Creatividad — Experiencias Digitales —
            Soluciones Inteligentes — Marca Física — Estrategia & Growth — Marca
            & Creatividad — Experiencias Digitales — Soluciones Inteligentes —
            Marca Física —
          </span>
        </div>

        <section id="modelo">
          <div className="wrap">
            <SectionHeading
              eyebrow="Enfoque"
              title="Primero entendemos el problema. Después diseñamos la ruta."
            >
              Cada proyecto parte desde una necesidad concreta: lanzar, ordenar,
              vender, automatizar o materializar una marca. Desde ahí definimos
              el camino correcto.
            </SectionHeading>

            <div className="logic">
              {focusSteps.map((step) => (
                <article className="logic-card" key={step.title}>
                  <span className="slash">/</span>
                  <b>{step.icon}</b>
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
              title="Cinco capacidades. Una experiencia coherente."
            >
              Elev8 integra estrategia, diseño, tecnología y producción física
              para resolver proyectos de forma más simple, cuidada y completa.
            </SectionHeading>

            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.title}>
                  <span className="num">{service.label}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta">
          <div className="wrap">
            <SectionHeading
              eyebrow="Rutas de solución"
              title="Rutas pensadas según el momento del negocio."
            >
              La oferta se organiza como un sistema de entrada: el cliente
              identifica su necesidad y Elev8 traduce esa intención en una
              solución clara.
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
                    <span aria-hidden="true">↗</span>
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
              <h2>Cada necesidad tiene una puerta de entrada.</h2>
              <p>
                Estas son las señales que ayudan a transformar una consulta
                ambigua en una propuesta clara, útil y accionable.
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
                <div className="eyebrow">Estrategia de marketing</div>
                <h2>No perseguir atención. Construir deseo.</h2>
              </div>
              <p className="lead">
                La comunicación de Elev8 debe mostrar criterio antes de vender:
                revelar problemas que el cliente reconoce, demostrar soluciones
                posibles y abrir conversaciones con intención.
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
