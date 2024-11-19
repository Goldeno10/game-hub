import { Card } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonText } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius="10" overflow="hidden">
      <Card.Body>
        <Skeleton height="200px" />
        <SkeletonText noOfLines={3} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
