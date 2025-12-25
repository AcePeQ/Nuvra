import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./AccountGuest.module.css";

export default function AccountGuest() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form_wrapper}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subText}>Please enter your details to login</p>
        <LoginForm />
        <p>
          Don't have an account? <Link to=":?=register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
