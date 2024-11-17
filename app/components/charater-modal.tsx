import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import { createGetCharacterQuery } from "../api/queries";
import { Avatar } from "./chakra/avatar";
import { DataListItem, DataListRoot } from "./chakra/data-list";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "./chakra/dialog";
import ErrorMessage from "./error-message";
import Loading from "./loading";

interface CharacterModalProps {
  characterId: string;
  onClose: () => void;
}

const CharacterModal = ({ characterId, onClose }: CharacterModalProps) => {
  // Get data of character using GraphQL
  const getCharacterQuery = createGetCharacterQuery(characterId);
  const { data, loading, error } = useQuery(getCharacterQuery);

  const character = data?.character;

  return (
    <DialogRoot open onOpenChange={onClose}>
      <DialogContent>
        {character && (
          <DialogHeader>
            <Flex gap="4" align="center">
              <Avatar name={character?.name} src={character?.image} />
              <DialogTitle>{character?.name}</DialogTitle>
            </Flex>
          </DialogHeader>
        )}
        <DialogBody>
          {loading && <Loading />}
          {error && <ErrorMessage />}
          {character && (
            <DataListRoot orientation="horizontal">
              {character.gender && (
                <DataListItem label="Gender" value={character.gender} />
              )}
              {character.species && (
                <DataListItem label="Species" value={character.species} />
              )}
              {character.status && (
                <DataListItem label="Status" value={character.status} />
              )}
              {character.type && (
                <DataListItem label="Type" value={character.type} />
              )}
            </DataListRoot>
          )}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default CharacterModal;
