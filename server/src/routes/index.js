const connection = require("../config");
const cors = require("cors");
const express = require("express");
const EndRoutes = express();

const routes = [
  require("./empresas/GetData"),
  require("./empresas/InsertData"),
  require("./empresas/DropData"),
  require("./empresas/UpdateData"),
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
EndRoutes.use(cors());
EndRoutes.use(express.json());

// Registrar as rotas
for (const route of routes) {
  EndRoutes.use("/api/select", route);
  EndRoutes.use("/api/insert", route);
  EndRoutes.use("/api/delete", route);
  EndRoutes.use("/api/update", route);
}

module.exports = EndRoutes;
