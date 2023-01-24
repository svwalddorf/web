import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  fetchOptions: {
    next: {
      /**
       * Available options:
       * { cache: 'force-cache' }: Generates statically like getStaticProps.
       * { cache: 'no-store'}: Generates server-side upon every request like getServerSideProps.
       * { revalidate: 20 }: Generates statically but revalidates every 20 seconds
       */
      cache: "no-store",
    },
  },
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  name: "svw-web-app-apollo-client",
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
