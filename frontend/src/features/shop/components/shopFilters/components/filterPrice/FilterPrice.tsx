import RangeSlider from "../../../../../../shared/ui/rangeSlider/RangeSlider";

type FilterPriceProps = {
  min: number;
  max: number;

  defaultVal: [number, number] | null;

  onChange: (key: string, value: string | string[]) => void
}

function FilterPrice({ max, min, defaultVal, onChange }: FilterPriceProps) {
  return <RangeSlider step={10} min={min} max={max} defaultValue={defaultVal ?? [min, max]} onChange={onChange} />;
}

export default FilterPrice;
