import axios from "axios";

// Should be moved to .env
const baseUrl = "http://localhost:3001/api/v1";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

export const api = axiosInstance;
