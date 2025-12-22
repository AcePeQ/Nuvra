import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={`${styles.section_cart} container container-padding`}>
      <Breadcrumbs />
    </section>
  );
}

export default Cart;
