import Button from "../button/Button";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.newsletter__title}>
        Stay upto date about our latest offers
      </h2>

      <form className={styles.newsletter__form}>
        <div className={styles.newsletter__inputWrapper}>
          <img
            className={styles.newsletter__icon}
            src="/src/assets/images/icons/MailIcon.svg"
            alt="Mail icon"
          />
          <input
            placeholder="Enter your email address"
            className={styles.newsletter__input}
            type="mail"
          />
        </div>
        <Button
          label="Subscribe to newsletter"
          buttonType="submit"
          buttonSize="normal"
          buttonStyle="secondary"
        >
          Subscribe to Newsletter
        </Button>
      </form>
    </section>
  );
}

export default Newsletter;
