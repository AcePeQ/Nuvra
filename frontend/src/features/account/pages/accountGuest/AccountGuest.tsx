import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./AccountGuest.module.css";
import AnimatedBoxes from "../../../../shared/ui/animatedBoxes/AnimatedBoxes";
import RegisterForm from "../../components/registerForm/RegisterForm";

export default function AccountGuest() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
          <h1 className={styles.title}>Welcome,</h1>
          <p className={styles.subText}>Please enter your details to login</p>
          <RegisterForm />
          <p className={styles.question}>
            Don't have an account?{" "}
            <Link className={styles.link} to=":?=register">
              Sign up
            </Link>
          </p>
        </div>
        <AnimatedBoxes />
      </div>

      <div className={styles.treeBG} aria-hidden />
    </>
  );
}
