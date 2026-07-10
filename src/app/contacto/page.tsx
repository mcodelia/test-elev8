import Footer from "@/components/Footer";
import Header from "@/components/Header";

const quickLinks = [
  "Lanzar algo nuevo",
  "Modernizar lo existente",
  "Automatizar procesos",
  "Proyecto 360",
];

const formPoints = [
  ["01", "Qué necesitas lograr."],
  ["02", "Qué existe hoy."],
  ["03", "Qué tan urgente es."],
  ["04", "Qué resultado esperas."],
];

const nextSteps = [
  ["Paso 01", "Revisión inicial", "Leemos el contexto, identificamos la necesidad principal y vemos si conviene entrar por estrategia, marca, web, automatización, espacio físico o solución integral."],
  ["Paso 02", "Respuesta orientadora", "Respondemos con preguntas clave, una recomendación preliminar o una invitación a una conversación breve para ordenar mejor el alcance."],
  ["Paso 03", "Diagnóstico o reunión", "Cuando el proyecto lo requiere, revisamos lo existente y aterrizamos prioridades antes de convertir la necesidad en propuesta."],
  ["Paso 04", "Propuesta de ruta", "Definimos alcance, etapas, entregables y próximos pasos para que el proyecto se pueda ejecutar sin confusión."],
];

const routes = [
  {
    id: "LNZ",
    title: "Lanzar un negocio",
    href: "/soluciones/lanzar-negocio.html",
    text: "Para construir desde cero marca, sitio, contenido y base comercial.",
  },
  {
    id: "MOD",
    title: "Modernizar una empresa",
    href: "/soluciones/modernizar-empresa.html",
    text: "Para actualizar presencia, discurso, sistemas visuales y experiencia digital.",
  },
  {
    id: "AUT",
    title: "Automatizar procesos",
    href: "/soluciones/automatizar-procesos.html",
    text: "Para reducir trabajo manual, conectar herramientas e integrar IA.",
  },
  {
    id: "ESP",
    title: "Renovar un espacio",
    href: "/soluciones/renovar-espacio-fisico.html",
    text: "Para llevar la marca a oficinas, locales, señalética o puntos físicos.",
  },
  {
    id: "360",
    title: "Proyecto 360",
    href: "/soluciones/proyecto-360.html",
    text: "Para alinear estrategia, marca, web, tecnología y experiencia física.",
    featured: true,
  },
];

const faqs = [
  ["¿Necesito tener un brief listo?", "No. El formulario está pensado para partir incluso cuando solo existe una idea, una necesidad o un problema recurrente."],
  ["¿Puedo pedir solo una parte del proyecto?", "Sí. Elev8 puede entrar por una capacidad específica o construir una ruta integral si el problema necesita varias áreas conectadas."],
  ["¿Trabajan proyectos pequeños?", "Sí, siempre que exista una necesidad clara y una oportunidad real de generar valor. También podemos proponer una primera etapa si el proyecto completo aún no tiene sentido."],
  ["¿Cuándo conviene un proyecto 360?", "Cuando la empresa necesita alinear varias capas al mismo tiempo: estrategia, identidad, web, automatización, contenido y experiencia física."],
];

export default function ContactoPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <header className="contact-hero">
          <div className="wrap contact-hero-grid">
            <div className="contact-hero-main">
              <div>
                <div className="page-label">Contacto Elev8</div>
                <h1 className="contact-title">
                  Iniciar un <em>proyecto</em>.
                </h1>
              </div>
              <div className="contact-intro">
                <strong>
                  Cuéntanos qué necesitas resolver. Nosotros ayudamos a ordenar
                  la ruta.
                </strong>
                <p>
                  No necesitas llegar con un brief perfecto. Basta con una
                  necesidad clara: lanzar, modernizar, automatizar, renovar o
                  construir algo completo. Desde ahí definimos el camino correcto.
                </p>
              </div>
            </div>

            <aside className="contact-panel">
              <div className="panel-top">
                <span className="panel-kicker">Entrada / Proyecto</span>
                <h2>Partimos por el problema, no por la lista de servicios.</h2>
                <p>
                  Una buena conversación inicial debe identificar el objetivo, el
                  contexto, la urgencia y el tipo de resultado que el negocio
                  espera lograr.
                </p>

                <nav className="quick-list" aria-label="Rutas rápidas para iniciar un proyecto">
                  {quickLinks.map((link) => (
                    <a href="#formulario" key={link}>
                      <span>{link}</span>
                      <span aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="panel-bottom">
                <span>Respuesta inicial en 24-48 h hábiles</span>
                <a className="btn panel-cta" href="#formulario">
                  Completar brief
                </a>
              </div>
            </aside>
          </div>
        </header>

        <div className="index-strip" aria-hidden="true">
          <span>
            Contacto — Contexto inicial — Diagnóstico — Ruta correcta — Propuesta —
            Contacto — Contexto inicial — Diagnóstico — Ruta correcta — Propuesta —
          </span>
        </div>

        <section id="criterio">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Antes del formulario</div>
            </div>
            <div className="editorial">
              <h2>El objetivo no es llenar campos. Es entender bien el punto de partida.</h2>
              <p className="lead">
                Esta página debe convertir interés en conversación útil: pedir lo
                justo, dar confianza y explicar qué pasa después de enviar la
                solicitud.
              </p>

              <div className="text-columns">
                <div>
                  <p>
                    Elev8 trabaja proyectos que mezclan estrategia, marca, web,
                    automatización, IA y experiencia física. Por eso el contacto
                    no debería ser solo “nombre, correo y mensaje”.
                  </p>
                  <p>
                    Debe ayudar a clasificar la necesidad sin hacer que el usuario
                    sienta que está postulando a la NASA con un formulario de 48
                    pasos.
                  </p>
                </div>
                <div>
                  <p>
                    La estructura está pensada para capturar señales comerciales
                    reales: tipo de proyecto, etapa del negocio, urgencia,
                    presupuesto referencial y contexto.
                  </p>
                  <p>
                    Con eso se puede responder mejor, preparar una primera reunión
                    más útil y evitar propuestas desenfocadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formulario">
          <div className="wrap project-form-wrap">
            <div className="form-copy">
              <div className="eyebrow">Contexto inicial</div>
              <h2>Cuéntanos lo esencial.</h2>
              <p>
                Mientras más claro sea el contexto, mejor podemos recomendar la
                entrada correcta: servicios específicos, solución por necesidad o
                proyecto 360.
              </p>

              <div className="form-points">
                {formPoints.map(([number, text]) => (
                  <div key={number}>
                    <b>{number}</b>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="project-form"
              action="mailto:hello@elev8.cl?subject=Solicitud%20de%20proyecto%20Elev8"
              method="post"
              encType="text/plain"
            >
              <div className="form-head">
                <h3>Solicitud de proyecto</h3>
                <span>5-7 min</span>
              </div>

              <div className="field-grid">
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Correo</label>
                  <input id="email" name="email" type="email" placeholder="nombre@empresa.com" required />
                </div>
                <div className="field">
                  <label htmlFor="empresa">Empresa / Proyecto</label>
                  <input id="empresa" name="empresa" type="text" placeholder="Nombre de la empresa" />
                </div>
                <div className="field">
                  <label htmlFor="telefono">Teléfono / WhatsApp</label>
                  <input id="telefono" name="telefono" type="tel" placeholder="Opcional" />
                </div>
                <div className="field">
                  <label htmlFor="tipo">Qué necesitas</label>
                  <select id="tipo" name="tipo_de_proyecto" required defaultValue="">
                    <option value="">Seleccionar una opción</option>
                    <option>Lanzar un negocio</option>
                    <option>Modernizar una empresa</option>
                    <option>Automatizar procesos</option>
                    <option>Renovar un espacio físico</option>
                    <option>Proyecto 360</option>
                    <option>No estoy seguro todavía</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="plazo">Plazo ideal</label>
                  <select id="plazo" name="plazo_ideal" defaultValue="">
                    <option value="">Seleccionar una opción</option>
                    <option>Lo antes posible</option>
                    <option>Este mes</option>
                    <option>1 a 3 meses</option>
                    <option>3 a 6 meses</option>
                    <option>Estoy explorando</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="presupuesto">Rango de inversión</label>
                  <select id="presupuesto" name="rango_de_inversion" defaultValue="">
                    <option value="">Prefiero conversarlo</option>
                    <option>Proyecto pequeño / primera etapa</option>
                    <option>Proyecto medio</option>
                    <option>Proyecto integral</option>
                    <option>Necesito ayuda para definir alcance</option>
                  </select>
                  <div className="helper">
                    No es para encasillar el proyecto. Es para recomendar una ruta
                    realista y no diseñar castillos en el aire con presupuesto de
                    volantín.
                  </div>
                </div>
                <div className="field full">
                  <label htmlFor="mensaje">Cuéntanos el contexto</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Qué necesitas resolver, qué existe hoy, qué problema quieres corregir o qué quieres construir."
                    required
                  />
                </div>
              </div>

              <div className="privacy">
                <input id="privacidad" name="privacidad" type="checkbox" required />
                <label htmlFor="privacidad">
                  Acepto que Elev8 revise esta información para responder mi
                  solicitud. No compartiremos tus datos con terceros.
                </label>
              </div>

              <div className="form-actions">
                <small>
                  Después de enviar, revisamos el contexto y respondemos con el
                  siguiente paso sugerido.
                </small>
                <button className="btn dark-btn" type="submit">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="despues" className="dark">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Qué pasa después</div>
            </div>
            <div className="editorial">
              <h2>Del primer mensaje a una ruta clara.</h2>
              <p className="lead">
                El contacto no termina cuando llega el formulario. Ahí recién
                empieza la parte importante: entender, priorizar y proponer con
                sentido.
              </p>

              <div className="steps-list">
                {nextSteps.map(([label, title, text]) => (
                  <div className="step-row" key={label}>
                    <b>{label}</b>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="rutas">
          <div className="wrap">
            <div className="split route-heading">
              <div className="split-label">
                <div className="eyebrow">También puedes partir por una ruta</div>
              </div>
              <div className="editorial">
                <h2>Si ya sabes el tipo de problema, entra directo por ahí.</h2>
                <p className="lead">
                  Estas rutas ayudan a ordenar mejor el contacto inicial y
                  conectar la conversación con la solución correcta.
                </p>
              </div>
            </div>

            <div className="route-board">
              {routes.map((route) => (
                <a
                  className={`route-card${route.featured ? " feature" : ""}`}
                  data-id={route.id}
                  href={route.href}
                  key={route.id}
                >
                  <div>
                    <h3>{route.title}</h3>
                    <p>{route.text}</p>
                  </div>
                  <span>
                    Ver ruta <span aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap split">
            <div className="split-label">
              <div className="eyebrow">Preguntas frecuentes</div>
            </div>
            <div className="editorial">
              <h2>Dudas normales antes de escribir.</h2>
              <div className="faq">
                {faqs.map(([question, answer]) => (
                  <div className="faq-item" key={question}>
                    <strong>{question}</strong>
                    <p>{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto-directo">
          <div className="wrap">
            <div className="final-cta">
              <div>
                <div className="eyebrow">Contacto directo</div>
                <h2>¿Prefieres escribir sin formulario?</h2>
                <p>
                  También puedes enviar un correo directo con una breve
                  descripción del proyecto, enlaces relevantes y el plazo ideal.
                </p>
                <div className="direct-actions">
                  <a
                    className="btn dark-btn"
                    href="mailto:hello@elev8.cl?subject=Nuevo%20proyecto%20para%20Elev8"
                  >
                    Escribir a Elev8
                  </a>
                  <a className="btn" href="#formulario">
                    Volver al formulario
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
