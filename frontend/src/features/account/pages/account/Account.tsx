import { useIsLoggedIn } from "../../stores/userStore";
import AccountGuest from "../accountGuest/AccountGuest";
import styles from "./Account.module.css";

function Account() {
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

export default Account;
