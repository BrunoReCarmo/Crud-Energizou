const express = require("express");
const EndRoutes = require("./routes/(Protegidas)"); 
const OpenRoutes = require("./routes/(Desprotegidas)");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//s/ restrição do Middleware
app.use(OpenRoutes);

//Middleware restringe s/ o token
app.use(EndRoutes);

//Bloco => Porta do Server
const PORT = process.env.PORT || 3001;

//Validação
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});