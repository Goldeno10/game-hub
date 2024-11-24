import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenre";
import { GameQuery } from "@/App";

export interface Props {
  gameQuery: GameQuery;
}

// const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [...Array(10).keys()];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={3}
        borderRadius={10}
        overflow={"hidden"}
        padding={3}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
