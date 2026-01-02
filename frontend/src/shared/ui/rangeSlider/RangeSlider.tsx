import { useState } from "react";
import styles from "./RangeSlider.module.css";
import RangeSliderCustom from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface RangeSliderProps {
  step: number;
  min: number;
  max: number;
  defaultValue: [number, number];
}

function RangeSlider({ step, min, max, defaultValue }: RangeSliderProps) {
  const [price, setPrice] = useState({
    lower: min,
    higher: max,
  });

  return (
    <div className={styles.wrapper}>
      <RangeSliderCustom
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onInput={(e) => {
          setPrice({ lower: e[0], higher: e[1] });
        }}
      />

      <p className={styles.range}>
        Price from <span className={styles.price}>${price.lower}</span> to{" "}
        <span className={styles.price}>${price.higher}</span>
      </p>
    </div>
  );
}

export default RangeSlider;
