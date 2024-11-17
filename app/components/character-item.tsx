"use client";

import { Card, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ROUTES } from "../constants";

interface CharacterItemProps {
  id: string;
  image: string;
  name: string;
}

const CharacterItem = ({ id, image, name }: CharacterItemProps) => {
  const href = ROUTES.CHARACTER(id);

  return (
    <Card.Root as="li" maxW="sm" overflow="hidden">
      <Link href={href} scroll={false}>
        <Image src={image} alt={name} />
        <Card.Body gap="2">
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card.Root>
  );
};

export default CharacterItem;
