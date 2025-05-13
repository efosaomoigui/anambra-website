import { serviceDetailEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchServicesDetails = async () => {
  const response = await http.get(serviceDetailEndpoints.all);
  return response.data;
};

export const fetchServiceDetailById = async (id: string) => {
  const response = await http.get(serviceDetailEndpoints.byId(id));
  return response.data;
};

export const createServiceDetail = async (data: any) => {
  const response = await http.post(serviceDetailEndpoints.all, data);
  return response.data;
};

export const updateServiceDetail = async (id: string, data: any) => {
  const response = await http.put(serviceDetailEndpoints.byId(id), data);
  return response.data;
};

export const deleteServiceDetail = async (id: string) => {
  const response = await http.delete(serviceDetailEndpoints.byId(id));
  return response.data;
};
