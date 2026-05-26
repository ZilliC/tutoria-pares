import { useState } from "react";

export default function Accordion({ titulo, subtitulo, color, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white mb-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full text-left px-4 py-3 flex justify-between items-center ${color || "bg-white"} hover:brightness-95`}
      >
        <div>
          <div className="font-semibold text-slate-800">{titulo}</div>
          {subtitulo && (
            <div className="text-xs text-slate-600 mt-0.5">{subtitulo}</div>
          )}
        </div>
        <span className="text-slate-500 text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-4 py-3 border-t border-slate-200">{children}</div>}
    </div>
  );
}
