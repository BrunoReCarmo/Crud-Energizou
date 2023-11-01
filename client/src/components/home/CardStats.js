import React, { useEffect, useState } from "react";
import { routes } from "../../api";

function CardStats() {
  const [listarEmpresas, setListarEmpresas] = useState([]);

  const getListagemUrl = routes.empresas.get;

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const response = await fetch(getListagemUrl);
        if (response.ok) {
          const data = await response.json();
          setListarEmpresas(data.rows.length);
          console.log("Cardstats", data);
        } else {
          console.error("Os dados da API não são um array:");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchTipos();
  }, []);

  const items = listarEmpresas;

  return <div>{items}</div>;
}

export default CardStats;
