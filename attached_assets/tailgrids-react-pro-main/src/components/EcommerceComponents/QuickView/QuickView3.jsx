import React, { useEffect, useRef, useState } from "react";

const QuickView3 = () => {
  const checkIcon = (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9375 4.1875C18.6562 3.90625 18.2187 3.90625 17.9375 4.1875L7.3125 14.5L2.0625 9.34375C1.78125 9.0625 1.34375 9.09375 1.0625 9.34375C0.781247 9.625 0.812497 10.0625 1.0625 10.3437L6.59375 15.7187C6.78125 15.9062 7.03125 16 7.3125 16C7.59375 16 7.8125 15.9062 8.03125 15.7187L18.9375 5.125C19.2187 4.90625 19.2187 4.46875 18.9375 4.1875Z"
        fill="white"
      />
    </svg>
  );

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
            <div className="mx-auto px-4 sm:container sm:px-0">
              <div className="-mx-4 flex justify-center">
                <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
                  <div
                    ref={menuRef}
                    className="relative overflow-hidden border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-5 sm:p-8"
                  >
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute right-7 top-7 flex items-center justify-center rounded-full text-body-color dark:text-dark-6 hover:text-primary"
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
                      <ImgBox
                        detailsLink="/#"
                        thumbnail1="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/thumbnail-01.jpg"
                        thumbnail2="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/thumbnail-02.jpg"
                        thumbnail3="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/thumbnail-03.jpg"
                        bigImg1="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/big-image-01.jpg"
                        bigImg2="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/thumbnail-02.jpg"
                        bigImg3="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-03/thumbnail-03.jpg"
                      />

                      <div className="w-full text-left lg:ml-10 lg:max-w-[390px]">
                        <h3 className="mb-4 text-xl font-bold text-dark dark:text-white xl:leading-[40px] xl:text-[28px]">
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
                              <g clipPath="url(#clip0_1109_50368)">
                                <path
                                  d="M18.6563 7.46875L13 6.59375L10.4375 1.21875C10.25 0.84375 9.75 0.84375 9.5625 1.21875L7 6.625L1.375 7.46875C0.968754 7.53125 0.812504 8.0625 1.125 8.34375L5.21875 12.5625L4.25 18.4687C4.1875 18.875 4.59375 19.2188 4.96875 18.9688L10.0625 16.1875L15.125 18.9688C15.4688 19.1563 15.9063 18.8437 15.8125 18.4687L14.8438 12.5625L18.9375 8.34375C19.1875 8.0625 19.0625 7.53125 18.6563 7.46875Z"
                                  fill="#FFA645"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1109_50368">
                                  <rect width={20} height={20} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <span className="text-body-color dark:text-dark-6">
                            ( <span className="underline">14 reviews</span> )
                          </span>
                        </p>
                        <p className="mb-8 text-base text-body-color dark:text-dark-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi non erat quam. Vestibulum aliquam.
                        </p>
                        <div className="flex flex-wrap justify-between gap-5">
                          <div>
                            <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                              Color
                            </h4>
                            <div className="flex items-center gap-[10px]">
                              <div>
                                <input
                                  type="radio"
                                  name="color"
                                  id="black"
                                  className="sr-only"
                                />
                                <label
                                  htmlFor="black"
                                  className="box flex h-[34px] w-11 cursor-pointer items-center justify-center bg-dark text-white"
                                >
                                  <span className="opacity-0">{checkIcon}</span>
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
                                  className="box flex h-[34px] w-11 cursor-pointer items-center justify-center bg-[#C13130] text-white"
                                >
                                  <span className="opacity-0">{checkIcon}</span>
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
                                  className="box flex h-[34px] w-11 cursor-pointer items-center justify-center bg-primary text-white"
                                >
                                  <span className="opacity-0">{checkIcon}</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="mb-3 text-xl font-semibold text-dark dark:text-white">
                              Size
                            </h4>
                            <div className="flex items-center gap-[10px]">
                              <div>
                                <input
                                  type="radio"
                                  name="size"
                                  id="32"
                                  className="filter-size sr-only"
                                />
                                <label
                                  htmlFor="32"
                                  className="inline-block cursor-pointer text-base font-medium text-dark dark:text-white border border-stroke dark:border-dark-3 py-1 px-3 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                  32
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="size"
                                  id="36"
                                  className="filter-size sr-only"
                                />
                                <label
                                  htmlFor="36"
                                  className="inline-block cursor-pointer text-base font-medium text-dark dark:text-white border border-stroke dark:border-dark-3 py-1 px-3 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                  36
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="size"
                                  id="40"
                                  className="filter-size sr-only"
                                />
                                <label
                                  htmlFor="40"
                                  className="inline-block cursor-pointer text-base font-medium text-dark dark:text-white border border-stroke dark:border-dark-3 py-1 px-3 hover:border-primary hover:bg-primary hover:text-white"
                                >
                                  40
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-9 pt-8">
                          <button className="mb-3 flex w-full items-center justify-center bg-dark py-[10px] px-10 text-center text-base font-medium text-white hover:bg-dark/90">
                            Add to Beg
                          </button>
                          <button className="flex w-full items-center justify-center border border-dark dark:border-white py-[9px] px-10 text-center text-base font-medium text-dark dark:text-white hover:bg-dark hover:text-white dark:hover:border-dark">
                            Add to Wishlist
                          </button>
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

export default QuickView3;

const ImgBox = ({
  detailsLink,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  bigImg1,
  bigImg2,
  bigImg3,
}) => {
  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);

  return (
    <div className="mb-12 w-full lg:mb-0">
      <div className="-mx-4 lg:flex">
        <div className="w-full px-4 lg:-ml-3">
          <div className="relative mb-8 border border-stroke dark:border-dark-3">
            <a
              href={detailsLink}
              className="absolute bottom-4 right-5 text-sm font-medium text-body-color hover:text-primary"
            >
              View Product Details
            </a>
            <img
              src={bigImg1}
              alt="products-details"
              className={`${productOne ? "block" : "hidden"} w-full`}
            />
            <img
              src={bigImg2}
              alt="products-details"
              className={`${productTwo ? "block" : "hidden"} w-full`}
            />
            <img
              src={bigImg3}
              alt="products-details"
              className={`${productThree ? "block" : "hidden"} w-full`}
            />
          </div>
        </div>
        <div className="mb-12 w-full px-4 md:order-first md:mb-0 lg:max-w-[136px]">
          <div className="-mx-2 flex flex-wrap items-center">
            <div className="w-1/4 px-2 lg:w-full">
              <button
                onClick={() => {
                  setProductOne(true);
                  setProductTwo(false);
                  setProductThree(false);
                }}
                className={`${
                  productOne ? "border-primary" : "border-stroke dark:border-dark-3"
                } w-full overflow-hidden border md:mb-5`}
              >
                <img src={thumbnail1} alt="thumbnail-01" className="w-full" />
              </button>
            </div>
            <div className="w-1/4 px-2 lg:w-full">
              <button
                onClick={() => {
                  setProductOne(false);
                  setProductTwo(true);
                  setProductThree(false);
                }}
                className={`${
                  productTwo ? "border-primary" : "border-stroke dark:border-dark-3"
                } w-full overflow-hidden border md:mb-5`}
              >
                <img src={thumbnail2} alt="thumbnail-01" className="w-full" />
              </button>
            </div>
            <div className="w-1/4 px-2 lg:w-full">
              <button
                onClick={() => {
                  setProductOne(false);
                  setProductTwo(false);
                  setProductThree(true);
                }}
                className={`${
                  productThree ? "border-primary" : "border-stroke dark:border-dark-3"
                } w-full overflow-hidden border md:mb-5`}
              >
                <img src={thumbnail3} alt="thumbnail-01" className="w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
