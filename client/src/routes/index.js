import { Home, Cadastro } from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoutes";

export function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/cadastro" element={<PrivateRoute><Cadastro /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    )
}