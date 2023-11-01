const express = require("express");
const connection = require("../../config");
const router = express.Router();

// Rota para remover registro
router.delete("/empresas/:id", (req, res) => {
  const id = req.params.id;

  const deleteQuery = "DELETE FROM empresas_data WHERE id = ?";

  connection.query(deleteQuery, [id], (error, results) => {
    if (error) {
      console.error("Erro ao remover registro:", error);
      res.status(500).json({ Mensagem: "Erro ao remover registro." });
      return;
    }

    res.json({ Mensagem: "Registro removido com sucesso." });
  });
});

module.exports = router;