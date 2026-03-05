import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import loginToAccount from "../api/loginToAccount";
import { useUserActions } from "../stores/userStore";
import { useNavigate } from "react-router-dom";

export type LoginData = {
  email: string;
  password: string;
};

function useLoginToAccount() {
  const navigate = useNavigate();
  const { login } = useUserActions();

  const { mutate: loginToAccountFn } = useMutation({
    mutationFn: loginToAccount,
    onSuccess: (data) => {
      toast.success("Successfully logged into the account!");
      login(data);
      navigate("/", { replace: true });
    },
    onError: (error: string) => toast.error(error),
  });

  return { loginToAccountFn };
}

export default useLoginToAccount;
