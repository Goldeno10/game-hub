import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";
import theme from "@/theme";

const ColoModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch checked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColoModeSwitch;
