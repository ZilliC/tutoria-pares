import { useState } from "react";
import { loginUsuario, crearUsuario } from "../lib/supabase.js";

export default function Login({ onLogin }) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [estado, setEstado] = useState("inicio");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleEntrar(e) {
    e.preventDefault();
    setError("");
    if (!nombre.trim() || !apellidos.trim()) {
      setError("Captura tu nombre y apellidos");
      return;
    }
    setCargando(true);
    try {
      const usuario = await loginUsuario(nombre, apellidos);
      if (usuario) {
        onLogin(usuario);
      } else {
        setEstado("no_encontrado");
      }
    } catch (err) {
      setError("Error al consultar la base de datos: " + err.message);
    } finally {
      setCargando(false);
    }
  }

  async function handleCrear() {
    setError("");
    setCargando(true);
    try {
      const usuario = await crearUsuario(nombre, apellidos);
      onLogin(usuario);
    } catch (err) {
      setError("No se pudo crear la cuenta: " + err.message);
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          Tutoría entre pares
        </h1>
        <p className="text-slate-500 mb-6 text-sm">
          Informática · FCA-UNAM
        </p>

        <form onSubmit={handleEntrar} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nombre(s)
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Apellidos
            </label>
            <input
              type="text"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
              {error}
            </div>
          )}

          {estado === "no_encontrado" ? (
            <div className="space-y-3">
              <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3">
                No encontramos tu usuario. ¿Quieres crear una cuenta nueva
                con estos datos?
              </div>
              <button
                type="button"
                onClick={handleCrear}
                disabled={cargando}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
              >
                {cargando ? "Creando..." : "Crear cuenta"}
              </button>
              <button
                type="button"
                onClick={() => setEstado("inicio")}
                className="w-full text-slate-500 text-sm py-2"
              >
                Volver
              </button>
            </div>
          ) : (
            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
            >
              {cargando ? "Entrando..." : "Entrar"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
