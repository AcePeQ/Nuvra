import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductItem } from "../../../shared/utils/types";
import { toast } from "react-toastify";

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
  deliveryFee: number;
  actions: CartActions;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      deliveryFee: 15,

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
              toast.success("Product added to cart!", { toastId: "cart-add" });
              return { cart: [...state.cart, item] };
            }

            const updatedCart = [...state.cart];
            updatedCart[itemInCartIndex].quantity = item.quantity;

            return { cart: updatedCart };
          }),

        removeFromCart: (item) =>
          set((state) => {
            toast.success("Product removed from cart!", {
              toastId: "cart-remove",
            });

            return {
              cart: state.cart.filter(
                (stateItem) =>
                  !(
                    stateItem.id === item.id &&
                    stateItem.selectedColor === item.selectedColor &&
                    stateItem.selectedSize === item.selectedSize
                  ),
              ),
            };
          }),

        clearCart: () =>
          set(() => {
            toast.success("Your cart has been cleared!", {
              toastId: "cart-clear",
            });
            return { cart: [] };
          }),

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
              toast.success("Product removed from cart!", {
                toastId: "cart-remove",
              });
              return { cart: updatedCart };
            }

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
export const useCartDeliveryFee = () =>
  useCartStore((state) => state.deliveryFee);
export const useCartSubTotal = () =>
  useCartStore((state) =>
    state.cart.reduce(
      (sum, item) => sum + item.quantity * Number(item.price),
      0,
    ),
  );
export const useCartActions = () => useCartStore((state) => state.actions);
