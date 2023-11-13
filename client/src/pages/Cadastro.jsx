import React from "react";
import { Forms, TableEdit, Sidebar, Header } from "../components";
import { Flex, Box } from "@chakra-ui/react";

function Cadastro() {
  return (
    <Flex flexDirection="column" className="bg-slate-800">
      <Header />
      <Flex w="100%" my="6" maxW={1240} mx="auto">
        <Sidebar />
        <Box w="100%" px={{ base: "2" }}>
          <div className="py-5">
            <Forms />
            <TableEdit />
          </div>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Cadastro;
