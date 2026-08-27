import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeCapabilities from "@/components/HomeCapabilities";
import Link from "next/link";

const selectedWork = [
  {
    number: "W01",
    name: "Ruta Clara",
    type: "Sistema de marca + web",
    status: "Placeholder",
  },
  {
    number: "W02",
    name: "Casa Lino",
    type: "Dirección visual + contenido",
    status: "Placeholder",
  },
  {
    number: "W03",
    name: "Pulso",
    type: "Producto digital + automatización",
    status: "Placeholder",
  },
];

const problems = [
  ["La marca se ve menor que el negocio.", "Percepción"],
  ["La web informa, pero no convierte.", "Conversión"],
  ["El equipo opera con tareas repetidas.", "Flujo"],
  ["La experiencia física no acompaña.", "Continuidad"],
];

const systemSteps = [
  ["01", "Leer", "Detectar tensión real."],
  ["02", "Ordenar", "Definir qué mueve valor."],
  ["03", "Diseñar", "Crear el sistema visible."],
  ["04", "Conectar", "Unir canales, herramientas y equipo."],
  ["05", "Evolucionar", "Dejar base para crecer."],
];

const proofPoints = [
  "Estrategia + ejecución en un mismo equipo.",
  "Diseño pensado para uso real, no sólo presentación.",
  "Sistemas que pueden crecer por etapas.",
];

function SectionTitle({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="e8-section-head">
      <span className="e8-section-number">{number}</span>
      <div>
        <p className="e8-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="e8-lead">{children}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="e8-home">
        <section className="e8-hero" id="inicio">
          <div className="wrap e8-hero-grid">
            <div className="e8-hero-copy">
              <h1>
                Elevamos cómo{" "}
                <br />
                <span className="e8-hero-accent">
                  tu negocio se ve,{" "}
                  <br />
                  funciona y crece.
                </span>
              </h1>
              <p className="e8-hero-support">
                Unimos estrategia, marca, sitios web, automatización y espacios
                para ayudarte a avanzar con claridad.
              </p>
              <div className="e8-actions">
                <Link className="btn dark-btn" href="/contacto#formulario">
                  Iniciar proyecto
                </Link>
                <a className="btn" href="#trabajo">
                  Ver proyectos
                </a>
              </div>
            </div>
          </div>
        </section>

        <HomeCapabilities />

        <section className="e8-work" id="trabajo">
          <div className="wrap">
            <SectionTitle
              number="03"
              eyebrow="Selected Work"
              title="Trabajo seleccionado, todavía en construcción."
            >
              Hasta tener casos reales publicados, usamos proyectos placeholder
              para diseñar el sistema editorial.
            </SectionTitle>

            <div className="e8-work-grid">
              {selectedWork.map((project) => (
                <article className="e8-work-card" key={project.name}>
                  <div>
                    <span>{project.number}</span>
                    <small>{project.status}</small>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="e8-problems" id="soluciones">
          <div className="wrap e8-problems-grid">
            <SectionTitle
              number="04"
              eyebrow="Problems / Solutions"
              title="Entramos por el problema, no por la lista de servicios."
            >
              El punto de partida define la arquitectura: marca, web, IA,
              espacio o una solución integrada.
            </SectionTitle>

            <div className="e8-problem-list">
              {problems.map(([problem, signal]) => (
                <Link href="/soluciones" key={problem}>
                  <span>{signal}</span>
                  <strong>{problem}</strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="e8-system" id="sistema">
          <div className="wrap e8-system-grid">
            <div>
              <SectionTitle
                number="05"
                eyebrow="Elev8 System"
                title="Un sistema para elevar sin desconectar."
              >
                El 8 funciona como método: continuidad entre estrategia,
                forma, tecnología, operación y experiencia.
              </SectionTitle>
            </div>

            <div className="e8-system-steps">
              {systemSteps.map(([number, title, text]) => (
                <article key={title}>
                  <span>{number}</span>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="e8-360" id="proyecto-360">
          <div className="wrap e8-360-panel">
            <div>
              <p className="e8-eyebrow">06 / Proyecto 360</p>
              <h2>Cuando todo necesita avanzar junto.</h2>
            </div>
            <p>
              Para empresas que necesitan alinear percepción, sitio web,
              contenido, automatización y presencia física bajo una misma lógica.
            </p>
            <Link className="btn" href="/soluciones/proyecto-360.html">
              Ver ruta 360
            </Link>
          </div>
        </section>

        <section className="e8-proof" id="prueba">
          <div className="wrap e8-proof-grid">
            <SectionTitle
              number="07"
              eyebrow="Clients / Proof"
              title="Prueba sobria, hasta tener casos reales."
            >
              La confianza no debería depender de claims inflados. Por ahora,
              mostramos principios verificables.
            </SectionTitle>

            <div className="e8-proof-list">
              {proofPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="e8-final" id="contacto">
          <div className="wrap e8-final-grid">
            <div>
              <p className="e8-eyebrow">08 / Final CTA</p>
              <h2>Cuéntanos qué necesita elevarse.</h2>
            </div>
            <div>
              <p>
                No necesitas un brief perfecto. Necesitamos contexto suficiente
                para detectar la ruta correcta.
              </p>
              <Link className="btn dark-btn" href="/contacto#formulario">
                Iniciar proyecto
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
