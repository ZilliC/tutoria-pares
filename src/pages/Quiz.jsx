import { useState, useMemo } from "react";
import { QUIZ } from "../data/quiz.js";
import {
  guardarModelos,
  marcarQuizCompletado,
  todosLosConceptos,
} from "../lib/supabase.js";

export default function Quiz({ usuario, conocidos, onCompletar, onLogout, modoReeval = false }) {
  const conceptosConPregunta = useMemo(
    () => conocidos.filter((c) => QUIZ[c]),
    [conocidos]
  );
  const [idx, setIdx] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  if (conceptosConPregunta.length === 0) {
    return (
      <PantallaFin
        usuario={usuario}
        conocidos={conocidos}
        respuestas={{}}
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

  const concepto = conceptosConPregunta[idx];
  const pregunta = QUIZ[concepto];

  function seleccionar(opcionId) {
    const next = { ...respuestas, [concepto]: opcionId };
    setRespuestas(next);
    if (idx + 1 < conceptosConPregunta.length) {
      setIdx(idx + 1);
    } else {
      setIdx(idx + 1);
    }
  }

  if (idx >= conceptosConPregunta.length) {
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

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-slate-500">
          Pregunta {idx + 1} de {conceptosConPregunta.length}
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
          style={{
            width: `${((idx + 1) / conceptosConPregunta.length) * 100}%`,
          }}
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg p-3 mb-4">
        Si no estás seguro, selecciona <strong>No sé</strong>. No adivines.
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-4">
        <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">
          {concepto}
        </div>
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {pregunta.pregunta}
        </h2>
        <div className="space-y-2">
          {pregunta.opciones.map((op) => (
            <button
              key={op.id}
              onClick={() => seleccionar(op.id)}
              className="w-full text-left px-4 py-3 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-colors text-slate-800"
            >
              {op.texto}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
  async function finalizar() {
    setError("");
    setGuardando(true);
    try {
      let modelos;
      if (modoReeval) {
        modelos = conocidos
          .filter((c) => QUIZ[c] && respuestas[c])
          .map((c) => ({
            concepto: c,
            nivel: QUIZ[c].niveles[respuestas[c]] ?? 0,
          }));
      } else {
        const conocidosSet = new Set(conocidos);
        modelos = todosLosConceptos().map((c) => {
          if (!conocidosSet.has(c)) return { concepto: c, nivel: 0 };
          const resp = respuestas[c];
          if (!resp || !QUIZ[c]) return { concepto: c, nivel: 0 };
          const nivel = QUIZ[c].niveles[resp] ?? 0;
          return { concepto: c, nivel };
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
          {modoReeval ? "Re-evaluación completa" : "¡Terminaste el quiz!"}
        </h2>
        <p className="text-slate-600 mb-6 text-sm">
          {modoReeval
            ? "Guarda los cambios para actualizar tu perfil."
            : "Guarda tu perfil para ver tu skill tree y buscar matches."}
        </p>
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
