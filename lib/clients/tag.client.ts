import { tagEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchTags = async () => {
  const response = await http.get(tagEndpoints.all);
  return response.data;
};

export const fetchTagById = async (id: string) => {
  const response = await http.get(tagEndpoints.byId(id));
  return response.data;
};

export const createTag = async (data: any) => {
  const response = await http.post(tagEndpoints.all, data);
  return response.data;
};

export const updateTag = async (id: string, data: any) => {
  const response = await http.put(tagEndpoints.byId(id), data);
  return response.data;
};

export const deleteTag = async (id: string) => {
  const response = await http.delete(tagEndpoints.byId(id));
  return response.data;
};
