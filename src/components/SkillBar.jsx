const COLORES = {
  0: "bg-gray-300",
  1: "bg-red-400",
  2: "bg-yellow-400",
  3: "bg-green-500",
};

const ETIQUETAS = {
  0: "No lo conoce",
  1: "Lo reconoce",
  2: "Lo entiende",
  3: "Puede enseñarlo",
};

export default function SkillBar({ concepto, nivel, onEvaluar }) {
  const pct = (nivel / 3) * 100;
  return (
    <div className="py-2">
      <div className="flex justify-between items-center text-sm mb-1 gap-2">
        <span className="font-medium text-slate-700">{concepto}</span>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-xs">{ETIQUETAS[nivel]}</span>
          {onEvaluar && (
            <button
              type="button"
              onClick={onEvaluar}
              className="text-xs px-2 py-0.5 rounded-full border border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              Evaluar
            </button>
          )}
        </div>
      </div>
      <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${COLORES[nivel]} transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export function colorPorNivel(nivel) {
  return COLORES[Math.round(nivel)] || COLORES[0];
}
