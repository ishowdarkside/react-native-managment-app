import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ToastManager from "toastify-react-native";
import "@/src/app/globals.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <>
      <ToastManager position="bottom" showProgressBar={false} style={{ width: "100%", marginLeft: 10, marginRight: 10 }} />
      <QueryClientProvider client={queryClient}>
        <Stack initialRouteName="(private)" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(private)" />
          <Stack.Screen name="(public)" />
        </Stack>
      </QueryClientProvider>
    </>
  );
}
