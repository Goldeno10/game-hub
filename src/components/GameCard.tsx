import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="100%">
      <Image
        src={getCropedImageUrl(game.background_image)}
        alt={game.name}
        height={200}
      />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
