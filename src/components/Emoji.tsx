import thums_up from "../assets/ThumbsUp.png";
import bulls_eye from "../assets/BullsEye.png";
import meh from "../assets/Meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thums_up, alt: "recommended", boxSize: "25px" },
    5: { src: bulls_eye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
