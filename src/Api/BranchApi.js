import api from "./axios";


const getAllBranches = async () => {
  const response = await api.get("/COM_API_/CMUser/get-all-branches");
  return response.data;
}

const getBranchById = async (branchId) => {
  const response = await api.get(`/COM_API_/CMUser/get-branch/${branchId}`);
  return response.data;
}

const createBranch = async (branchData) => {
  const response = await api.post("/COM_API_/CMUser/create-branch", branchData);
  return response.data;
}

const updateBranch = async (branchId, branchData) => {
  const response = await api.put(`/COM_API_/CMUser/update-branch/${branchId}`, branchData);
  return response.data;
}

const deleteBranch = async (branchId) => {
  const response = await api.delete(`/COM_API_/CMUser/delete-branch/${branchId}`);
  return response.data;
}

export { getAllBranches, createBranch, updateBranch, deleteBranch };
