import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Home, Cadastro } from "./pages";
import { Sidebar, Header } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Flex h="100vh" flexDirection="column" className="bg-slate-800">
        <Header />
        <Flex w="100%" my="6" maxW={1200} mx="auto">
          <Sidebar />
          <Box w="100%">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
              </Routes>
            </Router>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default App;