// lib/clients/about.client.ts
import client from "@/lib/http";
import { aboutQueries } from "@/lib/api/endpoints/graphql/about";

export const fetchAbout = async () => {
  const { data } = await client.query({ query: aboutQueries.root });
  return data.about;
};
