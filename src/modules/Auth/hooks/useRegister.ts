import { useAuth } from "@/src/hooks/useAuth";
import { signup } from "@/src/services/auth";
import { SignUpType } from "@/src/types/authTypes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Toast } from "toastify-react-native";

export const useRegister = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const { mutateAsync: registerMutation, isPending } = useMutation({
    mutationFn: (payload: SignUpType) => signup(payload),
    onSuccess: (res) => {
      setAuth(res);
      router.replace("/(private)");
    },
    onError: (err) => Toast.error(err.message),
  });
  return { registerMutation, isPending };
};
