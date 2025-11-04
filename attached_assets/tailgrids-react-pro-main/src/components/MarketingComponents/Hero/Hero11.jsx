import React, { useState } from "react";

const Hero11 = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10 overflow-hidden bg-white pb-[110px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pt-[180px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="hero-content mx-auto max-w-[666px] text-center">
                <span className="mb-5 block text-base font-semibold text-primary sm:text-lg md:text-xl">
                  Built With TailGrids Components
                </span>
                <h1 className="mb-5 text-3xl font-bold capitalize leading-[1.208]! text-dark dark:text-white sm:text-[42px] xl:text-5xl">
                  Ready for Any Websites Crafted by TailGrids
                </h1>
                <p className="mb-9 text-base font-medium text-body-color dark:text-dark-6 md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at egestas tortor. Morbi sed odio id purus
                  pellentesque iaculis.
                </p>
                <ul className="flex flex-wrap items-center justify-center gap-4">
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
                      className="inline-flex items-center justify-center rounded-md border border-primary px-7 py-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0 -z-10">
            <svg
              width="784"
              height="619"
              viewBox="0 0 784 619"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="343.762"
                y="-429.286"
                width="681.025"
                height="859.911"
                rx="101"
                transform="rotate(45 343.762 -429.286)"
                fill="url(#paint0_linear_1414_1006)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1006"
                  x1="684.275"
                  y1="-429.286"
                  x2="650.39"
                  y2="509.923"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" />
                  <stop offset="1" stopColor="#3056D3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 -z-10">
            <svg
              width="577"
              height="606"
              viewBox="0 0 577 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="880.642"
                y="206.506"
                width="619.809"
                height="680.424"
                rx="94"
                transform="rotate(135 880.642 206.506)"
                fill="url(#paint0_linear_1414_1005)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1005"
                  x1="1190.55"
                  y1="206.506"
                  x2="1167.23"
                  y2="949.912"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" />
                  <stop offset="1" stopColor="#3056D3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 left-1/2 -z-10">
            <svg
              width="695"
              height="363"
              viewBox="0 0 695 363"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="719.109"
                y="488.892"
                width="325.482"
                height="726.494"
                rx="60"
                transform="rotate(135 719.109 488.892)"
                fill="url(#paint0_linear_1414_1009)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1009"
                  x1="881.85"
                  y1="488.892"
                  x2="831.383"
                  y2="1280.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" />
                  <stop offset="1" stopColor="#3056D3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 left-1/4 -z-10">
            <svg
              width="469"
              height="139"
              viewBox="0 0 469 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                width="353.669"
                height="342.737"
                rx="30"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 -12 230.352)"
                fill="url(#paint0_linear_1414_1011)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1011"
                  x1="176.834"
                  y1="3.18915e-07"
                  x2="166.463"
                  y2="374.543"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" />
                  <stop offset="1" stopColor="#3056D3" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero11;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
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
                className="rounded-md bg-transparent px-7 py-3 text-base font-medium text-primary duration-300 hover:bg-primary/5"
              >
                Sign In
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
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};
