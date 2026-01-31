import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";
import Separator from "../../../shared/ui/separator/Separator";
import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import Brands from "../components/brands/Brands";
import BrowseGallery from "../components/browseGallery/BrowseGallery";
import Hero from "../components/hero/Hero";
import SliderReviews from "../components/sliderReviews/SliderReviews";
import useGetShowcaseProducts from "../hooks/useGetShowcaseProducts";
import useGetShowcaseReviews from "../hooks/useGetShowcaseReviews";

const PLACEHOLDER_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 2.5,
  },
  {
    id: 2,
    name: "Alex K.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 1,
  },
  {
    id: 3,
    name: "James L.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 3.5,
  },
  {
    id: 4,
    name: "James L.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 3.5,
  },
  {
    id: 5,
    name: "James L.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 3.5,
  },
];

export default function Homepage() {
  const {
    data: showcaseProducts,
    isLoading: isLoadingShowcaseProducts,
    isError: isErrorShowcaseProducts,
    error: errorShowcaseProducts,
  } = useGetShowcaseProducts();

  const {
    data: showcaseReviews,
    isLoading: isLoadingShowcaseReviews,
    isError: isErrorShowcaseReviews,
    error: errorShowcaseReviews,
  } = useGetShowcaseReviews();

  if (isLoadingShowcaseProducts || isLoadingShowcaseReviews) {
    return <LoaderFull />;
  }

  if (
    (isErrorShowcaseProducts && errorShowcaseProducts?.message) ||
    (isErrorShowcaseReviews && errorShowcaseReviews?.message)
  ) {
    return (
      <ErrorFull
        message={
          errorShowcaseProducts?.message ??
          errorShowcaseReviews?.message ??
          "Undefined Error"
        }
      />
    );
  }

  const { newArrivalsProducts, topSaleProducts } = showcaseProducts;

  console.log(showcaseReviews);

  return (
    <>
      <Hero />
      <Brands />
      <ProductsShowcase
        title="New Arrivals"
        items={newArrivalsProducts}
        onClick={() => {}}
      />
      <Separator type="section" />
      <ProductsShowcase
        title="Top Selling"
        items={topSaleProducts}
        onClick={() => {}}
      />
      <BrowseGallery />
      <SliderReviews label="Customer Reviews" items={PLACEHOLDER_REVIEWS} />
    </>
  );
}
