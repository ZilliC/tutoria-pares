import { useEffect, useState } from "react";
import { listarAlumnosConModelos, todosLosConceptos } from "../lib/supabase.js";
import { DOMAIN } from "../data/quiz.js";

export default function Leaderboard({ onVolver, onLogout }) {
  const [alumnos, setAlumnos] = useState(null);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let activo = true;
    listarAlumnosConModelos()
      .then((data) => {
        if (!activo) return;
        // Sort students by total percentage descending
        const sorted = data.sort((x, y) => {
          const pctX = calcularPorcentajeTotal(x.modelos);
          const pctY = calcularPorcentajeTotal(y.modelos);
          return pctY - pctX;
        });
        setAlumnos(sorted);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      });
    return () => {
      activo = false;
    };
  }, []);

  function calcularPorcentajeTotal(modelos) {
    const conceptos = todosLosConceptos();
    const dominados = conceptos.filter((c) => (modelos[c] || 0) >= 2).length;
    return Math.round((dominados / conceptos.length) * 100);
  }

  function calcularPorcentajeUnidad(modelos, unidad) {
    const conceptosU = unidad.temas.flatMap((t) => t.conceptos);
    const dominadosU = conceptosU.filter((c) => (modelos[c] || 0) >= 2).length;
    return Math.round((dominadosU / conceptosU.length) * 100);
  }

  function toggleExpand(id) {
    setExpandedId(expandedId === id ? null : id);
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-6 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Tabla de Clasificación 🏆
          </h1>
          <p className="text-slate-600 text-sm">
            Top de alumnos según conceptos dominados
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onVolver}
            className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap font-medium"
          >
            ← Volver
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={onLogout}
            className="text-sm text-slate-500 hover:text-slate-700 whitespace-nowrap"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm">
          Error al cargar leaderboard: {error}
        </div>
      )}

      {!alumnos && !error && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-slate-500 text-sm">Cargando clasificación...</p>
        </div>
      )}

      {alumnos && alumnos.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-800">No hay alumnos registrados aún.</p>
        </div>
      )}

      {alumnos && alumnos.length > 0 && (
        <div className="space-y-3">
          {alumnos.map((a, index) => {
            const pctTotal = calcularPorcentajeTotal(a.modelos);
            const isExpanded = expandedId === a.id;

            // Medals for top 3
            let badge = <span className="text-slate-400 font-medium w-6 text-center">#{index + 1}</span>;
            if (index === 0) badge = <span className="text-2xl w-6 text-center">🥇</span>;
            else if (index === 1) badge = <span className="text-2xl w-6 text-center">🥈</span>;
            else if (index === 2) badge = <span className="text-2xl w-6 text-center">🥉</span>;

            return (
              <div
                key={a.id}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                  isExpanded
                    ? "border-blue-400 shadow-md ring-1 ring-blue-400/20"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Main Header Bar (Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleExpand(a.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {badge}
                    <div>
                      <div className="font-semibold text-slate-800">
                        {a.nombre} {a.apellidos}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {a.quiz_completado
                          ? "Evaluación completada"
                          : "Quiz pendiente"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-800">
                        {pctTotal}%
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Dominio
                      </div>
                    </div>
                    {/* Chevron Indicator */}
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        isExpanded ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expanded Breakdown */}
                {isExpanded && (
                  <div className="bg-slate-50 border-t border-slate-100 p-4 space-y-4 animate-fadeIn">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Desglose de dominio por Unidad
                    </h4>
                    <div className="space-y-3">
                      {DOMAIN.unidades.map((u) => {
                        const pctU = calcularPorcentajeUnidad(a.modelos, u);
                        return (
                          <div key={u.id} className="space-y-1">
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="font-medium text-slate-700">
                                {u.nombre}
                              </span>
                              <span className="font-bold text-slate-800">
                                {pctU}%
                              </span>
                            </div>
                            {/* Visual Progress Bar */}
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                                style={{ width: `${pctU}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
