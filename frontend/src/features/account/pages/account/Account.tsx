import AccountGuest from "../accountGuest/AccountGuest";
import styles from "./Account.module.css";

function Account() {
  return (
    <section className={`container container-padding ${styles.accountSection}`}>
      <AccountGuest />
    </section>
  );
}

export default Account;
