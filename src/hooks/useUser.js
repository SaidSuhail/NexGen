import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userapi";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
