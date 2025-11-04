import React, { useEffect, useRef, useState } from "react";

const ProductDetails3 = () => {
  const [open, setOpen] = useState(false);
  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);

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
      <section className="bg-white py-20 lg:py-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-9/12 lg:w-5/12">
              <div className="relative mb-8 border border-stroke dark:border-dark-3">
                <button
                  ref={menuTrigger}
                  onClick={() => setOpen(!open)}
                  className="absolute top-6 right-6 text-dark text-base font-medium"
                >
                  Click to Zoom
                </button>
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-01.jpg"
                  alt="products-details"
                  className={`${productOne ? "block" : "hidden"} w-full`}
                />
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-02.jpg"
                  alt="products-details"
                  className={`${productTwo ? "block" : "hidden"} w-full`}
                />
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-03.jpg"
                  alt="products-details"
                  className={`${productThree ? "block" : "hidden"} w-full`}
                />
              </div>
            </div>
            <div className="mb-12 w-full px-4 md:order-first md:mb-0 md:w-3/12 lg:w-2/12">
              <div className="-mx-2 flex flex-wrap items-center justify-between">
                <div className="w-1/4 px-2 md:w-full">
                  <button
                    onClick={() => {
                      setProductOne(true);
                      setProductTwo(false);
                      setProductThree(false);
                    }}
                    className={`${
                      productOne ? "border-primary" : "border-transparent"
                    } w-full overflow-hidden border-2 md:mb-7`}
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/thumbnail-01.jpg"
                      alt="thumbnail-01"
                      className="w-full"
                    />
                  </button>
                </div>
                <div className="w-1/4 px-2 md:w-full">
                  <button
                    onClick={() => {
                      setProductOne(false);
                      setProductTwo(true);
                      setProductThree(false);
                    }}
                    className={`${
                      productTwo ? "border-primary" : "border-transparent"
                    } w-full overflow-hidden border-2 md:mb-7`}
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/thumbnail-02.jpg"
                      alt="thumbnail-01"
                      className="w-full"
                    />
                  </button>
                </div>
                <div className="w-1/4 px-2 md:w-full">
                  <button
                    onClick={() => {
                      setProductOne(false);
                      setProductTwo(false);
                      setProductThree(true);
                    }}
                    className={`${
                      productThree ? "border-primary" : "border-transparent"
                    } w-full overflow-hidden border-2 md:mb-7`}
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/thumbnail-03.jpg"
                      alt="thumbnail-01"
                      className="w-full"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <h3 className="mb-4 text-xl font-semibold text-dark dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Leather Sneakers For Women
              </h3>
              <p className="mb-5 flex items-center text-base font-medium">
                <span className="pr-2 text-dark dark:text-white"> 5.0 </span>
                <span className="pr-2">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1032_24501)">
                      <path
                        d="M18.6562 7.46875L12.9999 6.59375L10.4375 1.21875C10.25 0.84375 9.74995 0.84375 9.56245 1.21875L6.99995 6.625L1.37495 7.46875C0.9687 7.53125 0.81245 8.0625 1.12495 8.34375L5.2187 12.5625L4.24995 18.4687C4.18745 18.875 4.5937 19.2188 4.9687 18.9688L10.0624 16.1875L15.1249 18.9688C15.4687 19.1563 15.9062 18.8437 15.8124 18.4687L14.8437 12.5625L18.9374 8.34375C19.1874 8.0625 19.0624 7.53125 18.6562 7.46875Z"
                        fill="#FFA645"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1032_24501">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="text-body-color dark:text-dark-6">
                  ( <span className="underline">14 reviews</span> )
                </span>
              </p>
              <p className="text-body-color dark:text-dark-6 mb-8 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non erat quam. Vestibulum aliquam.
              </p>
              <div className="flex flex-wrap justify-between">
                <div className="mr-5">
                  <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                    Color
                  </h4>
                  <div className="flex items-center">
                    <div className="mr-3 mb-4">
                      <input
                        type="radio"
                        name="color"
                        id="black"
                        className="sr-only"
                      />
                      <label
                        htmlFor="black"
                        className="box flex h-[34px] w-11 cursor-pointer items-center justify-center bg-[#212B36] text-white"
                      >
                        <span className="opacity-0">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.9374 4.1875C18.6562 3.90625 18.2187 3.90625 17.9374 4.1875L7.31243 14.5L2.06243 9.34375C1.78118 9.0625 1.34368 9.09375 1.06243 9.34375C0.781178 9.625 0.812428 10.0625 1.06243 10.3437L6.59368 15.7187C6.78118 15.9062 7.03118 16 7.31243 16C7.59368 16 7.81243 15.9062 8.03118 15.7187L18.9374 5.125C19.2187 4.90625 19.2187 4.46875 18.9374 4.1875Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </label>
                    </div>
                    <div className="mr-3 mb-4">
                      <input
                        type="radio"
                        name="color"
                        id="red"
                        className="sr-only"
                      />
                      <label
                        htmlFor="red"
                        className="box flex h-[34px] w-11 cursor-pointer items-center justify-center bg-[#C13130] text-white"
                      >
                        <span className="opacity-0">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.9374 4.1875C18.6562 3.90625 18.2187 3.90625 17.9374 4.1875L7.31243 14.5L2.06243 9.34375C1.78118 9.0625 1.34368 9.09375 1.06243 9.34375C0.781178 9.625 0.812428 10.0625 1.06243 10.3437L6.59368 15.7187C6.78118 15.9062 7.03118 16 7.31243 16C7.59368 16 7.81243 15.9062 8.03118 15.7187L18.9374 5.125C19.2187 4.90625 19.2187 4.46875 18.9374 4.1875Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </label>
                    </div>
                    <div className="mr-3 mb-4">
                      <input
                        type="radio"
                        name="color"
                        id="blue"
                        className="sr-only"
                      />
                      <label
                        htmlFor="blue"
                        className="box bg-primary flex h-[34px] w-11 cursor-pointer items-center justify-center text-white"
                      >
                        <span className="opacity-0">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.9374 4.1875C18.6562 3.90625 18.2187 3.90625 17.9374 4.1875L7.31243 14.5L2.06243 9.34375C1.78118 9.0625 1.34368 9.09375 1.06243 9.34375C0.781178 9.625 0.812428 10.0625 1.06243 10.3437L6.59368 15.7187C6.78118 15.9062 7.03118 16 7.31243 16C7.59368 16 7.81243 15.9062 8.03118 15.7187L18.9374 5.125C19.2187 4.90625 19.2187 4.46875 18.9374 4.1875Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mr-5">
                  <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                    Size
                  </h4>
                  <div className="flex items-center">
                    <div className="mr-[10px] mb-4">
                      <input
                        type="radio"
                        name="size"
                        id="32"
                        className="filter-size sr-only"
                      />
                      <label
                        htmlFor="32"
                        className="hover:border-primary hover:bg-primary inline-block cursor-pointer border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white py-1 px-3 hover:text-white"
                      >
                        32
                      </label>
                    </div>
                    <div className="mr-[10px] mb-4">
                      <input
                        type="radio"
                        name="size"
                        id="36"
                        className="filter-size sr-only"
                      />
                      <label
                        htmlFor="36"
                        className="hover:border-primary hover:bg-primary inline-block cursor-pointer border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white py-1 px-3 hover:text-white"
                      >
                        36
                      </label>
                    </div>
                    <div className="mr-[10px] mb-4">
                      <input
                        type="radio"
                        name="size"
                        id="40"
                        className="filter-size sr-only"
                      />
                      <label
                        htmlFor="40"
                        className="hover:border-primary hover:bg-primary inline-block cursor-pointer border border-stroke dark:border-dark-3 text-base font-medium text-dark dark:text-white py-1 px-3 hover:text-white"
                      >
                        40
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 pt-2">
                <button className="flex w-full items-center justify-center bg-dark-2 py-3 px-10 text-center text-base font-medium text-white hover:bg-dark-2/90">
                  Add to Beg
                </button>
              </div>

              <div className="mb-4 space-y-4">
                <TabItem
                  title="Shipping and Returns"
                  details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi pariatur hic fuga quidem labore repudiandae sequi, molestias provident quisquam!"
                />
                <TabItem
                  title="Details"
                  details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi pariatur hic fuga quidem labore repudiandae sequi, molestias provident quisquam!"
                />
              </div>

              <div className="flex flex-wrap items-center">
                <p className="text-body-color dark:text-dark-6 pr-4 text-base font-medium">
                  Share This Product:
                </p>
                <div className="flex items-center space-x-[18px]">
                  <a
                    href="/#"
                    className="text-body-color dark:text-dark-6 hover:text-primary inline-block"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M14.8127 8.0625H13.0627H12.4377V7.4375V5.5V4.875H13.0627H14.3752C14.719 4.875 15.0002 4.625 15.0002 4.25V0.9375C15.0002 0.59375 14.7502 0.3125 14.3752 0.3125H12.094C9.62524 0.3125 7.90649 2.0625 7.90649 4.65625V7.375V8H7.28149H5.15649C4.71899 8 4.31274 8.34375 4.31274 8.84375V11.0938C4.31274 11.5312 4.65649 11.9375 5.15649 11.9375H7.21899H7.84399V12.5625V18.8438C7.84399 19.2812 8.18774 19.6875 8.68774 19.6875H11.6252C11.8127 19.6875 11.969 19.5938 12.094 19.4688C12.219 19.3438 12.3127 19.125 12.3127 18.9375V12.5938V11.9688H12.969H14.3752C14.7815 11.9688 15.094 11.7188 15.1565 11.3438V11.3125V11.2812L15.594 9.125C15.6252 8.90625 15.594 8.65625 15.4065 8.40625C15.344 8.25 15.0627 8.09375 14.8127 8.0625Z" />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="text-body-color dark:text-dark-6 hover:text-primary inline-block"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M18.2942 5.37504C18.4057 5.24518 18.2604 5.07548 18.0956 5.13627C17.7277 5.27194 17.3916 5.36144 16.8944 5.41668C17.5059 5.07618 17.7903 4.5895 18.0217 3.99342C18.0774 3.84964 17.9092 3.71918 17.7642 3.78786C17.1757 4.06694 16.5406 4.27399 15.8727 4.39632C15.2127 3.74213 14.2717 3.33334 13.2309 3.33334C11.2322 3.33334 9.6115 4.84065 9.6115 6.69932C9.6115 6.96319 9.64383 7.22021 9.70483 7.4663C6.83179 7.33244 4.26992 6.10342 2.49006 4.21885C2.36807 4.08969 2.14671 4.10684 2.07076 4.26437C1.86812 4.68467 1.75516 5.15092 1.75516 5.64181C1.75516 6.80938 2.39392 7.83953 3.36494 8.44318C2.92956 8.43009 2.5132 8.34526 2.1295 8.20129C1.94268 8.13121 1.72853 8.25438 1.75363 8.44276C1.94632 9.88934 3.11751 11.0828 4.62924 11.3648C4.32566 11.442 4.00591 11.483 3.67513 11.483C3.59493 11.483 3.51542 11.4805 3.43664 11.4757C3.23616 11.4633 3.07323 11.6426 3.15918 11.8142C3.72627 12.946 4.95078 13.7362 6.37574 13.7608C5.13716 14.6638 3.57663 15.2018 1.88085 15.2018C1.67176 15.2018 1.58206 15.4706 1.76756 15.5618C3.20025 16.266 4.8318 16.6667 6.56539 16.6667C13.2228 16.6667 16.8628 11.5378 16.8628 7.08964C16.8628 6.94404 16.8592 6.79844 16.8526 6.6542C17.3929 6.29118 17.8787 5.8595 18.2942 5.37504Z" />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="text-body-color dark:text-dark-6 hover:text-primary inline-block"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M10.027 13.1185C11.7491 13.1185 13.1453 11.7224 13.1453 10.0002C13.1453 8.278 11.7491 6.8819 10.027 6.8819C8.30479 6.8819 6.90869 8.278 6.90869 10.0002C6.90869 11.7224 8.30479 13.1185 10.027 13.1185Z" />
                      <path d="M13.4141 1.66666H6.5861C3.87105 1.66666 1.66675 3.87096 1.66675 6.58601V13.3602C1.66675 16.129 3.87105 18.3333 6.5861 18.3333H13.3603C16.1291 18.3333 18.3334 16.129 18.3334 13.414V6.58601C18.3334 3.87096 16.1291 1.66666 13.4141 1.66666ZM10.027 14.086C7.74202 14.086 5.94094 12.2312 5.94094 9.99999C5.94094 7.76881 7.7689 5.91397 10.027 5.91397C12.2581 5.91397 14.0861 7.76881 14.0861 9.99999C14.0861 12.2312 12.285 14.086 10.027 14.086ZM15.6721 6.29031C15.4033 6.58601 15.0001 6.7473 14.5431 6.7473C14.1399 6.7473 13.7366 6.58601 13.4141 6.29031C13.1184 5.99461 12.9571 5.61827 12.9571 5.16128C12.9571 4.70429 13.1184 4.35483 13.4141 4.03225C13.7098 3.70967 14.0861 3.54838 14.5431 3.54838C14.9463 3.54838 15.3764 3.70967 15.6721 4.00537C15.9409 4.35483 16.1291 4.75805 16.1291 5.18816C16.1022 5.61827 15.9409 5.99461 15.6721 6.29031Z" />
                      <path d="M14.5707 4.51593C14.2212 4.51593 13.9255 4.81163 13.9255 5.16109C13.9255 5.51055 14.2212 5.80625 14.5707 5.80625C14.9202 5.80625 15.2159 5.51055 15.2159 5.16109C15.2159 4.81163 14.947 4.51593 14.5707 4.51593Z" />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="text-body-color dark:text-dark-6 hover:text-primary inline-block"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M17.0967 1.66666H2.8763C2.20426 1.66666 1.66663 2.20429 1.66663 2.87633V17.1236C1.66663 17.7688 2.20426 18.3333 2.8763 18.3333H17.043C17.715 18.3333 18.2527 17.7957 18.2527 17.1236V2.84945C18.3064 2.20429 17.7688 1.66666 17.0967 1.66666ZM6.58599 15.8333H4.13976V7.90322H6.58599V15.8333ZM5.34943 6.80107C4.54298 6.80107 3.92469 6.1559 3.92469 5.37633C3.92469 4.59676 4.56986 3.9516 5.34943 3.9516C6.129 3.9516 6.77416 4.59676 6.77416 5.37633C6.77416 6.1559 6.18277 6.80107 5.34943 6.80107ZM15.8602 15.8333H13.4139V11.9892C13.4139 11.0753 13.3871 9.86558 12.1236 9.86558C10.8333 9.86558 10.6451 10.8871 10.6451 11.9086V15.8333H8.19889V7.90322H10.5914V9.00537H10.6183C10.9677 8.3602 11.7473 7.71504 12.957 7.71504C15.457 7.71504 15.9139 9.32795 15.9139 11.5322V15.8333H15.8602Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black/50 py-10 ${
              !open && "hidden"
            } `}
          >
            <div
              ref={menuRef}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
              className="mx-auto inline-block w-4/5 sm:w-3/4 lg:w-1/2"
            >
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-01.jpg"
                alt="products-details"
                className={`w-full ${productOne ? "block" : "hidden"}`}
              />
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-02.jpg"
                alt="products-details"
                className={`w-full ${productTwo ? "block" : "hidden"}`}
              />
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products-details/details-03/big-image-03.jpg"
                alt="products-details"
                className={`w-full ${productThree ? "block" : "hidden"}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails3;

const TabItem = ({ title, details }) => {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <div className="border-b border-stroke dark:border-dark-3">
      <button
        onClick={() => {
          setTabOpen(!tabOpen);
        }}
        className="mb-4 flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-medium text-dark dark:text-white">{title}</span>
        <span className="text-xl font-medium text-dark dark:text-white">
          {tabOpen ? " - " : " + "}
        </span>
      </button>
      <div className={`${!tabOpen && "hidden"}`}>
        <p className="text-body-color dark:text-dark-6 mb-4 text-base">{details}</p>
      </div>
    </div>
  );
};
