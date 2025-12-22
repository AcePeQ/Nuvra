import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import CartItem from "../components/cartItem/CartItem";
import CartSummary from "../components/cartSummary/CartSummary";
import styles from "./Cart.module.css";

const PLACEHOLDER = [
  {
    id: 0,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    size: "Large",
    color: "Blue",
    quantity: 3,
    price: 180,
  },
  {
    id: 1,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    size: "Large",
    color: "Blue",
    quantity: 1,
    price: 70,
  },
  {
    id: 2,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    size: "Large",
    color: "Blue",
    quantity: 1,
    price: 240,
  },
];

function Cart() {
  return (
    <section className={`${styles.section_cart} container container-padding`}>
      <Breadcrumbs />
      <h1 className={styles.cart__title}>Your cart</h1>

      <div className={styles.cart}>
        <ul className={styles.cart__list}>
          {PLACEHOLDER.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>

        <CartSummary />
      </div>
    </section>
  );
}

export default Cart;
