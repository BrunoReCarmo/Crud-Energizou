import { jwtDecode } from "jwt-decode";

//Token == LocalStorage
export const token = localStorage.getItem("token");
//Token => Info User
const decodedToken = jwtDecode(token);
//O email do usuário
export const email = decodedToken.email;
//O email do usuário
export const nome = decodedToken.nome;
