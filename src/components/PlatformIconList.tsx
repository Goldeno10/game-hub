import React from "react";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { GiGamepad } from "react-icons/gi";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    iOS: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: GiGamepad,
    ios: MdPhoneIphone,
  };

  return (
    <>
      <HStack margin={1}>
        {platforms.map((platform) => (
          <Icon key={platform.id} color={"gray.500"}>
            {platformIcons[platform.slug] ? (
              React.createElement(platformIcons[platform.slug])
            ) : (
              <span>{platform.name}</span>
            )}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
