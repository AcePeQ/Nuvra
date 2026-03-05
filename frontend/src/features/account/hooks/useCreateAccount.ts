import { useMutation } from "@tanstack/react-query";
import createAccount from "../api/createAccount";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function useCreateAccount() {
  const navigate = useNavigate();

  const { mutate: creatAccountFn } = useMutation({
    mutationFn: createAccount,
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/account/login", { replace: true });
    },
    onError: (error: string) => toast.error(error),
  });

  return { creatAccountFn };
}

export default useCreateAccount;
