import React, { useState } from "react";

function HeroTwo() {
  return (
    <>
      <Navbar />

      <section className="relative z-10 overflow-hidden bg-white pb-10 dark:bg-dark">
        <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
          <div className="relative z-10 overflow-hidden rounded-[20px] bg-[#EEF2FF] py-[70px] dark:bg-dark-700">
            <div className="container">
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-1/2">
                  <div className="w-full max-w-[570px]">
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-4xl md:text-[52px] lg:text-4xl xl:text-[52px]/[1.25]">
                      Best Chatbot Creating Customer Service
                    </h1>
                    <p className="mb-8 text-base text-dark-3 dark:text-dark-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                    </p>

                    <button className="mb-5 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                      Get 1 Month Free Access
                    </button>

                    <ul className="flex flex-wrap items-center gap-4">
                      <li className="text-base text-dark-3 dark:text-dark-5">
                        No credit card required
                      </li>
                      <span className="inline-block h-1 w-1 rounded-full bg-dark"></span>
                      <li className="text-base text-dark-3 dark:text-dark-5">
                        Cancel anytime
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="relative flex justify-end max-lg:mt-12">
                    <div className="absolute left-4 top-1/2 w-full max-w-[270px] -translate-y-1/2 rounded-[10px] border border-white bg-white/50 p-5 shadow-[-6px_11px_50px_0px_rgba(0,0,0,0.05)] backdrop-blur-[8px]">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-base font-bold text-black">
                          Active AI assistant
                        </p>
                        <p className="text-black">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1962 19.6785C14.1962 18.5739 13.3007 17.6785 12.1962 17.6785C11.0916 17.6785 10.1962 18.5739 10.1962 19.6785C10.1962 20.783 11.0916 21.6785 12.1962 21.6785C13.3007 21.6785 14.1962 20.783 14.1962 19.6785Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14.1962 12.6785C14.1962 11.5739 13.3007 10.6785 12.1962 10.6785C11.0916 10.6785 10.1962 11.5739 10.1962 12.6785C10.1962 13.783 11.0916 14.6785 12.1962 14.6785C13.3007 14.6785 14.1962 13.783 14.1962 12.6785Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14.1962 5.67847C14.1962 4.5739 13.3007 3.67847 12.1962 3.67847C11.0916 3.67847 10.1962 4.5739 10.1962 5.67847C10.1962 6.78304 11.0916 7.67847 12.1962 7.67847C13.3007 7.67847 14.1962 6.78304 14.1962 5.67847Z"
                              fill="currentColor"
                            />
                          </svg>
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-dark-3">
                          Lorem Ipsum is <br className="block" />
                          simply dummy text of the
                        </p>
                        <button className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                          Active
                        </button>
                      </div>
                    </div>
                    <img
                      src="https://i.ibb.co/rQLKNyF/image.png"
                      alt="hero image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 -z-10 aspect-square w-[327px] rounded-full bg-[#E8D1EE] blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 aspect-square w-[290px] rounded-full bg-[#B7E5FE] blur-[150px]"></div>

            <div className="absolute bottom-0 left-0 -z-10">
              <img src="./images/hero-02/dot-shape-1.svg" alt="dot shape" />
            </div>
            <div className="absolute right-0 top-0 -z-10">
              <img src="./images/hero-02/dot-shape-2.svg" alt="dot shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroTwo;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark">
      <div className="mx-auto w-full px-4 md:px-6 lg:px-10">
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
              <button className="rounded-lg border border-primary px-5 py-2.5 text-base font-medium text-primary hover:bg-primary/5">
                Join free for 30 days
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
