import { Stack, usePathname } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function RootLayout() {
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack initialRouteName="(private)">
        <Stack.Screen name="(private)" options={{ headerShown: false }} />
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
