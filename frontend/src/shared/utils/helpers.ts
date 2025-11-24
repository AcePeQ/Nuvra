import { placeholderItem } from "../../features/products/components/productsShowcase/ProductsShowcase";

export function splitItemsBySize(
  items: placeholderItem[] | null,
  size: number
) {
  if (!items) return null;

  const array = [];

  for (let i = 0; i < items.length; i += size) {
    array.push(items.slice(i, i + size));
  }

  return array;
}
