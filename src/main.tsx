import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./components/ui/provider";
// import { ColorModeProvider } from "./components/ui/color-mode";
// import { ThemeProvider } from "next-themes";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      {/* <ChakraProvider value={theme}> */}
      {/* <ColorModeProvider> */}
      <App />
      {/* </ColorModeProvider> */}
      {/* </ChakraProvider> */}
    </Provider>
  </React.StrictMode>
);
