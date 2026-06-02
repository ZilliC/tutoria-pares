import { useEffect, useState } from "react";
import { QUIZ } from "../data/quiz.js";
import {
  guardarModelos,
  marcarQuizCompletado,
  obtenerModelos,
  todosLosConceptos,
} from "../lib/supabase.js";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Si el alumno ya domina el concepto (nivel >= 2), saltamos directo a la
// pregunta de detalle (p2) en vez de repetir la de identificación (p1).
function pasoInicial(concepto, nivelesPrevios) {
  const previo = (nivelesPrevios && nivelesPrevios[concepto]) || 0;
  if (previo >= 2 && QUIZ[concepto] && QUIZ[concepto].p2) return "p2";
  return "p1";
}

export default function Quiz({
  usuario,
  conocidos,
  onCompletar,
  onLogout,
  modoReeval = false,
}) {
  const [nivelesPrevios, setNivelesPrevios] = useState(null);
  const [orden, setOrden] = useState([]);
  const [idx, setIdx] = useState(0);
  const [paso, setPaso] = useState("p1"); // "p1" | "p2"
  const [respuestas, setRespuestas] = useState({}); // concepto -> nivel final
  const [terminado, setTerminado] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const [opcionesBarajadas, setOpcionesBarajadas] = useState([]);
  const [seleccion, setSeleccion] = useState(null); // opción elegida en la pregunta actual, o null

  // Cargar niveles previos y armar la lista mezclada
  useEffect(() => {
    let activo = true;
    obtenerModelos(usuario.id)
      .then((m) => {
        if (!activo) return;
        setNivelesPrevios(m);
        const validos = conocidos.filter((c) => QUIZ[c]);
        const lista = shuffle(validos);
        setOrden(lista);
        if (lista.length === 0) {
          setTerminado(true);
          return;
        }
        setPaso(pasoInicial(lista[0], m));
      })
      .catch((e) => {
        if (activo) setError(e.message);
      });
    return () => {
      activo = false;
    };
  }, [usuario.id, conocidos]);

  // Barajar las opciones de la pregunta actual cada vez que cambia idx o paso.
  // En P1: mezcla todo excepto "No sé", que queda siempre al final.
  // En P2: mezcla las dos opciones binarias.
  useEffect(() => {
    if (!orden.length || terminado) return;
    setSeleccion(null);
    const c = orden[idx];
    const preg = paso === "p1" ? QUIZ[c].p1 : QUIZ[c].p2;
    if (paso === "p1") {
      const noSe = preg.opciones.filter((o) => o.id === "no_se");
      const otras = shuffle(preg.opciones.filter((o) => o.id !== "no_se"));
      setOpcionesBarajadas([...otras, ...noSe]);
    } else {
      setOpcionesBarajadas(shuffle([...preg.opciones]));
    }
  }, [idx, paso, orden, terminado]);

  function avanzar(nuevasRespuestas) {
    setRespuestas(nuevasRespuestas);
    const nextIdx = idx + 1;
    if (nextIdx >= orden.length) {
      setTerminado(true);
      return;
    }
    setIdx(nextIdx);
    setPaso(pasoInicial(orden[nextIdx], nivelesPrevios));
  }

  // Al pulsar "Continuar" tras ver el feedback: aplica la lógica de niveles y avanza.
  function continuar() {
    const op = seleccion;
    if (!op) return;
    const c = orden[idx];
    if (paso === "p1") {
      if (op.nivel === 3) {
        // Candidato a nivel 3 → confirmar con la pregunta de detalle (si existe)
        if (QUIZ[c].p2) {
          setPaso("p2");
          return;
        }
        avanzar({ ...respuestas, [c]: 3 });
        return;
      }
      avanzar({ ...respuestas, [c]: op.nivel });
      return;
    }
    avanzar({ ...respuestas, [c]: op.correcto ? 3 : 2 });
  }

  // Estados de carga / error
  if (error && !nivelesPrevios) {
    return (
      <Centro>
        <p className="text-red-600">Error: {error}</p>
      </Centro>
    );
  }
  if (!nivelesPrevios) {
    return (
      <Centro>
        <p className="text-slate-500">Cargando evaluación...</p>
      </Centro>
    );
  }

  if (terminado) {
    return (
      <PantallaFin
        usuario={usuario}
        conocidos={conocidos}
        respuestas={respuestas}
        onCompletar={onCompletar}
        onLogout={onLogout}
        guardando={guardando}
        setGuardando={setGuardando}
        error={error}
        setError={setError}
        modoReeval={modoReeval}
      />
    );
  }

  const c = orden[idx];
  const preg = paso === "p1" ? QUIZ[c].p1 : QUIZ[c].p2;
  const totalConceptos = orden.length;

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-slate-500">
          Pregunta {idx + 1} de {totalConceptos}
          {paso === "p2" && (
            <span className="ml-2 text-xs text-blue-600 font-medium">
              · detalle
            </span>
          )}
        </div>
        <button
          onClick={onLogout}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="h-2 bg-slate-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all"
          style={{ width: `${((idx + 1) / totalConceptos) * 100}%` }}
        />
      </div>

      {paso === "p1" ? (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg p-3 mb-4">
          Si no estás seguro, selecciona <strong>No sé</strong>. No adivines.
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3 mb-4">
          Pregunta de detalle: elige la opción que sea exactamente correcta.
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-4">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {preg.pregunta}
        </h2>
        <div className="space-y-2">
          {opcionesBarajadas.map((op) => {
            const esCorrecta =
              paso === "p1" ? op.nivel === 3 : op.correcto === true;
            const esElegida = seleccion && op.id === seleccion.id;
            let clase =
              "w-full text-left px-4 py-3 rounded-lg border transition-colors flex items-start gap-2 ";
            if (!seleccion) {
              clase +=
                "border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-800 cursor-pointer";
            } else if (esCorrecta) {
              clase += "border-green-500 bg-green-50 text-green-900";
            } else if (esElegida) {
              clase += "border-red-500 bg-red-50 text-red-900";
            } else {
              clase += "border-slate-200 text-slate-500 opacity-60";
            }
            return (
              <button
                key={op.id}
                onClick={() => !seleccion && setSeleccion(op)}
                disabled={!!seleccion}
                className={clase}
              >
                {seleccion && (esCorrecta || esElegida) && (
                  <span className="shrink-0 font-bold">
                    {esCorrecta ? "✓" : "✗"}
                  </span>
                )}
                <span>{op.texto}</span>
              </button>
            );
          })}
        </div>

        {seleccion && (
          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Explicación
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {preg.explicacion}
            </p>
            <button
              onClick={continuar}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Centro({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

const RESUMEN_NIVELES = [
  { nivel: 3, etiqueta: "Lo puede enseñar", icono: "🟢" },
  { nivel: 2, etiqueta: "Lo entiende", icono: "🟡" },
  { nivel: 1, etiqueta: "Lo reconoce", icono: "🟠" },
  { nivel: 0, etiqueta: "No lo conoce", icono: "⚫" },
];

function PantallaFin({
  usuario,
  conocidos,
  respuestas,
  onCompletar,
  onLogout,
  guardando,
  setGuardando,
  error,
  setError,
  modoReeval,
}) {
  const conteos = { 0: 0, 1: 0, 2: 0, 3: 0 };
  for (const nivel of Object.values(respuestas)) {
    if (nivel in conteos) conteos[nivel] += 1;
  }
  const totalEvaluado = Object.values(respuestas).length;

  async function finalizar() {
    setError("");
    setGuardando(true);
    try {
      let modelos;
      if (modoReeval) {
        // Solo actualizamos los conceptos efectivamente evaluados
        modelos = Object.entries(respuestas).map(([concepto, nivel]) => ({
          concepto,
          nivel,
        }));
      } else {
        // Onboarding inicial: escribir los 33 conceptos
        const conocidosSet = new Set(conocidos);
        modelos = todosLosConceptos().map((c) => {
          if (!conocidosSet.has(c)) return { concepto: c, nivel: 0 };
          const nivel = respuestas[c];
          return { concepto: c, nivel: typeof nivel === "number" ? nivel : 0 };
        });
      }
      await guardarModelos(usuario.id, modelos);
      if (!modoReeval) {
        await marcarQuizCompletado(usuario.id);
      }
      onCompletar();
    } catch (err) {
      setError("Error al guardar: " + err.message);
    } finally {
      setGuardando(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          {modoReeval ? "Re-evaluación completa" : "¡Terminaste el quiz! 🎉"}
        </h2>
        <p className="text-slate-600 mb-6 text-sm">
          {modoReeval
            ? "Guarda los cambios para actualizar tu perfil."
            : "Guarda tu perfil para ver tu skill tree y buscar matches."}
        </p>

        {totalEvaluado > 0 && (
          <div className="text-left bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5 space-y-2">
            {RESUMEN_NIVELES.map(({ nivel, etiqueta, icono }) => (
              <div
                key={nivel}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2 text-slate-700">
                  <span>{icono}</span>
                  {etiqueta}
                </span>
                <span className="font-semibold text-slate-800">
                  {conteos[nivel]}
                </span>
              </div>
            ))}
            <div className="border-t border-slate-200 pt-2 mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Conceptos evaluados</span>
              <span className="font-semibold text-slate-700">
                {totalEvaluado}
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 mb-4">
            {error}
          </div>
        )}
        <button
          onClick={finalizar}
          disabled={guardando}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
        >
          {guardando
            ? "Guardando..."
            : modoReeval
              ? "Actualizar mi perfil"
              : "Ver mi perfil"}
        </button>
        <button
          onClick={onLogout}
          className="w-full mt-3 text-slate-500 text-sm py-2"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
