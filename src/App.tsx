import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlactform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `
        "nav"
        "main"
      `,
        lg: `
        "nav nav"
        "aside main"
      `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      {useBreakpointValue({
        base: null,
        lg: (
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onSelecetGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        ),
      })}
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid
          // selectedGenre={selectedGenre}
          // selectedPlatform={selectedPlactform}
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
