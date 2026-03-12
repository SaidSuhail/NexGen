import api from "./axios";

export const getUsers = async () => {
  const response = await api.get("/COM_API_/CMUser/GetAllUsers");
  return response.data;
};