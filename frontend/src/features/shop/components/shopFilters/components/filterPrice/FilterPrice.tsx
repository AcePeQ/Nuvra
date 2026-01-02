import RangeSlider from "../../../../../../shared/ui/rangeSlider/RangeSlider";

function FilterPrice() {
  return <RangeSlider step={10} min={0} max={1000} defaultValue={[0, 1000]} />;
}

export default FilterPrice;
