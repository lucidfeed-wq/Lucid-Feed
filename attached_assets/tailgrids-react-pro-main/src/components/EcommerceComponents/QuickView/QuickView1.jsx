import React, { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const QuickView = () => {
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

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
            className={`absolute top-0 left-0 min-h-screen w-full overflow-y-auto bg-body-color dark:bg-dark py-20 lg:py-[120px] ${
              !open && "hidden"
            } `}
          >
            <div className="container mx-auto">
              <div className="-mx-4 flex justify-center">
                <div className="w-full px-4 xl:w-11/12 2xl:w-10/12">
                  <div
                    ref={menuRef}
                    className="relative overflow-hidden rounded-lg bg-white dark:bg-dark-2 p-4 xs:p-[22px] shadow-quick-view dark:shadow-box-dark"
                  >
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute right-9 top-9 flex h-11 w-11 items-center justify-center rounded-full border border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 transition hover:border-primary hover:bg-primary hover:text-white"
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
                      <div className="lg:w-5/12 w-full">
                        <Swiper slidesPerView={1} loop={true} ref={sliderRef}>
                          <SwiperSlide>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-01/image-01.jpg"
                                alt="product"
                                className="w-full"
                              />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/quick-views/quick-view-01/image-02.jpg"
                                alt="product"
                                className="w-full"
                              />
                            </div>
                          </SwiperSlide>

                          <div className="z-50 absolute top-1/2 right-5 left-5 flex -translate-y-1/2 items-center justify-between">
                            <div
                              className="prev-arrow cursor-pointer"
                              onClick={handlePrev}
                            >
                              <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-dark text-white transition-all hover:bg-primary hover:text-white">
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-current"
                                >
                                  <path d="M13.5312 17.9063C13.3437 17.9063 13.1562 17.8438 13.0312 17.6875L5.96875 10.5C5.6875 10.2187 5.6875 9.78125 5.96875 9.5L13.0312 2.3125C13.3125 2.03125 13.75 2.03125 14.0313 2.3125C14.3125 2.59375 14.3125 3.03125 14.0313 3.3125L7.46875 10L14.0625 16.6875C14.3437 16.9688 14.3437 17.4063 14.0625 17.6875C13.875 17.8125 13.7187 17.9063 13.5312 17.9063Z" />
                                </svg>
                              </button>
                            </div>
                            <div
                              className="next-arrow cursor-pointer"
                              onClick={handleNext}
                            >
                              <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-dark text-white transition-all hover:bg-primary hover:text-white">
                                <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-current"
                                >
                                  <path d="M6.46875 17.9063C6.28125 17.9063 6.125 17.8438 5.96875 17.7188C5.6875 17.4375 5.6875 17 5.96875 16.7188L12.5312 10L5.96875 3.3125C5.6875 3.03125 5.6875 2.59375 5.96875 2.3125C6.25 2.03125 6.6875 2.03125 6.96875 2.3125L14.0313 9.5C14.3125 9.78125 14.3125 10.2187 14.0313 10.5L6.96875 17.6875C6.84375 17.8125 6.65625 17.9063 6.46875 17.9063Z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </Swiper>
                      </div>

                      <div className="w-full lg:w-7/12">
                        <div className="lg:ml-9 xl:ml-11 text-left">
                          <h3 className="mb-4 pr-5 text-xl font-bold text-dark dark:text-white lg:text-2xl xl:leading-[35px] xl:text-[28px]">
                            Men's Regular T-shirt
                          </h3>
                          <div className="mb-8 flex flex-wrap items-center">
                            <div className="mr-6 flex items-center">
                              <div className="flex items-center">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
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
                                  <g clipPath="url(#clip0_1109_50268)">
                                    <path
                                      d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                      fill="#22AD5C"
                                    />
                                    <path
                                      d="M12.6875 7.0938L8.96874 10.7188L7.28124 9.06255C6.99999 8.7813 6.56249 8.81255 6.28124 9.06255C5.99999 9.3438 6.03124 9.7813 6.28124 10.0626L8.28124 12.0001C8.46874 12.1876 8.71874 12.2813 8.96874 12.2813C9.21874 12.2813 9.46874 12.1876 9.65624 12.0001L13.6875 8.12505C13.9687 7.8438 13.9687 7.4063 13.6875 7.12505C13.4062 6.8438 12.9687 6.8438 12.6875 7.0938Z"
                                      fill="#22AD5C"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1109_50268">
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
                          <p className="text-xl font-semibold text-dark dark:text-white xl:leading-[40px] xl:text-[28px]">
                            $29.00
                          </p>
                          <p className="mb-6 text-base text-body-color dark:text-dark-6">
                            +12% VAT Added
                          </p>
                          <div className="mb-[22px]">
                            <h4 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
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
                                  className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-1 px-[15px] text-base font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
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
                                  className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-1 px-[15px] text-base font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
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
                                  className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-1 px-[15px] text-base font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                                >
                                  XL
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
                                  className="inline-block cursor-pointer rounded-sm border border-stroke dark:border-dark-3 py-1 px-[15px] text-base font-medium text-dark dark:text-white hover:border-primary hover:bg-primary hover:text-white"
                                >
                                  XXL
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-8">
                            <h4 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                              Choose Color
                            </h4>
                            <div className="flex items-center gap-3">
                              <div>
                                <input
                                  type="radio"
                                  name="color"
                                  id="black"
                                  className="sr-only"
                                />
                                <label
                                  htmlFor="black"
                                  className="box flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-sm bg-[#56768B] text-white"
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
                                        d="M18.9375 4.1875C18.6562 3.90625 18.2188 3.90625 17.9375 4.1875L7.3125 14.5L2.0625 9.34375C1.78125 9.0625 1.34375 9.09375 1.0625 9.34375C0.78125 9.625 0.8125 10.0625 1.0625 10.3437L6.59375 15.7187C6.78125 15.9062 7.03125 16 7.3125 16C7.59375 16 7.8125 15.9062 8.03125 15.7187L18.9375 5.125C19.2187 4.90625 19.2187 4.46875 18.9375 4.1875Z"
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
                                  className="box flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-sm bg-red-600 text-white"
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
                                        d="M18.9375 4.1875C18.6562 3.90625 18.2188 3.90625 17.9375 4.1875L7.3125 14.5L2.0625 9.34375C1.78125 9.0625 1.34375 9.09375 1.0625 9.34375C0.78125 9.625 0.8125 10.0625 1.0625 10.3437L6.59375 15.7187C6.78125 15.9062 7.03125 16 7.3125 16C7.59375 16 7.8125 15.9062 8.03125 15.7187L18.9375 5.125C19.2187 4.90625 19.2187 4.46875 18.9375 4.1875Z"
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
                                  className="box flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-sm bg-primary text-white"
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
                                        d="M18.9375 4.1875C18.6562 3.90625 18.2188 3.90625 17.9375 4.1875L7.3125 14.5L2.0625 9.34375C1.78125 9.0625 1.34375 9.09375 1.0625 9.34375C0.78125 9.625 0.8125 10.0625 1.0625 10.3437L6.59375 15.7187C6.78125 15.9062 7.03125 16 7.3125 16C7.59375 16 7.8125 15.9062 8.03125 15.7187L18.9375 5.125C19.2187 4.90625 19.2187 4.46875 18.9375 4.1875Z"
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
                                  id="green"
                                  className="sr-only"
                                />
                                <label
                                  htmlFor="green"
                                  className="box flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-sm bg-secondary text-white"
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
                                        d="M18.9375 4.1875C18.6562 3.90625 18.2188 3.90625 17.9375 4.1875L7.3125 14.5L2.0625 9.34375C1.78125 9.0625 1.34375 9.09375 1.0625 9.34375C0.78125 9.625 0.8125 10.0625 1.0625 10.3437L6.59375 15.7187C6.78125 15.9062 7.03125 16 7.3125 16C7.59375 16 7.8125 15.9062 8.03125 15.7187L18.9375 5.125C19.2187 4.90625 19.2187 4.46875 18.9375 4.1875Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            <div>
                              <button className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-7 text-center text-base font-medium text-white hover:bg-blue-dark">
                                Add to Cart
                              </button>
                            </div>
                            <div>
                              <a
                                href="/#"
                                className="inline-flex items-center justify-center rounded-md bg-dark py-3 px-7 text-center text-base font-medium text-white hover:bg-dark/90"
                              >
                                View Details
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
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickView;

const Star = () => {
  return (
    <span className="pr-1">
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1834_1869)">
          <path
            d="M16.7906 6.72187L11.7 5.93438L9.39375 1.09688C9.225 0.759375 8.775 0.759375 8.60625 1.09688L6.3 5.9625L1.2375 6.72187C0.871876 6.77812 0.731251 7.25625 1.0125 7.50938L4.69688 11.3063L3.825 16.6219C3.76875 16.9875 4.13438 17.2969 4.47188 17.0719L9.05625 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2312 16.6219L13.3594 11.3063L17.0437 7.50938C17.2687 7.25625 17.1562 6.77812 16.7906 6.72187Z"
            fill="#FFA645"
          />
        </g>
        <defs>
          <clipPath id="clip0_1834_1869">
            <rect width={18} height={18} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};
