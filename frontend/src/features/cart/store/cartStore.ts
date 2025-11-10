import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartActions {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

interface CartState {
  cart: CartItem[];
  actions: CartActions;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  actions: {
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    clearCart: () => set({ cart: [] }),
    updateQuantity: (id, quantity) =>
      set((state) => {
        const findedItemIndex = state.cart.findIndex((item) => item.id === id);
        if (findedItemIndex === -1) return state;

        const updatedCart = [...state.cart];

        const cartItem = updatedCart[findedItemIndex];

        if (quantity === -1 && cartItem.quantity === 1) {
          updatedCart.splice(findedItemIndex, 1);
          return { cart: updatedCart };
        }

        if (quantity === -1) {
          updatedCart[findedItemIndex].quantity -= 1;
        }

        if (quantity === 1) {
          updatedCart[findedItemIndex].quantity += 1;
        }

        return { cart: updatedCart };
      }),
  },
}));

export const useCart = () => useCartStore((state) => state.cart);
export const useCartActions = () => useCartStore((state) => state.actions);
