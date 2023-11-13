import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "./context";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

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
