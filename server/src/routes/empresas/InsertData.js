const express = require("express");
const router = express.Router();
const connection = require("../../config");

router.post("/empresas", (req, res) => {
  const { cnpj, razao_social, nome_fantasia, status } = req.body;

  if (!cnpj || !razao_social || !nome_fantasia || !status) {
    res.status(400).json({ message: "Todos são necessários." });
    return;
  }

  const insertQuery = "INSERT INTO empresas_data (cnpj, razao_social, nome_fantasia, status) VALUES (?, ?, ?, ?)";

  connection.query(insertQuery, [cnpj, razao_social, nome_fantasia, status], (error, results) => {
    if (error) {
      console.error("Erro ao adicionar dados:", error);
      res.status(500).json({ message: "Error adicionando dados no Banco de Dados." });
      return;
    }

    console.log("Empresa cadastrada com sucesso:", results);
    res.json({ message: "Empresa cadastrada com sucesso ao banco de dados." });
  });
});

module.exports = router;