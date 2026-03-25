import { create } from "zustand";
import { ProductItem } from "../../../shared/utils/types";

interface ShopActionsState {}

interface ShopState {
  shopProducts: ProductItem[] | [];
  shopFilters: {
    size: string | null;
    price: string[];
    color: string | null;
    style: string | null;
    type: string | null;
    sort: string;
  } | null;
  actions: ShopActionsState;
}

const useShopStore = create<ShopState>()((set) => ({
  shopProducts: [],
  shopFilters: null,
  actions: {},
}));

export const useShopActions = () => useShopStore((state) => state.actions);
export const useShopProducts = () =>
  useShopStore((state) => state.shopProducts);
export const useShopFilters = () => useShopStore((state) => state.shopFilters);
