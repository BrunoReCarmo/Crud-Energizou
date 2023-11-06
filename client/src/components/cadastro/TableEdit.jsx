import React, { useState, useEffect } from "react";
import { routes } from "../../api";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Badge,
  Th,
  Tr,
  Td,
  Input,
  Tbody,
  Button,
  HStack,
  Checkbox,
} from "@chakra-ui/react";

function TableEdit() {
  const [listarEmpresas, setListarEmpresas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmpresas, setEditedEmpresas] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const itemsPerPage = 20;

  const token = localStorage.getItem("token");

  // Definir URLs para as requisições da API
  const getEmpresasUrl = routes.empresas.get;
  const dropEmpresasUrl = routes.empresas.drop;
  const updtEmpresasUrl = routes.empresas.updt;

  const sortedItems = () => {
    const sortableItems = [...listarEmpresas];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Lógica de pesquisa
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = sortedItems().filter((empresa) => {
    return Object.values(empresa)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    // Carregar dados das empresas ao montar o componente
    const fetchEmpresas = async () => {
      try {
        const response = await fetch(getEmpresasUrl, {
          headers: {
            Authorization: `${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setListarEmpresas(data.rows);
        } else {
          console.error("Os dados da API não são um array.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchEmpresas();
  }, []);

  // Lógica de paginação
  const totalPages = Math.ceil(listarEmpresas.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listarEmpresas.slice(indexOfFirstItem, indexOfLastItem);

  // Função para lidar com a mudança de página
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Geração dos botões de página
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

  // Função para deletar um registro
  const handleDeletarRegistro = async (id) => {
    try {
      const response = await fetch(`${dropEmpresasUrl}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Falha ao excluir o registro: ${errorMessage}`);
      }

      const newArray = listarEmpresas.filter((empresa) => empresa.id !== id);
      setListarEmpresas(newArray);
    } catch (error) {
      console.error("Erro ao remover o registro:", error.message);
    }
  };

  // Função para editar uma empresa
  const handleEditEmpresas = (empresa) => {
    setEditedEmpresas(empresa);
    setIsEditing(true);
  };

  // Função para salvar a edição de uma empresa
  const handleSaveEmpresas = async (id) => {
    try {
      const response = await fetch(`${updtEmpresasUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          razao_social: editedEmpresas.razao_social,
          nome_fantasia: editedEmpresas.nome_fantasia,
          cnpj: editedEmpresas.cnpj,
          status: editedEmpresas.status,
        }),
      });

      if (response.ok) {
        alert("Editado com sucesso");
      }

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Falha em atualizar empresas: ${errorMessage}`);
      }

      const updatedList = listarEmpresas.map((empresa) =>
        empresa.id === id
          ? {
              ...empresa,
              razao_social: editedEmpresas.razao_social,
              nome_fantasia: editedEmpresas.nome_fantasia,
              cnpj: editedEmpresas.cnpj,
              status: editedEmpresas.status,
            }
          : empresa
      );
      setListarEmpresas(updatedList);

      setEditedEmpresas(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro atualizando empresas:", error.message);
    }
  };

  // Função para cancelar a edição
  const handleCancelarEdit = () => {
    setEditedEmpresas(null);
    setIsEditing(false);
  };

  //Usando constante de pesquisa + PAGINAÇÃO
  const filteredAndPagedItems = sortedItems()
  .filter((empresa) =>
    Object.values(empresa)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Pesquisar..."
        m={4}
        w="40%"
        color="gray.50"
      />
      <div className="bg-slate-900 mt-5 rounded-lg">
        <TableContainer p="5">
          <Table overflow="hidden" maxH="100%">
            <TableCaption mb="2">Últimas movimentações</TableCaption>
            <Thead>
              <Tr>
                <Th
                  color="gray.100"
                  borderColor="gray.600"
                  onClick={() => handleSort("nome_fantasia")}
                >
                  Nome Fantasia
                </Th>
                <Th
                  color="gray.100"
                  borderColor="gray.600"
                  onClick={() => handleSort("razao_social")}
                >
                  Razão social
                </Th>
                <Th
                  color="gray.100"
                  borderColor="gray.600"
                  onClick={() => handleSort("cnpj")}
                >
                  CNPJ
                </Th>
                <Th color="gray.100" borderColor="gray.600">
                  Status
                </Th>
                <Th color="gray.100" borderColor="gray.600"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredAndPagedItems.map((empresa) => (
                <Tr key={empresa.id}>
                  <Td color="gray.100" borderColor="gray.800">
                    {isEditing && editedEmpresas?.id === empresa.id ? (
                      <Input
                        value={editedEmpresas?.nome_fantasia}
                        onChange={(e) =>
                          setEditedEmpresas({
                            ...editedEmpresas,
                            nome_fantasia: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <span>{empresa.nome_fantasia}</span>
                    )}
                  </Td>
                  <Td color="gray.100" borderColor="gray.800">
                    {isEditing && editedEmpresas?.id === empresa.id ? (
                      <Input
                        value={editedEmpresas?.razao_social}
                        onChange={(e) =>
                          setEditedEmpresas({
                            ...editedEmpresas,
                            razao_social: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <span>{empresa.razao_social}</span>
                    )}
                  </Td>
                  <Td isNumeric color="gray.100" borderColor="gray.800">
                    {isEditing && editedEmpresas?.id === empresa.id ? (
                      <Input
                        value={editedEmpresas?.cnpj}
                        onChange={(e) =>
                          setEditedEmpresas({
                            ...editedEmpresas,
                            cnpj: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <span>{empresa.cnpj}</span>
                    )}
                  </Td>
                  <Td borderColor="gray.800">
                    {isEditing && editedEmpresas?.id === empresa.id ? (
                      <Checkbox
                        color="white"
                        isChecked={editedEmpresas?.status === 1}
                        onChange={(e) =>
                          setEditedEmpresas({
                            ...editedEmpresas,
                            status: e.target.checked ? 1 : 0,
                          })
                        }
                      >
                        Ativo?
                      </Checkbox>
                    ) : (
                      <Badge
                        color={empresa.status === 1 ? "green.200" : "red.200"}
                        bg={
                          empresa.status === 1
                            ? "rgba(154, 230, 180, 0.16)"
                            : "rgba(154, 230, 180, 0.16)"
                        }
                        rounded="md"
                        px="2"
                        py="1"
                      >
                        {empresa.status === 1 ? "Ativo" : "Não ativo"}
                      </Badge>
                    )}
                  </Td>
                  <Td borderColor="gray.800">
                    {isEditing && editedEmpresas?.id === empresa.id ? (
                      <>
                        <Button
                          p="2"
                          mr="1"
                          h="auto"
                          fontSize={11}
                          colorScheme="teal"
                          fontWeight="bold"
                          onClick={() => handleSaveEmpresas(empresa.id)}
                        >
                          SALVAR
                        </Button>
                        <Button
                          p="2"
                          h="auto"
                          fontSize={11}
                          colorScheme="red"
                          fontWeight="bold"
                          onClick={handleCancelarEdit}
                        >
                          CANCELAR
                        </Button>
                      </>
                    ) : (
                      <Button
                        p="2"
                        mr="2"
                        h="auto"
                        fontSize={15}
                        colorScheme="blue"
                        fontWeight="bold"
                        onClick={() => handleEditEmpresas(empresa)}
                      >
                        <EditIcon />
                      </Button>
                    )}
                    <Button
                      p="2"
                      h="auto"
                      fontSize={15}
                      color="red.500"
                      bg="rgb(2 6 23)"
                      boxShadow="lg"
                      fontWeight="bold"
                      onClick={() => handleDeletarRegistro(empresa.id)}
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
    </>
  );
}

export default TableEdit;
