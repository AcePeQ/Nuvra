import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "../../../../../product/components/productShowcase/ui/productSize/ProductSizeItem";

const SIZES = ["Small", "Medium", "Large", "X-Large"];

function FilterSize() {
  function onChange() {
    return null;
  }

  return (
    <InputRadioList
      items={SIZES}
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
