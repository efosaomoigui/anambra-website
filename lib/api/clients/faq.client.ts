import { faqEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchFaqs = async () => {
  const response = await http.get(faqEndpoints.all);
  return response.data;
};

export const fetchFaqById = async (id: string) => {
  const response = await http.get(faqEndpoints.byId(id));
  return response.data;
};

export const createFaq = async (data: any) => {
  const response = await http.post(faqEndpoints.all, data);
  return response.data;
};

export const updateFaq = async (id: string, data: any) => {
  const response = await http.put(faqEndpoints.byId(id), data);
  return response.data;
};

export const deleteFaq = async (id: string) => {
  const response = await http.delete(faqEndpoints.byId(id));
  return response.data;
};
