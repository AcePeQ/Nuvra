import { MouseEventHandler } from "react";
import Button from "../../../../../../shared/ui/button/Button";
import Counter from "../../../../../../shared/ui/counter/Counter";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";
import styles from "./ProductCTA.module.css";
import { useCart, useCartActions } from "../../../../../cart/store/cartStore";
import { AnimatePresence, motion } from "framer-motion";

function ProductCTA({
  productId,
  productState,
  onChange,
  onAddToCart,
}: {
  productId: string;
  productState: InitialProductState;
  onChange: OnProductChangeState;
  onAddToCart: MouseEventHandler;
}) {
  const cart = useCart();
  const { removeFromCart } = useCartActions();

  const isColorChecked = productState.color === null;
  const isSizeChecked = productState.size === null;

  const cartProduct = cart.find(
    (item) =>
      item.id === productId &&
      item.selectedColor === productState.color &&
      item.selectedSize === productState.size,
  );

  return (
    <>
      <div className={styles.productsCTA}>
        <Counter
          key={cartProduct?.quantity}
          defaultValue={cartProduct?.quantity ?? productState.quantity}
          className="product"
          onChange={onChange}
        />

        <Button
          type="button"
          buttonSize="normal"
          buttonStyle="primary"
          label="Add to cart"
          isButtonDisabled={isColorChecked || isSizeChecked}
          onClick={
            cartProduct ? () => removeFromCart(cartProduct) : onAddToCart
          }
        >
          {cartProduct ? "Remove from cart" : "Add to cart"}
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {cartProduct && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles.notify}
          >
            *Your item is in the cart - changing the quantity updates the
            product in the cart
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCTA;
