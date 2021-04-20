const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", (_, res) => {
  res.send("Get com sucesso");
});

app.listen(PORT, () => console.log("🚀 fogote decolando 🚀"));
