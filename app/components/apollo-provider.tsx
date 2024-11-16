import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface ProviderProps {
  children: React.ReactNode;
}

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const Provider = ({ children }: ProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
