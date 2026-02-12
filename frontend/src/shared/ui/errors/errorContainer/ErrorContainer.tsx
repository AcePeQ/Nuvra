import styles from "./ErrorContainer.module.css";

function ErrorContainer({
  message,
  status,
}: {
  message: string;
  status?: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Error {status ?? "500"}</h1>
        <p className={styles.message}>
          {message ?? "Something is wrong! Please, contact with our support!"}
        </p>
      </div>
    </div>
  );
}

export default ErrorContainer;
