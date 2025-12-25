import React from "react";
import styles from "./FormRow.module.css";

interface FormRowProps {
  label: string;
  error?: string;
  children: React.ReactElement;
}

export default function FormRow({ label, error, children }: FormRowProps) {
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
