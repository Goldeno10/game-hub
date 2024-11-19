import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import usePlatforms from "@/hooks/usePlaforms";
import { Spinner } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, error, loading } = usePlatforms();
  if (error) return null;

  if (loading) return <Spinner />;
  return (
    <MenuRoot rightIcon={<BsChevronDown />}>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          Platforms {"  "} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
