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
        { href: "/servicios/strategy-growth.html", label: "Strategy & Growth" },
        { href: "/servicios/brand-creative.html", label: "Brand & Creative" },
        { href: "/servicios/digital-experiences.html", label: "Digital Experiences" },
        { href: "/servicios/smart-solutions.html", label: "Smart Solutions" },
        { href: "/servicios/physical-brand.html", label: "Physical Brand" },
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
        { href: "/recursos/blog.html", label: "Blog" },
      ],
      cardTitle: "SEO con criterio",
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
  const { language, setLanguage } = useLanguage();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`nav${isMenuOpen ? " menu-open" : ""}`}>
      <div className="wrap navin">
        <Link className="logo" href="/" aria-label="Elev8 inicio" onClick={closeMenu}>
          elev8
        </Link>

        <div className="links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a
                className={`nav-trigger${active === item.label ? " active" : ""}`}
                href={item.href}
              >
                {item.label}
              </a>
              <MegaMenu menu={item.menu} />
            </div>
          ))}
        </div>

        <a href="/contacto" className="btn nav-cta">
          Iniciar un proyecto
        </a>

        <div className="language-toggle" aria-label="Selector de idioma">
          <button
            className={language === "es" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("es")}
          >
            ES
          </button>
          <span>/</span>
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
              <div className="mobile-submenu">
                {item.menu.links.map((link) => (
                  <a href={link.href} key={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a className="btn mobile-menu-cta" href="/contacto" onClick={closeMenu}>
            Iniciar un proyecto
          </a>
        </div>
      </div>
    </nav>
  );
}
