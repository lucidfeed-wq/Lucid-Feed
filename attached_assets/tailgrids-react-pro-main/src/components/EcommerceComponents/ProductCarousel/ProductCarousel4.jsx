import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel4 = () => {
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
      <section className="bg-gray-2 dark:bg-dark">
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
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-01.jpg"
                link="/#"
                color="Grey"
                name="Minimal Gray pencil"
                price="$150.00"
                discountedPrice="$75.00"
              >
                <InputGroup id="1" color="[#c7c7c7]" />
                <InputGroup id="2" color="[#DAB840]" />
                <InputGroup id="3" color="secondary" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-02.jpg"
                link="/#"
                color="White"
                name="Minimal Coffee Cup"
                price="$75.00"
              >
                <InputGroup id="4" color="dark" />
                <InputGroup id="5" color="[#c7c7c7]" />
                <InputGroup id="6" color="red-600" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                newItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-03.jpg"
                link="/#"
                color="Space Grey"
                name="Macbook Pro M1 2020"
                price="$1200.00"
              >
                <InputGroup id="7" color="dark" />
                <InputGroup id="8" color="[#c7c7c7]" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-04.jpg"
                link="/#"
                color="Black"
                name="Apple Watch Series 7"
                price="$25.00"
                rating="5.00 Rating"
              >
                <InputGroup id="9" color="dark" />
                <InputGroup id="10" color="[#54B6ED]" />
                <InputGroup id="11" color="secondary" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-01.jpg"
                link="/#"
                color="Grey"
                name="Minimal Gray pencil"
                price="$150.00"
                discountedPrice="$75.00"
              >
                <InputGroup id="10" color="[#c7c7c7]" />
                <InputGroup id="20" color="[#DAB840]" />
                <InputGroup id="30" color="secondary" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-02.jpg"
                link="/#"
                color="White"
                name="Minimal Coffee Cup"
                price="$75.00"
              >
                <InputGroup id="40" color="dark" />
                <InputGroup id="50" color="[#c7c7c7]" />
                <InputGroup id="60" color="red-600" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                newItem
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-03.jpg"
                link="/#"
                color="Space Grey"
                name="Macbook Pro M1 2020"
                price="$1200.00"
              >
                <InputGroup id="70" color="dark" />
                <InputGroup id="80" color="[#c7c7c7]" />
              </ProductCard>
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/products/product-carousel-04/image-04.jpg"
                link="/#"
                color="Black"
                name="Apple Watch Series 7"
                price="$25.00"
                rating="5.00 Rating"
              >
                <InputGroup id="90" color="dark" />
                <InputGroup id="100" color="[#54B6ED]" />
                <InputGroup id="110" color="secondary" />
              </ProductCard>
            </SwiperSlide>

            <div className="z-50 -bottom-[65px] absolute left-0 right-0 flex items-center justify-center space-x-3">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 shadow-product hover:bg-primary hover:text-white">
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
                <button className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-white dark:bg-dark-2 text-body-color dark:text-dark-6 shadow-product hover:bg-primary hover:text-white">
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

export default ProductCarousel4;

const ProductCard = ({
  image,
  color,
  discountedPrice,
  link,
  name,
  price,
  children,
}) => {
  return (
    <div className="rounded-[5px] border-[.5px] border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-[10px] shadow-1 dark:shadow-box-dark">
      <a href={link} className="block">
        <img src={image} alt="product" className="w-full rounded-[5px]" />
      </a>
      <div className="pt-5 pb-6 text-center">
        <span className="text-sm font-medium text-body-color dark:text-dark-6 block mb-1">{color}</span>
        <h3 className="mb-2">
          <a
            href={link}
            className="block text-base font-semibold text-dark dark:text-white hover:text-primary"
          >
            {name}
          </a>
        </h3>
        <p className="mb-5 text-lg font-medium text-dark dark:text-white">
          {!discountedPrice && price}
          {discountedPrice && (
            <span>
              {discountedPrice}
              <span className="text-body-color dark:text-dark-6 pl-2 line-through">{price}</span>
            </span>
          )}
        </p>
        <div className="flex items-center justify-center space-x-2">
          {children}
        </div>
      </div>
    </div>
  );
};
const InputGroup = ({ id, color }) => {
  return (
    <div className="relative">
      <input
        type="radio"
        name="productOneColor"
        id={id}
        className="color sr-only"
      />
      <label
        htmlFor={id}
        className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border-2 border-${color}`}
      >
        <span
          className={`absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-${color}`}
        ></span>
        <span className="hidden border-[#c7c7c7] bg-[#c7c7c7]"></span>
        <span className="hidden border-[#DAB840] bg-[#DAB840]"></span>
        <span className="hidden border-[#54B6ED] bg-[#54B6ED]"></span>
      </label>
    </div>
  );
};
