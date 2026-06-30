import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const priorityStyle = {
    high: { background: "#FCEBEB", color: "#791F1F", label: "Tinggi" },
    medium: { background: "#FAEEDA", color: "#633806", label: "Sedang" },
    low: { background: "#EAF3DE", color: "#27500A", label: "Rendah" },
  };
  const p = priorityStyle[todo.priority] || priorityStyle.low;

  return (
    <div
      style={{
        ...styles.item,
        opacity: todo.done ? 0.6 : 1,
      }}
    >
      <button
        onClick={() => onToggle(todo.id)}
        style={{
          ...styles.checkBtn,
          backgroundColor: todo.done ? "#7F77DD" : "transparent",
          borderColor: todo.done ? "#7F77DD" : "#ccc",
        }}
        aria-label={todo.done ? "Tandai belum selesai" : "Tandai selesai"}
      >
        {todo.done && (
          <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>
        )}
      </button>

      <span
        style={{
          ...styles.text,
          textDecoration: todo.done ? "line-through" : "none",
          color: todo.done ? "#aaa" : "#222",
        }}
      >
        {todo.text}
      </span>

      <span
        style={{
          ...styles.badge,
          backgroundColor: p.background,
          color: p.color,
        }}
      >
        {p.label}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        style={styles.deleteBtn}
        aria-label="Hapus tugas"
      >
        🗑
      </button>
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 14px",
    backgroundColor: "#fff",
    border: "1px solid #eee",
    borderRadius: "12px",
    marginBottom: "8px",
    transition: "border-color 0.15s",
  },
  checkBtn: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    border: "1.5px solid #ccc",
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  text: {
    flex: 1,
    fontSize: "15px",
  },
  badge: {
    fontSize: "11px",
    padding: "2px 10px",
    borderRadius: "99px",
    fontWeight: 500,
    flexShrink: 0,
  },
  deleteBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    padding: "2px 4px",
    borderRadius: "4px",
    flexShrink: 0,
  },
};

export default TodoItem;
