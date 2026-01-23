import { placeholderItemReviews } from "../../features/home/components/sliderReviews/SliderReviews";
import { placeholderItem } from "../../features/products/components/productsShowcase/ProductsShowcase";

export function splitItemsBySize(
  items: placeholderItem[] | placeholderItemReviews[] | null,
  size: number,
) {
  if (!items) return null;

  const array = [];

  for (let i = 0; i < items.length; i += size) {
    array.push(items.slice(i, i + size));
  }

  return array;
}

export const ROOT_URL = import.meta.env.VITE_ROOT_URL;
export const ROOT_URL_SHORTER = import.meta.env.VITE_ROOT_URL_SHORTER;
export const API_URL = import.meta.env.VITE_API_URL;
