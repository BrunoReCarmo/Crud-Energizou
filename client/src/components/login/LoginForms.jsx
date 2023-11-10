import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  chakra,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Alert,
  AlertIcon,
  Avatar,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { routes } from "../../api";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  const addLoginUrl = routes.login.add;

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    if (!email || !password) {
      setLoginError("Por favor, preencha o e-mail e a senha.");
      return;
    }

    try {
      const response = await fetch(addLoginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.token) {
        setLoginError(
          "Credenciais inválidas. Por favor, verifique seu e-mail e senha."
        );
        return;
      }

      const token = data.token;

      const expirationTime = 12 * 60 * 60 * 1000;

      localStorage.setItem("token", token);

      setTimeout(() => {
        localStorage.removeItem("token");
      }, expirationTime);
      history("/dashboard"); // Redirecionamento utilizando history.push
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        history("/dashboard");
      }
    };

    checkToken();
  }, [history]);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.800"
    >
      <Flex
        flexDirection="column"
        p={12}
        borderRadius={8}
        boxShadow="lg"
        backgroundColor="gray.700"
      >
        <Heading mb={6} color="white">
          <Avatar bg="teal.500" mr="2" />
          Login
        </Heading>
        {loginError && (
          <Alert
            status="error"
            width="42vh"
            position="absolute"
            top="1rem"
            right="1rem"
            rounded="lg"
            variant="left-accent"
          >
            <AlertIcon />
            {loginError}
          </Alert>
        )}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<CFaUserAlt color="gray.800" />}
          />
          <Input
            backgroundColor="gray.600"
            color="white"
            type="email"
            placeholder="E-mail"
            variant="filled"
            mb={3}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<CFaLock color="gray.800" />}
          />
          <Input
            type={showPassword ? "text" : "password"}
            backgroundColor="gray.600"
            color="white"
            placeholder="Senha"
            variant="filled"
            mb={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              backgroundColor="gray.700"
              color="white"
              size="sm"
              onClick={handleShowClick}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
