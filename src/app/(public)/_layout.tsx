import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default PublicLayout;
