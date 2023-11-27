const connection = require("../config");
const cors = require("cors");
const express = require("express");
const OpenRoutes = express();

const routes = [
  require("./auth/Login"),
  require("./auth/Cadastro"),
];

//Validar a conexão
connection.connect(function (err) {
  if (err) {
    console.error("Erro ao conectar: " + err.stack);
    return;
  }
  console.log("Conexão bem-sucedida, ID da conexão: " + connection.threadId);
});

// Permite conexão FrontEnd
OpenRoutes.use(cors());
OpenRoutes.use(express.json());

// Registrar as rotas
for (const route of routes) {
  OpenRoutes.use("/api", route);
}

module.exports = OpenRoutes;