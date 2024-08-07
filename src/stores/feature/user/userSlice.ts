import { StateCreator } from "zustand";

interface MeResponse {}

export interface UserSlice {
  user: MeResponse | null;
  setUser: (user: MeResponse | null) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get, api) => ({
  user: null,
  setUser: (user) => set((state) => ({ user: user })),
});
