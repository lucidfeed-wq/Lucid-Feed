import React, { useState } from "react";

const starIcon = (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1830_23)">
      <path
        d="M16.7906 6.72187L11.7 5.93438L9.39371 1.09688C9.22495 0.759375 8.77495 0.759375 8.6062 1.09688L6.29995 5.9625L1.23746 6.72187C0.87183 6.77812 0.731205 7.25625 1.01246 7.50938L4.69683 11.3063L3.82495 16.6219C3.7687 16.9875 4.13433 17.2969 4.47183 17.0719L9.0562 14.5687L13.6125 17.0719C13.9218 17.2406 14.3156 16.9594 14.2312 16.6219L13.3593 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
        fill="#FFA645"
      />
    </g>
    <defs>
      <clipPath id="clip0_1830_23">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ProductDetails4 = () => {
  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };  

  return (
    <section className="bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            <div className="relative mb-10">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-04/image-01.jpg"
                  alt="products-details"
                  className={`${
                    productOne ? "block" : "hidden"
                  } h-full min-h-[250px] w-full object-cover object-center`}
                />
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-04/image-02.jpg"
                  alt="products-details"
                  className={`${
                    productTwo ? "block" : "hidden"
                  } h-full min-h-[250px] w-full object-cover object-center`}
                />
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-04/image-03.jpg"
                  alt="products-details"
                  className={`${
                    productThree ? "block" : "hidden"
                  } h-full min-h-[250px] w-full object-cover object-center`}
                />
              </div>
              <div className="shadow-testimonial-6 dark:shadow-box-dark absolute bottom-6 left-1/2 mx-auto inline-flex -translate-x-1/2 space-x-[6px] rounded-full bg-white dark:bg-dark-2 px-[18px] py-[10px]">
                <button
                  onClick={() => {
                    setProductOne(true);
                    setProductTwo(false);
                    setProductThree(false);
                  }}
                  className={`${
                    productOne ? "w-[14px] opacity-100" : "w-2 opacity-30"
                  } bg-primary h-2 rounded-full transition-all`}
                ></button>
                <button
                  onClick={() => {
                    setProductOne(false);
                    setProductTwo(true);
                    setProductThree(false);
                  }}
                  className={`${
                    productTwo ? "w-[14px] opacity-100" : "w-2 opacity-30"
                  } bg-primary h-2 rounded-full transition-all`}
                ></button>
                <button
                  onClick={() => {
                    setProductOne(false);
                    setProductTwo(false);
                    setProductThree(true);
                  }}
                  className={`${
                    productThree ? "w-[14px] opacity-100" : "w-2 opacity-30"
                  } bg-primary h-2 rounded-full transition-all`}
                ></button>
              </div>
            </div>

            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-8/12">
                <div className="max-w-[570px]">
                  <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:leading-[35px] sm:text-[28px]">
                    Men's Regular T-shirt
                  </h3>
                  <p className="text-body-color dark:text-dark-6 mb-8 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi non erat quam. Vestibulum aliquam nibh dui, et aliquet
                    nibh euismod quis.
                  </p>

                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-8">
                        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                          Size
                        </h4>
                        <div className="flex items-center gap-[14px]">
                          <div>
                            <input
                              type="radio"
                              name="size"
                              id="32"
                              className="filter-size-2 sr-only"
                            />
                            <label
                              htmlFor="32"
                              className="text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-base font-semibold"
                            >
                              32
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="size"
                              id="36"
                              className="filter-size-2 sr-only"
                            />
                            <label
                              htmlFor="36"
                              className="text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-base font-semibold"
                            >
                              36
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="size"
                              id="40"
                              className="filter-size-2 sr-only"
                            />
                            <label
                              htmlFor="40"
                              className="text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-base font-semibold"
                            >
                              40
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="size"
                              id="42"
                              className="filter-size-2 sr-only"
                            />
                            <label
                              htmlFor="42"
                              className="text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-base font-semibold"
                            >
                              42
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-8">
                        <h4 className="mb-5 text-lg font-semibold text-dark dark:text-white">
                          Color
                        </h4>
                        <div className="flex items-center gap-[14px]">
                          <div>
                            <input
                              type="radio"
                              name="color"
                              id="black"
                              className="sr-only"
                            />
                            <label
                              htmlFor="black"
                              className="box flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-dark dark:bg-dark-2 text-white"
                            >
                              <span className="opacity-0">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.1499 3.35002C14.9249 3.12502 14.5749 3.12502 14.3499 3.35002L5.84994 11.6L1.64994 7.47502C1.42494 7.25002 1.07494 7.27502 0.849942 7.47502C0.624942 7.70002 0.649942 8.05002 0.849942 8.27502L5.27494 12.575C5.42494 12.725 5.62494 12.8 5.84994 12.8C6.07494 12.8 6.24994 12.725 6.42494 12.575L15.1499 4.10002C15.3749 3.92502 15.3749 3.57502 15.1499 3.35002Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="color"
                              id="red"
                              className="sr-only"
                            />
                            <label
                              htmlFor="red"
                              className="box bg-primary flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full text-white"
                            >
                              <span className="opacity-0">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.1499 3.35002C14.9249 3.12502 14.5749 3.12502 14.3499 3.35002L5.84994 11.6L1.64994 7.47502C1.42494 7.25002 1.07494 7.27502 0.849942 7.47502C0.624942 7.70002 0.649942 8.05002 0.849942 8.27502L5.27494 12.575C5.42494 12.725 5.62494 12.8 5.84994 12.8C6.07494 12.8 6.24994 12.725 6.42494 12.575L15.1499 4.10002C15.3749 3.92502 15.3749 3.57502 15.1499 3.35002Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="color"
                              id="blue"
                              className="sr-only"
                            />
                            <label
                              htmlFor="blue"
                              className="box bg-secondary flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full text-white"
                            >
                              <span className="opacity-0">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.1499 3.35002C14.9249 3.12502 14.5749 3.12502 14.3499 3.35002L5.84994 11.6L1.64994 7.47502C1.42494 7.25002 1.07494 7.27502 0.849942 7.47502C0.624942 7.70002 0.649942 8.05002 0.849942 8.27502L5.27494 12.575C5.42494 12.725 5.62494 12.8 5.84994 12.8C6.07494 12.8 6.24994 12.725 6.42494 12.575L15.1499 4.10002C15.3749 3.92502 15.3749 3.57502 15.1499 3.35002Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-8">
                        <h3 className="mb-1 text-4xl font-bold text-dark dark:text-white">
                          $159.00
                        </h3>
                        <p className="text-body-color dark:text-dark-6 text-base font-medium">
                          Offer Available
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2">
                      <div className="mb-8">
                        <h3 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                          Reviews
                        </h3>
                        <div className="flex items-center">
                          <span className="mr-1">{starIcon}</span>
                          <span className="mr-1">{starIcon}</span>
                          <span className="mr-1">{starIcon}</span>
                          <span className="mr-1">{starIcon}</span>
                          <span className="mr-2">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1830_31)">
                                <path
                                  d="M4.52801 17.4937C4.27488 17.4937 4.02176 17.4094 3.82489 17.2687C3.43113 16.9875 3.20613 16.4812 3.29051 16.0031L4.02176 11.475L0.87176 8.2406C0.53426 7.9031 0.42176 7.39685 0.562385 6.91873C0.70301 6.46873 1.09676 6.13123 1.54676 6.07498L5.90613 5.37185L7.87488 1.23748C8.09988 0.787476 8.52176 0.506226 8.99988 0.506226C9.47801 0.506226 9.92801 0.787476 10.1249 1.23748L12.0936 5.34373L16.4249 6.01873C16.8749 6.1031 17.2686 6.41248 17.4093 6.86248C17.578 7.3406 17.4374 7.84685 17.0999 8.18435L13.978 11.4469L14.7093 16.0031C14.7936 16.5094 14.5968 16.9875 14.1749 17.2687C13.7811 17.55 13.303 17.5781 12.8811 17.3531L8.99988 15.2437L5.11863 17.3531C4.94988 17.4656 4.72488 17.4937 4.52801 17.4937ZM1.77176 7.31248C1.77176 7.31248 1.77176 7.3406 1.77176 7.36873L5.06238 10.7437C5.25926 10.9406 5.34363 11.25 5.31551 11.5312L4.55614 16.2281C4.55614 16.2281 4.55614 16.2281 4.55614 16.2562L8.60613 14.0625C8.85926 13.9219 9.16863 13.9219 9.44988 14.0625L13.4999 16.2562C13.4999 16.2562 13.4999 16.2562 13.4999 16.2281L12.7405 11.5031C12.6843 11.2219 12.7968 10.9406 12.9936 10.7156L16.2843 7.3406C16.3124 7.31248 16.2843 7.28435 16.2843 7.28435L11.7561 6.58123C11.4749 6.52498 11.2218 6.35623 11.1093 6.07498L8.99988 1.79998L6.97488 6.1031C6.86238 6.35623 6.60926 6.5531 6.32801 6.60935L1.77176 7.31248Z"
                                  fill="#FFA645"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1830_31">
                                  <rect width={18} height={18} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="text-medium text-body-color dark:text-dark-6 text-base">
                            115 Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-4/12">
                <div>
                  <h4 className="mb-5 text-xl font-semibold text-dark dark:text-white">
                    Product Details
                  </h4>
                  <p className="text-dark dark:text-white mb-3 flex text-base">
                    <span className="w-24 font-medium"> Brand: </span>
                    <span> Nike </span>
                  </p>
                  <p className="text-dark dark:text-white mb-3 flex text-base">
                    <span className="w-24 font-medium"> Warranty: </span>
                    <span> 3 months </span>
                  </p>
                  <p className="text-dark dark:text-white mb-3 flex text-base">
                    <span className="w-24 font-medium"> Color: </span>
                    <span> Blue </span>
                  </p>
                  <p className="text-dark dark:text-white mb-6 flex text-base">
                    <span className="w-24 font-medium"> Size: </span>
                    <span> Medium </span>
                  </p>
                  <div className="flex">
                    <p className="mr-4 mb-5 inline-flex items-center rounded-sm border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white">
                      <span 
                        className="cursor-pointer select-none flex items-center justify-center w-[34px] h-[42px] text-dark dark:text-white"
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
                      <span className="px-3">{quantity}</span>
                      <span 
                        className="cursor-pointer select-none flex items-center justify-center w-[34px] h-[42px] text-dark dark:text-white"
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
                    </p>
                    <button className="text-primary flex h-[42px] w-[42px] items-center justify-center rounded-sm border border-stroke dark:border-dark-3">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M10 18.4375C9.59375 18.4375 9.1875 18.2812 8.875 18C8.15625 17.375 7.5 16.8125 6.90625 16.3125C5.125 14.7812 3.5625 13.5 2.46875 12.1875C1.1875 10.625 0.5625 9.15625 0.5625 7.5C0.5625 5.90625 1.125 4.40625 2.125 3.3125C3.15625 2.1875 4.59375 1.5625 6.125 1.5625C7.28125 1.5625 8.375 1.9375 9.3125 2.65625C9.5625 2.84375 9.78125 3.03125 10 3.28125C10.2188 3.0625 10.4375 2.84375 10.6875 2.65625C11.625 1.9375 12.6875 1.5625 13.875 1.5625C15.4375 1.5625 16.8438 2.1875 17.875 3.3125C18.9063 4.40625 19.4375 5.90625 19.4375 7.5C19.4375 9.15625 18.8438 10.625 17.5313 12.1875C16.4375 13.5 14.875 14.8125 13.0938 16.3125C12.5 16.8125 11.8125 17.4062 11.0938 18C10.8125 18.2812 10.4063 18.4375 10 18.4375ZM6.125 2.96875C4.96875 2.96875 3.90625 3.4375 3.125 4.25C2.375 5.09375 1.96875 6.25 1.96875 7.5C1.96875 8.78125 2.46875 10 3.53125 11.2812C4.5625 12.5 6.0625 13.7812 7.78125 15.25C8.375 15.75 9.0625 16.3438 9.78125 16.9688C9.90625 17.0625 10.0938 17.0625 10.2188 16.9688C10.9375 16.3438 11.625 15.7812 12.2188 15.25C13.9688 13.75 15.4688 12.5 16.4688 11.2812C17.5313 10 18.0313 8.78125 18.0313 7.5C18.0313 6.25 17.5938 5.09375 16.8438 4.28125C16.0625 3.4375 15 2.96875 13.875 2.96875C13.0313 2.96875 12.25 3.25 11.5625 3.75C11.2813 3.96875 11.0313 4.21875 10.7813 4.5C10.5938 4.71875 10.3125 4.875 10 4.875C9.6875 4.875 9.4375 4.75 9.21875 4.5C8.96875 4.21875 8.71875 3.96875 8.4375 3.75C7.78125 3.25 7 2.96875 6.125 2.96875Z" />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-primary inline-flex items-center justify-center rounded-md py-[13px] px-10 text-center text-base font-medium text-white hover:bg-blue-dark">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails4;
