import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel5 = () => {
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
      <section className="bg-white dark:bg-dark">
        <div className="container mx-auto overflow-hidden pt-20 pb-20 lg:pt-[120px] lg:pb-[90px]">
          <Swiper
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2.2,
              },
              1024: {
                width: 1024,
                slidesPerView: 2.2,
              },
              1280: {
                width: 1280,
                slidesPerView: 3,
              },
            }}
            loop={true}
            spaceBetween={30}
            ref={sliderRef}
            className="overflow-visible!"
          >
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-01.jpg"
                link="/#"
                name="Apple Watch Series 7"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$299"
                reviews="55"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-02.jpg"
                link="/#"
                name="iPhone 13 Pro Max"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$999"
                reviews="32"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-03.jpg"
                link="/#"
                name="Macbook Pro 13” M1 2020"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$1299"
                reviews="15"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-01.jpg"
                link="/#"
                name="Apple Watch Series 7"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$299"
                reviews="55"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-02.jpg"
                link="/#"
                name="iPhone 13 Pro Max"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$999"
                reviews="32"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-05/image-03.jpg"
                link="/#"
                name="Macbook Pro 13” M1 2020"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit enim luctus et lorem."
                price="$1299"
                reviews="15"
              />
            </SwiperSlide>

            <div className="z-50 -bottom-[65px] absolute left-0 right-0 flex items-center justify-center">
              <div className="inline-flex space-x-3 rounded-full border border-stroke dark:border-dark-3 p-[6px] dark:bg-dark-2">
                <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                  <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M12.25 6.51875H2.90935L6.6281 2.73438C6.82498 2.5375 6.82498 2.23125 6.6281 2.03437C6.43123 1.8375 6.12498 1.8375 5.9281 2.03437L1.39998 6.62813C1.2031 6.825 1.2031 7.13125 1.39998 7.32813L5.9281 11.9219C6.0156 12.0094 6.14685 12.075 6.2781 12.075C6.40935 12.075 6.51873 12.0313 6.6281 11.9438C6.82498 11.7469 6.82498 11.4406 6.6281 11.2438L2.93123 7.50313H12.25C12.5125 7.50313 12.7312 7.28438 12.7312 7.02188C12.7312 6.7375 12.5125 6.51875 12.25 6.51875Z" />
                    </svg>
                  </button>
                </div>
                <div className="next-arrow cursor-pointer" onClick={handleNext}>
                  <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M12.6008 6.6501L8.07266 2.05635C7.87578 1.85947 7.56953 1.85947 7.37266 2.05635C7.17578 2.25322 7.17578 2.55947 7.37266 2.75635L11.0477 6.49697H1.75078C1.48828 6.49697 1.26953 6.71572 1.26953 6.97822C1.26953 7.24072 1.48828 7.48135 1.75078 7.48135H11.0914L7.37266 11.2657C7.17578 11.4626 7.17578 11.7688 7.37266 11.9657C7.46016 12.0532 7.59141 12.097 7.72266 12.097C7.85391 12.097 7.98516 12.0532 8.07266 11.9438L12.6008 7.3501C12.7977 7.15322 12.7977 6.84697 12.6008 6.6501Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel5;

const ProductCard = ({ image, details, link, name, price, reviews }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white dark:bg-dark-2 shadow-1 dark:shadow-box-dark">
      <div>
        <img src={image} alt="product" className="w-full" />
      </div>
      <div className="p-6">
        <h3>
          <a
            href={link}
            className="mb-3 block text-lg font-semibold text-dark dark:text-white hover:text-primary xs:text-xl lg:text-lg xl:text-xl"
          >
            {name}
          </a>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{details}</p>
      </div>
      <div className="flex justify-between border-t border-stroke dark:border-dark-3">
        <div className="flex gap-1 items-center py-4 px-3 xs:px-4 lg:px-3 xl:px-6">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <span className="pl-1 text-sm font-medium text-body-color dark:text-dark-6">
            ({reviews}) Reviews
          </span>
        </div>
        <div className="border-l border-stroke dark:border-dark-3 py-4 px-3 xs:px-4 lg:px-3 xl:px-6">
          <span className="text-base font-semibold text-dark dark:text-white">{price}</span>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <span>
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1818_1215)">
          <path
            d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
            fill="#FFA645"
          />
        </g>
        <defs>
          <clipPath id="clip0_1818_1215">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};
