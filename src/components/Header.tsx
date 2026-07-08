import MegaMenu, { type MegaMenuData } from "./MegaMenu";

const navItems: Array<{ href: string; label: string; menu: MegaMenuData }> = [
  {
    href: "/servicios.html",
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
      cardHref: "/servicios.html",
    },
  },
  {
    href: "/soluciones.html",
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
      cardHref: "/contacto.html",
    },
  },
  {
    href: "/recursos.html",
    label: "Recursos",
    menu: {
      kicker: "Aprender y decidir",
      title: "Contenido para tomar mejores decisiones.",
      description:
        "Espacio para casos, guías, antes/después, diagnósticos y publicaciones de autoridad.",
      links: [
        { href: "/recursos/casos.html", label: "Casos de transformación" },
        { href: "/recursos/diagnosticos.html", label: "Diagnósticos" },
        { href: "/recursos/guias.html", label: "Guías y recursos" },
        { href: "/recursos/ideas.html", label: "Ideas con punto de vista" },
      ],
      cardTitle: "Contenido con criterio",
      cardText:
        "No publicar por publicar. Mostrar problemas reales y abrir conversaciones útiles.",
      cardCta: "Ver estrategia",
      cardHref: "/recursos.html",
    },
  },
  {
    href: "/empresa.html",
    label: "Empresa",
    menu: {
      kicker: "Elev8",
      title: "Una puerta de entrada para construir con dirección.",
      description:
        "Conoce el enfoque, el proceso y la forma de trabajo detrás de cada proyecto.",
      links: [
        { href: "/empresa/enfoque.html", label: "Enfoque" },
        { href: "/empresa/proceso.html", label: "Proceso de entrada" },
        { href: "/servicios.html", label: "Capacidades" },
        { href: "/contacto.html", label: "Contacto" },
      ],
      cardTitle: "Hablemos del próximo paso.",
      cardText:
        "Cuéntanos qué necesitas resolver y te ayudamos a ordenar la ruta.",
      cardCta: "Contacto",
      cardHref: "/contacto.html",
    },
  },
];

export default function Header() {
  return (
    <nav className="nav">
      <div className="wrap navin">
        <a className="logo" href="#" aria-label="Elev8 inicio">
          elev8
        </a>

        <div className="links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              <a className="nav-trigger" href={item.href}>
                {item.label}
              </a>
              <MegaMenu menu={item.menu} />
            </div>
          ))}
        </div>

        <a href="/contacto.html" className="btn">
          Iniciar un proyecto
        </a>
      </div>
    </nav>
  );
}
