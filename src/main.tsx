import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Theme } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
// import system from "./theme";
import App from "./App";
import { ColorModeProvider } from "./components/ui/color-mode";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </React.StrictMode>
);
// 62b7b72cddb54d9dbefeadc131123a29