import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import ToastManager from "toastify-react-native";
import "@/src/app/globals.css";

const queryClient = new QueryClient();

export default function RootLayout() {
  useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

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
