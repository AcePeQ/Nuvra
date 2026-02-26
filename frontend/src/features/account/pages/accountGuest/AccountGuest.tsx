import { Link, useParams } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./AccountGuest.module.css";
import AnimatedBoxes from "../../../../shared/ui/animatedBoxes/AnimatedBoxes";
import RegisterForm from "../../components/registerForm/RegisterForm";


const modes = {
  register: {
    greeting: "Welcome,",
    subText: "Please enter your details to register.",
    question: "Do you have account?",
    linkTo: "login",
    linkText: "Sign in"
  },
  login: {
    greeting: "Welcome again!",
    subText: "Please enter your details to enter your account.",
    question: "Don't have an account?",
    linkTo: "register",
    linkText: "Sign up"
  }
}

export default function AccountGuest() {
  const { mode } = useParams();

  const isRegisterPage = mode === "register"
  const { greeting, subText, question, linkTo, linkText } = modes[isRegisterPage ? "register" : "login"];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
          <h1 className={styles.title}>{greeting}</h1>
          <p className={styles.subText}>{subText}</p>
          {isRegisterPage ?
            <RegisterForm />
            :
            <LoginForm />
          }
          <p className={styles.question}>
            {question}{" "}
            <Link className={styles.link} to={`/account/${linkTo}`}>
              {linkText}
            </Link>
          </p>
        </div>
        <AnimatedBoxes />
      </div>

      <div className={styles.treeBG} aria-hidden />
    </>
  );
}
