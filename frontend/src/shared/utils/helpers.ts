import { ShopFiltersState } from "../../features/shop/stores/shopStore";
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

export function getFormattedDate(date: string) {
  const rawDate = new Date(date);
  const localeDateString = rawDate.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return localeDateString;
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

export function getRawProductSize(size: string) {
  const rawSizes = [];

  switch (size) {
    case "X-Small":
      rawSizes.push("XS", "26");
      break;
    case "Small":
      rawSizes.push("S", "28");
      break;
    case "Medium":
      rawSizes.push("M", "30");
      break;
    case "Large":
      rawSizes.push("L", "32");
      break;
    case "X-Large":
      rawSizes.push("XL", "34");
      break;
    case "XX-Large":
      rawSizes.push("XXL", "36");
      break;
    default:
      console.error("This size is invalid!");
  }

  return rawSizes;
}

export function getFilteredProducts(
  products: ProductItem[],
  filters: ShopFiltersState,
) {
  let newProductArray = [...products];

  if (filters.color) {
    newProductArray = newProductArray.filter((product) =>
      product.options.colors.some((color) => color.hex === filters.color),
    );
  }

  if (filters.price) {
    newProductArray = newProductArray.filter(
      (product) =>
        filters.price &&
        +product.price >= +filters.price[0] &&
        +product.price <= +filters.price[1],
    );
  }

  if (filters.size) {
    newProductArray = newProductArray.filter((product) =>
      product.options.sizes.some((size) => {
        const rawSizes = getRawProductSize(size);
        return rawSizes.includes(size);
      }),
    );
  }

  if (filters.style) {
    newProductArray = newProductArray.filter(
      (product) => filters.style === product.details.style,
    );
  }

  if (filters.type) {
    newProductArray = newProductArray.filter(
      (product) => filters.type === product.subcategory,
    );
  }

  if (filters.sort) {
    if (filters.sort === "most-popular") {
      newProductArray.sort((a, b) => a.review_count + b.review_count);
    } else if (filters.sort === "lowest-price") {
      newProductArray.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (filters.sort === "highest-price") {
      newProductArray.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (filters.sort === "best-discount") {
      newProductArray.sort((a, b) => b.discount_percent - a.discount_percent);
    }
  }

  return newProductArray;
}

export const ROOT_URL = import.meta.env.VITE_ROOT_URL;
export const ROOT_URL_SHORTER = import.meta.env.VITE_ROOT_URL_SHORTER;
export const API_URL = import.meta.env.VITE_API_URL;
export const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
