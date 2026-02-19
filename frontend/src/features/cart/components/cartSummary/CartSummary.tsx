
import { useState } from "react";
import Button from "../../../../shared/ui/button/Button";
import useGetPromoDiscount from "../../hooks/useGetPromoDiscount";
import { useCartDeliveryFee, useCartSubTotal } from "../../store/cartStore";
import CartInputPromo from "../cartInputPromo/CartInputPromo";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const [inputValue, setInputValue] = useState("");
  const { data: discount, isError, error, isFetching } = useGetPromoDiscount(inputValue);

  const cartSubTotal = useCartSubTotal();
  const deliveryFee = useCartDeliveryFee();

  const isDiscount = discount ? true : false;
  const isCartEmpty = cartSubTotal > 0;
  const totalPrice = discount ? cartSubTotal - (cartSubTotal * Number(discount)) + deliveryFee : cartSubTotal + deliveryFee;
  const totalDiscount = discount ? cartSubTotal * Number(discount) : 0;


  if (isError) {
    setInputValue("");
    console.log(error);
  }



  return (
    <div className={styles.cart__summary}>
      {isFetching && <div className={styles.loader} />}
      <h2 className={styles.cart__summary__title}>Order Summary</h2>
      <ul className={styles.cart__summary__list}>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Subtotal:</span>
          <span className={styles.cart__summary__value}>${cartSubTotal}</span>
        </li>
        {isDiscount && (
          <li className={styles.cart__summary__item}>
            <span className={styles.cart__summary__label}>
              Discount (-{discount * 100}%):
            </span>
            <span
              className={`${styles.cart__summary__value} ${styles.cart__summary__value_discount}`}
            >
              -${totalDiscount.toFixed(2)}
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
              <span className={styles.cart__summary__value}>${totalPrice.toFixed(2)}</span>
            </li>
          </>
        )}
      </ul>

      {isCartEmpty && (
        <>
          <CartInputPromo inputValue={inputValue} setInputValue={setInputValue} />

          <Button type="button" buttonSize="big" buttonStyle="primary">
            Go to Checkout
          </Button>
        </>
      )}
    </div>
  );
}
