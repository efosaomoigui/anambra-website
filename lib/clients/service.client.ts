// lib/clients/service.client.ts
import client from "@/lib/http";
import { serviceQueries } from "@/lib/api/endpoints/graphql/service";

export const fetchAllServices = async () => {
  const { data } = await client.query({ query: serviceQueries.all });
  return data.services;
};

export const fetchServiceById = async (id: string) => {
  const { data } = await client.query({
    query: serviceQueries.byId,
    variables: { id },
  });
  return data.service;
};

export const fetchServiceCategories = async () => {
  const { data } = await client.query({ query: serviceQueries.categories });
  return data.serviceCategories;
};
