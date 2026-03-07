
import { useState } from "react";
import Button from "../../../../shared/ui/button/Button";
import useGetPromoDiscount from "../../hooks/useGetPromoDiscount";
import { useCartDeliveryFee, useCartSubTotal } from "../../store/cartStore";
import CartInputPromo from "../cartInputPromo/CartInputPromo";
import styles from "./CartSummary.module.css";
import { toast } from "react-toastify";
import { useIsFirstOrder } from "../../../account/stores/userStore";

export default function CartSummary() {
  const [inputValue, setInputValue] = useState("");
  const { data: discount, isError, isFetching, isSuccess } = useGetPromoDiscount(inputValue);

  const cartSubTotal = useCartSubTotal();
  const deliveryFee = useCartDeliveryFee();

  const isDiscount = discount ? true : false;
  const isFirstOrder = useIsFirstOrder();
  const hasItemsInCart = cartSubTotal > 0;

  const totalDiscount = discount ? cartSubTotal * Number(discount) : 0;
  const totalFirstOrderDiscount = isFirstOrder ? 0 : cartSubTotal * 0.2;
  const totalPrice = discount ? cartSubTotal - (cartSubTotal * Number(discount)) + deliveryFee - totalFirstOrderDiscount : cartSubTotal + deliveryFee - totalFirstOrderDiscount;

  if (isSuccess) {
    toast.success("Promotion code applied!", { toastId: "promocode-success" })
  }

  if (isError) {
    toast.error("Invalid promotion code!", { toastId: "promocode-error" })
    setInputValue("");
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
        {!isFirstOrder && (
          <li className={styles.cart__summary__item}>
            <span className={styles.cart__summary__label}>
              First Order Discount (-20%):
            </span>
            <span
              className={`${styles.cart__summary__value} ${styles.cart__summary__value_discount}`}
            >
              -${totalFirstOrderDiscount.toFixed(2)}
            </span>
          </li>
        )}
        {hasItemsInCart && (
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

      {hasItemsInCart && (
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
