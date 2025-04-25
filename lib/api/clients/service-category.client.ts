import { serviceCategoryEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchServiceCategories = async () => {
  const response = await http.get(serviceCategoryEndpoints.all);
  return response.data;
};

export const fetchServiceCategoryById = async (id: string) => {
  const response = await http.get(serviceCategoryEndpoints.byId(id));
  return response.data;
};

export const createServiceCategory = async (data: any) => {
  const response = await http.post(serviceCategoryEndpoints.all, data);
  return response.data;
};

export const updateServiceCategory = async (id: string, data: any) => {
  const response = await http.put(serviceCategoryEndpoints.byId(id), data);
  return response.data;
};

export const deleteServiceCategory = async (id: string) => {
  const response = await http.delete(serviceCategoryEndpoints.byId(id));
  return response.data;
};
