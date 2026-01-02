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
  return (
    <div className={styles.wrapper}>
      <RangeSliderCustom
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default RangeSlider;
