import styles from "./RegisterForm.module.css";
import { useState } from "react";
import FormRow from "../../../../shared/ui/formRow/FormRow";
import Button from "../../../../shared/ui/button/Button";
import EyeOffIcon from "../../../../shared/icons/EyeOffIcon";
import EyeOnIcon from "../../../../shared/icons/EyeOnIcon";

function RegisterForm() {
  const [passwordType, setPasswordType] = useState<string>("password");

  function handleChangePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <form className={styles.form}>
      <FormRow label="E-mail">
        <input type="email" placeholder="E-mail address" />
      </FormRow>
      <FormRow
        label="Password"
        icon={passwordType === "password" ? <EyeOffIcon /> : <EyeOnIcon />}
        iconLabel={
          passwordType === "password" ? "Show password" : "Hide password"
        }
        iconOnClick={handleChangePasswordType}
      >
        <input type={passwordType} placeholder="Your password" />
      </FormRow>

      <Button buttonSize="normal" buttonType="submit" buttonStyle="primary">
        Sign up
      </Button>
    </form>
  );
}

export default RegisterForm;
