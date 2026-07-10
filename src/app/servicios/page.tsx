import Footer from "@/components/Footer";
import Header from "@/components/Header";

const radarItems = [
  ["EST", "Estrategia y crecimiento", "/servicios/strategy-growth.html"],
  ["MAR", "Marca y creatividad", "/servicios/brand-creative.html"],
  ["WEB", "Experiencias digitales", "/servicios/digital-experiences.html"],
  ["IA", "Soluciones inteligentes", "/servicios/smart-solutions.html"],
  ["FIS", "Marca física", "/servicios/physical-brand.html"],
];

const routeCards = [
  {
    route: "Crear",
    title: "Nacer bien",
    text: "Para negocios, productos o líneas nuevas que necesitan nombre, identidad, discurso, sitio web y materiales de lanzamiento.",
    label: "Marca + Digital",
  },
  {
    route: "Ordenar",
    title: "Verse mejor",
    text: "Para empresas que ya venden, pero su presencia visual, comercial o digital no refleja el nivel real de lo que ofrecen.",
    label: "Estrategia + Creatividad",
  },
  {
    route: "Sistema",
    title: "Transformar el ecosistema",
    text: "Para empresas que necesitan alinear estrategia, marca, web, automatización y experiencia física en una sola dirección. Menos Frankenstein corporativo, más máquina bien aceitada.",
    label: "Ruta integral",
    featured: true,
  },
  {
    route: "Escalar",
    title: "Operar más inteligente",
    text: "Para equipos con procesos manuales, herramientas desconectadas, mucho Excel y oportunidades claras de automatización.",
    label: "Crecimiento + Inteligencia",
  },
  {
    route: "Materializar",
    title: "Llevar la marca al mundo real",
    text: "Para oficinas, locales, vehículos, stands y espacios donde la marca necesita verse consistente fuera de la pantalla.",
    label: "Creatividad + Físico",
  },
];

const capabilities = [
  {
    mark: "→",
    title: "Estrategia y crecimiento",
    href: "/servicios/strategy-growth.html",
    text: "Define la dirección antes de ejecutar. Ayuda a ordenar objetivos, detectar oportunidades, priorizar acciones y construir una ruta clara de crecimiento.",
    tags: ["Consultoría", "Diagnóstico", "Hoja de ruta", "Transformación digital"],
  },
  {
    mark: "✦",
    title: "Marca y creatividad",
    href: "/servicios/brand-creative.html",
    text: "Construye la percepción de la marca: cómo se ve, cómo habla, cómo presenta su valor y cómo se diferencia en cada punto de contacto.",
    tags: ["Marca", "Nombre de marca", "Identidad", "Dirección de arte", "Presentaciones", "Contenido"],
  },
  {
    mark: "⌁",
    title: "Experiencias digitales",
    href: "/servicios/digital-experiences.html",
    text: "Convierte la presencia digital en una experiencia clara, rápida y orientada a objetivos: informar, vender, captar, gestionar o visualizar datos.",
    tags: ["Sitios web", "Páginas de aterrizaje", "Comercio electrónico", "Experiencia de usuario", "Paneles", "Plataformas"],
  },
  {
    mark: "∞",
    title: "Soluciones inteligentes",
    href: "/servicios/smart-solutions.html",
    text: "Integra IA, automatización y software para reducir fricción operativa, conectar herramientas y crear soluciones internas más eficientes.",
    tags: ["IA", "Automatización", "Sistemas", "Aplicaciones", "Integraciones", "Gestión comercial"],
  },
  {
    mark: "●",
    title: "Marca física",
    href: "/servicios/physical-brand.html",
    text: "Lleva la identidad al espacio físico con piezas, soportes y aplicaciones que hacen visible la marca en el mundo real.",
    tags: ["Letreros", "Acrílicos", "Gráfica Vehicular", "Señalética", "Oficinas", "Stands"],
  },
];

const details = [
  {
    id: "EST",
    title: "Estrategia y crecimiento",
    href: "/servicios/strategy-growth.html",
    text: "Ideal cuando todavía no está claro qué construir, qué priorizar o cómo transformar una necesidad en un plan realista.",
    items: ["Consultoría", "Diagnóstico", "Hoja de ruta", "Transformación digital"],
  },
  {
    id: "MAR",
    title: "Marca y creatividad",
    href: "/servicios/brand-creative.html",
    text: "Para marcas que necesitan una identidad más sólida, una comunicación más profesional y un lenguaje visual consistente.",
    items: ["Marca", "Nombre de marca", "Identidad", "Dirección de arte", "Presentaciones", "Contenido"],
  },
  {
    id: "WEB",
    title: "Experiencias digitales",
    href: "/servicios/digital-experiences.html",
    text: "Para transformar sitios, landings, ecommerce o interfaces en experiencias digitales claras, funcionales y memorables.",
    items: ["Sitios web", "Páginas de aterrizaje", "Comercio electrónico", "Experiencia de usuario", "Paneles", "Plataformas"],
  },
  {
    id: "IA",
    title: "Soluciones inteligentes",
    href: "/servicios/smart-solutions.html",
    text: "Para empresas que quieren trabajar con menos fricción, conectar herramientas y convertir procesos repetitivos en sistemas inteligentes.",
    items: ["IA", "Automatización", "Sistemas", "Aplicaciones", "Integraciones", "Gestión comercial"],
  },
  {
    id: "FIS",
    title: "Marca física",
    href: "/servicios/physical-brand.html",
    text: "Para que la marca no se quede atrapada en el PDF: se vea en oficinas, vehículos, señalética, stands y puntos de contacto reales.",
    items: ["Letreros", "Acrílicos", "Gráfica Vehicular", "Señalética", "Oficinas", "Stands"],
  },
];

const buildSteps = [
  {
    label: "Detectar",
    title: "Entendemos la necesidad.",
    text: "Qué quiere lograr el negocio, qué está frenando el avance y qué señales muestran que la marca, la web, el proceso o el espacio ya quedaron cortos.",
  },
  {
    label: "Ordenar",
    title: "Definimos la combinación correcta.",
    text: "No todo proyecto necesita todo. Elegimos qué capacidades entran, en qué orden y con qué nivel de profundidad.",
  },
  {
    label: "Crear",
    title: "Diseñamos y construimos.",
    text: "Pasamos de estrategia a piezas concretas: identidad, sitio, landing, dashboard, automatización, app, letrero, señalética o sistema completo.",
  },
  {
    label: "Escalar",
    title: "Preparamos la evolución.",
    text: "Lo construido debe poder crecer. Dejamos una base ordenada para nuevas páginas, campañas, integraciones, módulos o implementaciones físicas.",
  },
];

const combos = [
  {
    label: "Sistema de presencia",
    title: "Marca + Digital",
    text: "Una identidad clara y una experiencia web que convierte esa percepción en confianza, contacto y venta.",
  },
  {
    label: "Sistema operativo",
    title: "Crecimiento + Inteligencia",
    text: "Diagnóstico, roadmap, automatización e IA para ordenar procesos y liberar tiempo operativo.",
  },
  {
    label: "Sistema tangible",
    title: "Creatividad + Físico",
    text: "Una marca que se siente consistente en presentaciones, contenido, oficinas, vehículos, stands y señalética.",
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
                  Cinco capacidades para elevar empresas completas.
                </h1>
              </div>
              <div className="services-intro">
                <strong>
                  La estrategia, la marca, lo digital, la tecnología y lo físico
                  no deberían vivir separados.
                </strong>
                <p>
                  Esta página funciona como índice de capacidades: una primera
                  lectura para entender qué puede resolver Elev8 y desde qué
                  servicio conviene entrar antes de construir páginas individuales
                  para cada área.
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
                  Un sistema de servicios pensado para crear, ordenar,
                  modernizar, automatizar y materializar marcas con una misma
                  dirección.
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
              title="No vendemos piezas sueltas. Construimos sistemas."
            >
              Elev8 debe sentirse como una sola puerta de entrada para resolver
              problemas de negocio: desde una marca que necesita nacer hasta una
              empresa que necesita modernizar su operación completa.
            </SectionHeading>

            <div className="route-cards">
              {routeCards.map((card) => (
                <article
                  className={`route-card${card.featured ? " featured" : ""}`}
                  data-route={card.route}
                  key={card.title}
                >
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <strong>{card.label}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capacidades" className="dark">
          <div className="wrap">
            <SectionHeading
              eyebrow="Capacidades"
              title="Las cinco áreas de servicio."
            >
              Cada capacidad puede funcionar de forma independiente, pero el
              valor más fuerte aparece cuando se conectan bajo una misma
              estrategia.
            </SectionHeading>

            <div className="capability-index">
              {capabilities.map((capability) => (
                <article className="capability-row" key={capability.title}>
                  <a href={capability.href}>
                    <span className="capability-mark">{capability.mark}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.text}</p>
                    <div className="capability-tags">
                      {capability.tags.map((tag) => (
                        <span className="capability-tag" key={tag}>
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

        <section id="detalle">
          <div className="wrap">
            <SectionHeading
              eyebrow="Primer approach"
              title="Una lectura rápida para entender qué resuelve cada servicio."
            >
              Esta sección puede crecer después en páginas individuales con
              casos, procesos, entregables, planes y preguntas frecuentes por
              servicio.
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
                    Ver página
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso">
          <div className="wrap build-system">
            <div className="build-left">
              <div className="eyebrow">Cómo trabajamos</div>
              <h2>Del problema al sistema.</h2>
              <p className="lead">
                La página de servicios no debe sentirse como un menú de
                restaurant eterno. Debe ayudar al cliente a identificar su
                problema y entrar por la ruta correcta.
              </p>
            </div>
            <div className="build-steps">
              {buildSteps.map((step) => (
                <div className="build-step" key={step.label}>
                  <b>{step.label}</b>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="combinaciones">
          <div className="wrap">
            <div className="combination-board">
              <div className="eyebrow">Capacidades conectadas</div>
              <h2>El valor real aparece cuando las áreas trabajan juntas.</h2>
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
                <h2>Desde esta página nacen las páginas individuales.</h2>
                <p>
                  El próximo paso es profundizar cada servicio con una
                  estructura propia: problema, solución, entregables, proceso,
                  módulos, casos potenciales, preguntas frecuentes y llamado a la acción
                  específico.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href="/contacto#formulario">
                  Iniciar proyecto
                </a>
                <a className="btn" href="/servicios/strategy-growth.html">
                  Primer servicio
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
