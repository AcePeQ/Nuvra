import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import Button from "../../../shared/ui/button/Button";
import CartItem from "../components/cartItem/CartItem";
import CartSummary from "../components/cartSummary/CartSummary";
import { useCart } from "../store/cartStore";
import styles from "./Cart.module.css";

function Cart() {
  const navigate = useNavigate();
  const cart = useCart();

  return (
    <section className={`${styles.section_cart} container container-padding`}>
      <Breadcrumbs />
      <h1 className={styles.cart__title}>Your cart</h1>

      <div className={styles.cart}>
        <ul className={styles.cart__list}>
          {cart.length === 0 && (
            <div className={styles.emptyWrapper}>
              <p className={styles.empty}>Oh no! Your cart is empty! 🛒</p>
              <Button
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Go Shopping
              </Button>
            </div>
          )}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>

        <CartSummary />
      </div>
    </section>
  );
}

export default Cart;
