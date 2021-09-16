import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
const { REACT_APP_GRAPHQL_URI } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_URI,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
