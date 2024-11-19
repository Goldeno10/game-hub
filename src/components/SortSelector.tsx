import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export const SortSelector = () => {
  return (
    <MenuRoot rightIcon={<BsChevronDown />}>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          Oder by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Data added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
