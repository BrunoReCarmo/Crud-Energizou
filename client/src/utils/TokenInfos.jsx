import { jwtDecode } from "jwt-decode";

//Token == LocalStorage
export const token = localStorage.getItem("token");
//Token => Info User
const decodedToken = jwtDecode(token);
//O nome do usuário
export const email = decodedToken.email;
