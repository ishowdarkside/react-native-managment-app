import { SignUpType } from "@/src/types/authTypes";
import { supabase } from "@/src/services/supabase";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";

export const signup = async (payload: SignUpType) => {
  const { data, error } = await supabase.auth.signUp(payload);

  if (error) throw error;
  return data;
};

export const login = async (payload: SignUpWithPasswordCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) throw error;
  return data;
};
