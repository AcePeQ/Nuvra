import { ProductItem, ReviewItem } from "./types";

export function splitItemsBySize(
  items: ProductItem[] | ReviewItem[] | null,
  size: number,
) {
  if (!items) return null;

  const array = [];

  for (let i = 0; i < items.length; i += size) {
    array.push(items.slice(i, i + size));
  }

  return array;
}

export function getDateObject(date: string) {
  const rawDate = new Date(date);

  rawDate.toLocaleString("en-gb", {
    timeZone: "Europe/London",
  });

  const newDate = {
    year: rawDate.getFullYear(),
    month: rawDate.getMonth() + 1,
    day: rawDate.getDate(),
    hour: rawDate.getHours(),
    minutes: rawDate.getMinutes(),
    seconds: rawDate.getSeconds(),
  };

  return newDate;
}

export function getFormattedProductSizes(sizes: string[]) {
  const newSizesArray = [];

  for (let i = 0; i < sizes.length - 1; i++) {
    const size = sizes[i];

    switch (size) {
      case "XS":
      case "26":
        newSizesArray.push("X-Small");
        break;
      case "S":
      case "28":
        newSizesArray.push("Small");
        break;
      case "M":
      case "30":
        newSizesArray.push("Medium");
        break;
      case "L":
      case "32":
        newSizesArray.push("Large");
        break;
      case "XL":
      case "34":
        newSizesArray.push("X-Large");
        break;
      case "XXL":
      case "36":
        newSizesArray.push("XX-Large");
        break;
      default:
        console.error("This size is invalid!");
    }
  }

  return newSizesArray;
}

export const ROOT_URL = import.meta.env.VITE_ROOT_URL;
export const ROOT_URL_SHORTER = import.meta.env.VITE_ROOT_URL_SHORTER;
export const API_URL = import.meta.env.VITE_API_URL;
export const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
