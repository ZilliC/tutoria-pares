import { useEffect, useMemo, useState } from "react";
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
  const [paso, setPaso] = useState("p1");
  const [respuestas, setRespuestas] = useState({}); // concepto -> nivel final
  const [terminado, setTerminado] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  // Cargar niveles previos y armar la lista shuffled
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
        const primero = lista[0];
        const previo = m[primero] || 0;
        if (previo >= 2 && QUIZ[primero].p2) setPaso("p2");
        else setPaso("p1");
      })
      .catch((e) => {
        if (activo) setError(e.message);
      });
    return () => {
      activo = false;
    };
  }, [usuario.id, conocidos]);

  function avanzar(nuevasRespuestas) {
    setRespuestas(nuevasRespuestas);
    const nextIdx = idx + 1;
    if (nextIdx >= orden.length) {
      setTerminado(true);
      return;
    }
    setIdx(nextIdx);
    const c = orden[nextIdx];
    const previo = (nivelesPrevios && nivelesPrevios[c]) || 0;
    if (previo >= 2 && QUIZ[c].p2) setPaso("p2");
    else setPaso("p1");
  }

  function onResponderP1(op) {
    const c = orden[idx];
    if (op.nivel === 3) {
      // Candidato a nivel 3 → ir a p2 del mismo concepto (si existe)
      if (QUIZ[c].p2) {
        setPaso("p2");
        return;
      }
      // Sin p2: bloquear en 3
      avanzar({ ...respuestas, [c]: 3 });
      return;
    }
    avanzar({ ...respuestas, [c]: op.nivel });
  }

  function onResponderP2(op) {
    const c = orden[idx];
    const nivel = op.correcto ? 3 : 2;
    avanzar({ ...respuestas, [c]: nivel });
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

      {paso === "p1" && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg p-3 mb-4">
          Si no estás seguro, selecciona <strong>No sé</strong>. No adivines.
        </div>
      )}
      {paso === "p2" && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3 mb-4">
          Pregunta de detalle: elige la opción que sea precisamente correcta.
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-4">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          {preg.pregunta}
        </h2>
        <div className="space-y-2">
          {preg.opciones.map((op) => (
            <button
              key={op.id}
              onClick={() =>
                paso === "p1" ? onResponderP1(op) : onResponderP2(op)
              }
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

function Centro({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
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
        // Solo upsert de conceptos efectivamente evaluados
        modelos = Object.entries(respuestas).map(([concepto, nivel]) => ({
          concepto,
          nivel,
        }));
      } else {
        // Onboarding inicial: escribir los 33 conceptos
        // - Conocidos respondidos → nivel resultado
        // - Conocidos no respondidos (sin pregunta válida) → 0
        // - No conocidos → 0
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
