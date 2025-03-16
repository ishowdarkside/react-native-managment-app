import { View, Text } from "react-native";

import React from "react";
import { useAuth } from "@/src/hooks/useAuth";

const Dashboard = () => {
  const { session } = useAuth();
  console.log(session);

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
