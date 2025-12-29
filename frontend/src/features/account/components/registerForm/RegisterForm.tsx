import styles from "./RegisterForm.module.css";
import { useActionState, useState } from "react";
import FormRow from "../../../../shared/ui/formRow/FormRow";
import Button from "../../../../shared/ui/button/Button";
import EyeOffIcon from "../../../../shared/icons/EyeOffIcon";
import EyeOnIcon from "../../../../shared/icons/EyeOnIcon";

interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

function RegisterForm() {
  const [passwordType, setPasswordType] = useState<string>("password");

  function handleChangePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  async function registerAction(_, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    let errors = {};

    if (!email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "E-mail field is required or invalid email format";
    }

    if (
      !password.trim() ||
      !email.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters, including letters, numbers, and special characters";
    }

    if (!firstName.trim()) {
      errors.firstName = "First name field is required";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name field is required";
    }

    return {
      errors: {},
    };
  }

  const [formState, formAction, isPending] = useActionState(registerAction, {
    errors: {},
  });

  return (
    <form action={formAction} className={styles.form}>
      <FormRow label="E-mail" error={formState.errors.email}>
        <input type="email" placeholder="E-mail address" />
      </FormRow>
      <FormRow label="First name" error={formState.errors.firstName}>
        <input type="text" placeholder="First name" />
      </FormRow>
      <FormRow label="Last name" error={formState.errors.lastName}>
        <input type="text" placeholder="First name" />
      </FormRow>
      <FormRow
        label="Password"
        icon={passwordType === "password" ? <EyeOffIcon /> : <EyeOnIcon />}
        iconLabel={
          passwordType === "password" ? "Show password" : "Hide password"
        }
        iconOnClick={handleChangePasswordType}
        error={formState.errors.password}
      >
        <input type={passwordType} placeholder="Password" />
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
