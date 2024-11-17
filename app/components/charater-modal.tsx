import { useQuery } from "@apollo/client";
import { Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { createGetCharacterQuery } from "../api/queries";
import { ROUTES } from "../constants";
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
}

type HandleOpenChange = {
  open: boolean;
};

const CharacterModal = ({ characterId }: CharacterModalProps) => {
  // Get data of character using GraphQL
  const getCharacterQuery = createGetCharacterQuery(characterId);
  const { data, loading, error } = useQuery(getCharacterQuery);

  const character = data?.character;

  // When we close the dialog, we update the route to go back home
  const handleOpenChange = ({ open }: HandleOpenChange) => {
    if (!open) {
      redirect(ROUTES.HOME);
    }
  };

  return (
    <DialogRoot open onOpenChange={handleOpenChange}>
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
