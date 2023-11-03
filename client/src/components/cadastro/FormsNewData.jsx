import React, { useState } from "react";
import { routes } from "../../api";
import { SimpleGrid, Input, Checkbox, Button } from "@chakra-ui/react";
import InputMask from "react-input-mask";

function Forms() {
  const [empresaCPNJ, setEmpresaCPNJ] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [status, setStatus] = useState("0");

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
    <>
      <SimpleGrid
        minChildWidth={230}
        h="fit-content"
        spacing="4"
        className="text-white"
      >
        <Input
          value={razaoSocial}
          onChange={(e) => setRazaoSocial(e.target.value)}
          placeholder="Razão Social"
          label="Razao Social"
          required
        />
        <Input
          value={nomeFantasia}
          onChange={(e) => setNomeFantasia(e.target.value)}
          placeholder="Nome Fantasia"
          label="Nome Fantasia"
          required
        />
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
      <SimpleGrid py="2">
        <Button w="40" onClick={handleNovoCadastro}>
          CADASTRAR
        </Button>
      </SimpleGrid>
    </>
  );
}

export default Forms;