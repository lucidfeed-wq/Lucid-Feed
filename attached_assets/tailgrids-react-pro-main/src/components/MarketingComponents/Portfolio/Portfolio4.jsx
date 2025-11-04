import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio4 = () => {
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
      <section className="py-20 lg:py-[120px] dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color dark:text-dark-6 text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full pb-12 md:w-11/12 md:pb-0 lg:w-10/12 xl:w-8/12">
              <Swiper slidesPerView={1} ref={sliderRef}>
                <SwiperSlide>
                  <PortfolioCard
                    subtitle="Web Design"
                    title="Best Web Design & Development in 2023"
                    details="There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form. If you are going to use a passage of Lorem Ipsum, you need to be sure."
                    link="/#"
                    button="View Details"
                    image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-04/image-01.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PortfolioCard
                    subtitle="Web Design"
                    title="Best Web Design & Development in 2023"
                    details="There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form. If you are going to use a passage of Lorem Ipsum, you need to be sure."
                    link="/#"
                    button="View Details"
                    image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-04/image-01.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PortfolioCard
                    subtitle="Web Design"
                    title="Best Web Design & Development in 2023"
                    details="There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form. If you are going to use a passage of Lorem Ipsum, you need to be sure."
                    link="/#"
                    button="View Details"
                    image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-04/image-01.jpg"
                  />
                </SwiperSlide>
              </Swiper>
              <div>
                <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                  <button className="text-body-color dark:text-dark-6 drop-shadow-portfolio dark:drop-shadow-none absolute left-[30%] top-full flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white dark:bg-dark-2 transition-all hover:bg-primary hover:text-white md:-left-12 md:top-1/2 lg:-left-16">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M14.8844 19.6969C14.6781 19.6969 14.4719 19.6281 14.3344 19.4562L6.56562 11.55C6.25624 11.2406 6.25624 10.7594 6.56562 10.45L14.3344 2.54374C14.6437 2.23436 15.125 2.23436 15.4344 2.54374C15.7437 2.85311 15.7437 3.33436 15.4344 3.64374L8.21562 11L15.4687 18.3562C15.7781 18.6656 15.7781 19.1469 15.4687 19.4562C15.2625 19.5937 15.0906 19.6969 14.8844 19.6969Z"
                        fill=""
                      />
                    </svg>                    
                  </button>
                </div>
                <div className="next-arrow cursor-pointer" onClick={handleNext}>
                  <button className="text-body-color dark:text-dark-6 drop-shadow-portfolio dark:drop-shadow-none absolute top-full left-auto right-[30%] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white dark:bg-dark-2 transition-all hover:bg-primary hover:text-white md:top-1/2 md:-right-12 lg:-right-16">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M7.11562 19.6969C6.90937 19.6969 6.73749 19.6281 6.56562 19.4906C6.25624 19.1812 6.25624 18.7 6.56562 18.3906L13.7844 11L6.56562 3.64374C6.25624 3.33436 6.25624 2.85311 6.56562 2.54374C6.87499 2.23436 7.35624 2.23436 7.66562 2.54374L15.4344 10.45C15.7437 10.7594 15.7437 11.2406 15.4344 11.55L7.66562 19.4562C7.52812 19.5937 7.32187 19.6969 7.11562 19.6969Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio4;

const PortfolioCard = ({ subtitle, title, details, link, button, image }) => {
  return (
    <div className="relative w-full items-stretch overflow-hidden rounded-md md:flex">
      <div className="w-full">
        <div className="bg-primary xs:px-8 py-12 px-5 md:px-11 xl:py-20">
          <span className="mb-2 inline-block text-xs font-medium text-white">
            {subtitle}
          </span>
          <h3 className="mb-5 text-[22px] leading-[26px] font-bold text-white">{title}</h3>
          <p className="mb-[50px] text-sm text-white">{details}</p>
          <a
            href={link}
            className="inline-flex items-center text-sm font-medium text-white transition hover:opacity-70"
          >
            {button}
            <span className="pl-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3437 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2813 11.0312 17.2813C11.2187 17.2813 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="relative w-full">
        <div className="h-[250px] w-full md:h-full">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute left-1/2 bottom-0 hidden -translate-x-1/2 md:block">
        <svg
          width="40"
          height="86"
          viewBox="0 0 40 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.06816" cy="1.06816" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="10.4681" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="19.868" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="29.2676" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="38.6675" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="56.8262" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="75.4122" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="47.8538" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="66.0125" r="1.06816" fill="white" />
          <circle cx="1.06816" cy="84.5984" r="1.06816" fill="white" />
          <circle cx="10.4681" cy="1.06816" r="1.06816" fill="white" />
          <circle cx="10.4681" cy="10.4681" r="1.06816" fill="white" />
          <circle cx="10.4681" cy="19.868" r="1.06816" fill="white" />
          <circle cx="10.4681" cy="29.2676" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="38.6675" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="56.8262" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="75.4122" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="47.8538" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="66.0125" r="1.06816" fill="white" />
          <circle cx="10.4678" cy="84.5984" r="1.06816" fill="white" />
          <circle cx="19.868" cy="1.06816" r="1.06816" fill="white" />
          <circle cx="19.868" cy="10.4681" r="1.06816" fill="white" />
          <circle cx="19.868" cy="19.868" r="1.06816" fill="white" />
          <circle cx="19.868" cy="29.2676" r="1.06816" fill="white" />
          <circle cx="19.868" cy="38.6675" r="1.06816" fill="white" />
          <circle cx="19.868" cy="56.8262" r="1.06816" fill="white" />
          <circle cx="19.868" cy="75.4122" r="1.06816" fill="white" />
          <circle cx="19.868" cy="47.8538" r="1.06816" fill="white" />
          <circle cx="19.868" cy="66.0125" r="1.06816" fill="white" />
          <circle cx="19.868" cy="84.5984" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="1.06816" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="10.4681" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="19.868" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="29.2676" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="38.6675" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="56.8262" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="75.4122" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="47.8538" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="66.0125" r="1.06816" fill="white" />
          <circle cx="29.2676" cy="84.5984" r="1.06816" fill="white" />
          <circle cx="38.6675" cy="1.06816" r="1.06816" fill="white" />
          <circle cx="38.6675" cy="10.4681" r="1.06816" fill="white" />
          <circle cx="38.6675" cy="19.868" r="1.06816" fill="white" />
          <circle cx="38.6675" cy="29.2676" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="38.6675" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="56.8262" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="75.4122" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="47.8538" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="66.0125" r="1.06816" fill="white" />
          <circle cx="38.6673" cy="84.5984" r="1.06816" fill="white" />
        </svg>
      </div>
    </div>
  );
};
