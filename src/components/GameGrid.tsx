import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/App";

export interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [...Array(10).keys()];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
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
  );
};

export default GameGrid;
