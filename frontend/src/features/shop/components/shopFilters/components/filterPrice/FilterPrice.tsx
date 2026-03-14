import RangeSlider from "../../../../../../shared/ui/rangeSlider/RangeSlider";

type FilterPriceProps = {
  min: number;
  max: number;
}

function FilterPrice({ max, min }: FilterPriceProps) {
  return <RangeSlider step={10} min={min} max={max} defaultValue={[min, max]} />;
}

export default FilterPrice;
