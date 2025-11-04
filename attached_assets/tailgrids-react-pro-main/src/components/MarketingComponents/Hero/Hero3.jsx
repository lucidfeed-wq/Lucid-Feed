import React, { useState } from "react";

const Hero3 = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10 overflow-hidden bg-white pb-[110px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pt-[180px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <span className="mb-4 inline-block rounded-[30px] rounded-bl-none rounded-tl-[20px] border border-stroke px-[22px] py-2 text-xs font-semibold uppercase text-body-color dark:border-dark-3 dark:text-dark-6">
                  HELLO MY NAME IS
                </span>
                <h1 className="mb-3 text-4xl font-bold leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[30px] xl:text-5xl">
                  Alex Julius
                </h1>
                <p className="mb-5 flex items-center text-base font-medium">
                  <span className="text-dark dark:text-white">
                    {" "}
                    Professional:{" "}
                  </span>
                  <span className="pl-3 text-body-color dark:text-dark-6">
                    {" "}
                    Graphics Designer{" "}
                  </span>
                </p>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                    >
                      Hire Me Now!
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                    >
                      <span className="mr-2">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="11" cy="11" r="11" fill="#3056D3" />
                          <rect
                            x="6.90906"
                            y="13.3636"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="10.1818"
                            y="6"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Download CV
                    </a>
                  </li>
                </ul>
                <div className="pt-16">
                  <h6 className="mb-5 flex items-center text-xs font-medium text-body-color dark:text-dark-6">
                    Contact With Me
                    <span className="ml-3 inline-block h-px w-8 bg-body-color dark:bg-dark-6"></span>
                  </h6>
                  <ul className="flex flex-wrap items-center gap-7">
                    <li>
                      <a
                        href="/#"
                        className="text-body-color hover:text-primary"
                      >
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M9.29878 7.2H7.74898H7.19548V6.61935V4.81936V4.23871H7.74898H8.91133C9.21575 4.23871 9.46483 4.00645 9.46483 3.65806V0.580645C9.46483 0.26129 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.62581 3.18262 4.03548V6.56129V7.14194H2.62912H0.747223C0.359774 7.14194 0 7.46129 0 7.92581V10.0161C0 10.4226 0.304424 10.8 0.747223 10.8H2.57377H3.12727V11.3806V17.2161C3.12727 17.6226 3.43169 18 3.87449 18H6.47593C6.64198 18 6.78036 17.9129 6.89106 17.7968C7.00176 17.6806 7.08478 17.4774 7.08478 17.3032V11.4097V10.829H7.66596H8.91133C9.2711 10.829 9.54785 10.5968 9.6032 10.2484V10.2194V10.1903L9.99065 8.1871C10.0183 7.98387 9.99065 7.75161 9.8246 7.51935C9.76925 7.37419 9.52018 7.22903 9.29878 7.2Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="text-body-color hover:text-primary"
                      >
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M15.9968 2.41096L17.1 1.09589C17.4194 0.739726 17.5065 0.465753 17.5355 0.328767C16.6645 0.821918 15.8516 0.986301 15.329 0.986301H15.1258L15.0097 0.876712C14.3129 0.30137 13.4419 0 12.5129 0C10.4806 0 8.88387 1.58904 8.88387 3.42466C8.88387 3.53425 8.88387 3.69863 8.9129 3.80822L9 4.35616L8.39032 4.32877C4.67419 4.21918 1.62581 1.20548 1.13226 0.684932C0.319355 2.05479 0.783871 3.36986 1.27742 4.19178L2.26452 5.72603L0.696774 4.90411C0.725806 6.05479 1.19032 6.9589 2.09032 7.61644L2.87419 8.16438L2.09032 8.46575C2.58387 9.86301 3.6871 10.4384 4.5 10.6575L5.57419 10.9315L4.55806 11.589C2.93226 12.6849 0.9 12.6027 0 12.5205C1.82903 13.726 4.00645 14 5.51613 14C6.64839 14 7.49032 13.8904 7.69355 13.8082C15.8226 12 16.2 5.15068 16.2 3.78082V3.58904L16.3742 3.47945C17.3613 2.60274 17.7677 2.13699 18 1.86301C17.9129 1.89041 17.7968 1.94521 17.6806 1.9726L15.9968 2.41096Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="text-body-color hover:text-primary"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M8.90245 12.1938C10.7363 12.1938 12.2229 10.7072 12.2229 8.8734C12.2229 7.03958 10.7363 5.55298 8.90245 5.55298C7.06863 5.55298 5.58203 7.03958 5.58203 8.8734C5.58203 10.7072 7.06863 12.1938 8.90245 12.1938Z" />
                          <path d="M12.5088 0H5.23824C2.34719 0 0 2.34719 0 5.23824V12.4516C0 15.3999 2.34719 17.7471 5.23824 17.7471H12.4516C15.3999 17.7471 17.7471 15.3999 17.7471 12.5088V5.23824C17.7471 2.34719 15.3999 0 12.5088 0ZM8.90215 13.2244C6.46909 13.2244 4.55126 11.2493 4.55126 8.87353C4.55126 6.49771 6.49771 4.52264 8.90215 4.52264C11.278 4.52264 13.2244 6.49771 13.2244 8.87353C13.2244 11.2493 11.3066 13.2244 8.90215 13.2244ZM14.9133 4.92338C14.627 5.23824 14.1976 5.40999 13.711 5.40999C13.2817 5.40999 12.8523 5.23824 12.5088 4.92338C12.1939 4.60851 12.0222 4.20777 12.0222 3.72116C12.0222 3.23454 12.1939 2.86243 12.5088 2.51894C12.8237 2.17545 13.2244 2.0037 13.711 2.0037C14.1404 2.0037 14.5984 2.17545 14.9133 2.49031C15.1995 2.86243 15.3999 3.29179 15.3999 3.74978C15.3712 4.20777 15.1995 4.60851 14.9133 4.92338Z" />
                          <path d="M13.7398 3.03418C13.3677 3.03418 13.0529 3.34905 13.0529 3.72116C13.0529 4.09328 13.3677 4.40815 13.7398 4.40815C14.112 4.40815 14.4268 4.09328 14.4268 3.72116C14.4268 3.34905 14.1406 3.03418 13.7398 3.03418Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="text-body-color hover:text-primary"
                      >
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M16.7418 0H1.31251C0.583338 0 0 0.548387 0 1.23387V15.7661C0 16.4242 0.583338 17 1.31251 17H16.6835C17.4126 17 17.996 16.4516 17.996 15.7661V1.20645C18.0543 0.548387 17.471 0 16.7418 0ZM5.33754 14.45H2.68335V6.36129H5.33754V14.45ZM3.99587 5.2371C3.12086 5.2371 2.45002 4.57903 2.45002 3.78387C2.45002 2.98871 3.15002 2.33065 3.99587 2.33065C4.8417 2.33065 5.54171 2.98871 5.54171 3.78387C5.54171 4.57903 4.90004 5.2371 3.99587 5.2371ZM15.4001 14.45H12.7459V10.529C12.7459 9.59678 12.7168 8.3629 11.3459 8.3629C9.94591 8.3629 9.74174 9.40484 9.74174 10.4468V14.45H7.08756V6.36129H9.68341V7.48548H9.71258C10.0917 6.82742 10.9376 6.16935 12.2501 6.16935C14.9626 6.16935 15.4585 7.81452 15.4585 10.0629V14.45H15.4001Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="text-body-color hover:text-primary"
                      >
                        <svg
                          width="25"
                          height="18"
                          viewBox="0 0 25 18"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M24.1087 2.70081C23.8306 1.62843 22.9966 0.794355 21.9242 0.516331C20.0177 9.46945e-08 12.3125 0 12.3125 0C12.3125 0 4.60726 9.46945e-08 2.70081 0.516331C1.62843 0.794355 0.794355 1.62843 0.516331 2.70081C0 4.64698 0 8.61875 0 8.61875C0 8.61875 0 12.6302 0.516331 14.5367C0.794355 15.6091 1.62843 16.4431 2.70081 16.7212C4.60726 17.2375 12.3125 17.2375 12.3125 17.2375C12.3125 17.2375 20.0177 17.2375 21.9242 16.7212C22.9966 16.4431 23.8306 15.6091 24.1087 14.5367C24.625 12.6302 24.625 8.61875 24.625 8.61875C24.625 8.61875 24.625 4.64698 24.1087 2.70081ZM9.85 12.3125V4.925L16.2446 8.61875L9.85 12.3125Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="absolute right-0 top-1/2 z-[-1] hidden w-1/2 -translate-y-1/2 md:block lg:w-full">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-03.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
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
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
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
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Contact Us
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
