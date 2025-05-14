// lib/clients/homepage.client.ts
import { HomepageQueries } from "@/lib/graphql/queries/homepage";
import client from "@/lib/http";

export const fetchHomepageData = async () => {
  const { data } = await client.query({
    query: HomepageQueries.root,
  });
  return data.homepage;
};
