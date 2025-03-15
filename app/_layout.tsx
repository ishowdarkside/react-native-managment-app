import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@/app/globals.css";

const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack initialRouteName="(private)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(private)" />
        <Stack.Screen name="(public)" />
      </Stack>
    </QueryClientProvider>
  );
}
