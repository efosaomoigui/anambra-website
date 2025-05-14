// lib/api/client.ts

import { governmentEndpoints } from "../graphql/queries/Endpoints";
import http from "../http";

export const fetchMinistries = async () => {
  const response = await http.get(governmentEndpoints.ministries);
  return response.data;
};

export const fetchExecutiveOfficials = async () => {
  const response = await http.get(governmentEndpoints.executiveOfficials);
  return response.data;
};

// Add similar functions for other endpoints
