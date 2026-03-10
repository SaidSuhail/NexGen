import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../Api/userapi";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};