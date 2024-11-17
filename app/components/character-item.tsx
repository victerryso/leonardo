"use client";

import { Card, Image } from "@chakra-ui/react";

interface CharacterItemProps {
  image: string;
  name: string;
  onClick: () => void;
}

const CharacterItem = ({ image, name, onClick }: CharacterItemProps) => (
  <Card.Root as="li" maxW="sm" overflow="hidden" onClick={onClick}>
    <Image src={image} alt={name} />
    <Card.Body gap="2">
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card.Root>
);

export default CharacterItem;
