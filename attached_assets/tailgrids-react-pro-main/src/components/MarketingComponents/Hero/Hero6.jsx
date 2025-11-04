import React, { useState } from "react";

const Hero6 = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10 overflow-hidden bg-white pb-[110px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pt-[180px]">
        <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-br-[200px] bg-[#F8F8F8] dark:bg-dark-2 lg:w-1/2"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <span className="mb-4 block text-lg font-medium text-primary">
                  Download our app
                </span>
                <h1 className="mb-4 text-4xl font-bold leading-[1.208]! text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  Get the Online <br />
                  Payment more easily.
                </h1>
                <p className="mb-16 max-w-[440px] text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="group mr-4 inline-flex h-[70px] items-center justify-center rounded-xl bg-white py-[10px] pl-[10px] pr-5 text-center text-base font-medium text-dark shadow-btn transition duration-200 hover:text-primary hover:shadow-lg dark:bg-dark dark:text-white"
                    >
                      <span className="mr-4 text-dark group-hover:text-primary dark:text-dark-2">
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
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="group inline-flex h-[70px] items-center justify-center rounded-xl py-[10px] pl-[10px] pr-5 text-center text-base font-medium text-dark transition duration-200 hover:text-primary dark:text-white"
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="mx-auto text-center">
                <div className="relative z-10 mt-16 inline-block lg:mt-0">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-06.svg"
                    alt="hero"
                    className="mx-auto max-w-full"
                  />
                  <div className="absolute -left-10 -top-10 z-[-1]">
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero6-shape-1.svg"
                      alt="shape"
                    />
                  </div>
                  <div className="absolute -left-20 top-1/2 z-[-1]">
                    <svg
                      width="40"
                      height="38"
                      viewBox="0 0 40 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.03852 10.0507C2.56762 6.4938 5.49873 2.67846 9.31451 3.18306L32.4926 6.24813C36.3084 6.75273 38.147 11.1988 35.8021 14.2511L21.5587 32.7914C19.2138 35.8436 14.444 35.2129 12.9731 31.656L4.03852 10.0507Z"
                        stroke="#13C296"
                        strokeWidth="6"
                      />
                    </svg>
                  </div>
                  <div className="absolute -right-16 bottom-10 z-[-1]">
                    <svg
                      width="53"
                      height="53"
                      viewBox="0 0 53 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.923995 43.5761C3.73599 46.3881 7.07432 48.6187 10.7484 50.1406C14.4224 51.6624 18.3603 52.4457 22.337 52.4457C26.3138 52.4457 30.2516 51.6624 33.9257 50.1406C37.5997 48.6187 40.9381 46.3881 43.7501 43.5761C46.5621 40.7641 48.7927 37.4258 50.3145 33.7517C51.8363 30.0777 52.6196 26.1399 52.6196 22.1631C52.6196 18.1863 51.8363 14.2485 50.3145 10.5744C48.7927 6.90038 46.5621 3.56205 43.7501 0.750054L35.1655 9.3346C36.8502 11.0193 38.1865 13.0192 39.0982 15.2204C40.01 17.4215 40.4792 19.7806 40.4792 22.1631C40.4792 24.5456 40.01 26.9047 39.0982 29.1058C38.1865 31.3069 36.8502 33.3069 35.1655 34.9916C33.4808 36.6762 31.4809 38.0126 29.2797 38.9243C27.0786 39.836 24.7195 40.3053 22.337 40.3053C19.9546 40.3053 17.5954 39.836 15.3943 38.9243C13.1932 38.0126 11.1932 36.6762 9.50854 34.9916L0.923995 43.5761Z"
                        fill="#F9BA45"
                      />
                    </svg>
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

export default Hero6;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`absolute left-0 top-0 z-20 flex w-full items-center bg-transparent`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="w-full hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-5 py-2 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-md bg-dark px-6 py-2 text-base font-medium text-white hover:bg-body-color dark:bg-dark-2"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
