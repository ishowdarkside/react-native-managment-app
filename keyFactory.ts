import { backendQueryKeyType, localQueryKeysTypes } from "@/src/types/queryKeysTypes";

export const localQueryKey = (queryKeyObject: localQueryKeysTypes) => [queryKeyObject];
export const backendQueryKey = (queryKeyObject: backendQueryKeyType) => [queryKeyObject];

export const queryKeys = {
  auth: localQueryKey({ component: "app", data: "UserData" }),
};
