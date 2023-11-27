const express = require("express");
const router = express.Router();
const connection = require("../../config");
const bcrypt = require("bcrypt");

router.post("/registrar/usuario", async (req, res) => {
  const { nome, email, password, contato } = req.body;
  const saltRounds = 10;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql =
      "INSERT INTO users (nome, email, password, contato) VALUES (?, ?, ?, ?)";
    connection.query(sql, [nome, email, hashedPassword, contato], (err, data) => {
      if (err) {
        return res.json({ message: "Erro" });
      }
      return res.json({ message: "Sucesso", data });
    });
  } catch (error) {
    console.error("Erro criptografando a senha:", error);
    return res.json({ message: "Erro" });
  }
});

module.exports = router;