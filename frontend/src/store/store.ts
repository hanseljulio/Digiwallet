import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface LoginState {
  token: string;
  setToken: (newToken: string) => void;
}

export const useStoreLogin = create<LoginState>((set) => ({
  token: "",
  setToken: (newToken) => set({ token: newToken }),
}));

export const useStoreLoginPersist = create<LoginState>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        setToken: (newToken) => set({ token: newToken }),
      }),
      { name: "loginStore" }
    )
  )
);
