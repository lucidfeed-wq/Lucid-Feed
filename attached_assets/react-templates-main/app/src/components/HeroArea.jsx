import heroImage from "../assets/images/hero/hero-image-06.svg";
import heroShape from "../assets/images/hero/hero6-shape-1.svg";
import { Link } from "react-router-dom";
import ShapeThree from "./Shapes/ShapeThree.jsx";
import ShapeFour from "./Shapes/ShapeFour.jsx";

const HeroArea = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden bg-white pb-[110px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pt-[180px]">
        <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-br-[200px] bg-[#F8F8F8] dark:bg-dark-2 lg:w-1/2"></div>

        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <span className="mb-4 block text-lg font-medium text-primary">
                  App Landing Page Example
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-[1.208]! text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Crafted with TaiGrids UI Components
                </h1>
                <p className="mb-16 max-w-[440px] text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Link
                      to="#"
                      className="group mr-4 inline-flex h-[70px] items-center justify-center rounded-xl bg-white py-[10px] pl-[10px] pr-5 text-center text-base font-medium text-dark shadow-btn transition duration-200 hover:text-primary hover:shadow-lg dark:bg-dark dark:text-white dark:hover:text-primary"
                    >
                      <span className="mr-4 text-dark transition duration-200 group-hover:text-primary dark:text-dark-2">
                        <svg
                          width="45"
                          height="45"
                          viewBox="0 0 45 45"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <rect
                            width="44.075"
                            height="44.075"
                            rx="10"
                            fill=""
                          />
                          <path
                            d="M28.3839 22.1669C28.3728 20.3185 29.2337 18.9255 30.9722 17.8983C29.9999 16.5432 28.5288 15.7978 26.5896 15.6542C24.7536 15.5133 22.7448 16.6949 22.0093 16.6949C21.2319 16.6949 19.4544 15.703 18.0558 15.703C15.1693 15.7463 12.1018 17.9416 12.1018 22.4081C12.1018 23.728 12.3498 25.0912 12.8457 26.4951C13.5088 28.3435 15.8993 32.8723 18.3929 32.7991C19.6968 32.7693 20.619 31.8993 22.3157 31.8993C23.9623 31.8993 24.8149 32.7991 26.2692 32.7991C28.7851 32.7639 30.9471 28.647 31.5768 26.7933C28.2028 25.2457 28.3839 22.2617 28.3839 22.1669ZM25.4557 13.9007C26.8683 12.2691 26.7401 10.7839 26.6983 10.25C25.4501 10.3205 24.0069 11.0766 23.185 12.0062C22.2795 13.0036 21.7474 14.2367 21.8616 15.6271C23.2101 15.7274 24.4415 15.0525 25.4557 13.9007Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      App Store
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="group inline-flex h-[70px] items-center justify-center rounded-xl py-[10px] pl-[10px] pr-5 text-center text-base font-medium text-dark transition duration-200 hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <span className="mr-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M3.85245 0.375L14.0977 10.6184L16.7415 7.9746C13.1289 5.78276 8.29042 2.84244 6.11441 1.52043L4.65656 0.637253C4.3989 0.480274 4.12297 0.395734 3.85245 0.375ZM2.28856 1.60143C2.26783 1.71398 2.25 1.82709 2.25 1.94853V22.1922C2.25 22.2771 2.26708 22.3562 2.27892 22.4372L12.7016 12.0145L2.28856 1.60143ZM18.4789 9.0294L15.4938 12.0145L18.4269 14.9475C19.9809 14.0056 21.0572 13.3515 21.1767 13.2795C21.7049 12.9566 22.0032 12.4695 21.9943 11.9373C21.9864 11.415 21.688 10.9481 21.1805 10.6608C21.067 10.5956 20.0053 9.95449 18.4789 9.0294ZM14.0977 13.4106L3.88331 23.625C4.08176 23.5905 4.27995 23.5312 4.46951 23.4167C4.73216 23.2568 11.8269 18.9523 16.6894 16.0023L14.0977 13.4106Z"
                            fill=""
                          />
                        </svg>
                      </span>
                      Play Store
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden px-4 lg:block lg:w-1/12"></div>

            <div className="w-full px-4 lg:w-6/12">
              <div className="mx-auto text-center">
                <div className="relative z-10 mt-16 inline-block lg:mt-0">
                  <img
                    src={heroImage}
                    alt="hero"
                    className="mx-auto max-w-full"
                  />
                  <div className="absolute -left-10 -top-10 z-[-1]">
                    <img src={heroShape} alt="shape" />
                  </div>
                  <div className="absolute -left-20 top-1/2 z-[-1]">
                    <ShapeThree />
                  </div>
                  <div className="absolute -right-16 bottom-10 z-[-1]">
                    <ShapeFour />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
