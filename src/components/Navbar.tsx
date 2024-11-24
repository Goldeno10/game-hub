import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColoModeSwitch from "./ColoModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack p={4} m={4}>
      <Image src={logo} alt="logo" boxSize="30px" overflow="hidden" />
      <Spacer />
      <SearchInput />
      <ColoModeSwitch />
    </HStack>
  );
};

export default Navbar;
