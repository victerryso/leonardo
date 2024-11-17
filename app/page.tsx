"use client";

import React, { useContext, useState } from "react";
import AppLayout from "./components/app-layout";
import AuthContext from "./contexts/auth-context";
import { Heading, Spinner, Stack } from "@chakra-ui/react";
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

const PAGE_SIZE = 20;

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const [page, setPage] = useState(1);

  const getCharactersQuery = createGetCharactersQuery(page);
  const { data, loading, error } = useQuery(getCharactersQuery);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <EmptyState title="Something went wrong" />;
  }

  const characters = data.characters.results;
  const count = data.characters.info.count;

  return (
    <AppLayout>
      <Stack>
        <Heading as="h1">Howdy {auth.username}! 👋</Heading>

        <CharacterList characters={characters} />

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
      </Stack>
    </AppLayout>
  );
};

export default HomePage;
