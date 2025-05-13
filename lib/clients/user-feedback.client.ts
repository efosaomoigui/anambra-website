import { userFeedbackEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchUserFeedbacks = async () => {
  const response = await http.get(userFeedbackEndpoints.all);
  return response.data;
};

export const fetchUserFeedbackById = async (id: string) => {
  const response = await http.get(userFeedbackEndpoints.byId(id));
  return response.data;
};

export const createUserFeedback = async (data: any) => {
  const response = await http.post(userFeedbackEndpoints.all, data);
  return response.data;
};

export const updateUserFeedback = async (id: string, data: any) => {
  const response = await http.put(userFeedbackEndpoints.byId(id), data);
  return response.data;
};

export const deleteUserFeedback = async (id: string) => {
  const response = await http.delete(userFeedbackEndpoints.byId(id));
  return response.data;
};
