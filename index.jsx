import { useState } from “react”;

// ─── TOKENS ───────────────────────────────────────────
const C = {
bg: “#F8F5EE”, card: “#FFFFFF”, alt: “#F1EDE4”,
ink: “#141210”, muted: “#6B6860”, faint: “#B2AFA9”,
gold: “#C8952A”, goldBg: “#FBF0D0”, goldDark: “#8A6418”,
green: “#1A5E3C”, greenBg: “#E6F4EE”,
red: “#A32018”, redBg: “#FDEEE7”,
blue: “#1B3D70”, blueBg: “#E7EDF8”,
purple: “#5A2D90”, purpleBg: “#EFE7FA”,
teal: “#0D6B6B”, tealBg: “#E5F5F5”,
brown: “#7A4010”, brownBg: “#FDF2E7”,
navy: “#1A2A40”, navyBg: “#E8ECF2”,
border: “#E2DED6”, dark: “#141210”,
};

// ─── DATA ─────────────────────────────────────────────
const PHASES = [
{
id:“p1”, n:1, icon:“🏗️”, color:C.blue, bg:C.blueBg,
title:“Arquitectura de Producto”,
sub:“Construís sobre cimientos sólidos o construís para derrumbar.”,
duration:“Semanas 1–2”, kpi:“Producto validado listo para vender”,
desc:“El 80% de los infoproductos que no venden tienen un problema de producto, no de marketing. Un producto bien arquitectado se vende casi solo porque resuelve un dolor específico, a una persona específica, con un resultado medible. Esta fase establece los cimientos irreemplazables.”,
principles:[
“Un producto que intenta servir a todos, no sirve a nadie. La riqueza está en el nicho dentro del nicho.”,
“El precio es un mensaje de posicionamiento. Cobrar barato no atrae más clientes, atrae peores clientes.”,
“Vendé el resultado, no el contenido. A nadie le importan tus módulos; les importa en qué se convierte su vida.”,
“Validá con dinero, no con opiniones. Un presale de 5 personas vale más que 50 encuestas gratuitas.”,
],
prompts:[
{
title:“Validación de Idea (Anti-fracaso)”,
text:“Actúa como investigador de mercado especialista en infoproductos LATAM.\nTengo esta idea de producto: [DESCRIPCIÓN DETALLADA]\nPrecio tentativo: $[PRECIO] USD\nCliente ideal: [DESCRIPCIÓN]\n\nAnalizá:\n1. ¿Existe demanda real o estoy inventando una necesidad? Dame señales concretas.\n2. ¿Quiénes son los 3 competidores directos y qué GAPS dejan sin cubrir?\n3. ¿Cuál es el ángulo diferenciador más potente disponible para mí?\n4. Dame 5 nombres posibles (cortos, memorables, orientados a resultado).\n5. Calificá la idea del 1 al 10 con justificación honesta.\n6. Si el número es menor a 7, decime exactamente cómo la pivotearías.\nSé brutalmente honesto. No necesito que me digas lo que quiero escuchar.”,
},
{
title:“Propuesta de Valor Irresistible”,
text:“Soy [NOMBRE], [PROFESIÓN/EXPERIENCIA].\nCreé un producto llamado [NOMBRE] que ayuda a [CLIENTE IDEAL] a lograr [RESULTADO CONCRETO] en [PLAZO REALISTA].\nEl mayor obstáculo que supera mi cliente: [OBSTÁCULO].\nMis credenciales: [DATOS CONCRETOS].\nResultados comprobables: [EVIDENCIA].\n\nEscribí:\n1. Propuesta de valor en UNA oración de 20 palabras máximo.\n2. Párrafo "Para quién es" (5 sí + 3 no específicos).\n3. Los 5 dolores en primera persona que siente mi cliente antes de encontrarme.\n4. Las 3 victorias que celebra después de usar mi producto.\n5. Headline principal y subheadline para mi landing page.”,
},
{
title:“Estructura de Producto Escalable”,
text:“Tengo este concepto de producto: [DESCRIPCIÓN].\nFormato: [CURSO VIDEO / PDF / MENTORÍA / HÍBRIDO]\nDuración objetivo: [X horas / X módulos]\nNivel del cliente: [PRINCIPIANTE / INTERMEDIO]\n\nDiseñame la estructura completa:\n1. Índice con módulos y lecciones (cada lección = UN resultado concreto).\n2. "Victoria rápida" en los primeros 30 minutos de consumir el producto.\n3. Orden pedagógico correcto (qué enseñar primero para que el resto tenga sentido).\n4. Materiales complementarios que multiplican el valor sin añadir horas.\n5. Cómo estructurar para que el 80% del valor venga del 20% del contenido.\n6. Cómo diseñarlo para que exista un upsell natural al siguiente nivel.”,
},
],
metrics:[“Cliente ideal definido (1 persona concreta)”, “Propuesta de valor en 20 palabras”, “1 victoria rápida definida (primeros 30min)”],
},
{
id:“p2”, n:2, icon:“🎣”, color:C.green, bg:C.greenBg,
title:“Máquina de Captación”,
sub:“Construís un flujo constante de personas que ya confían antes de comprar.”,
duration:“Semanas 2–4”, kpi:“100–500 leads activos”,
desc:“La captación es el oxígeno de cualquier negocio digital. Sin un flujo constante de personas nuevas descubriéndote, vivís en ciclos de escasez. Esta fase construye la infraestructura que atrae, califica y nutre prospectos de forma predecible.”,
principles:[
“El lead magnet no es para captar emails. Es la primera experiencia de tu cliente contigo. Si es mediocre, ya empezaste mal.”,
“El contenido que vende habla del problema de tu cliente, no de vos. El 80/20: 80% sobre ellos, 20% sobre vos.”,
“El email es el único canal donde la audiencia es tuya. Instagram puede desaparecer mañana. Tu lista, no.”,
“WhatsApp en LATAM convierte 3–5x más que cualquier otro canal. Usarlo mal es dejar dinero sobre la mesa.”,
],
prompts:[
{
title:“Lead Magnet que Pre-Vende”,
text:“Creá un lead magnet tipo [CHECKLIST / GUÍA RÁPIDA / TEMPLATE] para [CLIENTE IDEAL].\nTítulo: número + resultado específico + tiempo.\nResuelve: [PROBLEMA CONCRETO] en menos de 10 minutos.\nMi producto de pago relacionado: [PRODUCTO] a $[PRECIO].\n\nDame:\n1. El título ganador + 3 alternativas.\n2. Estructura completa (máximo 5 páginas, cada una con UN punto accionable).\n3. CTA final que lleva naturalmente hacia mi producto sin sonar forzado.\n4. Descripción de 2 líneas para la landing de captura.\n5. Texto del botón de descarga.\nEl lead magnet debe hacer que quien lo descargue piense: ‘Si esto es gratis, imaginate lo que paga’.”,
},
{
title:“Sistema de Contenido 3-3-3”,
text:”[BRAND BRIEF COMPLETO]\nObjetivo de este mes: [OBJETIVO ESPECÍFICO]\n\nCreá el plan de contenido mensual:\n• 3 posts DESPERTAR/semana: hacen consciente el problema\n• 3 posts EDUCACIÓN/semana: demuestran expertise con valor accionable\n• 3 posts AUTORIDAD/semana: construyen confianza personal\n\nPara cada post: TEMA → HOOK → 3 BULLETS → CTA.\nPara stories diarias: 5 tipos rotativos (encuesta / detrás de escena / tip / pregunta / teaser).\nTono: [TONO]. Prohibido: [PALABRAS QUE NO USÁS].”,
},
{
title:“Secuencia Email de Bienvenida (5 emails)”,
text:”[BRAND BRIEF]\nEl suscriptor descargó: [NOMBRE DEL LEAD MAGNET]\nProducto de destino: [PRODUCTO] a $[PRECIO]\n\nEscribí los 5 emails completos:\nEmail 1 (inmediato): Entrega del lead magnet + quién soy + qué esperar.\nEmail 2 (24h): Mi historia de transformación personal (antes → momento clave → después).\nEmail 3 (48h): El error #1 que comete [CLIENTE IDEAL].\nEmail 4 (72h): Caso de éxito real o construido de alguien que usó mi método.\nEmail 5 (96h): Oferta directa a [PRODUCTO] con escasez suave y garantía.\n\nPara cada email:\n— Asunto + 2 variantes A/B\n— Preview text (máx 50 caracteres)\n— Cuerpo completo (300–450 palabras)\n— Un solo CTA claro\n— P.D. que genera curiosidad (excepto el último)”,
},
],
metrics:[“Conversión landing captura >35%”, “Tasa apertura email >28%”, “Tasa click email >3.5%”],
},
{
id:“p3”, n:3, icon:“💡”, color:C.gold, bg:C.goldBg,
title:“Sistema de Conversión”,
sub:“Transformás el interés en decisión de compra con estructura, no con suerte.”,
duration:“Semanas 3–5”, kpi:“Primera venta + order bump activo”,
desc:“La conversión es el punto donde el dinero entra. La mayoría de los infoproductores invierte el 90% del tiempo en crear contenido y el 10% en el sistema de ventas. Esta fase invierte esa proporción donde realmente importa.”,
principles:[
“Una landing page de ventas no vende tu producto. Vende la decisión de comprarlo. Hay una diferencia enorme.”,
“El copy debe sonar como la voz de tu cliente describiendo su propio problema, no como un vendedor describiendo su solución.”,
“El Order Bump es el cambio con mayor ROI en todo el funnel. 5 minutos de trabajo, 25–40% más de ingresos por compra.”,
“La garantía no cuesta dinero: reduce la fricción de decisión y aumenta las ventas más de lo que incrementa los reembolsos.”,
],
prompts:[
{
title:“Landing Page Completa (12 secciones)”,
text:”[BRAND BRIEF COMPLETO]\nProducto: [NOMBRE] a $[PRECIO] USD\nDolores del cliente en primera persona: [LISTA DE 6-8]\nResultados concretos prometidos: [LISTA DE 4-5]\n\nEscribí la landing page completa:\n1. HEADLINE: La promesa más poderosa en 12 palabras.\n2. SUBHEADLINE: Amplía la promesa + menciona al cliente ideal.\n3. EL PROBLEMA: Agitá el dolor (3 párrafos).\n4. LA PROMESA: Qué cambia cuando tienen tu producto.\n5. CREDENCIALES: Por qué sos la persona indicada.\n6. QUÉ INCLUYE: Features convertidas en beneficios.\n7. PARA QUIÉN ES / NO ES: 5 SÍ + 3 NO específicos.\n8. TESTIMONIOS: 3 plantillas que cualquier alumno pueda completar.\n9. FAQ: 8 preguntas que eliminan objeciones.\n10. GARANTÍA: Texto de la garantía de satisfacción.\n11. PRECIO Y BONOS: Presentación con anclaje de valor.\n12. CTA FINAL: El cierre con urgencia real.”,
},
{
title:“Script WhatsApp que Convierte”,
text:”[BRAND BRIEF]\nContexto: el prospecto llegó porque [VIO MI STORY / DESCARGÓ EL LEAD MAGNET / ME PREGUNTÓ POR DM]\nProducto que vendo: [PRODUCTO] a $[PRECIO]\n\nEscribí el script completo:\n— Apertura cálida sin vender (2 mensajes de rapport)\n— 3 preguntas de diagnóstico que revelan el dolor real\n— Reconocimiento empático de su situación\n— Transición natural hacia la oferta\n— Presentación del producto en 4 líneas\n— Respuestas pre-escritas para objeciones:\n • ‘Está caro’\n • ‘Lo tengo que pensar’\n • ‘No tengo tiempo ahora’\n • ‘Ya probé algo similar’\n • ‘Mandame más info’ (evitar el loop)\n— Cierre con CTA y link de pago\n— Seguimiento a las 24hs si no responde”,
},
{
title:“Order Bump + Upsell + Downsell”,
text:“Producto core: [NOMBRE] a $[PRECIO]\n\nDiseñame la arquitectura completa del backend:\n\nORDER BUMP (20-30% del precio core):\n— Nombre del producto\n— Qué problema específico resuelve\n— Texto del checkbox en el checkout (máx 80 palabras)\n\nUPSELL POST-COMPRA (2-3x el precio core):\n— Nombre del producto\n— Por qué es la evolución lógica inmediata\n— Página de upsell completa (300 palabras)\n— CTA de rechazo\n\nDOWNSELL (50-60% del precio del upsell rechazado):\n— Versión reducida del upsell\n— Texto de la oferta (150 palabras)\n\nProyección de ticket promedio con esta arquitectura activada.”,
},
],
metrics:[“Conversión landing >2.5%”, “Tasa order bump >22%”, “Reembolsos <4%”],
},
{
id:“p4”, n:4, icon:“🚀”, color:C.red, bg:C.redBg,
title:“Lanzamiento Estratégico”,
sub:“El evento que concentra ventas, prueba el mercado y construye momentum.”,
duration:“5–7 días activos”, kpi:“Primer pico de caja”,
desc:“Un lanzamiento no es improvisación. Es una partitura con roles y tiempos definidos. El Lanzamiento Relámpago de Persaltum genera el 70% de las ventas de un período comprimido en 5 días, sin importar el tamaño de la audiencia.”,
principles:[
“El 40% de las ventas ocurre en las primeras 24hs (apertura). El 35% en las últimas 24hs (urgencia). Nunca abandones el cierre.”,
“La escasez falsa destruye confianza para siempre. La urgencia real construye autoridad.”,
“Lanzar sin haber calentado la audiencia es como pedirle matrimonio a alguien que acabas de conocer.”,
“El webinar multiplica la conversión por 3–5x para audiencias medianas. El ROI de prepararlo es enorme.”,
],
prompts:[
{
title:“Plan Lanzamiento Relámpago 5 Días”,
text:”[BRAND BRIEF]\nProducto: [NOMBRE] a $[PRECIO]\nCanales: [INSTAGRAM / EMAIL / WHATSAPP]\nAudiencia: [X seguidores / X suscriptores]\nUrgencia real: [PRECIO SUBE / CUPOS LIMITADOS / BONUS que desaparece]\n\nDame el plan DÍA POR DÍA con textos completos:\n\nDÍA 1 — PRE-CALENTAMIENTO:\nPost de valor que toca el problema + story de ‘algo viene’\n\nDÍA 2 — CALENTAMIENTO:\nContenido de autoridad + story de expectativa + DM personal a 20 contactos cálidos\n\nDÍA 3 — APERTURA:\nEmail de apertura + post de anuncio + 5 stories secuenciales + broadcast WhatsApp\n\nDÍA 4 — MITAD + OBJECIONES:\nEmail de objeciones + story de FAQ + respuesta a quienes preguntaron\n\nDÍA 5 — CIERRE:\nEmail last call + post urgencia + stories countdown + último WhatsApp\n\nPara cada pieza: texto completo listo para publicar/enviar.”,
},
{
title:“Guión Webinar de Lanzamiento (60 min)”,
text:”[BRAND BRIEF]\nProducto que vendo al final: [NOMBRE] a $[PRECIO]\n\nEscribí el guión completo:\n\n0–5 min | APERTURA: Hook que justifica estar aquí + promesa de la sesión.\n5–15 min | EL MITO: La gran creencia errónea que frena a [CLIENTE IDEAL].\n15–35 min | EL SISTEMA: Los 3 pilares del método. Por cada pilar: concepto + ejemplo real + micro-victoria implementable hoy.\n35–40 min | CASO DE ÉXITO: Historia de transformación con números.\n40–50 min | PRESENTACIÓN DE OFERTA: El producto, precio normal, precio especial, bonos, garantía, urgencia.\n50–55 min | Q&A ESTRATÉGICO: Las 5 preguntas que más objeciones esconden.\n55–60 min | CIERRE: Costo de no actuar + CTA final directo.\n\nIncluí las transiciones exactas entre secciones.”,
},
{
title:“Secuencia de Emails de Lanzamiento (7)”,
text:”[BRAND BRIEF]\nProducto: [NOMBRE] a $[PRECIO]\nCarrito abierto: Lunes a Viernes 23:59\nUrgencia: [PRECIO SUBE / BONOS DESAPARECEN / CUPOS LIMITADOS]\n\nEscribí los 7 emails completos:\nEMAIL 1 — Lunes: Historia de origen + la promesa + CTA.\nEMAIL 2 — Martes: El problema profundo + prueba social.\nEMAIL 3 — Miércoles: Las 3 objeciones más comunes respondidas + FAQ.\nEMAIL 4 — Jueves am: Caso de éxito detallado (antes/proceso/resultado).\nEMAIL 5 — Jueves pm: Urgencia real — mañana cierra.\nEMAIL 6 — Viernes 9am: LAST CALL — abre hoy, cierra esta noche.\nEMAIL 7 — Viernes 20hs: Cierra en 4 horas. Corto, directo, emocional.\n\nPara cada email: Asunto + 2 variantes A/B + Preview text + Cuerpo completo + CTA.”,
},
],
metrics:[“Ventas día 1 >40% del total”, “Ventas día 5 >30% del total”, “Apertura emails lanzamiento >35%”],
},
{
id:“p5”, n:5, icon:“📢”, color:C.purple, bg:C.purpleBg,
title:“Tráfico y Publicidad Paga”,
sub:“Invertís dinero para generar más dinero de forma predecible y escalable.”,
duration:“Desde mes 2”, kpi:“ROAS sostenido mayor a 3x”,
desc:“Los ads no crean negocios — los amplifican. Primero validás orgánico (que el funnel convierte), después escalás con publicidad. Con $5–10/día podés testear 3 creativos en 5 días y saber exactamente qué funciona antes de escalar.”,
principles:[
“Nunca pongas publicidad a un funnel que no convierte orgánicamente. Los ads amplifican lo que ya existe, no lo crean.”,
“Un solo cambio por semana en los ads. Si cambiás todo a la vez, no sabés qué funcionó.”,
“El creativo (imagen/video) hace el 70% del trabajo en Meta Ads. El copy es importante; el creativo es crítico.”,
“La audiencia de remarketing convierte 5–10x más que la audiencia fría. Priorizala siempre.”,
],
prompts:[
{
title:“Copy de Anuncios (3 ángulos)”,
text:”[BRAND BRIEF]\nProducto/Lead Magnet: [NOMBRE]\nObjetivo: [CAPTACIÓN DE LEADS / VENTA DIRECTA]\nCliente ideal: [DESCRIPCIÓN DETALLADA]\n\nEscribí 3 variantes completas de anuncio:\n\nANUNCIO A — ÁNGULO DOLOR:\nHook visual + Título (40 chars) + Cuerpo (150-200 palabras) + CTA.\n\nANUNCIO B — ÁNGULO RESULTADO:\nMisma estructura abriendo con el estado deseado.\n\nANUNCIO C — ÁNGULO HISTORIA:\nMisma estructura abriendo con historia personal de 3 oraciones.\n\nPara cada variante: qué audiencia funcionaría mejor y por qué.”,
},
{
title:“Estrategia de Segmentación Meta Ads”,
text:“Quiero llegar a [CLIENTE IDEAL] con Meta Ads para [PRODUCTO/LEAD MAGNET].\nUbicación: [ARGENTINA / MÉXICO / COLOMBIA / LATAM]\nPresupuesto inicial: $[5-15]/día.\n\nDame la estrategia completa:\n1. 8 intereses específicos para targetear (no genéricos).\n2. Datos demográficos + comportamientos a incluir y excluir.\n3. Audiencias personalizadas de retargeting.\n4. Audiencia origen para el 1% y 3% lookalike.\n5. Exclusiones críticas para no desperdiciar presupuesto.\n6. Estructura de campaña (campañas / conjuntos / anuncios).\n7. Cómo pasar de $10/día a $50/día sin romper el rendimiento.\n8. KPIs mínimos aceptables (CPL, CTR, CPC, ROAS).”,
},
{
title:“Diagnóstico de Ads con Datos Reales”,
text:“Actúa como media buyer experto en infoproductos LATAM.\nMétricas de los últimos 7 días:\n\nCampaña: [NOMBRE] | Objetivo: [LEADS / VENTAS]\nPresupuesto gastado: $[X]\nClicks: [X] | CTR: [X%] | CPC: $[X]\nLeads o ventas: [X] | CPL/Costo por venta: $[X] | ROAS: [X]\n\nAnalizá:\n1. Diagnóstico honesto: qué está roto y qué funciona.\n2. ¿Dónde se rompe el flujo: en el anuncio, la landing, o el funnel post-lead?\n3. Los 3 cambios con mayor impacto inmediato.\n4. Qué testear esta semana (máximo UN elemento).\n5. Si el ROAS es menor a 2x: qué hacer antes de escalar.”,
},
],
metrics:[“CPL menor a $5 USD”, “CTR anuncio mayor a 1.5%”, “ROAS funnel completo mayor a 3x”],
},
{
id:“p6”, n:6, icon:“🪜”, color:”#2D6A4F”, bg:”#E6F4EE”,
title:“Escalera de Valor y Backend”,
sub:“Cada cliente que conseguís vale mucho más de lo que te pagó la primera vez.”,
duration:“Mes 2–3”, kpi:“LTV 3x mayor al ticket inicial”,
desc:“La diferencia entre un negocio que sobrevive y uno que prospera está en el LTV (valor de vida del cliente). Conseguir un cliente nuevo cuesta 5x más que retener uno existente. La escalera de valor convierte cada comprador en múltiples flujos de ingresos.”,
principles:[
“El backend (membresía, high-ticket, afiliados) es donde vive el dinero real. El frontend solo paga los ads.”,
“Una membresía de $37/mes con 100 miembros activos vale más que 10 lanzamientos anuales de $97.”,
“Los afiliados son tu equipo de ventas sin sueldo fijo. Con el 40% de comisión, generan el 30% de ventas adicionales.”,
“El high-ticket se vende en llamadas, no en landing pages. El precio justifica el tiempo de conversación.”,
],
prompts:[
{
title:“Diseño de Membresía Recurrente”,
text:“Tengo un producto core: [NOMBRE] a $[PRECIO].\nQuiero crear una membresía recurrente como backend natural.\n\nDiseñame la estructura completa:\n1. NOMBRE y PROPUESTA DE VALOR (qué obtiene el miembro que no puede conseguir solo).\n2. PRECIO mensual/anual que justifica la permanencia.\n3. CONTENIDO MENSUAL: qué entregás cada semana para que nadie cancele.\n4. ONBOARDING: Los primeros 7 días de un nuevo miembro.\n5. RETENCIÓN: 3 estrategias para bajar el churn por debajo del 5%.\n6. CÓMO VENDERLA: cuándo y cómo presentarla después de la compra del core.\n7. PROYECCIÓN: ingresos con 50 / 100 / 200 / 500 miembros.\n8. HERRAMIENTA RECOMENDADA: Circle / Telegram / Hotmart Club y por qué.”,
},
{
title:“Programa de Afiliados Estratégico”,
text:“Producto: [NOMBRE] a $[PRECIO]. Plataforma: Hotmart / [OTRA].\n\nDiseñame el programa completo:\n1. COMISIÓN recomendada y justificación.\n2. CRITERIOS DE SELECCIÓN del afiliado ideal.\n3. KIT DE AFILIADO completo:\n — Email de captación de afiliados\n — 3 posts de Instagram listos para usar\n — 3 stories con textos\n — 2 emails de venta para su lista\n — Descripción del producto\n4. ONBOARDING: qué enviarle en los primeros 3 días.\n5. RETENCIÓN: cómo mantener activos a los mejores afiliados.\n6. PROYECCIÓN: con 10 afiliados activos que venden 5 unidades/mes.”,
},
{
title:“Oferta High-Ticket $497–$997”,
text:“Tengo este producto core: [NOMBRE] a $[PRECIO].\nQuiero crear un programa high-ticket.\n\n1. DISEÑO: qué incluye que el core no incluye (acompañamiento, no más contenido).\n2. PRECIO: cómo calcularlo basado en el resultado que prometo.\n3. PROCESO DE VENTA (aplicación + llamada, no landing pública):\n — Página de aplicación: qué preguntar para pre-calificar.\n — Email de seguimiento post-aplicación.\n4. GUIÓN DE LLAMADA DE VENTAS (45 minutos):\n — Apertura (5 min): rapport + agenda\n — Diagnóstico (15 min): preguntas que revelan el dolor real\n — Visión (5 min): el futuro posible\n — Presentación (10 min): la oferta, resultados, precio\n — Objeciones (5 min): precio / tiempo / confianza\n — Cierre (5 min): decisión y próximos pasos\n5. SEGUIMIENTO si no deciden en la llamada.”,
},
],
metrics:[“Membresía post-compra >15% aceptación”, “Churn mensual membresía <6%”, “Conversión llamada high-ticket >30%”],
},
{
id:“p7”, n:7, icon:“🤖”, color:C.teal, bg:C.tealBg,
title:“Automatización IA-First”,
sub:“Construís sistemas que trabajan mientras dormís y piensan como vos.”,
duration:“Mes 2–3”, kpi:“10+ horas semanales liberadas”,
desc:“La automatización real no es solo programar emails. Es construir sistemas inteligentes donde Claude actúa como el cerebro, y herramientas como n8n o Make actúan como el cuerpo. Juntos crean un negocio que funciona sin supervisión constante.”,
principles:[
“Automatizá procesos repetibles, no procesos creativos. Claude hace el 80% del trabajo intelectual; vos ponés el 20% de dirección.”,
“Antes de automatizar algo, optimizalo manualmente. Automatizar un proceso roto solo lo rompe más rápido.”,
“Un agente de IA mal diseñado daña la relación con el cliente. La personalidad del agente es tan importante como su funcionalidad.”,
“Los workflows de n8n/Make no requieren programación. Requieren pensamiento sistémico.”,
],
prompts:[
{
title:“System Prompt de Agente IA”,
text:“Quiero crear un agente de IA para [FUNCIÓN: atención al cliente / soporte a alumnos / contenido].\n\n[BRAND BRIEF COMPLETO]\n\nEscribí el system prompt completo:\n1. IDENTIDAD: quién es, cómo se llama, su función principal.\n2. PERSONALIDAD: tono, estilo, adjetivos que describen cómo interactúa.\n3. CAPACIDADES: qué puede hacer y cómo.\n4. LÍMITES: qué no puede hacer y cómo escalar al humano.\n5. CONOCIMIENTO: todos los productos, precios, links y descripciones.\n6. FAQ INCORPORADO: las 15 preguntas frecuentes con respuestas exactas.\n7. PROTOCOLO DE OBJECIONES: cómo responder a cada objeción de venta.\n8. ESCALACIÓN: cuándo y cómo derivarme casos.\n9. FORMATO: longitud de respuestas, emojis, lenguaje.\n\nEl agente debe sonar exactamente como yo.”,
},
{
title:“Workflow de Automatización Completa”,
text:“Necesito automatizar este proceso: [DESCRIPCIÓN DEL PROCESO].\nHerramientas disponibles: [MAILERLITE / HOTMART / INSTAGRAM / WHATSAPP / NOTION]\nHerramienta de automatización: [N8N / MAKE / ZAPIER]\n\nDiseñame el workflow completo:\n1. TRIGGER: qué evento lo activa.\n2. PASOS DEL FLUJO: secuencia exacta de acciones.\n3. PUNTOS DE DECISIÓN: dónde el flujo se bifurca por condiciones.\n4. INTEGRACIONES NECESARIAS: qué APIs o conexiones necesito.\n5. MANEJO DE ERRORES: qué pasa si algo falla.\n6. CÓMO IMPLEMENTARLO EN [N8N/MAKE]: pasos concretos sin programar.\n7. TIEMPO DE IMPLEMENTACIÓN estimado sin experiencia técnica.\n\nEste workflow debe reemplazar [TIEMPO QUE DEMORA HOY] de trabajo manual.”,
},
{
title:“Claude Projects: Tu Base de Conocimiento”,
text:“Necesito construir mi Claude Project para que Claude conozca todo sobre mi negocio.\n\n[BRAND BRIEF]\n[TODOS LOS PRODUCTOS CON PRECIOS Y LINKS]\n[TESTIMONIOS DE CLIENTES]\n[MEJORES EMAILS QUE CONVIRTIERON]\n[POSTS CON MAYOR ENGAGEMENT]\n\nEscribí:\n1. INSTRUCCIONES PERMANENTES del Project (reglas que Claude sigue siempre).\n2. ÍNDICE DE DOCUMENTOS que debo subir y en qué orden de prioridad.\n3. CÓMO ESTRUCTURAR cada documento para que Claude los use eficientemente.\n4. LOS 10 PROMPTS MAESTROS para las tareas más frecuentes.\n5. FLUJO DE TRABAJO SEMANAL usando el Project (lunes / miércoles / viernes).\n6. CÓMO MANTENERLO ACTUALIZADO mensualmente.”,
},
],
metrics:[“Tareas repetibles menos de 2hs/semana”, “Respuesta automática en menos de 5 min”, “Satisfacción atención al cliente mayor a 90%”],
},
{
id:“p8”, n:8, icon:“⭐”, color:C.purple, bg:C.purpleBg,
title:“Posicionamiento y Marca Personal”,
sub:“Construís autoridad que atrae en lugar de perseguir.”,
duration:“Proceso continuo”, kpi:“Referente reconocido en el nicho”,
desc:“El posicionamiento no es lo que vos decís sobre vos mismo — es lo que otros dicen cuando no estás en la sala. Una marca personal fuerte convierte el marketing en atracción: la gente viene a vos en lugar de que tengas que ir a buscarlos.”,
principles:[
“Ser el experto en TODO es ser experto en NADA. La autoridad más poderosa viene de posicionarte en un nicho específico.”,
“El contenido pilar (un video/artículo profundo por mes) vale más que 30 posts superficiales diarios.”,
“Las colaboraciones multiplican tu audiencia sin costo. Un podcast en la audiencia de otra persona es el ad más eficiente.”,
“La consistencia supera a la perfección. Publicar bien por 12 meses construye más que publicar brillantemente durante 3.”,
],
prompts:[
{
title:“Estrategia Thought Leadership 90 días”,
text:”[BRAND BRIEF]\nNicho específico donde quiero ser la referencia: [NICHO PRECISO]\nAudiencia actual: [X seguidores / X suscriptores]\nObjetivo a 90 días: [RESULTADO CONCRETO]\n\nDiseñame la estrategia de los próximos 90 días:\n1. LOS 3 TEMAS PILARES en los que construiré autoridad.\n2. CONTENIDO PILAR: un contenido extenso por mes que establece mi posición.\n3. ÁNGULO ÚNICO: la perspectiva que solo yo puedo ofrecer.\n4. FRASE DE POSICIONAMIENTO: una oración que me ubica en el mercado.\n5. COLABORACIONES ESTRATÉGICAS: 5 personas con quienes colaborar y cómo acercarme.\n6. PLAN SEMANA A SEMANA: qué publicar, qué contactar, qué evento crear.”,
},
{
title:“Pitch para Podcasts y Medios”,
text:”[BRAND BRIEF]\nTema del que puedo hablar con máxima autoridad: [TEMA]\nResultados concretos: [DATOS]\n\nEscribí:\n1. PITCH PARA PODCAST (200 palabras): por qué soy el invitado ideal. Tono: colega experto, no postulante.\n2. 5 TÍTULOS de episodios que yo podría protagonizar con muchos downloads.\n3. BIO PARA PRESENTACIÓN (100 palabras): lo que me hace interesante.\n4. LISTA DE 10 PODCASTS en español que tienen mi audiencia ideal.\n5. SECUENCIA DE ACERCAMIENTO:\n — DM de presentación inicial\n — Seguimiento a 7 días\n — Segundo seguimiento a 14 días\n6. QUÉ PREPARAR: los 3 puntos clave que siempre comunicaré.”,
},
{
title:“Sistema de Contenido Pilar Mensual”,
text:”[BRAND BRIEF]\nTema del contenido pilar de este mes: [TEMA]\nFormato: [REEL LARGO / VIDEO YOUTUBE / ARTÍCULO / PODCAST / LIVE]\n\nDesarrollá el contenido pilar completo:\n1. TÍTULO: irresistible para quien tiene el problema.\n2. ESTRUCTURA COMPLETA: narración de principio a fin.\n3. GANCHO DE APERTURA: los primeros 10 segundos o primeras 2 oraciones.\n4. LOS 3 PUNTOS CLAVE que cada persona se lleva al terminar.\n5. LA HISTORIA PERSONAL que valida los puntos.\n6. EL CIERRE: cómo terminar generando acción.\n7. CÓMO REPURPOSEAR en: 5 posts + 3 stories + 1 email + 1 reel de 30 seg.\n8. PARÁMETRO DE ÉXITO: cómo medir si cumplió su objetivo.”,
},
],
metrics:[“Menciones espontáneas de la marca por semana”, “Invitaciones a podcasts/eventos por mes”, “Seguidores nuevos orgánicos por semana”],
},
{
id:“p9”, n:9, icon:“🌐”, color:C.teal, bg:C.tealBg,
title:“Comunidad y Ecosistema”,
sub:“Construís un activo que crece solo porque la gente se queda por las personas.”,
duration:“Mes 3–6”, kpi:“Comunidad activa con efecto red”,
desc:“Una comunidad bien construida es el activo más defensible en el mundo digital. Las plataformas cambian, los algoritmos cambian, los competidores aparecen — pero una comunidad con identidad, líderes internos y cultura propia es casi imposible de replicar.”,
principles:[
“La comunidad no es un grupo de WhatsApp. Es una identidad compartida con nombre, valores, lenguaje y rituales propios.”,
“El churn de membresía baja drásticamente cuando los miembros forman relaciones entre sí, no solo con vos.”,
“Los embajadores son los miembros que ya hablan de vos sin que se los pidas. Identificarlos y empoderarlos vale más que cualquier programa de afiliados.”,
“Un evento virtual bien ejecutado puede triplicar el tamaño de tu comunidad en 72 horas.”,
],
prompts:[
{
title:“Estructura y Cultura de Comunidad”,
text:“Quiero lanzar mi comunidad para alumnos de [PRODUCTO/PROGRAMA].\nPlataforma: [CIRCLE / SLACK / TELEGRAM / DISCORD / HOTMART CLUB]\nPrecio de membresía: $[PRECIO]/mes\n\nDiseñame la estructura completa:\n1. NOMBRE Y TAGLINE (que genere pertenencia e identidad).\n2. VALORES DECLARADOS (3–5 que definen la cultura).\n3. CANALES/ESPACIOS: cómo organizar los temas (máx 8 espacios).\n4. RITUALES: actividades semanales/mensuales que generan hábito.\n5. ONBOARDING: los primeros 7 días de un nuevo miembro.\n6. RECONOCIMIENTO: cómo celebrar los logros públicamente.\n7. MODERACIÓN: cómo mantener la calidad cuando crece.\n8. ESCALA: cómo identificar y empoderar líderes internos.”,
},
{
title:“Evento Virtual de Crecimiento”,
text:“Quiero lanzar un evento virtual para crecer mi comunidad y generar leads calificados.\nTipo: [CHALLENGE 5 DÍAS / MASTERCLASS GRATUITA / SUMMIT / WORKSHOP]\nTema: [TEMA QUE RESUELVE EL DOLOR PRINCIPAL DE MI CLIENTE]\nFecha: [FECHA]\n\nDame el plan completo:\n1. NOMBRE DEL EVENTO: con resultado específico en el título.\n2. ESTRUCTURA DÍA A DÍA o AGENDA.\n3. PÁGINA DE REGISTRO: headline + promesa + beneficios + formulario.\n4. SECUENCIA PRE-EVENTO (5 emails): para maximizar el show-up rate.\n5. CÓMO MONETIZARLO: dónde y cómo presentar la oferta de pago.\n6. SEGUIMIENTO POST-EVENTO para asistentes y no asistentes.\n7. MÉTRICAS DE ÉXITO del evento.\n8. CÓMO REPROGRAMARLO como evento evergreen.”,
},
{
title:“Programa de Embajadores”,
text:“Tengo una comunidad/base de clientes de [NÚMERO] personas.\nQuiero crear un programa de embajadores.\n\n1. CRITERIOS: qué señales indican que alguien es un embajador natural.\n2. ESTRUCTURA DEL PROGRAMA:\n — Nombre del programa (exclusivo, aspiracional)\n — Beneficios para los embajadores\n — Compromisos que se les pide\n3. PROCESO DE INVITACIÓN: el mensaje personal para invitarlos.\n4. ACTIVACIÓN: cómo involucrarlos en el primer mes.\n5. RECONOCIMIENTO PÚBLICO frente a la comunidad.\n6. IMPACTO ESTIMADO: con 10 embajadores activos que traen 3 leads/mes.”,
},
],
metrics:[“Participación semanal mayor a 20% de miembros”, “NPS de la comunidad mayor a 60”, “Nuevos miembros por referidos mayor a 30%”],
},
{
id:“p10”, n:10, icon:“📊”, color:C.brown, bg:C.brownBg,
title:“Business Intelligence”,
sub:“Tomás decisiones con datos, no con intuición ni con miedo.”,
duration:“Proceso continuo”, kpi:“Dashboard activo con decisiones semanales”,
desc:“El 90% de los infoproductores toman decisiones de marketing basándose en sensaciones. El 10% que domina los datos toma el 90% del mercado. Esta fase te convierte en el segundo grupo sin necesidad de ser analista de datos.”,
principles:[
“Una sola métrica mejorada por semana es más poderosa que cambiar todo el funnel mensualmente.”,
“El A/B testing no es para grandes empresas. Es para cualquiera que quiera saber qué funciona antes de apostar más.”,
“El análisis de cohortes revela los patrones de oro de tu negocio: quiénes compran, cuándo, de dónde vienen.”,
“Si no podés medir el impacto de una acción, todavía no sabés si vale la pena repetirla.”,
],
prompts:[
{
title:“Dashboard de KPIs del Negocio”,
text:“Actúa como analista de negocios digitales. Quiero construir mi dashboard de métricas.\n\nMi negocio tiene: [FUENTES DE INGRESOS]\nCanales de captación: [LISTA]\nHerramientas: [MAILERLITE / HOTMART / META ADS / etc.]\n\nDame:\n1. LAS 15 MÉTRICAS ESENCIALES a rastrear semanalmente (con fórmula y benchmarks del sector).\n2. DASHBOARD en Google Sheets: qué columnas, qué actualizar, qué revisar mensualmente.\n3. LAS 3 MÉTRICAS NORTE que, si mejoran, mejoran todo lo demás.\n4. SEÑALES DE ALERTA: qué número indica que algo está roto urgentemente.\n5. RUTINA SEMANAL DE ANÁLISIS: qué revisar los lunes y qué decisión tomar según cada escenario.”,
},
{
title:“Plan de A/B Testing Sistemático”,
text:“Quiero implementar A/B testing para optimizar con datos.\nElementos a testear: [ASUNTOS EMAIL / HEADLINES / COPY ADS / PRECIOS / CTAs]\n\nDame el sistema completo:\n1. PRIORIZACIÓN: qué testear primero según impacto vs. facilidad.\n2. PROTOCOLO POR ELEMENTO:\n — Email: cómo testear asuntos (tamaño mínimo de lista, duración, cuándo declarar ganador)\n — Landing: cómo testear headlines sin herramientas caras\n — Ads: estructura de campaign test en Meta\n3. CÓMO SABER si el resultado es estadísticamente válido.\n4. PLANTILLA para trackear tests, resultados y aprendizajes.\n5. CADENCIA: con qué frecuencia lanzar tests para datos limpios.\n6. LOS 5 TESTS CON MAYOR ROI para empezar en mi negocio.”,
},
{
title:“Análisis Post-Lanzamiento Profundo”,
text:“Acabo de cerrar un lanzamiento. Analizá estos datos:\n\nLeads captados: [X] | Emails en lista: [X]\nTasa apertura promedio: [X%] | Tasa click: [X%]\nVisitas landing de ventas: [X] | Ventas totales: [X]\nIngresos brutos: $[X] | Order bumps: [X] | Upsells: [X] | Reembolsos: [X]\nFuente principal: [ORGÁNICO / ADS / REFERIDOS]\n\nAnalizá:\n1. Diagnóstico de cada etapa del funnel (dónde se perdió el mayor % de personas).\n2. Las 3 palancas con mayor impacto para el próximo lanzamiento.\n3. Benchmarks del sector vs. mis números.\n4. Proyección concreta si mejoro X, Y, Z.\n5. Las 3 acciones específicas para capturar valor residual esta semana.”,
},
],
metrics:[“Reunión de métricas semanal de 30 min”, “1 A/B test activo por semana”, “Dashboard actualizado cada lunes”],
},
{
id:“p11”, n:11, icon:“🌎”, color:C.blue, bg:C.blueBg,
title:“Expansión LATAM e Internacional”,
sub:“Tu método no tiene por qué quedarse en un solo mercado.”,
duration:“Mes 6–12”, kpi:“2 o más mercados activos”,
desc:“El mercado hispanohablante tiene 500+ millones de personas. Si tu negocio solo está optimizado para un país, estás ignorando el 80% de tu mercado natural. La expansión regional no requiere reinventar — requiere adaptar estratégicamente.”,
principles:[
“Cada mercado LATAM tiene su código cultural específico. El mismo mensaje vende diferente en Argentina que en México o Colombia.”,
“El pricing debe ajustarse al poder adquisitivo local pero también al costo percibido de la solución.”,
“Los partnerships con creadores locales son el atajo más eficiente para entrar a un nuevo mercado.”,
“Hotmart te da acceso nativo a Brasil, México, Colombia y toda LATAM sin infraestructura adicional.”,
],
prompts:[
{
title:“Estrategia de Entrada a Nuevo Mercado”,
text:“Quiero expandir mi negocio al mercado de [PAÍS: MÉXICO / COLOMBIA / CHILE / PERÚ / BRASIL].\nMi producto: [NOMBRE] a $[PRECIO] | Mi mercado actual: [PAÍS]\n\nDame la estrategia de entrada completa:\n1. Características culturales que afectan el mensaje de venta en ese país.\n2. Qué cambiar en mi landing page para que suene local.\n3. Precio recomendado en moneda local y USD.\n4. Canales que dominan en ese mercado.\n5. Tipo de creador/influencer con quien colaborar y cómo encontrarlo.\n6. Cómo testear el mercado nuevo con inversión mínima.\n7. Cómo configurar el producto en Hotmart para ese mercado.\n8. Plan concreto para las primeras ventas en ese país.”,
},
{
title:“Adaptación Cultural del Marketing”,
text:“Tengo este copy que funciona en [PAÍS ORIGEN]:\n[INSERTAR COPY ORIGINAL]\n\nAdaptalo para [PAÍS DESTINO] considerando:\n1. Vocabulario y expresiones locales (palabras que usan, palabras que NO usan).\n2. Referencias culturales que resuenen.\n3. Nivel de formalidad adecuado.\n4. Tono predominante en ese mercado.\n5. La objeción específica más común en ese mercado para mi tipo de producto.\n6. Cómo terminar el mensaje/CTA de la forma que más convierte localmente.\n\nDame la versión adaptada completa, no solo recomendaciones.”,
},
{
title:“Plan de Partnerships Regionales”,
text:“Quiero construir partnerships estratégicos en LATAM para distribuir [PRODUCTO].\n\n1. TIPOS DE PARTNER: quién tiene mi audiencia ideal en LATAM.\n2. MODELOS DE PARTNERSHIP: afiliado / co-creador / distribución B2B — cuándo usar cada uno.\n3. CÓMO ENCONTRARLOS: metodología para identificar los 10 mejores partners potenciales por país.\n4. CÓMO ACERCARSE: el primer mensaje personalizado que genera conversación.\n5. LA PROPUESTA: qué ofrecerle a cada tipo de partner.\n6. TÉRMINOS BÁSICOS que deben quedar claros antes de empezar.\n7. GESTIÓN: cómo mantener activos a los partners sin consumir todo tu tiempo.”,
},
],
metrics:[“Ventas fuera del mercado principal mayor a 20%”, “Partners activos en al menos 2 países”, “Copy adaptado para 3 mercados”],
},
{
id:“p12”, n:12, icon:“🏆”, color:C.navy, bg:C.navyBg,
title:“Activos Digitales y Legado”,
sub:“Construís un negocio que vale sin vos presente y puede crecer infinitamente.”,
duration:“Mes 12 en adelante”, kpi:“Negocio escalable e independiente”,
desc:“La diferencia entre un trabajo y un activo es que el activo funciona cuando no estás. Esta fase transforma tu infoproducto en un negocio que puede ser licenciado, vendido, o que puede crecer con formadores certificados sin que vos pongas el 100% del tiempo.”,
principles:[
“Un método bien documentado puede ser licenciado, enseñado por otros, o vendido como franquicia digital.”,
“Las certificaciones crean un ejército de distribuidores que pagan por el privilegio de difundir tu método.”,
“El contenido evergreen que creaste hace 3 años sigue generando ingresos hoy. Eso es un activo real.”,
“La valoración de un negocio digital se basa en ingresos recurrentes, no en ingresos de lanzamiento.”,
],
prompts:[
{
title:“Modelo de Certificación y Licenciamiento”,
text:“Tengo un método propio llamado [NOMBRE] que enseño en [PRODUCTO].\nResultados comprobables: [DATOS]\n\nDiseñame la estructura de certificación completa:\n1. NOMBRE del programa (aspiracional, genera deseo de tener esa credencial).\n2. REQUERIMIENTOS DE INGRESO.\n3. ESTRUCTURA DEL PROGRAMA: módulos, duración, formato.\n4. PROCESO DE EVALUACIÓN: cómo se certifica que alguien puede enseñar el método.\n5. PRECIO recomendado en LATAM.\n6. DERECHOS Y OBLIGACIONES del certificado.\n7. MODELO DE INGRESOS: precio único / membresía / royalty / todo.\n8. COMUNIDAD DE CERTIFICADOS como activo adicional.”,
},
{
title:“Valoración y Estrategia de Salida”,
text:“Tengo un negocio de infoproductos:\nIngresos mensuales: $[X] (lanzamientos $X + recurrente $X + high ticket $X)\nBase de clientes: [X] compradores | Lista de email: [X] | Audiencia en redes: [X]\nAntigüedad: [X] años | Automatizaciones: [DESCRIPCIÓN]\n\nAnalizá:\n1. VALORACIÓN ESTIMADA: rango de múltiplos para este tipo de negocio digital.\n2. QUÉ AUMENTA EL VALOR: los 5 factores que más impactan en el precio de venta.\n3. QUÉ REDUCE EL VALOR: riesgos que los compradores identificarían y cómo mitigarlos.\n4. DOCUMENTACIÓN NECESARIA para preparar la empresa para una venta.\n5. PLATAFORMAS DE VENTA: dónde se venden negocios digitales de este tipo.\n6. ESTRATEGIA ALTERNATIVA: cómo estructurar para que funcione con mínimo de mi tiempo.”,
},
{
title:“Construcción de IP (Propiedad Intelectual)”,
text:“Quiero documentar y proteger la propiedad intelectual de mi método.\nNombre del método: [NOMBRE] | Concepto central: [DESCRIPCIÓN]\n\nEstrategia completa de construcción de IP:\n1. DOCUMENTACIÓN: cómo escribir el manual definitivo que nadie más puede replicar.\n2. ELEMENTOS ÚNICOS: los componentes genuinamente originales y protegibles.\n3. NAMING DEL SISTEMA: cómo crear nombres propios para pasos y conceptos (que se vuelvan propios del lenguaje del nicho).\n4. MARCA REGISTRADA: proceso básico en Argentina y LATAM.\n5. CONTENIDO EVERGREEN: las 5 piezas que más contribuyen al reconocimiento del método.\n6. CITAS Y REFERENCIAS: cómo lograr que otros en el sector citen tu método.”,
},
],
metrics:[“Ingresos recurrentes mayor a 50% del total”, “Certificados activos mayor a 10”, “Negocio funciona en 20hs o menos por semana”],
},
];

const PRICING = [
{
id:“starter”, name:“Sistema Digital”, price:”$97”, badge:“Más Popular”, badgeColor:C.gold, color:C.gold, bg:C.goldBg,
tagline:“El sistema completo para arrancar y vender.”,
forWho:“Profesionales que están empezando o que tienen un producto pero no están vendiendo.”,
includes:[“12 fases completas (acceso de por vida)”,“36+ prompts listos para Claude”,“Calculadora de proyección de lanzamiento”,“Hoja de ruta personalizada según tu etapa”,“Kit gratuito de inicio incluido”,“Actualizaciones por 12 meses”],
notIncludes:[“Sesiones en vivo”,“Comunidad privada”,“Soporte directo”],
strategy:“Funnel evergreen + lanzamiento orgánico”,
channels:“Instagram → Lead Magnet Gratis → Secuencia 5 emails → Oferta $97”,
urgency:“Precio sube a $147 después del lanzamiento”,
script:“Acabo de lanzar el Sistema Persaltum Digital — el mapa completo para que cualquier profesional con conocimiento pueda vender online con IA. Son 12 fases, 36+ prompts de Claude listos para usar, y una hoja de ruta personalizada según en qué etapa estás. Por el lanzamiento, está a $97 en lugar de $147. Cierra el [FECHA]. ¿Te mando el link?”,
projection:“20 ventas = $1.940 | 50 ventas = $4.850 | 100 ventas = $9.700”,
},
{
id:“pro”, name:“Sistema Pro”, price:”$297”, badge:“Mayor Valor”, badgeColor:C.green, color:C.green, bg:C.greenBg,
tagline:“El sistema + comunidad activa + implementación grupal.”,
forWho:“Profesionales que ya tienen algo, quieren acelerar, y valoran la implementación acompañada.”,
includes:[“Todo lo del Sistema Digital”,“Comunidad privada (Circle / plataforma)”,“2 sesiones grupales en vivo por mes (Zoom, 90 min)”,“Grabaciones de todas las sesiones anteriores”,“Revisión de landing page (1 vez por alumno)”,“Soporte por email con respuesta en 48hs”,“Actualizaciones por 24 meses”],
notIncludes:[“Sesiones 1:1”,“WhatsApp directo”],
strategy:“Webinar de lanzamiento + lista caliente”,
channels:“Email lista caliente → Webinar gratuito → Pitch al final del webinar”,
urgency:“Cupos limitados a 50 alumnos por cohorte. Una vez lleno, lista de espera.”,
script:“Este mes abro una nueva cohorte del Sistema Pro — donde además del sistema completo, tenemos sesiones en vivo grupales dos veces por mes para implementar en tiempo real. Los cupos son 50 por cohorte para que el acompañamiento sea real. Está a $297. ¿Querés que te reserve un lugar?”,
projection:“20 ventas = $5.940 | 40 ventas = $11.880 | 50 ventas = $14.850”,
},
{
id:“elite”, name:“Sistema Elite”, price:”$697”, badge:“High-Ticket”, badgeColor:C.purple, color:C.purple, bg:C.purpleBg,
tagline:“Implementación guiada 1:1 + resultados garantizados.”,
forWho:“Profesionales que quieren resultados en el menor tiempo posible y valoran el acceso directo.”,
includes:[“Todo lo del Sistema Pro”,“2 sesiones 1:1 por mes (45 min cada una)”,“Revisión completa de funnel + landing + emails”,“Soporte directo por WhatsApp (respuesta en 24hs hábiles)”,“Plan de lanzamiento personalizado para tu producto”,“Acceso de por vida + todas las actualizaciones futuras”],
notIncludes:[],
strategy:“Aplicación + llamada de ventas (no landing pública)”,
channels:“Instagram DM / WhatsApp → Formulario aplicación → Llamada 30 min → Cierre”,
urgency:“Máximo 10 alumnos Elite simultáneos para mantener la calidad del 1:1.”,
script:“Tengo disponibilidad para 3 nuevos alumnos Elite este mes — sesiones personales 1:1 + soporte directo + revisión de todo tu funnel. Para ver si es el fit correcto, te mando el formulario de aplicación de 5 minutos. ¿Te parece?”,
projection:“5 alumnos = $3.485 | 10 alumnos = $6.970 | 15 alumnos = $10.455”,
},
];

const CHECKLIST = [
{w:1,d:“Día 1–2”,t:“Definir cliente ideal y propuesta de valor con Claude (Fase 1)”},
{w:1,d:“Día 3–4”,t:“Crear lead magnet en Claude + configurar landing de captura en MailerLite”},
{w:1,d:“Día 5–7”,t:“Escribir secuencia de 5 emails de bienvenida con Claude (Fase 2)”},
{w:2,d:“Día 8–9”,t:“Estructurar el índice del producto con Claude (Fase 1 · Prompt 3)”},
{w:2,d:“Día 10–11”,t:“Publicar 3 posts orgánicos sobre el problema (sin vender)”},
{w:2,d:“Día 12–14”,t:“DM personal a 20 contactos cálidos anunciando que viene algo”},
{w:3,d:“Día 15–16”,t:“Escribir la landing page con Claude (Fase 3 · Prompt 1)”},
{w:3,d:“Día 17”,t:“Configurar producto en Hotmart con precio + order bump”},
{w:3,d:“Día 18–20”,t:“3 posts de calentamiento + stories de anticipación”},
{w:3,d:“Día 21”,t:“Anuncio oficial del lanzamiento (email + post + stories)”},
{w:4,d:“Día 22 — APERTURA”,t:“Carrito abierto: email + post + 5 stories + WhatsApp broadcast”},
{w:4,d:“Día 23–24”,t:“Contenido de objeciones + FAQ + respuesta manual a DMs”},
{w:4,d:“Día 25–26”,t:“Testimonios + prueba social + email de mitad de lanzamiento”},
{w:4,d:“Día 27–28 — CIERRE”,t:“Last call: email + post urgencia + stories countdown + WhatsApp final”},
];

const KIT_PROMPTS = [
{n:“01”,title:“Define tu cliente ideal”,text:“Basándote en mi expertise en [TEMA], describí mi cliente ideal con máxima especificidad:\n— Demografía: edad, profesión, situación actual\n— Psicografía: qué piensa antes de dormirse, qué lo frustra, qué desea\n— Objeción #1 antes de comprar cualquier producto en mi nicho\n— La frase exacta que diría para describir su propio problema\n— La frase exacta que diría para describir su resultado deseado\nSé específico. Si la respuesta aplica a ‘cualquier persona’, es muy vaga.”},
{n:“02”,title:“Propuesta de valor en una oración”,text:“Tengo este producto: [DESCRIPCIÓN]\nCliente: [CLIENTE IDEAL]\n\nEscribí MI propuesta de valor en UNA ORACIÓN de máximo 20 palabras que incluya:\n— A quién ayudo (específico)\n— Qué resultado obtenemos (medible)\n— El diferenciador único (por qué yo y no otro)\n\nDame 5 variantes de la más directa a la más aspiracional.”},
{n:“03”,title:“5 hooks que paran el scroll”,text:”[BRAND BRIEF]\nTema del post: [TEMA CONCRETO]\n\nEscribí 5 primeras líneas para Instagram que paren el scroll.\nCada hook debe:\n— Crear curiosidad O generar identificación inmediata\n— Tener máximo 12 palabras\n— No empezar con ‘¿Alguna vez…?’ ni con ‘La verdad es que…’\n— No usar emojis al inicio\nClasificalos del más agresivo al más sutil.”},
{n:“04”,title:“Email de ventas de 300 palabras”,text:”[BRAND BRIEF]\nProducto: [NOMBRE] a $[PRECIO]\n\nEscribí un email de venta de exactamente 300 palabras que:\n— Abra con el dolor más agudo del cliente (no con el producto)\n— Agite el problema en el párrafo 2\n— Presente la solución en el párrafo 3 (sin listar todo lo que incluye)\n— Cierre con CTA directo y razón para actuar hoy\n— Tenga P.D. que funciona como segundo CTA\nTono: conversacional, directo, sin exageraciones.”},
{n:“05”,title:“Story de Instagram que vende”,text:”[BRAND BRIEF]\nObjetivo: generar interés en [PRODUCTO] sin mencionar el precio directamente.\n\n5 stories de Instagram:\nStory 1: Pregunta provocadora o dato impactante.\nStory 2: El antes (situación que tiene el cliente ahora).\nStory 3: El insight (el giro mental que cambia la perspectiva).\nStory 4: El después (estado deseado, sin prometer milagros).\nStory 5: CTA suave (‘Si querés saber más, respondé este mensaje’).\nPara cada story: texto + qué mostrar visualmente.”},
{n:“06”,title:“Respuesta a ‘es muy caro’”,text:“Vendo [PRODUCTO] a $[PRECIO] y el prospecto dice: ‘Está muy caro para mí ahora’.\n\nEscribí 3 respuestas distintas:\nRespuesta A: Reencuadre del valor (comparar el precio con el costo del problema).\nRespuesta B: Reducción del riesgo (garantía + cuotas si aplica).\nRespuesta C: Pregunta clarificadora (descubrir si es precio o prioridad).\nCada respuesta en máximo 4 oraciones. Tono: empático, nunca defensivo.”},
{n:“07”,title:“Análisis de competidores”,text:“Soy [DESCRIPCIÓN]. Vendo [PRODUCTO] a [CLIENTE IDEAL].\nMis 3 competidores directos: [NOMBRES O DESCRIPCIONES]\n\nAnalizá con honestidad:\n1. Qué hace bien cada competidor (que yo podría aprender).\n2. Qué le falta a cada competidor (gap que yo puedo llenar).\n3. Cómo se diferencian entre ellos y cómo se parecen.\n4. El posicionamiento único que queda disponible para mí.\n5. Una frase de posicionamiento que me ubique en ese espacio vacío.”},
{n:“08”,title:“Plan de contenido urgente (7 días)”,text:”[BRAND BRIEF]\nObjetivo de la semana: [GENERAR LEADS / LANZAR ALGO / MANTENER PRESENCIA]\n\nPlan de contenido completo para los próximos 7 días:\n3 posts de feed + 5 stories + 3 reels de 30–60 segundos.\nPara cada pieza: tema, hook, 3 bullets de contenido, CTA.\nPrioridad: que sea publicable HOY, no perfecto.”},
{n:“09”,title:“Testimonio que convierte”,text:“Tengo este feedback de un cliente: [FEEDBACK EN BRUTO]\n\nTransformalo en un testimonio estructurado:\n1. SITUACIÓN ANTES: cómo estaba el cliente (con emoción, no solo datos).\n2. EL PROCESO: qué hizo exactamente con el producto.\n3. RESULTADO CONCRETO: el después con números o cambios medibles.\n4. POR QUÉ LO RECOMENDARÍA: la razón genuina.\nFormato: párrafo de 100–120 palabras. Que suene a persona real.”},
{n:“10”,title:“Primera llamada de ventas”,text:“Tengo que hacer mi primera llamada para vender [PRODUCTO] a $[PRECIO].\nEl prospecto llegó porque [CONTEXTO].\n\nGuión completo de 30 minutos:\n0–3 min: Apertura (rapport en 3 primeras oraciones).\n3–12 min: Diagnóstico (las 5 preguntas que revelan si es un buen fit).\n12–17 min: Visión (mostrarle el futuro posible con tu producto).\n17–22 min: Presentación de la oferta.\n22–27 min: Manejo de las 3 objeciones más frecuentes.\n27–30 min: Cierre (pedir una decisión directamente sin presión).\nTono: conversación entre iguales, no vendedor.”},
];

// ─── SMALL COMPONENTS ─────────────────────────────────
function Tag({ children, color }) {
return (
<span style={{
display:“inline-block”,
background: color + “1a”,
color: color,
border: “1px solid “ + color + “40”,
borderRadius:4,
padding:“2px 8px”,
fontSize:10,
fontWeight:700,
letterSpacing:“0.7px”,
textTransform:“uppercase”,
fontFamily:“system-ui,sans-serif”,
}}>
{children}
</span>
);
}

function Card({ children, borderColor, bgColor, style }) {
return (
<div style={{
background: bgColor || C.card,
border: “1px solid “ + (borderColor || C.border),
borderRadius:12,
padding:16,
marginBottom:12,
…(style || {}),
}}>
{children}
</div>
);
}

function Divider() {
return <div style={{height:1, background:C.border, margin:“12px 0”}} />;
}

function CopyBtn({ text }) {
const [done, setDone] = useState(false);
function handleClick() {
if (navigator && navigator.clipboard) {
navigator.clipboard.writeText(text).then(function() {
setDone(true);
setTimeout(function(){ setDone(false); }, 1800);
});
}
}
return (
<button
onClick={handleClick}
style={{
background: done ? C.green : C.dark,
color:”#fff”,
border:“none”,
borderRadius:6,
padding:“5px 12px”,
fontSize:10,
fontWeight:700,
cursor:“pointer”,
fontFamily:“system-ui,sans-serif”,
}}
>
{done ? “✓ Copiado” : “Copiar”}
</button>
);
}

// ─── PROMPT CARD ─────────────────────────────────────
function PromptCard({ pr, color, index }) {
const [open, setOpen] = useState(index === 0);
return (
<div style={{
marginBottom:10,
border: “1px solid “ + (open ? color : C.border),
borderRadius:10,
overflow:“hidden”,
}}>
<div
onClick={function(){ setOpen(!open); }}
style={{
display:“flex”,
justifyContent:“space-between”,
alignItems:“center”,
padding:“12px 14px”,
background: open ? color + “12” : C.alt,
cursor:“pointer”,
}}
>
<div style={{display:“flex”, gap:10, alignItems:“center”}}>
<div style={{
width:26, height:26, borderRadius:6,
background:color, color:”#fff”,
display:“flex”, alignItems:“center”, justifyContent:“center”,
fontSize:11, fontWeight:800, flexShrink:0,
fontFamily:“system-ui,sans-serif”,
}}>
{index + 1}
</div>
<div>
<div style={{fontSize:10, color:color, fontWeight:700, fontFamily:“system-ui,sans-serif”, letterSpacing:“0.8px”, textTransform:“uppercase”}}>Prompt {index + 1}</div>
<div style={{fontSize:13, fontWeight:700, color:C.ink, fontFamily:“system-ui,sans-serif”}}>{pr.title}</div>
</div>
</div>
<div style={{
fontSize:18, color:color,
transform: open ? “rotate(90deg)” : “rotate(0deg)”,
transition:“transform .2s”,
fontFamily:“system-ui,sans-serif”,
}}>
{”›”}
</div>
</div>
{open && (
<div style={{padding:“0 14px 14px”}}>
<div style={{display:“flex”, justifyContent:“space-between”, alignItems:“center”, padding:“10px 0 8px”}}>
<div style={{fontSize:11, color:C.muted, fontFamily:“system-ui,sans-serif”}}>
Reemplazá los <strong>[CORCHETES]</strong> con tu info
</div>
<CopyBtn text={pr.text} />
</div>
<div style={{background:”#111”, borderRadius:8, padding:14, border:“1px solid #333”}}>
<pre style={{
margin:0, fontSize:11, lineHeight:1.9,
color:”#c8f0b8”,
whiteSpace:“pre-wrap”, wordBreak:“break-word”,
fontFamily:”‘Courier New’, monospace”,
}}>
{pr.text}
</pre>
</div>
</div>
)}
</div>
);
}

// ─── SECTION: SISTEMA ────────────────────────────────
function SistemaSection() {
const [activeId, setActiveId] = useState(“p1”);
const [activeTab, setActiveTab] = useState(“desc”);

var phase = PHASES.find(function(p){ return p.id === activeId; }) || PHASES[0];

var tabs = [
{id:“desc”, label:“📖 Descripción”},
{id:“prin”, label:“💡 Principios”},
{id:“prom”, label:“📋 Prompts”},
{id:“met”, label:“✓ Métricas”},
];

function goNext() {
if (phase.n < 12) {
setActiveId(“p” + (phase.n + 1));
setActiveTab(“desc”);
}
}

function goPrev() {
if (phase.n > 1) {
setActiveId(“p” + (phase.n - 1));
setActiveTab(“desc”);
}
}

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>12 Fases · 4 Bloques Estratégicos</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
El Sistema Completo de <span style={{color:C.gold}}>Ventas Escalable</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
Tocá cualquier fase para ver su contenido completo: descripción, principios clave, prompts listos para Claude y métricas de éxito.
</p>
</div>

```
<div style={{
display:"grid", gridTemplateColumns:"repeat(4,1fr)",
background:C.alt, borderRadius:12, overflow:"hidden",
border:"1px solid " + C.border, marginBottom:18,
}}>
{[
{v:"12", l:"Fases"},
{v:"36+", l:"Prompts"},
{v:"4", l:"Bloques"},
{v:"∞", l:"Nichos"},
].map(function(s, i) {
return (
<div key={i} style={{
padding:"12px 8px", textAlign:"center",
borderRight: i < 3 ? "1px solid " + C.border : "none",
}}>
<div style={{fontSize:22, fontWeight:900, color:C.gold, fontFamily:"system-ui,sans-serif", lineHeight:1}}>{s.v}</div>
<div style={{fontSize:10, color:C.muted, fontFamily:"system-ui,sans-serif", marginTop:3}}>{s.l}</div>
</div>
);
})}
</div>

<div style={{fontSize:10, fontWeight:800, color:C.muted, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:8}}>
SELECCIONÁ UNA FASE
</div>
<div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6, marginBottom:14}}>
{PHASES.map(function(p) {
var active = activeId === p.id;
return (
<button
key={p.id}
onClick={function(){ setActiveId(p.id); setActiveTab("desc"); }}
style={{
background: active ? p.color : C.card,
border: "2px solid " + (active ? p.color : C.border),
borderRadius:10, padding:"10px 6px",
cursor:"pointer", textAlign:"center",
transition:"all .15s",
}}
>
<div style={{fontSize:16, marginBottom:2}}>{p.icon}</div>
<div style={{fontSize:9, fontWeight:800, letterSpacing:"0.8px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", color: active ? "rgba(255,255,255,0.75)" : C.muted, marginBottom:2}}>
F{p.n}
</div>
<div style={{fontSize:10, fontWeight:700, fontFamily:"system-ui,sans-serif", color: active ? "#fff" : C.ink, lineHeight:1.3}}>
{p.title}
</div>
</button>
);
})}
</div>

<div style={{background:C.card, border:"2px solid " + phase.color, borderRadius:14, overflow:"hidden"}}>
<div style={{background:phase.color, padding:"16px 18px"}}>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
<div>
<div style={{fontSize:11, color:"rgba(255,255,255,0.75)", fontWeight:700, letterSpacing:"1px", fontFamily:"system-ui,sans-serif", marginBottom:4}}>
{"FASE " + phase.n + " · " + phase.duration.toUpperCase()}
</div>
<div style={{fontSize:19, fontWeight:900, color:"#fff", fontFamily:"Georgia,serif", lineHeight:1.2, marginBottom:4}}>
{phase.icon + " " + phase.title}
</div>
<div style={{fontSize:12, color:"rgba(255,255,255,0.85)", fontFamily:"system-ui,sans-serif"}}>
{phase.sub}
</div>
</div>
<div style={{background:"rgba(255,255,255,0.2)", borderRadius:8, padding:"6px 10px", textAlign:"center", flexShrink:0, maxWidth:90}}>
<div style={{fontSize:9, color:"rgba(255,255,255,0.7)", fontFamily:"system-ui,sans-serif", fontWeight:700}}>META</div>
<div style={{fontSize:10, color:"#fff", fontFamily:"system-ui,sans-serif", fontWeight:800, lineHeight:1.3, marginTop:2}}>
{phase.kpi}
</div>
</div>
</div>
</div>

<div style={{display:"flex", borderBottom:"1px solid " + C.border, background:C.alt}}>
{tabs.map(function(t) {
var sel = activeTab === t.id;
return (
<button
key={t.id}
onClick={function(){ setActiveTab(t.id); }}
style={{
flex:1, padding:"10px 2px",
background:"none", border:"none",
borderBottom: sel ? "3px solid " + phase.color : "3px solid transparent",
color: sel ? phase.color : C.muted,
fontSize:9, fontWeight: sel ? 800 : 500,
cursor:"pointer", fontFamily:"system-ui,sans-serif",
whiteSpace:"nowrap",
}}
>
{t.label}
</button>
);
})}
</div>

<div style={{padding:"18px 16px"}}>

{activeTab === "desc" && (
<div>
<p style={{margin:"0 0 16px", fontSize:14, lineHeight:1.9, color:C.ink, fontFamily:"system-ui,sans-serif"}}>
{phase.desc}
</p>
<div style={{background:phase.bg, border:"1px solid " + phase.color + "30", borderRadius:10, padding:"12px 14px", marginBottom:14}}>
<div style={{fontSize:10, fontWeight:800, color:phase.color, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:6}}>
QUÉ LOGRÁS EN ESTA FASE
</div>
<div style={{fontSize:15, fontWeight:800, color:C.ink, fontFamily:"system-ui,sans-serif"}}>
{phase.kpi}
</div>
</div>
<div style={{background:C.alt, borderRadius:10, padding:"12px 14px"}}>
<div style={{fontSize:10, fontWeight:800, color:C.muted, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:10}}>
PROMPTS EN ESTA FASE
</div>
{phase.prompts.map(function(pr, i) {
return (
<div key={i} style={{display:"flex", gap:10, marginBottom:10, alignItems:"flex-start"}}>
<div style={{width:24, height:24, borderRadius:"50%", background:phase.color, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:800, flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{i + 1}
</div>
<div>
<div style={{fontSize:13, fontWeight:700, color:C.ink, fontFamily:"system-ui,sans-serif"}}>{pr.title}</div>
<div style={{fontSize:11, color:C.muted, fontFamily:"system-ui,sans-serif", marginTop:2}}>Disponible en pestaña Prompts</div>
</div>
</div>
);
})}
<button
onClick={function(){ setActiveTab("prom"); }}
style={{width:"100%", marginTop:10, padding:"10px", background:phase.color, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"system-ui,sans-serif"}}
>
{"Ver los " + phase.prompts.length + " prompts completos →"}
</button>
</div>
</div>
)}

{activeTab === "prin" && (
<div>
<div style={{fontSize:13, color:C.muted, fontFamily:"system-ui,sans-serif", marginBottom:14, lineHeight:1.7}}>
Los principios son las reglas no negociables de esta fase. Violarlos es el camino más corto al fracaso.
</div>
{phase.principles.map(function(p, i) {
return (
<div key={i} style={{
display:"flex", gap:12, marginBottom:12, padding:"14px",
background: i % 2 === 0 ? phase.bg : C.card,
border: "1px solid " + phase.color + "25",
borderLeft: "4px solid " + phase.color,
borderRadius:10,
}}>
<div style={{width:26, height:26, borderRadius:"50%", background:phase.color, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:900, flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{i + 1}
</div>
<p style={{margin:0, fontSize:13, lineHeight:1.7, color:C.ink, fontFamily:"system-ui,sans-serif"}}>{p}</p>
</div>
);
})}
</div>
)}

{activeTab === "prom" && (
<div>
<div style={{fontSize:13, color:C.muted, fontFamily:"system-ui,sans-serif", marginBottom:14, lineHeight:1.7}}>
<strong style={{color:C.ink}}>Cómo usar:</strong> Copiá el prompt, pegá tu Brand Brief al inicio en Claude, y reemplazá los [CORCHETES] con tu información real.
</div>
{phase.prompts.map(function(pr, j) {
return <PromptCard key={j} pr={pr} color={phase.color} index={j} />;
})}
</div>
)}

{activeTab === "met" && (
<div>
<div style={{fontSize:13, color:C.muted, fontFamily:"system-ui,sans-serif", marginBottom:14, lineHeight:1.7}}>
Estas métricas confirman que completaste la fase exitosamente. Si no las alcanzás, volvé a los prompts.
</div>
{phase.metrics.map(function(m, i) {
return (
<div key={i} style={{display:"flex", gap:12, alignItems:"flex-start", padding:"12px 14px", background:C.card, border:"1px solid " + C.border, borderRadius:10, marginBottom:8}}>
<div style={{width:30, height:30, borderRadius:"50%", background:C.greenBg, border:"2px solid " + C.green, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, flexShrink:0}}>
{"✓"}
</div>
<div>
<div style={{fontSize:13, fontWeight:700, color:C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1.4}}>{m}</div>
<div style={{fontSize:11, color:C.green, fontFamily:"system-ui,sans-serif", marginTop:3, fontWeight:600}}>{"Indicador de éxito — Fase " + phase.n}</div>
</div>
</div>
);
})}
{phase.n < 12 && (
<div style={{background:C.goldBg, border:"1px solid " + C.gold + "40", borderRadius:10, padding:"12px 14px", marginTop:14}}>
<div style={{fontSize:10, fontWeight:800, color:C.goldDark, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:6}}>SIGUIENTE PASO</div>
<p style={{margin:"0 0 10px", fontSize:13, color:C.goldDark, fontFamily:"system-ui,sans-serif", lineHeight:1.6}}>
¿Completaste todas las métricas? Pasá a la siguiente fase.
</p>
<button
onClick={function(){ setActiveId("p" + (phase.n + 1)); setActiveTab("desc"); }}
style={{width:"100%", padding:"10px", background:C.gold, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"system-ui,sans-serif"}}
>
{"Ir a Fase " + (phase.n + 1) + " →"}
</button>
</div>
)}
</div>
)}

</div>
</div>

<div style={{display:"flex", gap:8, marginTop:10}}>
{phase.n > 1 && (
<button onClick={goPrev} style={{flex:1, padding:10, background:C.card, border:"1px solid " + C.border, borderRadius:10, cursor:"pointer", fontFamily:"system-ui,sans-serif", fontSize:12, color:C.muted}}>
{"← Fase " + (phase.n - 1)}
</button>
)}
{phase.n < 12 && (
<button onClick={goNext} style={{flex:1, padding:10, background:phase.color, border:"none", borderRadius:10, cursor:"pointer", fontFamily:"system-ui,sans-serif", fontSize:12, fontWeight:700, color:"#fff"}}>
{"Siguiente: Fase " + (phase.n + 1) + " →"}
</button>
)}
</div>
</div>
```

);
}

// ─── SECTION: PROMPTS LIBRARY ────────────────────────
function PromptsSection() {
var allPrompts = [];
PHASES.forEach(function(p) {
p.prompts.forEach(function(pr) {
allPrompts.push({ title:pr.title, text:pr.text, phaseName:p.title, phaseN:p.n, phaseColor:p.color, phaseId:p.id });
});
});

var [activePhase, setActivePhase] = useState(“all”);
var [search, setSearch] = useState(””);

var filtered = allPrompts.filter(function(p) {
var matchPhase = activePhase === “all” || p.phaseId === activePhase;
var matchSearch = search === “” || p.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
return matchPhase && matchSearch;
});

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>{allPrompts.length + “ Prompts · Listos para usar”}</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
Biblioteca Completa de <span style={{color:C.gold}}>Prompts de Claude</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
Copiá, reemplazá los [CORCHETES] y pegá directamente en Claude. Sin contexto adicional necesario.
</p>
</div>

```
<input
value={search}
onChange={function(e){ setSearch(e.target.value); }}
placeholder="Buscar prompt..."
style={{width:"100%", padding:"10px 12px", borderRadius:8, border:"1px solid " + C.border, fontSize:13, fontFamily:"system-ui,sans-serif", background:C.card, color:C.ink, marginBottom:10, outline:"none", boxSizing:"border-box"}}
/>

<div style={{display:"flex", gap:6, overflowX:"auto", paddingBottom:4, marginBottom:14}}>
<button onClick={function(){ setActivePhase("all"); }} style={{background: activePhase === "all" ? C.gold : C.card, color: activePhase === "all" ? "#fff" : C.muted, border:"1px solid " + (activePhase === "all" ? C.gold : C.border), borderRadius:20, padding:"5px 10px", fontSize:10, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap", flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{"Todos (" + allPrompts.length + ")"}
</button>
{PHASES.map(function(p) {
return (
<button key={p.id} onClick={function(){ setActivePhase(p.id); }} style={{background: activePhase === p.id ? p.color + "20" : C.card, color: activePhase === p.id ? p.color : C.muted, border:"1.5px solid " + (activePhase === p.id ? p.color : C.border), borderRadius:20, padding:"5px 10px", fontSize:10, fontWeight:700, cursor:"pointer", whiteSpace:"nowrap", flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{p.icon + " F" + p.n}
</button>
);
})}
</div>

{filtered.length === 0 && (
<div style={{textAlign:"center", color:C.muted, fontSize:13, padding:30, fontFamily:"system-ui,sans-serif"}}>No se encontraron prompts. Intentá otra búsqueda.</div>
)}
{filtered.map(function(pr, i) {
return (
<Card key={i} borderColor={pr.phaseColor}>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10}}>
<div>
<Tag color={pr.phaseColor}>{"Fase " + pr.phaseN + " · " + pr.phaseName}</Tag>
<div style={{fontSize:14, fontWeight:700, color:C.ink, marginTop:6, fontFamily:"system-ui,sans-serif"}}>{pr.title}</div>
</div>
<CopyBtn text={pr.text} />
</div>
<div style={{background:"#111", borderRadius:8, padding:"12px 14px"}}>
<pre style={{margin:0, fontSize:11, lineHeight:1.8, color:"#b8e8a8", whiteSpace:"pre-wrap", wordBreak:"break-word", fontFamily:"'Courier New',monospace"}}>{pr.text}</pre>
</div>
<div style={{marginTop:8, fontSize:11, color:C.muted, fontStyle:"italic", fontFamily:"system-ui,sans-serif"}}>Reemplazá todos los [CORCHETES] antes de usar.</div>
</Card>
);
})}
</div>
```

);
}

// ─── SECTION: CALCULADORA + MÉTRICAS ─────────────────
function DatosSection() {
var [audience, setAudience] = useState(300);
var [price, setPrice] = useState(97);
var [conv, setConv] = useState(2);
var [bumpRate, setBumpRate] = useState(25);
var [bumpPrice, setBumpPrice] = useState(27);
var [upsellRate, setUpsellRate] = useState(15);
var [upsellPrice, setUpsellPrice] = useState(197);

var coreVentas = Math.round(audience * conv / 100);
var coreIngresos = coreVentas * price;
var bumpIngresos = Math.round(coreVentas * bumpRate / 100) * bumpPrice;
var upsellIngresos = Math.round(coreVentas * upsellRate / 100) * upsellPrice;
var neto = Math.round((coreIngresos + bumpIngresos + upsellIngresos) * 0.9);

var KPIS = [
{g:“Captación”, metric:“Conversión landing captura”, target:“35–55%”, alert:“menos de 15%”, action:“Reescribí el headline. Testea 3 variantes en 48hs.”},
{g:“Captación”, metric:“Costo por lead con ads (CPL)”, target:”$1–5 USD”, alert:“más de $10”, action:“Cambiá el creativo. El copy del ad puede ser lo de menos.”},
{g:“Email”, metric:“Tasa de apertura de emails”, target:“mayor a 28%”, alert:“menor a 15%”, action:“Mejorá asuntos. Verificá que no caigas en spam.”},
{g:“Email”, metric:“Tasa de click en emails”, target:“mayor a 3.5%”, alert:“menor a 1%”, action:“Un solo CTA por email. Si tenés 3 links, la gente no hace click en ninguno.”},
{g:“Conversión”, metric:“Conversión landing de ventas”, target:“2–8%”, alert:“menor a 1%”, action:“Revisá headline, precio percibido y garantía visible.”},
{g:“Conversión”, metric:“Tasa de order bump”, target:“20–35%”, alert:“menor a 10%”, action:“El order bump no resuelve el obstáculo correcto. Cambiá la propuesta.”},
{g:“Conversión”, metric:“Reembolsos”, target:“menor a 4%”, alert:“mayor a 8%”, action:“El producto no cumple la promesa. Revisá la brecha entre lo que prometés y entregás.”},
{g:“Publicidad”, metric:“CTR de anuncios”, target:“mayor a 1.5%”, alert:“menor a 0.5%”, action:“El creativo no para el scroll. Cambiá la imagen/video primero.”},
{g:“Publicidad”, metric:“ROAS funnel completo”, target:“mayor a 3x”, alert:“menor a 1.5x”, action:“El problema no está en el ad, está en la secuencia de emails post-lead.”},
{g:“Retención”, metric:“Apertura emails post-compra”, target:“mayor a 45%”, alert:“menor a 20%”, action:“El email de bienvenida no creó expectativa. Reescribilo.”},
{g:“Retención”, metric:“Tasa de upsell post-compra”, target:“15–25%”, alert:“menor a 8%”, action:“El upsell no es la evolución lógica del core. Cambiá la oferta.”},
{g:“Escalabilidad”, metric:“Ingresos recurrentes / totales”, target:“mayor a 40%”, alert:“menor a 15%”, action:“Dependés demasiado de lanzamientos. Lanzá la membresía o el funnel evergreen.”},
];

var grupos = [];
KPIS.forEach(function(k) {
if (grupos.indexOf(k.g) < 0) grupos.push(k.g);
});

var sliders = [
{label:“Audiencia:”, val:audience, set:setAudience, min:50, max:10000, step:50, display: audience.toLocaleString() + “ personas”},
{label:“Precio:”, val:price, set:setPrice, min:27, max:997, step:10, display:”$” + price + “ USD”},
{label:“Conversión:”, val:conv, set:setConv, min:0.5, max:10, step:0.5, display: conv + “%”},
{label:“Order bump:”, val:bumpRate, set:setBumpRate, min:0, max:60, step:5, display: bumpRate + “% toman el bump a $” + bumpPrice},
{label:“Upsell:”, val:upsellRate, set:setUpsellRate, min:0, max:40, step:5, display: upsellRate + “% toman upsell a $” + upsellPrice},
];

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>Calculadora + 12 KPIs</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
Dashboard de <span style={{color:C.gold}}>Métricas y Proyección</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
Calculá el potencial de tu lanzamiento y monitoreá los KPIs que determinan si tu sistema funciona.
</p>
</div>

```
<Card bgColor={C.goldBg} borderColor={C.gold + "60"}>
<div style={{fontSize:11, fontWeight:800, color:C.goldDark, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:14}}>
🧮 CALCULADORA DE LANZAMIENTO
</div>
{sliders.map(function(s, i) {
return (
<div key={i} style={{marginBottom:12}}>
<div style={{display:"flex", justifyContent:"space-between", marginBottom:4}}>
<div style={{fontSize:11, color:C.goldDark, fontFamily:"system-ui,sans-serif"}}>{s.label}</div>
<div style={{fontSize:11, color:C.goldDark, fontWeight:700, fontFamily:"system-ui,sans-serif"}}>{s.display}</div>
</div>
<input type="range" min={s.min} max={s.max} step={s.step} value={s.val} onChange={function(e){ s.set(Number(e.target.value)); }} style={{width:"100%", accentColor:C.gold}} />
</div>
);
})}
<Divider />
<div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
{[
{label:"Core product", value:"$" + coreIngresos.toLocaleString(), sub: coreVentas + " ventas"},
{label:"Order bumps", value:"$" + bumpIngresos.toLocaleString(), sub: Math.round(coreVentas * bumpRate / 100) + " compras"},
{label:"Upsells", value:"$" + upsellIngresos.toLocaleString(), sub: Math.round(coreVentas * upsellRate / 100) + " compras"},
{label:"NETO EST. (−10% fees)", value:"$" + neto.toLocaleString(), sub:"USD", gold:true},
].map(function(r, i) {
return (
<div key={i} style={{background:C.card, borderRadius:8, padding:"10px 12px", border:"1px solid " + C.border}}>
<div style={{fontSize:10, color:C.muted, fontFamily:"system-ui,sans-serif"}}>{r.label}</div>
<div style={{fontSize:20, fontWeight:900, color: r.gold ? C.gold : C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1.1}}>{r.value}</div>
<div style={{fontSize:10, color:C.muted, fontFamily:"system-ui,sans-serif"}}>{r.sub}</div>
</div>
);
})}
</div>
</Card>

{grupos.map(function(grupo) {
return (
<div key={grupo} style={{marginBottom:16}}>
<div style={{fontSize:11, fontWeight:800, color:C.muted, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:8, paddingLeft:4}}>
{grupo}
</div>
{KPIS.filter(function(k){ return k.g === grupo; }).map(function(m, i) {
return (
<Card key={i} style={{padding:"12px 14px", marginBottom:8}}>
<div style={{fontSize:13, fontWeight:700, color:C.ink, marginBottom:8, fontFamily:"system-ui,sans-serif"}}>{m.metric}</div>
<div style={{display:"flex", gap:8, flexWrap:"wrap", marginBottom:8}}>
<Tag color={C.green}>{"✓ Meta: " + m.target}</Tag>
<Tag color={C.red}>{"⚠ Alerta: " + m.alert}</Tag>
</div>
<div style={{display:"flex", gap:8}}>
<div style={{width:8, height:8, borderRadius:"50%", background:C.gold, flexShrink:0, marginTop:5}} />
<span style={{fontSize:12, color:C.muted, lineHeight:1.6, fontFamily:"system-ui,sans-serif"}}>
<strong style={{color:C.ink}}>Acción: </strong>{m.action}
</span>
</div>
</Card>
);
})}
</div>
);
})}
</div>
```

);
}

// ─── SECTION: PRECIOS ─────────────────────────────────
function PreciosSection() {
var [sel, setSel] = useState(“pro”);
var [showSell, setShowSell] = useState(false);

var tier = PRICING.find(function(p){ return p.id === sel; });

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>3 Opciones · Análisis de Mercado 2026</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
Cómo Empaquetar y <span style={{color:C.gold}}>Cuánto Cobrar</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
Los precios del mercado en 2026 para formación con IA en LATAM van de $47 a $2,000+. El sweet spot para este sistema es $97–$697 dependiendo del acompañamiento.
</p>
</div>

```
<Card bgColor={C.alt}>
<div style={{fontSize:11, fontWeight:800, color:C.gold, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:12}}>
CONTEXTO DE MERCADO · 2026
</div>
{[
{label:"Cursos IA genérica (Udemy/Hotmart)", range:"$12–$97", note:"Alta competencia, bajo valor percibido"},
{label:"Cursos IA para marketing digital", range:"$97–$297", note:"Mercado activo, diferenciación posible"},
{label:"Programas high-ticket con mentoría", range:"$497–$2,000+", note:"Baja competencia, alto valor percibido"},
{label:"Claude + Infoproductos en español", range:"Sin competencia directa", note:"Oportunidad única — sos el primero", highlight:true},
].map(function(r, i) {
return (
<div key={i} style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", padding:"8px 0", borderBottom: i < 3 ? "1px solid " + C.border : "none"}}>
<div>
<div style={{fontSize:12, fontWeight:600, color:C.ink, fontFamily:"system-ui,sans-serif"}}>{r.label}</div>
<div style={{fontSize:11, color:C.muted, fontFamily:"system-ui,sans-serif"}}>{r.note}</div>
</div>
<Tag color={r.highlight ? C.green : C.gold}>{r.range}</Tag>
</div>
);
})}
</Card>

<div style={{display:"flex", flexDirection:"column", gap:10, marginBottom:18}}>
{PRICING.map(function(p) {
var active = sel === p.id;
return (
<div key={p.id} onClick={function(){ setSel(p.id); setShowSell(false); }} style={{background: active ? p.bg : C.card, border:"2px solid " + (active ? p.color : C.border), borderRadius:12, padding:"14px 16px", cursor:"pointer", transition:"all .15s"}}>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
<div>
<Tag color={p.badgeColor}>{p.badge}</Tag>
<div style={{fontSize:17, fontWeight:800, color:C.ink, marginTop:6, fontFamily:"system-ui,sans-serif"}}>{p.name}</div>
<div style={{fontSize:12, color:C.muted, marginTop:2, fontFamily:"system-ui,sans-serif"}}>{p.tagline}</div>
</div>
<div style={{fontSize:28, fontWeight:900, color: active ? p.color : C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1}}>{p.price}</div>
</div>
</div>
);
})}
</div>

{tier && (
<Card borderColor={tier.color} style={{marginBottom:12}}>
<div style={{fontSize:11, fontWeight:800, color:tier.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:10}}>PARA QUIÉN ES</div>
<p style={{margin:"0 0 12px", fontSize:13, lineHeight:1.7, color:C.muted, fontFamily:"system-ui,sans-serif"}}>{tier.forWho}</p>
<Divider />
<div style={{fontSize:11, fontWeight:800, color:tier.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:10}}>QUÉ INCLUYE</div>
{tier.includes.map(function(item, i) {
return (
<div key={i} style={{display:"flex", gap:8, marginBottom:6}}>
<span style={{color:tier.color, flexShrink:0}}>{"✓"}</span>
<span style={{fontSize:13, color:C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1.5}}>{item}</span>
</div>
);
})}
{tier.notIncludes.length > 0 && (
<div>
<Divider />
{tier.notIncludes.map(function(item, i) {
return (
<div key={i} style={{display:"flex", gap:8, marginBottom:6}}>
<span style={{color:C.faint, flexShrink:0}}>{"—"}</span>
<span style={{fontSize:12, color:C.faint, fontFamily:"system-ui,sans-serif"}}>{item}</span>
</div>
);
})}
</div>
)}
<Divider />
<div style={{fontSize:11, fontWeight:800, color:tier.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:6}}>PROYECCIÓN</div>
<div style={{fontSize:13, color:C.ink, fontFamily:"system-ui,sans-serif", background:tier.bg, padding:"10px 12px", borderRadius:8}}>{tier.projection}</div>
</Card>
)}

{tier && (
<button
onClick={function(){ setShowSell(!showSell); }}
style={{width:"100%", padding:14, background:tier.color, color:"#fff", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"system-ui,sans-serif", marginBottom: showSell ? 0 : 16}}
>
{showSell ? "▲ Ocultar estrategia" : ("▼ Cómo vender el " + tier.name)}
</button>
)}

{showSell && tier && (
<Card borderColor={tier.color} style={{borderTopLeftRadius:0, borderTopRightRadius:0, borderTop:"none", marginBottom:16}}>
{[
{label:"Estrategia", value:tier.strategy},
{label:"Flujo de venta", value:tier.channels},
{label:"Urgencia / Escasez", value:tier.urgency},
].map(function(r, i) {
return (
<div key={i} style={{marginBottom:12}}>
<div style={{fontSize:10, fontWeight:800, color:tier.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif"}}>{r.label}</div>
<div style={{fontSize:13, color:C.muted, fontFamily:"system-ui,sans-serif", lineHeight:1.6, marginTop:3}}>{r.value}</div>
</div>
);
})}
<Divider />
<div style={{fontSize:10, fontWeight:800, color:tier.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:6}}>SCRIPT DE PRIMER MENSAJE</div>
<div style={{background:C.alt, borderRadius:8, padding:"12px 14px", fontSize:13, color:C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1.7, fontStyle:"italic", border:"1px solid " + C.border}}>
{tier.script}
</div>
<div style={{marginTop:8, display:"flex", justifyContent:"flex-end"}}>
<CopyBtn text={tier.script} />
</div>
</Card>
)}
</div>
```

);
}

// ─── SECTION: KIT GRATIS ──────────────────────────────
function GratisSection() {
var [tab, setTab] = useState(“prompts”);
var [checked, setChecked] = useState({});
var [openPrompt, setOpenPrompt] = useState(null);

var doneCount = Object.values(checked).filter(Boolean).length;
var pct = Math.round((doneCount / CHECKLIST.length) * 100);

function toggleCheck(id) {
setChecked(function(prev) {
var n = {};
Object.keys(prev).forEach(function(k){ n[k] = prev[k]; });
n[id] = !prev[id];
return n;
});
}

var weeks = [1, 2, 3, 4];

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>Acceso Gratuito · Sin Registro</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
Kit de Inicio <span style={{color:C.gold}}>Persaltum</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
3 herramientas gratuitas para dar los primeros pasos antes de invertir en el sistema completo.
</p>
</div>

```
<Card bgColor={C.goldBg} borderColor={C.gold + "60"} style={{marginBottom:16}}>
<div style={{fontSize:11, fontWeight:800, color:C.goldDark, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:6}}>¿PARA QUÉ SIRVE ESTE KIT?</div>
<p style={{margin:0, fontSize:13, color:C.goldDark, lineHeight:1.7, fontFamily:"system-ui,sans-serif"}}>
Aplicá los 10 prompts y el checklist y tendrás resultados concretos en 30 días. Es la prueba de que el sistema funciona antes de invertir en el acceso completo.
</p>
</Card>

<div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:16}}>
{[{id:"prompts",label:"10 Prompts",icon:"📋"},{id:"check",label:"Checklist 30d",icon:"✅"},{id:"brief",label:"Brand Brief",icon:"🎯"}].map(function(t) {
return (
<button key={t.id} onClick={function(){ setTab(t.id); }} style={{background: tab === t.id ? C.gold : C.card, color: tab === t.id ? "#fff" : C.muted, border:"1.5px solid " + (tab === t.id ? C.gold : C.border), borderRadius:10, padding:"10px 6px", cursor:"pointer", fontSize:11, fontWeight:700, fontFamily:"system-ui,sans-serif", transition:"all .15s"}}>
<div style={{fontSize:18, marginBottom:2}}>{t.icon}</div>
{t.label}
</button>
);
})}
</div>

{tab === "prompts" && (
<div>
<p style={{fontSize:13, color:C.muted, marginBottom:14, fontFamily:"system-ui,sans-serif", lineHeight:1.7}}>Los 10 prompts más importantes para empezar. Copiá, completá los corchetes y usá en Claude.</p>
{KIT_PROMPTS.map(function(pr, i) {
var isOpen = openPrompt === i;
return (
<div key={i} style={{marginBottom:8}}>
<div onClick={function(){ setOpenPrompt(isOpen ? null : i); }} style={{background:C.card, border:"1px solid " + C.border, borderRadius: isOpen ? "10px 10px 0 0" : 10, padding:"12px 14px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
<div>
<span style={{fontSize:10, fontWeight:800, color:C.gold, fontFamily:"system-ui,sans-serif", marginRight:8}}>{pr.n}</span>
<span style={{fontSize:13, fontWeight:600, color:C.ink, fontFamily:"system-ui,sans-serif"}}>{pr.title}</span>
</div>
<span style={{color:C.gold, fontSize:18, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition:"transform .2s"}}>{"›"}</span>
</div>
{isOpen && (
<div style={{background:"#111", borderRadius:"0 0 10px 10px", padding:"12px 14px", border:"1px solid " + C.border, borderTop:"none"}}>
<div style={{display:"flex", justifyContent:"flex-end", marginBottom:8}}>
<CopyBtn text={pr.text} />
</div>
<pre style={{margin:0, fontSize:11, lineHeight:1.8, color:"#b8e8a8", whiteSpace:"pre-wrap", wordBreak:"break-word", fontFamily:"'Courier New',monospace"}}>{pr.text}</pre>
</div>
)}
</div>
);
})}
</div>
)}

{tab === "check" && (
<div>
<Card bgColor={C.alt} style={{marginBottom:16}}>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
<div style={{fontSize:13, fontWeight:700, color:C.ink, fontFamily:"system-ui,sans-serif"}}>{doneCount + "/" + CHECKLIST.length + " tareas completadas"}</div>
<Tag color={C.gold}>{pct + "%"}</Tag>
</div>
<div style={{background:C.border, borderRadius:6, height:8}}>
<div style={{background:"linear-gradient(90deg," + C.gold + "," + C.goldDark + ")", borderRadius:6, height:8, width: pct + "%", transition:"width .3s"}} />
</div>
</Card>
{weeks.map(function(w) {
return (
<div key={w} style={{marginBottom:16}}>
<div style={{fontSize:11, fontWeight:800, color:C.gold, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:8}}>{"SEMANA " + w}</div>
{CHECKLIST.filter(function(c){ return c.w === w; }).map(function(c, i) {
var id = w + "-" + i;
var done = !!checked[id];
return (
<div key={id} onClick={function(){ toggleCheck(id); }} style={{display:"flex", gap:12, padding:"12px 14px", background: done ? C.greenBg : C.card, border:"1px solid " + (done ? C.green + "40" : C.border), borderRadius:10, marginBottom:6, cursor:"pointer", transition:"all .15s"}}>
<div style={{width:22, height:22, borderRadius:6, background: done ? C.green : C.alt, border:"2px solid " + (done ? C.green : C.border), display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, color:"#fff", flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{done ? "✓" : ""}
</div>
<div>
<div style={{fontSize:10, color: done ? C.green : C.gold, fontWeight:800, fontFamily:"system-ui,sans-serif", marginBottom:2}}>{c.d}</div>
<div style={{fontSize:13, color: done ? C.green : C.ink, fontFamily:"system-ui,sans-serif", lineHeight:1.5, textDecoration: done ? "line-through" : "none"}}>{c.t}</div>
</div>
</div>
);
})}
</div>
);
})}
</div>
)}

{tab === "brief" && (
<div>
<p style={{fontSize:13, color:C.muted, marginBottom:14, fontFamily:"system-ui,sans-serif", lineHeight:1.7}}>Completá este Brand Brief y guardalo. Es lo primero que pegás en Claude antes de cualquier sesión de trabajo. Define todo tu negocio en 300 palabras.</p>
{[
{section:"Identidad", fields:["¿Quién soy? (nombre, profesión de origen, años de experiencia)","¿Qué enseño/vendo exactamente? (una oración)","Mi historia de transformación (2–3 oraciones)","¿Por qué soy la persona indicada para enseñar esto?"]},
{section:"Cliente Ideal", fields:["Nombre ficticio y edad:","Profesión o situación:","Mayor frustración con respecto a mi tema:","Lo que intenta antes de encontrarme:","El resultado específico que busca:"]},
{section:"Voz y Tono", fields:["3 adjetivos que describen cómo comunicás:","3 palabras o frases que siempre usás:","3 palabras que nunca usás:","Tu referente de comunicación:"]},
{section:"Productos", fields:["Lead magnet (gratis):","Producto de entrada ($): nombre + precio","Producto core ($): nombre + precio","Upsell ($): nombre + precio"]},
].map(function(s, i) {
return (
<div key={i} style={{marginBottom:14}}>
<div style={{fontSize:11, fontWeight:800, color:C.gold, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:8}}>{s.section}</div>
{s.fields.map(function(f, j) {
return (
<div key={j} style={{marginBottom:8}}>
<div style={{fontSize:11, color:C.muted, fontFamily:"system-ui,sans-serif", marginBottom:4}}>{f}</div>
<div style={{width:"100%", minHeight:32, background:C.card, border:"1px solid " + C.border, borderRadius:6, padding:"6px 10px", fontSize:12, color:C.faint, fontFamily:"system-ui,sans-serif", fontStyle:"italic"}}>Tu respuesta aquí...</div>
</div>
);
})}
</div>
);
})}
<Card bgColor={C.goldBg} borderColor={C.gold + "40"}>
<div style={{fontSize:11, fontWeight:800, color:C.goldDark, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:8}}>PROMPT: GENERÁ TU BRAND BRIEF FINAL</div>
<div style={{background:"#111", borderRadius:8, padding:"12px 14px"}}>
<div style={{display:"flex", justifyContent:"flex-end", marginBottom:6}}>
<CopyBtn text={"Tomá esta información sobre mí y construime un Brand Brief profesional, conciso y poderoso, listo para pegar al inicio de cualquier prompt de marketing:\n\n[PEGÁ AQUÍ TUS RESPUESTAS DEL FORMULARIO]\n\nEl Brand Brief debe:\n- Tener máximo 300 palabras\n- Incluir: quién soy, a quién ayudo, qué resultado logran, mi tono y voz, mis productos con precios\n- Estar en primera persona\n- Ser lo suficientemente específico para que Claude produzca contenido que suene exactamente como yo\n- Terminar con 5 palabras que NUNCA uso y 5 que SIEMPRE uso"} />
</div>
<pre style={{margin:0, fontSize:11, lineHeight:1.8, color:"#b8e8a8", whiteSpace:"pre-wrap", wordBreak:"break-word", fontFamily:"'Courier New',monospace"}}>{"Tomá esta información sobre mí y construime\nun Brand Brief profesional de 300 palabras...\n\n[PEGÁ TUS RESPUESTAS ARRIBA]"}</pre>
</div>
</Card>
</div>
)}
</div>
```

);
}

// ─── SECTION: MAPA / ROADMAP ──────────────────────────
function MapaSection() {
var [profile, setProfile] = useState(0);

var profiles = [
{
icon:“🌱”, label:“Desde Cero”, color:C.blue, bg:C.blueBg,
situation:“Sin producto, sin audiencia, sin lista.”,
goal:”$500–$1.500 en los primeros 30 días”,
warning:“No intentés construir el funnel perfecto antes de vender. Vendé primero con lo mínimo viable.”,
steps:[
{week:“Semana 1”, title:“Definición y validación”, tasks:[“Elegí UN tema en el que tenés expertise real (Fase 1)”,“Definí tu cliente ideal con el Prompt de Validación”,“Creá el lead magnet con Claude en 48hs (Fase 2 · Prompt 1)”,“Abrí landing de captura en MailerLite (gratis hasta 500 suscriptores)”]},
{week:“Semana 2”, title:“Captación inicial”, tasks:[“Publicá 3 posts sobre el problema de tu cliente (sin vender)”,“Configurá la secuencia de 5 emails de bienvenida”,“DM personal a 20 personas que ya te conocen”]},
{week:“Semana 3”, title:“Construcción del producto”, tasks:[“Estructurá el índice del producto con Claude (Fase 1 · Prompt 3)”,“Escribí la landing de ventas (Fase 3 · Prompt 1)”,“Configurá Hotmart con precio + order bump”]},
{week:“Semana 4”, title:“Lanzamiento Relámpago”, tasks:[“Ejecutá el Lanzamiento Relámpago de 5 días (Fase 4 · Prompt 1)”,“Respondé cada DM y WhatsApp manualmente”,“Meta: 5–15 ventas en la primera semana de carrito abierto”]},
],
},
{
icon:“⚙️”, label:“Tengo Producto, No Vendo”, color:C.gold, bg:C.goldBg,
situation:“Producto creado. Menos de 10 ventas.”,
goal:“Identificar el cuello de botella y hacer las primeras 20 ventas”,
warning:“Antes de cambiar el producto, diagnosticá el funnel. El 80% de los problemas están en captación o copy, no en el producto.”,
steps:[
{week:“Paso 1”, title:“Diagnóstico brutal”, tasks:[“Respondé: ¿tenés leads? Si no → problema de captación. Si tenés pero no venden → problema de conversión”,“Revisá el copy de tu landing con el Prompt de Propuesta de Valor (Fase 1)”,“Hacé el diagnóstico de métricas de la pestaña Datos”]},
{week:“Paso 2”, title:“Corrección de la pieza rota”, tasks:[“Si no tenés lead magnet: crealo esta semana (Fase 2)”,“Si tenés leads pero no ventas: reescribí el headline de la landing”,“Si tenés ventas pero pocas: activá order bump y upsell (Fase 3)”]},
{week:“Paso 3”, title:“Mini-lanzamiento”, tasks:[“Hacé un mini-lanzamiento de 5 días a tu audiencia actual (Fase 4)”,“DM a quien mostró interés pero no compró: ‘¿Qué te frenó?’”,“Ajustá precio o propuesta según el feedback”]},
{week:“Paso 4”, title:“Optimización post-venta”, tasks:[“Configurá la secuencia de emails de bienvenida para compradores”,“Pedí testimonio a los primeros compradores en el día 7”,“Activá el programa de afiliados básico (Fase 6)”]},
],
},
{
icon:“📈”, label:“Vendo pero No Escala”, color:C.green, bg:C.greenBg,
situation:”$500–$2.000/mes. Ingresos esporádicos, no predecibles.”,
goal:”$2.000–$5.000/mes recurrentes en 60 días”,
warning:“El problema no es el producto. Es que dependés de lanzamientos manuales. Necesitás un funnel que trabaje mientras no estás.”,
steps:[
{week:“Semana 1–2”, title:“Funnel evergreen”, tasks:[“Configurá el funnel: Lead Magnet → Secuencia email → Venta (Fase 4)”,“Empezá Meta Ads a $5/día al lead magnet (Fase 5)”,“Activá order bump si no está activo (+25% al ticket promedio)”]},
{week:“Semana 3–4”, title:“Escala de valor”, tasks:[“Lanzá la membresía/comunidad recurrente (Fase 6 · Prompt 1)”,“Reclutá los primeros 5 afiliados en tu nicho (Fase 6 · Prompt 2)”,“Diseñá la oferta high-ticket para el próximo trimestre (Fase 6 · Prompt 3)”]},
{week:“Mes 2”, title:“Automatización”, tasks:[“Creá tu agente de IA para atención al cliente (Fase 7 · Prompt 1)”,“Construí tu Claude Project con toda la info del negocio (Fase 7 · Prompt 3)”,“Implementá el dashboard de Business Intelligence (Fase 10)”]},
{week:“Mes 3”, title:“Posicionamiento”, tasks:[“Estrategia de Thought Leadership 90 días (Fase 8 · Prompt 1)”,“Primera colaboración con un creador complementario”,“Meta: 40% de los ingresos ya recurrente”]},
],
},
{
icon:“🏆”, label:“Escala Consolidada”, color:C.purple, bg:C.purpleBg,
situation:”$3.000+/mes. Funnel activo, primeros 100 clientes.”,
goal:”$8.000–$15.000/mes en 90 días”,
warning:“El siguiente cuello de botella es tu tiempo. Automatizá antes de escalar más. Escalar sin automatización solo te quema.”,
steps:[
{week:“Mes 1”, title:“Comunidad y ecosistema”, tasks:[“Lanzá la comunidad con onboarding estructurado (Fase 9 · Prompt 1)”,“Creá el primer evento virtual de crecimiento (Fase 9 · Prompt 2)”,“Identificá y activá tus primeros 5 embajadores naturales (Fase 9 · Prompt 3)”]},
{week:“Mes 2”, title:“Escala de ads y datos”, tasks:[“Escalá presupuesto de ads de $10 a $50/día (incrementos del 20% semanal)”,“Implementá el dashboard completo de KPIs (Fase 10 · Prompt 1)”,“Primer A/B test sistemático en landing y emails (Fase 10 · Prompt 2)”]},
{week:“Mes 3”, title:“Expansión LATAM”, tasks:[“Elegí UN país objetivo (México / Colombia / Chile recomendados)”,“Adaptá el copy de ventas para ese mercado (Fase 11 · Prompt 2)”,“Primera colaboración con un creador local del país objetivo”]},
{week:“Mes 4+”, title:“Activos y legado”, tasks:[“Diseñá el programa de certificación (Fase 12 · Prompt 1)”,“Valoración del negocio y estrategia de salida (Fase 12 · Prompt 2)”,“Meta: 50% ingresos recurrentes, negocio funciona en 20hs/semana”]},
],
},
];

var p = profiles[profile];

return (
<div>
<div style={{marginBottom:20}}>
<div style={{marginBottom:8}}><Tag color={C.gold}>4 Perfiles · Plan Personalizado</Tag></div>
<h2 style={{margin:“0 0 6px”, fontSize:22, fontWeight:900, color:C.ink, lineHeight:1.2, fontFamily:“Georgia,serif”}}>
Tu Hoja de Ruta <span style={{color:C.gold}}>Paso a Paso</span>
</h2>
<p style={{margin:0, fontSize:13, color:C.muted, fontFamily:“system-ui,sans-serif”, lineHeight:1.7}}>
Identificá en qué etapa estás y seguí el plan desde ahí. No desde el principio. Desde tu punto de partida real.
</p>
</div>

```
<div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20}}>
{profiles.map(function(pr, i) {
return (
<button key={i} onClick={function(){ setProfile(i); }} style={{background: profile === i ? pr.bg : C.card, border:"2px solid " + (profile === i ? pr.color : C.border), borderRadius:12, padding:12, cursor:"pointer", textAlign:"center", transition:"all .15s"}}>
<div style={{fontSize:22, marginBottom:4}}>{pr.icon}</div>
<div style={{fontSize:11, fontWeight:800, color: profile === i ? pr.color : C.muted, fontFamily:"system-ui,sans-serif", lineHeight:1.3}}>{pr.label}</div>
</button>
);
})}
</div>

<Card bgColor={p.bg} borderColor={p.color + "30"} style={{marginBottom:16}}>
<div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10}}>
<div>
<div style={{fontSize:22}}>{p.icon}</div>
<div style={{fontSize:17, fontWeight:800, color:C.ink, fontFamily:"system-ui,sans-serif", marginTop:4}}>{p.label}</div>
<div style={{fontSize:12, color:C.muted, fontFamily:"system-ui,sans-serif"}}>{p.situation}</div>
</div>
<Tag color={p.color}>{p.goal}</Tag>
</div>
<div style={{background: p.color + "15", border:"1px solid " + p.color + "30", borderRadius:8, padding:"10px 12px"}}>
<div style={{fontSize:10, fontWeight:800, color:p.color, letterSpacing:"1px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:4}}>⚠ TRAMPA A EVITAR</div>
<p style={{margin:0, fontSize:12, color:C.ink, lineHeight:1.6, fontFamily:"system-ui,sans-serif"}}>{p.warning}</p>
</div>
</Card>

{p.steps.map(function(step, i) {
return (
<Card key={i} borderColor={p.color} style={{marginBottom:10, borderLeft:"4px solid " + p.color}}>
<div style={{display:"flex", gap:12, alignItems:"flex-start"}}>
<div style={{width:30, height:30, borderRadius:"50%", background: p.color + "20", border:"2px solid " + p.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:900, color:p.color, flexShrink:0, fontFamily:"system-ui,sans-serif"}}>
{i + 1}
</div>
<div style={{flex:1}}>
<div style={{fontSize:10, color:p.color, fontWeight:800, letterSpacing:"1px", fontFamily:"system-ui,sans-serif"}}>{step.week.toUpperCase()}</div>
<div style={{fontSize:14, fontWeight:700, color:C.ink, fontFamily:"system-ui,sans-serif", marginBottom:8}}>{step.title}</div>
{step.tasks.map(function(t, j) {
return (
<div key={j} style={{display:"flex", gap:8, marginBottom:6}}>
<span style={{color:p.color, flexShrink:0, fontSize:12}}>{"→"}</span>
<span style={{fontSize:12, color:C.muted, lineHeight:1.6, fontFamily:"system-ui,sans-serif"}}>{t}</span>
</div>
);
})}
</div>
</div>
</Card>
);
})}

<div style={{background:C.dark, borderRadius:14, padding:"20px 16px", marginTop:12}}>
<div style={{fontSize:11, fontWeight:800, color:C.gold, letterSpacing:"1.2px", textTransform:"uppercase", fontFamily:"system-ui,sans-serif", marginBottom:10}}>EL PRINCIPIO QUE LO UNIFICA TODO</div>
<p style={{margin:"0 0 14px", color:"#ccc", fontSize:14, lineHeight:1.9, fontStyle:"italic", fontFamily:"Georgia,serif"}}>
{"\"Un sistema de ventas no es lo que hacés cuando querés vender. Es lo que construís para que las ventas ocurran sin que tengas que iniciar cada una manualmente.\""}
</p>
<div style={{height:1, background:"#333", margin:"14px 0"}} />
<div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
{[
["Captación constante","Leads que entran solos"],
["Conversión probada","Páginas y scripts que cierran"],
["Automatización activa","Emails que nutren sin vos"],
["LTV maximizado","Cada cliente vale más de una vez"],
].map(function(item, i) {
return (
<div key={i} style={{background:"#1e1c18", borderRadius:8, padding:"10px 12px"}}>
<div style={{fontSize:11, fontWeight:700, color:C.gold, fontFamily:"system-ui,sans-serif"}}>{item[0]}</div>
<div style={{fontSize:11, color:"#666", marginTop:2, fontFamily:"system-ui,sans-serif"}}>{item[1]}</div>
</div>
);
})}
</div>
</div>
</div>
```

);
}

// ─── TABS CONFIG ─────────────────────────────────────
var TABS = [
{id:“sistema”, icon:“⚙️”, label:“Sistema”},
{id:“prompts”, icon:“📋”, label:“Prompts”},
{id:“datos”, icon:“📊”, label:“Datos”},
{id:“precios”, icon:“💰”, label:“Precios”},
{id:“gratis”, icon:“🎁”, label:“Gratis”},
{id:“mapa”, icon:“🗺️”, label:“Mapa”},
];

// ─── MAIN APP ─────────────────────────────────────────
export default function PersaltumSistema() {
var [tab, setTab] = useState(“sistema”);

function renderSection() {
if (tab === “sistema”) return <SistemaSection />;
if (tab === “prompts”) return <PromptsSection />;
if (tab === “datos”) return <DatosSection />;
if (tab === “precios”) return <PreciosSection />;
if (tab === “gratis”) return <GratisSection />;
if (tab === “mapa”) return <MapaSection />;
return null;
}

return (
<div style={{fontFamily:“system-ui,sans-serif”, background:C.bg, minHeight:“100vh”, color:C.ink}}>
<div style={{background:C.dark, padding:“24px 20px 20px”, position:“relative”, overflow:“hidden”}}>
<div style={{position:“absolute”, top:-50, right:-50, width:180, height:180, background:“radial-gradient(circle, “ + C.gold + “18 0%, transparent 70%)”, borderRadius:“50%”}} />
<div style={{fontSize:10, color:C.gold, letterSpacing:“2px”, textTransform:“uppercase”, fontWeight:700, fontFamily:“system-ui,sans-serif”, marginBottom:8}}>
PERSALTUM · UNIVERSIDAD DIGITAL DEL INFOPRODUCTO
</div>
<h1 style={{margin:“0 0 4px”, fontSize:24, fontWeight:900, color:”#fff”, lineHeight:1.15, fontFamily:“Georgia,serif”}}>
Sistema de Ventas <span style={{color:C.gold}}>Escalable</span>
</h1>
<p style={{margin:“0 0 18px”, color:”#888”, fontSize:12, fontFamily:“system-ui,sans-serif”}}>
12 Fases · 36+ Prompts · Calculadora · 3 Opciones de Precio · Kit Gratis
</p>
<div style={{display:“grid”, gridTemplateColumns:“repeat(4,1fr)”, background:”#1e1c18”, borderRadius:10, overflow:“hidden”, border:“1px solid #333”}}>
{[{v:“12”,l:“Fases”},{v:“36+”,l:“Prompts”},{v:”$97–$697”,l:“Precio”},{v:“∞”,l:“Nichos”}].map(function(s, i) {
return (
<div key={i} style={{padding:“12px 6px”, textAlign:“center”, borderRight: i < 3 ? “1px solid #333” : “none”}}>
<div style={{fontSize: i === 2 ? 13 : 20, fontWeight:900, color:C.gold, fontFamily:“system-ui,sans-serif”, lineHeight:1}}>{s.v}</div>
<div style={{fontSize:10, color:”#888”, fontFamily:“system-ui,sans-serif”, marginTop:3}}>{s.l}</div>
</div>
);
})}
</div>
</div>

```
<div style={{display:"flex", background:C.card, borderBottom:"1px solid " + C.border, overflowX:"auto"}}>
{TABS.map(function(t) {
var active = tab === t.id;
return (
<button key={t.id} onClick={function(){ setTab(t.id); }} style={{flex:"0 0 auto", padding:"10px 14px", background:"none", border:"none", borderBottom: active ? "3px solid " + C.gold : "3px solid transparent", color: active ? C.gold : C.faint, cursor:"pointer", fontFamily:"system-ui,sans-serif", fontSize:11, fontWeight: active ? 800 : 500, whiteSpace:"nowrap", display:"flex", flexDirection:"column", alignItems:"center", gap:2, transition:"all .15s"}}>
<span style={{fontSize:16}}>{t.icon}</span>
<span>{t.label}</span>
</button>
);
})}
</div>

<div style={{padding:"20px 16px", maxWidth:720, margin:"0 auto"}}>
{renderSection()}
<div style={{height:40}} />
</div>
</div>
```

);
}
