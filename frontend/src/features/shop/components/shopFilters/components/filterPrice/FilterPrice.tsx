import RangeSlider from "../../../../../../shared/ui/rangeSlider/RangeSlider";

type FilterPriceProps = {
  min: number;
  max: number;

  defaultVal: [number, number]

  onChange: (key: string, value: string | number[]) => void
}

function FilterPrice({ max, min, defaultVal, onChange }: FilterPriceProps) {
  return <RangeSlider step={10} min={min} max={max} defaultValue={defaultVal} onChange={onChange} />;
}

export default FilterPrice;
