import { uploadEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const uploadFile = async (data: any) => {
  const response = await http.post(uploadEndpoints.all, data);
  return response.data;
};

export const getUploadedFiles = async () => {
  const response = await http.get(uploadEndpoints.root);
  return response.data;
};

export const getFileById = async (id: string) => {
  const response = await http.get(uploadEndpoints.byId(id));
  return response.data;
};

export const deleteUploadedFile = async (id: string) => {
  const response = await http.delete(uploadEndpoints.byId(id));
  return response.data;
};
