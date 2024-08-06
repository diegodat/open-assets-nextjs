import { create } from "zustand";
import { createUserSlice, UserSlice } from "@/stores/feature/user/userSlice";

export type StoreState = UserSlice & {};

export const useStore = create<StoreState>((...a) => ({
  ...createUserSlice(...a),
}));
