import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "../../../../../product/components/productShowcase/ui/productColors/ProductColorsItem";



type FilterColorsProps = {
  colors: { name: string, hex: string }[]
  defaultVal: string | null;

  onChangeState: (key: string, value: string | number[]) => void;
}

function FilterColors({ colors, defaultVal, onChangeState }: FilterColorsProps) {
  function onChange(_: string, hex: string | number) {
    const findColor = colors.find(color => color.hex === hex);

    if (findColor) {
      onChangeState("color", findColor.hex)
    }
  }

  const allColorsHex = colors.map(color => color.hex)

  return (
    <InputRadioList
      items={allColorsHex}
      defaultValue={defaultVal}
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
