const express = require("express");
const connection = require("../../config");
const router = express.Router();

//Rota -> Capturar dados
router.get("/empresas", (req, res) => {

  const GetConsulta = "SELECT * FROM empresas_data";

  // Executar a consulta
  connection.query(GetConsulta, (err, rows) => {
    if (err) {
      console.error("Erro na consulta: " + err);
      res.status(500).json({ message: "Erro ao buscar dados." });
      return;
    }
    
    res.json({ rows });
  });
});

module.exports = router;
