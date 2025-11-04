import React, { useState } from "react";

const SelectBox4 = () => {
  return (
    <section className="bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div>
          <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">Select List</h3>
          <div className="max-w-[270px] space-y-[10px]">
            <SelectBoxItem id="one" title="List Title Here" />
            <SelectBoxItem id="two" title="List Title Here" />
            <SelectBoxItem id="three" title="List Title Here" />
            <SelectBoxItem id="four" title="List Title Here" />
            <SelectBoxItem id="five" title="List Title Here" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectBox4;

const SelectBoxItem = ({ id, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        name="select-list"
        id={id}
        className="select-list sr-only"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label
        htmlFor={id}
        className={`${
          isChecked ? "border-primary" : "border-stroke dark:border-dark-3"
        } select-list text-body-color dark:text-dark-6 flex cursor-pointer items-center rounded-md border bg-white dark:bg-dark-2 py-3 px-5`}
      >
        <span
          className={`${
            isChecked ? "bg-primary" : "bg-secondary-color"
          } rounded-ful icon flex h-5 w-5 items-center justify-center rounded-full`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3536 2.64645C10.5488 2.84171 10.5488 3.15829 10.3536 3.35355L4.85355 8.85355C4.65829 9.04882 4.34171 9.04882 4.14645 8.85355L1.64645 6.35355C1.45118 6.15829 1.45118 5.84171 1.64645 5.64645C1.84171 5.45118 2.15829 5.45118 2.35355 5.64645L4.5 7.79289L9.64645 2.64645C9.84171 2.45118 10.1583 2.45118 10.3536 2.64645Z"
              fill="white"
            ></path>
          </svg>
        </span>
        <span className="pl-[14px] text-base font-medium">{title}</span>
      </label>
    </div>
  );
};
