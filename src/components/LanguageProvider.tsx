"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "es" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

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
};

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

const reverseCopy = Object.fromEntries(Object.entries(enCopy).map(([es, en]) => [normalize(en), es]));
const forwardCopy = Object.fromEntries(Object.entries(enCopy).map(([es, en]) => [normalize(es), en]));

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
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "es";
    const storedLanguage = window.localStorage.getItem("elev8-language");
    return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "es";
  });

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        setLanguageState(nextLanguage);
        window.localStorage.setItem("elev8-language", nextLanguage);
      },
    }),
    [language],
  );

  useEffect(() => {
    translateDocument(language);
    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
