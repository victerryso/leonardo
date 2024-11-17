import { Container, Flex, Heading, Separator } from "@chakra-ui/react";
import Link from "next/link";
import { ROUTES } from "../constants";
import { Avatar } from "./chakra/avatar";
import AuthContext, { isAuthenticated } from "../contexts/auth-context";
import { useContext } from "react";

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
            {isAuthenticated(auth) ? (
              <Avatar name={auth.username} />
            ) : (
              <Avatar />
            )}
          </Link>
        </Flex>
      </Container>
      <Separator />
    </header>
  );
};

export default Header;
