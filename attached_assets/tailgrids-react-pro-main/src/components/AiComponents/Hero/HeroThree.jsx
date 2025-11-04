import React, { useState } from "react";

function HeroThree() {
  return (
    <>
      <Navbar />

      <section className="bg-white dark:bg-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="w-full max-w-[570px] py-14 xl:py-20">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  Next-Generation of AI Images
                </span>
                <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[52px]/[1.25] lg:text-4xl xl:text-[52px]/[1.25]">
                  Artificially intelligent tools for naturally creative Images
                </h1>
                <p className="mb-8 text-base text-dark-3 dark:text-dark-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>

                <div className="flex w-full gap-3 max-sm:flex-col sm:items-center">
                  <input
                    type="text"
                    placeholder="Start with a detailed description"
                    className="h-12 w-full rounded-lg border border-stroke bg-transparent px-5 py-3 text-dark placeholder-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:text-white"
                  />
                  <button className="h-12 rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90">
                    Generate
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="flex gap-6">
                <div className="*:w-full *:rounded-[10px] flex w-1/2 flex-col gap-y-6">
                  <img
                    src="https://i.ibb.co/yYdb2rd/image-1.jpg"
                    alt="hero image"
                  />
                  <img
                    src="https://i.ibb.co/Jx729Ly/image-2.jpg"
                    alt="hero image"
                  />
                  <img
                    src="https://i.ibb.co/4M7Cnrv/image-3.jpg"
                    alt="hero image"
                  />
                </div>

                <div className="*:w-full *:rounded-[10px] flex w-1/2 flex-col gap-y-6">
                  <img
                    src="https://i.ibb.co/pyRQB2r/image-4.jpg"
                    alt="hero image"
                  />
                  <img
                    src="https://i.ibb.co/KWmdNPp/image-5.jpg"
                    alt="hero image"
                  />
                  <img
                    src="https://i.ibb.co/RCYVVSG/image-6.jpg"
                    alt="hero image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroThree;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark">
      <div className="container">
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
                      className="flex py-2 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary lg:ml-12 lg:inline-flex"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end gap-3 pr-16 sm:flex lg:pr-0">
              <button className="rounded-lg bg-primary px-5 py-2.5 text-base font-medium text-white hover:bg-primary/90">
                Try It Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
