import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "../../../../../product/components/productShowcase/ui/productColors/ProductColorsItem";

const PLACEHOLDER_COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

function FilterColors() {
  function onChange() {
    return null;
  }

  return (
    <InputRadioList
      items={PLACEHOLDER_COLORS}
      defaultValue={null}
      itemKeyFn={(item) => item}
    >
      {(item, selected, handleChange) => (
        <ProductColorsItem
          item={item}
          selected={selected}
          handleChange={handleChange}
          onProductChangeState={onChange}
        />
      )}
    </InputRadioList>
  );
}

export default FilterColors;
