import { create } from "zustand";
import { ProductItem } from "../../../shared/utils/types";

export type CartProduct = ProductItem & {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
};

interface CartActions {
  addToCart: (item: CartProduct) => void;
  removeFromCart: (item: CartProduct) => void;
  clearCart: () => void;
  updateQuantity: (item: CartProduct) => void;
}

interface CartState {
  cart: CartProduct[];
  actions: CartActions;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  actions: {
    addToCart: (item) =>
      set((state) => {
        const itemInCartIndex = state.cart.findIndex(
          (stateItem) =>
            stateItem.id === item.id &&
            stateItem.selectedColor === item.selectedColor &&
            stateItem.selectedSize === item.selectedSize,
        );

        if (itemInCartIndex === -1) {
          return { cart: [...state.cart, item] };
        }

        const updatedCart = [...state.cart];

        updatedCart[itemInCartIndex].quantity = item.quantity;

        return { cart: updatedCart };
      }),
    removeFromCart: (item) =>
      set((state) => ({
        cart: state.cart.filter(
          (stateItem) =>
            stateItem.id !== item.id &&
            stateItem.selectedColor === item.selectedColor &&
            stateItem.selectedSize === item.selectedSize,
        ),
      })),
    clearCart: () => set({ cart: [] }),
    updateQuantity: (item) =>
      set((state) => {
        const findedItemIndex = state.cart.findIndex(
          (stateItem) =>
            stateItem.id === item.id &&
            stateItem.selectedColor === item.selectedColor &&
            stateItem.selectedSize === item.selectedSize,
        );
        console.log(findedItemIndex);
        if (findedItemIndex === -1) return state;

        const updatedCart = [...state.cart];

        const cartItem = updatedCart[findedItemIndex];

        if (item.quantity === -1 && cartItem.quantity === 1) {
          updatedCart.splice(findedItemIndex, 1);
          return { cart: updatedCart };
        }

        if (item.quantity === -1) {
          updatedCart[findedItemIndex].quantity -= 1;
        }

        if (item.quantity === 1) {
          updatedCart[findedItemIndex].quantity += 1;
        }

        return { cart: updatedCart };
      }),
  },
}));

export const useCart = () => useCartStore((state) => state.cart);
export const useCartActions = () => useCartStore((state) => state.actions);
