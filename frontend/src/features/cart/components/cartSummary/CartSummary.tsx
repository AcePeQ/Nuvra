import Button from "../../../../shared/ui/button/Button";
import { useCartDeliveryFee, useCartSubTotal } from "../../store/cartStore";
import CartInputPromo from "../cartInputPromo/CartInputPromo";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const cartSubTotal = useCartSubTotal();
  const deliveryFee = useCartDeliveryFee();

  const isDiscount = false;
  const isCartEmpty = cartSubTotal > 0;
  const totalPrice = cartSubTotal;

  return (
    <div className={styles.cart__summary}>
      <h2 className={styles.cart__summary__title}>Order Summary</h2>
      <ul className={styles.cart__summary__list}>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Subtotal:</span>
          <span className={styles.cart__summary__value}>${cartSubTotal}</span>
        </li>
        {isDiscount && (
          <li className={styles.cart__summary__item}>
            <span className={styles.cart__summary__label}>
              Discount (-20%):
            </span>
            <span
              className={`${styles.cart__summary__value} ${styles.cart__summary__value_discount}`}
            >
              -$50
            </span>
          </li>
        )}
        {isCartEmpty && (
          <>
            <li className={styles.cart__summary__item}>
              <span className={styles.cart__summary__label}>Delivery Fee:</span>
              <span className={styles.cart__summary__value}>
                ${deliveryFee}
              </span>
            </li>
            <li className={styles.cart__summary__item}>
              <span className={styles.cart__summary__label}>Total:</span>
              <span className={styles.cart__summary__value}>${totalPrice}</span>
            </li>
          </>
        )}
      </ul>

      {isCartEmpty && (
        <>
          <CartInputPromo />

          <Button type="button" buttonSize="big" buttonStyle="primary">
            Go to Checkout
          </Button>
        </>
      )}
    </div>
  );
}
