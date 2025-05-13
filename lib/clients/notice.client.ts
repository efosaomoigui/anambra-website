import { noticeEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchNotices = async () => {
  const response = await http.get(noticeEndpoints.all);
  return response.data;
};

export const fetchNoticeById = async (id: string) => {
  const response = await http.get(noticeEndpoints.byId(id));
  return response.data;
};

export const createNotice = async (data: any) => {
  const response = await http.post(noticeEndpoints.all, data);
  return response.data;
};

export const updateNotice = async (id: string, data: any) => {
  const response = await http.put(noticeEndpoints.byId(id), data);
  return response.data;
};

export const deleteNotice = async (id: string) => {
  const response = await http.delete(noticeEndpoints.byId(id));
  return response.data;
};
