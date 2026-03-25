import { create } from "zustand";
import { ProductItem } from "../../../shared/utils/types";

export interface ShopFiltersState {
  size: string | null;
  price: string[] | null;
  color: string | null;
  style: string | null;
  type: string | null;
  sort: string | null;
}

interface ShopActionsState {
  setShopProducts: (products: ProductItem[]) => void;
  setFilters: (filters: ShopFiltersState) => void;
  setFilter: <K extends keyof ShopFiltersState>(
    key: K,
    value: ShopFiltersState[K],
  ) => void;
}

interface ShopState {
  shopProducts: ProductItem[];
  shopFilters: ShopFiltersState;
  actions: ShopActionsState;
}

const initialFiltersState: ShopFiltersState = {
  size: null,
  price: null,
  color: null,
  style: null,
  type: null,
  sort: null,
};

const useShopStore = create<ShopState>()((set) => ({
  shopProducts: [],
  shopFilters: initialFiltersState,
  actions: {
    setShopProducts: (products) => set(() => ({ shopProducts: products })),
    setFilters: (filters) => set(() => ({ shopFilters: filters })),
    setFilter: (key, value) =>
      set((state) => ({
        shopFilters: {
          ...state.shopFilters,
          [key]: value,
        },
      })),
  },
}));

export const useShopActions = () => useShopStore((state) => state.actions);
export const useShopProducts = () =>
  useShopStore((state) => state.shopProducts);
export const useShopFilters = () => useShopStore((state) => state.shopFilters);
