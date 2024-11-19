import useGenre, { Genre } from "@/hooks/useGenre";
import getCropedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelecetGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelecetGenre }: Props) => {
  const { data, loading, error } = useGenre();

  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List.Root listStyleType={"none"}>
        {data.map((g) => (
          <List.Item key={g.id} paddingY="5px">
            <HStack>
              <Image
                src={getCropedImageUrl(g.image_background)}
                alt={g.name}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Link
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize={"lg"}
                onClick={() => onSelecetGenre(g)}
              >
                {g.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
