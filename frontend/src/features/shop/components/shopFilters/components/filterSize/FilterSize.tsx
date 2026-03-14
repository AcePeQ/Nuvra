import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "../../../../../product/components/productShowcase/ui/productSize/ProductSizeItem";



type FilterSizeProps = {
  sizes: string[]
}

function FilterSize({ sizes }: FilterSizeProps) {
  function onChange() {
    return null;
  }

  return (
    <InputRadioList
      items={sizes}
      defaultValue={null}
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
