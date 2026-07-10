"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageListeners = new Set<() => void>();

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "es";
  if (window.location.pathname === "/en" || window.location.pathname.startsWith("/en/")) return "en";
  const storedLanguage = window.localStorage.getItem("elev8-language");
  return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "es";
}

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === "elev8-language") listener();
  };

  window.addEventListener("storage", handleStorage);
  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function setStoredLanguage(language: Language) {
  window.localStorage.setItem("elev8-language", language);
}

function notifyLanguageChange() {
  languageListeners.forEach((listener) => listener());
}

function getLocalizedPath(language: Language, path = window.location.pathname) {
  const withoutLanguage = path === "/en" ? "/" : path.replace(/^\/en(?=\/)/, "");
  if (language === "en") return withoutLanguage === "/" ? "/en" : `/en${withoutLanguage}`;
  return withoutLanguage;
}

function getServerLanguage(): Language {
  return "es";
}

const enCopy: Record<string, string> = {
  "Iniciar un proyecto": "Start a project",
  "Servicios": "Services",
  "Soluciones": "Solutions",
  "Recursos": "Resources",
  "Empresa": "Company",
  "Contacto": "Contact",
  "Ver capacidades": "View capabilities",
  "Ver rutas": "View paths",
  "Ver índice": "View index",
  "Iniciar proyecto": "Start project",
  "Escribir a Elev8": "Write to Elev8",
  "Volver al formulario": "Back to form",
  "Enviar solicitud": "Send request",
  "Completar brief": "Complete brief",
  "Ver página": "View page",
  "Ver ruta": "View path",
  "Hablemos del próximo proyecto": "Talk about the next project",
  "Ecosistema creativo y digital": "Creative digital ecosystem",
  "Una sola visión para elevar marcas, productos y experiencias.": "One clear direction for stronger brands, products and experiences.",
  "Estrategia, diseño y ejecución trabajando como un solo sistema.": "Strategy, design and delivery working as one system.",
  "Elev8 acompaña a empresas que quieren verse mejor, operar con más claridad y construir experiencias consistentes en lo digital, lo visual y lo físico.": "Elev8 helps companies look sharper, operate clearer and build consistent digital, visual and physical experiences.",
  "Pensar": "Think",
  "Crear": "Create",
  "Escalar": "Scale",
  "Un punto de entrada para convertir ideas, marcas y necesidades operativas en soluciones visibles, funcionales y bien ejecutadas.": "One entry point for turning ideas, brands and operational needs into visible, useful, well-built solutions.",
  "Enfoque": "Approach",
  "Primero entendemos el problema. Después diseñamos la ruta.": "First, define the problem. Then, design the path.",
  "Cada proyecto parte desde una necesidad concreta: lanzar, ordenar, vender, automatizar o materializar una marca. Desde ahí definimos el camino correcto.": "Every project starts with a real need: launch, clarify, sell, automate or bring a brand into the world. That sets the path.",
  "Diagnóstico": "Diagnosis",
  "Dirección": "Direction",
  "Diseño": "Design",
  "Ejecución": "Execution",
  "Evolución": "Evolution",
  "Detectamos qué está frenando la percepción, la venta o la operación del negocio.": "We find what is blocking perception, sales or operations.",
  "Elegimos el camino correcto: marca, web, tecnología, espacio físico o una solución integrada.": "We choose the right route: brand, web, technology, physical space or an integrated solution.",
  "Creamos una experiencia clara, consistente y lista para representar mejor al negocio.": "We create a clear, consistent experience that represents the business better.",
  "Coordinamos la implementación para que la idea llegue bien a pantalla, papel, espacio o sistema.": "We coordinate delivery so the idea lands well on screen, paper, space or system.",
  "Ajustamos, mejoramos y escalamos lo construido según nuevos objetivos y oportunidades.": "We improve and scale what was built as goals and opportunities evolve.",
  "Cinco capacidades. Una experiencia coherente.": "Five capabilities. One coherent experience.",
  "Elev8 integra estrategia, diseño, tecnología y producción física para resolver proyectos de forma más simple, cuidada y completa.": "Elev8 connects strategy, design, technology and physical production to solve projects with less noise and more care.",
  "Rutas de solución": "Solution paths",
  "Rutas pensadas según el momento del negocio.": "Paths shaped by the business moment.",
  "La oferta se organiza como un sistema de entrada: el cliente identifica su necesidad y Elev8 traduce esa intención en una solución clara.": "The offer works as an entry system: the client names the need, Elev8 turns it into a clear solution.",
  "Necesidades del cliente": "Client needs",
  "Cada necesidad tiene una puerta de entrada.": "Every need has an entry point.",
  "Estas son las señales que ayudan a transformar una consulta ambigua en una propuesta clara, útil y accionable.": "These signals turn a vague request into a clear, useful proposal.",
  "Estrategia de marketing": "Marketing strategy",
  "No perseguir atención. Construir deseo.": "Do not chase attention. Build demand.",
  "La comunicación de Elev8 debe mostrar criterio antes de vender: revelar problemas que el cliente reconoce, demostrar soluciones posibles y abrir conversaciones con intención.": "Elev8 should show judgment before selling: name problems clients recognize, show possible solutions and open sharper conversations.",
  "Ideas con punto de vista": "Ideas with a point of view",
  "Transformaciones visibles": "Visible transformations",
  "Campañas por necesidad": "Need-based campaigns",
  "Diagnóstico inicial": "Initial diagnosis",
  "Servicios Elev8": "Elev8 services",
  "Cinco capacidades para elevar empresas completas.": "Five capabilities for building stronger companies.",
  "La estrategia, la marca, lo digital, la tecnología y lo físico no deberían vivir separados.": "Strategy, brand, digital, technology and physical experience should not live apart.",
  "Esta página funciona como índice de capacidades: una primera lectura para entender qué puede resolver Elev8 y desde qué servicio conviene entrar antes de construir páginas individuales para cada área.": "This is the capability index: a quick way to see what Elev8 solves and where a project should begin.",
  "Un sistema de servicios pensado para crear, ordenar, modernizar, automatizar y materializar marcas con una misma dirección.": "A service system for creating, clarifying, modernizing, automating and materializing brands under one direction.",
  "No vendemos piezas sueltas. Construimos sistemas.": "We do not sell loose parts. We build systems.",
  "Elev8 debe sentirse como una sola puerta de entrada para resolver problemas de negocio: desde una marca que necesita nacer hasta una empresa que necesita modernizar su operación completa.": "Elev8 is one entry point for business problems: from a new brand to a company that needs to modernize how it works.",
  "Capacidades": "Capabilities",
  "Las cinco áreas de servicio.": "The five service areas.",
  "Cada capacidad puede funcionar de forma independiente, pero el valor más fuerte aparece cuando se conectan bajo una misma estrategia.": "Each capability can stand alone. The strongest value appears when they connect under one strategy.",
  "Primer approach": "First read",
  "Una lectura rápida para entender qué resuelve cada servicio.": "A quick read on what each service solves.",
  "Esta sección puede crecer después en páginas individuales con casos, procesos, entregables, planes y preguntas frecuentes por servicio.": "This can later grow into service pages with cases, process, deliverables, plans and FAQs.",
  "Cómo trabajamos": "How we work",
  "Del problema al sistema.": "From problem to system.",
  "La página de servicios no debe sentirse como un menú de restaurant eterno. Debe ayudar al cliente a identificar su problema y entrar por la ruta correcta.": "The services page should not feel like an endless menu. It should help clients name the problem and choose the right path.",
  "Capacidades conectadas": "Connected capabilities",
  "El valor real aparece cuando las áreas trabajan juntas.": "The real value appears when the areas work together.",
  "Siguiente nivel": "Next level",
  "Desde esta página nacen las páginas individuales.": "Individual pages can grow from here.",
  "Soluciones Elev8": "Elev8 solutions",
  "No vendemos servicios. Diseñamos": "We do not sell services. We design",
  "resultados.": "outcomes.",
  "El cliente no llega buscando una lista. Llega con una meta, un bloqueo o una oportunidad.": "Clients do not arrive looking for a list. They arrive with a goal, a blocker or an opportunity.",
  "Una solución no es una tarea. Es una forma de mover el negocio.": "A solution is not a task. It moves the business.",
  "Cinco entradas para resolver problemas reales.": "Five entry points for real problems.",
  "El cliente entra por lo que quiere lograr.": "Clients enter through what they want to achieve.",
  "Método Elev8": "Elev8 method",
  "La solución se diseña antes de producir. Así evitamos parches, piezas aisladas y proyectos que se ven bonitos pero no mueven nada.": "The solution is designed before production. That avoids patches, isolated pieces and pretty projects that do not move anything.",
  "Capas conectadas": "Connected layers",
  "Las soluciones combinan capacidades. El resultado se siente como una sola experiencia.": "Solutions combine capabilities. The result feels like one experience.",
  "Recursos Elev8": "Elev8 resources",
  "Contenido que ayuda a decidir, comparar y": "Content that helps people decide, compare and",
  "avanzar.": "move forward.",
  "Una biblioteca editorial para atraer búsquedas reales y convertir curiosidad en conversaciones comerciales.": "An editorial library built for real searches and better sales conversations.",
  "SEO puro": "Focused SEO",
  "No perseguir visitas. Capturar intención.": "Do not chase visits. Capture intent.",
  "Índice de recursos": "Resource index",
  "Cuatro entradas para aprender mejor.": "Four ways to learn faster.",
  "Clusters SEO": "SEO clusters",
  "Los temas deben nacer desde problemas buscables.": "Topics should come from searchable problems.",
  "Empresa Elev8": "Elev8 company",
  "Una empresa para construir con": "A company built for",
  "dirección": "direction",
  "Todo lo esencial en una sola lectura.": "Everything essential in one read.",
  "Nosotros": "About",
  "No somos solo estudio, agencia o productora.": "We are not just a studio, agency or production team.",
  "La forma Elev8 de construir.": "The Elev8 way to build.",
  "Nuestro proceso": "Our process",
  "De una necesidad abierta a una solución construible.": "From open need to buildable solution.",
  "Cuéntanos qué necesitas resolver. Nosotros ordenamos la ruta.": "Tell us what needs to move. We will shape the path.",
  "Contacto Elev8": "Elev8 contact",
  "Iniciar un": "Start a",
  "proyecto": "project",
  "Partimos por el problema, no por la lista de servicios.": "We start with the problem, not the service list.",
  "Antes del formulario": "Before the form",
  "El objetivo no es llenar campos. Es entender bien el punto de partida.": "The goal is not to fill fields. It is to understand the starting point.",
  "Brief inicial": "Initial brief",
  "Cuéntanos lo esencial.": "Tell us the essentials.",
  "Solicitud de proyecto": "Project request",
  "Nombre": "Name",
  "Email": "Email",
  "Empresa / Proyecto": "Company / Project",
  "Teléfono / WhatsApp": "Phone / WhatsApp",
  "Qué necesitas": "What do you need?",
  "Plazo ideal": "Ideal timing",
  "Rango de inversión": "Investment range",
  "Cuéntanos el contexto": "Share the context",
  "Qué pasa después": "What happens next",
  "Del primer mensaje a una ruta clara.": "From first message to clear path.",
  "También puedes partir por una ruta": "You can also start with a path",
  "Si ya sabes el tipo de problema, entra directo por ahí.": "If you know the problem type, start there.",
  "Preguntas frecuentes": "FAQ",
  "Dudas normales antes de escribir.": "Normal questions before reaching out.",
  "Contacto directo": "Direct contact",
  "¿Prefieres escribir sin formulario?": "Prefer writing without the form?",
  "Elev8 crea sistemas que elevan negocios.": "Elev8 builds systems that lift businesses.",
  "¿Qué necesitas resolver?": "What do you need to solve?",
  "Crear una marca": "Create a brand",
  "Diseñar un sitio web": "Design a website",
  "Automatizar procesos": "Automate processes",
  "Implementar inteligencia artificial": "Implement AI",
  "Renovar un espacio físico": "Renew a physical space",
  "Necesito una solución integral": "I need an integrated solution",
  "Ruta Lanzamiento": "Launch Path",
  "Ruta Upgrade": "Upgrade Path",
  "Ruta 360": "360 Path",
  "Ruta Smart": "Smart Path",
  "Ruta Espacio": "Space Path",
  "Marca": "Brand",
  "Contenido": "Content",
  "Ventas": "Sales",
  "Estrategia": "Strategy",
  "Físico": "Physical",
  "Automatización": "Automation",
  "Software": "Software",
  "Letreros": "Signage",
  "Oficinas": "Offices",
  "Vehículos": "Vehicles",
  "Crear desde cero": "Build from zero",
  "Elevar percepción": "Raise perception",
  "Construir el sistema completo": "Build the full system",
  "Optimizar operación": "Streamline operations",
  "Materializar la marca": "Bring the brand into the world",
  "Nacer bien": "Start strong",
  "Verse mejor": "Look sharper",
  "Transformar el ecosistema": "Transform the ecosystem",
  "Operar más inteligente": "Work smarter",
  "Llevar la marca al mundo real": "Take the brand into the real world",
  "Lanzar un negocio": "Launch a business",
  "Modernizar una empresa": "Modernize a company",
  "Renovar un espacio": "Renew a space",
  "Proyecto 360": "360 project",
  "Construir una solución 360": "Build a 360 solution",
  "Convertir ideas en dirección": "Turn ideas into direction",
  "Elevar cómo se ve la empresa": "Raise how the company is perceived",
  "Construir un ecosistema completo": "Build a complete ecosystem",
  "Hacer que el negocio fluya mejor": "Make the business flow better",
  "Materializar la marca en el mundo real": "Bring the brand into the real world",
  "Más foco": "More focus",
  "Más valor percibido": "More perceived value",
  "Más eficiencia": "More efficiency",
  "Más presencia": "More presence",
  "Lanzar": "Launch",
  "Mejorar": "Upgrade",
  "Integrar": "Integrate",
  "Optimizar": "Optimize",
  "Materializar": "Materialize",
  "Detectar": "Detect",
  "Ordenar": "Clarify",
  "Construir": "Build",
  "Diagnosticar": "Diagnose",
  "Educar": "Educate",
  "Demostrar": "Prove",
  "Convertir": "Convert",
  "Presencia": "Presence",
  "Operación": "Operations",
  "Experiencia": "Experience",
  "Sistema de presencia": "Presence system",
  "Sistema operativo": "Operating system",
  "Sistema tangible": "Tangible system",
  "Casos de éxito": "Case studies",
  "Diagnósticos": "Diagnostics",
  "Guías": "Guides",
  "Blog": "Blog",
  "Atraer tráfico útil": "Attract useful traffic",
  "Resolver dudas reales": "Answer real questions",
  "Demostrar criterio": "Show judgment",
  "Guiar la decisión": "Guide the decision",
  "Crear autoridad": "Build authority",
  "Marca y percepción": "Brand and perception",
  "Sitios que convierten": "Sites that convert",
  "Contenido que abre mercado": "Content that opens markets",
  "Automatización e IA": "Automation and AI",
  "Espacios y marca física": "Spaces and physical brand",
  "Sistema editorial": "Editorial system",
  "Guías + Diagnósticos": "Guides + diagnostics",
  "Guías + Blog": "Guides + blog",
  "Diagnósticos + Guías": "Diagnostics + guides",
  "Casos + Blog": "Cases + blog",
  "Qué hacemos": "What we do",
  "Por necesidad": "By need",
  "Aprender y decidir": "Learn and decide",
  "Elev8": "Elev8",
  "Qué necesitas lograr.": "What you need to achieve.",
  "Qué existe hoy.": "What exists today.",
  "Qué tan urgente es.": "How urgent it is.",
  "Qué resultado esperas.": "What outcome you expect.",
  "Nombre de la empresa": "Company name",
  "Tu nombre": "Your name",
  "Seleccionar una opción": "Select an option",
  "Prefiero conversarlo": "I prefer to discuss it",
  "No estoy seguro todavía": "Not sure yet",
  "Lo antes posible": "As soon as possible",
  "Este mes": "This month",
  "1 a 3 meses": "1 to 3 months",
  "3 a 6 meses": "3 to 6 months",
  "Estoy explorando": "I am exploring",
  "Proyecto pequeño / primera etapa": "Small project / first stage",
  "Proyecto medio": "Mid-size project",
  "Proyecto integral": "Integrated project",
  "Necesito ayuda para definir alcance": "I need help defining scope",
  "Aceptar": "Accept",
  "Santiago, Chile": "Santiago, Chile",
  "crea sistemas que elevan negocios.": "builds systems that lift businesses.",
  "Capacidades conectadas para construir mejor.": "Connected capabilities to build better.",
  "Desde estrategia y marca hasta web, automatización, IA y experiencia física.": "Strategy, brand, web, automation, AI and physical experience.",
  "¿No sabes qué servicio necesitas?": "Not sure what service you need?",
  "Parte por el problema. Elev8 define la ruta correcta antes de diseñar o construir.": "Start with the problem. Elev8 defines the right path before design or build.",
  "Entra por lo que quieres resolver.": "Start with what you need to solve.",
  "Una navegación pensada para clientes que buscan resultados, no una lista infinita de servicios.": "Navigation for clients who want outcomes, not an endless list of services.",
  "Marca, web, tecnología y experiencia física trabajando bajo una misma dirección.": "Brand, web, technology and physical experience under one direction.",
  "Contenido para tomar mejores decisiones.": "Content for better decisions.",
  "Espacio para casos, diagnósticos, guías y artículos pensados para atraer búsquedas con intención real.": "Cases, diagnostics, guides and articles built around real intent.",
  "SEO con criterio": "SEO with judgment",
  "No escribir por escribir. Crear contenido que eduque, posicione y abra conversaciones comerciales.": "Do not publish for noise. Create content that teaches, ranks and starts sales conversations.",
  "Una puerta de entrada para construir con dirección.": "One entry point for building with direction.",
  "Conoce quiénes somos, cómo pensamos, cómo trabajamos y cómo iniciar un proyecto.": "See who we are, how we think, how we work and how to start.",
  "Hablemos del próximo paso.": "Talk about the next step.",
  "Cuéntanos qué necesitas resolver y te ayudamos a ordenar la ruta.": "Tell us what you need to solve and we will shape the path.",
  "Diagnóstico, posicionamiento, auditorías, roadmap digital y decisiones estratégicas antes de diseñar o construir.": "Diagnosis, positioning, audits, digital roadmap and strategic decisions before design or build.",
  "Identidad visual, dirección de arte, contenido, presentaciones, campañas y sistemas gráficos memorables.": "Visual identity, art direction, content, decks, campaigns and memorable graphic systems.",
  "Sitios web, landing pages, e-commerce, UX/UI, plataformas, dashboards y experiencias digitales de alto estándar.": "Websites, landing pages, ecommerce, UX/UI, platforms, dashboards and premium digital experiences.",
  "Automatización, inteligencia artificial, integraciones, sistemas internos, CRM, apps y software a medida.": "Automation, AI, integrations, internal systems, CRM, apps and custom software.",
  "Letreros, gráfica vehicular, acrílicos, señalética, impresión, oficinas, stands e implementación visual.": "Signage, vehicle graphics, acrylics, wayfinding, print, offices, stands and visual rollout.",
  "Para negocios que necesitan salir al mercado con una identidad clara, presencia digital y material comercial listo para vender.": "For businesses that need a clear identity, digital presence and sales-ready material.",
  "Para empresas que ya funcionan, pero necesitan verse más profesionales, actuales y alineadas al nivel de lo que ofrecen.": "For companies that work, but need to look sharper, current and aligned with their real value.",
  "Para empresas que quieren ordenar todo el ecosistema: cómo se ven, cómo comunican, cómo venden, cómo operan y cómo se viven en el mundo físico.": "For companies that need one system for how they look, speak, sell, operate and show up physically.",
  "Para equipos que quieren reducir trabajo manual, conectar herramientas, implementar IA y operar con sistemas más inteligentes.": "For teams that want less manual work, connected tools, AI and smarter systems.",
  "Para marcas que necesitan verse bien en oficinas, locales, vehículos, ferias, puntos de venta o cualquier superficie real.": "For brands that need to look consistent in offices, stores, vehicles, fairs, points of sale or any real surface.",
  "Necesito crear una marca desde cero.": "I need to create a brand from zero.",
  "Mi empresa se ve antigua o poco profesional.": "My company looks outdated or unprofessional.",
  "Necesito una página web que venda mejor.": "I need a website that sells better.",
  "Tengo procesos manuales y mucho Excel.": "We have manual processes and too many spreadsheets.",
  "Necesito letreros, impresión o gráfica física.": "I need signage, print or physical graphics.",
  "Quiero ordenar todo mi negocio visual y digitalmente.": "I want to organize my whole visual and digital ecosystem.",
  "Publicaciones que muestran cómo detectar una marca débil, una web que no convierte o una experiencia mal resuelta.": "Posts that show how to spot a weak brand, a low-converting website or a broken experience.",
  "Antes y después con contexto: qué se corrigió, por qué importaba y cómo cambió la percepción o el resultado.": "Before and after, with context: what changed, why it mattered and how perception or results shifted.",
  "Mensajes separados para clientes que quieren lanzar, mejorar, automatizar, implementar o transformar todo su ecosistema.": "Separate messages for clients who need to launch, improve, automate, implement or transform the whole system.",
  "Una primera revisión para mostrar oportunidades concretas y convertir el interés en una conversación seria.": "A first review to show concrete opportunities and turn interest into a real conversation.",
  "Para negocios, productos o líneas nuevas que necesitan nombre, identidad, discurso, sitio web y materiales de lanzamiento.": "For new businesses, products or lines that need naming, identity, messaging, website and launch material.",
  "Para empresas que ya venden, pero su presencia visual, comercial o digital no refleja el nivel real de lo que ofrecen.": "For companies already selling, but whose visual, commercial or digital presence does not match their value.",
  "Para empresas que necesitan alinear estrategia, marca, web, automatización y experiencia física en una sola dirección. Menos Frankenstein corporativo, más máquina bien aceitada.": "For companies that need strategy, brand, web, automation and physical experience aligned. Less corporate patchwork, more working system.",
  "Para equipos con procesos manuales, herramientas desconectadas, mucho Excel y oportunidades claras de automatización.": "For teams with manual work, disconnected tools, too many spreadsheets and clear automation opportunities.",
  "Para oficinas, locales, vehículos, stands y espacios donde la marca necesita verse consistente fuera de la pantalla.": "For offices, stores, vehicles, stands and spaces where the brand must work beyond the screen.",
  "Define la dirección antes de ejecutar. Ayuda a ordenar objetivos, detectar oportunidades, priorizar acciones y construir una ruta clara de crecimiento.": "Sets direction before execution. Clarifies goals, spots opportunities, prioritizes action and builds a growth path.",
  "Construye la percepción de la marca: cómo se ve, cómo habla, cómo presenta su valor y cómo se diferencia en cada punto de contacto.": "Shapes brand perception: how it looks, speaks, presents value and stands apart at every touchpoint.",
  "Convierte la presencia digital en una experiencia clara, rápida y orientada a objetivos: informar, vender, captar, gestionar o visualizar datos.": "Turns digital presence into a clear, fast, goal-driven experience: inform, sell, capture, manage or visualize data.",
  "Integra IA, automatización y software para reducir fricción operativa, conectar herramientas y crear soluciones internas más eficientes.": "Connects AI, automation and software to reduce friction, link tools and build better internal systems.",
  "Lleva la identidad al espacio físico con piezas, soportes y aplicaciones que hacen visible la marca en el mundo real.": "Brings identity into physical space through pieces, supports and applications people can actually see.",
  "Consultoría": "Consulting",
  "Transformación digital": "Digital transformation",
  "Identidad": "Identity",
  "Dirección de arte": "Art direction",
  "Presentaciones": "Presentations",
  "Integraciones": "Integrations",
  "Acrílicos": "Acrylics",
  "Gráfica Vehicular": "Vehicle graphics",
  "Señalética": "Wayfinding",
  "Stands": "Stands",
  "Ideal cuando todavía no está claro qué construir, qué priorizar o cómo transformar una necesidad en un plan realista.": "Best when it is not clear what to build, what to prioritize or how to turn a need into a realistic plan.",
  "Para marcas que necesitan una identidad más sólida, una comunicación más profesional y un lenguaje visual consistente.": "For brands that need stronger identity, sharper communication and a consistent visual language.",
  "Para transformar sitios, landings, ecommerce o interfaces en experiencias digitales claras, funcionales y memorables.": "For turning sites, landing pages, ecommerce or interfaces into clear, useful and memorable digital experiences.",
  "Para empresas que quieren trabajar con menos fricción, conectar herramientas y convertir procesos repetitivos en sistemas inteligentes.": "For companies that want less friction, connected tools and repetitive work turned into smart systems.",
  "Para que la marca no se quede atrapada en el PDF: se vea en oficinas, vehículos, señalética, stands y puntos de contacto reales.": "So the brand does not stay trapped in a PDF. It shows up in offices, vehicles, signage, stands and real touchpoints.",
  "Entendemos la necesidad.": "We understand the need.",
  "Qué quiere lograr el negocio, qué está frenando el avance y qué señales muestran que la marca, la web, el proceso o el espacio ya quedaron cortos.": "What the business needs to achieve, what is blocking progress and what shows the brand, web, process or space has fallen short.",
  "Definimos la combinación correcta.": "We define the right mix.",
  "No todo proyecto necesita todo. Elegimos qué capacidades entran, en qué orden y con qué nivel de profundidad.": "Not every project needs everything. We choose what enters, in what order and how deep it should go.",
  "Diseñamos y construimos.": "We design and build.",
  "Pasamos de estrategia a piezas concretas: identidad, sitio, landing, dashboard, automatización, app, letrero, señalética o sistema completo.": "We move from strategy to concrete pieces: identity, site, landing, dashboard, automation, app, sign, wayfinding or full system.",
  "Preparamos la evolución.": "We prepare what comes next.",
  "Lo construido debe poder crecer. Dejamos una base ordenada para nuevas páginas, campañas, integraciones, módulos o implementaciones físicas.": "What gets built should grow. We leave a clean base for new pages, campaigns, integrations, modules or physical rollout.",
  "Una identidad clara y una experiencia web que convierte esa percepción en confianza, contacto y venta.": "Clear identity and web experience that turn perception into trust, contact and sales.",
  "Diagnóstico, roadmap, automatización e IA para ordenar procesos y liberar tiempo operativo.": "Diagnosis, roadmap, automation and AI to organize processes and free operational time.",
  "Una marca que se siente consistente en presentaciones, contenido, oficinas, vehículos, stands y señalética.": "A brand that feels consistent across decks, content, offices, vehicles, stands and wayfinding.",
  "El próximo paso es profundizar cada servicio con una estructura propia: problema, solución, entregables, proceso, módulos, casos potenciales, preguntas frecuentes y CTA específico.": "Next step: give each service its own structure: problem, solution, deliverables, process, modules, cases, FAQs and specific CTA.",
  "Primer servicio": "First service",
  "Percepción": "Perception",
  "Claridad": "Clarity",
  "Sistema": "System",
  "Para dejar de improvisar y transformar una necesidad en una arquitectura clara de marca, web, contenido, sistemas o espacio.": "Stop improvising. Turn a need into a clear brand, web, content, systems or space architecture.",
  "Para que la presencia visual, comercial y digital esté a la altura de lo que la empresa realmente ofrece.": "So visual, commercial and digital presence matches what the company actually offers.",
  "Para conectar todas las capas del negocio y evitar el clásico Frankenstein corporativo: logo por un lado, web por otro, procesos en Excel y el cliente mirando raro.": "Connect every business layer and avoid the classic corporate patchwork: logo here, website there, processes in spreadsheets and confused customers.",
  "Para reducir tareas repetitivas, ordenar información y conectar herramientas que hoy trabajan como islas.": "Reduce repetitive tasks, organize information and connect tools that currently work as islands.",
  "Ambientación": "Environmental design",
  "Para transformar oficinas, locales, stands, vehículos o espacios comerciales en experiencias coherentes con la marca.": "Turn offices, stores, stands, vehicles or commercial spaces into brand-consistent experiences.",
  "Convertimos una idea en una marca, oferta y presencia digital lista para salir al mercado con claridad y confianza.": "Turn an idea into a brand, offer and digital presence ready to enter the market.",
  "Actualizamos marca, comunicación, sitio web y experiencia para que la empresa se vea y funcione como su próximo nivel.": "Update brand, communication, website and experience so the company looks and works at its next level.",
  "Diseñamos flujos inteligentes para conectar herramientas, ordenar información y eliminar trabajo repetitivo.": "Design smart flows to connect tools, organize information and remove repetitive work.",
  "Transformamos espacios físicos en experiencias más memorables, funcionales y coherentes con la identidad de marca.": "Turn physical spaces into more memorable, functional and brand-consistent experiences.",
  "Integramos estrategia, marca, web, automatización y experiencia física en un proyecto de transformación total.": "Integrate strategy, brand, web, automation and physical experience into one transformation project.",
  "Mi empresa se ve más chica o antigua de lo que realmente es.": "My company looks smaller or older than it really is.",
  "Mi equipo pierde tiempo en tareas manuales, seguimiento y Excel.": "My team loses time on manual work, follow-up and spreadsheets.",
  "Necesito que mi espacio se vea más profesional, premium o funcional.": "I need my space to look more professional, premium or functional.",
  "Quiero ordenar marca, web, operación y experiencia en una sola dirección.": "I want brand, web, operations and experience aligned in one direction.",
  "Entendemos el bloqueo.": "We understand the blocker.",
  "Revisamos oferta, marca, canales, procesos, herramientas, experiencia actual y objetivos del negocio.": "We review offer, brand, channels, processes, tools, current experience and business goals.",
  "Definimos la ruta correcta.": "We define the right path.",
  "Ordenamos prioridades, módulos, entregables y combinaciones de servicios según el resultado esperado.": "We organize priorities, modules, deliverables and service combinations around the desired outcome.",
  "Diseñar": "Design",
  "Ejecutamos con dirección.": "We execute with direction.",
  "Creamos marca, web, contenido, sistemas, automatizaciones o elementos físicos con una misma lógica visual y estratégica.": "We create brand, web, content, systems, automations or physical elements with one strategic visual logic.",
  "Dejamos bases ordenadas para nuevos módulos, campañas, integraciones, páginas interiores o mejoras futuras.": "We leave clean foundations for new modules, campaigns, integrations, inner pages or future improvements.",
  "Para construir percepción, confianza, venta y claridad desde el primer contacto.": "Build perception, trust, sales and clarity from the first touchpoint.",
  "Para ordenar procesos, conectar herramientas y liberar tiempo operativo.": "Organize processes, connect tools and free operational time.",
  "Para que la marca se vea coherente en presentaciones, contenido, oficinas, locales y puntos de contacto reales.": "Make the brand feel consistent across decks, content, offices, locations and real touchpoints.",
  "Desde esta página nacen las páginas individuales de cada solución.": "Each solution page can grow from here.",
  "Primera solución": "First solution",
  "Resultados": "Results",
  "Antes / Después": "Before / after",
  "Prueba social": "Social proof",
  "Auditoría": "Audit",
  "Señales": "Signals",
  "Educación": "Education",
  "Paso a paso": "Step by step",
  "Comparativas": "Comparisons",
  "Opinión": "Opinion",
  "Tendencias": "Trends",
  "Transformaciones, antes/después, problemas resueltos y resultados visibles. Sirven para demostrar capacidad sin depender solo de promesas.": "Transformations, before/after, solved problems and visible results. Proof beyond promises.",
  "Checklists, auditorías rápidas y señales para detectar si una marca, web, proceso o espacio necesita evolucionar.": "Checklists, quick audits and signals to know if a brand, web, process or space needs to evolve.",
  "Contenido profundo para orientar decisiones: qué hacer, en qué orden, cuánto considerar y cómo evitar errores frecuentes.": "Deeper content for decisions: what to do, in what order, what to consider and what mistakes to avoid.",
  "Ideas, tendencias, puntos de vista y artículos cortos para mantener viva la autoridad editorial de Elev8.": "Ideas, trends, points of view and short articles that keep Elev8's editorial authority alive.",
  "Qué revisar antes de rediseñar una web, cómo mejorar conversión y cómo ordenar contenido para vender mejor.": "What to review before redesigning a website, how to improve conversion and how to organize content to sell better.",
  "La estrategia no es llenar el sitio de textos. Es construir un mapa de contenido que responda dudas, demuestre criterio y conecte con soluciones concretas.": "Strategy is not filling the site with text. It is building a content map that answers questions, shows judgment and connects to real solutions.",
  "Señales de procesos manuales, herramientas desconectadas y oportunidades para trabajar con sistemas más inteligentes.": "Signals of manual processes, disconnected tools and opportunities to work with smarter systems.",
  "Cómo llevar la identidad al mundo real: espacios, vehículos, puntos de venta, stands y soportes tangibles.": "How to bring identity into the real world: spaces, vehicles, points of sale, stands and tangible supports.",
  "Intención de búsqueda": "Search intent",
  "Cada artículo debe tener una misión.": "Every article needs a mission.",
  "Desde esta página nacen las cuatro subpáginas SEO.": "The four SEO subpages grow from here.",
  "Entender": "Understand",
  "Ejecutar": "Execute",
  "Miramos el contexto antes de proponer: qué se quiere lograr, qué está frenando el avance y qué oportunidad real existe.": "We look at context before proposing: goal, blocker and real opportunity.",
  "Convertimos una necesidad abierta en una ruta clara, priorizando lo que aporta valor y dejando fuera lo que solo suma ruido.": "We turn an open need into a clear path, prioritizing value and removing noise.",
  "Traducimos la dirección en identidad, contenido, estructura, interfaz, pieza comercial, automatización o experiencia física.": "We translate direction into identity, content, structure, interface, sales piece, automation or physical experience.",
  "Llevamos la solución a producción cuidando consistencia visual, claridad técnica y aplicación práctica.": "We take the solution to production with visual consistency, technical clarity and practical use.",
  "Conversación inicial": "Initial conversation",
  "Diagnóstico y ruta": "Diagnosis and path",
  "Propuesta clara": "Clear proposal",
  "Diseño y construcción": "Design and build",
  "Implementación y evolución": "Implementation and evolution",
  "Visión + proceso + contacto": "Vision + process + contact",
  "Más dirección, más coherencia, más capacidad de avanzar.": "More direction, more coherence, more capacity to move.",
  "No importa por dónde empiece tu proyecto. Nuestro trabajo es conectar estrategia, creatividad, tecnología y ejecución para construir una solución coherente.": "It does not matter where the project starts. Our job is to connect strategy, creativity, technology and execution into one coherent solution.",
  "Accesos rápidos": "Quick links",
  "Revisión inicial": "Initial review",
  "Respuesta orientadora": "Guided response",
  "Diagnóstico o reunión": "Diagnosis or meeting",
  "Propuesta de ruta": "Path proposal",
  "Respuesta inicial en 24-48 h hábiles": "Initial reply in 24-48 business hours",
  "Lanzar algo nuevo": "Launch something new",
  "Modernizar lo existente": "Modernize what exists",
  "No. El formulario está pensado para partir incluso cuando solo existe una idea, una necesidad o un problema recurrente.": "No. The form works even when there is only an idea, a need or a recurring problem.",
  "Sí. Elev8 puede entrar por una capacidad específica o construir una ruta integral si el problema necesita varias áreas conectadas.": "Yes. Elev8 can enter through one capability or build an integrated path when the problem needs connected areas.",
  "Sí, siempre que exista una necesidad clara y una oportunidad real de generar valor. También podemos proponer una primera etapa si el proyecto completo aún no tiene sentido.": "Yes, when there is a clear need and a real value opportunity. We can also suggest a first stage.",
  "Cuando la empresa necesita alinear varias capas al mismo tiempo: estrategia, identidad, web, automatización, contenido y experiencia física.": "When the company needs to align strategy, identity, web, automation, content and physical experience at once.",
  "¿Necesito tener un brief listo?": "Do I need a finished brief?",
  "¿Puedo pedir solo una parte del proyecto?": "Can I ask for only one part?",
  "¿Trabajan proyectos pequeños?": "Do you take small projects?",
  "¿Cuándo conviene un proyecto 360?": "When does a 360 project make sense?",
  "Abrir menú": "Open menu",
  "Cerrar menú": "Close menu",
  "Navegación principal": "Main navigation",
  "Solución integral": "Integrated solution",
  "Rutas de solución Elev8": "Elev8 solution paths",
  "SEÑAL 01": "SIGNAL 01",
  "SEÑAL 02": "SIGNAL 02",
  "SEÑAL 03": "SIGNAL 03",
  "SEÑAL 04": "SIGNAL 04",
  "Contenido pensado para búsquedas de negocio, marca, diseño web, automatización, IA y experiencia física.": "Content built around searches for business, brand, web design, automation, AI and physical experience.",
  "Guías y diagnósticos que ayudan al cliente a entender qué necesita antes de pedir una cotización.": "Guides and diagnostics that help clients understand what they need before asking for a quote.",
  "Casos y análisis que muestran cómo Elev8 piensa, decide y conecta estrategia con ejecución.": "Cases and analysis that show how Elev8 thinks, decides and connects strategy with execution.",
  "Cada recurso debe abrir un siguiente paso: leer más, diagnosticar, comparar rutas o iniciar conversación.": "Every resource should open a next step: read more, diagnose, compare paths or start a conversation.",
  "Cómo saber si una marca se ve débil, antigua, genérica o desconectada del nivel real del negocio.": "How to know if a brand looks weak, outdated, generic or disconnected from the real business.",
  "¿Cómo saber si necesito renovar mi marca?": "How do I know if I need to renew my brand?",
  "¿Qué debe tener una página web profesional?": "What should a professional website include?",
  "¿Cuándo conviene automatizar procesos?": "When should processes be automated?",
  "¿Cómo lanzar un negocio desde cero?": "How do you launch a business from zero?",
  "¿Qué errores hacen que una empresa se vea poco profesional?": "What mistakes make a company look unprofessional?",
  "¿Cómo mejorar la experiencia de una oficina o local?": "How do you improve an office or store experience?",
  "Diagnóstico / Branding": "Diagnosis / Branding",
  "Guía / Digital Experiences": "Guide / Digital Experiences",
  "Diagnóstico / Smart Solutions": "Diagnosis / Smart Solutions",
  "Guía / Solución lanzamiento": "Guide / Launch solution",
  "Guía / Physical Brand": "Guide / Physical Brand",
  "Contenidos para detectar problemas: marca débil, web que no convierte, procesos manuales o espacios desconectados.": "Content that detects problems: weak brand, low-converting web, manual processes or disconnected spaces.",
  "Guías prácticas con pasos, criterios y decisiones clave antes de invertir en diseño, tecnología o implementación.": "Practical guides with steps, criteria and key decisions before investing in design, technology or implementation.",
  "Casos de éxito, procesos de transformación, antes/después y aprendizajes aplicables a nuevos proyectos.": "Case studies, transformation processes, before/after stories and lessons for new projects.",
  "Artículos conectados a soluciones específicas, con CTA hacia diagnóstico, contacto o rutas de proyecto.": "Articles connected to specific solutions, with CTAs toward diagnosis, contact or project paths.",
  "Categorías de recursos Elev8": "Elev8 resource categories",
  "Definimos si conviene entrar por estrategia, marca, web, automatización, espacio físico o una solución 360.": "We define whether to start with strategy, brand, web, automation, physical space or a 360 solution.",
  "Desarrollamos la solución con una mirada integrada entre comunicación, experiencia, tecnología y aplicación real.": "We develop the solution through communication, experience, technology and real-world application.",
  "Entendemos el problema, el momento del negocio, los objetivos y las señales que muestran que es hora de cambiar algo.": "We understand the problem, business moment, goals and signals that show it is time to change something.",
  "Entregamos una base que pueda seguir creciendo con nuevas páginas, contenidos, campañas, módulos o mejoras futuras.": "We deliver a foundation that can keep growing with new pages, content, campaigns, modules or future improvements.",
  "Leemos el contexto, identificamos la necesidad principal y vemos si conviene entrar por estrategia, marca, web, automatización, espacio físico o solución integral.": "We read the context, identify the main need and choose the best entry point: strategy, brand, web, automation, physical space or integrated solution.",
  "Respondemos con preguntas clave, una recomendación preliminar o una invitación a una conversación breve para ordenar mejor el alcance.": "We reply with key questions, an initial recommendation or a short conversation to shape the scope.",
  "Definimos alcance, etapas, entregables y próximos pasos para que el proyecto se pueda ejecutar sin confusión.": "We define scope, stages, deliverables and next steps so the project can move without confusion.",
  "Para llevar la marca a oficinas, locales, señalética o puntos físicos.": "To bring the brand into offices, stores, signage or physical touchpoints.",
  "Para alinear estrategia, marca, web, tecnología y experiencia física.": "To align strategy, brand, web, technology and physical experience.",
  "Rutas rápidas para iniciar un proyecto": "Quick paths to start a project",
  "Qué necesitas resolver, qué existe hoy, qué problema quieres corregir o qué quieres construir.": "What you need to solve, what exists today, what problem you want to fix or what you want to build.",
  "Estrategia y crecimiento": "Strategy & Growth",
  "Marca y creatividad": "Brand & Creative",
  "Experiencias digitales": "Digital Experiences",
  "Soluciones inteligentes": "Smart Solutions",
  "Marca física": "Physical Brand",
  "Búsqueda con criterio": "SEO with judgment",
  "Artículos": "Blog",
  "Marca + Digital": "Brand + Digital",
  "Estrategia + Creatividad": "Strategy + Creative",
  "Crecimiento + Inteligencia": "Growth + Smart",
  "Creatividad + Físico": "Creative + Physical",
  "Hoja de ruta": "Roadmap",
  "Nombre de marca": "Naming",
  "Páginas de aterrizaje": "Landing Pages",
  "Página de aterrizaje": "Landing",
  "Comercio electrónico": "Ecommerce",
  "Experiencia de usuario": "UX/UI",
  "Paneles": "Dashboards",
  "Gestión comercial": "CRM",
  "Aplicaciones": "Apps",
  "Sistemas": "Software",
  "Ruta evolución": "Upgrade Path",
  "Ruta inteligente": "Smart Path",
  "Reposicionamiento": "Rebrand",
  "Inteligencia": "Smart",
  "Presentación": "Pitch",
  "Miradas": "Insights",
  "Búsqueda": "SEO",
  "Guías + artículos": "Guides + blog",
  "Casos + artículos": "Cases + blog",
  "Diagnóstico / Marca": "Diagnosis / Branding",
  "Guía / Experiencias digitales": "Guide / Digital Experiences",
  "Diagnóstico / Soluciones inteligentes": "Diagnosis / Smart Solutions",
  "Artículo / Marca y web": "Blog / Brand and web",
  "Guía / Marca física": "Guide / Physical Brand",
  "Búsqueda con intención": "Focused SEO",
  "Territorios de búsqueda": "SEO clusters",
  "Artículos conectados a soluciones específicas, con llamados hacia diagnóstico, contacto o rutas de proyecto.": "Articles connected to specific solutions, with CTAs toward diagnosis, contact or project paths.",
  "Sitios web, páginas de aterrizaje, comercio electrónico, experiencia de usuario, plataformas, paneles y experiencias digitales de alto estándar.": "Websites, landing pages, ecommerce, UX/UI, platforms, dashboards and premium digital experiences.",
  "Automatización, inteligencia artificial, integraciones, sistemas internos, gestión comercial, aplicaciones y sistemas a medida.": "Automation, AI, integrations, internal systems, CRM, apps and custom software.",
  "Desde esta página nacen las cuatro subpáginas editoriales.": "The four SEO subpages grow from here.",
};

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

const reverseCopy = Object.fromEntries(Object.entries(enCopy).map(([es, en]) => [normalize(en), es]));
const forwardCopy = Object.fromEntries(Object.entries(enCopy).map(([es, en]) => [normalize(es), en]));

function translateText(text: string, language: Language) {
  if (language === "es") return reverseCopy[normalize(text)] ?? text;
  return forwardCopy[normalize(text)] ?? text;
}

function translateDocument(language: Language) {
  const map = language === "en" ? forwardCopy : reverseCopy;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const value = normalize(node.nodeValue ?? "");
    if (value && map[value]) nodes.push(node);
  }

  nodes.forEach((node) => {
    const current = normalize(node.nodeValue ?? "");
    const next = map[current];
    if (next) node.nodeValue = next;
  });

  document.documentElement.lang = language;
  document.documentElement.classList.remove("lang-pending");
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeToLanguage, readStoredLanguage, getServerLanguage);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        const nextPath = getLocalizedPath(nextLanguage);
        setStoredLanguage(nextLanguage);
        if (window.location.pathname !== nextPath) {
          window.history.replaceState(null, "", `${nextPath}${window.location.search}${window.location.hash}`);
        }
        notifyLanguageChange();
      },
      t: (text) => translateText(text, language),
    }),
    [language],
  );

  useEffect(() => {
    document.documentElement.dataset.language = language;
    translateDocument(language);
    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const nextPath = getLocalizedPath(language, url.pathname);
      if (nextPath === url.pathname) return;

      event.preventDefault();
      window.location.href = `${nextPath}${url.search}${url.hash}`;
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
