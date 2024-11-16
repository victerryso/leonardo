"use client";

import { useContext } from "react";
import AppLayout from "./components/app-layout";
import AuthContext from "./contexts/auth-context";
import { Heading } from "@chakra-ui/react";
import { redirect } from "next/navigation";

const HomePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <AppLayout>
      <Heading as="h1">Howdy {auth?.username}! 👋</Heading>
    </AppLayout>
  );
};

export default HomePage;
