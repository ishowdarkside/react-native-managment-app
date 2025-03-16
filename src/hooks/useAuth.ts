import { useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncSotrage from "@react-native-async-storage/async-storage";

import { queryKeys } from "@/keyFactory";
import { AuthType } from "@/src/types/authTypes";

export const useAuth = () => {
  const QueryClient = useQueryClient();

  const { data: session, isLoading } = useQuery({
    queryKey: queryKeys.auth,
    gcTime: Infinity,
    staleTime: Infinity,
    queryFn: async () => {
      const sessionStorageAuthData = await AsyncSotrage.getItem("session");
      if (sessionStorageAuthData) return Promise.resolve<AuthType>(JSON.parse(sessionStorageAuthData));
      else return Promise.resolve<AuthType>({ user: null, session: null });
    },
  });

  const setAuth = async (data: any) => {
    QueryClient.setQueryData(queryKeys.auth, data);
    await AsyncSotrage.setItem("session", JSON.stringify(data));
  };

  return { session, isLoading, setAuth };
};
