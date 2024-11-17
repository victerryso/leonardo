import { Card, Image } from "@chakra-ui/react";

interface CharacterItemProps {
  id: string;
  image: string;
  name: string;
}

const CharacterItem = ({ image, name }: CharacterItemProps) => (
  <Card.Root maxW="sm" overflow="hidden" as="li">
    <Image src={image} alt={name} />
    <Card.Body gap="2">
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card.Root>
);

export default CharacterItem;
