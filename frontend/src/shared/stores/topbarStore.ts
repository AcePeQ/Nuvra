import { create } from "zustand";

interface TopbarState {
  isOpen: boolean;
  actions: TopbarActions;
  headerHeight: number;
}

interface TopbarActions {
  closeTopbar: () => void;
}

const useTopbarStore = create<TopbarState>((set) => ({
  isOpen: true,
  headerHeight: 120,
  actions: {
    closeTopbar: () => set({ isOpen: false, headerHeight: 82 }),
  },
}));

export const useTopbarIsOpen = () => useTopbarStore((state) => state.isOpen);
export const useTopbarHeaderHeight = () =>
  useTopbarStore((state) => state.headerHeight);
export const useTopbarActions = () => useTopbarStore((state) => state.actions);
