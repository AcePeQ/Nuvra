export interface ProductItem {
  brand: string;
  category: string;
  compare_at_price: string;
  created_at: string;
  currency: "PLN";
  details: ProductItemDetails;
  discount_percent: number;
  id: string;
  images: ProductItemImages;
  is_featured: boolean;
  is_new_arrival: boolean;
  name: string;
  options: ProductItemOptions;
  price: string;
  rating: string;
  review_count: number;
  sku: string;
  slug: string;
  subcategory: string;
  tags: string[];
  updated_at: string;
}

interface ProductItemDetails {
  delivery: string;
  fit: string;
  highlights: string[];
  material: string;
  style: string;
}

interface ProductItemImages {
  hero: string;
  gallery: string[];
}

interface ProductItemOptions {
  sizes: string[];
  colors: ProductItemColors;
}

interface ProductItemColors {
  hex: string;
  name: string;
}

export interface ReviewItem {
  author_name: string;
  body: string;
  created_at: string;
  helpful_count: number;
  id: string;
  product_id: string;
  rating: number;
  title: string;
  user_id: string | null;
}
