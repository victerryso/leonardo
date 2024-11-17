import { useQuery } from "@apollo/client";
import { createGetCharacterQuery } from "../api/queries";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "./chakra/dialog";
import { redirect } from "next/navigation";
import { ROUTES } from "../constants";
import Loading from "./loading";
import ErrorMessage from "./error-message";

interface CharacterModalProps {
  characterId: string;
}

type HandleOpenChange = {
  open: boolean;
};

const CharacterModal = ({ characterId }: CharacterModalProps) => {
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
        <DialogHeader>
          <DialogTitle>{character?.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {loading && <Loading />}
          {error && <ErrorMessage />}
          {data && <p>{character.species}</p>}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default CharacterModal;
