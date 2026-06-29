import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoStats from "./components/TodoStats";

// =============================================
// KOMPONEN INDUK: App
// Konsep: useState (state todos & filter)
//         useEffect (simpan ke localStorage)
//         Props (kirim data & fungsi ke anak)
// =============================================

const INITIAL_TODOS = [
  {
    id: 1,
    text: "Buat folder pertemuan2 di dalam fullstack",
    done: false,
    priority: "high",
  },
  { id: 2, text: "Jalankan npm init -y", done: false, priority: "high" },
  {
    id: 3,
    text: "Buat project React dengan Vite",
    done: false,
    priority: "high",
  },
  {
    id: 4,
    text: "Implementasi useState pada komponen",
    done: false,
    priority: "medium",
  },
  { id: 5, text: "Implementasi useEffect", done: false, priority: "medium" },
  {
    id: 6,
    text: "Buat komponen dengan Props",
    done: false,
    priority: "medium",
  },
  { id: 7, text: "Push ke GitHub", done: false, priority: "low" },
  { id: 8, text: "Upload laporan ke elearning", done: false, priority: "low" },
];

const App = () => {
  // ── STATE ──────────────────────────────────
  // useState: menyimpan daftar todo
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos_praktikum2");
    return saved ? JSON.parse(saved) : INITIAL_TODOS;
  });

  // useState: filter aktif (all / active / done)
  const [filter, setFilter] = useState("all");

  // useState: menghitung ID berikutnya
  const [nextId, setNextId] = useState(
    () =>
      Math.max(
        ...(JSON.parse(localStorage.getItem("todos_praktikum2") || "[]").map(
          (t) => t.id,
        ) || [0]),
      ) + 1,
  );

  // ── EFFECTS ────────────────────────────────
  // useEffect: simpan todos ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("todos_praktikum2", JSON.stringify(todos));
  }, [todos]); // dependency array: jalankan ulang jika todos berubah

  // useEffect: ubah judul halaman sesuai jumlah tugas aktif
  useEffect(() => {
    const active = todos.filter((t) => !t.done).length;
    document.title =
      active > 0
        ? `(${active}) Todo List — Praktikum React`
        : "Todo List — Praktikum React";
  }, [todos]);

  // ── HANDLERS ──────────────────────────────
  // Fungsi tambah todo — akan dikirim sebagai Props ke TodoInput
  const handleAdd = (text, priority) => {
    const newTodo = { id: nextId, text, done: false, priority };
    setTodos([newTodo, ...todos]);
    setNextId(nextId + 1);
  };

  // Fungsi toggle selesai — akan dikirim sebagai Props ke TodoItem
  const handleToggle = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // Fungsi hapus todo — akan dikirim sebagai Props ke TodoItem
  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // ── FILTER ────────────────────────────────
  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  // ── RENDER ────────────────────────────────
  return (
    <div style={styles.wrapper}>
      <div style={styles.app}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📝 Todo List App</h1>
          <p style={styles.subtitle}>
            Praktikum Pertemuan 2 · State, Hooks & Props
          </p>
          <div style={styles.badges}>
            <span
              style={{
                ...styles.badge,
                background: "#EEEDFE",
                color: "#3C3489",
              }}
            >
              State
            </span>
            <span
              style={{
                ...styles.badge,
                background: "#E1F5EE",
                color: "#085041",
              }}
            >
              Hooks
            </span>
            <span
              style={{
                ...styles.badge,
                background: "#FAECE7",
                color: "#712B13",
              }}
            >
              Props
            </span>
          </div>
        </div>

        {/* TodoStats — menerima props: todos */}
        <TodoStats todos={todos} />

        {/* TodoInput — menerima props: onAdd (fungsi callback) */}
        <TodoInput onAdd={handleAdd} />

        {/* Filter buttons */}
        <div style={styles.filterRow}>
          {["all", "active", "done"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                ...styles.filterBtn,
                ...(filter === f ? styles.filterBtnActive : {}),
              }}
            >
              {{ all: "Semua", active: "Belum selesai", done: "Selesai" }[f]}
            </button>
          ))}
        </div>

        {/* Daftar TodoItem — setiap item menerima props: todo, onToggle, onDelete */}
        {filteredTodos.length === 0 ? (
          <div style={styles.empty}>
            <p style={{ fontSize: "32px" }}>✅</p>
            <p>Tidak ada tugas di sini</p>
          </div>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo} /* Props: data todo */
              onToggle={handleToggle} /* Props: fungsi toggle */
              onDelete={handleDelete} /* Props: fungsi hapus */
            />
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "2rem 1rem",
  },
  app: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
  },
  header: { marginBottom: "24px" },
  title: { fontSize: "24px", fontWeight: 500, color: "#111" },
  subtitle: {
    fontSize: "14px",
    color: "#888",
    marginTop: "4px",
    marginBottom: "8px",
  },
  badges: { display: "flex", gap: "6px", flexWrap: "wrap" },
  badge: {
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "99px",
    fontWeight: 500,
  },
  filterRow: {
    display: "flex",
    gap: "6px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "5px 16px",
    borderRadius: "99px",
    border: "1px solid #ddd",
    background: "transparent",
    color: "#888",
    fontSize: "13px",
    cursor: "pointer",
  },
  filterBtnActive: {
    background: "#EEEDFE",
    color: "#3C3489",
    borderColor: "#AFA9EC",
  },
  empty: {
    textAlign: "center",
    padding: "2rem",
    color: "#aaa",
    fontSize: "14px",
  },
};

export default App;
