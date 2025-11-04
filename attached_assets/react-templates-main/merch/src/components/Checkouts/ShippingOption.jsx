import PropTypes from "prop-types";
import { useState } from "react";

const ShippingOption = ({ options, label }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(options.length).fill(false),
  );

  const handleCheck = (index) => {
    const newCheckedItems = checkedItems.map((item, idx) => idx === index);
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <label className="mb-5 block text-lg font-semibold text-dark dark:text-white">
        {label}
      </label>
      <div className="-mx-3 mb-4 flex flex-wrap items-center">
        {options.map((option, index) => (
          <div
            key={index}
            className="mb-4 w-full px-3 md:w-1/2 lg:w-full xl:w-1/2"
          >
            <input
              type="radio"
              name="shipping"
              id={`shipping-${index}`}
              className="shipping sr-only"
              checked={checkedItems[index]}
              onChange={() => handleCheck(index)}
            />
            <label
              htmlFor={`shipping-${index}`}
              className={`flex cursor-pointer items-center overflow-hidden rounded-md border bg-gray px-4 py-[18px] dark:bg-white/5 xl:px-[22px] ${checkedItems[index] ? "border-primary" : "border-transparent"}`}
            >
              <div className="mr-4">
                <img src={option.image} alt="fedex" />
              </div>
              <div className="border-l border-[#E0E0E0] pl-4 dark:border-dark-3">
                <span className="block text-base font-semibold text-dark dark:text-white">
                  {option.price}
                </span>
                <span className="block text-xs font-medium text-body-color dark:text-dark-6">
                  {option.title}
                </span>
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

ShippingOption.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default ShippingOption;
