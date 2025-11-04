import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import productOne from "../assets/ecom-images/products/product-carousel-02/image-01.jpg";
import productTwo from "../assets/ecom-images/products/product-carousel-02/image-02.jpg";
import productThree from "../assets/ecom-images/products/product-carousel-02/image-03.jpg";
import productFour from "../assets/ecom-images/products/product-carousel-02/image-04.jpg";
import { Link } from "react-router-dom";
import { useCallback, useRef } from "react";

const productList = [
  {
    newItem: true,
    image: productOne,
    link: "#",
    title: "Stylish Women Bag",
    price: "£75.00",
    button: "Add to Cart",
  },
  {
    discount: true,
    image: productTwo,
    link: "#",
    title: "Stylish Watch For Man",
    price: "£75.00",
    priceBeforeDiscount: "£150.00",
    button: "Add to Cart",
  },
  {
    hotItem: true,
    image: productThree,
    link: "#",
    title: "Polo T-shirt For Man",
    price: "£25.00",
    button: "Add to Cart",
  },
  {
    image: productFour,
    link: "#",
    title: "Luxury Wallet For Male",
    price: "£95.00",
    button: "Add to Cart",
  },
  {
    newItem: true,
    image: productOne,
    link: "#",
    title: "Stylish Women Bag",
    price: "£75.00",
    button: "Add to Cart",
  },
  {
    image: productTwo,
    link: "#",
    title: "Stylish Watch For Man",
    price: "£75.00",
    priceBeforeDiscount: "£150.00",
    button: "Add to Cart",
  },
  {
    hotItem: true,
    image: productThree,
    link: "#",
    title: "Polo T-shirt For Man",
    price: "£25.00",
    button: "Add to Cart",
  },
  {
    image: productFour,
    link: "#",
    title: "Luxury Wallet For Male",
    price: "£95.00",
    button: "Add to Cart",
  },
];

const ProductCarousel = () => {
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
        <div className="container mx-auto overflow-hidden py-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[65px] max-w-[510px] text-center">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  You may also like
                </h2>
                <span className="mx-auto mb-[18px] block h-[3px] w-[100px] bg-primary"></span>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <Swiper
            className="overflow-visible!"
            loop={true}
            spaceBetween={30}
            ref={sliderRef}
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
          >
            {productList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
                  <div className="relative">
                    <img src={item.image} alt="product" className="w-full" />
                    {item.discount && (
                      <span className="absolute left-6 top-4 inline-flex items-center justify-center rounded-sm bg-primary px-[10px] py-[3px] text-sm font-medium text-white">
                        -50%
                      </span>
                    )}
                    {item.newItem && (
                      <span className="absolute left-6 top-4 inline-flex items-center justify-center rounded-sm bg-secondary px-[10px] py-[3px] text-sm font-medium text-white">
                        New
                      </span>
                    )}
                    {item.hotItem && (
                      <span className="absolute left-6 top-4 inline-flex items-center justify-center rounded-sm bg-red-600 px-[10px] py-[3px] text-sm font-medium text-white">
                        Hot
                      </span>
                    )}
                  </div>
                  <div className="px-6 pb-8 pt-6 text-center">
                    <h3>
                      <Link
                        to={item.link}
                        className="mb-[5px] block text-lg font-semibold text-dark hover:text-primary dark:text-white xs:text-xl"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-lg font-medium text-dark dark:text-white">
                      {item.priceBeforeDiscount && (
                        <span>
                          <span className="text-base text-secondary-color line-through dark:text-dark-6">
                            {item.price}
                            {"  "}
                          </span>
                          {item.priceBeforeDiscount}
                        </span>
                      )}
                      {!item.priceBeforeDiscount && item.price}
                    </p>
                    <div className="flex items-center justify-center gap-1 pb-5 pt-[18px]">
                      {[...Array(4).keys()].map((index) => (
                        <span key={index}>
                          <svg
                            width="16"
                            height="16"
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
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      ))}

                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1818_1070)">
                            <path
                              d="M4.02502 15.55C3.80002 15.55 3.57502 15.475 3.40002 15.35C3.05002 15.1 2.85002 14.65 2.92502 14.225L3.57502 10.2L0.77502 7.32501C0.47502 7.02501 0.37502 6.57501 0.50002 6.15001C0.62502 5.75001 0.97502 5.45001 1.37502 5.40001L5.25002 4.77501L7.00002 1.10001C7.20002 0.700012 7.57502 0.450012 8.00002 0.450012C8.42502 0.450012 8.82502 0.700012 9.00002 1.10001L10.75 4.75001L14.6 5.35001C15 5.42501 15.35 5.70001 15.475 6.10001C15.625 6.52501 15.5 6.97501 15.2 7.27501L12.425 10.175L13.075 14.225C13.15 14.675 12.975 15.1 12.6 15.35C12.25 15.6 11.825 15.625 11.45 15.425L8.00002 13.55L4.55002 15.425C4.40002 15.525 4.20002 15.55 4.02502 15.55ZM1.57502 6.50001C1.57502 6.50001 1.57502 6.52501 1.57502 6.55001L4.50002 9.55001C4.67502 9.72501 4.75002 10 4.72502 10.25L4.05002 14.425C4.05002 14.425 4.05002 14.425 4.05002 14.45L7.65002 12.5C7.87502 12.375 8.15002 12.375 8.40002 12.5L12 14.45C12 14.45 12 14.45 12 14.425L11.325 10.225C11.275 9.97501 11.375 9.72501 11.55 9.52501L14.475 6.52501C14.5 6.50001 14.475 6.47501 14.475 6.47501L10.45 5.85001C10.2 5.80001 9.97502 5.65001 9.87502 5.40001L8.00002 1.60001L6.20002 5.42501C6.10002 5.65001 5.87502 5.82501 5.62502 5.87501L1.57502 6.50001Z"
                              fill="#FFA645"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1818_1070">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="text-center">
                      <button className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-dark">
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="absolute -bottom-[52px] left-0 right-0 z-50 flex items-center justify-center space-x-4">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-body-color bg-white text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18.25 9.3125H4.90625L10.2187 3.90625C10.5 3.625 10.5 3.1875 10.2187 2.90625C9.9375 2.625 9.5 2.625 9.21875 2.90625L2.75 9.46875C2.46875 9.75 2.46875 10.1875 2.75 10.4688L9.21875 17.0312C9.34375 17.1563 9.53125 17.25 9.71875 17.25C9.90625 17.25 10.0625 17.1875 10.2187 17.0625C10.5 16.7812 10.5 16.3438 10.2187 16.0625L4.9375 10.7187H18.25C18.625 10.7187 18.9375 10.4062 18.9375 10.0312C18.9375 9.625 18.625 9.3125 18.25 9.3125Z" />
                  </svg>
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-body-color bg-white text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:bg-dark-2 dark:text-dark-6">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M18.25 9.5L11.7812 2.9375C11.5 2.65625 11.0625 2.65625 10.7812 2.9375C10.5 3.21875 10.5 3.65625 10.7812 3.9375L16.0312 9.28125H2.75C2.375 9.28125 2.0625 9.59375 2.0625 9.96875C2.0625 10.3437 2.375 10.6875 2.75 10.6875H16.0937L10.7812 16.0938C10.5 16.375 10.5 16.8125 10.7812 17.0938C10.9062 17.2188 11.0937 17.2813 11.2812 17.2813C11.4687 17.2813 11.6562 17.2188 11.7812 17.0625L18.25 10.5C18.5312 10.2187 18.5312 9.78125 18.25 9.5Z" />
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

export default ProductCarousel;
