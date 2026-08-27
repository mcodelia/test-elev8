"use client";

import Link from "next/link";
import { useState } from "react";

import { useLanguage } from "./LanguageProvider";

const navItems = [
  { href: "/#trabajo", label: "Trabajo", active: ["Trabajo"] },
  { href: "/servicios", label: "Servicios", active: ["Servicios"] },
  { href: "/soluciones", label: "Soluciones", active: ["Soluciones"] },
  { href: "/empresa", label: "Estudio", active: ["Estudio", "Acerca", "Empresa"] },
  { href: "/recursos", label: "Ideas", active: ["Ideas", "Recursos"] },
];

export default function Header({ active }: { active?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const hrefForLanguage = (href: string) => {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;

    const [pathWithQuery, hash = ""] = href.split("#");
    const [path, query = ""] = pathWithQuery.split("?");
    const cleanPath = path === "/en" ? "/" : path.replace(/^\/en(?=\/)/, "");
    const localizedPath = language === "en" ? (cleanPath === "/" ? "/en" : `/en${cleanPath}`) : cleanPath;

    return `${localizedPath}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  };

  return (
    <nav className={`nav e8-nav${isMenuOpen ? " menu-open" : ""}`} aria-label={t("Navegación principal")}>
      <div className="wrap navin e8-nav-inner">
        <Link className="logo e8-logo" href={hrefForLanguage("/")} aria-label={t("Elev8 inicio")} onClick={closeMenu}>
          elev8
        </Link>

        <div className="links e8-nav-links">
          {navItems.map((item) => (
            <Link
              className={`nav-trigger e8-nav-link${active && item.active.includes(active) ? " active" : ""}`}
              href={hrefForLanguage(item.href)}
              key={item.label}
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        <div className="e8-nav-actions">
          <Link href={hrefForLanguage("/contacto#formulario")} className="btn nav-cta e8-nav-cta">
            {t("Iniciar proyecto")}
          </Link>

          <div className="language-toggle e8-language-toggle" aria-label={t("Selector de idioma")}>
            <button
              className={language === "es" ? "active" : ""}
              type="button"
              suppressHydrationWarning
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
            <span>/</span>
            <button
              className={language === "en" ? "active" : ""}
              type="button"
              suppressHydrationWarning
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>

          <button
            className="mobile-menu-toggle e8-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? t("Cerrar menú") : t("Abrir menú")}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu e8-mobile-menu${isMenuOpen ? " open" : ""}`} id="mobile-menu">
        <div className="mobile-menu-inner e8-mobile-menu-inner">
          {navItems.map((item) => (
            <Link
              className={`mobile-menu-link e8-mobile-link${active && item.active.includes(active) ? " active" : ""}`}
              href={hrefForLanguage(item.href)}
              key={item.label}
              onClick={closeMenu}
            >
              {t(item.label)}
            </Link>
          ))}
          <Link className="btn mobile-menu-cta e8-mobile-cta" href={hrefForLanguage("/contacto#formulario")} onClick={closeMenu}>
            {t("Iniciar proyecto")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
