import { homepageEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchHomepage = async () => {
  const response = await http.get(homepageEndpoints.root);
  return response.data;
};

export const updateHomepage = async (data: any) => {
  const response = await http.put(homepageEndpoints.root, data);
  return response.data;
};

export const deleteHomepage = async () => {
  const response = await http.delete(homepageEndpoints.root);
  return response.data;
};
