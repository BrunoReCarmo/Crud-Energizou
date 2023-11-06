const jwt = require("jsonwebtoken");
const jwt_secret_key = require("../utils");

const MidVerificarToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Acesso negado' });

  try {
    const decoded = jwt.verify(token, jwt_secret_key);
    req.userId = decoded.id; 
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = MidVerificarToken;