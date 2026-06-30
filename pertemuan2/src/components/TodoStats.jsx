import React from "react";

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const active = total - done;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        <StatCard label="Total" value={total} color="#222" />
        <StatCard label="Belum selesai" value={active} color="#7F77DD" />
        <StatCard label="Selesai" value={done} color="#1D9E75" />
      </div>

      <div style={styles.progressBg}>
        <div style={{ ...styles.progressFill, width: `${pct}%` }} />
      </div>
      <p style={styles.pctText}>{pct}% selesai</p>
    </div>
  );
};

const StatCard = ({ label, value, color }) => (
  <div style={styles.card}>
    <div style={{ ...styles.num, color }}>{value}</div>
    <div style={styles.cardLabel}>{label}</div>
  </div>
);

StatCard.defaultProps = {
  color: "#222",
};

const styles = {
  container: { marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginBottom: "12px",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
  },
  num: {
    fontSize: "22px",
    fontWeight: 500,
  },
  cardLabel: {
    fontSize: "12px",
    color: "#888",
    marginTop: "2px",
  },
  progressBg: {
    height: "6px",
    backgroundColor: "#eee",
    borderRadius: "99px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#7F77DD",
    borderRadius: "99px",
    transition: "width 0.4s ease",
  },
  pctText: {
    fontSize: "12px",
    color: "#888",
    textAlign: "right",
    marginTop: "4px",
  },
};

export default TodoStats;
