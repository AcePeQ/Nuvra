import styles from "./Button.module.css";
import { motion } from "framer-motion";

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
  buttonStyle?: "primary" | "secondary" | "primary-outline";
  buttonSize?: "normal" | "small";
  isButtonDisabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

const buttonVariants = {
  initial: {},
  hover: {},
  animate: {},
};

const firstTextVariant = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hover: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const secondTextVariant = {
  initial: {
    y: 30,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: 30,
    opacity: 0,
  },
};

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
    <motion.button
      type={buttonType}
      className={`${styles.button} ${styles[buttonStyle]} ${styles[buttonSize]}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={isButtonDisabled}
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={buttonVariants}
    >
      <div className={styles.button__text__wrapper}>
        <motion.p
          className={styles.button__text__one}
          variants={firstTextVariant}
        >
          {children}
        </motion.p>
        <motion.p
          aria-disabled
          className={styles.button__text__two}
          variants={secondTextVariant}
        >
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
}

export default Button;
