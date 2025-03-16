import { View, Text } from "react-native";

import React from "react";
import { useAuth } from "@/src/hooks/useAuth";
import { Link } from "expo-router";

const Dashboard = () => {
  const { session } = useAuth();

  return (
    <View className="bg-red-100 flex-1 items-center justify-center">
      <Text>Dashboard</Text>
      <Link href="/(public)">IDI NA LOGIN</Link>
    </View>
  );
};

export default Dashboard;
