// lib/clients/mda.client.ts
import client from "@/lib/http";
import { mdaQueries } from "@/lib/api/endpoints/graphql/mda";

export const fetchAllMDAs = async () => {
  const { data } = await client.query({ query: mdaQueries.all });
  return data.mdas;
};

export const fetchMDABySlug = async (slug: string) => {
  const { data } = await client.query({
    query: mdaQueries.bySlug,
    variables: { slug },
  });
  return data.mdas[0];
};
