import imageOne from "../assets/images/testimonials/testimonial-02/image-01.jpg";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import ShapeFour from "./Shapes/ShapeFour.jsx";

const testimonialItems = [
  {
    image: imageOne,
    name: "Melison Tridio",
    position: "Founder and CEO of Mahameru",
    details:
      "I am using TailGrids UI on my personal site, I really love these unique custom blocks which is really nice. I can easily use this on my projects",
  },
  {
    image: imageOne,
    name: "Melison Tridio",
    position: "Founder and CEO of Mahameru",
    details:
      "I am using TailGrids UI on my personal site, I really love these unique custom blocks which is really nice. I can easily use this on my projects",
  },
];

const Testimonial = () => {
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
      <section className="pt-20 dark:bg-dark lg:pt-[120px]">
        <div className="container mx-auto overflow-hidden pb-20 lg:pb-[120px]">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12">
              <div className="mb-8 max-w-[510px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  {" "}
                  What People Says{" "}
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Client Testimonials
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            ref={sliderRef}
            className="overflow-visible!"
          >
            {testimonialItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative z-10 flex justify-center">
                  <div className="relative w-full pb-16 md:w-11/12 md:pb-0 lg:w-10/12 xl:w-8/12">
                    <div className="relative z-10 items-center overflow-hidden bg-white shadow-testimonial dark:bg-dark-2 md:flex">
                      <div className="w-full max-w-[150px] px-6 pt-10 sm:px-10 md:max-w-[270px] md:px-0 md:pt-0">
                        <img src={item.image} alt="image" className="w-full" />
                      </div>
                      <div className="w-full px-6 py-10 sm:px-10 md:py-14">
                        <div className="icon mb-5">
                          <svg
                            width="39"
                            height="22"
                            viewBox="0 0 39 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.8262 0.00109288C4.7637 -0.0614071 1.0762 2.56359 0.201201 6.12609C-0.298799 8.31359 0.138701 10.5011 1.4512 12.2511C2.8262 14.1261 4.9512 15.3136 7.3262 15.6261L9.5137 21.0011C9.7637 21.5636 10.3262 21.9386 10.9512 21.9386C11.5762 21.9386 12.1387 21.5636 12.3887 21.0011C12.7637 20.0636 13.2012 19.0636 13.6387 18.1261C14.7012 15.7511 15.7637 13.3136 16.5762 10.8136C17.4512 8.18859 17.0762 5.37609 15.5762 3.25109C14.0762 1.18859 11.7012 0.0635929 8.8262 0.00109288ZM14.5137 10.1886C13.7012 12.5636 12.6387 15.0011 11.6387 17.3136C11.4512 17.8136 11.2012 18.2511 11.0137 18.7511L8.8887 13.6261L8.2012 13.5636C6.2012 13.4386 4.3262 12.4386 3.2637 11.0011C2.3262 9.75109 2.0137 8.18859 2.3887 6.68859C3.0137 4.12609 5.7012 2.25109 8.7637 2.25109H8.8262C10.9512 2.25109 12.7012 3.12609 13.8262 4.62609C14.8887 6.12609 15.1387 8.25109 14.5137 10.1886Z"
                              fill="#3056D3"
                            />
                            <path
                              d="M37.0137 3.3136C35.5137 1.1886 33.1387 0.00109863 30.2637 0.00109863C30.2012 0.00109863 30.2012 0.00109863 30.1387 0.00109863C26.1387 0.00109863 22.5137 2.6261 21.6387 6.1261C21.1387 8.3136 21.5762 10.5011 22.8887 12.3136C24.2637 14.1886 26.3887 15.3761 28.7637 15.6886L30.9512 21.0636C31.2012 21.6261 31.7637 22.0011 32.3887 22.0011C33.0137 22.0011 33.5762 21.6261 33.8262 21.0636C34.2012 20.1261 34.6387 19.1261 35.0762 18.1886C36.1387 15.8136 37.2012 13.3761 38.0137 10.8761C38.8887 8.3136 38.5137 5.4386 37.0137 3.3136ZM35.9512 10.1886C35.1387 12.5636 34.0762 15.0011 33.0762 17.3136C32.8887 17.8136 32.6387 18.2511 32.4512 18.7511L30.3262 13.6261L29.6387 13.5636C27.6387 13.4386 25.7637 12.4386 24.7012 11.0011C23.7637 9.7511 23.4512 8.1886 23.8262 6.6261C24.4512 4.0636 27.1387 2.1886 30.2012 2.1886H30.2637C32.3887 2.1886 34.1387 3.0636 35.2637 4.5636C36.3262 6.1261 36.5762 8.2511 35.9512 10.1886Z"
                              fill="#3056D3"
                            />
                          </svg>
                        </div>
                        <h4 className="mb-1 text-xl font-semibold text-dark dark:text-white">
                          {item.name}
                        </h4>
                        <h6 className="mb-4 text-sm font-normal text-body-color dark:text-dark-6">
                          {item.position}
                        </h6>
                        <p className="text-sm font-medium text-body-color dark:text-dark-6">
                          “{item.details}”
                        </p>
                      </div>
                      <span className="absolute bottom-0 right-0 z-[-1]">
                        <ShapeFour />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button
              onClick={handlePrev}
              className="absolute left-0 top-full z-10 flex h-10 w-10 items-center justify-center bg-white text-dark shadow-input transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white md:-left-12 md:top-1/2 lg:left-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  d="M17.5 9.3125H4.15625L9.46875 3.90625C9.75 3.625 9.75 3.1875 9.46875 2.90625C9.1875 2.625 8.75 2.625 8.46875 2.90625L2 9.46875C1.71875 9.75 1.71875 10.1875 2 10.4688L8.46875 17.0312C8.59375 17.1562 8.78125 17.25 8.96875 17.25C9.15625 17.25 9.3125 17.1875 9.46875 17.0625C9.75 16.7812 9.75 16.3438 9.46875 16.0625L4.1875 10.7188H17.5C17.875 10.7188 18.1875 10.4062 18.1875 10.0312C18.1875 9.625 17.875 9.3125 17.5 9.3125Z"
                  fill=""
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute left-auto right-0 top-full z-10 flex h-10 w-10 items-center justify-center bg-white text-dark shadow-input transition-all hover:bg-primary hover:text-white dark:bg-dark-2 dark:text-white md:-right-12 md:top-1/2 lg:right-0"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                  fill=""
                />
              </svg>
            </button>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
