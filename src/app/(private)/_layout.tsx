import React from "react";
import { Tabs } from "expo-router";
import ProtectPrivateLayout from "@/src/components/ProtectPrivateLayout";
import { useAuth } from "@/src/hooks/useAuth";

const PrivateLayout = () => {
  useAuth();
  return (
    <ProtectPrivateLayout>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="drivers" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </ProtectPrivateLayout>
  );
};

export default PrivateLayout;
