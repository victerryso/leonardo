import { SimpleGrid } from "@chakra-ui/react";
import CharacterItem from "./character-item";
import { Character } from "../types";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList = ({ characters = [] }: CharacterListProps) => (
  <SimpleGrid minChildWidth="32" gap="4" as="ul">
    {characters.map((character: Character) => (
      <CharacterItem key={character.id} {...character} />
    ))}
  </SimpleGrid>
);

export default CharacterList;
