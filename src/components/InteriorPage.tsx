"use client";

import Footer from "./Footer";
import Header from "./Header";
import { useLanguage } from "./LanguageProvider";

export type LocalizedInteriorContent = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string;
  panelTitle: string;
  panelText: string;
  chips: string[];
  sections: Array<{
    label: string;
    title: string;
    text: string;
  }>;
  steps: Array<{
    label: string;
    title: string;
    text: string;
  }>;
  questions: string[];
  ctaTitle: string;
  ctaText: string;
  primaryCta: string;
  secondaryCta: string;
};

export type InteriorPageContent = {
  active: "Servicios" | "Soluciones" | "Recursos";
  backHref: string;
  primaryHref: string;
  secondaryHref: string;
  accent: string;
  es: LocalizedInteriorContent;
  en: LocalizedInteriorContent;
};

export default function InteriorPage({ content }: { content: InteriorPageContent }) {
  const { language } = useLanguage();
  const copy = language === "en" ? content.en : content.es;
  const pageKind = content.active.toLowerCase();

  return (
    <>
      <Header active={content.active} />

      <main className={`interior-page interior-${pageKind}`}>
        <header className="interior-hero">
          <div className="wrap interior-hero-grid">
            <div className="interior-hero-main">
              <div className="interior-hero-rule" aria-hidden="true">
                <span />
                <span>{content.accent}</span>
              </div>
              <div>
                <div className="page-label">{copy.eyebrow}</div>
                <h1 className="interior-title">{copy.title}</h1>
              </div>
              <div className="interior-hero-art" aria-hidden="true">
                <span>{copy.chips[0]}</span>
                <span>{copy.sections[0]?.label}</span>
                <span>{content.accent}</span>
                <span>{copy.chips[copy.chips.length - 1]}</span>
              </div>
              <div className="interior-intro">
                <strong>{copy.lead}</strong>
                <p>{copy.intro}</p>
              </div>
            </div>

            <aside className="interior-panel">
              <div>
                <span className="interior-accent">{content.accent}</span>
                <h2>{copy.panelTitle}</h2>
                <p>{copy.panelText}</p>
              </div>
              <div className="interior-chips">
                {copy.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </aside>
          </div>
        </header>

        <div className="interior-strip" aria-hidden="true">
          <span>
            {copy.eyebrow} — {copy.lead} — {copy.panelTitle} — {copy.eyebrow} — {copy.lead} —
          </span>
        </div>

        <section className="interior-chapter interior-chapter-cards">
          <div className="wrap">
            <div className="interior-chapter-head">
              <div className="eyebrow">
                {language === "en" ? "Core" : "Núcleo"}
              </div>
              <p>
                {language === "en"
                  ? "The essential decisions behind this path."
                  : "Las decisiones esenciales detrás de esta ruta."}
              </p>
            </div>
            <div className="interior-section-grid">
              {copy.sections.map((section) => (
                <article className="interior-card" data-label={section.label} key={section.title}>
                  <span className="interior-card-mark" aria-hidden="true" />
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark">
          <div className="wrap interior-process">
            <div>
              <div className="eyebrow">{language === "en" ? "Method" : "Método"}</div>
              <h2>{language === "en" ? "How we move." : "Cómo avanzamos."}</h2>
              <p className="lead">
                {language === "en"
                  ? "A compact path from diagnosis to something useful, visible and ready to evolve."
                  : "Una ruta breve desde diagnóstico hasta una base útil, visible y preparada para evolucionar."}
              </p>
            </div>

            <div className="interior-steps">
              {copy.steps.map((step) => (
                <div className="interior-step" key={step.label}>
                  <b>{step.label}</b>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap interior-questions">
            <div>
              <div className="eyebrow">{language === "en" ? "Signals" : "Señales"}</div>
              <h2>{language === "en" ? "When this page makes sense." : "Cuándo tiene sentido esta página."}</h2>
            </div>
            <div className="interior-question-list">
              {copy.questions.map((question) => (
                <a href={content.primaryHref} key={question}>
                  <span className="mono">•</span>
                  <strong>{question}</strong>
                  <span aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="interior-cta">
              <div>
                <div className="eyebrow">{language === "en" ? "Next step" : "Siguiente paso"}</div>
                <h2>{copy.ctaTitle}</h2>
                <p>{copy.ctaText}</p>
              </div>
              <div className="cta-actions">
                <a className="btn dark-btn" href={content.primaryHref}>
                  {copy.primaryCta}
                </a>
                <a className="btn" href={content.secondaryHref}>
                  {copy.secondaryCta}
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
