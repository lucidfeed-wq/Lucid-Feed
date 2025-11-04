import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio3 = () => {
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
      <section className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px] dark:bg-dark">
        <div className="container mx-auto">
          <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide>
              <PortfolioCard
                subtitle="Template"
                title="Play – Landing Page Template for Startup and SaaS"
                details="Play is free startup, saas, business, app, and software landing page page that is based on Tailwind. It comes with high-quality design and everything you need"
                date="06, September 2021"
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-03/image-01.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                subtitle="Template"
                title="Play – Landing Page Template for Startup and SaaS"
                details="Play is free startup, saas, business, app, and software landing page page that is based on Tailwind. It comes with high-quality design and everything you need"
                date="06, September 2021"
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-03/image-01.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                subtitle="Template"
                title="Play – Landing Page Template for Startup and SaaS"
                details="Play is free startup, saas, business, app, and software landing page page that is based on Tailwind. It comes with high-quality design and everything you need"
                date="06, September 2021"
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-03/image-01.svg"
              />
            </SwiperSlide>
            <div className="absolute left-0 right-0 bottom-4 z-50 flex items-center gap-2 sm:gap-5 justify-center xl:right-auto xl:left-[70px] xl:bottom-8 xl:justify-start">
              <div className="prev-arrow" onClick={handlePrev}>
                <button className="text-body-color dark:text-dark-6 hover:text-primary flex items-center justify-center text-sm font-medium transition-all">
                  <span className="mr-3">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M19.25 10.2437H4.57186L10.4156 4.29687C10.725 3.9875 10.725 3.50625 10.4156 3.19687C10.1062 2.8875 9.62499 2.8875 9.31561 3.19687L2.19999 10.4156C1.89061 10.725 1.89061 11.2063 2.19999 11.5156L9.31561 18.7344C9.45311 18.8719 9.65936 18.975 9.86561 18.975C10.0719 18.975 10.2437 18.9062 10.4156 18.7687C10.725 18.4594 10.725 17.9781 10.4156 17.6688L4.60624 11.7906H19.25C19.6625 11.7906 20.0062 11.4469 20.0062 11.0344C20.0062 10.5875 19.6625 10.2437 19.25 10.2437Z"
                        fill=""
                      />
                    </svg>
                  </span>
                  Previous Project
                </button>
              </div>

              <span className="block w-px h-7 bg-stroke dark:bg-dark-3"></span>

              <div className="next-arrow" onClick={handleNext}>
                <button className="text-body-color dark:text-dark-6 hover:text-primary flex items-center justify-center text-sm font-medium transition-all">
                  Next Project
                  <span className="ml-3">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        d="M19.8 10.45L12.6844 3.23125C12.375 2.92188 11.8937 2.92188 11.5844 3.23125C11.275 3.54063 11.275 4.02188 11.5844 4.33125L17.3594 10.2094H2.74999C2.33749 10.2094 1.99374 10.5531 1.99374 10.9656C1.99374 11.3781 2.33749 11.7563 2.74999 11.7563H17.4281L11.5844 17.7031C11.275 18.0125 11.275 18.4938 11.5844 18.8031C11.7219 18.9406 11.9281 19.0094 12.1344 19.0094C12.3406 19.0094 12.5469 18.9406 12.6844 18.7688L19.8 11.55C20.1094 11.2406 20.1094 10.7594 19.8 10.45Z"
                        fill=""
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Portfolio3;

const PortfolioCard = ({ subtitle, title, details, date, image }) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="border-stroke dark:border-dark-3 items-center justify-between overflow-hidden border lg:flex">
          <div className="w-full py-10 px-6 sm:px-8 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
            <span className="bg-primary mb-5 inline-block py-[6px] px-4 text-sm font-medium text-white">
              {subtitle}
            </span>
            <h2 className="text-dark dark:text-white mb-6 text-3xl leading-[1.29] font-bold sm:text-[35px]">
              {title}
            </h2>
            <p className="text-body-color dark:text-dark-6 mb-8 xl:mb-[76px] text-base">
              {details}
            </p>
            <span className="text-dark dark:text-white text-sm font-medium">{date}</span>
          </div>
          <div className="text-center">
            <div className="relative z-10 inline-block">
              <img src={image} alt="image" className="mx-auto lg:ml-auto" />
              <div className="absolute -left-6 bottom-3 z-[-1]">
                <svg
                  width="62"
                  height="134"
                  viewBox="0 0 62 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.66667"
                    cy="1.66667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="16.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="30.9999"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="45.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="60.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="88.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="117.667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.66667"
                    cy="74.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle cx="1.66667" cy="103" r="1.66667" fill="#3056D3" />
                  <circle cx="1.66667" cy="132" r="1.66667" fill="#3056D3" />
                  <circle
                    cx="16.3334"
                    cy="1.66667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3334"
                    cy="16.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3334"
                    cy="30.9999"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3334"
                    cy="45.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3332"
                    cy="60.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3332"
                    cy="88.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3332"
                    cy="117.667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="16.3332"
                    cy="74.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle cx="16.3332" cy="103" r="1.66667" fill="#3056D3" />
                  <circle cx="16.3332" cy="132" r="1.66667" fill="#3056D3" />
                  <circle
                    cx="30.9999"
                    cy="1.66667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="30.9999"
                    cy="16.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="30.9999"
                    cy="30.9999"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="30.9999"
                    cy="45.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="31.0002"
                    cy="60.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="31.0002"
                    cy="88.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="31.0002"
                    cy="117.667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="31.0002"
                    cy="74.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle cx="31.0002" cy="103" r="1.66667" fill="#3056D3" />
                  <circle cx="31.0002" cy="132" r="1.66667" fill="#3056D3" />
                  <circle
                    cx="45.6667"
                    cy="1.66667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="16.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="30.9999"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="45.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="60.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="88.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="117.667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="45.6667"
                    cy="74.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle cx="45.6667" cy="103" r="1.66667" fill="#3056D3" />
                  <circle cx="45.6667" cy="132" r="1.66667" fill="#3056D3" />
                  <circle
                    cx="60.3334"
                    cy="1.66667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3334"
                    cy="16.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3334"
                    cy="30.9999"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3334"
                    cy="45.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3332"
                    cy="60.3334"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3332"
                    cy="88.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3332"
                    cy="117.667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle
                    cx="60.3332"
                    cy="74.6667"
                    r="1.66667"
                    fill="#3056D3"
                  />
                  <circle cx="60.3332" cy="103" r="1.66667" fill="#3056D3" />
                  <circle cx="60.3332" cy="132" r="1.66667" fill="#3056D3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
