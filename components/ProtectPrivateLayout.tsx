import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { ReactNode } from "react";
import { ActivityIndicator } from "react-native";

const ProtectPrivateLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) return <ActivityIndicator size="large" color="#0000" />;
  if (!user?.user) return <Redirect href="/(public)" />;

  return children;
};

export default ProtectPrivateLayout;
