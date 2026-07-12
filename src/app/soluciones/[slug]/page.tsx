import { notFound } from "next/navigation";

import InteriorPage, { type InteriorPageContent } from "@/components/InteriorPage";

const solutions: Record<string, InteriorPageContent> = {
  "lanzar-negocio.html": {
    active: "Soluciones",
    backHref: "/soluciones",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/soluciones",
    accent: "START",
    es: {
      eyebrow: "Solución / Lanzamiento",
      title: "Lanzar un negocio",
      lead: "De idea abierta a salida clara.",
      intro:
        "Para negocios, productos o líneas nuevas que necesitan marca, oferta, sitio y materiales base para salir al mercado.",
      panelTitle: "Nacer bien.",
      panelText: "El objetivo no es tener más piezas. Es salir con una dirección entendible.",
      chips: ["Oferta", "Nombre", "Identidad", "Web"],
      sections: [
        { label: "01", title: "Definir la oferta", text: "Ordenamos qué se vende, para quién y por qué debería importar." },
        { label: "02", title: "Construir presencia", text: "Creamos identidad, mensaje y página inicial para presentar el proyecto." },
        { label: "03", title: "Activar salida", text: "Preparamos una base comercial simple para iniciar conversaciones." },
      ],
      steps: [
        { label: "Paso 01", title: "Claridad", text: "Convertimos la idea en una propuesta entendible." },
        { label: "Paso 02", title: "Sistema mínimo", text: "Diseñamos lo necesario para presentarse bien." },
        { label: "Paso 03", title: "Lanzamiento", text: "Dejamos una base lista para salir y aprender." },
      ],
      questions: [
        "Tengo una idea, pero todavía no sé cómo presentarla.",
        "Necesito nombre, marca y sitio para empezar.",
        "Quiero salir al mercado sin improvisar.",
      ],
      ctaTitle: "Démosle forma al lanzamiento.",
      ctaText: "Cuéntanos qué quieres lanzar y en qué estado está hoy.",
      primaryCta: "Iniciar lanzamiento",
      secondaryCta: "Volver a soluciones",
    },
    en: {
      eyebrow: "Solution / Launch",
      title: "Launch a business",
      lead: "From open idea to clear launch.",
      intro:
        "For new businesses, products or lines that need brand, offer, website and base materials to enter the market.",
      panelTitle: "Start strong.",
      panelText: "The goal is not more pieces. It is launching with a direction people understand.",
      chips: ["Offer", "Naming", "Identity", "Web"],
      sections: [
        { label: "01", title: "Define the offer", text: "We clarify what is sold, for whom and why it should matter." },
        { label: "02", title: "Build presence", text: "We create identity, message and initial page to present the project." },
        { label: "03", title: "Activate launch", text: "We prepare a simple commercial base to start conversations." },
      ],
      steps: [
        { label: "Step 01", title: "Clarity", text: "We turn the idea into an understandable proposal." },
        { label: "Step 02", title: "Minimum system", text: "We design what is needed to show up well." },
        { label: "Step 03", title: "Launch", text: "We leave a base ready to go live and learn." },
      ],
      questions: [
        "I have an idea, but I do not know how to present it.",
        "I need name, brand and website to start.",
        "I want to enter the market without improvising.",
      ],
      ctaTitle: "Shape the launch.",
      ctaText: "Tell us what you want to launch and where it stands today.",
      primaryCta: "Start launch",
      secondaryCta: "Back to solutions",
    },
  },
  "modernizar-empresa.html": {
    active: "Soluciones",
    backHref: "/soluciones",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/soluciones",
    accent: "NEXT",
    es: {
      eyebrow: "Solución / Evolución",
      title: "Modernizar una empresa",
      lead: "Verse al nivel de lo que ya eres.",
      intro:
        "Para empresas que funcionan, pero cuya marca, web o comunicación se quedó atrás frente a su realidad actual.",
      panelTitle: "Actualizar percepción.",
      panelText: "Modernizar no es maquillar. Es alinear cómo se ve la empresa con lo que realmente ofrece.",
      chips: ["Diagnóstico", "Marca", "Web", "Contenido"],
      sections: [
        { label: "01", title: "Detectar brechas", text: "Revisamos qué comunica menos valor del que la empresa tiene." },
        { label: "02", title: "Actualizar sistema", text: "Ordenamos identidad, mensaje, web y piezas comerciales." },
        { label: "03", title: "Elevar confianza", text: "Creamos una presencia más clara, actual y profesional." },
      ],
      steps: [
        { label: "Paso 01", title: "Auditar", text: "Miramos presencia actual, competencia y puntos críticos." },
        { label: "Paso 02", title: "Redefinir", text: "Ajustamos narrativa, visualidad y prioridades." },
        { label: "Paso 03", title: "Implementar", text: "Actualizamos lo que más impacta percepción y conversión." },
      ],
      questions: [
        "Mi empresa se ve más chica de lo que es.",
        "La marca se siente antigua o genérica.",
        "La web no refleja nuestro nivel actual.",
      ],
      ctaTitle: "Actualicemos la percepción.",
      ctaText: "Podemos partir por detectar qué está restando confianza hoy.",
      primaryCta: "Modernizar presencia",
      secondaryCta: "Volver a soluciones",
    },
    en: {
      eyebrow: "Solution / Upgrade",
      title: "Modernize a company",
      lead: "Look like the company you already are.",
      intro:
        "For companies that work, but whose brand, web or communication fell behind their current reality.",
      panelTitle: "Upgrade perception.",
      panelText: "Modernizing is not decoration. It aligns how the company looks with what it truly offers.",
      chips: ["Diagnosis", "Brand", "Web", "Content"],
      sections: [
        { label: "01", title: "Find gaps", text: "We review what communicates less value than the company actually has." },
        { label: "02", title: "Update system", text: "We organize identity, message, web and commercial pieces." },
        { label: "03", title: "Raise trust", text: "We create a clearer, current and more professional presence." },
      ],
      steps: [
        { label: "Step 01", title: "Audit", text: "We look at current presence, competitors and critical points." },
        { label: "Step 02", title: "Redefine", text: "We adjust narrative, visual direction and priorities." },
        { label: "Step 03", title: "Implement", text: "We update what most affects perception and conversion." },
      ],
      questions: [
        "My company looks smaller than it is.",
        "The brand feels outdated or generic.",
        "The website does not reflect our current level.",
      ],
      ctaTitle: "Upgrade perception.",
      ctaText: "We can start by detecting what is reducing trust today.",
      primaryCta: "Modernize presence",
      secondaryCta: "Back to solutions",
    },
  },
  "automatizar-procesos.html": {
    active: "Soluciones",
    backHref: "/soluciones",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/soluciones",
    accent: "FLOW",
    es: {
      eyebrow: "Solución / Operación",
      title: "Automatizar procesos",
      lead: "Menos tareas repetidas. Más flujo.",
      intro:
        "Para equipos que pierden tiempo copiando información, siguiendo estados o usando herramientas que no conversan.",
      panelTitle: "Recuperar tiempo.",
      panelText: "La automatización útil empieza por entender qué fricción vale la pena eliminar.",
      chips: ["Procesos", "IA", "Datos", "Integraciones"],
      sections: [
        { label: "01", title: "Mapear tareas", text: "Identificamos repeticiones, cuellos de botella y trabajo invisible." },
        { label: "02", title: "Diseñar flujo", text: "Definimos qué se automatiza, qué queda humano y cómo se mide." },
        { label: "03", title: "Conectar herramientas", text: "Integramos sistemas para reducir doble trabajo y errores." },
      ],
      steps: [
        { label: "Paso 01", title: "Auditoría", text: "Revisamos procesos actuales y puntos de desgaste." },
        { label: "Paso 02", title: "Prototipo", text: "Diseñamos un primer flujo acotado y verificable." },
        { label: "Paso 03", title: "Escala", text: "Dejamos una base para sumar nuevos módulos." },
      ],
      questions: [
        "Mi equipo repite la misma tarea todos los días.",
        "Tenemos muchos datos, pero poca visibilidad.",
        "Quiero automatizar sin sobrediseñar.",
      ],
      ctaTitle: "Detectemos el flujo que más conviene automatizar.",
      ctaText: "Cuéntanos dónde se pierde tiempo y revisamos una primera ruta.",
      primaryCta: "Auditar proceso",
      secondaryCta: "Volver a soluciones",
    },
    en: {
      eyebrow: "Solution / Operations",
      title: "Automate processes",
      lead: "Less repeated work. More flow.",
      intro:
        "For teams losing time copying information, tracking statuses or using tools that do not talk to each other.",
      panelTitle: "Recover time.",
      panelText: "Useful automation starts by understanding which friction is worth removing.",
      chips: ["Processes", "AI", "Data", "Integrations"],
      sections: [
        { label: "01", title: "Map tasks", text: "We identify repetition, bottlenecks and invisible work." },
        { label: "02", title: "Design flow", text: "We define what gets automated, what remains human and how it is measured." },
        { label: "03", title: "Connect tools", text: "We integrate systems to reduce duplicated work and errors." },
      ],
      steps: [
        { label: "Step 01", title: "Audit", text: "We review current processes and friction points." },
        { label: "Step 02", title: "Prototype", text: "We design a first scoped and verifiable flow." },
        { label: "Step 03", title: "Scale", text: "We leave a base for new modules." },
      ],
      questions: [
        "My team repeats the same task every day.",
        "We have lots of data, but little visibility.",
        "I want automation without overbuilding.",
      ],
      ctaTitle: "Find the flow worth automating first.",
      ctaText: "Tell us where time is lost and we will review a first path.",
      primaryCta: "Audit process",
      secondaryCta: "Back to solutions",
    },
  },
  "renovar-espacio-fisico.html": {
    active: "Soluciones",
    backHref: "/soluciones",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/soluciones",
    accent: "SPACE",
    es: {
      eyebrow: "Solución / Espacio",
      title: "Renovar un espacio",
      lead: "Que el lugar comunique mejor.",
      intro:
        "Para oficinas, locales, stands o puntos físicos que necesitan verse más profesionales, claros y coherentes con la marca.",
      panelTitle: "Marca tangible.",
      panelText: "El espacio también vende, orienta y construye percepción.",
      chips: ["Espacio", "Señalética", "Ambientación", "Soportes"],
      sections: [
        { label: "01", title: "Leer el lugar", text: "Revisamos recorrido, señales, percepción y necesidades prácticas." },
        { label: "02", title: "Diseñar presencia", text: "Definimos aplicaciones visuales, mensajes, jerarquías y materiales." },
        { label: "03", title: "Materializar", text: "Preparamos piezas e indicaciones para implementar con coherencia." },
      ],
      steps: [
        { label: "Paso 01", title: "Diagnóstico", text: "Miramos qué no está comunicando el espacio." },
        { label: "Paso 02", title: "Sistema", text: "Definimos una lógica visual aplicable." },
        { label: "Paso 03", title: "Producción", text: "Llevamos la marca a soportes físicos." },
      ],
      questions: [
        "Mi oficina o local no se ve al nivel de la marca.",
        "Necesito ordenar señalética y recorrido.",
        "Quiero una experiencia física más memorable.",
      ],
      ctaTitle: "Transformemos el espacio en experiencia.",
      ctaText: "Cuéntanos qué lugar quieres renovar y qué debería comunicar.",
      primaryCta: "Revisar espacio",
      secondaryCta: "Volver a soluciones",
    },
    en: {
      eyebrow: "Solution / Space",
      title: "Renew a space",
      lead: "Make the place communicate better.",
      intro:
        "For offices, stores, stands or physical touchpoints that need to look more professional, clear and brand-consistent.",
      panelTitle: "Tangible brand.",
      panelText: "Space also sells, guides and builds perception.",
      chips: ["Space", "Signage", "Environment", "Supports"],
      sections: [
        { label: "01", title: "Read the place", text: "We review journey, signals, perception and practical needs." },
        { label: "02", title: "Design presence", text: "We define visual applications, messages, hierarchy and materials." },
        { label: "03", title: "Materialize", text: "We prepare pieces and guidance for coherent implementation." },
      ],
      steps: [
        { label: "Step 01", title: "Diagnosis", text: "We look at what the space is not communicating." },
        { label: "Step 02", title: "System", text: "We define an applicable visual logic." },
        { label: "Step 03", title: "Production", text: "We bring the brand into physical supports." },
      ],
      questions: [
        "My office or store does not look like the brand level.",
        "I need to organize signage and journey.",
        "I want a more memorable physical experience.",
      ],
      ctaTitle: "Turn the space into experience.",
      ctaText: "Tell us what place you want to renew and what it should communicate.",
      primaryCta: "Review space",
      secondaryCta: "Back to solutions",
    },
  },
  "proyecto-360.html": {
    active: "Soluciones",
    backHref: "/soluciones",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/soluciones",
    accent: "360",
    es: {
      eyebrow: "Solución / Integral",
      title: "Proyecto 360",
      lead: "Un recorrido completo, una sola dirección.",
      intro:
        "Para empresas que necesitan alinear estrategia, marca, web, operación y experiencia física sin construir piezas aisladas.",
      panelTitle: "Continuidad total.",
      panelText: "Cuando todo se conecta, el negocio se entiende mejor por dentro y por fuera.",
      chips: ["Estrategia", "Marca", "Web", "Operación", "Físico"],
      sections: [
        { label: "01", title: "Ordenar el sistema", text: "Definimos qué capas deben conectarse y en qué orden." },
        { label: "02", title: "Diseñar continuidad", text: "Creamos una lógica común para marca, canales, procesos y puntos físicos." },
        { label: "03", title: "Construir por etapas", text: "Avanzamos con prioridades para evitar ruido, gasto y dispersión." },
      ],
      steps: [
        { label: "Paso 01", title: "Mapa", text: "Leemos el ecosistema completo y sus quiebres." },
        { label: "Paso 02", title: "Ruta", text: "Definimos módulos, fases y criterios de decisión." },
        { label: "Paso 03", title: "Base", text: "Construimos una plataforma para crecer con coherencia." },
      ],
      questions: [
        "Tengo marca, web y operación desconectadas.",
        "Necesito ordenar varias áreas a la vez.",
        "Quiero una transformación completa, pero por etapas.",
      ],
      ctaTitle: "Construyamos una ruta integral.",
      ctaText: "Partamos por mirar el sistema completo y decidir qué mover primero.",
      primaryCta: "Conversar proyecto 360",
      secondaryCta: "Volver a soluciones",
    },
    en: {
      eyebrow: "Solution / Integrated",
      title: "360 Project",
      lead: "One complete journey. One direction.",
      intro:
        "For companies that need to align strategy, brand, web, operations and physical experience without isolated pieces.",
      panelTitle: "Total continuity.",
      panelText: "When everything connects, the business is easier to understand inside and out.",
      chips: ["Strategy", "Brand", "Web", "Operations", "Physical"],
      sections: [
        { label: "01", title: "Organize the system", text: "We define which layers must connect and in what order." },
        { label: "02", title: "Design continuity", text: "We create a shared logic for brand, channels, processes and physical points." },
        { label: "03", title: "Build in stages", text: "We move with priorities to avoid noise, waste and dispersion." },
      ],
      steps: [
        { label: "Step 01", title: "Map", text: "We read the full ecosystem and its breaks." },
        { label: "Step 02", title: "Path", text: "We define modules, phases and decision criteria." },
        { label: "Step 03", title: "Base", text: "We build a platform for coherent growth." },
      ],
      questions: [
        "My brand, web and operations are disconnected.",
        "I need to organize several areas at once.",
        "I want a full transformation, but in stages.",
      ],
      ctaTitle: "Build an integrated path.",
      ctaText: "Let us look at the full system and decide what moves first.",
      primaryCta: "Talk 360 project",
      secondaryCta: "Back to solutions",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = solutions[slug];

  if (!content) notFound();

  return <InteriorPage content={content} />;
}
