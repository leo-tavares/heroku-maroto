const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send("Get com sucesso");
});

app.listen(PORT, () => console.log("🚀 fogote decolando 🚀"));
