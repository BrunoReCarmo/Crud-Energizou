import React, { useState, useEffect } from "react";
import { routes } from "../../api";
import { DeleteIcon, InfoOutlineIcon } from "@chakra-ui/icons";
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

function TableEdit() {
  const [listarEmpresas, setListarEmpresas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const getEmpresasUrl = routes.empresas.get;
  const dropEmpresasUrl = routes.empresas.drop;
  const updtEmpresasUrl = routes.empresas.updt;

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        const response = await fetch(getEmpresasUrl);
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

  const handleDeletarRegistro = async (id) => {
    try {
      // Envia uma requisição DELETE para a API para remover o produto pelo ID
      const response = await fetch(`${dropEmpresasUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Falha ao excluir o registro: ${errorMessage}`);
      }

      // Remove o produto do estado local
      const newArray = listarEmpresas.filter((prod) => prod.id !== id);
      setListarEmpresas(newArray);
    } catch (error) {
      console.error("Erro ao remover o produto:", error.message);
    }
  };

  return (
    <div className="bg-slate-900 mt-5 rounded-lg">
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
              <Th color="gray.100" borderColor="gray.600">
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
                <Td  borderColor="gray.800">
                  <Button
                    p="2"
                    h="auto"
                    fontSize={15}
                    color="red.500"
                    mr="2"
                    bg="rgb(2 6 23)"
                    boxShadow="lg"
                    fontWeight="bold"
                    onClick={() => handleDeletarRegistro(dado.id)}
                  >
                    <DeleteIcon />
                  </Button>
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

export default TableEdit;
