import { API_URL } from "../../../shared/utils/helpers";
import { RegisterData } from "../hooks/useCreateAccount";

async function createAccount(registerData: RegisterData) {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registerData),
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
      const error = "Something went wrong with getting discount";
      console.error(error);
      throw error;
    }
  }
}

export default createAccount;
