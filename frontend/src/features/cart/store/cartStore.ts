import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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
  updateQuantity: (item: CartProduct, direction: number) => void;
}

interface CartState {
  cart: CartProduct[];
  actions: CartActions;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
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
                stateItem.selectedColor !== item.selectedColor &&
                stateItem.selectedSize !== item.selectedSize,
            ),
          })),

        clearCart: () => set({ cart: [] }),

        updateQuantity: (item, direction) =>
          set((state) => {
            const findedItemIndex = state.cart.findIndex(
              (stateItem) =>
                stateItem.id === item.id &&
                stateItem.selectedColor === item.selectedColor &&
                stateItem.selectedSize === item.selectedSize,
            );

            if (findedItemIndex === -1) return state;

            const updatedCart = [...state.cart];
            const cartItem = updatedCart[findedItemIndex];

            if (direction === -1 && cartItem.quantity === 1) {
              updatedCart.splice(findedItemIndex, 1);
              return { cart: updatedCart };
            }

            console.log(direction);

            if (direction === -1) {
              cartItem.quantity -= 1;
            }

            if (direction === 1) {
              cartItem.quantity += 1;
            }

            return { cart: updatedCart };
          }),
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({ cart: state.cart }),
    },
  ),
);

export const useCart = () => useCartStore((state) => state.cart);
export const useCartActions = () => useCartStore((state) => state.actions);
