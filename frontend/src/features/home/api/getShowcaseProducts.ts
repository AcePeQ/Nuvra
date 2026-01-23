import { API_URL } from "../../../shared/utils/helpers";

async function getShowcaseProducts() {
  try {
    const res = await fetch(`${API_URL}/showcaseProducts`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      console.log(error);
      throw new Error(error.message);
    }

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {}
}

export default getShowcaseProducts;
