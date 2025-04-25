import { mdaEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchMdas = async () => {
  const response = await http.get(mdaEndpoints.all);
  return response.data;
};

export const fetchMdaById = async (id: string) => {
  const response = await http.get(mdaEndpoints.byId(id));
  return response.data;
};

export const createMda = async (data: any) => {
  const response = await http.post(mdaEndpoints.all, data);
  return response.data;
};

export const updateMda = async (id: string, data: any) => {
  const response = await http.put(mdaEndpoints.byId(id), data);
  return response.data;
};

export const deleteMda = async (id: string) => {
  const response = await http.delete(mdaEndpoints.byId(id));
  return response.data;
};
