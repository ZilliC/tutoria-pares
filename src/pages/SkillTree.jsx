import { useEffect, useState } from "react";
import { DOMAIN } from "../data/quiz.js";
import { obtenerModelos, todosLosConceptos } from "../lib/supabase.js";
import SkillBar, { colorPorNivel } from "../components/SkillBar.jsx";
import Accordion from "../components/Accordion.jsx";
import ProgressRing from "../components/ProgressRing.jsx";
import SkillTreeVisual from "../components/SkillTreeVisual.jsx";

function vistaInicial() {
  if (typeof window === "undefined") return "acordeon";
  return window.innerWidth >= 768 ? "arbol" : "acordeon";
}

const FONDO_TEMA = {
  0: "bg-slate-50",
  1: "bg-red-50",
  2: "bg-yellow-50",
  3: "bg-green-50",
};

export default function SkillTree({
  usuarioActual,
  targetUser,
  modoAdmin = false,
  onBuscarMatch,
  onVolverAdmin,
  onLogout,
  onReevaluar,
  onVerLeaderboard,
  onIniciarQuiz,
}) {
  const user = targetUser || usuarioActual;
  const [modelos, setModelos] = useState(null);
  const [error, setError] = useState("");
  const [vista, setVista] = useState(vistaInicial);

  useEffect(() => {
    let activo = true;
    obtenerModelos(user.id)
      .then((m) => {
        if (activo) setModelos(m);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      });
    return () => {
      activo = false;
    };
  }, [user.id]);

  if (error) {
    return (
      <Centro>
        <p className="text-red-600">Error: {error}</p>
      </Centro>
    );
  }

  if (!modelos) {
    return (
      <Centro>
        <p className="text-slate-500">Cargando perfil...</p>
      </Centro>
    );
  }

  const conceptos = todosLosConceptos();
  const dominados = conceptos.filter((c) => modelos[c] >= 2).length;
  const todoCero = conceptos.every((c) => modelos[c] === 0);

  const maxWidth = vista === "arbol" && !todoCero ? "max-w-6xl" : "max-w-3xl";

  return (
    <div className={`min-h-screen p-4 sm:p-6 ${maxWidth} mx-auto`}>
      <div className="flex justify-between items-start mb-4 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {modoAdmin
              ? `${user.nombre} ${user.apellidos}`
              : `Hola, ${user.nombre}`}
          </h1>
          <p className="text-slate-600 text-sm">
            {modoAdmin ? "Perfil del alumno (lectura)" : "Tu skill tree"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!modoAdmin && onVerLeaderboard && (
            <>
              <button
                onClick={onVerLeaderboard}
                className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap font-medium"
              >
                Leaderboard 🏆
              </button>
              <span className="text-slate-300">|</span>
            </>
          )}
          <button
            onClick={modoAdmin ? onVolverAdmin : onLogout}
            className="text-sm text-slate-500 hover:text-slate-700 whitespace-nowrap"
          >
            {modoAdmin ? "← Volver al admin" : "Cerrar sesión"}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-4 flex justify-between items-center gap-3 flex-wrap">
        <ProgressRing value={dominados} total={conceptos.length} />
        {!todoCero && (
          <button
            type="button"
            onClick={() =>
              setVista(vista === "arbol" ? "acordeon" : "arbol")
            }
            className="text-sm px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 whitespace-nowrap"
          >
            {vista === "arbol" ? "Ver tabla" : "Ver árbol visual"}
          </button>
        )}
      </div>

      {todoCero ? (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center max-w-md mx-auto my-8 shadow-sm">
          <p className="text-amber-800 font-semibold text-lg mb-2">
            {modoAdmin ? "Perfil vacío" : "¡Comienza tu diagnóstico!"}
          </p>
          <p className="text-amber-700 text-sm mb-6">
            {modoAdmin
              ? "Este alumno aún no ha completado el quiz."
              : "Tu perfil está vacío. Completa el quiz de diagnóstico para ver tu skill tree y buscar matches de tutoría."}
          </p>
          {!modoAdmin && onIniciarQuiz && (
            <button
              type="button"
              onClick={onIniciarQuiz}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow transition-colors"
            >
              Comenzar Diagnóstico
            </button>
          )}
        </div>
      ) : vista === "arbol" ? (
        <div className="mb-4">
          <SkillTreeVisual
            modelos={modelos}
            nombreAlumno={user.nombre}
            modoAdmin={modoAdmin}
            onEvaluarTema={
              !modoAdmin && onReevaluar ? onReevaluar : undefined
            }
            onEvaluarConcepto={
              !modoAdmin && onReevaluar ? (c) => onReevaluar([c]) : undefined
            }
          />
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          {DOMAIN.unidades.map((u) => {
            const conceptosU = u.temas.flatMap((t) => t.conceptos);
            const prom =
              conceptosU.reduce((s, c) => s + (modelos[c] || 0), 0) /
              conceptosU.length;
            const dominadosU = conceptosU.filter(
              (c) => modelos[c] >= 2
            ).length;
            return (
              <Accordion
                key={u.id}
                titulo={u.nombre}
                subtitulo={`${dominadosU} de ${conceptosU.length} dominados`}
                color={FONDO_TEMA[Math.round(prom)]}
                defaultOpen
              >
                <div className="space-y-3">
                  {u.temas.map((t) => {
                    const promT =
                      t.conceptos.reduce(
                        (s, c) => s + (modelos[c] || 0),
                        0
                      ) / t.conceptos.length;
                    return (
                      <div
                        key={t.id}
                        className={`rounded-lg p-3 ${FONDO_TEMA[Math.round(promT)]}`}
                      >
                        <div className="flex justify-between items-center mb-1 gap-2">
                          <h4 className="font-semibold text-slate-700">
                            {t.nombre}
                          </h4>
                          {!modoAdmin && onReevaluar && (
                            <button
                              type="button"
                              onClick={() => onReevaluar(t.conceptos)}
                              className="text-xs px-3 py-1 rounded-full border border-blue-400 text-blue-700 hover:bg-blue-50 whitespace-nowrap"
                            >
                              Evaluar tema
                            </button>
                          )}
                        </div>
                        {t.conceptos.map((c) => (
                          <SkillBar
                            key={c}
                            concepto={c}
                            nivel={modelos[c] || 0}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </Accordion>
            );
          })}
        </div>
      )}

      {!todoCero && (
        <button
          onClick={onBuscarMatch}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          {modoAdmin
            ? "Ver matches de este alumno"
            : "Buscar mi match de tutoría"}
        </button>
      )}
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
