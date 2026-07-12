import { notFound } from "next/navigation";

import InteriorPage, { type InteriorPageContent } from "@/components/InteriorPage";

const services: Record<string, InteriorPageContent> = {
  "strategy-growth.html": {
    active: "Servicios",
    backHref: "/servicios",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/servicios",
    accent: "STR",
    es: {
      eyebrow: "Servicio / Estrategia",
      title: "Estrategia y crecimiento",
      lead: "Dirección antes de producir.",
      intro:
        "Ordenamos objetivos, oportunidades y prioridades para que la marca, la web o el sistema que venga después tenga sentido.",
      panelTitle: "Decidir mejor.",
      panelText:
        "Ideal cuando el problema todavía está abierto y conviene transformar intuición en ruta.",
      chips: ["Diagnóstico", "Posicionamiento", "Roadmap", "Prioridades"],
      sections: [
        {
          label: "01",
          title: "Diagnóstico",
          text: "Leemos negocio, audiencia, percepción, canales y fricciones actuales.",
        },
        {
          label: "02",
          title: "Dirección",
          text: "Definimos foco, narrativa, oportunidades y decisiones que ordenan el avance.",
        },
        {
          label: "03",
          title: "Ruta",
          text: "Convertimos el diagnóstico en una secuencia clara de acciones, piezas y próximos pasos.",
        },
      ],
      steps: [
        { label: "Paso 01", title: "Entender", text: "Reunimos contexto y detectamos el bloqueo principal." },
        { label: "Paso 02", title: "Priorizar", text: "Elegimos qué mueve más valor y qué puede esperar." },
        { label: "Paso 03", title: "Trazar", text: "Armamos una ruta ejecutable, no una lista infinita." },
      ],
      questions: [
        "No sé qué construir primero.",
        "Hay muchas ideas, pero poca dirección.",
        "Necesito ordenar una decisión antes de invertir.",
      ],
      ctaTitle: "Empecemos por ordenar la dirección.",
      ctaText: "Cuéntanos qué estás intentando mover y vemos qué decisión falta.",
      primaryCta: "Iniciar diagnóstico",
      secondaryCta: "Volver a servicios",
    },
    en: {
      eyebrow: "Service / Strategy",
      title: "Strategy & Growth",
      lead: "Direction before production.",
      intro:
        "We clarify goals, opportunities and priorities so the brand, website or system that comes next has a reason to exist.",
      panelTitle: "Decide better.",
      panelText:
        "Best when the problem is still open and intuition needs to become a path.",
      chips: ["Diagnosis", "Positioning", "Roadmap", "Priorities"],
      sections: [
        { label: "01", title: "Diagnosis", text: "We read the business, audience, perception, channels and current friction." },
        { label: "02", title: "Direction", text: "We define focus, narrative, opportunities and decisions that organize progress." },
        { label: "03", title: "Path", text: "We turn diagnosis into a clear sequence of actions, pieces and next steps." },
      ],
      steps: [
        { label: "Step 01", title: "Understand", text: "We gather context and detect the main blocker." },
        { label: "Step 02", title: "Prioritize", text: "We choose what moves value and what can wait." },
        { label: "Step 03", title: "Map", text: "We build an executable path, not an endless list." },
      ],
      questions: [
        "I do not know what to build first.",
        "There are many ideas, but little direction.",
        "I need to clarify a decision before investing.",
      ],
      ctaTitle: "Start by clarifying direction.",
      ctaText: "Tell us what you are trying to move and we will find the missing decision.",
      primaryCta: "Start diagnosis",
      secondaryCta: "Back to services",
    },
  },
  "brand-creative.html": {
    active: "Servicios",
    backHref: "/servicios",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/servicios",
    accent: "BRD",
    es: {
      eyebrow: "Servicio / Marca",
      title: "Marca y creatividad",
      lead: "Percepción clara y reconocible.",
      intro:
        "Construimos identidad, voz y sistema visual para que la empresa se entienda mejor y se vea al nivel de lo que ofrece.",
      panelTitle: "Verse con intención.",
      panelText:
        "Para marcas que necesitan dejar de parecer genéricas, antiguas o desconectadas.",
      chips: ["Identidad", "Naming", "Dirección de arte", "Contenido"],
      sections: [
        { label: "01", title: "Identidad", text: "Definimos elementos visuales, tono, reglas y aplicaciones base." },
        { label: "02", title: "Narrativa", text: "Ordenamos cómo la marca explica su valor sin ruido ni exceso." },
        { label: "03", title: "Sistema", text: "Creamos piezas que mantienen coherencia en presentaciones, web y campañas." },
      ],
      steps: [
        { label: "Paso 01", title: "Mirar", text: "Revisamos percepción actual y señales de desconexión." },
        { label: "Paso 02", title: "Definir", text: "Elegimos territorio, voz y dirección visual." },
        { label: "Paso 03", title: "Aplicar", text: "Llevamos la identidad a piezas reales y usables." },
      ],
      questions: [
        "Mi marca se ve menos profesional que mi servicio.",
        "No tengo un sistema visual consistente.",
        "Necesito explicar mejor lo que hago.",
      ],
      ctaTitle: "Démosle forma a la percepción.",
      ctaText: "Podemos empezar revisando qué transmite hoy la marca y qué debería transmitir.",
      primaryCta: "Revisar marca",
      secondaryCta: "Volver a servicios",
    },
    en: {
      eyebrow: "Service / Brand",
      title: "Brand & Creative",
      lead: "Clear, recognizable perception.",
      intro:
        "We build identity, voice and visual systems so the company is easier to understand and looks aligned with what it offers.",
      panelTitle: "Look intentional.",
      panelText:
        "For brands that need to stop feeling generic, outdated or disconnected.",
      chips: ["Identity", "Naming", "Art direction", "Content"],
      sections: [
        { label: "01", title: "Identity", text: "We define visual elements, tone, rules and base applications." },
        { label: "02", title: "Narrative", text: "We clarify how the brand explains value without noise." },
        { label: "03", title: "System", text: "We create pieces that stay coherent across decks, web and campaigns." },
      ],
      steps: [
        { label: "Step 01", title: "Look", text: "We review current perception and disconnection signals." },
        { label: "Step 02", title: "Define", text: "We choose territory, voice and visual direction." },
        { label: "Step 03", title: "Apply", text: "We bring the identity into real, usable pieces." },
      ],
      questions: [
        "My brand looks less professional than my service.",
        "I do not have a consistent visual system.",
        "I need to explain what I do more clearly.",
      ],
      ctaTitle: "Shape perception with intention.",
      ctaText: "We can start by reviewing what the brand says today and what it should say.",
      primaryCta: "Review brand",
      secondaryCta: "Back to services",
    },
  },
  "digital-experiences.html": {
    active: "Servicios",
    backHref: "/servicios",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/servicios",
    accent: "WEB",
    es: {
      eyebrow: "Servicio / Digital",
      title: "Experiencias digitales",
      lead: "Sitios y productos que orientan.",
      intro:
        "Diseñamos páginas, plataformas e interfaces para informar, convertir, gestionar o mostrar datos con claridad.",
      panelTitle: "Claridad en pantalla.",
      panelText:
        "Para empresas que necesitan una presencia digital más útil, rápida y fácil de entender.",
      chips: ["Sitios web", "Landing pages", "UX/UI", "Plataformas"],
      sections: [
        { label: "01", title: "Estructura", text: "Ordenamos contenido, jerarquías y flujo de navegación." },
        { label: "02", title: "Interfaz", text: "Diseñamos pantallas claras, responsivas y enfocadas en decisión." },
        { label: "03", title: "Base", text: "Dejamos una estructura preparada para crecer con nuevas páginas o módulos." },
      ],
      steps: [
        { label: "Paso 01", title: "Mapear", text: "Definimos objetivos, usuarios y contenido clave." },
        { label: "Paso 02", title: "Diseñar", text: "Creamos jerarquía visual, flujo e interacción." },
        { label: "Paso 03", title: "Construir", text: "Implementamos una base estable, responsive y usable." },
      ],
      questions: [
        "Mi web se ve bien, pero no orienta.",
        "Necesito una landing para vender o captar.",
        "Mi plataforma necesita más claridad.",
      ],
      ctaTitle: "Construyamos una experiencia digital más clara.",
      ctaText: "Partimos por entender qué debe hacer la página y qué decisión debe facilitar.",
      primaryCta: "Hablar de web",
      secondaryCta: "Volver a servicios",
    },
    en: {
      eyebrow: "Service / Digital",
      title: "Digital Experiences",
      lead: "Sites and products that guide.",
      intro:
        "We design websites, platforms and interfaces to inform, convert, manage or display data clearly.",
      panelTitle: "Clarity on screen.",
      panelText:
        "For companies that need a more useful, faster and easier-to-understand digital presence.",
      chips: ["Websites", "Landing pages", "UX/UI", "Platforms"],
      sections: [
        { label: "01", title: "Structure", text: "We organize content, hierarchy and navigation flow." },
        { label: "02", title: "Interface", text: "We design clear, responsive screens focused on decisions." },
        { label: "03", title: "Base", text: "We leave a structure ready to grow with new pages or modules." },
      ],
      steps: [
        { label: "Step 01", title: "Map", text: "We define goals, users and key content." },
        { label: "Step 02", title: "Design", text: "We create visual hierarchy, flow and interaction." },
        { label: "Step 03", title: "Build", text: "We implement a stable, responsive and usable base." },
      ],
      questions: [
        "My website looks fine, but does not guide.",
        "I need a landing page to sell or capture leads.",
        "My platform needs more clarity.",
      ],
      ctaTitle: "Build a clearer digital experience.",
      ctaText: "We start by understanding what the page must do and what decision it should make easier.",
      primaryCta: "Talk about web",
      secondaryCta: "Back to services",
    },
  },
  "smart-solutions.html": {
    active: "Servicios",
    backHref: "/servicios",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/servicios",
    accent: "AI",
    es: {
      eyebrow: "Servicio / Inteligencia",
      title: "Soluciones inteligentes",
      lead: "Menos fricción. Más sistema.",
      intro:
        "Integramos automatización, IA, datos y herramientas para reducir trabajo manual y conectar operaciones.",
      panelTitle: "Operar mejor.",
      panelText:
        "Para equipos con procesos repetitivos, información dispersa y demasiadas tareas manuales.",
      chips: ["IA", "Automatización", "Integraciones", "Sistemas"],
      sections: [
        { label: "01", title: "Flujos", text: "Detectamos tareas repetidas y puntos donde el equipo pierde tiempo." },
        { label: "02", title: "Conexiones", text: "Integramos herramientas para que la información circule mejor." },
        { label: "03", title: "Automatización", text: "Diseñamos procesos que reducen fricción sin sobrediseñar." },
      ],
      steps: [
        { label: "Paso 01", title: "Auditar", text: "Revisamos procesos, herramientas y datos actuales." },
        { label: "Paso 02", title: "Priorizar", text: "Elegimos automatizaciones de alto impacto y bajo ruido." },
        { label: "Paso 03", title: "Implementar", text: "Construimos flujos medibles y fáciles de mantener." },
      ],
      questions: [
        "Mi equipo repite tareas todos los días.",
        "Tenemos información repartida en muchas herramientas.",
        "Queremos usar IA sin convertirlo en moda vacía.",
      ],
      ctaTitle: "Hagamos que la operación fluya mejor.",
      ctaText: "Podemos partir por una auditoría simple de tareas, herramientas y oportunidades.",
      primaryCta: "Revisar operación",
      secondaryCta: "Volver a servicios",
    },
    en: {
      eyebrow: "Service / Intelligence",
      title: "Smart Solutions",
      lead: "Less friction. More system.",
      intro:
        "We connect automation, AI, data and tools to reduce manual work and connect operations.",
      panelTitle: "Operate better.",
      panelText:
        "For teams with repetitive processes, scattered information and too many manual tasks.",
      chips: ["AI", "Automation", "Integrations", "Systems"],
      sections: [
        { label: "01", title: "Flows", text: "We detect repeated tasks and where the team loses time." },
        { label: "02", title: "Connections", text: "We integrate tools so information moves better." },
        { label: "03", title: "Automation", text: "We design processes that reduce friction without overbuilding." },
      ],
      steps: [
        { label: "Step 01", title: "Audit", text: "We review current processes, tools and data." },
        { label: "Step 02", title: "Prioritize", text: "We choose high-impact, low-noise automations." },
        { label: "Step 03", title: "Implement", text: "We build measurable flows that are easy to maintain." },
      ],
      questions: [
        "My team repeats tasks every day.",
        "Our information is spread across too many tools.",
        "We want to use AI without turning it into empty hype.",
      ],
      ctaTitle: "Make operations flow better.",
      ctaText: "We can start with a simple audit of tasks, tools and opportunities.",
      primaryCta: "Review operations",
      secondaryCta: "Back to services",
    },
  },
  "physical-brand.html": {
    active: "Servicios",
    backHref: "/servicios",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/servicios",
    accent: "PHY",
    es: {
      eyebrow: "Servicio / Físico",
      title: "Marca física",
      lead: "La marca fuera de la pantalla.",
      intro:
        "Llevamos identidad a espacios, señalética, vehículos, stands y soportes donde la experiencia se vuelve tangible.",
      panelTitle: "Presencia real.",
      panelText:
        "Para marcas que necesitan verse consistentes en oficinas, locales o puntos de contacto físicos.",
      chips: ["Señalética", "Oficinas", "Vehículos", "Stands"],
      sections: [
        { label: "01", title: "Aplicación", text: "Traducimos identidad visual a piezas físicas concretas." },
        { label: "02", title: "Espacio", text: "Ordenamos presencia, recorrido, señales y puntos de contacto." },
        { label: "03", title: "Producción", text: "Preparamos piezas para implementación clara y consistente." },
      ],
      steps: [
        { label: "Paso 01", title: "Revisar", text: "Miramos el espacio y la experiencia actual." },
        { label: "Paso 02", title: "Diseñar", text: "Definimos aplicaciones, materiales y prioridades." },
        { label: "Paso 03", title: "Materializar", text: "Llevamos la marca a soportes reales." },
      ],
      questions: [
        "Mi espacio no refleja el nivel de la marca.",
        "Necesito señalética o gráfica física consistente.",
        "Quiero que la experiencia se sienta más profesional.",
      ],
      ctaTitle: "Llevemos la marca al mundo real.",
      ctaText: "Cuéntanos qué espacio o soporte necesitas transformar.",
      primaryCta: "Hablar de espacio",
      secondaryCta: "Volver a servicios",
    },
    en: {
      eyebrow: "Service / Physical",
      title: "Physical Brand",
      lead: "The brand beyond the screen.",
      intro:
        "We bring identity into spaces, signage, vehicles, stands and supports where experience becomes tangible.",
      panelTitle: "Real presence.",
      panelText:
        "For brands that need consistent presence in offices, stores or physical touchpoints.",
      chips: ["Signage", "Offices", "Vehicles", "Stands"],
      sections: [
        { label: "01", title: "Application", text: "We translate visual identity into concrete physical pieces." },
        { label: "02", title: "Space", text: "We organize presence, journey, signals and touchpoints." },
        { label: "03", title: "Production", text: "We prepare pieces for clear and consistent implementation." },
      ],
      steps: [
        { label: "Step 01", title: "Review", text: "We look at the space and current experience." },
        { label: "Step 02", title: "Design", text: "We define applications, materials and priorities." },
        { label: "Step 03", title: "Materialize", text: "We bring the brand into real supports." },
      ],
      questions: [
        "My space does not reflect the brand level.",
        "I need consistent signage or physical graphics.",
        "I want the experience to feel more professional.",
      ],
      ctaTitle: "Bring the brand into the real world.",
      ctaText: "Tell us what space or support you need to transform.",
      primaryCta: "Talk about space",
      secondaryCta: "Back to services",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = services[slug];

  if (!content) notFound();

  return <InteriorPage content={content} />;
}
