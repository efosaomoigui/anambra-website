import { aboutEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchAbout = async () => {
  const response = await http.get(aboutEndpoints.root);
  return response.data;
};

export const updateAbout = async (data: any) => {
  const response = await http.put(aboutEndpoints.root, data);
  return response.data;
};

export const deleteAbout = async () => {
  const response = await http.delete(aboutEndpoints.root);
  return response.data;
};
