import { useState } from "react";
import { DOMAIN } from "../data/quiz.js";

export default function Onboarding({ usuario, onContinuar, onLogout }) {
  const [conocidos, setConocidos] = useState(new Set());
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);

  function toggle(concepto) {
    const next = new Set(conocidos);
    if (next.has(concepto)) next.delete(concepto);
    else next.add(concepto);
    setConocidos(next);
  }

  function handleContinuar() {
    if (conocidos.size === 0) {
      setMostrarAdvertencia(true);
      return;
    }
    onContinuar(Array.from(conocidos));
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Hola, {usuario.nombre}
          </h1>
          <p className="text-slate-600 text-sm">
            Marca los conceptos que conoces. Sé honesto: si no lo conoces,
            déjalo apagado.
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
            <div className="space-y-4">
              {u.temas.map((t) => (
                <div key={t.id}>
                  <h3 className="text-sm font-medium text-slate-600 mb-2">
                    {t.nombre}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.conceptos.map((c) => {
                      const activo = conocidos.has(c);
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggle(c)}
                          className={`text-left px-3 py-2 rounded-lg border transition-all ${
                            activo
                              ? "bg-blue-50 border-blue-400 text-blue-800"
                              : "bg-white border-slate-200 text-slate-600"
                          }`}
                        >
                          <span className="text-xs mr-2">
                            {activo ? "✓" : "○"}
                          </span>
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">
              {conocidos.size}
            </span>{" "}
            conceptos marcados
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
              No marcaste ningún concepto. Tu perfil quedará en nivel 0
              para todos los temas. Puedes continuar o regresar a marcar
              los que sí conoces.
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
