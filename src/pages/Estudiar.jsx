import { useEffect, useRef, useState } from "react";
import { tutorIntroduccion, tutorResponder } from "../lib/tutor.js";

// Pantalla de estudio con tutor LLM: introducción automática al tema + chat de dudas.
// Props: { usuario, tema: { nombre, conceptos, niveles }, onVolver, onLogout }
export default function Estudiar({ usuario, tema, onVolver, onLogout }) {
  const [mensajes, setMensajes] = useState([]); // [{ rol: "user" | "model", texto }]
  const [entrada, setEntrada] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const finRef = useRef(null);

  // Cargar la introducción al montar.
  useEffect(() => {
    let activo = true;
    setCargando(true);
    setError("");
    tutorIntroduccion(tema, tema.niveles)
      .then((texto) => {
        if (activo) setMensajes([{ rol: "model", texto }]);
      })
      .catch((e) => {
        if (activo) setError(e.message);
      })
      .finally(() => {
        if (activo) setCargando(false);
      });
    return () => {
      activo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tema.nombre]);

  // Auto-scroll al último mensaje.
  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes, cargando]);

  async function enviar(e) {
    e.preventDefault();
    const texto = entrada.trim();
    if (!texto || cargando) return;

    const historial = [...mensajes, { rol: "user", texto }];
    setMensajes(historial);
    setEntrada("");
    setCargando(true);
    setError("");
    try {
      const respuesta = await tutorResponder(tema, tema.niveles, historial);
      setMensajes([...historial, { rol: "model", texto: respuesta }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-2xl mx-auto flex flex-col">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-3 gap-2">
        <button
          onClick={onVolver}
          className="text-sm text-slate-500 hover:text-slate-700 whitespace-nowrap"
        >
          ← Volver
        </button>
        <button
          onClick={onLogout}
          className="text-sm text-slate-500 hover:text-slate-700 whitespace-nowrap"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="mb-3">
        <p className="text-xs uppercase tracking-wide font-semibold text-green-700">
          Estudiar
        </p>
        <h1 className="text-2xl font-bold text-slate-800">{tema.nombre}</h1>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tema.conceptos.map((c) => (
            <span
              key={c}
              className="text-xs px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Conversación */}
      <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 mb-3 space-y-3 overflow-y-auto min-h-[40vh]">
        {mensajes.length === 0 && cargando && (
          <p className="text-slate-500 text-sm">
            El tutor está preparando tu introducción…
          </p>
        )}

        {mensajes.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.rol === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                m.rol === "user"
                  ? "bg-blue-600 text-white rounded-br-sm"
                  : "bg-slate-100 text-slate-800 rounded-bl-sm"
              }`}
            >
              {m.texto}
            </div>
          </div>
        ))}

        {mensajes.length > 0 && cargando && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-500 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">
              El tutor está escribiendo…
            </div>
          </div>
        )}

        <div ref={finRef} />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-3">
          {error}
        </div>
      )}

      {/* Caja de pregunta */}
      <form onSubmit={enviar} className="flex gap-2">
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Escribe tu duda sobre el tema…"
          disabled={cargando}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-slate-50"
        />
        <button
          type="submit"
          disabled={cargando || !entrada.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-5 py-2.5 rounded-lg text-sm whitespace-nowrap"
        >
          Preguntar
        </button>
      </form>
    </div>
  );
}
