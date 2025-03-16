import { useAuth } from "@/src/hooks/useAuth";
import { login, signup } from "@/src/services/auth";
import { SignUpType } from "@/src/types/authTypes";
import { Session, SignInWithPasswordCredentials, User } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Toast } from "toastify-react-native";

export const useAuthActions = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const onSuccessfulAuth = (response: { user: User | null; session: Session | null }) => {
    setAuth(response);
    console.log("HEJ EVO NA LOGIN:", response);
    router.replace("/(private)");
  };

  const { mutateAsync: registerMutation, isPending } = useMutation({
    mutationFn: (payload: SignUpType) => signup(payload),
    onSuccess: onSuccessfulAuth,
    onError: (err) => Toast.error(err.message, "top"),
  });

  const { mutateAsync: loginMutation, isPending: isLogginIn } = useMutation({
    mutationFn: (payload: SignInWithPasswordCredentials) => login(payload),
    onSuccess: onSuccessfulAuth,
    onError: (err) => Toast.error(err.message, "top"),
  });

  return { registerMutation, isPending, loginMutation, isLogginIn };
};
