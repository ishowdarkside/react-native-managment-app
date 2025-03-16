import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/keyFactory";

const Login = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { user: { email, password }, jwt: Math.random() };
    queryClient.setQueryData(queryKeys.auth, user);
    router.navigate("/(private)");
  };

  return (
    <View className="flex-1 gap-4 items-center justify-center px-10 ">
      <Text className="mb-10">LOGIN</Text>
      <TextInput
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
      />
      <TextInput
        onChangeText={(e) => setPassword(e)}
        placeholder="Password"
        className="py-3 px-2 w-full text-black bg-violet-400 rounded-sm"
      />

      <TouchableOpacity onPress={handleLogin} className="bg-violet-500 w-full p-3">
        <Text className="text-center font-bold uppercase text-violet-50">Login</Text>
      </TouchableOpacity>

      <Text>Don't have an account?</Text>
      <Link href="/(public)/register" className="text-violet-500">
        Register here
      </Link>
    </View>
  );
};

export default Login;
