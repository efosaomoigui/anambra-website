import { departmentEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchDepartments = async () => {
  const response = await http.get(departmentEndpoints.all);
  return response.data;
};

export const fetchDepartmentById = async (id: string) => {
  const response = await http.get(departmentEndpoints.byId(id));
  return response.data;
};

export const createDepartment = async (data: any) => {
  const response = await http.post(departmentEndpoints.all, data);
  return response.data;
};

export const updateDepartment = async (id: string, data: any) => {
  const response = await http.put(departmentEndpoints.byId(id), data);
  return response.data;
};

export const deleteDepartment = async (id: string) => {
  const response = await http.delete(departmentEndpoints.byId(id));
  return response.data;
};
