// Cliente del tutor LLM (Google Gemini). Llamada directa desde el frontend.
// NOTA: la clave queda expuesta en el navegador; aceptable solo para demo
// privada. Para producción, migrar a una Supabase Edge Function que proxie
// esta misma llamada y mantenga la clave del lado del servidor.

const KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODELO = "gemini-2.5-flash";

const NIVEL_TEXTO = {
  0: "sin idea (nunca lo ha visto)",
  1: "lo reconoce pero se confunde",
  2: "lo entiende razonablemente",
  3: "lo domina",
};

function construirSystemPrompt(tema, niveles) {
  const detalleNiveles = tema.conceptos
    .map((c) => `- ${c}: ${NIVEL_TEXTO[niveles?.[c] ?? 0]}`)
    .join("\n");

  return [
    `Eres un tutor cercano y paciente para estudiantes de nivel bachillerato / primeros semestres de universidad.`,
    `El estudiante quiere estudiar el tema: "${tema.nombre}".`,
    `Los conceptos de este tema y el nivel actual del estudiante en cada uno son:`,
    detalleNiveles,
    ``,
    `Instrucciones:`,
    `- Responde siempre en español, con un tono amable y motivador.`,
    `- Adapta la profundidad al nivel del estudiante: insiste en lo básico donde su nivel es bajo y avanza/profundiza donde ya domina.`,
    `- Sé breve y claro. Usa ejemplos cotidianos y analogías sencillas.`,
    `- Cíñete a este tema; si preguntan algo muy alejado, redirige con amabilidad.`,
    `- No inventes datos; si algo no es seguro, dilo.`,
  ].join("\n");
}

async function generar(systemPrompt, contents) {
  if (!KEY) {
    throw new Error(
      "Falta la clave del tutor. Define VITE_GEMINI_API_KEY en tu archivo .env."
    );
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent?key=${KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { temperature: 0.6, maxOutputTokens: 800 },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(
      "No se pudo contactar al tutor. Revisa tu conexión y la API key."
    );
  }

  const data = await res.json();
  const texto = data?.candidates?.[0]?.content?.parts
    ?.map((p) => p.text)
    .filter(Boolean)
    .join("")
    .trim();

  if (!texto) {
    throw new Error("El tutor no devolvió respuesta. Intenta de nuevo.");
  }
  return texto;
}

// Introducción inicial al tema, adaptada al nivel del estudiante.
export async function tutorIntroduccion(tema, niveles) {
  const systemPrompt = construirSystemPrompt(tema, niveles);
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Dame una introducción breve y clara a este tema. Empieza saludando, explica de qué trata en pocas frases, presenta cada concepto en una línea sencilla adaptada a mi nivel, y termina invitándome a preguntar mis dudas.`,
        },
      ],
    },
  ];
  return generar(systemPrompt, contents);
}

// Responde una duda del estudiante usando el historial completo del chat.
// historial: [{ rol: "user" | "model", texto: string }]
export async function tutorResponder(tema, niveles, historial) {
  const systemPrompt = construirSystemPrompt(tema, niveles);
  const contents = historial.map((m) => ({
    role: m.rol,
    parts: [{ text: m.texto }],
  }));
  return generar(systemPrompt, contents);
}
