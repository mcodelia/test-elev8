import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sideLinks = [
  ["01", "Nosotros", "#nosotros"],
  ["02", "Enfoque", "#enfoque"],
  ["03", "Nuestro proceso", "#proceso"],
  ["04", "Contacto", "#contacto"],
];

const approachRows = [
  ["01", "Entender", "Miramos el contexto antes de proponer: qué se quiere lograr, qué está frenando el avance y qué oportunidad real existe."],
  ["02", "Ordenar", "Convertimos una necesidad abierta en una ruta clara, priorizando lo que aporta valor y dejando fuera lo que solo suma ruido."],
  ["03", "Diseñar", "Traducimos la dirección en identidad, contenido, estructura, interfaz, pieza comercial, automatización o experiencia física."],
  ["04", "Ejecutar", "Llevamos la solución a producción cuidando consistencia visual, claridad técnica y aplicación práctica."],
];

const processRows = [
  ["Paso 01", "Conversación inicial", "Entendemos el problema, el momento del negocio, los objetivos y las señales que muestran que es hora de cambiar algo."],
  ["Paso 02", "Diagnóstico y ruta", "Definimos si conviene entrar por estrategia, marca, web, automatización, espacio físico o una solución 360."],
  ["Paso 03", "Propuesta clara", "Ordenamos alcance, prioridades, entregables y etapas para que el proyecto sea entendible antes de ejecutarlo."],
  ["Paso 04", "Diseño y construcción", "Desarrollamos la solución con una mirada integrada entre comunicación, experiencia, tecnología y aplicación real."],
  ["Paso 05", "Implementación y evolución", "Entregamos una base que pueda seguir creciendo con nuevas páginas, contenidos, campañas, módulos o mejoras futuras."],
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
                  Una empresa para construir con <em>dirección</em>.
                </h1>
              </div>
              <div className="company-intro">
                <strong>
                  Elev8 conecta estrategia, creatividad, tecnología y ejecución
                  para transformar ideas en sistemas reales.
                </strong>
                <p>
                  Trabajamos con empresas que quieren verse mejor, vender con más
                  claridad, ordenar sus procesos y construir experiencias
                  consistentes entre lo digital, lo visual y lo físico.
                </p>
              </div>
            </div>

            <aside className="company-side">
              <div className="side-content">
                <span className="side-kicker">Empresa / One page</span>
                <h2>Todo lo esencial en una sola lectura.</h2>
                <p>
                  Esta página presenta quiénes somos, cómo pensamos, cómo
                  trabajamos y cómo iniciar un proyecto sin fragmentar el relato
                  antes de tiempo.
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
                <span>Visión + proceso + contacto</span>
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
            Tecnología — Ejecución — Nosotros — Enfoque — Proceso — Contacto —
            Estrategia — Diseño — Tecnología — Ejecución —
          </span>
        </div>

        <section id="nosotros">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Nosotros</div>
            </div>
            <div className="editorial">
              <h2>No somos solo estudio, agencia o productora.</h2>
              <p className="lead">
                Somos una estructura creativa y digital pensada para ordenar
                proyectos que mezclan marca, web, tecnología, contenido y
                experiencia física.
              </p>

              <div className="text-columns">
                <div>
                  <p>
                    Muchas empresas crecen con piezas separadas: una identidad que
                    quedó antigua, una web que no explica bien, presentaciones poco
                    consistentes, procesos manuales y materiales físicos que no
                    representan el nivel real del negocio.
                  </p>
                  <p>
                    Elev8 nace para unir esas capas bajo una misma dirección. No se
                    trata de hacer más piezas, sino de hacer que cada pieza tenga
                    sentido dentro del sistema.
                  </p>
                </div>
                <div>
                  <p>
                    Por eso nuestro trabajo puede comenzar desde distintos puntos:
                    una marca nueva, un sitio web, una automatización, una
                    renovación de espacio o una solución integral.
                  </p>
                  <p>
                    El objetivo siempre es el mismo: que la empresa se vea mejor,
                    comunique con más claridad y tenga una base preparada para
                    crecer.
                  </p>
                </div>
              </div>

              <div className="statement">
                <em>Menos piezas sueltas.</em>
                <br />
                Más dirección, más coherencia, más capacidad de avanzar.
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
              <h2>La forma Elev8 de construir.</h2>
              <p className="lead">
                Primero entendemos el negocio. Después definimos la ruta.
                Finalmente diseñamos, construimos e implementamos con
                consistencia.
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
              <h2>De una necesidad abierta a una solución construible.</h2>
              <p className="lead">
                El proceso está pensado para clientes que no siempre saben
                exactamente qué pedir, pero sí saben que algo necesita mejorar,
                lanzarse, ordenarse o escalarse.
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
                <h2>Cuéntanos qué necesitas resolver. Nosotros ordenamos la ruta.</h2>
                <p>
                  No necesitas llegar con un brief perfecto. Basta con una
                  necesidad clara, una idea inicial o un problema que ya se repite
                  demasiado.
                </p>
                <div className="contact-actions">
                  <a className="btn dark-btn" href="mailto:hello@elev8.cl">
                    Escribir a Elev8
                  </a>
                  <a className="btn" href="/soluciones">
                    Ver soluciones
                  </a>
                </div>
              </div>
              <div className="contact-info">
                <a href="mailto:hello@elev8.cl">
                  <small>Correo</small>
                  <span>hello@elev8.cl</span>
                </a>
                <span>
                  <small>Base</small>
                  <span>Santiago, Chile</span>
                </span>
                <a href="/servicios">
                  <small>Entrada</small>
                  <span>Servicios</span>
                </a>
                <a href="/soluciones">
                  <small>Rutas</small>
                  <span>Soluciones</span>
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
