import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlaforms";
import { Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, loading } = usePlatforms();
  if (error) return null;

  if (loading) return <Spinner />;
  return (
    <MenuRoot rightIcon={<BsChevronDown />}>
      <MenuTrigger>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"} {"  "}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
