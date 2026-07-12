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
  ["01", "Criterio antes que producción.", "No todo problema necesita más piezas."],
  ["02", "Dirección antes que velocidad.", "Avanzar rápido no sirve si se avanza torcido."],
  ["03", "Claridad antes que volumen.", "Menos ruido. Mejores decisiones."],
  ["04", "Continuidad antes que campaña.", "Lo que se construye debe poder crecer."],
];

const processRows = [
  ["Paso 01", "Entender", "Escuchamos el contexto y el problema real."],
  ["Paso 02", "Ordenar", "Definimos prioridades y una ruta concreta."],
  ["Paso 03", "Diseñar", "Convertimos dirección en forma y experiencia."],
  ["Paso 04", "Construir", "Llevamos la solución a producción."],
  ["Paso 05", "Evolucionar", "Dejamos una base lista para crecer."],
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
                  Existimos para convertir complejidad en <em>dirección</em>.
                </h1>
              </div>
              <div className="company-intro">
                <strong>
                  Elev8 ayuda a tomar mejores decisiones antes de construir.
                </strong>
                <p>
                  Cuando una empresa crece, las piezas se separan. Nuestro trabajo
                  es volver a darles sentido.
                </p>
              </div>
            </div>

            <aside className="company-side">
              <div className="side-content">
                <span className="side-kicker">Empresa / One page</span>
                <h2>Criterio para construir mejor.</h2>
                <p>
                  Quiénes somos, cómo pensamos y cómo trabajamos cuando el
                  problema todavía no viene ordenado.
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
                <span>Dirección + criterio + proceso</span>
                <a className="btn panel-cta" href="#nosotros">
                  Conocer Elev8
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Nosotros — Enfoque — Proceso — Contacto — Estrategia — Diseño —
            Decisiones — Dirección — Nosotros — Enfoque — Proceso — Contacto —
            Criterio — Claridad — Continuidad —
          </span>
        </div>

        <section id="nosotros">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Nosotros</div>
            </div>
            <div className="editorial">
              <h2>No nacimos para producir más. Nacimos para ordenar mejor.</h2>
              <p className="lead">
                Elev8 existe para problemas que no se resuelven con una pieza
                aislada.
              </p>

              <div className="text-columns">
                <div>
                  <p>
                    Muchas empresas crecen más rápido que su relato. Lo visual,
                    lo digital, lo operativo y lo físico empiezan a ir por caminos
                    distintos.
                  </p>
                  <p>
                    Ahí aparece nuestro rol: mirar el conjunto, tomar decisiones
                    y construir con intención.
                  </p>
                </div>
                <div>
                  <p>
                    No partimos desde una lista de entregables. Partimos desde lo
                    que impide avanzar.
                  </p>
                  <p>
                    Después definimos qué construir, qué dejar fuera y qué debe
                    quedar preparado para crecer.
                  </p>
                </div>
              </div>

              <div className="statement">
                <em>Menos reacción.</em>
                <br />
                Más criterio, más claridad, más dirección.
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
              <h2>Cómo pensamos.</h2>
              <p className="lead">
                Cuatro principios simples. No teoría. Decisiones.
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
              <h2>Cómo trabajamos.</h2>
              <p className="lead">
                Lo suficiente para avanzar con foco. El detalle aparece en la
                conversación.
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
                  Veamos si podemos ayudarte a darle dirección.
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
