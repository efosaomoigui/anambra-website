import { articleEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchArticles = async () => {
  const response = await http.get(articleEndpoints.all);
  return response.data;
};

export const fetchArticleById = async (id: string) => {
  const response = await http.get(articleEndpoints.byId(id));
  return response.data;
};

export const createArticle = async (data: any) => {
  const response = await http.post(articleEndpoints.all, data);
  return response.data;
};

export const updateArticle = async (id: string, data: any) => {
  const response = await http.put(articleEndpoints.byId(id), data);
  return response.data;
};

export const deleteArticle = async (id: string) => {
  const response = await http.delete(articleEndpoints.byId(id));
  return response.data;
};
