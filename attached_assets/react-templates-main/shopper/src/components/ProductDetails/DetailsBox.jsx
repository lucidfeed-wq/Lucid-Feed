import { useState } from "react";

const colorOptions = [
  {
    id: "black",
    name: "color",
    color: "Black",
    bgClass: "bg-dark",
    borderClass: "border-dark",
  },
  {
    id: "gray",
    name: "color",
    color: "Gray",
    bgClass: "bg-[#8B949B]",
    borderClass: "border-[#8B949B]",
  },
  {
    id: "white",
    name: "color",
    color: "White",
    bgClass: "bg-[#DFE4EA]",
    borderClass: "border-[#DFE4EA]",
  },
];

const specificationList = [
  {
    title: "Memory",
    details: "8GB unified memory",
  },
  {
    title: "Storage",
    details: "256GB/512GB SSD storage",
  },
  {
    title: "Display",
    details: "13-inch Retina display with True Tone",
  },
  {
    title: "Processor",
    details: "Apple M1 chip with 8-core CPU & GPU",
  },
];

const sizeList = [
  {
    name: "RAM",
    options: [
      {
        id: "8GB",
        name: "size",
        label: "8GB",
        size: "8GB",
      },
      {
        id: "16GB",
        name: "size",
        label: "16GB",
        size: "16GB",
      },
    ],
  },
  {
    name: "Storage",
    options: [
      {
        id: "256GB",
        name: "storage",
        label: "256GB",
        storage: "256GB",
      },
      {
        id: "512GB",
        name: "storage",
        label: "512GB",
        storage: "512GB",
      },
      {
        id: "1TB",
        name: "storage",
        label: "1TB",
        storage: "1TB",
      },
    ],
  },
];

const DetailsBox = () => {
  const [selectColor, setSelectColor] = useState("");

  const handleColor = (id) => {
    setSelectColor(id);
  };

  const [selectedRAMSize, setSelectedRAMSize] = useState("");
  const [selectedStorageSize, setSelectedStorageSize] = useState("");

  const handleSize = (type, id, size) => {
    if (type === "RAM") {
      setSelectedRAMSize(size);
    } else if (type === "Storage") {
      setSelectedStorageSize(size || id);
    }
  };

  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div>
        <h2 className="text-dark mb-4 text-xl font-semibold lg:text-2xl xl:text-[28px] xl:leading-[1.2] dark:text-white">
          Macbook Pro M1 8/256GB
        </h2>

        <p className="text-body-color dark:text-dark-6 mb-5 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
          erat quam. Vestibulum aliquam nibh.
        </p>

        <div className="flex flex-wrap items-center">
          <div className="flex items-center pr-6">
            <h3 className="text-dark text-lg font-bold sm:text-2xl lg:text-2xl xl:text-[28px] xl:leading-[1.2] dark:text-white">
              <span className="pr-3"> $1200.99 </span>
              <span className="text-body-color dark:text-dark-6 line-through">
                $1500.99
              </span>
            </h3>
          </div>
          <div className="flex items-center">
            <span className="pr-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.0625C4.78125 1.0625 0.5625 5.28125 0.5625 10.5C0.5625 15.7188 4.78125 19.9688 10 19.9688C15.2188 19.9688 19.4688 15.7188 19.4688 10.5C19.4688 5.28125 15.2188 1.0625 10 1.0625ZM10 18.5625C5.5625 18.5625 1.96875 14.9375 1.96875 10.5C1.96875 6.0625 5.5625 2.46875 10 2.46875C14.4375 2.46875 18.0625 6.09375 18.0625 10.5312C18.0625 14.9375 14.4375 18.5625 10 18.5625Z"
                  fill="#22AD5C"
                />
                <path
                  d="M12.6874 7.5938L8.96868 11.2188L7.28118 9.56255C6.99993 9.2813 6.56243 9.31255 6.28118 9.56255C5.99993 9.8438 6.03118 10.2813 6.28118 10.5626L8.28118 12.5001C8.46868 12.6876 8.71868 12.7813 8.96868 12.7813C9.21868 12.7813 9.46868 12.6876 9.65618 12.5001L13.6874 8.62505C13.9687 8.3438 13.9687 7.9063 13.6874 7.62505C13.4062 7.3438 12.9687 7.3438 12.6874 7.5938Z"
                  fill="#22AD5C"
                />
              </svg>
            </span>
            <span className="text-dark text-base font-medium dark:text-white">
              In Stock
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-dark mb-[18px] text-lg font-semibold dark:text-white">
            Color
          </h4>

          <div className="flex items-center space-x-3">
            {colorOptions.map((color, index) => (
              <div className="relative" key={index}>
                <input
                  type="radio"
                  name={color.name}
                  id={color.id + "-" + index}
                  className="sr-only"
                  onChange={() => handleColor(color.id)}
                />
                <label
                  htmlFor={color.id + "-" + index}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 ${color.borderClass}`}
                >
                  <span
                    className={`rounded-full ${color.bgClass} ${selectColor === color.id ? "h-5 w-5" : "h-10 w-10"}`}
                  ></span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[22px]">
          <h4 className="text-dark mb-4 text-lg font-semibold dark:text-white">
            Specification
          </h4>
          <div className="space-y-3">
            {specificationList.map((item, index) => (
              <p
                key={index}
                className="text-dark text-base sm:flex dark:text-white"
              >
                <span className="block w-28 font-medium"> {item.title} : </span>
                <span> {item.details} </span>
              </p>
            ))}
          </div>
        </div>

        <div className="mt-[22px] flex flex-wrap">
          {sizeList.map((listItem, listIndex) => (
            <div key={listIndex} className="mr-[60px] mb-[22px]">
              <h4 className="text-dark mb-[18px] text-lg font-semibold dark:text-white">
                {listItem.name}
              </h4>

              <div className="flex items-center space-x-3">
                {listItem.options.map((option, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      name={option.name}
                      id={option.id + "-" + index}
                      className="sr-only"
                      onChange={() =>
                        handleSize(listItem.name, option.id, option.size)
                      }
                    />
                    <label
                      htmlFor={option.id + "-" + index}
                      className={`inline-block cursor-pointer rounded border px-4 py-2 text-base font-semibold ${
                        listItem.name === "RAM"
                          ? selectedRAMSize === option.size
                            ? "border-primary text-primary"
                            : "border-stroke text-dark dark:border-dark-3 dark:text-white"
                          : selectedStorageSize === (option.size || option.id)
                            ? "border-primary text-primary"
                            : "border-stroke text-dark dark:border-dark-3 dark:text-white"
                      }`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap">
          <div className="border-stroke text-dark dark:border-dark-3 mr-5 mb-4 inline-flex items-center rounded-sm border text-base font-medium dark:text-white">
            <span
              className="dark:text-whitee text-dark flex h-12 w-9 cursor-pointer items-center justify-center select-none"
              onClick={decrement}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M11.0626 6.43135H0.937598C0.712598 6.43135 0.506348 6.24385 0.506348 6.0001C0.506348 5.7751 0.693848 5.56885 0.937598 5.56885H11.0626C11.2876 5.56885 11.4938 5.75635 11.4938 6.0001C11.4938 6.2251 11.2876 6.43135 11.0626 6.43135Z" />
              </svg>
            </span>
            <span className="border-stroke dark:border-dark-3 border-x px-5 py-3">
              {quantity}
            </span>
            <span
              className="text-dark flex h-12 w-9 cursor-pointer items-center justify-center select-none dark:text-white"
              onClick={increment}
            >
              <svg
                width="12"
                height="12"
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
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>

          <div className="mr-4 mb-4">
            <button className="bg-primary hover:bg-blue-dark inline-flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium text-white">
              Add to Cart
            </button>
          </div>
          <div className="mr-4 mb-4">
            <button className="bg-dark hover:bg-dark/90 inline-flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBox;
