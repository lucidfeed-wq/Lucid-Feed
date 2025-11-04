import React, { useState } from "react";

const Hero10 = () => {
  return (
    <>
      <Navbar />

      {/* <!-- ====== Hero Section Start --> */}
      <div className="relative z-10 overflow-hidden bg-white pb-[110px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pt-[180px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
              <div className="hero-content max-w-[575px]">
                <h1 className="mb-4 text-4xl font-bold capitalize leading-[1.208]! text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  <span className="pr-1">
                    Business site templates Crafted with
                  </span>
                  <span className="text-primary"> TailGrids.</span>
                </h1>
                <p className="mb-9 max-w-[477px] text-base text-body-color dark:text-dark-6">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center gap-4">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                    >
                      Know More
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md border border-dark px-7 py-3 text-center text-base font-medium text-dark transition hover:bg-dark hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12 xl:w-7/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="absolute right-0 top-0 z-[-1] hidden h-full lg:inline-block">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-10.png"
                    alt="hero"
                    className="h-full max-w-full lg:ml-auto"
                  />
                  <span className="absolute right-3 top-0 z-[-2] h-full w-[105%] xl:right-8 xl:w-full">
                    <svg
                      viewBox="0 0 743 710"
                      fill="none"
                      className="max-h-full w-full"
                    >
                      <path
                        opacity="0.2"
                        d="M170.825 0H908V753H186.118C61.1679 753 -27.8471 631.69 9.64041 512.496L170.825 0Z"
                        fill="url(#paint0_linear_1414_931)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1414_931"
                          x1="421"
                          y1="0"
                          x2="421"
                          y2="753"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" />
                          <stop
                            offset="1"
                            stopColor="#3056D3"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ====== Hero Section End -->    */}
    </>
  );
};

export default Hero10;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="container mx-auto">
          <div className="relative z-40 -mx-4 flex items-center justify-between">
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
                  className={` ${
                    open && "navbarTogglerActive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                </button>
                <nav
                  className={`absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#">About Us</ListItem>
                    <ListItem NavLink="/#">Services</ListItem>
                    <ListItem NavLink="/#">Blog</ListItem>
                    <ListItem NavLink="/#">Contact</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-blue-dark"
                >
                  Get Started
                </a>
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
