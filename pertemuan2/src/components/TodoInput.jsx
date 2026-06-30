import React, { useState, useRef } from "react";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (text.trim() === "") {
      inputRef.current.focus();
      return;
    }
    onAdd(text.trim(), priority);
    setText("");
    setPriority("medium");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.label}>Tambah Tugas Baru</h3>
      <div style={styles.row}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ketik tugas baru..."
          style={styles.input}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={styles.select}
        >
          <option value="low">🟢 Rendah</option>
          <option value="medium">🟡 Sedang</option>
          <option value="high">🔴 Tinggi</option>
        </select>
        <button onClick={handleSubmit} style={styles.button}>
          + Tambah
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f8f8",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "20px",
  },
  label: {
    fontSize: "13px",
    color: "#888",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 500,
  },
  row: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  input: {
    flex: 1,
    minWidth: "180px",
    padding: "9px 12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
  },
  select: {
    padding: "9px 10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    cursor: "pointer",
  },
  button: {
    padding: "9px 18px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#7F77DD",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: 500,
  },
};

export default TodoInput;
