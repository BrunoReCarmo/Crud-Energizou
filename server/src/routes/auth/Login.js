const express = require("express");
const LoginRoute = express.Router();
const connection = require("../../config");
const jwt = require("jsonwebtoken");
const jwt_secret_key = require("../../utils");
const bcrypt = require("bcrypt");

LoginRoute.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  connection.query(sql, [email], async (err, result) => {
    if (err) {
      console.error("Erro durante a consulta ao banco de dados:", err);
      return res.json({ message: "Error" });
    }

    try {
      if (result.length > 0) {
        const hashedPassword = result[0].password;

        // Comparar a senha fornecida com o hash armazenado
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (passwordMatch) {
          const { id, nome, email, contato } = result[0];
          const token = jwt.sign({ id, nome, email, contato }, jwt_secret_key, {
            expiresIn: "8h",
          });

          return res.json({
            Login: true,
            token,
            data: { id, nome, contato, password },
            message: "Success",
          });
        } else {
          return res.json({ message: "Falha: Senha incorreta" });
        }
      } else {
        return res.json({ message: "Falha: Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      return res.json({ message: "Error during login" });
    }
  });
});

module.exports = LoginRoute;