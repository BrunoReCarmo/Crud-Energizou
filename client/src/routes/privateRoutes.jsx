import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../api";

export function PrivateRoute({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const checkTokenValidity = async () => {
            if (token) {
                try {
                    const response = await fetch(routes.empresas.get, {
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
            } else {
                setAuthenticated(false);
            }
        };

        checkTokenValidity();
    }, []);

    return authenticated ? children : <Navigate to="/login" />;
}
