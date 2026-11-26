const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const FICHEIRO = path.join(__dirname, "jogos.json");

app.use(cors());
app.use(express.json());

// Carrega a lista do ficheiro para memória
let jogos = JSON.parse(fs.readFileSync(FICHEIRO, "utf-8"));

// Guarda a lista de volta no ficheiro
function save() {
  fs.writeFileSync(FICHEIRO, JSON.stringify(jogos, null, 2));
}

// GET /api/jogos -> 200 + array de itens
app.get("/api/jogos", (req, res) => {
  res.status(200).json(jogos);
});

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});