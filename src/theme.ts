import { defaultConfig, createSystem } from "@chakra-ui/react";

const config = {
  ...defaultConfig,
  initialColorMode: "dark",
};

const system = createSystem(config);

export default system;
