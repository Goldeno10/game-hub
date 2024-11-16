import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";

const ColoModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  // console.log(">>>>>>>>>>>>>>>>>>>>>  ", colorMode);
  return (
    <HStack>
      <Switch isChecked={true} onChange={toggleColorMode} />
      <Text>Dark</Text>
    </HStack>
  );
};

export default ColoModeSwitch;
