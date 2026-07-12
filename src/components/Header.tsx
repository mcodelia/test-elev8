"use client";

import { useState } from "react";
import Link from "next/link";

import { useLanguage } from "./LanguageProvider";
import MegaMenu, { type MegaMenuData } from "./MegaMenu";

const navItems: Array<{ href: string; label: string; menu: MegaMenuData }> = [
  {
    href: "/servicios",
    label: "Servicios",
    menu: {
      kicker: "Qué hacemos",
      title: "Capacidades conectadas para construir mejor.",
      description:
        "Desde estrategia y marca hasta web, automatización, IA y experiencia física.",
      links: [
        { href: "/servicios/strategy-growth.html", label: "Estrategia y crecimiento" },
        { href: "/servicios/brand-creative.html", label: "Marca y creatividad" },
        { href: "/servicios/digital-experiences.html", label: "Experiencias digitales" },
        { href: "/servicios/smart-solutions.html", label: "Soluciones inteligentes" },
        { href: "/servicios/physical-brand.html", label: "Marca física" },
      ],
      cardTitle: "¿No sabes qué servicio necesitas?",
      cardText:
        "Parte por el problema. Elev8 define la ruta correcta antes de diseñar o construir.",
      cardCta: "Ver rutas",
      cardHref: "/servicios",
    },
  },
  {
    href: "/soluciones",
    label: "Soluciones",
    menu: {
      kicker: "Por necesidad",
      title: "Entra por lo que quieres resolver.",
      description:
        "Una navegación pensada para clientes que buscan resultados, no una lista infinita de servicios.",
      links: [
        { href: "/soluciones/lanzar-negocio.html", label: "Lanzar un negocio" },
        { href: "/soluciones/modernizar-empresa.html", label: "Modernizar una empresa" },
        { href: "/soluciones/automatizar-procesos.html", label: "Automatizar procesos" },
        { href: "/soluciones/renovar-espacio-fisico.html", label: "Renovar un espacio físico" },
        { href: "/soluciones/proyecto-360.html", label: "Construir una solución 360" },
      ],
      cardTitle: "Solución integral",
      cardText:
        "Marca, web, tecnología y experiencia física trabajando bajo una misma dirección.",
      cardCta: "Iniciar",
      cardHref: "/contacto",
    },
  },
  {
    href: "/recursos",
    label: "Recursos",
    menu: {
      kicker: "Aprender y decidir",
      title: "Contenido para tomar mejores decisiones.",
      description:
        "Espacio para casos, diagnósticos, guías y artículos pensados para atraer búsquedas con intención real.",
      links: [
        { href: "/recursos/casos-de-exito.html", label: "Casos de éxito" },
        { href: "/recursos/diagnosticos.html", label: "Diagnósticos" },
        { href: "/recursos/guias.html", label: "Guías" },
        { href: "/recursos/blog.html", label: "Artículos" },
      ],
      cardTitle: "Búsqueda con criterio",
      cardText:
        "No escribir por escribir. Crear contenido que eduque, posicione y abra conversaciones comerciales.",
      cardCta: "Ver recursos",
      cardHref: "/recursos",
    },
  },
  {
    href: "/empresa",
    label: "Empresa",
    menu: {
      kicker: "Elev8",
      title: "Una puerta de entrada para construir con dirección.",
      description:
        "Conoce quiénes somos, cómo pensamos, cómo trabajamos y cómo iniciar un proyecto.",
      links: [
        { href: "/empresa#nosotros", label: "Nosotros" },
        { href: "/empresa#enfoque", label: "Enfoque" },
        { href: "/empresa#proceso", label: "Nuestro proceso" },
        { href: "/contacto", label: "Contacto" },
      ],
      cardTitle: "Hablemos del próximo paso.",
      cardText:
        "Cuéntanos qué necesitas resolver y te ayudamos a ordenar la ruta.",
      cardCta: "Contacto",
      cardHref: "/contacto",
    },
  },
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

  const translatedMenu = (menu: MegaMenuData): MegaMenuData => ({
    ...menu,
    kicker: t(menu.kicker),
    title: t(menu.title),
    description: t(menu.description),
    cardTitle: t(menu.cardTitle),
    cardText: t(menu.cardText),
    cardCta: t(menu.cardCta),
    cardHref: hrefForLanguage(menu.cardHref),
    links: menu.links.map((link) => ({
      href: hrefForLanguage(link.href),
      label: t(link.label),
    })),
  });

  return (
    <nav className={`nav${isMenuOpen ? " menu-open" : ""}`}>
      <div className="wrap navin">
        <Link className="logo" href={hrefForLanguage("/")} aria-label={t("Elev8 inicio")} onClick={closeMenu}>
          elev8
        </Link>

        <div className="links" aria-label={t("Navegación principal")}>
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a
                className={`nav-trigger${active === item.label ? " active" : ""}`}
                href={hrefForLanguage(item.href)}
              >
                {t(item.label)}
              </a>
              <MegaMenu menu={translatedMenu(item.menu)} />
            </div>
          ))}
        </div>

        <a href={hrefForLanguage("/contacto#formulario")} className="btn nav-cta">
          {t("Iniciar un proyecto")}
        </a>

        <div className="language-toggle" aria-label={t("Selector de idioma")}>
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
          className="mobile-menu-toggle"
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

      <div className={`mobile-menu${isMenuOpen ? " open" : ""}`} id="mobile-menu">
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <div className="mobile-menu-group" key={item.label}>
              <a
                className={`mobile-menu-link${active === item.label ? " active" : ""}`}
                href={hrefForLanguage(item.href)}
                onClick={closeMenu}
              >
                {t(item.label)}
              </a>
              <div className="mobile-submenu">
                {item.menu.links.map((link) => (
                  <a href={hrefForLanguage(link.href)} key={link.href} onClick={closeMenu}>
                    {t(link.label)}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a className="btn mobile-menu-cta" href={hrefForLanguage("/contacto#formulario")} onClick={closeMenu}>
            {t("Iniciar un proyecto")}
          </a>
        </div>
      </div>
    </nav>
  );
}
