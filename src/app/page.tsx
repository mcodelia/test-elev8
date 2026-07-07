"use client";

import { useEffect, useSyncExternalStore } from "react";

type Language = "es" | "en";
type LanguageChangeListener = () => void;

const languageStorageKey = "elev8-language";
const languageChangeEvent = "elev8-language-change";

const translations = {
  es: {
    navLabel: "Navegación principal",
    homeLabel: "Inicio de Elev8",
    nav: {
      home: "Inicio",
      services: "Servicios",
      work: "Trabajo",
      process: "Proceso",
      about: "Acerca",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Estudio creativo y digital",
      headline:
        "Elevamos marcas con estrategia, diseño y experiencias digitales.",
      paragraph:
        "Construimos sistemas visuales, sitios web y activos digitales que ayudan a las empresas a comunicar mejor, vender con más claridad y crecer con intención.",
      meta: "Strategy / Design / Digital Systems",
    },
    buttons: {
      start: "Iniciar Proyecto",
      services: "Ver Servicios",
      conversation: "Iniciar Conversación",
    },
    serviceStrip: [
      "Branding",
      "Web Design",
      "UI/UX",
      "Content",
      "Automation",
      "Strategy",
    ],
    intro: {
      eyebrow: "Qué hacemos",
      headline:
        "Unimos estrategia, identidad y ejecución digital en un sistema creativo claro.",
      text: "Trabajamos con fundadores, equipos y compañías que necesitan visuales premium, comunicación más precisa y activos que acompañen el crecimiento real del negocio.",
      stats: [
        { value: "08", label: "Sistemas creativos" },
        { value: "06", label: "Capacidades clave" },
        { value: "01", label: "Partner integrado" },
      ],
    },
    work: {
      eyebrow: "Trabajo seleccionado",
      headline: "Proyectos diseñados para verse mejor y operar con más claridad.",
      paragraph:
        "Una selección de sistemas digitales, marcas y activos visuales creados para que las empresas comuniquen mejor y se muevan más rápido.",
      projects: [
        {
          name: "Linq",
          type: "Plataforma digital",
          detail:
            "Sistema de marca, producto digital y visuales empresariales para una experiencia más clara.",
        },
        {
          name: "Entronix",
          type: "Diseño corporativo",
          detail:
            "Dashboards, documentación comercial y lenguaje visual ejecutivo para equipos B2B.",
        },
        {
          name: "Conéctapo",
          type: "Experiencia NFC",
          detail:
            "Marca, concepto de producto y sistema de interacción digital para una experiencia física-digital.",
        },
        {
          name: "Natura Loft",
          type: "Identidad e-commerce",
          detail:
            "Dirección visual, lógica de catálogo y activos premium para una marca retail cálida.",
        },
        {
          name: "Hospitality Projects",
          type: "Sistema de posicionamiento",
          detail:
            "Contenido, presentación comercial y narrativa visual para proyectos de renta premium.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      headline: "Lo que construimos",
      paragraph:
        "Desde identidad visual hasta plataformas digitales, Elev8 conecta estrategia, diseño y ejecución con un estándar visual alto.",
      items: [
        {
          title: "Identidad de Marca",
          text: "Sistemas visuales, logos, guías y fundamentos de marca diseñados para escalar en cada canal.",
        },
        {
          title: "Diseño Web",
          text: "Sitios premium diseñados para comunicar con claridad, convertir mejor y sentirse alineados con el negocio.",
        },
        {
          title: "Diseño UI/UX",
          text: "Interfaces, dashboards y experiencias de producto enfocadas en claridad, usabilidad y precisión visual.",
        },
        {
          title: "Dirección Creativa",
          text: "Dirección de arte, conceptos visuales y sistemas de campaña para marcas que necesitan más presencia.",
        },
        {
          title: "Contenido Digital",
          text: "Presentaciones, piezas sociales, videos, gráficos y material comercial diseñado con consistencia.",
        },
        {
          title: "Automatización y Sistemas",
          text: "Flujos digitales, herramientas e integraciones que ayudan a los equipos a operar mejor.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      headline: "Un proceso claro desde la idea hasta la ejecución.",
      steps: [
        {
          title: "Descubrir",
          text: "Entendemos objetivos, audiencia, oferta y ecosistema visual actual.",
        },
        {
          title: "Definir",
          text: "Ordenamos estrategia, mensaje y dirección creativa antes de diseñar.",
        },
        {
          title: "Diseñar",
          text: "Creamos el sistema visual, sitio web o activos digitales con intención.",
        },
        {
          title: "Construir",
          text: "Convertimos la dirección aprobada en entregables funcionales y pulidos.",
        },
        {
          title: "Optimizar",
          text: "Refinamos la experiencia para que funcione mejor en uso real.",
        },
      ],
    },
    about: {
      eyebrow: "Acerca de Elev8",
      headline: "Diseño, estrategia y ejecución para marcas que necesitan más que decoración.",
      text: "Elev8 ayuda a empresas a crear experiencias digitales más fuertes. Somos un partner para equipos que necesitan claridad estratégica, dirección visual premium y activos que realmente apoyen el crecimiento.",
      cta: "Construyamos algo más preciso.",
    },
    cta: {
      headline: "¿Listo para elevar tu marca?",
      paragraph:
        "Creemos el sitio web, identidad o sistema digital que tu negocio necesita para su próxima etapa.",
    },
    footer: {
      descriptor:
        "Estrategia, diseño y experiencias digitales para marcas listas para subir de nivel.",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Trabajo", href: "#work" },
        { label: "Proceso", href: "#process" },
        { label: "Contacto", href: "#contact" },
      ],
    },
  },
  en: {
    navLabel: "Main navigation",
    homeLabel: "Elev8 home",
    nav: {
      home: "Home",
      services: "Services",
      work: "Work",
      process: "Process",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Creative digital studio",
      headline:
        "Elevating brands through strategy, design and digital experiences.",
      paragraph:
        "We build visual systems, websites and digital assets that help companies communicate better, sell smarter and grow with clarity.",
      meta: "Strategy / Design / Digital Systems",
    },
    buttons: {
      start: "Start a Project",
      services: "View Services",
      conversation: "Start a Conversation",
    },
    serviceStrip: [
      "Branding",
      "Web Design",
      "UI/UX",
      "Content",
      "Automation",
      "Strategy",
    ],
    intro: {
      eyebrow: "What we do",
      headline:
        "Elev8 connects strategy, identity and digital execution into one clear creative system.",
      text: "We partner with founders, teams and companies that need premium visuals, sharper communication and assets that support real business growth.",
      stats: [
        { value: "08", label: "Creative systems" },
        { value: "06", label: "Core capabilities" },
        { value: "01", label: "Integrated partner" },
      ],
    },
    work: {
      eyebrow: "Selected work",
      headline: "Projects designed to look sharper and operate with more clarity.",
      paragraph:
        "A focused collection of digital, brand and visual systems created to help companies communicate better and move faster.",
      projects: [
        {
          name: "Linq",
          type: "Digital platform",
          detail:
            "Brand system, digital product and enterprise visuals for a cleaner experience.",
        },
        {
          name: "Entronix",
          type: "Corporate design",
          detail:
            "Dashboards, commercial documentation and executive visual language for B2B teams.",
        },
        {
          name: "Conéctapo",
          type: "NFC experience",
          detail:
            "Brand, product concept and digital interaction system for a physical-digital experience.",
        },
        {
          name: "Natura Loft",
          type: "E-commerce identity",
          detail:
            "Visual direction, catalog logic and premium assets for a warm retail brand.",
        },
        {
          name: "Hospitality Projects",
          type: "Positioning system",
          detail:
            "Content, commercial presentation and visual narrative for premium rental projects.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      headline: "What we build",
      paragraph:
        "From brand identity to digital platforms, Elev8 connects strategy, design and execution with a high visual standard.",
      items: [
        {
          title: "Brand Identity",
          text: "Visual systems, logos, guidelines and brand foundations built to scale across every channel.",
        },
        {
          title: "Web Design",
          text: "Premium websites designed to communicate clearly, convert better and feel aligned with your business.",
        },
        {
          title: "UI/UX Design",
          text: "Interfaces, dashboards and product experiences focused on clarity, usability and visual precision.",
        },
        {
          title: "Creative Direction",
          text: "Art direction, visual concepts and campaign systems for brands that need a stronger presence.",
        },
        {
          title: "Digital Content",
          text: "Presentations, social assets, videos, graphics and commercial material designed with consistency.",
        },
        {
          title: "Automation & Systems",
          text: "Digital workflows, tools and integrations that help teams operate better.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      headline: "A clear process from idea to execution.",
      steps: [
        {
          title: "Discover",
          text: "We understand your goals, audience, offer and current visual ecosystem.",
        },
        {
          title: "Define",
          text: "We organize the strategy, message and creative direction before designing.",
        },
        {
          title: "Design",
          text: "We create the visual system, website or digital assets with intent.",
        },
        {
          title: "Build",
          text: "We turn the approved direction into functional and polished deliverables.",
        },
        {
          title: "Optimize",
          text: "We refine the experience so it performs better across real use cases.",
        },
      ],
    },
    about: {
      eyebrow: "About Elev8",
      headline: "Design, strategy and execution for brands that need more than decoration.",
      text: "Elev8 helps businesses create stronger digital experiences. We are a partner for teams that need strategic clarity, premium visual direction and assets that actually support growth.",
      cta: "Let's build something sharper.",
    },
    cta: {
      headline: "Ready to elevate your brand?",
      paragraph:
        "Let's create the website, identity or digital system your business needs for its next stage.",
    },
    footer: {
      descriptor:
        "Strategy, design and digital experiences for brands ready to move higher.",
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
} satisfies Record<Language, object>;

const languageLabels: Record<Language, string> = {
  es: "ES",
  en: "EN",
};

const getStoredLanguage = (): Language => {
  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  return storedLanguage === "en" ? "en" : "es";
};

const getServerLanguage = (): Language => "es";

const subscribeToLanguage = (listener: LanguageChangeListener) => {
  window.addEventListener("storage", listener);
  window.addEventListener(languageChangeEvent, listener);

  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(languageChangeEvent, listener);
  };
};

export default function Home() {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getStoredLanguage,
    getServerLanguage,
  );
  const t = translations[language];

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const changeLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(languageStorageKey, nextLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  };

  return (
    <main>
      <header className="site-header">
        <nav className="site-nav" aria-label={t.navLabel}>
          <a className="brand-mark" href="#home" aria-label={t.homeLabel}>
            Elev8
          </a>
          <div className="nav-actions">
            <div className="nav-links">
              <a href="#home">{t.nav.home}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#work">{t.nav.work}</a>
              <a href="#process">{t.nav.process}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#contact">{t.nav.contact}</a>
            </div>
            <div className="language-switcher" aria-label="Language selector">
              {(["es", "en"] as const).map((option) => (
                <button
                  aria-pressed={language === option}
                  className={language === option ? "is-active" : ""}
                  key={option}
                  onClick={() => changeLanguage(option)}
                  type="button"
                >
                  {languageLabels[option]}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.headline}</h1>
          <p>{t.hero.paragraph}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              {t.buttons.start}
            </a>
            <a className="button button-secondary" href="#services">
              {t.buttons.services}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="studio-board">
            <span className="board-tag">ELV8 / 08</span>
            <span className="board-line line-a" />
            <span className="board-line line-b" />
            <span className="board-line line-c" />
            <div className="mock-window window-main">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-window window-side">
              <span />
              <span />
            </div>
            <div className="blue-marker" />
          </div>
          <div className="hero-meta">
            <span>{t.hero.meta}</span>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section className="service-strip" aria-label={t.services.eyebrow}>
        <div className="section-shell strip-grid">
          {t.serviceStrip.map((service, index) => (
            <a href="#services" key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {service}
            </a>
          ))}
        </div>
      </section>

      <section className="intro section-shell">
        <div>
          <p className="eyebrow">{t.intro.eyebrow}</p>
          <h2>{t.intro.headline}</h2>
        </div>
        <div className="intro-copy">
          <p>{t.intro.text}</p>
          <div className="stats-grid">
            {t.intro.stats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <div>
            <h2>{t.work.headline}</h2>
            <p>{t.work.paragraph}</p>
          </div>
        </div>

        <div className="portfolio-layout">
          {t.work.projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <div className="project-visual" aria-hidden="true">
                <span className="project-number">0{index + 1}</span>
                <div className="project-surface">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="project-content">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-shell section-heading">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <div>
            <h2>{t.services.headline}</h2>
            <p>{t.services.paragraph}</p>
          </div>
        </div>
        <div className="section-shell services-list">
          {t.services.items.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process-section section-shell">
        <div className="section-heading">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2>{t.process.headline}</h2>
        </div>
        <div className="process-grid">
          {t.process.steps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-shell about-grid">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.headline}</h2>
          </div>
          <div>
            <p>{t.about.text}</p>
            <a className="button button-dark" href="#contact">
              {t.about.cta}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section section-shell">
        <p className="eyebrow">Elev8 / Contact</p>
        <h2>{t.cta.headline}</h2>
        <p>{t.cta.paragraph}</p>
        <a className="button button-primary" href="mailto:hello@elev8.studio">
          {t.buttons.conversation}
        </a>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <strong>Elev8</strong>
            <p>{t.footer.descriptor}</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {t.footer.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="mailto:hello@elev8.studio">hello@elev8.studio</a>
        </div>
      </footer>
    </main>
  );
}
