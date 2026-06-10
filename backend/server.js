const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend berjalan");
});

app.listen(5000, () => {
  console.log("Server berjalan di port 5000");
});
