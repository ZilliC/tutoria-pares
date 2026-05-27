import { useState } from "react";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Quiz from "./pages/Quiz.jsx";
import SkillTree from "./pages/SkillTree.jsx";
import Matches from "./pages/Matches.jsx";
import Admin from "./pages/Admin.jsx";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [pagina, setPagina] = useState("login");
  const [conocidos, setConocidos] = useState([]);
  const [targetUser, setTargetUser] = useState(null);
  const [conceptosAEvaluar, setConceptosAEvaluar] = useState([]);

  function logout() {
    setUsuario(null);
    setTargetUser(null);
    setPagina("login");
  }

  function handleLogin(u) {
    setUsuario(u);
    if (u.rol === "admin") {
      setPagina("admin");
    } else if (u.quiz_completado) {
      setPagina("skilltree");
    } else {
      setPagina("onboarding");
    }
  }

  if (pagina === "login" || !usuario) {
    return <Login onLogin={handleLogin} />;
  }

  if (pagina === "onboarding") {
    return (
      <Onboarding
        usuario={usuario}
        onLogout={logout}
        onContinuar={(lista) => {
          setConocidos(lista);
          setPagina("quiz");
        }}
      />
    );
  }

  if (pagina === "quiz") {
    return (
      <Quiz
        usuario={usuario}
        conocidos={conocidos}
        onLogout={logout}
        onCompletar={() => {
          setUsuario({ ...usuario, quiz_completado: true });
          setPagina("skilltree");
        }}
      />
    );
  }

  if (pagina === "skilltree") {
    return (
      <SkillTree
        usuarioActual={usuario}
        onLogout={logout}
        onBuscarMatch={() => setPagina("matches")}
        onReevaluar={(conceptos) => {
          setConceptosAEvaluar(conceptos);
          setPagina("quiz-reeval");
        }}
      />
    );
  }

  if (pagina === "quiz-reeval") {
    return (
      <Quiz
        usuario={usuario}
        conocidos={conceptosAEvaluar}
        modoReeval
        onLogout={logout}
        onCompletar={() => {
          setConceptosAEvaluar([]);
          setPagina("skilltree");
        }}
      />
    );
  }

  if (pagina === "matches") {
    return (
      <Matches
        usuarioActual={usuario}
        onLogout={logout}
        onVolver={() => setPagina("skilltree")}
      />
    );
  }

  if (pagina === "admin") {
    return (
      <Admin
        onLogout={logout}
        onVerAlumno={(a) => {
          setTargetUser(a);
          setPagina("admin-skilltree");
        }}
      />
    );
  }

  if (pagina === "admin-skilltree") {
    return (
      <SkillTree
        usuarioActual={usuario}
        targetUser={targetUser}
        modoAdmin
        onVolverAdmin={() => {
          setTargetUser(null);
          setPagina("admin");
        }}
        onBuscarMatch={() => setPagina("admin-matches")}
      />
    );
  }

  if (pagina === "admin-matches") {
    return (
      <Matches
        usuarioActual={usuario}
        targetUser={targetUser}
        modoAdmin
        onVolver={() => setPagina("admin-skilltree")}
      />
    );
  }

  return null;
}
