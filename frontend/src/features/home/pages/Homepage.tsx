import Separator from "../../../shared/ui/separator/Separator";
import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import Brands from "../components/brands/Brands";
import BrowseGallery from "../components/browseGallery/BrowseGallery";
import Hero from "../components/hero/Hero";
import SliderReviews from "../components/sliderReviews/SliderReviews";

const PLACEHOLDER = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 3,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 2,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 3.5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 3,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 4,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 4,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 1,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 6,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 1.5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 7,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 2.5,
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
      <ProductsShowcase
        title="New Arrivals"
        items={PLACEHOLDER}
        onClick={() => {}}
      />
      <Separator type="section" />
      <ProductsShowcase
        title="Top Selling"
        items={PLACEHOLDER}
        onClick={() => {}}
      />
      <BrowseGallery />
      <SliderReviews />
    </>
  );
}
