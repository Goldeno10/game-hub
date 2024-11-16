import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColoModeSwitch from "./ColoModeSwitch";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="50px" />
      <Text>Home</Text>
      <ColoModeSwitch/>
    </HStack>
  );
};

export default Navbar;
