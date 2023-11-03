import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { routes } from '../../api';

function CardGraphics() {
    const [empresasAtivas, setEmpresasAtivas] = useState(0);
    const [empresasInativas, setEmpresasInativas] = useState(0);
  
    const getListagemUrl = routes.empresas.get;
  
    useEffect(() => {
      const fetchEmpresas = async () => {
        try {
          const response = await fetch(getListagemUrl);
          if (response.ok) {
            const data = await response.json();
  
            const ativas = data.rows.filter((empresa) => empresa.status === 1);
            const inativas = data.rows.filter((empresa) => empresa.status === 0);
  
            setEmpresasAtivas(ativas.length);
            setEmpresasInativas(inativas.length);
  
            console.log("Cardstats", data);
          } else {
            console.error("Os dados da API não são um array.");
          }
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
      };
      fetchEmpresas();
    }, [getListagemUrl]);

  useEffect(() => {
    const dataPie = {
      labels: ["Ativos", "Não ativos"],
      datasets: [
        {
          label: "Status",
          data: [empresasAtivas, empresasInativas],
          backgroundColor: [
            "#38A169",
            "#E53E3E",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configPie = {
        type: "pie",
        data: dataPie,
        options: {
          plugins: {
            title: {
                display: true,
                text: "Status CNPJ",
                color: 'white',
                font: {
                    size: 18,
                }
            },
            legend: {
                labels:{
                    color: "white"
                },
                position: "top",
                align: "start",
            },
          },
        },
      };  

    const chartPie = new Chart(document.getElementById("chartPie"), configPie);

    return () => {
      chartPie.destroy();
    };
  }, [empresasAtivas, empresasInativas]);

  return (
    <div className="shadow-lg h-full rounded-lg overflow-hidden w-[180px] flex items-center">
      <canvas id="chartPie"></canvas>
    </div>
  );
}

export default CardGraphics;