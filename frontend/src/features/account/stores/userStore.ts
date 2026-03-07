import { create } from "zustand";

type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  is_email_verified: boolean;
  created_at: string;
  updated_at: string;
  is_first_order: boolean;
};

interface UserActions {
  login: (user: User) => void;
  logout: () => void;
}

interface UserState {
  user: User | null;
  actions: UserActions;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  actions: {
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
  },
}));

export const useUser = () => useUserStore((state) => state.user);
export const useIsLoggedIn = () =>
  useUserStore((state) => (state.user ? true : false));
export const useIsFirstOrder = () =>
  useUserStore((state) => state.user?.is_first_order);
export const useUserActions = () => useUserStore((state) => state.actions);
