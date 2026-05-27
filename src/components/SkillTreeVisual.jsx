import { useMemo, useState } from "react";
import { DOMAIN } from "../data/quiz.js";
import SkillBar from "./SkillBar.jsx";

const COLOR_UNIDAD = {
  u2: "#fb923c", // orange-400 — Sistemas Operativos
  u3: "#3b82f6", // blue-500 — Redes
  u4: "#8b5cf6", // violet-500 — Lenguajes
};

const VB_W = 1200;
const VB_H = 520;

const NODE_W = 110;
const NODE_H = 56;
const ROOT_W = 180;
const ROOT_H = 60;

const Y_TEMA = 40;
const Y_UNIDAD = 240;
const Y_ROOT = 440;

// Centros x precomputados — 10 temas equiespaciados
const TEMA_CX = [60, 180, 300, 420, 540, 660, 780, 900, 1020, 1140];

function construirLayout() {
  let i = 0;
  const temas = [];
  const unidades = [];
  for (const u of DOMAIN.unidades) {
    const grupo = u.temas.map((t) => {
      const cx = TEMA_CX[i++];
      return { ...t, unidadId: u.id, cx, x: cx - NODE_W / 2, y: Y_TEMA };
    });
    temas.push(...grupo);
    const cx = grupo.reduce((s, g) => s + g.cx, 0) / grupo.length;
    unidades.push({
      id: u.id,
      nombre: u.nombre,
      conceptos: u.temas.flatMap((t) => t.conceptos),
      cx,
      x: cx - 140 / 2,
      y: Y_UNIDAD,
      w: 140,
      h: NODE_H,
      color: COLOR_UNIDAD[u.id],
    });
  }
  return { temas, unidades };
}

const LAYOUT = construirLayout();

function pctTema(t, modelos) {
  const dominados = t.conceptos.filter((c) => (modelos[c] || 0) >= 2).length;
  return dominados / t.conceptos.length;
}

function pctUnidad(u, modelos) {
  const dominados = u.conceptos.filter((c) => (modelos[c] || 0) >= 2).length;
  return dominados / u.conceptos.length;
}

function NodoConFill({ x, y, w, h, label, sublabel, color, pct, onClick, selected }) {
  const id = `clip-${Math.round(x)}-${Math.round(y)}`;
  const fillH = Math.max(0, Math.min(1, pct)) * h;
  const interactivo = !!onClick;
  return (
    <g onClick={onClick} style={{ cursor: interactivo ? "pointer" : "default" }}>
      <defs>
        <clipPath id={id}>
          <rect x={x} y={y + h - fillH} width={w} height={fillH} rx={12} ry={12} />
        </clipPath>
      </defs>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill="#f1f5f9"
        stroke={selected ? "#1e293b" : "#cbd5e1"}
        strokeWidth={selected ? 2.5 : 1.5}
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={color}
        clipPath={`url(#${id})`}
        opacity={0.85}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 2}
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        fill="#0f172a"
        style={{ pointerEvents: "none" }}
      >
        {label}
      </text>
      <text
        x={x + w / 2}
        y={y + h / 2 + 14}
        textAnchor="middle"
        fontSize={11}
        fill="#475569"
        style={{ pointerEvents: "none" }}
      >
        {sublabel}
      </text>
    </g>
  );
}

export default function SkillTreeVisual({
  modelos,
  nombreAlumno,
  modoAdmin = false,
  onEvaluarTema,
  onEvaluarConcepto,
}) {
  const [seleccionado, setSeleccionado] = useState(null);
  const [expandido, setExpandido] = useState(true);

  const temaSel = useMemo(
    () => LAYOUT.temas.find((t) => t.id === seleccionado) || null,
    [seleccionado]
  );

  const rootCx = VB_W / 2;
  const rootX = rootCx - ROOT_W / 2;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4">
      <div className="flex justify-between items-center mb-2 gap-2">
        <div className="text-xs text-slate-500">
          Toca un tema para ver sus conceptos
        </div>
        <button
          type="button"
          onClick={() => setExpandido(!expandido)}
          className="text-xs px-3 py-1 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 whitespace-nowrap"
        >
          {expandido ? "Colapsar" : "Expandir"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", minWidth: 700, height: "auto", display: "block" }}
        >
          {/* Líneas raíz → unidades (siempre visibles) */}
          {LAYOUT.unidades.map((u) => (
            <line
              key={`l-root-${u.id}`}
              x1={rootCx}
              y1={Y_ROOT}
              x2={u.cx}
              y2={Y_UNIDAD + NODE_H}
              stroke="#cbd5e1"
              strokeWidth={2}
            />
          ))}

          {/* Grupo nivel 3 (colapsable) */}
          <g
            style={{
              opacity: expandido ? 1 : 0,
              transform: expandido ? "scale(1)" : "scale(0.95)",
              transformOrigin: `${VB_W / 2}px ${Y_TEMA + NODE_H / 2}px`,
              transition: "opacity 220ms ease, transform 220ms ease",
              pointerEvents: expandido ? "auto" : "none",
            }}
          >
            {/* Líneas unidad → temas */}
            {LAYOUT.temas.map((t) => {
              const u = LAYOUT.unidades.find((x) => x.id === t.unidadId);
              return (
                <line
                  key={`l-tema-${t.id}`}
                  x1={u.cx}
                  y1={Y_UNIDAD}
                  x2={t.cx}
                  y2={Y_TEMA + NODE_H}
                  stroke="#cbd5e1"
                  strokeWidth={2}
                />
              );
            })}

            {/* Nodos de tema */}
            {LAYOUT.temas.map((t) => {
              const pct = pctTema(t, modelos);
              const color = COLOR_UNIDAD[t.unidadId];
              return (
                <NodoConFill
                  key={t.id}
                  x={t.x}
                  y={t.y}
                  w={NODE_W}
                  h={NODE_H}
                  label={t.nombre}
                  sublabel={`${Math.round(pct * 100)}%`}
                  color={color}
                  pct={pct}
                  selected={seleccionado === t.id}
                  onClick={() =>
                    setSeleccionado(seleccionado === t.id ? null : t.id)
                  }
                />
              );
            })}
          </g>

          {/* Nodos de unidad */}
          {LAYOUT.unidades.map((u) => {
            const pct = pctUnidad(u, modelos);
            return (
              <NodoConFill
                key={u.id}
                x={u.x}
                y={u.y}
                w={u.w}
                h={u.h}
                label={u.nombre}
                sublabel={`${Math.round(pct * 100)}%`}
                color={u.color}
                pct={pct}
              />
            );
          })}

          {/* Nodo raíz (alumno) */}
          <g>
            <rect
              x={rootX}
              y={Y_ROOT}
              width={ROOT_W}
              height={ROOT_H}
              rx={14}
              fill="#e2e8f0"
              stroke="#94a3b8"
              strokeWidth={1.5}
            />
            <text
              x={rootCx}
              y={Y_ROOT + ROOT_H / 2 - 2}
              textAnchor="middle"
              fontSize={13}
              fontWeight={700}
              fill="#0f172a"
            >
              {nombreAlumno}
            </text>
            <text
              x={rootCx}
              y={Y_ROOT + ROOT_H / 2 + 14}
              textAnchor="middle"
              fontSize={11}
              fill="#475569"
            >
              alumno
            </text>
          </g>
        </svg>
      </div>

      {temaSel && (
        <div className="mt-4 border border-slate-200 rounded-xl p-4 bg-slate-50">
          <div className="flex justify-between items-start gap-2 mb-3">
            <div>
              <div
                className="text-xs uppercase tracking-wide font-semibold"
                style={{ color: COLOR_UNIDAD[temaSel.unidadId] }}
              >
                {
                  DOMAIN.unidades.find((u) => u.id === temaSel.unidadId)
                    .nombre
                }
              </div>
              <h4 className="text-lg font-bold text-slate-800">
                {temaSel.nombre}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              {!modoAdmin && onEvaluarTema && (
                <button
                  type="button"
                  onClick={() => onEvaluarTema(temaSel.conceptos)}
                  className="text-xs px-3 py-1 rounded-full border border-blue-400 text-blue-700 hover:bg-blue-50 whitespace-nowrap"
                >
                  Evaluar tema
                </button>
              )}
              <button
                type="button"
                onClick={() => setSeleccionado(null)}
                className="text-slate-400 hover:text-slate-700 text-lg leading-none"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
          </div>
          <div>
            {temaSel.conceptos.map((c) => (
              <SkillBar
                key={c}
                concepto={c}
                nivel={modelos[c] || 0}
                onEvaluar={
                  !modoAdmin && onEvaluarConcepto
                    ? () => onEvaluarConcepto(c)
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
