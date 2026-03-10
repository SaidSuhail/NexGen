import api from "./axios";

export const loginUser = async (loginData) => {

  const response = await api.post(
    "/COM_API_/CMUser/LoginUser",
    loginData
  );

  return response.data;
};