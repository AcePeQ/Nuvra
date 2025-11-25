import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";
import Rating from "../../../../shared/ui/rating/Rating";
import styles from "./SliderReviews.module.css";

import CheckmarkIcon from "/src/assets/images/icons/checkmarkIcon.svg";

const PLACEHOLDER = [
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
];

function SliderReviews() {
  return (
    <section className={`${styles.section} container container-padding`}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Our happy customers</h2>
        <div className={styles.section__actions}>
          <ArrowIconElement direction="left" />
          <ArrowIconElement direction="right" />
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
