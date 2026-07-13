import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sideLinks = [
  ["01", "Nosotros", "#nosotros"],
  ["02", "Cómo pensamos", "#enfoque"],
  ["03", "Cómo trabajamos", "#proceso"],
  ["04", "Siguiente paso", "#contacto"],
];

const approachRows = [
  ["01", "Mirar antes de proponer.", "El contexto define el alcance."],
  ["02", "Elegir antes de producir.", "No todo problema necesita más piezas."],
  ["03", "Diseñar para uso real.", "Lo bonito debe soportar operación, venta y equipo."],
  ["04", "Dejar base, no dependencia.", "Lo que se construye debe poder crecer."],
];

const processRows = [
  ["Paso 01", "Contexto", "Qué existe, qué duele y qué está en juego."],
  ["Paso 02", "Alcance", "Qué entra, qué queda fuera y por qué."],
  ["Paso 03", "Diseño", "Forma, contenido, interfaz o experiencia."],
  ["Paso 04", "Entrega", "Producción cuidada y lista para uso."],
];

export default function EmpresaPage() {
  return (
    <>
      <Header active="Empresa" />

      <main className="company-page">
        <header className="company-hero">
          <div className="wrap company-hero-grid">
            <div className="company-hero-main">
              <div>
                <div className="page-label">Empresa Elev8</div>
                <h1 className="company-title">
                  Un estudio pequeño para problemas que cruzan marca, web y operación.
                </h1>
              </div>
              <div className="company-hero-principles" aria-hidden="true">
                <span>Criterio</span>
                <span>Claridad</span>
                <span>Continuidad</span>
              </div>
              <div className="company-intro">
                <strong>
                  Trabajamos cuando una sola pieza no alcanza.
                </strong>
                <p>
                  Algunas veces falta una web. Otras, una identidad. Muchas, una
                  forma más inteligente de conectar todo.
                </p>
              </div>
            </div>

            <aside className="company-side">
              <div className="side-content">
                <span className="side-kicker">Empresa / One page</span>
                <h2>Diseño con mirada de negocio.</h2>
                <p>
                  Somos más útiles cuando el problema mezcla percepción,
                  experiencia y operación.
                </p>
              </div>

              <nav className="side-links" aria-label="Secciones empresa Elev8">
                {sideLinks.map(([number, label, href]) => (
                  <a href={href} key={number}>
                    <span>
                      <small>{number}</small>
                      {label}
                    </span>
                    <span aria-hidden="true" />
                  </a>
                ))}
              </nav>

              <div className="side-foot">
                <span>Marca + web + sistemas</span>
                <a className="btn panel-cta" href="#nosotros">
                  Conocer Elev8
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Nosotros — Enfoque — Proceso — Contacto — Marca — Web —
            Automatización — Experiencia — Nosotros — Enfoque — Proceso —
          </span>
        </div>

        <section id="nosotros">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Nosotros</div>
            </div>
            <div className="editorial">
              <h2>Nos interesan los proyectos donde la forma afecta el negocio.</h2>
              <p className="lead">
                Elev8 trabaja entre estrategia, creatividad y tecnología aplicada.
              </p>

              <div className="text-columns">
                <div>
                  <p>
                    Una empresa puede tener buen producto y aun así comunicar
                    poco, vender mal o perder tiempo por procesos torpes.
                  </p>
                  <p>
                    Ahí entramos: no para decorar, sino para resolver cómo se ve,
                    se entiende y funciona.
                  </p>
                </div>
                <div>
                  <p>
                    Preferimos alcances claros, etapas cortas y decisiones que se
                    puedan explicar.
                  </p>
                  <p>
                    A veces eso termina en marca. A veces en web, automatización,
                    contenido, señalética o una combinación.
                  </p>
                </div>
              </div>

              <div className="statement">
                <em>Menos promesa.</em>
                <br />
                Más oficio, más foco, mejor uso.
              </div>
            </div>
          </div>
        </section>

        <section id="enfoque" className="dark">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Enfoque</div>
            </div>
            <div className="editorial">
              <h2>Principios de trabajo.</h2>
              <p className="lead">
                Pocos, prácticos y fáciles de exigirnos.
              </p>

              <div className="simple-list">
                {approachRows.map(([number, title, text]) => (
                  <div className="simple-row" key={number}>
                    <b>{number}</b>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Nuestro proceso</div>
            </div>
            <div className="editorial">
              <h2>Proceso base.</h2>
              <p className="lead">
                El detalle cambia por proyecto. La secuencia no.
              </p>

              <div className="process-list">
                {processRows.map(([label, title, text]) => (
                  <div className="process-line" key={label}>
                    <b>{label}</b>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="wrap">
            <div className="contact-simple">
              <div>
                <div className="eyebrow">Contacto</div>
                <h2>Cuéntanos qué estás construyendo.</h2>
                <p>
                  Si cruza marca, web, contenido, automatización o espacio,
                  probablemente podemos ayudar.
                </p>
                <div className="contact-actions">
                  <a className="btn dark-btn" href="mailto:hello@elev8.cl?subject=Nuevo%20proyecto%20para%20Elev8">
                    Escribir a Elev8
                  </a>
                  <Link className="btn" href="/soluciones">
                    Ver soluciones
                  </Link>
                </div>
              </div>
              <div className="contact-info">
                <a href="mailto:hello@elev8.cl?subject=Nuevo%20proyecto%20para%20Elev8">
                  <small>Correo</small>
                  <span>hello@elev8.cl</span>
                </a>
                <span>
                  <small>Base</small>
                  <span>Santiago, Chile</span>
                </span>
                <Link href="/servicios">
                  <small>Entrada</small>
                  <span>Servicios</span>
                </Link>
                <Link href="/soluciones">
                  <small>Rutas</small>
                  <span>Soluciones</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
