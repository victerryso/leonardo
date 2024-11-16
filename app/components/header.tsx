import { Box, Container, Heading } from "@chakra-ui/react";

const Header = () => (
  <header>
    <Box width="100%" padding="4">
      <Container maxW="7xl">
        <Heading as="span">Rick and Morty</Heading>
      </Container>
    </Box>
  </header>
);

export default Header;
