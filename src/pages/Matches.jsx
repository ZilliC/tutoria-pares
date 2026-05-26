import { useEffect, useState } from "react";
import { DOMAIN } from "../data/quiz.js";
import { listarAlumnosConModelos, obtenerModelos } from "../lib/supabase.js";
import Accordion from "../components/Accordion.jsx";

function conceptoToUnidad(concepto) {
  for (const u of DOMAIN.unidades) {
    for (const t of u.temas) {
      if (t.conceptos.includes(concepto))
        return { unidad: u.nombre, tema: t.nombre };
    }
  }
  return { unidad: "?", tema: "?" };
}

function agruparPorUnidad(conceptos) {
  const grupos = {};
  for (const c of conceptos) {
    const { unidad } = conceptoToUnidad(c);
    if (!grupos[unidad]) grupos[unidad] = [];
    grupos[unidad].push(c);
  }
  return grupos;
}

export default function Matches({
  usuarioActual,
  targetUser,
  modoAdmin = false,
  onVolver,
  onLogout,
}) {
  const user = targetUser || usuarioActual;
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;
    (async () => {
      try {
        const [miModelo, todos] = await Promise.all([
          obtenerModelos(user.id),
          listarAlumnosConModelos(),
        ]);
        if (!activo) return;
        const candidatos = todos.filter(
          (a) => a.id !== user.id && a.quiz_completado
        );
        const calc = candidatos.map((peer) => {
          const meEnsena = [];
          const yoEnseno = [];
          for (const c of Object.keys(miModelo)) {
            const mi = miModelo[c] || 0;
            const pe = peer.modelos[c] || 0;
            if (pe >= 3 && mi <= 1) meEnsena.push(c);
            if (mi >= 3 && pe <= 1) yoEnseno.push(c);
          }
          const unicos = new Set([...meEnsena, ...yoEnseno]);
          return {
            peer,
            score: unicos.size,
            meEnsena,
            yoEnseno,
          };
        });
        calc.sort((a, b) => {
          if (b.score !== a.score) return b.score - a.score;
          return a.peer.apellidos.localeCompare(b.peer.apellidos);
        });
        setMatches(calc.filter((m) => m.score > 0));
      } catch (err) {
        if (activo) setError(err.message);
      }
    })();
    return () => {
      activo = false;
    };
  }, [user.id]);

  return (
    <div className="min-h-screen p-4 sm:p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-start mb-4 gap-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Matches de tutoría
          </h1>
          <p className="text-slate-600 text-sm">
            {modoAdmin
              ? `Para: ${user.nombre} ${user.apellidos}`
              : "Compañeros complementarios"}
          </p>
        </div>
        <button
          onClick={onVolver}
          className="text-sm text-slate-500 hover:text-slate-700 whitespace-nowrap"
        >
          ← Regresar
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm">
          {error}
        </div>
      )}

      {!matches && !error && (
        <p className="text-slate-500">Buscando compañeros...</p>
      )}

      {matches && matches.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-800 font-medium">
            No encontramos compañeros complementarios aún. Esto mejora
            conforme más alumnos completen su perfil.
          </p>
        </div>
      )}

      {matches && matches.length > 0 && (
        <div className="space-y-3">
          {matches.map((m) => (
            <div
              key={m.peer.id}
              className="bg-white rounded-xl border border-slate-200 p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-slate-800">
                  {m.peer.nombre} {m.peer.apellidos}
                </h2>
                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {m.score} {m.score === 1 ? "tema" : "temas"} en común
                </span>
              </div>

              <ListaDesglose
                titulo={`${m.meEnsena.length} temas donde te puede ayudar`}
                conceptos={m.meEnsena}
                color="bg-green-50"
              />
              <ListaDesglose
                titulo={`${m.yoEnseno.length} temas donde tú le puedes ayudar`}
                conceptos={m.yoEnseno}
                color="bg-blue-50"
              />
            </div>
          ))}
        </div>
      )}

      {!modoAdmin && (
        <button
          onClick={onLogout}
          className="w-full mt-6 text-slate-500 text-sm py-2"
        >
          Cerrar sesión
        </button>
      )}
    </div>
  );
}

function ListaDesglose({ titulo, conceptos, color }) {
  if (conceptos.length === 0) return null;
  const grupos = agruparPorUnidad(conceptos);
  return (
    <Accordion titulo={titulo} color={color}>
      <div className="space-y-2">
        {Object.entries(grupos).map(([unidad, lista]) => (
          <div key={unidad}>
            <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">
              {unidad}
            </div>
            <div className="flex flex-wrap gap-1">
              {lista.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-white border border-slate-200 px-2 py-1 rounded-full text-slate-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  );
}
