import { notFound } from "next/navigation";

import InteriorPage, { type InteriorPageContent } from "@/components/InteriorPage";

const resources: Record<string, InteriorPageContent> = {
  "casos-de-exito.html": {
    active: "Recursos",
    backHref: "/recursos",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/recursos",
    accent: "CASE",
    es: {
      eyebrow: "Recursos / Casos",
      title: "Casos de éxito",
      lead: "Transformaciones con contexto.",
      intro:
        "Un espacio para documentar problemas reales, decisiones tomadas y resultados visibles sin depender sólo de promesas.",
      panelTitle: "Prueba con criterio.",
      panelText: "Cada caso debe explicar qué cambió, por qué importaba y qué aprendimos.",
      chips: ["Antes / después", "Proceso", "Resultado", "Aprendizaje"],
      sections: [
        { label: "01", title: "Problema", text: "Qué estaba frenando percepción, operación, venta o experiencia." },
        { label: "02", title: "Decisión", text: "Qué se priorizó y qué se dejó fuera para avanzar con foco." },
        { label: "03", title: "Resultado", text: "Qué cambió de forma visible, útil o medible." },
      ],
      steps: [
        { label: "Paso 01", title: "Contexto", text: "Presentar el punto de partida sin adornarlo." },
        { label: "Paso 02", title: "Proceso", text: "Mostrar la lógica detrás de la solución." },
        { label: "Paso 03", title: "Cierre", text: "Explicar impacto y próximo aprendizaje." },
      ],
      questions: [
        "¿Qué tipo de problemas resuelve Elev8?",
        "¿Cómo se ve una transformación real?",
        "¿Qué decisiones hacen avanzar un proyecto?",
      ],
      ctaTitle: "¿Tienes un caso que necesita transformarse?",
      ctaText: "Podemos mirar el punto de partida y definir qué resultado vale la pena construir.",
      primaryCta: "Iniciar conversación",
      secondaryCta: "Volver a recursos",
    },
    en: {
      eyebrow: "Resources / Cases",
      title: "Case studies",
      lead: "Transformations with context.",
      intro:
        "A space to document real problems, decisions and visible outcomes without relying only on promises.",
      panelTitle: "Proof with judgment.",
      panelText: "Each case should explain what changed, why it mattered and what we learned.",
      chips: ["Before / after", "Process", "Outcome", "Learning"],
      sections: [
        { label: "01", title: "Problem", text: "What was blocking perception, operations, sales or experience." },
        { label: "02", title: "Decision", text: "What was prioritized and what was left out to move with focus." },
        { label: "03", title: "Outcome", text: "What changed in a visible, useful or measurable way." },
      ],
      steps: [
        { label: "Step 01", title: "Context", text: "Present the starting point without decorating it." },
        { label: "Step 02", title: "Process", text: "Show the logic behind the solution." },
        { label: "Step 03", title: "Close", text: "Explain impact and next learning." },
      ],
      questions: [
        "What kind of problems does Elev8 solve?",
        "What does a real transformation look like?",
        "What decisions move a project forward?",
      ],
      ctaTitle: "Do you have a case that needs transformation?",
      ctaText: "We can look at the starting point and define what outcome is worth building.",
      primaryCta: "Start conversation",
      secondaryCta: "Back to resources",
    },
  },
  "diagnosticos.html": {
    active: "Recursos",
    backHref: "/recursos",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/recursos",
    accent: "DIAG",
    es: {
      eyebrow: "Recursos / Diagnósticos",
      title: "Diagnósticos",
      lead: "Señales para decidir mejor.",
      intro:
        "Checklists y criterios para detectar si una marca, web, proceso o espacio necesita evolucionar.",
      panelTitle: "Mirar antes de invertir.",
      panelText: "Un buen diagnóstico evita producir piezas que no resuelven el problema correcto.",
      chips: ["Señales", "Auditoría", "Checklist", "Prioridad"],
      sections: [
        { label: "01", title: "Marca", text: "Detectar señales de percepción débil, genérica o poco profesional." },
        { label: "02", title: "Web", text: "Revisar claridad, estructura, conversión y confianza digital." },
        { label: "03", title: "Operación", text: "Encontrar tareas repetidas, datos dispersos y fricción interna." },
      ],
      steps: [
        { label: "Paso 01", title: "Observar", text: "Identificar síntomas visibles y puntos de desgaste." },
        { label: "Paso 02", title: "Comparar", text: "Separar señales críticas de simples gustos personales." },
        { label: "Paso 03", title: "Priorizar", text: "Definir qué cambio conviene abordar primero." },
      ],
      questions: [
        "¿Mi marca quedó chica?",
        "¿Mi web genera confianza suficiente?",
        "¿Qué proceso debería automatizar primero?",
      ],
      ctaTitle: "¿Necesitas una primera lectura?",
      ctaText: "Podemos ayudarte a detectar dónde está el bloqueo principal.",
      primaryCta: "Pedir diagnóstico",
      secondaryCta: "Volver a recursos",
    },
    en: {
      eyebrow: "Resources / Diagnostics",
      title: "Diagnostics",
      lead: "Signals for better decisions.",
      intro:
        "Checklists and criteria to detect whether a brand, website, process or space needs to evolve.",
      panelTitle: "Look before investing.",
      panelText: "A good diagnosis avoids producing pieces that do not solve the right problem.",
      chips: ["Signals", "Audit", "Checklist", "Priority"],
      sections: [
        { label: "01", title: "Brand", text: "Detect weak, generic or unprofessional perception signals." },
        { label: "02", title: "Web", text: "Review clarity, structure, conversion and digital trust." },
        { label: "03", title: "Operations", text: "Find repeated tasks, scattered data and internal friction." },
      ],
      steps: [
        { label: "Step 01", title: "Observe", text: "Identify visible symptoms and friction points." },
        { label: "Step 02", title: "Compare", text: "Separate critical signals from personal taste." },
        { label: "Step 03", title: "Prioritize", text: "Define which change should be tackled first." },
      ],
      questions: [
        "Has my brand become too small?",
        "Does my website create enough trust?",
        "Which process should I automate first?",
      ],
      ctaTitle: "Need a first read?",
      ctaText: "We can help detect where the main blocker is.",
      primaryCta: "Request diagnosis",
      secondaryCta: "Back to resources",
    },
  },
  "guias.html": {
    active: "Recursos",
    backHref: "/recursos",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/recursos",
    accent: "GUIDE",
    es: {
      eyebrow: "Recursos / Guías",
      title: "Guías",
      lead: "Pasos para ordenar decisiones.",
      intro:
        "Contenido práctico para entender qué hacer, en qué orden y qué evitar antes de invertir en diseño, tecnología o implementación.",
      panelTitle: "Decidir con calma.",
      panelText: "Las guías convierten dudas comunes en criterios accionables.",
      chips: ["Paso a paso", "Criterios", "Comparativas", "Errores"],
      sections: [
        { label: "01", title: "Lanzar", text: "Qué preparar antes de presentar una marca o negocio nuevo." },
        { label: "02", title: "Modernizar", text: "Qué conservar, qué corregir y qué ordenar primero." },
        { label: "03", title: "Automatizar", text: "Cómo elegir procesos que realmente conviene sistematizar." },
      ],
      steps: [
        { label: "Paso 01", title: "Pregunta", text: "Partir desde una duda real del cliente." },
        { label: "Paso 02", title: "Criterio", text: "Responder con señales, prioridades y ejemplos." },
        { label: "Paso 03", title: "Acción", text: "Abrir un siguiente paso claro." },
      ],
      questions: [
        "¿Qué necesito antes de pedir una web?",
        "¿Cómo sé si debo renovar mi marca?",
        "¿Cuánto debería preparar antes de automatizar?",
      ],
      ctaTitle: "Convierte una duda en una ruta.",
      ctaText: "Si tienes una pregunta recurrente, probablemente hay una decisión pendiente.",
      primaryCta: "Hacer una pregunta",
      secondaryCta: "Volver a recursos",
    },
    en: {
      eyebrow: "Resources / Guides",
      title: "Guides",
      lead: "Steps to clarify decisions.",
      intro:
        "Practical content to understand what to do, in what order and what to avoid before investing in design, technology or implementation.",
      panelTitle: "Decide with calm.",
      panelText: "Guides turn common doubts into actionable criteria.",
      chips: ["Step by step", "Criteria", "Comparisons", "Mistakes"],
      sections: [
        { label: "01", title: "Launch", text: "What to prepare before presenting a new brand or business." },
        { label: "02", title: "Modernize", text: "What to keep, what to fix and what to organize first." },
        { label: "03", title: "Automate", text: "How to choose processes that are actually worth systematizing." },
      ],
      steps: [
        { label: "Step 01", title: "Question", text: "Start from a real client doubt." },
        { label: "Step 02", title: "Criteria", text: "Answer with signals, priorities and examples." },
        { label: "Step 03", title: "Action", text: "Open a clear next step." },
      ],
      questions: [
        "What do I need before requesting a website?",
        "How do I know if I should renew my brand?",
        "How much should I prepare before automating?",
      ],
      ctaTitle: "Turn a doubt into a path.",
      ctaText: "If you have a recurring question, there is probably a pending decision.",
      primaryCta: "Ask a question",
      secondaryCta: "Back to resources",
    },
  },
  "blog.html": {
    active: "Recursos",
    backHref: "/recursos",
    primaryHref: "/contacto#formulario",
    secondaryHref: "/recursos",
    accent: "BLOG",
    es: {
      eyebrow: "Recursos / Artículos",
      title: "Artículos",
      lead: "Ideas breves con punto de vista.",
      intro:
        "Textos para leer señales de marca, web, operación y experiencia antes de tomar decisiones grandes.",
      panelTitle: "Criterio público.",
      panelText: "El blog debe mostrar cómo piensa Elev8, no llenar espacio con contenido genérico.",
      chips: ["Opinión", "Tendencias", "Señales", "Decisiones"],
      sections: [
        { label: "01", title: "Percepción", text: "Ideas para entender por qué una empresa puede verse bajo su nivel real." },
        { label: "02", title: "Digital", text: "Criterios para crear sitios, landings y experiencias más claras." },
        { label: "03", title: "Operación", text: "Lecturas sobre automatización, IA y sistemas internos útiles." },
      ],
      steps: [
        { label: "Paso 01", title: "Observar", text: "Detectar un problema que el cliente reconoce." },
        { label: "Paso 02", title: "Interpretar", text: "Explicar por qué ocurre y qué decisión implica." },
        { label: "Paso 03", title: "Conectar", text: "Llevar la idea hacia una ruta de solución." },
      ],
      questions: [
        "¿Por qué mi empresa se ve menos profesional?",
        "¿Qué hace que una web convierta mejor?",
        "¿Cuándo la IA realmente ayuda?",
      ],
      ctaTitle: "¿Hay una idea que deberíamos mirar juntos?",
      ctaText: "Podemos transformarla en diagnóstico, guía o proyecto concreto.",
      primaryCta: "Conversar idea",
      secondaryCta: "Volver a recursos",
    },
    en: {
      eyebrow: "Resources / Articles",
      title: "Articles",
      lead: "Short ideas with a point of view.",
      intro:
        "Texts to read brand, web, operations and experience signals before making big decisions.",
      panelTitle: "Public judgment.",
      panelText: "The blog should show how Elev8 thinks, not fill space with generic content.",
      chips: ["Opinion", "Trends", "Signals", "Decisions"],
      sections: [
        { label: "01", title: "Perception", text: "Ideas to understand why a company can look below its real level." },
        { label: "02", title: "Digital", text: "Criteria to create clearer sites, landings and experiences." },
        { label: "03", title: "Operations", text: "Reads on automation, AI and useful internal systems." },
      ],
      steps: [
        { label: "Step 01", title: "Observe", text: "Detect a problem the client recognizes." },
        { label: "Step 02", title: "Interpret", text: "Explain why it happens and what decision it implies." },
        { label: "Step 03", title: "Connect", text: "Lead the idea toward a solution path." },
      ],
      questions: [
        "Why does my company look less professional?",
        "What makes a website convert better?",
        "When does AI actually help?",
      ],
      ctaTitle: "Is there an idea we should look at together?",
      ctaText: "We can turn it into a diagnosis, guide or concrete project.",
      primaryCta: "Discuss idea",
      secondaryCta: "Back to resources",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(resources).map((slug) => ({ slug }));
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = resources[slug];

  if (!content) notFound();

  return <InteriorPage content={content} />;
}
