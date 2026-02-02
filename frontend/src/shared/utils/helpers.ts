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

export const ROOT_URL = import.meta.env.VITE_ROOT_URL;
export const ROOT_URL_SHORTER = import.meta.env.VITE_ROOT_URL_SHORTER;
export const API_URL = import.meta.env.VITE_API_URL;
export const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
