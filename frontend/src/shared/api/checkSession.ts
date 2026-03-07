import { API_URL } from "../utils/helpers";

async function checkSession() {
  const res = await fetch(`${API_URL}/auth/session`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  if (res.status === 401) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to check session");
  }

  const data = await res.json();

  return data;
}

export default checkSession;
