import React, { useEffect, useState } from "react";
import { routes } from "../../api";
import { token } from "../../utils";

function CardStats() {
  const [listarEmpresas, setListarEmpresas] = useState([]);
  const getListagemUrl = routes.empresas.get;

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const response = await fetch(getListagemUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });
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

  return (
    <div className="px-8 bg-slate-950  h-full flex items-center rounded-lg justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-gray-50">
            {items}
          </h6>
          <p className="font-bold text-md text-gray-50">Empresas</p>
        </div>
    </div>
  );
}

export default CardStats;
