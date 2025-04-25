import { pageEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchPages = async () => {
  const response = await http.get(pageEndpoints.all);
  return response.data;
};

export const fetchPageById = async (id: string) => {
  const response = await http.get(pageEndpoints.byId(id));
  return response.data;
};

export const createPage = async (data: any) => {
  const response = await http.post(pageEndpoints.all, data);
  return response.data;
};

export const updatePage = async (id: string, data: any) => {
  const response = await http.put(pageEndpoints.byId(id), data);
  return response.data;
};

export const deletePage = async (id: string) => {
  const response = await http.delete(pageEndpoints.byId(id));
  return response.data;
};
