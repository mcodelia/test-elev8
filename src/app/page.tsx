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
      services: "Servicios",
      work: "Trabajo",
      process: "Proceso",
      contact: "Contacto",
    },
    hero: {
      kickerLeft: "Estudio creativo digital",
      kickerRight: "Creado para lo que viene",
      headline:
        "Construimos marcas, sitios web y experiencias digitales que impulsan negocios.",
      paragraph:
        "Elev8 colabora con fundadores y equipos para convertir ambición en presencia digital distintiva, desde sistemas de identidad estratégica hasta sitios web pulidos y experiencias de producto.",
    },
    buttons: {
      start: "Iniciar Proyecto",
      work: "Ver Trabajo",
    },
    services: {
      eyebrow: "Servicios",
      headline:
        "Estrategia clara. Diseño preciso. Trabajo digital con peso propio.",
      items: [
        "Estrategia de Marca",
        "Diseño Web",
        "Productos Digitales",
        "Contenido y Campañas",
      ],
    },
    work: {
      eyebrow: "Trabajo Seleccionado",
      headline:
        "Tres direcciones recientes para marcas listas para elevar su señal.",
      projects: [
        {
          name: "Ruta Clara",
          type: "Identidad / Sitio de Producto",
          detail:
            "Un universo de marca preciso para una plataforma logística entrando a un mercado más rápido.",
        },
        {
          name: "Casa Lino",
          type: "Experiencia Commerce",
          detail:
            "Una tienda editorial con mejor merchandising y un camino de compra más sereno.",
        },
        {
          name: "Pulso",
          type: "Campaña Digital",
          detail:
            "Un sistema de lanzamiento construido alrededor de historia, movimiento e impulso medible.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      headline:
        "Un camino directo desde la primera señal hasta un sistema terminado.",
      steps: [
        {
          step: "01",
          title: "Descubrir",
          text: "Mapeamos el negocio, la audiencia, la tensión del mercado y el territorio creativo que vale la pena ocupar.",
        },
        {
          step: "02",
          title: "Diseñar",
          text: "Convertimos la estrategia en identidad, interfaz, narrativa y sistemas con un punto de vista claro.",
        },
        {
          step: "03",
          title: "Construir",
          text: "Lanzamos el sitio, el producto y los activos de campaña con oficio cuidadoso y momentum práctico.",
        },
      ],
    },
    cta: {
      eyebrow: "Comenzar",
      headline:
        "Trae el brief, la ambición o el problema que vale la pena resolver.",
    },
    footer: {
      descriptor: "Estudio creativo digital premium",
    },
  },
  en: {
    navLabel: "Main navigation",
    homeLabel: "Elev8 home",
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      kickerLeft: "Creative Digital Studio",
      kickerRight: "Est. for what comes next",
      headline:
        "We build brands, websites and digital experiences that move businesses forward.",
      paragraph:
        "Elev8 partners with founders and teams to turn ambition into distinctive digital presence, from strategic identity systems to polished websites and product experiences.",
    },
    buttons: {
      start: "Start a Project",
      work: "View Work",
    },
    services: {
      eyebrow: "Services",
      headline: "Clear strategy. Exacting design. Digital work with weight.",
      items: [
        "Brand Strategy",
        "Web Design",
        "Digital Products",
        "Content & Campaigns",
      ],
    },
    work: {
      eyebrow: "Selected Work",
      headline:
        "Three recent directions for brands ready to raise the signal.",
      projects: [
        {
          name: "Northline Systems",
          type: "Identity / Product Site",
          detail:
            "A precise brand world for a logistics platform entering a faster market.",
        },
        {
          name: "Atelier Vale",
          type: "Commerce Experience",
          detail:
            "An editorial storefront with sharper merchandising and a calmer path to purchase.",
        },
        {
          name: "Signal Room",
          type: "Digital Campaign",
          detail:
            "A launch system built around story, motion, and measurable audience momentum.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      headline: "A direct path from the first signal to a finished system.",
      steps: [
        {
          step: "01",
          title: "Discover",
          text: "We map the business, audience, market tension, and the creative territory worth owning.",
        },
        {
          step: "02",
          title: "Design",
          text: "We turn strategy into identity, interface, narrative, and systems with a clear point of view.",
        },
        {
          step: "03",
          title: "Build",
          text: "We ship the site, product, and campaign assets with careful craft and practical momentum.",
        },
      ],
    },
    cta: {
      eyebrow: "Start",
      headline:
        "Bring us the brief, the ambition, or the problem worth solving.",
    },
    footer: {
      descriptor: "Premium creative digital studio",
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
      <nav className="site-nav" aria-label={t.navLabel}>
        <a className="brand-mark" href="#top" aria-label={t.homeLabel}>
          Elev8
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            <a href="#services">{t.nav.services}</a>
            <a href="#work">{t.nav.work}</a>
            <a href="#process">{t.nav.process}</a>
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

      <section id="top" className="hero section-shell">
        <div className="hero-kicker">
          <span>{t.hero.kickerLeft}</span>
          <span>{t.hero.kickerRight}</span>
        </div>
        <div className="hero-grid">
          <h1>{t.hero.headline}</h1>
          <div className="hero-copy">
            <p>{t.hero.paragraph}</p>
            <div className="button-row">
              <a className="button primary" href="#contact">
                {t.buttons.start}
              </a>
              <a className="button secondary" href="#work">
                {t.buttons.work}
              </a>
            </div>
          </div>
        </div>
        <div className="hero-line" aria-hidden="true" />
      </section>

      <section id="services" className="section-shell split-section">
        <div>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.headline}</h2>
        </div>
        <div className="service-list">
          {t.services.items.map((service) => (
            <div className="service-item" key={service}>
              <span>{service}</span>
              <span aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell work-section">
        <div className="section-heading">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2>{t.work.headline}</h2>
        </div>
        <div className="work-grid">
          {t.work.projects.map((project, index) => (
            <article className="work-item" key={project.name}>
              <span className="work-number">0{index + 1}</span>
              <div>
                <h3>{project.name}</h3>
                <p className="work-type">{project.type}</p>
                <p>{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-shell process-section">
        <div className="section-heading">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2>{t.process.headline}</h2>
        </div>
        <div className="process-grid">
          {t.process.steps.map((item) => (
            <article className="process-item" key={item.title}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section section-shell">
        <p className="eyebrow">{t.cta.eyebrow}</p>
        <h2>{t.cta.headline}</h2>
        <a className="button primary" href="mailto:hello@elev8.studio">
          {t.buttons.start}
        </a>
      </section>

      <footer className="site-footer section-shell">
        <span>Elev8</span>
        <span>{t.footer.descriptor}</span>
        <a href="mailto:hello@elev8.studio">hello@elev8.studio</a>
      </footer>
    </main>
  );
}
