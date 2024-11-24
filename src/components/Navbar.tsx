import { HStack, Image, Text, Spacer } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColoModeSwitch from "./ColoModeSwitch";
import SearchInput from "./SearchInput";
import { SearchProps } from "./SearchInput";

const Navbar = ({ onSearch }: SearchProps) => {
  return (
    <HStack p={4}>
      <Image src={logo} alt="logo" boxSize="30px" overflow="hidden" />
      <Spacer />
      <SearchInput onSearch={onSearch} />
      <ColoModeSwitch />
    </HStack>
  );
};

export default Navbar;
