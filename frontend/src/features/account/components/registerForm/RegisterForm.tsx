import styles from "./RegisterForm.module.css";
import { useActionState, useState } from "react";
import FormRow from "../../../../shared/ui/formRow/FormRow";
import Button from "../../../../shared/ui/button/Button";
import EyeOffIcon from "../../../../shared/icons/EyeOffIcon";
import EyeOnIcon from "../../../../shared/icons/EyeOnIcon";

interface ErrorValidation {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

function RegisterForm() {
  const [passwordType, setPasswordType] = useState<string>("password");

  function handleChangePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  async function registerAction(
    _: { errors: ErrorValidation | null },
    formData: FormData
  ) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    const errors: ErrorValidation = {};

    if (!email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "E-mail field is required or invalid email format";
    }

    if (
      !password.trim() ||
      !password.match(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/
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

    const errorsCount = Object.keys(errors).length;

    if (errorsCount >= 1) {
      const enteredValues: ErrorValidation = {
        email,
        password,
        firstName,
        lastName,
      };

      return {
        errors,
        enteredValues,
      };
    }

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
        <input
          type="email"
          placeholder="E-mail address"
          name="email"
          defaultValue={formState.enteredValues?.email ?? ""}
        />
      </FormRow>
      <FormRow label="First name" error={formState.errors?.firstName}>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          defaultValue={formState.enteredValues?.firstName ?? ""}
        />
      </FormRow>
      <FormRow label="Last name" error={formState.errors?.lastName}>
        <input
          type="text"
          placeholder="First name"
          name="lastName"
          defaultValue={formState.enteredValues?.lastName ?? ""}
        />
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
        <input
          type={passwordType}
          placeholder="Password"
          name="password"
          defaultValue={formState.enteredValues?.password ?? ""}
        />
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
