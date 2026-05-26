export default function ProgressRing({ value, total, size = 96, label = "dominados" }) {
  const pct = total > 0 ? value / total : 0;
  const r = size / 2 - 8;
  const c = 2 * Math.PI * r;
  const dash = c * pct;
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="8"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#22c55e"
          strokeWidth="8"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="round"
        />
      </svg>
      <div>
        <div className="text-2xl font-bold text-slate-800">
          {Math.round(pct * 100)}%
        </div>
        <div className="text-xs text-slate-500">
          {value} de {total} {label}
        </div>
      </div>
    </div>
  );
}
