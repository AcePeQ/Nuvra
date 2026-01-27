import { createPortal } from "react-dom";
import styles from "./ErrorFull.module.css";
import Button from "../../button/Button";
import { useNavigate } from "react-router-dom";

export default function ErrorFull({
  message,
  status,
}: {
  message: string;
  status?: number;
}) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { replace: true });
  }

  return createPortal(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Error {status ?? "500"}</h1>
        <p className={styles.message}>
          {message ?? "Something is wrong! Please, contact with our support!"}
        </p>
        <div className={styles.button_wrapper}>
          <Button onClick={handleClick} label="Go back home">
            Go back home
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("error")!,
  );
}
