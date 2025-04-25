import { authorEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchAuthors = async () => {
  const response = await http.get(authorEndpoints.all);
  return response.data;
};

export const fetchAuthorById = async (id: string) => {
  const response = await http.get(authorEndpoints.byId(id));
  return response.data;
};

export const createAuthor = async (data: any) => {
  const response = await http.post(authorEndpoints.all, data);
  return response.data;
};

export const updateAuthor = async (id: string, data: any) => {
  const response = await http.put(authorEndpoints.byId(id), data);
  return response.data;
};

export const deleteAuthor = async (id: string) => {
  const response = await http.delete(authorEndpoints.byId(id));
  return response.data;
};
