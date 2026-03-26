import { useState } from "react";
import styles from "./RangeSlider.module.css";
import RangeSliderCustom from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface RangeSliderProps {
  step: number;
  min: number;
  max: number;
  defaultValue: [number, number];

  onChange: (key: string, value: string | string[]) => void
}


function RangeSlider({ step, min, max, defaultValue, onChange }: RangeSliderProps) {
  const [price, setPrice] = useState({
    lower: defaultValue[0] ?? min,
    higher: defaultValue[1] ?? max,
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
          onChange("price", [String(e[0]), String(e[1])]);
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
