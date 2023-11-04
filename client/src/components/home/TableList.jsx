import React, { useState, useEffect } from "react";
import { routes } from "../../api";
import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Badge,
  Th,
  Tr,
  Td,
  Tbody,
  Button,
  HStack,
} from "@chakra-ui/react";
import { token } from "../../utils";

function TableList() {
  const [listarEmpresas, setListarEmpresas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
          setListarEmpresas(data.rows);
        } else {
          console.error("Os dados da API não são um array:");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchTipos();
  }, []);

  const totalPages = Math.ceil(listarEmpresas.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listarEmpresas.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageButtons = () =>
    Array.from({ length: totalPages }, (_, i) => (
      <Button
        key={i}
        onClick={() => handlePageChange(i + 1)}
        colorScheme={i + 1 === currentPage ? "teal" : "blackAlpha"}
        color="gray.50"
      >
        {i + 1}
      </Button>
    ));

  return (
    <div className="bg-slate-950 rounded-lg">
      <TableContainer p="5">
        <Table overflow="hidden" maxH="100%">
          <TableCaption mb="2">Últimas movimentações</TableCaption>
          <Thead>
            <Tr>
              <Th color="gray.100" borderColor="gray.600">
                Nome Fantasia
              </Th>
              <Th color="gray.100" borderColor="gray.600">
                Razão social
              </Th>
              <Th color="gray.100" borderColor="gray.600">
                CPNJ
              </Th>
              <Th color="gray.100" borderColor="gray.600">
                status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((dado) => (
              <Tr key={dado.id}>
                <Td color="gray.100" borderColor="gray.800">
                  {dado.nome_fantasia}
                </Td>
                <Td color="gray.100" borderColor="gray.800">
                  {dado.razao_social}
                </Td>
                <Td isNumeric color="gray.100" borderColor="gray.800">
                  {dado.cnpj}
                </Td>
                <Td borderColor="gray.800">
                  <Badge
                    color={dado.status === 1 ? "green.200" : "red.200"}
                    bg={
                      dado.status === 1
                        ? "rgba(154, 230, 180, 0.16)"
                        : "rgba(154, 230, 180, 0.16)"
                    }
                    rounded="md"
                    px="2"
                    py="1"
                  >
                    {dado.status === 1 ? "Ativo" : "Não ativo"}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <HStack spacing="2" ml="4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            colorScheme="blackAlpha"
            color="gray.50"
          >
            Anterior
          </Button>
          {renderPageButtons()}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            colorScheme="blackAlpha"
            color="gray.50"
          >
            Próxima
          </Button>
        </HStack>
      </TableContainer>
    </div>
  );
}

export default TableList;