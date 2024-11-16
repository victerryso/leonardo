import { Box, Container, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ROUTES } from "../constants";

const Header = () => (
  <header>
    <Container maxW="7xl" padding="4">
      <Heading as="span">
        <Link href={ROUTES.HOME}>Rick and Morty</Link>
      </Heading>
    </Container>
  </header>
);

export default Header;
