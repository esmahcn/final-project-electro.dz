import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: baseURL + "/api",
  headers: { "Content-Type": "application/json" },
});

// optionally attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;