import { placeholderItemReviews } from "../../features/home/components/sliderReviews/SliderReviews";
import { placeholderItem } from "../../features/products/components/productsShowcase/ProductsShowcase";

export function splitItemsBySize(
  items: placeholderItem[] | placeholderItemReviews[] | null,
  size: number
) {
  if (!items) return null;

  const array = [];

  for (let i = 0; i < items.length; i += size) {
    array.push(items.slice(i, i + size));
  }

  return array;
}
