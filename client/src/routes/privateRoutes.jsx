import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../api";

export function PrivateRoute({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    const getListagemUrl = routes.empresas.get;
    const token = localStorage.getItem("token");

    useEffect(() => {
        const checkTokenValidity = async () => {
            try {
                const response = await fetch(getListagemUrl, {
                    method: "GET",
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                if (response.ok) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            } catch (error) {
                console.error("Erro ao validar o token", error);
                setAuthenticated(false);
            }
        };

        checkTokenValidity();
    }, [getListagemUrl, token]);

    return authenticated ? children : <Navigate to="/login" />;
}