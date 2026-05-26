import { useEffect, useState } from "react";
import { listarAlumnosConModelos, todosLosConceptos } from "../lib/supabase.js";

export default function Admin({ onVerAlumno, onLogout }) {
  const [alumnos, setAlumnos] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;
    listarAlumnosConModelos()
      .then((data) => {
        if (activo) setAlumnos(data);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      });
    return () => {
      activo = false;
    };
  }, []);

  const total = todosLosConceptos().length;

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-start mb-6 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Panel admin</h1>
          <p className="text-slate-600 text-sm">
            Lista de alumnos y su avance
          </p>
        </div>
        <button
          onClick={onLogout}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          Cerrar sesión
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      {!alumnos && !error && (
        <p className="text-slate-500">Cargando alumnos...</p>
      )}

      {alumnos && alumnos.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-800">
            Todavía no hay alumnos registrados.
          </p>
        </div>
      )}

      {alumnos && alumnos.length > 0 && (
        <div className="space-y-2">
          {alumnos.map((a) => {
            const dominados = todosLosConceptos().filter(
              (c) => (a.modelos[c] || 0) >= 2
            ).length;
            const pct = Math.round((dominados / total) * 100);
            return (
              <button
                key={a.id}
                onClick={() => onVerAlumno(a)}
                className="w-full bg-white border border-slate-200 hover:border-blue-400 rounded-xl p-4 text-left flex justify-between items-center transition-colors"
              >
                <div>
                  <div className="font-semibold text-slate-800">
                    {a.nombre} {a.apellidos}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {a.quiz_completado
                      ? `${dominados} de ${total} conceptos dominados`
                      : "No ha completado el quiz"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-800">
                    {pct}%
                  </div>
                  <div className="text-xs text-slate-500">avance</div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
