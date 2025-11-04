import React, { useState } from "react";

function HeroOne() {
  return (
    <>
      <Navbar />

      <section className="relative z-10 overflow-hidden bg-white dark:bg-black">
        <div className="container">
          <div className="relative">
            <div className="mx-auto w-full max-w-[725px] pt-[76px] text-center">
              <div className="relative inline-flex">
                <span className="absolute -left-5 -top-4">
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.9416 17.8206C23.3028 16.4115 23.4236 11.1442 21.0174 1.34855"
                      stroke="#3758F9"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18.4497 20.1009C16.4202 16.7823 10.1542 8.86717 1.32593 3.75581"
                      stroke="#3758F9"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.2325 23.3676C11.4024 22.2892 6.60438 20.2261 2.05347 20.6008"
                      stroke="#3758F9"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-dark dark:text-white sm:text-4xl md:text-5xl">
                  Unlock The Power Of Artificial Intelligence With
                  <span className="bg-linear-to-l from-[#f566d5] to-primary bg-clip-text pl-2 text-transparent">
                    AIBot
                  </span>
                </h1>
              </div>

              <p className="mb-9 text-base text-body-color dark:text-dark-6 sm:text-lg">
                AI content generation website is a platform that utilizes
                artificial intelligegnce technologies, such as natural
              </p>

              <a
                href="#"
                className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Start A Free Trial
              </a>

              <p className="mb-10 text-sm text-dark dark:text-white">
                No credit card required. Free 14-days trial
              </p>

              <div className="aspect-670/302 overflow-hidden rounded-t-2xl border-8 border-b-0 border-dark-3 bg-gray-1 dark:border-dark-4 dark:bg-dark-3">
                <img
                  src="https://i.ibb.co/tCNcZcr/image-1.jpg"
                  alt="hero image"
                  className="w-full"
                />
              </div>
            </div>

            <div className="absolute left-0 top-36 hidden items-center gap-3 xl:flex">
              <span className="rounded-2xl rounded-tr-none bg-[#000]/[.05] py-1.5 pl-4 pr-8 text-xs font-medium text-dark dark:bg-white/5 dark:text-white">
                Research
              </span>
              <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-white dark:border-dark-3">
                <img src="https://i.ibb.co/LYrS11X/person-1.png" alt="person" />
              </span>
            </div>

            <div className="absolute left-20 top-[313px] hidden items-center gap-3 xl:flex">
              <span className="rounded-2xl rounded-tr-none bg-[#000]/[.05] py-1.5 pl-4 pr-8 text-xs font-medium text-dark dark:bg-white/5 dark:text-white">
                MLA & APA
              </span>
              <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-white dark:border-dark-3">
                <img src="https://i.ibb.co/HB323Q0/person-2.png" alt="person" />
              </span>
            </div>

            <div className="absolute right-0 top-36 hidden items-center gap-3 xl:flex">
              <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-white dark:border-dark-3">
                <img src="https://i.ibb.co/ggrm0zz/person-3.png" alt="person" />
              </span>
              <span className="rounded-2xl rounded-tl-none bg-[#000]/[.05] py-1.5 pl-4 pr-8 text-xs font-medium text-dark dark:bg-white/5 dark:text-white">
                Assistant
              </span>
            </div>

            <div className="absolute right-20 top-[313px] hidden items-center gap-3 xl:flex">
              <span className="h-11 w-11 overflow-hidden rounded-full border-2 border-white dark:border-dark-3">
                <img src="https://i.ibb.co/Jj72C9p/person-4.png" alt="person" />
              </span>
              <span className="rounded-2xl rounded-tl-none bg-[#000]/[.05] py-1.5 pl-4 pr-8 text-xs font-medium text-dark dark:bg-white/5 dark:text-white">
                AI chatbot
              </span>
            </div>

            <div className="absolute bottom-0 left-1/2 -z-10 flex w-full -translate-x-1/2 items-center justify-center">
              <div className="aspect-square w-full max-w-[256px] rounded-full bg-primary blur-[200px]"></div>
              <div className="aspect-square w-full max-w-[256px] rounded-full bg-[#F566D5] blur-[200px]"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 left-0 -z-10">
          <img src="./images/hero-01/dot-shape-1.svg" alt="dot shape" />
        </div>
        <div className="absolute right-0 top-0 -z-10">
          <img src="./images/hero-01/dot-shape-2.svg" alt="dot shape" />
        </div>
      </section>
    </>
  );
}

export default HeroOne;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-stroke dark:border-dark-3">
      <div className="bg-dark-2">
        <div className="container">
          <p className="py-3 text-center text-sm font-semibold text-white">
            Create an account to avail a 50% bonus discount at checkout.
            <a href="#" className="pl-1">
              Learn More→
            </a>
          </p>
        </div>
      </div>
      <div className="bg-dark-2 pt-[18px]">
        <div className="-mt-[18px] rounded-t-xl bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">
                <a href="#" className="block w-full py-5">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                    alt="logo"
                    className="dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="hidden dark:block"
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
                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                      !open && "hidden"
                    }`}
                  >
                    <ul className="block lg:flex">
                      <li>
                        <a
                          href="#"
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                        >
                          Payment
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                        >
                          Features
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
                  <a
                    href="#"
                    className="rounded-lg bg-gray-2 px-5 py-2.5 text-base font-medium text-dark hover:text-primary dark:bg-white/5 dark:text-white"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-white hover:bg-primary/90"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
