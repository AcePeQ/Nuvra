import { useEffect, useState } from "react";
import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";
import Rating from "../../../../shared/ui/rating/Rating";
import styles from "./SliderReviews.module.css";

import CheckmarkIcon from "/src/assets/images/icons/checkmarkIcon.svg";
import useMediaQuery from "../../../products/hooks/useMediaQuery";
import { splitItemsBySize } from "../../../../shared/utils/helpers";

export interface placeholderItemReviews {
  id: number;
  name: string;
  rating: number;
  description: string;
}

const PLACEHOLDER: placeholderItemReviews[] = [
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
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    rating: 5,
  },
];

function SliderReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<placeholderItemReviews[][] | null>(
    null
  );
  const isDesktop = useMediaQuery("(min-width: 1524px)");
  const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1524px)");

  useEffect(() => {
    if (isDesktop) {
      setProducts(
        splitItemsBySize(PLACEHOLDER, 5) as placeholderItemReviews[][]
      );
    }

    if (isLaptop) {
      setProducts(
        splitItemsBySize(PLACEHOLDER, 3) as placeholderItemReviews[][]
      );
    }
  }, []);

  function handleChangeIndex(direction: number) {
    if (!products) return;

    if (direction === 1 && currentIndex === products.length - 1) {
      setCurrentIndex(products.length - 1);
      return;
    }

    if (direction === -1 && currentIndex === 0) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + direction);
  }

  return (
    <section className={`${styles.section} container container-padding`}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Our happy customers</h2>
        <div className={styles.section__actions}>
          <ArrowIconElement
            direction="left"
            className="button__reviews"
            isDisabled={currentIndex === 0}
            onClick={() => handleChangeIndex(-1)}
          />
          <ArrowIconElement
            direction="right"
            className="button__reviews"
            isDisabled={
              products?.length ? currentIndex === products.length - 1 : false
            }
            onClick={() => handleChangeIndex(1)}
          />
        </div>
      </div>
      <div className={styles.reviews}>
        {PLACEHOLDER.map(({ id, name, description, rating }) => (
          <div className={styles.review} key={id}>
            <Rating rating={rating} />
            <div className={styles.review__nameWrapper}>
              <p className={styles.review__name}>{name}</p>
              <img
                className={styles.review__checkmark}
                src={CheckmarkIcon}
                alt="Checkmark icon"
              />
            </div>
            <p className={styles.review__description}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SliderReviews;
