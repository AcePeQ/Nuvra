import { useIsLoggedIn } from "../../stores/userStore";
import AccountGuest from "../accountGuest/AccountGuest";
import styles from "./Account.module.css";

export function Account() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <section className={`container container-padding ${styles.accountSection}`}>
      {isLoggedIn ? <div>Test</div>
        :
        <AccountGuest />
      }
    </section>
  );
}


