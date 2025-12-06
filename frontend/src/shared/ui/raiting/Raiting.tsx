import styles from "./Raiting.module.css";

interface RatingProps {
  rating: number;
}

const fullStar = (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.5545 10.6219L2.86102e-06 6.38809L6.17325 5.63991L8.79246 0Z"
      fill="currentColor"
    />
  </svg>
);

const halfStar = (
  <svg
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.35842 16.7243L8.79246 13.701V0L6.17325 5.63991L0 6.38809L4.55449 10.6219L3.35842 16.7243Z"
      fill="currentColor"
    />
  </svg>
);

function Rating({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, i) => i);

  return (
    <div className={styles.ratingWrapper}>
      {stars.map((_, i) => (
        <span aria-hidden key={i}>
          {fullStar}
        </span>
      ))}
      {hasHalfStar && <span aria-hidden>{halfStar}</span>}
      <span className="sr-only">Rating ${rating} out of 5</span>
    </div>
  );
}

export default Rating;
