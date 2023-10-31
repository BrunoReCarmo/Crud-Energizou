const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Bloco => Porta do Server
const PORT = process.env.PORT || 22;
//Validação
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});