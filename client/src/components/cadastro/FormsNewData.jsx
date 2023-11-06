import React, { useState } from "react";
import { routes } from "../../api";
import { AddIcon } from "@chakra-ui/icons";
import {
  Text,
  SimpleGrid,
  Input,
  Checkbox,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Heading,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";

function Forms() {
  const [empresaCPNJ, setEmpresaCPNJ] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [status, setStatus] = useState("0");

  const token = localStorage.getItem("token");
  //Usado no Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const addEmpresasUrl = routes.empresas.add;

  const handleNovoCadastro = () => {
    const novosDados = {
      cnpj: empresaCPNJ,
      razao_social: razaoSocial,
      nome_fantasia: nomeFantasia,
      status,
    };

    fetch(addEmpresasUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(novosDados),
    })
      .then((response) => {
        if (response.ok) {
          alert("Empresa cadastrada com sucesso!");
        } else {
          console.error("Erro ao adicionar nova empresa:", response.statusText);
          alert("Erro ao adicionar nova empresa.");
        }
      })
      .catch((error) => {
        console.error("Erro ao cadastrar nova empresa:", error);
        alert(
          "Erro ao cadastrar nova empresa. Por favor, tente novamente mais tarde."
        );
      });

    setEmpresaCPNJ("");
    setRazaoSocial("");
    setNomeFantasia("");
    setStatus("0");
  };

  return (
    <div className="mb-10">
      <SimpleGrid
        display="flex"
        alignItems="center"
        h="fit-content"
        spacing="4"
        className="text-white"
        flexWrap="wrap"
      >
        <Heading size="xl">Cadastro nova empresa?</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
          Cadastrar nova empresa
        </Button>
      </SimpleGrid>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            borderColor="gray.600"
            color="gray.50"
          >
            Cadastrar Empresa
          </DrawerHeader>

          <DrawerBody mt="6">
            <SimpleGrid
              minChildWidth={230}
              h="fit-content"
              spacing="4"
              className="text-white"
            >
              <Text fontWeight="bold" color="gray.50">
                Razão Social: {razaoSocial}
              </Text>
              <Input
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                placeholder="Razão Social"
                label="Razao Social"
                required
              />
              <Text fontWeight="bold" color="gray.50">
                Nome Fantasia: {nomeFantasia}
              </Text>
              <Input
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
                placeholder="Nome Fantasia"
                label="Nome Fantasia"
                required
              />
              <Text fontWeight="bold" color="gray.50">
                CNPJ: {empresaCPNJ}
              </Text>
              <InputMask
                mask="99.999.999/9999-99"
                value={empresaCPNJ}
                onChange={(e) => setEmpresaCPNJ(e.target.value)}
                required
              >
                {(inputProps) => <Input {...inputProps} placeholder="CNPJ" />}
              </InputMask>
              <Checkbox
                isChecked={status === 1}
                onChange={(e) => setStatus(e.target.checked ? 1 : 0)}
                align={"left"}
              >
                CNPJ está ativo?
              </Checkbox>
            </SimpleGrid>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" color="white" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" onClick={handleNovoCadastro}>
              Cadastrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Forms;
