import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import React from "react";
import { SignUpType } from "@/src/types/authTypes";
import { Link, useRouter } from "expo-router";
import { useRegister } from "@/src/modules/Auth/hooks/useRegister";
import { Toast } from "toastify-react-native";
import { useAuth } from "@/src/hooks/useAuth";

const Register = () => {
  const { handleSubmit, control } = useForm<SignUpType>();

  const { registerMutation, isPending } = useRegister();

  const onSubmit: SubmitHandler<SignUpType> = async (data) => registerMutation(data);

  return (
    <View className="flex-1 h-full gap-4 bg-violet-100 items-center justify-center px-10 w-full">
      <Text>REGISTER {isPending && "REGISTERING..."}</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(value) => field.onChange(value)}
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
            placeholder="First Name"
          />
        )}
        name="first_name"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(value) => field.onChange(value)}
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
            placeholder="Last Name"
          />
        )}
        name="last_name"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(value) => field.onChange(value)}
            textContentType="emailAddress"
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
            placeholder="Email"
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...field}
            onChangeText={(value) => field.onChange(value)}
            className="py-3 px-2 w-full text-black  bg-violet-400 rounded-sm"
            placeholder="Password"
          />
        )}
        name="password"
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} className="bg-violet-500 w-full">
        <Text className="text-center font-bold text-violet-50">Submit</Text>
      </TouchableOpacity>

      <View className="flex-row gap-4">
        <Text>Already have an Account?</Text>
        <Link href="/(public)" className="text-violet-500">
          Login Here
        </Link>

        <TouchableOpacity onPress={() => Toast.success("SUCCESS")}>
          <Text>CLICK ME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
