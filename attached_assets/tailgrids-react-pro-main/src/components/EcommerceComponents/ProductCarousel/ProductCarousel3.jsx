import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel3 = () => {
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
      <section className="dark:bg-dark">
        <div className="container mx-auto overflow-hidden pt-20 pb-20 lg:pt-[120px] lg:pb-[90px]">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Most Popular Products
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:leading-[1.2] md:text-[40px]">
              Best Selling Items
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

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
                slidesPerView: 4,
              },
            }}
            loop={true}
            spaceBetween={30}
            ref={sliderRef}
            className="overflow-visible!"
          >
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-01.jpg"
                link="/#"
                name="Smart Watch For Man"
                price="$150.00"
                discountedPrice="$75.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                hotItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-02.jpg"
                link="/#"
                name="Stylish Backpack"
                price="$189.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                newItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-03.jpg"
                link="/#"
                name="Luxury Wallet For Male"
                price="$95.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-04.jpg"
                link="/#"
                name="Polo T-shirt For Man"
                price="$25.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-01.jpg"
                link="/#"
                name="Smart Watch For Man"
                price="$150.00"
                discountedPrice="$75.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                hotItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-02.jpg"
                link="/#"
                name="Stylish Backpack"
                price="$189.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                newItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-03.jpg"
                link="/#"
                name="Luxury Wallet For Male"
                price="$95.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-03/image-04.jpg"
                link="/#"
                name="Polo T-shirt For Man"
                price="$25.00"
                rating="5.00 Rating"
              />
            </SwiperSlide>
            <div className="z-50 -bottom-[52px] absolute left-0 right-0 flex items-center justify-center space-x-3">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="flex h-11 w-11 items-center justify-center border border-body-color dark:border-dark-3 bg-white dark:bg-dark-2 text-body-color dark:text-white hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18 9.3125H4.65625L9.96875 3.90625C10.25 3.625 10.25 3.1875 9.96875 2.90625C9.6875 2.625 9.25 2.625 8.96875 2.90625L2.5 9.46875C2.21875 9.75 2.21875 10.1875 2.5 10.4688L8.96875 17.0312C9.09375 17.1562 9.28125 17.25 9.46875 17.25C9.65625 17.25 9.8125 17.1875 9.96875 17.0625C10.25 16.7812 10.25 16.3438 9.96875 16.0625L4.6875 10.7188H18C18.375 10.7188 18.6875 10.4062 18.6875 10.0312C18.6875 9.625 18.375 9.3125 18 9.3125Z" />
                  </svg>
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="flex h-11 w-11 items-center justify-center border border-body-color dark:border-dark-3 bg-white dark:bg-dark-2 text-body-color dark:text-white hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18.5 9.5L12.0312 2.9375C11.75 2.65625 11.3125 2.65625 11.0312 2.9375C10.75 3.21875 10.75 3.65625 11.0312 3.9375L16.2812 9.28125H3C2.625 9.28125 2.3125 9.59375 2.3125 9.96875C2.3125 10.3437 2.625 10.6875 3 10.6875H16.3437L11.0312 16.0938C10.75 16.375 10.75 16.8125 11.0312 17.0938C11.1562 17.2188 11.3437 17.2813 11.5312 17.2813C11.7187 17.2813 11.9062 17.2188 12.0312 17.0625L18.5 10.5C18.7812 10.2187 18.7812 9.78125 18.5 9.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel3;

const ProductCard = ({
  image,
  newItem,
  hotItem,
  discountedPrice,
  link,
  name,
  price,
  rating,
}) => {
  return (
    <div className="group mb-10">
      <div className="relative mb-5 overflow-hidden">
        <img src={image} alt="product" className="w-full" />
        {discountedPrice && (
          <span className="absolute left-4 top-4 inline-flex items-center justify-center bg-primary px-3 py-[3px] text-sm font-medium text-white">
            -50%
          </span>
        )}
        {newItem && (
          <span className="absolute left-4 top-4 inline-flex items-center justify-center bg-secondary px-3 py-[3px] text-sm font-medium text-white">
            New
          </span>
        )}
        {hotItem && (
          <span className="absolute left-4 top-4 inline-flex items-center justify-center bg-red-600 px-3 py-[3px] text-sm font-medium text-white">
            Hot
          </span>
        )}
        <div className="absolute left-0 top-0 h-full w-full space-y-[10px] p-5 text-right opacity-0 transition-all group-hover:opacity-100">
          <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-dark-2 text-dark dark:text-white text-center drop-shadow-three hover:bg-primary hover:text-white">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M10.4343 13.4437C9.3093 13.4437 8.4093 14.3437 8.4093 15.4687C8.4093 16.5937 9.3093 17.4937 10.4343 17.4937C11.5593 17.4937 12.4593 16.5937 12.4593 15.4687C12.4593 14.3719 11.5312 13.4437 10.4343 13.4437ZM10.4343 16.2562C10.0124 16.2562 9.67493 15.9187 9.67493 15.4968C9.67493 15.075 10.0124 14.7375 10.4343 14.7375C10.8562 14.7375 11.1937 15.075 11.1937 15.4968C11.1937 15.8906 10.8281 16.2562 10.4343 16.2562Z" />
              <path d="M5.09055 13.4437C3.96555 13.4437 3.06555 14.3437 3.06555 15.4687C3.06555 16.5937 3.96555 17.4937 5.09055 17.4937C6.21555 17.4937 7.11555 16.5937 7.11555 15.4687C7.11555 14.3719 6.18743 13.4437 5.09055 13.4437ZM5.09055 16.2562C4.66868 16.2562 4.33118 15.9187 4.33118 15.4968C4.33118 15.075 4.66868 14.7375 5.09055 14.7375C5.51243 14.7375 5.84993 15.075 5.84993 15.4968C5.84993 15.8906 5.51243 16.2562 5.09055 16.2562Z" />
              <path d="M16.3687 0.506226H14.85C14.175 0.506226 13.5843 1.01248 13.5 1.68748L13.05 4.92185H1.9406C1.65935 4.92185 1.3781 5.06248 1.18122 5.28748C1.01247 5.51248 0.928096 5.82185 1.01247 6.1031C1.01247 6.13123 1.01247 6.13123 1.01247 6.15935L2.75622 11.4187C2.86872 11.8125 3.23435 12.0937 3.65622 12.0937H11.4187C12.4593 12.0937 13.3593 11.3062 13.5 10.2656L14.6812 1.85623C14.6812 1.79998 14.7375 1.77185 14.7937 1.77185H16.3125C16.65 1.77185 16.9593 1.4906 16.9593 1.12498C16.9593 0.759351 16.7062 0.506226 16.3687 0.506226ZM12.2906 10.0687C12.2343 10.4906 11.8687 10.8 11.4468 10.8H3.90935L2.3906 6.18748H12.8531L12.2906 10.0687Z" />
            </svg>
          </button>
          <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-dark-2 text-dark dark:text-white text-center drop-shadow-three hover:bg-primary hover:text-white">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M9.00002 6.66565C7.70627 6.66565 6.66565 7.70627 6.66565 9.00002C6.66565 10.2938 7.70627 11.3344 9.00002 11.3344C10.2938 11.3344 11.3344 10.2938 11.3344 9.00002C11.3344 7.70627 10.2938 6.66565 9.00002 6.66565ZM9.00002 10.0688C8.4094 10.0688 7.93127 9.59065 7.93127 9.00002C7.93127 8.4094 8.4094 7.93127 9.00002 7.93127C9.59065 7.93127 10.0688 8.4094 10.0688 9.00002C10.0688 9.59065 9.59065 10.0688 9.00002 10.0688Z" />
              <path d="M17.2125 8.01567C15.6094 5.62505 13.3875 3.2063 9 3.2063C4.6125 3.2063 2.39062 5.62505 0.7875 8.01567C0.39375 8.6063 0.39375 9.3938 0.7875 9.98442C2.39062 12.3469 4.6125 14.7938 9 14.7938C13.3875 14.7938 15.6094 12.3469 17.2125 9.98442C17.6063 9.36567 17.6063 8.6063 17.2125 8.01567ZM16.1719 9.2813C14.1187 12.2907 12.0656 13.5282 9 13.5282C5.93438 13.5282 3.88125 12.2907 1.82812 9.2813C1.71563 9.11255 1.71563 8.88755 1.82812 8.7188C3.88125 5.70942 5.93438 4.47192 9 4.47192C12.0656 4.47192 14.1187 5.70942 16.1719 8.7188C16.2563 8.88755 16.2563 9.11255 16.1719 9.2813Z" />
            </svg>
          </button>
          <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-dark-2 text-dark dark:text-white text-center drop-shadow-three hover:bg-primary hover:text-white">
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M8.99998 16.5938C8.63435 16.5938 8.26873 16.4531 7.98748 16.2C7.3406 15.6375 6.74998 15.1313 6.2156 14.6813C4.61248 13.3031 3.20623 12.15 2.22185 10.9688C1.06873 9.5625 0.506226 8.24062 0.506226 6.75C0.506226 5.31562 1.01248 3.96563 1.91248 2.98125C2.8406 1.96875 4.13435 1.40625 5.51248 1.40625C6.5531 1.40625 7.53748 1.74375 8.38123 2.39062C8.60623 2.55938 8.8031 2.72812 8.99998 2.95312C9.19685 2.75625 9.39373 2.55938 9.61873 2.39062C10.4625 1.74375 11.4187 1.40625 12.4875 1.40625C13.8937 1.40625 15.1594 1.96875 16.0875 2.98125C17.0156 3.96563 17.4937 5.31562 17.4937 6.75C17.4937 8.24062 16.9594 9.5625 15.7781 10.9688C14.7937 12.15 13.3875 13.3313 11.7844 14.6813C11.25 15.1313 10.6312 15.6656 9.98435 16.2C9.73123 16.4531 9.3656 16.5938 8.99998 16.5938ZM5.51248 2.67188C4.47185 2.67188 3.5156 3.09375 2.81248 3.825C2.13748 4.58438 1.77185 5.625 1.77185 6.75C1.77185 7.90312 2.22185 9 3.1781 10.1531C4.10623 11.25 5.45623 12.4031 7.0031 13.725C7.53748 14.175 8.15623 14.7094 8.8031 15.2719C8.9156 15.3562 9.08435 15.3562 9.19685 15.2719C9.84373 14.7094 10.4625 14.2031 10.9969 13.725C12.5719 12.375 13.9219 11.25 14.8219 10.1531C15.7781 9 16.2281 7.90312 16.2281 6.75C16.2281 5.625 15.8344 4.58437 15.1594 3.85312C14.4562 3.09375 13.5 2.67188 12.4875 2.67188C11.7281 2.67188 11.025 2.925 10.4062 3.375C10.1531 3.57188 9.9281 3.79688 9.7031 4.05C9.53435 4.24687 9.28123 4.3875 8.99998 4.3875C8.71873 4.3875 8.49373 4.275 8.29685 4.05C8.07185 3.79688 7.84685 3.57188 7.59373 3.375C7.0031 2.925 6.29998 2.67188 5.51248 2.67188Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="text-left">
        <h3 className="mb-1">
          <a
            href={link}
            className="text-lg font-semibold text-dark dark:text-white hover:text-primary xs:text-xl"
          >
            {name}
          </a>
        </h3>
        <p className="mb-4 text-lg font-medium text-dark dark:text-white">
          {!discountedPrice && price}
          {discountedPrice && (
            <span>
              {discountedPrice}
              <span className="pl-2 text-body-color dark:text-dark-6 line-through">
                {price}
              </span>
            </span>
          )}
        </p>
        <div className="flex gap-1 items-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <span className="pl-[6px] text-sm font-medium text-body-color dark:text-dark-6">
            {rating}
          </span>
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
        <g clipPath="url(#clip0_1818_932)">
          <path
            d="M14.925 5.975L10.4 5.275L8.34996 0.975C8.19996 0.675 7.79996 0.675 7.64996 0.975L5.59996 5.3L1.09996 5.975C0.77496 6.025 0.64996 6.45 0.89996 6.675L4.17496 10.05L3.39996 14.775C3.34996 15.1 3.67496 15.375 3.97496 15.175L8.04996 12.95L12.1 15.175C12.375 15.325 12.725 15.075 12.65 14.775L11.875 10.05L15.15 6.675C15.35 6.45 15.25 6.025 14.925 5.975Z"
            fill="#FFA645"
          />
        </g>
        <defs>
          <clipPath id="clip0_1818_932">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};
