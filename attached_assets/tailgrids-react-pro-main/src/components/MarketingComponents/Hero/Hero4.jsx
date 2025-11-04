import React, { useState } from "react";

const Hero4 = () => {
  return (
    <>
      <Navbar />

      <div className="relative z-10 bg-white pb-[130px] pt-[120px] dark:bg-dark md:pt-[150px] lg:pb-[180px] lg:pt-[230px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
              <div className="hero-content">
                <h1 className="mb-3 max-w-[480px] text-4xl font-bold leading-[1.208] text-dark dark:text-white sm:text-5xl">
                  Find a dream job That changes life.
                </h1>

                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                  With TailGrids, business and students thrive together.
                  Business can perfectly match their staffing to changing demand
                  throughout the dayed.
                </p>

                <div>
                  <form className="mb-5 w-full rounded-[10px] border border-stroke bg-white px-[14px] py-[6px] shadow-2 dark:border-dark-3 dark:bg-dark-2 md:max-w-[490px]">
                    <div className="-ml-2 -mr-2 flex flex-wrap">
                      <div className="w-full p-2 sm:w-1/2 md:w-1/3">
                        <input
                          type="text"
                          name="keyword"
                          placeholder="Job Keyword"
                          className="h-[46px] w-full rounded-md border border-stroke bg-transparent px-4 text-sm text-body-color outline-hidden placeholder:text-dark-7 focus:bg-[#FCFDFE] focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6 dark:focus:bg-dark"
                        />
                      </div>
                      <div className="w-full p-2 sm:w-1/2 md:w-1/3">
                        <input
                          type="text"
                          name="location"
                          placeholder="Job Location"
                          className="h-[46px] w-full rounded-md border border-stroke bg-transparent px-4 text-sm text-body-color outline-hidden placeholder:text-dark-7 focus:bg-[#FCFDFE] focus-visible:shadow-none dark:border-dark-3 dark:text-dark-6 dark:focus:bg-dark"
                        />
                      </div>
                      <div className="w-full p-2 md:w-1/3">
                        <button
                          type="submit"
                          className="w-full cursor-pointer rounded-md bg-primary px-5 py-[11px] font-medium text-white transition hover:bg-blue-dark"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <p className="text-base font-medium text-body-color dark:text-dark-6">
                  Try Product Designer, Software Engineer etc.
                </p>
              </div>
            </div>
            <div className="hidden px-4 lg:block xl:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div
                className="absolute right-0 top-0 z-[-1] hidden h-full w-1/2 max-w-[720px] items-end justify-center bg-cover bg-left-top bg-no-repeat px-5 lg:flex"
                style={{
                  backgroundImage: `url('https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-4-bg.svg')`,
                }}
              >
                <div>
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-04.png"
                    alt="hero"
                    className="mx-auto max-w-full"
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

export default Hero4;

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
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
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
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-white hover:text-white/90"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-lg bg-white/5 px-7 py-3 text-base font-medium text-white hover:bg-white/10"
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
