import imageTwo from "../assets/images/testimonials/testimonial-03/image-02.png";
import imageOne from "../assets/images/testimonials/testimonial-03/image-01.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ShapeFive from "./Shapes/ShapeFive.jsx";
import ShapeSix from "./Shapes/ShapeSix.jsx";
import ShapeNine from "./Shapes/ShapeNine.jsx";
import ShapeTen from "./Shapes/ShapeTen.jsx";

const testimonialItems = [
  {
    image: imageTwo,
    name: "Healther Bennit",
    position: "Founder - Dailousm",
    details: `Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.`,
  },
  {
    image: imageOne,
    name: "Kamala Harish",
    position: "Founder - ProductHunt",
    details: `Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.`,
  },
];

const Testimonial = () => {
  return (
    <>
      <style>
        {`
        .swiper-pagination {
          bottom: 0 !important;
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

      <section className="pt-20 dark:bg-dark lg:pt-[120px]">
        <div className="container relative mx-auto overflow-hidden">
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
            className="pb-[60px]! pt-8!"
          >
            {testimonialItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="-mx-4 flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-10/12 xl:w-8/12 2xl:w-7/12">
                    <div className="relative items-center rounded-lg bg-[#F8F9FF] px-10 py-10 dark:bg-dark-2 md:flex lg:px-[70px]">
                      <div className="relative z-10 mb-12 h-[165px] w-full max-w-[165px] rounded-full md:mb-0">
                        <img
                          src={item.image}
                          alt="image"
                          className="w-full rounded-full"
                        />
                        <div className="absolute left-0 top-0 z-[-1]">
                          <ShapeFive />
                        </div>
                        <div className="absolute -left-2 top-5 z-[-2]">
                          <ShapeSix />
                        </div>
                      </div>
                      <div className="w-full pl-0 md:pl-14">
                        <p className="mb-6 text-base text-body-color dark:text-dark-6">
                          {item.details}
                        </p>
                        <h4 className="mb-1 text-lg font-semibold text-primary">
                          {item.name}
                        </h4>
                        <h6 className="text-sm font-normal italic text-body-color dark:text-dark-6">
                          {item.position}
                        </h6>
                      </div>
                      <div>
                        <span className="absolute -bottom-5 -left-5 z-[-1]">
                          <ShapeNine />
                        </span>
                        <span className="absolute -right-4 -top-7">
                          <ShapeTen />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
