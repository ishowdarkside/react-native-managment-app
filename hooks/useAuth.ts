import { queryKeys } from "@/keyFactory";
import { AuthType } from "@/types/authTypes";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const QueryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: queryKeys.auth,
    gcTime: Infinity,
    staleTime: Infinity,
    queryFn: () => Promise.resolve<AuthType>({ token: undefined, user: undefined }),
  });

  const setAuth = (data: any) => QueryClient.setQueryData(queryKeys.auth, data);

  return { user, isLoading, setAuth };
};
