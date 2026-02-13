import { API_URL } from "../../../shared/utils/helpers";

async function getSearchProduct(query: string, signal: AbortSignal) {
  try {
    const res = await fetch(`${API_URL}/search?query=${query}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      signal,
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
      const error = "Something went wrong with searching products";
      console.error(error);
      throw error;
    }
  }
}

export default getSearchProduct;
