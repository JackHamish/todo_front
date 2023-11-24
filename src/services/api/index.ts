import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.BASE_AXIOS_URL,
    headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(async (request) => {
    return request;
});

export const api = axiosInstance;
