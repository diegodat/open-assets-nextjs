import { StateCreator } from "zustand";

interface MeResponse {}

export interface UserSlice {
  user: MeResponse | null;
  setUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get, api) => ({
  user: null,
  setUser: () => set((state) => ({ user: state.user })),
});
