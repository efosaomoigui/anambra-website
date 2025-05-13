// lib/http.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://cms.anambrastate.gov.ng/headless/graphql",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
