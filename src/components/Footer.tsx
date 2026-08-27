"use client";

import Link from "next/link";

import { useLanguage } from "./LanguageProvider";

const mainLinks = [
  { href: "/#trabajo", label: "Trabajo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/empresa", label: "Acerca" },
  { href: "/recursos", label: "Ideas" },
];

const capabilities = [
  "Estrategia",
  "Marca",
  "Digital",
  "Inteligencia",
  "Espacio",
];

export default function Footer() {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();

  const hrefForLanguage = (href: string) => {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;

    const [pathWithQuery, hash = ""] = href.split("#");
    const [path, query = ""] = pathWithQuery.split("?");
    const cleanPath = path === "/en" ? "/" : path.replace(/^\/en(?=\/)/, "");
    const localizedPath = language === "en" ? (cleanPath === "/" ? "/en" : `/en${cleanPath}`) : cleanPath;

    return `${localizedPath}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  };

  return (
    <footer id="footer" className="footer e8-footer">
      <div className="wrap e8-footer-grid">
        <div className="e8-footer-brand">
          <p className="e8-eyebrow">Eleveight / Elevate</p>
          <h2>
            Elev8 crea continuidad entre estrategia, forma y ejecución.
          </h2>
          <Link className="btn footer-cta" href={hrefForLanguage("/contacto#formulario")}>
            {t("Iniciar proyecto")}
          </Link>
        </div>

        <div className="e8-footer-system" aria-label={t("Sistema Elev8")}>
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
          <span>07</span>
          <span>08</span>
        </div>

        <nav className="e8-footer-nav" aria-label={t("Navegación principal")}>
          <strong>{t("Navegación")}</strong>
          {mainLinks.map((link) => (
            <Link href={hrefForLanguage(link.href)} key={link.label}>
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="e8-footer-capabilities">
          <strong>{t("Capacidades")}</strong>
          {capabilities.map((capability) => (
            <span key={capability}>{t(capability)}</span>
          ))}
        </div>

        <div className="e8-footer-contact">
          <strong>{t("Contacto")}</strong>
          <a href="mailto:hello@elev8.cl">hello@elev8.cl</a>
          <span>{t("Santiago, Chile")}</span>
        </div>

        <div className="e8-footer-bottom">
          <span>© {year} Elev8</span>
          <span>{t("Sin atajos visuales. Sin sistemas inconexos.")}</span>
        </div>
      </div>
    </footer>
  );
}
