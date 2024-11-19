import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";

  return (
    <Badge colorPalette={color} fontSize="12" padding={1} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
