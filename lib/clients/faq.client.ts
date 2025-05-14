// lib/clients/faq.client.ts
import { FaqQueries } from "@/lib/graphql/queries/faq";
import client from "@/lib/http";

export const fetchAllFaqs = async () => {
  const { data } = await client.query({
    query: FaqQueries.root,
  });
  return data.faqs;
};

export const fetchFaqById = async (documentId: string) => {
  const { data } = await client.query({
    query: FaqQueries.byId,
    variables: { documentId },
  });
  return data.faq;
};
