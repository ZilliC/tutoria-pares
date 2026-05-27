import { createClient } from "@supabase/supabase-js";
import { DOMAIN } from "../data/quiz.js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key);

export function normalize(str) {
  return (str || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function todosLosConceptos() {
  const out = [];
  for (const u of DOMAIN.unidades) {
    for (const t of u.temas) {
      for (const c of t.conceptos) out.push(c);
    }
  }
  return out;
}

export async function loginUsuario(nombre, apellidos) {
  const { data, error } = await supabase.from("usuarios").select("*");
  if (error) throw error;
  const n = normalize(nombre);
  const a = normalize(apellidos);
  return (
    data.find(
      (u) => normalize(u.nombre) === n && normalize(u.apellidos) === a
    ) || null
  );
}

export async function crearUsuario(nombre, apellidos) {
  const { data, error } = await supabase
    .from("usuarios")
    .insert({ nombre: nombre.trim(), apellidos: apellidos.trim() })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function guardarModelos(usuarioId, modelos) {
  const rows = modelos.map((m) => ({
    usuario_id: usuarioId,
    concepto: m.concepto,
    nivel: m.nivel,
    actualizado_en: new Date().toISOString(),
  }));
  const { error } = await supabase
    .from("modelos")
    .upsert(rows, { onConflict: "usuario_id,concepto" });
  if (error) throw error;
}

export async function marcarQuizCompletado(usuarioId) {
  const { error } = await supabase
    .from("usuarios")
    .update({ quiz_completado: true })
    .eq("id", usuarioId);
  if (error) throw error;
}

export async function obtenerModelos(usuarioId) {
  const { data, error } = await supabase
    .from("modelos")
    .select("*")
    .eq("usuario_id", usuarioId);
  if (error) throw error;
  const map = {};
  for (const c of todosLosConceptos()) map[c] = 0;
  for (const row of data) map[row.concepto] = row.nivel;
  return map;
}

export async function listarAlumnos() {
  const { data, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("rol", "alumno")
    .order("apellidos", { ascending: true });
  if (error) throw error;
  return data;
}

export async function eliminarAlumno(usuarioId) {
  const { error: errModelos } = await supabase
    .from("modelos")
    .delete()
    .eq("usuario_id", usuarioId);
  if (errModelos) throw errModelos;
  const { error: errUsuario } = await supabase
    .from("usuarios")
    .delete()
    .eq("id", usuarioId);
  if (errUsuario) throw errUsuario;
}

export async function listarAlumnosConModelos() {
  const alumnos = await listarAlumnos();
  const { data: todosModelos, error } = await supabase
    .from("modelos")
    .select("*");
  if (error) throw error;

  return alumnos.map((a) => {
    const modelos = {};
    for (const c of todosLosConceptos()) modelos[c] = 0;
    for (const row of todosModelos) {
      if (row.usuario_id === a.id) modelos[row.concepto] = row.nivel;
    }
    return { ...a, modelos };
  });
}
