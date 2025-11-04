import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ECommerceHero3 = () => {
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
    <section className="relative bg-white py-20 dark:bg-dark lg:py-[120px]">
      <Swiper slidesPerView={1} loop={true} spaceBetween={30} ref={sliderRef}>
        <SwiperSlide>
          <SingleSlide
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-03/image-01.jpg"
            link="/#"
            subtitle="Start From $299"
            title="Ultra HD Quality Bluetooth Sound Speakers"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus."
            button="Shop Now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-03/image-01.jpg"
            link="/#"
            subtitle="Start From $299"
            title="Ultra HD Quality Bluetooth Sound Speakers"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus."
            button="Shop Now"
          />
        </SwiperSlide>

        <div>
          <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
            <button className="absolute left-4 top-1/2 z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-body-color bg-transparent text-body-color transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-dark-6 dark:text-dark-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M14.8845 19.6969C14.6782 19.6969 14.472 19.6281 14.3345 19.4562L6.56571 11.55C6.25634 11.2406 6.25634 10.7594 6.56571 10.45L14.3345 2.54374C14.6438 2.23436 15.1251 2.23436 15.4345 2.54374C15.7438 2.85311 15.7438 3.33436 15.4345 3.64374L8.21571 11L15.4688 18.3562C15.7782 18.6656 15.7782 19.1469 15.4688 19.4562C15.2626 19.5937 15.0907 19.6969 14.8845 19.6969Z" />
              </svg>
            </button>
          </div>
          <div className="next-arrow cursor-pointer" onClick={handleNext}>
            <button className="absolute left-auto right-4 top-1/2 z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-body-color bg-transparent text-body-color transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-dark-6 dark:text-dark-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M7.11571 19.6969C6.90946 19.6969 6.73759 19.6281 6.56571 19.4906C6.25634 19.1812 6.25634 18.7 6.56571 18.3906L13.7845 11L6.56571 3.64374C6.25634 3.33436 6.25634 2.85311 6.56571 2.54374C6.87509 2.23436 7.35634 2.23436 7.66571 2.54374L15.4345 10.45C15.7438 10.7594 15.7438 11.2406 15.4345 11.55L7.66571 19.4562C7.52821 19.5937 7.32196 19.6969 7.11571 19.6969Z" />
              </svg>
            </button>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default ECommerceHero3;

const SingleSlide = ({ img, subtitle, title, details, link, button }) => {
  return (
    <div className="relative z-10 mx-auto h-full min-w-[100vw] overflow-hidden bg-gray dark:bg-dark-2">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mt-20 max-w-[570px] lg:mt-0">
              <span className="mb-[14px] block text-lg font-semibold text-primary">
                {subtitle}
              </span>
              <h2 className="mb-[18px] text-2xl font-bold leading-[1.25]! text-dark dark:text-white xl:text-4xl">
                {title}
              </h2>
              <p className="mb-9 text-base text-body-color dark:text-dark-6">
                {details}
              </p>
              <a
                href={link}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
              >
                {button}
              </a>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="py-20 text-center">
              <img src={img} alt="product" className="mx-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 -z-10">
        <svg
          width={620}
          height={560}
          viewBox="0 0 620 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 560L256.5 0H620V560H0Z"
            fill="url(#paint0_linear_2066_370)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2066_370"
              x1={100.001}
              y1={280}
              x2={535.002}
              y2={280}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity={0.08} />
              <stop offset={1} stopColor="#3056D3" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0 -z-10">
        <svg
          width={536}
          height={560}
          viewBox="0 0 536 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.998535 560L257.499 0H535.999V560H0.998535Z"
            fill="url(#paint0_linear_2066_368)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2066_368"
              x1={101}
              y1={280}
              x2={536}
              y2={280}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity={0.08} />
              <stop offset={1} stopColor="#3056D3" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
