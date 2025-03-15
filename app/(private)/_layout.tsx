import React from "react";
import { Stack } from "expo-router";
import ProtectPrivateLayout from "@/components/ProtectPrivateLayout";

const PrivateLayout = () => {
  return (
    <ProtectPrivateLayout>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </ProtectPrivateLayout>
  );
};

export default PrivateLayout;
