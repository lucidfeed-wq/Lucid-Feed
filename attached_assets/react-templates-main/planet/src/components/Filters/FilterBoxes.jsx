import { useState } from "react";

const filterGroupItems = [
  {
    title: "Product Type",
    options: [
      {
        text: "Standalone",
      },
      {
        text: "Mobile",
      },
      {
        text: "Clothing",
      },
      {
        text: "Tethered",
      },
    ],
  },
  {
    title: "Choose Color",
    options: [
      {
        text: "Black",
        color: "bg-dark",
      },
      {
        text: "Red",
        color: "bg-red-600",
      },
      {
        text: "Blue",
        color: "bg-primary",
      },
      {
        text: "Green",
        color: "bg-secondary",
      },
    ],
  },
  {
    title: "Select Size",
    options: [
      {
        text: "M",
      },
      {
        text: "L",
      },
      {
        text: "XL",
      },
      {
        text: "XXL",
      },
    ],
  },
];

const FilterBoxes = () => {
  const [checkedItems, setCheckedItems] = useState(
    Array(filterGroupItems.length)
      .fill()
      .map(() => ({})),
  );

  const handleCheckboxChange = (categoryIndex, optionIndex) => {
    setCheckedItems((prevState) => {
      const newState = [...prevState];
      newState[categoryIndex] = { ...prevState[categoryIndex] };
      newState[categoryIndex][optionIndex] =
        !newState[categoryIndex][optionIndex];
      return newState;
    });
  };

  return (
    <>
      {filterGroupItems.map((category, categoryIndex) => (
        <div
          key={categoryIndex}
          className="mb-8 rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2"
        >
          <div className="border-b border-stroke px-8 py-[14px] dark:border-dark-3 lg:px-6 xl:px-8">
            <h3 className="text-lg font-semibold text-dark dark:text-white">
              {category.title}
            </h3>
          </div>

          <div className="space-y-4 lg:p-6 xl:p-8">
            {category.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label
                  htmlFor={`option-${categoryIndex}-${optionIndex}`}
                  className="flex cursor-pointer select-none items-center font-medium text-dark dark:text-white"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      name={`productType-${categoryIndex}`}
                      id={`option-${categoryIndex}-${optionIndex}`}
                      checked={
                        checkedItems[categoryIndex]?.[optionIndex] || false
                      }
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, optionIndex)
                      }
                    />
                    <div
                      className={`mr-[10px] flex h-5 w-5 items-center justify-center rounded-sm ${option.color ? option.color : `border ${checkedItems[categoryIndex]?.[optionIndex] ? "border-primary bg-primary" : "border-stroke bg-transparent dark:border-dark-3"}`} `}
                    >
                      <span
                        className={`${checkedItems[categoryIndex]?.[optionIndex] ? "opacity-100" : "opacity-0"}`}
                      >
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.4"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default FilterBoxes;
