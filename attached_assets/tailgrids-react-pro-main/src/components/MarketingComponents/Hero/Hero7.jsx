import React, { useState } from "react";

const Hero7 = () => {
  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden bg-white dark:bg-dark">
        <div className="relative z-10 py-[150px] lg:pt-[200px]">
          <img
            src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-07.jpg"
            alt="image"
            className="absolute left-0 top-0 z-[-1] h-full w-full object-cover object-center"
          />
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="max-w-[570px] bg-white px-8 py-10 dark:bg-dark-2 sm:p-12 md:p-[60px]">
                  <span className="mb-3 block text-base font-medium text-primary">
                    Delivering beautiful digital products
                  </span>
                  <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white md:text-[40px] xl:text-5xl">
                    Provide solutions to small agency
                  </h1>
                  <p className="mb-8 text-base font-medium text-body-color dark:text-dark-6 lg:mb-10">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/#"
                      className="bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-blue-dark"
                    >
                      Discover More
                    </a>
                    <a
                      href="/#"
                      className="inline-flex items-center bg-white px-6 py-3 text-base font-medium text-dark shadow-1 hover:text-primary dark:bg-dark-2 dark:text-white dark:shadow-none"
                    >
                      Explore Services
                      <span className="ml-2">
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
                      </span>
                    </a>
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

export default Hero7;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="absolute left-0 top-0 z-50 w-full bg-white dark:bg-dark lg:overflow-hidden">
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="relative z-10 w-60 max-w-full px-4 py-3">
              <a href="/#" className="block w-full">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="w-full"
                />
              </a>
              <span className="absolute right-0 top-1/2 z-[-1] h-full w-[1000%] -translate-y-1/2 bg-primary lg:h-[125%]"></span>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  className={`absolute right-4 top-full z-20 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#">Home</ListItem>
                    <ListItem NavLink="/#">About</ListItem>
                    <ListItem NavLink="/#">Features</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <div className="flex items-center">
                  <div className="flex h-11 min-w-[44px] items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-current"
                    >
                      <path d="M15.3437 19.156C12.7812 19.156 9.09373 17.3123 5.71873 14.0935C1.12498 9.7185 -0.843773 4.8435 1.15623 2.7185C1.24998 2.62475 1.34373 2.56225 1.46873 2.49975L4.09373 1.031C4.68748 0.718502 5.43748 0.874752 5.81248 1.406L7.71873 4.12475C7.90623 4.406 7.99998 4.74975 7.93748 5.06225C7.87498 5.406 7.68748 5.68725 7.40623 5.87475L6.24998 6.62475C6.18748 6.656 6.18748 6.68725 6.18748 6.7185C6.18748 6.74975 6.18748 6.781 6.21873 6.81225C7.06248 8.06225 9.46873 11.2498 13.2812 13.531C13.375 13.5935 13.5312 13.5623 13.5937 13.4998L14.4062 12.406C14.8125 11.8435 15.5937 11.7185 16.1875 12.0935L19.0312 13.906C19.625 14.281 19.8125 15.031 19.4375 15.6248L17.875 18.1248C17.8125 18.2498 17.7187 18.3435 17.625 18.406C17.0312 18.9373 16.25 19.156 15.3437 19.156ZM4.74998 1.93725C4.71873 1.93725 4.68748 1.93725 4.62498 1.9685L1.99998 3.43725C1.96873 3.4685 1.96873 3.4685 1.93748 3.4685C0.624977 4.87475 2.12498 9.156 6.49998 13.3123C10.875 17.4685 15.4062 18.906 16.9062 17.6248C16.9062 17.6248 16.9062 17.6248 16.9375 17.5935L18.5 15.0935C18.5312 15.031 18.5312 14.9373 18.4375 14.8748L15.5937 13.0623C15.5 12.9998 15.3437 13.031 15.2812 13.0935L14.4687 14.1873C14.0625 14.7185 13.3125 14.8748 12.7187 14.531C8.68748 12.1248 6.18748 8.781 5.31248 7.43725C5.12498 7.156 5.06248 6.8435 5.12498 6.49975C5.18748 6.18725 5.37498 5.87475 5.65623 5.7185L6.81248 4.93725C6.87498 4.906 6.87498 4.87475 6.87498 4.8435C6.87498 4.81225 6.87498 4.781 6.84373 4.7185L4.93748 1.99975C4.90623 1.9685 4.81248 1.93725 4.74998 1.93725Z" />
                    </svg>
                  </div>
                  <div className="ml-4 w-full whitespace-nowrap">
                    <span className="block text-sm font-medium dark:text-white">
                      Call Us
                    </span>
                    <h6 className="text-base font-semibold text-dark dark:text-white">
                      360-779-2228
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ====== Navbar Section End -->    */}
    </>
  );
};
const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex border-transparent py-2 text-base font-medium text-dark hover:border-primary hover:text-primary dark:text-white lg:ml-10 lg:inline-flex lg:border-t-2 lg:py-7"
      >
        {children}
      </a>
    </li>
  );
};
