import { Container } from "@chakra-ui/react";
import Header from "./header";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <Header />
    <main>
      <Container maxW="2xl" padding="4">
        {children}
      </Container>
    </main>
  </>
);

export default AppLayout;
