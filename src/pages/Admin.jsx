import { useEffect, useState } from "react";
import {
  listarAlumnosConModelos,
  todosLosConceptos,
  eliminarAlumno,
  resetearProgresoAlumno,
} from "../lib/supabase.js";

export default function Admin({ onVerAlumno, onLogout, onVerLeaderboard }) {
  const [alumnos, setAlumnos] = useState(null);
  const [error, setError] = useState("");
  const [aEliminar, setAEliminar] = useState(null);
  const [eliminando, setEliminando] = useState(false);
  const [aResetear, setAResetear] = useState(null);
  const [reseteando, setReseteando] = useState(false);

  async function cargar() {
    try {
      const data = await listarAlumnosConModelos();
      setAlumnos(data);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    cargar();
  }, []);

  async function confirmarEliminar() {
    if (!aEliminar) return;
    setEliminando(true);
    setError("");
    try {
      await eliminarAlumno(aEliminar.id);
      setAlumnos((prev) => prev.filter((a) => a.id !== aEliminar.id));
      setAEliminar(null);
    } catch (e) {
      setError("No se pudo eliminar: " + e.message);
    } finally {
      setEliminando(false);
    }
  }

  async function confirmarResetear() {
    if (!aResetear) return;
    setReseteando(true);
    setError("");
    try {
      await resetearProgresoAlumno(aResetear.id);
      setAlumnos((prev) =>
        prev.map((a) => {
          if (a.id === aResetear.id) {
            const modelosReset = {};
            for (const c of todosLosConceptos()) modelosReset[c] = 0;
            return { ...a, quiz_completado: false, modelos: modelosReset };
          }
          return a;
        })
      );
      setAResetear(null);
    } catch (e) {
      setError("No se pudo resetear el progreso: " + e.message);
    } finally {
      setReseteando(false);
    }
  }

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
        <div className="flex items-center gap-3">
          {onVerLeaderboard && (
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
            onClick={onLogout}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Cerrar sesión
          </button>
        </div>
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
              <div
                key={a.id}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-xl flex items-center transition-colors"
              >
                <button
                  type="button"
                  onClick={() => onVerAlumno(a)}
                  className="flex-1 text-left p-4 flex justify-between items-center"
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
                <button
                  type="button"
                  onClick={() => setAResetear(a)}
                  className="text-xs px-3 py-1 mr-2 rounded-full border border-amber-300 text-amber-700 hover:bg-amber-50 whitespace-nowrap"
                >
                  Resetear
                </button>
                <button
                  type="button"
                  onClick={() => setAEliminar(a)}
                  className="text-xs px-3 py-1 mr-3 rounded-full border border-red-300 text-red-700 hover:bg-red-50 whitespace-nowrap"
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </div>
      )}

      {aEliminar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Eliminar alumno
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              ¿Estás seguro de que quieres eliminar a{" "}
              <strong>
                {aEliminar.nombre} {aEliminar.apellidos}
              </strong>
              ? Esta acción no se puede deshacer.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAEliminar(null)}
                disabled={eliminando}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarEliminar}
                disabled={eliminando}
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold disabled:opacity-50"
              >
                {eliminando ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {aResetear && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Resetear progreso
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              ¿Estás seguro de que quieres resetear el progreso de{" "}
              <strong>
                {aResetear.nombre} {aResetear.apellidos}
              </strong>
              ? Esto eliminará todas las respuestas del quiz y el avance del alumno, permitiéndole realizar la evaluación desde cero.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAResetear(null)}
                disabled={reseteando}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarResetear}
                disabled={reseteando}
                className="flex-1 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold disabled:opacity-50"
              >
                {reseteando ? "Reseteando..." : "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
