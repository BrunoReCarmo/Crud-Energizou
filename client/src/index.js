import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "./context";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode classname="bg-slate-800 h-screen">
    <ChakraProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
