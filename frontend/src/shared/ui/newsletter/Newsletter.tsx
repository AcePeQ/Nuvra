import Button from "../button/Button";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <article className={styles.newsletter}>
      <h2 className={styles.newsletter__title}>
        Stay upto date about our latest offers
      </h2>

      <form className={styles.newsletter__form}>
        <div className={styles.newsletter__inputWrapper}>
          <img />
          <input
            placeholder="Enter your email address"
            className={styles.newsletter__input}
            type="text"
          />
        </div>
        <Button buttonType="submit" buttonSize="normal" buttonStyle="secondary">
          Subscribe to Newsletter
        </Button>
      </form>
    </article>
  );
}

export default Newsletter;
