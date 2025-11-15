import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import Brands from "../components/brands/Brands";
import Hero from "../components/hero/Hero";

const PLACEHOLDER = [
  {
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder.png",
    rating: 4.5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
];

export default function Homepage() {
  return (
    <>
      <Hero />
      <Brands />
      <ProductsShowcase title="New Arrivals" items={PLACEHOLDER} />
      <ProductsShowcase title="Top Selling" items={PLACEHOLDER} />
    </>
  );
}
