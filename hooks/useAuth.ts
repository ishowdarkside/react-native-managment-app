import { queryKeys } from "@/keyFactory";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const initialUserData = { token: undefined, user: undefined };

export const useAuth = () => {
  const QueryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: queryKeys.auth,
    gcTime: Infinity,
    queryFn: () => Promise.resolve({ token: undefined, user: undefined }),
    initialData: initialUserData,
  });

  const setAuth = (data: any) => QueryClient.setQueryData(queryKeys.auth, data);

  return { user, isLoading, setAuth };
};
