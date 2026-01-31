import { API_URL } from "../../../shared/utils/helpers";

async function getShowcaseReviews() {
  try {
    const res = await fetch(`${API_URL}/showcaseReviews`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
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
      const error = "Something went wrong with fetching showcase reviews";
      console.error(error);
      throw error;
    }
  }
}

export default getShowcaseReviews;
