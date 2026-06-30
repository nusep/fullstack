const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/items", async (req, res) => {
  const response = await fetch("http://localhost:3000/items");
  const data = await response.json();
  res.json(data);
});

app.post("/items", async (req, res) => {
  const response = await fetch("http://localhost:3000/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.json(data);
});

app.put("/items/:id", async (req, res) => {
  const response = await fetch(`http://localhost:3000/items/${req.params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.json(data);
});

app.delete("/items/:id", async (req, res) => {
  await fetch(`http://localhost:3000/items/${req.params.id}`, {
    method: "DELETE",
  });

  res.json({
    message: "Data berhasil dihapus",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
