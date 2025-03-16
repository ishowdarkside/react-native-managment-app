import { SignUpType } from "@/src/types/authTypes";
import { supabase } from "@/src/services/supabase";

export const signup = async (payload: SignUpType) => {
  const { data, error } = await supabase.auth.signUp(payload);

  if (error) throw error;
  return data;
};
