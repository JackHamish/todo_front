import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (request) => {
  return request;
});

export const api = axiosInstance;
