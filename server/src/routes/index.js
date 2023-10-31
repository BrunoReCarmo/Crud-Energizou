const connection = require("../config");
const cors = require("cors");
const express = require("express");
const EndRoutes = express();

const routes = [require("./empresas/GetData")];

//Validar a conexão
connection.connect(function (err) {
  if (err) {
    console.error("Erro ao conectar: " + err.stack);
    return;
  }
  console.log("Conexão bem-sucedida, ID da conexão: " + connection.threadId);
});

// Permite conexão FrontEnd
EndRoutes.use(cors());
EndRoutes.use(express.json());

// Registrar as rotas
for (const route of routes) {
  EndRoutes.use("/api/select", route);
}

module.exports = EndRoutes;
