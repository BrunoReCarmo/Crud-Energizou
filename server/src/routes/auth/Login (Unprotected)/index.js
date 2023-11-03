const express = require("express");
const LoginRoute = express.Router();
const connection = require("../../../config");
const jwt = require("jsonwebtoken");
const jwt_secret_key = require("../../../utils");

LoginRoute.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

    connection.query(sql, [email, password], (err, data) => {
        if (err) {
            return res.json({ message: "Error" });
        }
        if (data.length > 0) {
            const id = data[0].id;
            const name = data[0].nome;
            const email = data[0].email;
            const contato = data[0].contato;
            const token = jwt.sign({ id, name, email, contato }, jwt_secret_key, { expiresIn: '8h' });
            return res.json({ Login: true, token, data, message: "Success" });
        } else {
            return res.json({ message: "Fail" });
        }
    });
});

module.exports = LoginRoute;

