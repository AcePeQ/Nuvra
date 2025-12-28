import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useState } from "react";
import FormRow from "../../../../shared/ui/formRow/FormRow";
import Button from "../../../../shared/ui/button/Button";
import EyeOffIcon from "../../../../shared/icons/EyeOffIcon";
import EyeOnIcon from "../../../../shared/icons/EyeOnIcon";

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  function handleChangePasswordType() {
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormRow label="E-mail" error={errors.email?.message}>
        <input
          {...register("email", {
            required: "E-mail field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          placeholder="E-mail address"
        />
      </FormRow>
      <FormRow
        label="Password"
        error={errors.password?.message}
        icon={passwordType === "password" ? <EyeOffIcon /> : <EyeOnIcon />}
        iconLabel={
          passwordType === "password" ? "Show password" : "Hide password"
        }
        iconOnClick={handleChangePasswordType}
      >
        <input
          {...register("password", {
            required: "Password field is required",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Password must contain at least 8 characters, including letters, numbers, and special characters",
            },
          })}
          type={passwordType}
          placeholder="Your password"
        />
      </FormRow>

      <Button buttonSize="normal" buttonType="submit" buttonStyle="primary">
        Sign up
      </Button>
    </form>
  );
}

export default LoginForm;
