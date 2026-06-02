# Tutoría entre Pares

Aplicación web para evaluar el nivel de dominio de conceptos de computación en estudiantes de licenciatura y conectarlos con pares que puedan enseñarles lo que aún no dominan.

## ¿Qué hace?

1. **Onboarding** — el alumno indica qué temas conoce (Sistemas Operativos, Redes, Lenguajes de Programación).
2. **Quiz adaptativo** — para cada concepto declarado, dos preguntas en cadena miden el nivel real de dominio (0–3).
3. **Skill tree** — vista personal del avance por unidad y tema, con opción de re-evaluarse en cualquier momento.
4. **Matches** — el sistema cruza los modelos de todos los alumnos y sugiere parejas donde el "gap" de conocimiento es complementario: uno puede enseñar lo que el otro aún no domina.
5. **Leaderboard** — ranking de avance colectivo por unidad.
6. **Admin** — portal para gestionar alumnos, ver su skill tree, buscarles matches y resetear su progreso.

## Niveles de dominio

| Nivel | Significado |
|-------|-------------|
| 3 | Lo puede enseñar |
| 2 | Lo entiende |
| 1 | Lo reconoce |
| 0 | No lo conoce |

El quiz evalúa cada concepto con dos preguntas:
- **P1** — identificación por escenario (4 opciones + "No sé"). Si el alumno elige la opción de nivel 3, pasa a P2.
- **P2** — pregunta de profundidad binaria que confirma si el dominio es real (nivel 3) o superficial (nivel 2).

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 + Vite |
| Estilos | Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL + Auth) |

## Estructura del proyecto

```
src/
├── data/
│   └── quiz.js          # Dominio (unidades/temas/conceptos) y banco de preguntas
├── lib/
│   └── supabase.js      # Cliente y helpers de base de datos
├── pages/
│   ├── Login.jsx
│   ├── Onboarding.jsx
│   ├── Quiz.jsx
│   ├── SkillTree.jsx
│   ├── Matches.jsx
│   ├── Leaderboard.jsx
│   └── Admin.jsx
└── components/
    ├── Accordion.jsx
    ├── ProgressRing.jsx
    ├── SkillBar.jsx
    └── SkillTreeVisual.jsx
```

## Setup local

### 1. Clonar e instalar dependencias

```bash
git clone https://github.com/ZilliC/tutoria-pares.git
cd tutoria-pares
npm install
```

### 2. Variables de entorno

Copia `.env.example` a `.env` y llena los valores con tu proyecto de Supabase:

```bash
cp .env.example .env
```

```env
VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
VITE_SUPABASE_ANON_KEY=<tu-anon-key>
```

### 3. Base de datos (Supabase)

Crea las siguientes tablas en tu proyecto de Supabase:

```sql
-- Usuarios (alumnos y admin)
create table usuarios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  apellidos text not null,
  rol text not null default 'alumno',   -- 'alumno' | 'admin'
  quiz_completado boolean not null default false,
  creado_en timestamptz default now()
);

-- Modelos de conocimiento
create table modelos (
  id uuid primary key default gen_random_uuid(),
  usuario_id uuid references usuarios(id) on delete cascade,
  concepto text not null,
  nivel integer not null default 0,     -- 0..3
  actualizado_en timestamptz default now(),
  unique(usuario_id, concepto)
);
```

### 4. Levantar en desarrollo

```bash
npm run dev
```

La app estará en `http://localhost:5173`.

## Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Agregar o editar preguntas

Todo el banco de preguntas vive en `src/data/quiz.js`. Cada concepto tiene la forma:

```js
NombreConcepto: {
  p1: {
    pregunta: "...",
    opciones: [
      { id: "a", texto: "...", nivel: 3 },  // correcta y precisa
      { id: "b", texto: "...", nivel: 2 },  // correcta con imprecisión
      { id: "c", texto: "...", nivel: 1 },  // confusión con concepto hermano
      { id: "d", texto: "...", nivel: 0 },  // modelo mental erróneo
      { id: "no_se", texto: "No sé", nivel: 0 },
    ],
  },
  p2: {
    pregunta: "...",
    opciones: [
      { id: "a", texto: "...", correcto: true },
      { id: "b", texto: "...", correcto: false },
    ],
  },
}
```

Las opciones se barajan automáticamente en tiempo de ejecución para evitar sesgo de posición.

## Versión actual

**Alpha 1.1.3**
