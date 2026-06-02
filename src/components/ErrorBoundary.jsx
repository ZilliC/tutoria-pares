import { Component } from "react";

// Captura errores de render no manejados y muestra un fallback en vez de
// dejar la pantalla en blanco. Envuelve a <App /> en main.jsx.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error no capturado en la UI:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Algo salió mal
          </h2>
          <p className="text-slate-600 mb-6 text-sm">
            Ocurrió un error inesperado. Recarga la página para volver a
            intentarlo; si el problema persiste, avisa al responsable.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Recargar
          </button>
        </div>
      </div>
    );
  }
}
