import Link from "next/link";

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
  ["Paso 01", "Leemos", "Revisamos necesidad, contexto y urgencia."],
  ["Paso 02", "Respondemos", "Te sugerimos una entrada o pedimos una conversación breve."],
  ["Paso 03", "Definimos", "Aterrizamos alcance, etapas y próximos pasos."],
];

const faqs = [
  ["¿Necesito tener un brief listo?", "No. Basta con explicar qué quieres cambiar y qué existe hoy."],
  ["¿Puedo pedir solo una parte?", "Sí. Podemos entrar por marca, web, automatización, contenido o espacio físico."],
  ["¿Qué pasa si no sé qué necesito?", "Describe el problema. Nosotros proponemos la entrada más lógica."],
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
              <div className="contact-hero-brief" aria-hidden="true">
                {formPoints.map(([number, text]) => (
                  <span key={number}>
                    <b>{number}</b>
                    {text}
                  </span>
                ))}
              </div>
              <div className="contact-intro">
                <strong>
                  Cuéntanos qué quieres cambiar y qué existe hoy.
                </strong>
                <p>
                  No necesitas un brief perfecto. Necesitamos contexto suficiente
                  para responder con criterio.
                </p>
              </div>
            </div>

            <aside className="contact-panel">
              <div className="panel-top">
                <span className="panel-kicker">Entrada / Proyecto</span>
                <h2>El primer mensaje debe ahorrar tiempo.</h2>
                <p>
                  Mientras más concreta sea la situación, mejor podemos recomendar
                  una ruta, una capacidad o una primera etapa.
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
            Contacto — Contexto — Alcance — Próximo paso — Contacto — Contexto —
            Alcance — Próximo paso —
          </span>
        </div>

        <section id="formulario">
          <div className="wrap project-form-wrap">
            <div className="form-copy">
              <div className="eyebrow">Contexto inicial</div>
              <h2>Cuéntanos lo esencial.</h2>
              <p>
                Cuatro señales bastan para empezar bien.
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
                    Sirve para proponer un alcance realista desde el inicio.
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
                  Respondemos con una recomendación inicial o una pregunta clave.
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
              <h2>Qué pasa después.</h2>
              <p className="lead">
                Tres pasos simples para no convertir el inicio en una reunión
                eterna.
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
