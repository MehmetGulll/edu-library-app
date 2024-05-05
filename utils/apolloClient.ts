import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.HASURA_CLIENT_URI || "",
    headers: {
      "x-hasura-admin-secret": process.env.X_HASURA_SECRET_ADMIN || "",
    },
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
});
