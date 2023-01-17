import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import server from "./mock/server";

function createLink() {
  const useMockedBackend = process.env.NEXT_PUBLIC_BACKEND_URL === undefined;
  if (useMockedBackend) {
    //server.listen();
    const uri = `http://localhost:3000/graphql`;
    return new HttpLink({ uri });
  }

  const authLink = () =>
    setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
      },
    }));
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  });

  const links = [];
  process.env.NEXT_PUBLIC_BACKEND_TOKEN && links.push(authLink());
  links.push(httpLink);
  return ApolloLink.from(links);
}
const client = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache(),
  link: createLink(),
});

export default client;
