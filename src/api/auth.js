import api from "./axios";

export const register = (payload) => api.post("/auth/register", payload).then(r => r.data);
export const login = (payload) => api.post("/auth/login", payload).then(r => r.data);
export const getProfile = () => api.get("/auth/profile"); // if you expose it