import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./AccountGuest.module.css";

export default function AccountGuest() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <h1>Create Account</h1>
        <LoginForm />
      </div>
    </div>
  );
}
