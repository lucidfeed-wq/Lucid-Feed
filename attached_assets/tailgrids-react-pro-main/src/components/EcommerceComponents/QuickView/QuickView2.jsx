import React, { useEffect, useRef, useState } from "react";

const QuickView2 = () => {
  const [open, setOpen] = useState(false);

  const menuTrigger = useRef(null);
  const menuRef = useRef(null);

  const useClickOutside = (refs, isOpen, setIsOpen) => {
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (
          !refs.some((ref) => ref.current) ||
          !isOpen ||
          refs.some((ref) => ref.current.contains(target))
        )
          return;
        setIsOpen(false);
      };

      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    }, [refs, isOpen, setIsOpen]);
  };

  useClickOutside([menuRef, menuTrigger], open, setOpen);

  return (
    <>
      <section className="min-h-screen">
        <div className="container mx-auto py-14 text-center">
          <button
            ref={menuTrigger}
            onClick={() => setOpen(!open)}
            className="rounded-md bg-primary py-3 px-7 text-base font-medium text-white hover:bg-blue-dark"
          >
            Quick View
          </button>
          <div
            className={`absolute top-0 left-0 min-h-screen w-full bg-gray-2 dark:bg-dark py-20 lg:py-[120px] ${
              !open && "hidden"
            } `}
          >
            <div className="container mx-auto">
              <div className="-mx-4 flex justify-center">
                <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
                  <div
                    ref={menuRef}
                    className="relative overflow-hidden bg-white dark:bg-dark-2"
                  >
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute right-8 top-8 flex items-center justify-center rounded-full text-body-color dark:text-dark-6 hover:text-primary"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M11 10L18.625 2.375C18.9062 2.09375 18.9062 1.65625 18.625 1.375C18.3438 1.09375 17.9063 1.09375 17.625 1.375L10 9L2.375 1.375C2.09375 1.09375 1.65625 1.09375 1.375 1.375C1.09375 1.65625 1.09375 2.09375 1.375 2.375L9 10L1.375 17.625C1.09375 17.9063 1.09375 18.3438 1.375 18.625C1.5 18.75 1.6875 18.8438 1.875 18.8438C2.0625 18.8438 2.25 18.7812 2.375 18.625L10 11L17.625 18.625C17.75 18.75 17.9375 18.8438 18.125 18.8438C18.3125 18.8438 18.5 18.7812 18.625 18.625C18.9062 18.3438 18.9062 17.9063 18.625 17.625L11 10Z" />
                      </svg>
                    </button>
                    <div className="items-center lg:flex">
                      <div className="mb-12 w-full lg:mb-0 lg:max-w-[450px]">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-02/image-01.jpg"
                          alt="product"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full px-4 sm:px-8 pb-8 lg:pt-8 xl:pl-[70px] xl:pr-[70px]">
                        <h3 className="mb-[10px] text-xl font-semibold text-dark dark:text-white xl:leading-[40px] xl:text-[28px]">
                          Winter Denim Jacket
                        </h3>
                        <p className="mb-6 text-base text-body-color dark:text-dark-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent quis consequat nunc.
                        </p>
                        <div className="mb-5 flex flex-wrap items-center">
                          <div className="mr-4 flex items-center">
                            <p className="text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                              $29.00
                            </p>
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
                                <g clipPath="url(#clip0_1109_50321)">
                                  <path
                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                    fill="#22AD5C"
                                  />
                                  <path
                                    d="M12.6875 7.09374L8.96875 10.7187L7.28125 9.06249C7 8.78124 6.5625 8.81249 6.28125 9.06249C6 9.34374 6.03125 9.78124 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2812 8.96875 12.2812C9.21875 12.2812 9.46875 12.1875 9.65625 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                                    fill="#22AD5C"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1109_50321">
                                    <rect width={20} height={20} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                            <span className="text-base font-medium text-dark dark:text-white">
                              {" "}
                              In Stock{" "}
                            </span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                            Color
                          </h4>
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <input
                                type="radio"
                                name="productColor"
                                id="color1"
                                className="productColor sr-only"
                              />
                              <label
                                htmlFor="color1"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-[#1CA1D6]"
                              >
                                <span className="h-10 w-10 rounded-full bg-[#1CA1D6]"></span>
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="radio"
                                name="productColor"
                                id="color2"
                                className="productColor sr-only"
                              />
                              <label
                                htmlFor="color2"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-dark"
                              >
                                <span className="h-10 w-10 rounded-full bg-dark"></span>
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="radio"
                                name="productColor"
                                id="color3"
                                className="productColor sr-only"
                              />
                              <label
                                htmlFor="color3"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-[#8E6053]"
                              >
                                <span className="h-10 w-10 rounded-full bg-[#8E6053]"></span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                            Select Size
                          </h4>
                          <div className="flex items-center gap-3">
                            <div>
                              <input
                                type="radio"
                                name="size"
                                id="small"
                                className="filter-size sr-only"
                              />
                              <label
                                htmlFor="small"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-sm font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                              >
                                S
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                name="size"
                                id="medium"
                                className="filter-size sr-only"
                              />
                              <label
                                htmlFor="medium"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-sm font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                              >
                                M
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                name="size"
                                id="large"
                                className="filter-size sr-only"
                              />
                              <label
                                htmlFor="large"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-sm font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                              >
                                LG
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                name="size"
                                id="extraLarge"
                                className="filter-size sr-only"
                              />
                              <label
                                htmlFor="extraLarge"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-sm font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                              >
                                XL
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                name="size"
                                id="extraExtraLarge"
                                className="filter-size sr-only"
                              />
                              <label
                                htmlFor="extraExtraLarge"
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-sm font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                              >
                                XXL
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-[18px]">
                          <div>
                            <button className="inline-flex items-center justify-center bg-dark py-[13px] px-7 text-center text-base font-medium text-white hover:bg-dark/90 md:px-10">
                              Add to Cart
                            </button>
                          </div>
                          <div>
                            <button className="flex h-[50px] w-[50px] items-center justify-center border border-stroke dark:border-dark-3 text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white">
                              <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <path d="M11 20.2812C10.5531 20.2812 10.1062 20.1094 9.7625 19.8C8.97187 19.1125 8.24999 18.4937 7.59687 17.9438C5.63749 16.2594 3.91874 14.85 2.71562 13.4062C1.30624 11.6875 0.618744 10.0719 0.618744 8.25C0.618744 6.49687 1.23749 4.84688 2.33749 3.64375C3.47187 2.40625 5.05312 1.71875 6.73749 1.71875C8.00937 1.71875 9.21249 2.13125 10.2437 2.92188C10.5187 3.12812 10.7594 3.33438 11 3.60938C11.2406 3.36875 11.4812 3.12812 11.7562 2.92188C12.7875 2.13125 13.9562 1.71875 15.2625 1.71875C16.9812 1.71875 18.5281 2.40625 19.6625 3.64375C20.7969 4.84688 21.3812 6.49687 21.3812 8.25C21.3812 10.0719 20.7281 11.6875 19.2844 13.4062C18.0812 14.85 16.3625 16.2937 14.4031 17.9438C13.75 18.4937 12.9937 19.1469 12.2031 19.8C11.8937 20.1094 11.4469 20.2812 11 20.2812ZM6.73749 3.26562C5.46562 3.26562 4.29687 3.78125 3.43749 4.675C2.61249 5.60313 2.16562 6.875 2.16562 8.25C2.16562 9.65938 2.71562 11 3.88437 12.4094C5.01874 13.75 6.66874 15.1594 8.55937 16.775C9.21249 17.325 9.96874 17.9781 10.7594 18.6656C10.8969 18.7687 11.1031 18.7687 11.2406 18.6656C12.0312 17.9781 12.7875 17.3594 13.4406 16.775C15.3656 15.125 17.0156 13.75 18.1156 12.4094C19.2844 11 19.8344 9.65938 19.8344 8.25C19.8344 6.875 19.3531 5.60312 18.5281 4.70937C17.6687 3.78125 16.5 3.26562 15.2625 3.26562C14.3344 3.26562 13.475 3.575 12.7187 4.125C12.4094 4.36562 12.1344 4.64062 11.8594 4.95C11.6531 5.19062 11.3437 5.3625 11 5.3625C10.6562 5.3625 10.3812 5.225 10.1406 4.95C9.86562 4.64062 9.59062 4.36562 9.28125 4.125C8.55937 3.575 7.7 3.26562 6.73749 3.26562Z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <a
                          href="/#"
                          className="inline-block mt-[18px] text-base font-medium text-body-color dark:text-dark-6 hover:text-primary hover:underline"
                        >
                          View Product Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickView2;
