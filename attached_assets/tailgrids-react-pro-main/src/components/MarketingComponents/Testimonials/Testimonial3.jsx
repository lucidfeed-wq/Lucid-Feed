import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

const Testimonial3 = () => {
  return (
    <>
      <style>
        {`
        .swiper-pagination {
          bottom: -60px !important;
        }
        .swiper-pagination-bullet {
          margin: 0 16px !important;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #d0d4e1;
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }
        .swiper-pagination-bullet:hover {
          background-color: #13c296;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background-color: #13c296;
        }
        `}
      </style>
      <section className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <span className="mb-2 block text-lg font-semibold text-primary">
              What People Says
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Client Testimonials
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            className="py-8!"
          >
            <SwiperSlide>
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-03/image-02.png"
                name="Healther Bennit"
                position="Founder - Dailousm"
                details="Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-03/image-02.png"
                name="Healther Bennit"
                position="Founder - Dailousm"
                details="Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial3;

const SingleTestimonial = ({ image, details, name, position }) => {
  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
        <div className="relative items-center rounded-lg bg-[#F8F9FF] px-10 py-10 dark:bg-dark-2 md:flex lg:px-[70px]">
          <div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
            <img src={image} alt="image" className="w-full rounded-full" />
            <div className="absolute left-0 top-0 z-[-1]">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-6.88525"
                  y="18.9728"
                  width="36.731"
                  height="209.602"
                  rx="18.3655"
                  transform="rotate(-45 -6.88525 18.9728)"
                  fill="#13C296"
                />
              </svg>
            </div>
            <div className="absolute -left-2 top-5 z-[-2]">
              <svg
                width="152"
                height="152"
                viewBox="0 0 152 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-5"
                  y="12.5433"
                  width="24.9386"
                  height="204.237"
                  rx="12.4693"
                  transform="rotate(-45 -5 12.5433)"
                  fill="#3056D3"
                />
              </svg>
            </div>
          </div>
          <div className="w-full pl-0 md:pl-14">
            <p className="mb-6 text-base text-body-color dark:text-dark-6">
              {details}
            </p>
            <h4 className="mb-1 text-lg font-semibold text-primary">{name}</h4>
            <h6 className="text-sm font-normal italic text-body-color dark:text-dark-6">
              {position}
            </h6>
          </div>
          <div>
            <span className="absolute -bottom-5 -left-5 z-[-1]">
              <DotShape />
            </span>
            <span className="absolute -right-4 -top-7">
              <svg
                width="58"
                height="60"
                viewBox="0 0 58 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 59.2671C23 44.8581 23 33.1774 23 33.1774C39.0163 33.1774 52 44.8581 52 59.2671C52 59.2671 52 59.2671 23 59.2671Z"
                  fill="#13C296"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57 49.7009C57 22.8041 57 1 57 1C26.0721 1 1 22.8041 1 49.7009C1 49.7009 1 49.7009 57 49.7009Z"
                  stroke="#3056D3"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DotShape = () => {
  return (
    <>
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.66343"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 1.66343 74.5221)"
          fill="#13C296"
        ></circle>
        <circle
          cx="1.66343"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 1.66343 30.94)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 16.3016 74.5221)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 16.3016 30.94)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 30.9398 74.5221)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 30.9398 30.94)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 45.578 74.5221)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 45.578 30.94)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 60.2162 74.5216)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 74.6634 74.5216)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 60.2162 30.9398)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 74.6634 30.9398)"
          fill="#13C296"
        ></circle>
        <circle
          cx="1.66343"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 1.66343 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="1.66343"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 1.66343 16.3017)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 16.3016 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="16.3018"
          r="1.66343"
          transform="rotate(-90 16.3016 16.3018)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 30.9398 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="16.3018"
          r="1.66343"
          transform="rotate(-90 30.9398 16.3018)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 45.578 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="16.3018"
          r="1.66343"
          transform="rotate(-90 45.578 16.3018)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 60.2162 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 74.6634 59.8839)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 60.2162 16.3017)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 74.6634 16.3017)"
          fill="#13C296"
        ></circle>
        <circle
          cx="1.66343"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 1.66343 45.2455)"
          fill="#13C296"
        ></circle>
        <circle
          cx="1.66343"
          cy="1.66347"
          r="1.66343"
          transform="rotate(-90 1.66343 1.66347)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 16.3016 45.2455)"
          fill="#13C296"
        ></circle>
        <circle
          cx="16.3016"
          cy="1.66347"
          r="1.66343"
          transform="rotate(-90 16.3016 1.66347)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 30.9398 45.2455)"
          fill="#13C296"
        ></circle>
        <circle
          cx="30.9398"
          cy="1.66347"
          r="1.66343"
          transform="rotate(-90 30.9398 1.66347)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 45.578 45.2455)"
          fill="#13C296"
        ></circle>
        <circle
          cx="45.578"
          cy="1.66347"
          r="1.66343"
          transform="rotate(-90 45.578 1.66347)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="45.2457"
          r="1.66343"
          transform="rotate(-90 60.2162 45.2457)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="45.2457"
          r="1.66343"
          transform="rotate(-90 74.6634 45.2457)"
          fill="#13C296"
        ></circle>
        <circle
          cx="60.2162"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 60.2162 1.66371)"
          fill="#13C296"
        ></circle>
        <circle
          cx="74.6634"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 74.6634 1.66371)"
          fill="#13C296"
        ></circle>
      </svg>
    </>
  );
};
