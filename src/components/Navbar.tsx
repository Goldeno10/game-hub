import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColoModeSwitch from "./ColoModeSwitch";

const Navbar = () => {
  return (
    <HStack p={4} m={4}>
      <Image src={logo} alt="logo" boxSize="30px" overflow="hidden" />
      <Text>Home</Text>
      <Spacer />
      <ColoModeSwitch />
    </HStack>
  );
};

export default Navbar;
