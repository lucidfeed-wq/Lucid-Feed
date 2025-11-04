import { useState } from "react";

const detailsList = [
  {
    title: "Size",
    details: "Small, Medium, Large",
  },
  {
    title: "Color",
    details: "White, Black, Gray",
  },
  {
    title: "Brand",
    details: "Shirt Flex",
  },
];

const colorOptions = [
  {
    id: "gray",
    name: "color",
    color: "Gray",
    bgClass: "bg-body-color",
  },
  {
    id: "red",
    name: "color",
    color: "Red",
    bgClass: "bg-red-600",
  },
  {
    id: "blue",
    name: "color",
    color: "Blue",
    bgClass: "bg-primary",
  },
  {
    id: "green",
    name: "color",
    color: "Green",
    bgClass: "bg-secondary",
  },
];

const sizeOptions = [
  {
    id: "sizeS",
    name: "size",
    label: "Small",
    size: "S",
  },
  {
    id: "sizeM",
    name: "size",
    label: "Medium",
    size: "M",
  },
  {
    id: "sizeL",
    name: "size",
    label: "Large",
    size: "L",
  },
];

const DetailsBox = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const [selectColor, setSelectColor] = useState("");

  const handleColor = (id) => {
    setSelectColor(id);
  };

  const [selectSize, setSelectSize] = useState("");

  const handleSize = (id) => {
    setSelectSize(id);
  };

  return (
    <>
      <h2 className="mb-[22px] text-2xl font-bold text-dark dark:text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
        Men&apos;s Regular T-shirt
      </h2>

      <div className="mb-6 flex flex-wrap items-center">
        <div className="mr-4 flex items-center">
          <div className="flex items-center">
            {[...Array(5).keys()].map((index) => (
              <span key={index} className="pr-1">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1825_1546)">
                    <path
                      d="M16.7906 6.72187L11.7 5.93438L9.39371 1.09688C9.22495 0.759375 8.77495 0.759375 8.6062 1.09688L6.29995 5.9625L1.23746 6.72187C0.87183 6.77812 0.731205 7.25625 1.01246 7.50938L4.69683 11.3063L3.82495 16.6219C3.7687 16.9875 4.13433 17.2969 4.47183 17.0719L9.0562 14.5687L13.6125 17.0719C13.9218 17.2406 14.3156 16.9594 14.2312 16.6219L13.3593 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
                      fill="#FFA645"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1825_1546">
                      <rect width={18} height={18} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            ))}

            <span className="pl-1 text-base font-medium text-dark dark:text-white">
              5 Rating
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="pr-2">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1031_24115)">
                <path
                  d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                  fill="#22AD5C"
                />
                <path
                  d="M12.6874 7.09368L8.96868 10.7187L7.28118 9.06243C6.99993 8.78118 6.56243 8.81243 6.28118 9.06243C5.99993 9.34368 6.03118 9.78118 6.28118 10.0624L8.28118 11.9999C8.46868 12.1874 8.71868 12.2812 8.96868 12.2812C9.21868 12.2812 9.46868 12.1874 9.65618 11.9999L13.6874 8.12493C13.9687 7.84368 13.9687 7.40618 13.6874 7.12493C13.4062 6.84368 12.9687 6.84368 12.6874 7.09368Z"
                  fill="#22AD5C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1031_24115">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="text-base font-medium text-dark dark:text-white">
            In Stock
          </span>
        </div>
      </div>

      <p className="mb-8 text-base font-medium text-body-color">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non erat
        quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod quis.
      </p>

      <div className="mb-7 flex-wrap justify-between xs:flex">
        <div className="mb-8 xs:mb-0">
          <p className="mb-3 text-base font-medium text-dark dark:text-white">
            Quantity
          </p>

          <div className="inline-flex items-center rounded-sm border border-stroke text-base font-medium text-dark dark:border-dark-3 dark:text-white">
            <span
              className="flex h-9 w-[34px] cursor-pointer select-none items-center justify-center text-dark dark:text-white"
              onClick={decrement}
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M11.0626 6.43135H0.937598C0.712598 6.43135 0.506348 6.24385 0.506348 6.0001C0.506348 5.7751 0.693848 5.56885 0.937598 5.56885H11.0626C11.2876 5.56885 11.4938 5.75635 11.4938 6.0001C11.4938 6.2251 11.2876 6.43135 11.0626 6.43135Z" />
              </svg>
            </span>
            <span className="border-x border-stroke px-[19px] py-[6px] dark:border-dark-3">
              {quantity}
            </span>
            <span
              className="flex h-9 w-[34px] cursor-pointer select-none items-center justify-center text-dark dark:text-white"
              onClick={increment}
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <g clipPath="url(#clip0_1032_24236)">
                  <path d="M11.2501 5.5876H6.43135V0.750098C6.43135 0.525098 6.24385 0.318848 6.0001 0.318848C5.7751 0.318848 5.56885 0.506348 5.56885 0.750098V5.5876H0.750098C0.525098 5.5876 0.318848 5.7751 0.318848 6.01885C0.318848 6.24385 0.506348 6.4501 0.750098 6.4501H5.5876V11.2501C5.5876 11.4751 5.7751 11.6813 6.01885 11.6813C6.24385 11.6813 6.4501 11.4938 6.4501 11.2501V6.43135H11.2501C11.4751 6.43135 11.6813 6.24385 11.6813 6.0001C11.6813 5.7751 11.4751 5.5876 11.2501 5.5876Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1032_24236">
                    <rect width={12} height={12} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        <div className="xs:text-right">
          <span className="block text-[28px] font-semibold leading-[40px] text-dark dark:text-white">
            $29.00
          </span>
          <span className="text-base text-body-color dark:text-dark-6">
            +12% VAT Added
          </span>
        </div>
      </div>

      <div className="mb-8">
        <button className="flex w-full items-center justify-center rounded-md bg-primary px-10 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark">
          Add to Cart
        </button>
      </div>

      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
        Product Details
      </h3>

      <div className="mb-9 space-y-4">
        {detailsList.map((item, index) => (
          <p
            key={index}
            className="flex justify-between border-b border-stroke pb-4 text-base font-medium text-dark last:border-b-0 dark:border-dark-3 dark:text-white"
          >
            <span className="whitespace-nowrap"> {item.title} </span>
            <span> {item.details} </span>
          </p>
        ))}
      </div>

      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
        Select Size
      </h3>

      <div className="mb-9 flex flex-wrap items-center gap-[14px]">
        {sizeOptions.map((sizeOption, index) => (
          <div key={index}>
            <input
              type="radio"
              name={sizeOption.name}
              id={sizeOption.id}
              className="filter-size sr-only"
              onChange={() => handleSize(sizeOption.id)}
            />
            <label
              htmlFor={sizeOption.id}
              className={`inline-block cursor-pointer rounded-[5px] border px-5 py-2 text-base font-medium hover:border-primary hover:bg-primary hover:text-white ${selectSize === sizeOption.id ? "border-primary bg-primary text-white" : "border-stroke text-dark dark:border-dark-3 dark:text-white"}`}
            >
              {sizeOption.label}
            </label>
          </div>
        ))}
      </div>

      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl">
        Select Color
      </h3>

      <div className="mb-9 flex items-center gap-[14px]">
        {colorOptions.map((color, index) => (
          <div key={index}>
            <input
              type="radio"
              name={color.name}
              id={color.id}
              className="sr-only"
              onChange={() => handleColor(color.id)}
            />
            <label
              htmlFor={color.id}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm text-white ${color.bgClass}`}
            >
              <span
                className={`${selectColor === color.id ? "" : "opacity-0"} `}
              >
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.4"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsBox;
