import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

function authLink(): ApolloLink {
  return setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
    },
  }));
}

function httpLink(): ApolloLink {
  return new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  });
}

function createLink() {
  const links = [];
  if (process.env.NEXT_PUBLIC_BACKEND_TOKEN) {
    links.push(authLink());
  }
  links.push(httpLink());
  return ApolloLink.from(links);
}

const client = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache(),
  link: createLink(),
});

export default client;
