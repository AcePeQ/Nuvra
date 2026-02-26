import { useMutation } from "@tanstack/react-query";
import createAccount from "../api/createAccount";

export type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function useCreateAccount() {
  const { mutate: creatAccountFn } = useMutation({
    mutationFn: createAccount,
  });

  return { creatAccountFn };
}

export default useCreateAccount;
