import { eventEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchEvents = async () => {
  const response = await http.get(eventEndpoints.all);
  return response.data;
};

export const fetchEventById = async (id: string) => {
  const response = await http.get(eventEndpoints.byId(id));
  return response.data;
};

export const createEvent = async (data: any) => {
  const response = await http.post(eventEndpoints.all, data);
  return response.data;
};

export const updateEvent = async (id: string, data: any) => {
  const response = await http.put(eventEndpoints.byId(id), data);
  return response.data;
};

export const deleteEvent = async (id: string) => {
  const response = await http.delete(eventEndpoints.byId(id));
  return response.data;
};
