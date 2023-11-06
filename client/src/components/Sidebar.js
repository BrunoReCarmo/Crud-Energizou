import React, { useState } from "react";
import { Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import { Box, Icon, Avatar, Heading } from "@chakra-ui/react";
import { SideLinks } from "../constantes";
import { jwtDecode } from "jwt-decode";

const Sidebar = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  //Token == LocalStorage
  const token = localStorage.getItem("token");

  if (token) {
    try {
      //Token => Info User
      const decodedToken = jwtDecode(token);
      //O email do usuário
      const nome_decoded = decodedToken.nome;
      const email_decoded = decodedToken.email;
      setNome(nome_decoded);
      setEmail(email_decoded);
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
    }
  }

  return (
    <Stack
      spacing="6"
      className="bg-slate-900 antialised mr-5"
      height="min-content"
      rounded="lg"
    >
      <Stack my="6">
        <Box display="flex" justifyContent="center">
          <Avatar name={nome} size="lg" />
        </Box>
        <Box display="flex" justifyContent="center">
          <Heading size="sm" color="white">
            {nome}
          </Heading>
        </Box>
        <Box display="flex" justifyContent="center">
          <Text fontSize="13px" maxW="100%" color="white">
            {email}
          </Text>
        </Box>
      </Stack>
      <Stack>
        {SideLinks.map((nav) => (
          <Stack key={nav.id}>
            <ChakraLink
              href={nav.path}
              _hover={{ bg: "gray.800" }}
              p="4"
              mx="5"
              mb="3"
              borderRadius={5}
              display="flex"
            >
              <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.300"
                display="flex"
                alignContent="center"
              >
                <Box
                  bg="teal.100"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="1"
                  rounded="lg"
                  mr="2"
                >
                  <Icon as={nav.icon} boxSize={4} color="teal.500" />
                </Box>
                {nav.title}
              </Text>
            </ChakraLink>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Sidebar;
