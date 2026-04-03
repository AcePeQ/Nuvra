import { useState } from 'react';
import styles from './RatingSelect.module.css';

function RatingSelect() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className={styles.starRating}>
        {[...Array(5)].map((star, index) => {
          index += 1;

          return (
            <span className={styles.icon}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                key={index}
                className={index <= (hover || rating) ? 'on' : 'off'}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                color={index <= (hover || rating) ? '#ffd700' : '#e4e5e9'}
              >
                <path
                  d="M8.79246 0L11.4117 5.63991L17.5849 6.38809L13.0304 10.6219L14.2265 16.7243L8.79246 13.701L3.35842 16.7243L4.5545 10.6219L2.86102e-06 6.38809L6.17325 5.63991L8.79246 0Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          );
        })}
      </div>
    </>
  )
}


export default RatingSelect