import React from "react";
import styles from "./FormRow.module.css";

interface FormRowProps {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  iconOnClick?: React.MouseEventHandler;
  iconLabel?: string;
  children: React.ReactElement<{ id: string }>;
}

export default function FormRow({
  label,
  error,
  icon,
  iconOnClick,
  iconLabel,
  children,
}: FormRowProps) {
  console.log(icon);

  if (icon) {
    return (
      <div className={styles.row}>
        <label className={styles.label} htmlFor={children.props.id}>
          {label}
        </label>
        <div className={styles.inputWrapper}>
          {children}
          <button
            aria-label={iconLabel}
            onClick={iconOnClick}
            className={styles.icon}
            type="button"
          >
            {icon}
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={children.props.id}>
        {label}
      </label>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
