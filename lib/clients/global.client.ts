import { globalEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchGlobal = async () => {
  const response = await http.get(globalEndpoints.root);
  return response.data;
};

export const updateGlobal = async (data: any) => {
  const response = await http.put(globalEndpoints.root, data);
  return response.data;
};

export const deleteGlobal = async () => {
  const response = await http.delete(globalEndpoints.root);
  return response.data;
};
