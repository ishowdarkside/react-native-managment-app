import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link, Redirect } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import { useAuthActions } from "@/src/modules/Auth/hooks/useAuthActions";
import { useAuth } from "@/src/hooks/useAuth";

const Login = () => {
  const { session } = useAuth();

  const { control, handleSubmit } = useForm<SignInWithPasswordCredentials>();
  const { loginMutation } = useAuthActions();

  const onSubmit = (data: SignInWithPasswordCredentials) => loginMutation(data);

  if (session?.session && session?.user) return <Redirect href="/(private)" />;

  return (
    <View className="flex-1 gap-4 items-center justify-center px-10 ">
      <Text className="mb-10">LOGIN</Text>

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(text) => field.onChange(text)}
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(text) => field.onChange(text)}
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
          />
        )}
        name="password"
      />

      <TouchableOpacity className="bg-violet-500 w-full p-3" onPress={handleSubmit(onSubmit)}>
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
