import axios from "axios";

const baseUrl = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (request) => {
  return request;
});

export const api = axiosInstance;
