"use client";

import { useQuery } from "@apollo/client";
import { Center, Heading, HStack, Stack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { createGetCharactersQuery } from "./api/queries";
import AppLayout from "./components/app-layout";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./components/chakra/pagination";
import CharacterList from "./components/character-list";
import CharacterModal from "./components/charater-modal";
import ErrorMessage from "./components/error-message";
import Loading from "./components/loading";
import AuthContext from "./contexts/auth";

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
      <section>
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
                <HStack hideBelow="sm">
                  <PaginationPrevTrigger />
                  <PaginationItems />
                  <PaginationNextTrigger />
                </HStack>
                <HStack hideFrom="sm">
                  <PaginationPrevTrigger />
                  <PaginationPageText />
                  <PaginationNextTrigger />
                </HStack>
              </PaginationRoot>
            </Center>

            {characterId && <CharacterModal characterId={characterId} />}
          </Stack>
        )}
      </section>
    </AppLayout>
  );
};

export default HomePage;
