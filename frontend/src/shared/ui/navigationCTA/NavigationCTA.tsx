import ButtonAccount from "../../../features/account/components/buttonAccount/ButtonAccount";
import CartButton from "../../../features/cart/components/cartButton/CartButton";
import styles from "./NavigationCTA.module.css";

function NavigationCTA() {
  return (
    <div className={styles.navigationCTA}>
      <CartButton />
      <ButtonAccount />
    </div>
  );
}

export default NavigationCTA;
