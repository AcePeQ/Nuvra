import { MouseEventHandler } from "react";
import Button from "../../../../../../shared/ui/button/Button";
import Counter from "../../../../../../shared/ui/counter/Counter";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";
import styles from "./ProductCTA.module.css";
import { useCart } from "../../../../../cart/store/cartStore";

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

  const isColorChecked = productState.color === null;
  const isSizeChecked = productState.size === null;

  const cartProduct = cart.find(
    (item) =>
      item.id === productId &&
      item.selectedColor === productState.color &&
      item.selectedSize === productState.size,
  );

  return (
    <div className={styles.productsCTA}>
      <Counter
        defaultValue={cartProduct?.quantity ?? productState.quantity}
        className="product"
        onChange={onChange}
      />

      <Button
        type="button"
        buttonSize="normal"
        buttonStyle="primary"
        label="Add to cart"
        isButtonDisabled={
          isColorChecked || isSizeChecked || cartProduct ? true : false
        }
        onClick={onAddToCart}
      >
        {cartProduct ? "Your product is already in the cart" : "Add to Cart"}
      </Button>
    </div>
  );
}

export default ProductCTA;
