import { create } from "zustand";

interface TopbarState {
  isOpen: boolean;
  actions: TopbarActions;
}

interface TopbarActions {
  closeTopbar: () => void;
}

const useTopbarStore = create<TopbarState>((set) => ({
  isOpen: true,
  actions: {
    closeTopbar: () => set({ isOpen: false }),
  },
}));

export const useTopbarIsOpen = () => useTopbarStore((state) => state.isOpen);
export const useTopbarActions = () => useTopbarStore((state) => state.actions);
