import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      LoginForm
    </form>
  );
}

export default LoginForm;
