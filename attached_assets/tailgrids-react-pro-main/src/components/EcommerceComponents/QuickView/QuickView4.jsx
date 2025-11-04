import React, { useEffect, useRef, useState } from "react";

const QuickView4 = () => {
  const [open, setOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };  

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
                    className="relative overflow-hidden bg-white dark:bg-dark-2 border border-stroke dark:border-dark-3"
                  >
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-body-color hover:text-primary"
                    >
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        className="fill-current"
                      >
                        <path d="M7.55122 7.00259L13.5405 0.998637C13.6919 0.847459 13.6919 0.609892 13.5405 0.458714C13.3891 0.307535 13.1513 0.307535 13 0.458714L7.01067 6.46266L0.999762 0.480311C0.848409 0.329132 0.610567 0.329132 0.459213 0.480311C0.30786 0.631489 0.30786 0.869056 0.459213 1.02023L6.47012 7.00259L0.480835 13.0065C0.329482 13.1577 0.329482 13.3953 0.480835 13.5465C0.545701 13.6113 0.653811 13.6544 0.740299 13.6544C0.826787 13.6544 0.934896 13.6113 0.999762 13.5465L7.01067 7.54251L13 13.5465C13.0648 13.6113 13.1729 13.6544 13.2594 13.6544C13.3459 13.6544 13.454 13.6113 13.5189 13.5465C13.6702 13.3953 13.6702 13.1577 13.5189 13.0065L7.55122 7.00259Z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13 0.458714C13.1513 0.307535 13.3891 0.307535 13.5405 0.458714C13.6919 0.609892 13.6919 0.847459 13.5405 0.998637L7.55122 7.00259L13.5189 13.0065C13.6702 13.1577 13.6702 13.3953 13.5189 13.5465C13.454 13.6113 13.3459 13.6544 13.2594 13.6544C13.1729 13.6544 13.0648 13.6113 13 13.5465L7.01067 7.54251L0.999762 13.5465C0.934896 13.6113 0.826787 13.6544 0.740299 13.6544C0.653811 13.6544 0.545701 13.6113 0.480835 13.5465C0.329482 13.3953 0.329482 13.1577 0.480835 13.0065L6.47012 7.00259L0.459213 1.02023C0.30786 0.869056 0.30786 0.631489 0.459213 0.480311C0.610567 0.329132 0.848409 0.329132 0.999762 0.480311L7.01067 6.46266L13 0.458714ZM7.00982 5.97398L12.7549 0.214814C13.0414 -0.0713105 13.4987 -0.0717515 13.7852 0.214373C14.0715 0.500351 14.0716 0.956387 13.7856 1.24254M13.7856 1.24254L8.03918 7.00303L13.7635 12.7622C13.7637 12.7623 13.7634 12.7621 13.7635 12.7622C14.0496 13.0483 14.0499 13.5048 13.7635 13.7908C13.6331 13.9211 13.4366 14 13.2594 14C13.0823 14 12.8858 13.9211 12.7554 13.7908L7.01026 8.03164L1.24442 13.7908C1.11394 13.9211 0.917524 14 0.740332 14C0.563139 14 0.366724 13.9211 0.236243 13.7908C-0.0502127 13.5047 -0.0502127 13.0483 0.236243 12.7622L5.9809 7.00347L0.215063 1.26502C-0.0713931 0.978892 -0.0718346 0.522095 0.214621 0.23597C0.500987 -0.0500637 0.957673 -0.0501546 1.24415 0.235697C1.24424 0.235788 1.24406 0.235606 1.24415 0.235697L7.00982 5.97398"
                        />
                      </svg>
                    </button>
                    <div className="items-center lg:flex">
                      <div className="mb-12 w-full lg:mb-0 lg:max-w-[500px]">
                        <img
                          src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-04/image-01.jpg"
                          alt="product"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full py-5 px-5 text-center lg:ml-14">
                        <div className="mx-auto lg:max-w-[350px]">
                          <h3 className="mb-[10px] text-xl font-semibold text-dark dark:text-white xl:leading-[40px] xl:text-[28px]">
                            Trendy Woody Door with handle lock
                          </h3>
                          <p className="mb-5 text-base font-medium text-dark dark:text-white">
                            <span className="pr-0.5"> Availability: </span>
                            <span className="text-green"> In Stock </span>
                          </p>
                          <div className="mb-5">
                            <h4 className="mb-3 text-base text-body-color dark:text-dark-6">
                              Choose Color
                            </h4>
                            <div className="flex items-center justify-center gap-3">
                              <div className="relative">
                                <input
                                  type="radio"
                                  name="productColor"
                                  id="color1"
                                  className="productColor2 sr-only"
                                />
                                <label
                                  htmlFor="color1"
                                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-[#1CA1D6]"
                                >
                                  <span className="h-8 w-8 rounded-full bg-[#1CA1D6]"></span>
                                </label>
                              </div>
                              <div className="relative">
                                <input
                                  type="radio"
                                  name="productColor"
                                  id="color2"
                                  className="productColor2 sr-only"
                                />
                                <label
                                  htmlFor="color2"
                                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-dark"
                                >
                                  <span className="h-8 w-8 rounded-full bg-dark"></span>
                                </label>
                              </div>
                              <div className="relative">
                                <input
                                  type="radio"
                                  name="productColor"
                                  id="color3"
                                  className="productColor2 sr-only"
                                />
                                <label
                                  htmlFor="color3"
                                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-4 border-[#8E6053]"
                                >
                                  <span className="h-8 w-8 rounded-full bg-[#8E6053]"></span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="mb-3 text-center text-base text-body-color dark:text-dark-6">
                              Quantity
                            </p>
                            <div className="mb-[14px] inline-flex items-center rounded-sm border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white">
                              <span 
                                className="cursor-pointer select-none flex items-center justify-center w-9 h-12 text-dark dark:text-white"
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
                              <span className="py-3 px-4 w-[98px] border-x border-stroke dark:border-dark-3">
                                {quantity}
                              </span>
                              <span 
                                className="cursor-pointer select-none flex items-center justify-center w-9 h-12 text-dark dark:text-white"
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

                          <div className="mb-2 text-center">
                            <button className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-dark md:px-10">
                              Add to Cart
                            </button>
                          </div>

                          <a
                            href="/#"
                            className="inline-block py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary hover:underline"
                          >
                            View Full Details
                          </a>
                        </div>
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

export default QuickView4;
