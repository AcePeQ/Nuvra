import { API_URL } from "../../../shared/utils/helpers";
import { LoginData } from "../hooks/useLoginToAccount";

async function loginToAccount(loginData: LoginData) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    if (!res.ok) {
      const error: Error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw error.message;
    } else {
      const error = "Something went wrong with login to account!";
      console.error(error);
      throw error;
    }
  }
}

export default loginToAccount;
