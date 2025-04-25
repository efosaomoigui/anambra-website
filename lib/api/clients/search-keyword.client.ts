import { searchKeywordEndpoints } from "../Endpoints/Endpoints";
import http from "../http";

export const fetchSearchKeywords = async () => {
  const response = await http.get(searchKeywordEndpoints.all);
  return response.data;
};

export const fetchSearchKeywordById = async (id: string) => {
  const response = await http.get(searchKeywordEndpoints.byId(id));
  return response.data;
};

export const createSearchKeyword = async (data: any) => {
  const response = await http.post(searchKeywordEndpoints.all, data);
  return response.data;
};

export const updateSearchKeyword = async (id: string, data: any) => {
  const response = await http.put(searchKeywordEndpoints.byId(id), data);
  return response.data;
};

export const deleteSearchKeyword = async (id: string) => {
  const response = await http.delete(searchKeywordEndpoints.byId(id));
  return response.data;
};
