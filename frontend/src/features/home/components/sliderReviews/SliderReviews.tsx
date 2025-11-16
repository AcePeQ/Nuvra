import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";
import styles from "./SliderReviews.module.css";

import CheckmarkIcon from "/src/assets/images/icons/checkmarkIcon.svg";

const PLACEHOLDER = [
  {
    id: 1,
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    id: 2,
    name: "Alex K.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    id: 3,
    name: "James L.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    id: 4,
    name: "Sarah M.",
    description:
      "”I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
];

function SliderReviews() {
  return (
    <section className={`${styles.section} container container-padding`}>
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Our happy customers</h2>
        <div className={styles.section__actions}>
          <ArrowIconElement direction="right" />
          <ArrowIconElement direction="left" />
        </div>

        <div className={styles.reviews}>
          {PLACEHOLDER.map(({ id, name, description }) => (
            <div className={styles.review} key={id}>
              <div className={styles.review__rating}>Rating</div>
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
      </div>
    </section>
  );
}

export default SliderReviews;
