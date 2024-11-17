"use client";

import React, { useContext, useEffect, useState } from "react";
import AppLayout from "./components/app-layout";
import AuthContext from "./contexts/auth-context";
import { Center, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { createGetCharactersQuery } from "./api/queries";
import CharacterList from "./components/character-list";
import { EmptyState } from "./components/chakra/empty-state";
import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./components/chakra/pagination";
import { useSearchParams } from "next/navigation";
import CharacterModal from "./components/charater-modal";
import Loading from "./components/loading";
import ErrorMessage from "./components/error-message";

const PAGE_SIZE = 20;

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const searchParams = useSearchParams();

  const [characterId, setCharacterId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const characterId = searchParams.get("characterId");

    setCharacterId(characterId);
  }, [searchParams]);

  const getCharactersQuery = createGetCharactersQuery(page);
  const { data, loading, error } = useQuery(getCharactersQuery);

  const characters = data?.characters.results;
  const count = data?.characters.info.count;

  return (
    <AppLayout>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {data && (
        <Stack gap="4">
          <Heading as="h1">Howdy {auth.username}! 👋</Heading>

          <CharacterList characters={characters} />

          <Center>
            <PaginationRoot
              count={count}
              page={page}
              pageSize={PAGE_SIZE}
              onPageChange={(event) => setPage(event.page)}
            >
              <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
              </HStack>
            </PaginationRoot>
          </Center>

          {characterId && <CharacterModal characterId={characterId} />}
        </Stack>
      )}
    </AppLayout>
  );
};

export default HomePage;
