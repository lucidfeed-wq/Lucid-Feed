import React, { useState } from "react";

const SelectBox2 = () => {
  return (
    <section className="bg-gray-2 dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div>
          <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">
            Shipping Address
          </h3>
          <div className="flex flex-wrap">
            <SelectBoxItem
              name="shipping"
              id="one"
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-02/fedex-express.svg"
              price="$10.99"
              title="FedEx Fast Delivery"
              time="Delivery: Friday, 25"
            />
            <SelectBoxItem
              name="shipping"
              id="two"
              img="https://cdn.tailgrids.com/2.0/image/dashboard/images/box-select/box-select-02/dhl-express.svg"
              price="$10.99"
              title="DHL Fast Delivery"
              time="Delivery: Sunday, 27"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectBox2;

const SelectBoxItem = ({ id, name, img, price, title, time }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mr-6 w-full max-w-[310px]">
      <div className="mb-3">
        <input
          type="radio"
          name={name}
          id={id}
          className="sr-only"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <label
          htmlFor={id}
          className={`flex cursor-pointer items-center overflow-hidden rounded-lg border-2 p-[14px] shadow-1 dark:shadow-box-dark sm:px-[22px] ${isChecked ? "border-primary bg-primary/5" : "border-transparent bg-white dark:bg-dark-2"}`}
        >
          <div className="mr-5">
            <img src={img} alt="author" className="h-[18px]" />
          </div>
          <div className="border-l border-stroke dark:border-dark-3 pl-5">
            <span className="mb-1 block text-sm font-semibold text-dark dark:text-white sm:text-base">
              {title}
            </span>
            <span className="block text-sm text-body-color dark:text-dark-6 mb-1">
              {time}
            </span>
            <span className="block text-sm font-medium text-body-color dark:text-dark-6">
              {price}
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};
