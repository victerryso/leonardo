import { Box, Container, Heading } from "@chakra-ui/react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <header>
      <Box width="100%" padding="4">
        <Container maxW="7xl">
          <Heading as="span">Rick and Morty</Heading>
        </Container>
      </Box>
    </header>
    <main>
      <Container centerContent maxW="2xl" paddingY="8">
        {children}
      </Container>
    </main>
  </>
);

export default AppLayout;
