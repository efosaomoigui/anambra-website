import { publicAnnouncementEndpoints } from "../api/endpoints/graphql/Endpoints";
import http from "../http";

export const fetchPublicAnnouncements = async () => {
  const response = await http.get(publicAnnouncementEndpoints.all);
  return response.data;
};

export const fetchPublicAnnouncementById = async (id: string) => {
  const response = await http.get(publicAnnouncementEndpoints.byId(id));
  return response.data;
};

export const createPublicAnnouncement = async (data: any) => {
  const response = await http.post(publicAnnouncementEndpoints.all, data);
  return response.data;
};

export const updatePublicAnnouncement = async (id: string, data: any) => {
  const response = await http.put(publicAnnouncementEndpoints.byId(id), data);
  return response.data;
};

export const deletePublicAnnouncement = async (id: string) => {
  const response = await http.delete(publicAnnouncementEndpoints.byId(id));
  return response.data;
};
