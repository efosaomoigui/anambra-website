import { serviceEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchServices = async () => {
  const response = await http.get(serviceEndpoints.all);
  return response.data;
};

export const fetchServiceById = async (id: string) => {
  const response = await http.get(serviceEndpoints.byId(id));
  return response.data;
};

export const createService = async (data: any) => {
  const response = await http.post(serviceEndpoints.all, data);
  return response.data;
};

export const updateService = async (id: string, data: any) => {
  const response = await http.put(serviceEndpoints.byId(id), data);
  return response.data;
};

export const deleteService = async (id: string) => {
  const response = await http.delete(serviceEndpoints.byId(id));
  return response.data;
};
