import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "../../../../../product/components/productShowcase/ui/productColors/ProductColorsItem";



type FilterColorsProps = {
  colors: { name: string, hex: string }[]
}

function FilterColors({ colors }: FilterColorsProps) {
  function onChange() {
    return null;
  }

  const allColorsHex = colors.map(color => color.hex)

  return (
    <InputRadioList
      items={allColorsHex}
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
