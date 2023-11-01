const express = require("express");
const connection = require("../../config");
const router = express.Router();

router.put("/empresas/:id", (req, res) => {
  const { cnpj, razao_social, nome_fantasia, status } = req.body;
  const id = req.params.id;
  if (!cnpj || !razao_social || !nome_fantasia || status === undefined || !id) {
    res.status(400).json({ message: "Nome e ID do usuário são necessários." });
    return;
  }

  const updateQuery =
    "UPDATE empresas_data SET cnpj = ?, razao_social = ?, nome_fantasia = ?, status =? WHERE id = ?";

  connection.query(
    updateQuery,
    [cnpj, razao_social, nome_fantasia, status, id],
    (error, results) => {
      if (error) {
        console.error("Erro atualizando dados da empresa:", error);
        res
          .status(500)
          .json({ Mensagem: "Error atualizando empresa no banco de dados." });
        return;
      }

      console.log("Dados da empresa atualizados com sucesso:", results);
      res.json({
        Mensagem: "Empresa atualizada com sucesso no banco de dados.",
      });
    }
  );
});

module.exports = router;