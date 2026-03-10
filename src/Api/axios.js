import axios from "axios";
const baseURL =
  window.location.hostname === "localhost"
    ? "https://localhost:7088"
    : "https://commonmaster-v1-7.onrender.com";
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

// attach token automatically
api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;