export const DOMAIN = {
  unidades: [
    {
      id: "u2",
      nombre: "Sistemas Operativos",
      temas: [
        { id: "u2-memoria", nombre: "Memoria y CPU", conceptos: ["RAM", "CPU", "Proceso"] },
        { id: "u2-clasificacion", nombre: "Clasificación de SO", conceptos: ["Multitarea", "Multiusuario"] },
        { id: "u2-comandos", nombre: "Comandos básicos", conceptos: ["ls/dir", "cd", "mkdir", "ping"] },
      ],
    },
    {
      id: "u3",
      nombre: "Redes de Computadoras",
      temas: [
        { id: "u3-tipos", nombre: "Tipos de redes", conceptos: ["LAN", "WAN", "Internet"] },
        { id: "u3-componentes", nombre: "Componentes de red", conceptos: ["Router", "Switch", "Servidor", "Módem"] },
        {
          id: "u3-osi",
          nombre: "Modelo OSI",
          conceptos: [
            "Capa Física",
            "Enlace de datos",
            "Capa de Red",
            "Transporte",
            "Sesión",
            "Presentación",
            "Aplicación",
          ],
        },
        { id: "u3-protocolos", nombre: "Protocolos TCP/IP", conceptos: ["HTTP/HTTPS", "DNS", "Dirección IP"] },
      ],
    },
    {
      id: "u4",
      nombre: "Lenguajes de Programación",
      temas: [
        { id: "u4-algoritmos", nombre: "Algoritmos", conceptos: ["Algoritmo", "Variable", "Estructura de control"] },
        { id: "u4-ejecucion", nombre: "Forma de ejecución", conceptos: ["Compilado", "Interpretado"] },
        { id: "u4-paradigmas", nombre: "Paradigmas", conceptos: ["Imperativo", "Declarativo"] },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// QUIZ — placeholders
// Estructura por concepto:
//   p1: pregunta de identificación
//     - 4 opciones con nivel 0/1/2/3 + "No sé" (nivel 0)
//     - Si elige nivel 3 → dispara p2 (confirmación de profundidad)
//   p2: pregunta de detalle (binaria)
//     - correcto: true  → nivel 3 final
//     - correcto: false → nivel 2 final
// Las preguntas reales se sustituyen reemplazando el objeto QUIZ.
// ─────────────────────────────────────────────────────────────

const CONCEPTOS_TODOS = DOMAIN.unidades.flatMap((u) =>
  u.temas.flatMap((t) => t.conceptos)
);

function placeholderP1(c) {
  return {
    pregunta: `[Placeholder] Escenario realista que requiere identificar el concepto "${c}" entre varias opciones del mismo tema.`,
    opciones: [
      {
        id: "a",
        texto: `[Nivel 3] Respuesta completamente correcta y precisa sobre ${c}.`,
        nivel: 3,
      },
      {
        id: "b",
        texto: `[Nivel 2] Respuesta correcta sobre ${c} pero con una imprecisión sutil.`,
        nivel: 2,
      },
      {
        id: "c",
        texto: `[Nivel 1] Distractor: confunde ${c} con un concepto similar del mismo tema.`,
        nivel: 1,
      },
      {
        id: "d",
        texto: `[Nivel 0] Distractor: confunde ${c} con un concepto de un dominio completamente distinto.`,
        nivel: 0,
      },
      { id: "no_se", texto: "No sé", nivel: 0 },
    ],
  };
}

function placeholderP2(c) {
  return {
    pregunta: `[Placeholder p2] Pregunta de detalle binaria sobre ${c} — distingue dominio profundo (nivel 3) de reconocimiento (nivel 2).`,
    opciones: [
      {
        id: "a",
        texto: `[Correcto] Respuesta precisa de detalle sobre ${c}.`,
        correcto: true,
      },
      {
        id: "b",
        texto: `[Incorrecto] Respuesta plausible pero errónea sobre ${c}.`,
        correcto: false,
      },
    ],
  };
}

export const QUIZ = Object.fromEntries(
  CONCEPTOS_TODOS.map((c) => [c, { p1: placeholderP1(c), p2: placeholderP2(c) }])
);
