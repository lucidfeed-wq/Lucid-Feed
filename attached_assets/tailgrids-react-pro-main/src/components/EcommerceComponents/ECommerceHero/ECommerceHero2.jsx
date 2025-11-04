import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ECommerceHero2 = () => {
  return (
    <>
      <style>
        {`
            .swiper-pagination {
              bottom: 55px !important;
            }
            .swiper-pagination-bullet {
              margin: 0 5px !important;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #637381;
              opacity: 1;
              transition: all 0.3s ease-in-out;
            }
            
            .swiper-pagination-bullet.swiper-pagination-bullet-active {
              width: 20px;
              border-radius: 8px;
              background-color: #3056d3;
            }
          `}
      </style>
      <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <HeroItem
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-02/image-01.jpg"
                    link="/#"
                    subtitle="Trending Products"
                    title="New Arrival From Mans Collections"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper."
                    button="Shop Now"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <HeroItem
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-02/image-01.jpg"
                    link="/#"
                    subtitle="Trending Products"
                    title="New Arrival From Mans Collections"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna, scelerisque vitae augue et, cursus placerat lorem. In nisi lacus, eleifend tincidunt quam et, consequat semper."
                    button="Shop Now"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <HeroItem
                    img="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-02/image-01.jpg"
                    link="/#"
                    subtitle="Making Beautiful Your Home"
                    title="Build Your Home With Beautiful Furniture"
                    button="Shop Now"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative mb-8 h-[370px] md:h-[460px]">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/ecommerce/headers/header-02/image-02.jpg"
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute left-0 top-0 flex h-full w-full p-6 sm:p-9">
                  <div className="max-w-[320px]">
                    <span className="mb-[5px] block text-lg font-medium text-white">
                      Limited Time Offer
                    </span>
                    <h3>
                      <a
                        href="/#"
                        className="mb-[22px] block text-2xl font-bold text-white hover:text-primary lg:text-3xl"
                      >
                        Official Chair
                      </a>
                    </h3>
                    <a
                      href="/#"
                      className="inline-block rounded-md bg-dark px-[25px] py-[10px] text-base font-medium text-white hover:bg-dark/90"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ECommerceHero2;

const HeroItem = ({ img, link, title, subtitle, button }) => {
  return (
    <div className="relative">
      <div className="relative mb-8 h-[370px] md:h-[460px]">
        <img
          src={img}
          alt="product"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center px-8 md:px-12">
          <div className="max-w-[320px]">
            <span className="mb-3 block text-lg font-medium text-dark">
              {subtitle}
            </span>
            <h3>
              <a
                href={link}
                className="mb-7 block text-2xl font-bold text-dark hover:text-primary sm:text-3xl"
              >
                {title}
              </a>
            </h3>
            <a
              href={link}
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[13px] text-center text-base font-medium text-white hover:bg-blue-dark"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
