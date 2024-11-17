"use client";

import { useQuery } from "@apollo/client";
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { redirect, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { createGetCharactersQuery } from "./api/queries";
import AppLayout from "./components/app-layout";
import CharacterModal from "./components/charater-modal";
import ErrorMessage from "./components/error-message";
import Loading from "./components/loading";
import AuthContext from "./contexts/auth";
import CharacterItem from "./components/character-item";
import Pagination from "./components/pagination";

type Character = {
  id: string;
  image: string;
  name: string;
};

const PAGE_SIZE = 20;

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const searchParams = useSearchParams();

  const [characterId, setCharacterId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  // When the search parameters change, update the page state
  useEffect(() => {
    const page = Number(searchParams.get("page") ?? 1);

    setPage(page);
  }, [searchParams]);

  // Get data of characters using GraphQL
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
            <Heading as="h1">Howdy {auth.username ?? "there"}! 👋</Heading>

            <SimpleGrid minChildWidth="32" gap="4" as="ul">
              {characters.map((character: Character) => (
                <CharacterItem
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  onClick={() => setCharacterId(character.id)}
                />
              ))}
            </SimpleGrid>

            <Pagination
              count={count}
              page={page}
              pageSize={PAGE_SIZE}
              onPageChange={(event) => redirect(`/?page=${event.page}`)}
            />

            {characterId && (
              <CharacterModal
                characterId={characterId}
                onClose={() => setCharacterId(null)}
              />
            )}
          </Stack>
        )}
      </section>
    </AppLayout>
  );
};

export default HomePage;
