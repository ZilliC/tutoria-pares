import { useMemo, useState } from "react";
import { DOMAIN } from "../data/quiz.js";
import SkillBar from "./SkillBar.jsx";

const COLOR_UNIDAD = {
  u2: "#fb923c", // orange-400 — Sistemas Operativos
  u3: "#3b82f6", // blue-500 — Redes
  u4: "#8b5cf6", // violet-500 — Lenguajes
};

const VB_W = 1400;
const VB_H = 540;

const NODE_W = 130;
const NODE_H = 64;
const UNIDAD_W = 170;
const UNIDAD_H = 64;
const ROOT_W = 200;
const ROOT_H = 64;

const Y_TEMA = 40;
const Y_UNIDAD = 260;
const Y_ROOT = 460;

const TEMA_CX = [70, 210, 350, 490, 630, 770, 910, 1050, 1190, 1330];

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
      x: cx - UNIDAD_W / 2,
      y: Y_UNIDAD,
      w: UNIDAD_W,
      h: UNIDAD_H,
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

// Parte el nombre en 1 o 2 líneas escogiendo el corte por palabra más cercano al medio.
function splitNombre(nombre, maxOneLine = 12) {
  if (nombre.length <= maxOneLine) return [nombre];
  const palabras = nombre.split(" ");
  if (palabras.length === 1) return [nombre];
  const total = nombre.length;
  let mejor = 1;
  let mejorDiff = Infinity;
  let acumulado = 0;
  for (let i = 0; i < palabras.length - 1; i++) {
    acumulado += palabras[i].length + 1; // +1 por el espacio
    const diff = Math.abs(acumulado - total / 2);
    if (diff < mejorDiff) {
      mejorDiff = diff;
      mejor = i + 1;
    }
  }
  const linea1 = palabras.slice(0, mejor).join(" ");
  const linea2 = palabras.slice(mejor).join(" ");
  return [linea1, linea2];
}

function NodoConFill({
  x,
  y,
  w,
  h,
  label,
  sublabel,
  color,
  pct,
  onClick,
  selected,
  chevron,
}) {
  const id = `clip-${Math.round(x)}-${Math.round(y)}`;
  const fillH = Math.max(0, Math.min(1, pct)) * h;
  const interactivo = !!onClick;
  const lineas = splitNombre(label);
  const cx = x + w / 2;
  const dosLineas = lineas.length === 2;
  // Layout vertical del texto dentro del nodo
  // Si una línea: nombre centrado un poco arriba del medio, % debajo
  // Si dos líneas: línea1, línea2, % — todo apilado
  const yNombre1 = dosLineas ? y + h / 2 - 12 : y + h / 2 - 2;
  const yNombre2 = y + h / 2 + 2;
  const ySub = dosLineas ? y + h / 2 + 18 : y + h / 2 + 14;

  return (
    <g onClick={onClick} style={{ cursor: interactivo ? "pointer" : "default" }}>
      <defs>
        <clipPath id={id}>
          <rect
            x={x}
            y={y + h - fillH}
            width={w}
            height={fillH}
            rx={12}
            ry={12}
          />
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
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        fill="#0f172a"
        style={{ pointerEvents: "none" }}
      >
        <tspan x={cx} y={yNombre1}>
          {lineas[0]}
        </tspan>
        {dosLineas && (
          <tspan x={cx} y={yNombre2}>
            {lineas[1]}
          </tspan>
        )}
      </text>
      <text
        x={cx}
        y={ySub}
        textAnchor="middle"
        fontSize={11}
        fill="#475569"
        style={{ pointerEvents: "none" }}
      >
        {sublabel}
      </text>
      {chevron && (
        <text
          x={x + w - 10}
          y={y + 14}
          textAnchor="end"
          fontSize={12}
          fill="#475569"
          style={{ pointerEvents: "none" }}
        >
          {chevron}
        </text>
      )}
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
          onClick={() => {
            if (expandido) setSeleccionado(null);
            setExpandido((v) => !v);
          }}
          className="text-xs px-3 py-1 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 whitespace-nowrap"
        >
          {expandido ? "Colapsar" : "Expandir"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          {/* Líneas raíz → unidades (siempre visibles) */}
          {LAYOUT.unidades.map((u) => (
            <line
              key={`l-root-${u.id}`}
              x1={rootCx}
              y1={Y_ROOT}
              x2={u.cx}
              y2={Y_UNIDAD + UNIDAD_H}
              stroke="#cbd5e1"
              strokeWidth={2}
            />
          ))}

          {/* Líneas y nodos de tema (ocultos si colapsado) */}
          <g
            style={{
              opacity: expandido ? 1 : 0,
              transform: expandido ? "scale(1)" : "scale(0.95)",
              transformOrigin: "center top",
              transition: "opacity 200ms ease, transform 200ms ease",
              pointerEvents: expandido ? "auto" : "none",
            }}
          >
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

          {/* Nodos de unidad (no clickeables) */}
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
