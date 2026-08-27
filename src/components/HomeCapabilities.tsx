"use client";

import Link from "next/link";
import { useState } from "react";

import { useLanguage } from "./LanguageProvider";

const capabilities = [
  {
    title: "Estrategia",
    text: "Aclaramos qué hacer, qué priorizar y cómo avanzar.",
    href: "/servicios/strategy-growth.html",
  },
  {
    title: "Marca",
    text: "Creamos o mejoramos la identidad y la forma en que tu negocio se presenta.",
    href: "/servicios/brand-creative.html",
  },
  {
    title: "Sitios web",
    text: "Diseñamos sitios claros, modernos y pensados para informar o vender.",
    href: "/servicios/digital-experiences.html",
  },
  {
    title: "Automatización",
    text: "Hacemos que tareas repetitivas puedan realizarse de forma automática.",
    href: "/servicios/smart-solutions.html",
  },
  {
    title: "Espacios",
    text: "Llevamos tu marca a oficinas, locales, señalética y otros espacios físicos.",
    href: "/servicios/physical-brand.html",
  },
];

export default function HomeCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language, t } = useLanguage();
  const activeCapability = capabilities[activeIndex];

  const hrefForLanguage = (href: string) => {
    if (language === "en") return `/en${href}`;
    return href;
  };

  return (
    <section className="e8-capabilities" id="servicios">
      <div className="wrap e8-capabilities-layout">
        <div className="e8-capabilities-intro">
          <h2>{t("Cinco capacidades. Una dirección.")}</h2>
          <p>
            {t(
              "Podemos trabajar en una necesidad específica o conectar varias áreas para resolver un problema completo.",
            )}
          </p>
        </div>

        <div className="e8-capability-picker" aria-label={t("Capacidades")}>
          <div className="e8-capability-options">
            {capabilities.map((capability, index) => {
              const isActive = index === activeIndex;
              const descriptionId = `capability-${index}-description`;

              return (
                <div className="e8-capability-item" key={capability.title}>
                  <button
                    aria-controls={descriptionId}
                    aria-expanded={isActive}
                    className={isActive ? "active" : ""}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    {t(capability.title)}
                  </button>

                  <div
                    className="e8-capability-mobile-detail"
                    hidden={!isActive}
                    id={descriptionId}
                  >
                    <p>{t(capability.text)}</p>
                    <Link href={hrefForLanguage(capability.href)}>
                      {t("Conocer este servicio")} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="e8-capability-detail" aria-live="polite">
            <p>{t(activeCapability.text)}</p>
            <Link href={hrefForLanguage(activeCapability.href)}>
              {t("Conocer este servicio")} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
