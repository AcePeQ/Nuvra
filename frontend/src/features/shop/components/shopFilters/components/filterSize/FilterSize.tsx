import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "../../../../../product/components/productShowcase/ui/productSize/ProductSizeItem";



type FilterSizeProps = {
  sizes: string[]
  defaultVal: string | null
  onChangeState: (key: string, value: string | number[]) => void
}

function FilterSize({ sizes, defaultVal, onChangeState }: FilterSizeProps) {
  function onChange(_: string, value: string | number) {
    onChangeState("filterSize", value as string)
  }

  return (
    <InputRadioList
      items={sizes}
      defaultValue={defaultVal}
      itemKeyFn={(item) => item as string}
    >
      {(item, selected, handleChange) => (
        <ProductSizeItem
          item={item}
          selected={selected}
          handleChange={handleChange}
          onProductChangeState={onChange}
        />
      )}
    </InputRadioList>
  );
}

export default FilterSize;
