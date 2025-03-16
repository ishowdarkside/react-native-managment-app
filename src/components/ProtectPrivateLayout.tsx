import { useAuth } from "@/src/hooks/useAuth";
import { Redirect } from "expo-router";
import { ReactNode } from "react";
import { ActivityIndicator } from "react-native";

const ProtectPrivateLayout = ({ children }: { children: ReactNode }) => {
  const { session } = useAuth();

  if (!session) return <ActivityIndicator size="large" color="#0000" />;
  if (!session?.user) return <Redirect href="/(public)" />;

  return children;
};

export default ProtectPrivateLayout;
