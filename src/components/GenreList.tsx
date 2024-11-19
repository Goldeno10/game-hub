import useGenre from "@/hooks/useGenre";
import getCropedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenre();

  return (
    <>
      <List.Root>
        {data.map((g) => (
          <List.Item key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={getCropedImageUrl(g.image_background)}
                alt={g.name}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Text>{g.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
