const express = require("express");
const EndRoutes = require("./routes/index"); 
const LoginRoute = require("./routes/auth/Login (Unprotected)")
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(EndRoutes);

//Rota desprotegida
app.use(LoginRoute);

//Bloco => Porta do Server
const PORT = process.env.PORT || 3001;
//Validação
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});