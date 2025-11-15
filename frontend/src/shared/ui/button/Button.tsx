import styles from "./Button.module.css";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
  buttonStyle?: "primary" | "secondary" | "primary-outline";
  buttonSize?: "normal" | "small";
  isButtonDisabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

function Button({
  buttonType = "button",
  buttonStyle = "primary",
  buttonSize = "normal",
  isButtonDisabled = false,
  onClick = undefined,
  onKeyDown = undefined,
  children,
}: ButtonProps) {
  return (
    <button
      type={buttonType}
      className={`${styles.button} ${styles[buttonStyle]} ${styles[buttonSize]}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={isButtonDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
