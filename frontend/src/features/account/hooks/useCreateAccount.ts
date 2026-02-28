import { useMutation } from "@tanstack/react-query";
import createAccount from "../api/createAccount";
import { toast } from "react-toastify";

export type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function useCreateAccount() {
  const { mutate: creatAccountFn } = useMutation({
    mutationFn: createAccount,
    onSuccess: (data) => toast.success(data.message),
    onError: (error: string) => toast.error(error),
  });

  return { creatAccountFn };
}

export default useCreateAccount;
