import styles from "./CartSummary.module.css";

export default function CartSummary() {
  return (
    <div className={styles.cart__summary}>
      <h2 className={styles.cart__summary__title}>Order Summary</h2>
      <ul className={styles.cart__summary__list}>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Subtotal:</span>
          <span className={styles.cart__summary__value}>$600</span>
        </li>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Discount (-20%):</span>
          <span
            className={`${styles.cart__summary__value} ${styles.cart__summary__value_discount}`}
          >
            -$50
          </span>
        </li>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Delivery Fee:</span>
          <span className={styles.cart__summary__value}>$15</span>
        </li>
        <li className={styles.cart__summary__item}>
          <span className={styles.cart__summary__label}>Total:</span>
          <span className={styles.cart__summary__value}>$650</span>
        </li>
      </ul>
    </div>
  );
}
