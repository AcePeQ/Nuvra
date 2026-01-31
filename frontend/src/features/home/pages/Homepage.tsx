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
      <SliderReviews label="Customer Reviews" items={showcaseReviews} />
    </>
  );
}
