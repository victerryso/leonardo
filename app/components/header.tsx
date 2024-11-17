import { Container, Flex, Heading, Separator } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { ROUTES } from "../constants";
import AuthContext, { isRegistered } from "../contexts/auth";
import { Avatar } from "./chakra/avatar";

const Header = () => {
  const { auth } = useContext(AuthContext);

  return (
    <header>
      <Container maxW="7xl" paddingY="2">
        <Flex gap="4" align="center" justify="space-between">
          <Heading as="span">
            <Link href={ROUTES.HOME}>Rick and Morty</Link>
          </Heading>
          <Link href={ROUTES.REGISTER}>
            {isRegistered(auth) ? <Avatar name={auth.username} /> : <Avatar />}
          </Link>
        </Flex>
      </Container>
      <Separator />
    </header>
  );
};

export default Header;
