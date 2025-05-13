import { categoryEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchCategories = async () => {
  const response = await http.get(categoryEndpoints.all);
  return response.data;
};

export const fetchCategoryById = async (id: string) => {
  const response = await http.get(categoryEndpoints.byId(id));
  return response.data;
};

export const createCategory = async (data: any) => {
  const response = await http.post(categoryEndpoints.all, data);
  return response.data;
};

export const updateCategory = async (id: string, data: any) => {
  const response = await http.put(categoryEndpoints.byId(id), data);
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await http.delete(categoryEndpoints.byId(id));
  return response.data;
};
