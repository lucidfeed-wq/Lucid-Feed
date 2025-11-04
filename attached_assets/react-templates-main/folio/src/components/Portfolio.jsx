import portfolioOne from "../assets/images/portfolio/portfolio-06/portfolio-01.jpg";
import portfolioTwo from "../assets/images/portfolio/portfolio-06/portfolio-02.jpg";
import portfolioThree from "../assets/images/portfolio/portfolio-06/portfolio-03.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const portfolioItems = [
  {
    image: portfolioOne,
    number: "01",
    subtitle: "Digital",
    title: "Marketing Solutions",
    details:
      " Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    link: "/#",
    button: "View Details",
  },
  {
    image: portfolioTwo,
    number: "02",
    subtitle: "Design",
    title: "Marketing Solutions",
    details:
      " Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    link: "/#",
    button: "View Details",
  },
  {
    image: portfolioThree,
    number: "03",
    subtitle: "Development",
    title: "Marketing Solutions",
    details:
      " Lorem ipsum dolor consectetur adipiscing mod tempor incididunt labore dolore magna ut veniam.",
    link: "/#",
    button: "View Details",
  },
];

const Portfolio = () => {
  return (
    <>
      <style>
        {`
        .swiper-pagination {
          bottom: -60px !important;
        }
        .swiper-pagination-bullet {
          margin: 0 8px !important;
          width: 10px;
          height: 10px;
          border-radius: 12px;
          background-color: #DFE4EA;
          opacity: 1;
          transition: all 0.3s ease-in-out;
        }
        .dark .swiper-pagination-bullet {
          background-color: #374151;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 30px;
          background-color: #3758F9;
        }
        `}
      </style>

      <section className="bg-gray-1 dark:bg-dark-2">
        <div className="container mx-auto overflow-hidden py-20 lg:py-[120px] ">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            className="overflow-visible!"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="-mx-4 flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-10/12 xl:w-8/12">
                    <div
                      className="relative w-full bg-cover bg-center bg-no-repeat px-10 py-12 sm:p-[60px]"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="w-full">
                        <div className="relative ml-auto w-full max-w-[330px] bg-white px-8 py-[56px] dark:bg-dark-2 sm:px-10">
                          <span className="absolute right-0 top-0 rounded-bl-2xl bg-primary p-4 text-2xl font-semibold text-white">
                            {item.number}
                          </span>
                          <span className="mb-2 inline-block text-2xl font-bold text-dark dark:text-white sm:text-[26px] sm:leading-7">
                            {" "}
                            {item.subtitle}{" "}
                          </span>
                          <h3 className="mb-5 text-base font-medium text-body-color dark:text-dark-6">
                            {item.title}
                          </h3>
                          <p className="mb-9 text-sm text-body-color dark:text-dark-6">
                            {item.details}
                          </p>
                          <a
                            href={item.link}
                            className="inline-flex items-center text-sm font-medium text-dark hover:text-primary dark:text-white"
                          >
                            {item.button}
                            <span className="ml-2">
                              <svg
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                              >
                                <path
                                  d="M16.2 8.54995L10.3781 2.6437C10.125 2.39058 9.73125 2.39058 9.47812 2.6437C9.225 2.89683 9.225 3.29058 9.47812 3.5437L14.2031 8.35308H2.25C1.9125 8.35308 1.63125 8.63433 1.63125 8.97183C1.63125 9.30933 1.9125 9.6187 2.25 9.6187H14.2594L9.47812 14.4843C9.225 14.7375 9.225 15.1312 9.47812 15.3843C9.59062 15.4968 9.75937 15.5531 9.92812 15.5531C10.0969 15.5531 10.2656 15.4968 10.3781 15.3562L16.2 9.44995C16.4531 9.19683 16.4531 8.80308 16.2 8.54995Z"
                                  fill=""
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
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

export default Portfolio;
