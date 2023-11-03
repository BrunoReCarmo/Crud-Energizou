// Importe as variáveis de ambiente
require('dotenv').config();

const jwt_secret_key = process.env.JWT_SECRET;

module.exports = jwt_secret_key;