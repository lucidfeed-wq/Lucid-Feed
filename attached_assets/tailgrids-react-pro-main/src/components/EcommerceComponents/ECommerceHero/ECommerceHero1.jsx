import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ECommerceHero = () => {
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
    <section className="relative bg-white dark:bg-dark">
      <Swiper slidesPerView={1} loop={true} spaceBetween={30} ref={sliderRef}>
        <SwiperSlide>
          <SingleSlide
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-01/image-01.jpg"
            link="/#"
            subtitle="Trending Products"
            title="New Arrival From Mans Collections"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper."
            button="Shop Now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-01/image-01.jpg"
            link="/#"
            subtitle="Trending Products"
            title="New Arrival From Mans Collections"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper."
            button="Shop Now"
          />
        </SwiperSlide>

        <div className="absolute bottom-12 right-12 z-50 flex items-center justify-end space-x-4">
          <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
            <button className="flex h-[42px] w-[42px] items-center justify-center border border-body-color text-body-color transition-all hover:border-primary hover:text-primary dark:border-dark-6 dark:text-dark-6">
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.30951 9.00278L9.7025 1.75393L9.71157 1.74417C10.0883 1.33897 10.0904 0.706394 9.65025 0.300611C9.44618 0.112467 9.14292 -7.49282e-08 8.8652 -9.92075e-08C8.51706 -1.29642e-07 8.25215 0.142032 8.05041 0.328028L8.04343 0.334467L0.54447 7.71467L0.54358 7.71554C-0.187229 8.4299 -0.171766 9.58059 0.533431 10.3072L0.538425 10.3124L8.04382 17.6715L8.05041 17.6775C8.44903 18.0451 9.16205 18.1551 9.65025 17.705C10.0468 17.3394 10.1669 16.687 9.68767 16.2371L2.30951 9.00278Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="next-arrow cursor-pointer" onClick={handleNext}>
            <button className="flex h-[42px] w-[42px] items-center justify-center border border-body-color text-body-color transition-all hover:border-primary hover:text-primary dark:border-dark-6 dark:text-dark-6">
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                className="fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69049 8.99722L0.297501 16.2461L0.288433 16.2558C-0.0882772 16.661 -0.0903769 17.2936 0.34975 17.6994C0.553818 17.8875 0.857078 18 1.1348 18C1.48294 18 1.74785 17.858 1.94959 17.672L1.95658 17.6655L9.45553 10.2853L9.45642 10.2845C10.1872 9.5701 10.1718 8.41941 9.46657 7.69275L9.46158 7.68761L1.95618 0.32853L1.94959 0.322458C1.55097 -0.0450574 0.837946 -0.15506 0.34975 0.295041C-0.0467678 0.660617 -0.166916 1.31301 0.312333 1.7629L7.69049 8.99722Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ECommerceHero;

const SingleSlide = ({ img, subtitle, title, details, link, button }) => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-5/12 lg:w-1/2">
        <div className="mb-12 md:mb-0">
          <img src={img} alt="product" className="w-full" />
        </div>
      </div>
      <div className="w-full md:w-7/12 lg:w-1/2">
        <div className="mx-8 mb-20 max-w-[520px] md:mb-0 2xl:ml-20">
          <span className="mb-3 block text-lg font-semibold text-primary lg:text-[28px] lg:leading-[40px]">
            {subtitle}
          </span>
          <h1 className="mb-[18px] text-3xl font-bold leading-[1.2]! text-dark dark:text-white lg:text-4xl xl:text-[48px]">
            {title}
          </h1>
          <p className="mb-10 text-base text-body-color dark:text-dark-6">
            {details}
          </p>
          <a
            href={link}
            className="inline-flex items-center justify-center border border-dark px-7 py-3 text-center text-base font-medium text-dark transition hover:bg-dark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark"
          >
            {button}
          </a>
        </div>
      </div>
    </div>
  );
};
