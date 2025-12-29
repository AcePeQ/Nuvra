import styles from "./RegisterForm.module.css";
import { useActionState, useState } from "react";
import FormRow from "../../../../shared/ui/formRow/FormRow";
import Button from "../../../../shared/ui/button/Button";
import EyeOffIcon from "../../../../shared/icons/EyeOffIcon";
import EyeOnIcon from "../../../../shared/icons/EyeOnIcon";

function RegisterForm() {
  const [passwordType, setPasswordType] = useState<string>("password");

  function handleChangePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  async function registerAction(_, formData) {
    return {
      errors: null,
    };
  }

  const [formState, formAction, isPending] = useActionState(registerAction, {
    errors: null,
  });

  return (
    <form action={formAction} className={styles.form}>
      <FormRow label="E-mail" error={formState.errors?.email}>
        <input type="email" placeholder="E-mail address" />
      </FormRow>
      <FormRow label="First name" error={formState.errors?.firstName}>
        <input type="text" placeholder="First name" />
      </FormRow>
      <FormRow label="Last name" error={formState.errors?.lastName}>
        <input type="text" placeholder="First name" />
      </FormRow>
      <FormRow
        label="Password"
        icon={passwordType === "password" ? <EyeOffIcon /> : <EyeOnIcon />}
        iconLabel={
          passwordType === "password" ? "Show password" : "Hide password"
        }
        iconOnClick={handleChangePasswordType}
        error={formState.errors?.password}
      >
        <input type={passwordType} placeholder="Your password" />
      </FormRow>

      <Button
        isButtonDisabled={isPending}
        buttonSize="normal"
        buttonType="submit"
        buttonStyle="primary"
      >
        Sign up
      </Button>
    </form>
  );
}

export default RegisterForm;
