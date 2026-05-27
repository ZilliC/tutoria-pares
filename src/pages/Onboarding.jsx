import { useState } from "react";
import { DOMAIN } from "../data/quiz.js";

export default function Onboarding({ usuario, onContinuar, onLogout }) {
  const [conocidos, setConocidos] = useState(new Set());
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);

  function toggleTema(t) {
    const next = new Set(conocidos);
    const todosSeleccionados = t.conceptos.every((c) => next.has(c));
    if (todosSeleccionados) {
      // Deseleccionar todos los conceptos de este tema
      t.conceptos.forEach((c) => next.delete(c));
    } else {
      // Seleccionar todos los conceptos de este tema
      t.conceptos.forEach((c) => next.add(c));
    }
    setConocidos(next);
  }

  function handleContinuar() {
    if (conocidos.size === 0) {
      setMostrarAdvertencia(true);
      return;
    }
    onContinuar(Array.from(conocidos));
  }

  const totalTemas = DOMAIN.unidades.flatMap((u) => u.temas).length;
  const temasSeleccionados = DOMAIN.unidades
    .flatMap((u) => u.temas)
    .filter((t) => t.conceptos.every((c) => conocidos.has(c))).length;

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Hola, {usuario.nombre}
          </h1>
          <p className="text-slate-600 text-sm">
            Marca las áreas o temas que conoces. Los conceptos incluidos se muestran como referencia. Sé honesto: si no los dominas, déjalos apagados.
          </p>
        </div>
        <button
          onClick={onLogout}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="space-y-4 mb-24">
        {DOMAIN.unidades.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-xl border border-slate-200 p-4"
          >
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
              {u.nombre}
            </h2>
            <div className="space-y-2">
              {u.temas.map((t) => {
                const activo = t.conceptos.every((c) => conocidos.has(c));
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => toggleTema(t)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      activo
                        ? "bg-blue-50 border-blue-400 text-blue-900 shadow-sm"
                        : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-sm sm:text-base flex items-center">
                        <span
                          className={`w-4 h-4 mr-2.5 rounded border flex items-center justify-center text-xs transition-colors ${
                            activo
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {activo && "✓"}
                        </span>
                        {t.nombre}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 pl-6">
                        Conceptos incluidos:{" "}
                        <span className="font-medium text-slate-600">
                          {t.conceptos.join(", ")}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">
              {temasSeleccionados}
            </span>{" "}
            de {totalTemas} temas marcados ({conocidos.size} conceptos)
          </div>
          <button
            onClick={handleContinuar}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg"
          >
            Continuar al quiz
          </button>
        </div>
      </div>

      {mostrarAdvertencia && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-10">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              ¿Saltar el quiz?
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              No marcaste ningún tema. Tu perfil quedará en nivel 0 para todos
              los conceptos. Puedes continuar o regresar a marcar los temas que
              sí conoces.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setMostrarAdvertencia(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700"
              >
                Regresar
              </button>
              <button
                onClick={() => onContinuar([])}
                className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              >
                Continuar igual
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
