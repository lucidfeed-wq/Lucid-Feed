import React, { useState } from "react";

export default function Hero14() {
  return (
    <>
      <Navbar />

      <div className="relative bg-white px-4 pb-10 pt-[105px] dark:bg-dark md:px-10">
        <div className="rounded-[20px] bg-[#F6F8FC] px-2 py-14 dark:bg-dark-2 sm:px-6">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="w-full max-w-[480px] max-lg:mb-12">
                  <span className="mb-6 block text-lg font-semibold text-dark dark:text-white">
                    Hello Welcome
                  </span>
                  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-5xl">
                    I'm Edward <br />
                    Product Designer
                  </h2>
                  <p className="mb-9 text-base text-body-color dark:text-dark-6">
                    I Create bold and modern interface design with UX knowledge
                    for companies all around the world.
                  </p>

                  <div className="mb-[70px] flex flex-wrap items-center gap-6">
                    <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-200 hover:bg-primary/90">
                      <span>
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 3.95752H2.5C1.4375 3.95752 0.53125 4.83252 0.53125 5.92627V16.0513C0.53125 17.1138 1.40625 18.02 2.5 18.02H17.5C18.5625 18.02 19.4687 17.145 19.4687 16.0513V5.89502C19.4687 4.83252 18.5625 3.95752 17.5 3.95752ZM17.5 5.36377C17.5312 5.36377 17.5625 5.36377 17.5937 5.36377L10 10.2388L2.40625 5.36377C2.4375 5.36377 2.46875 5.36377 2.5 5.36377H17.5ZM17.5 16.5513H2.5C2.1875 16.5513 1.9375 16.3013 1.9375 15.9888V6.73877L9.25 11.4263C9.46875 11.5825 9.71875 11.645 9.96875 11.645C10.2187 11.645 10.4687 11.5825 10.6875 11.4263L18 6.73877V16.02C18.0625 16.3325 17.8125 16.5513 17.5 16.5513Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Hire Me
                    </button>
                    <a
                      href="#"
                      className="text-base font-medium text-dark underline hover:text-primary dark:text-white"
                    >
                      See Portfolio
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <p className="text-base font-medium text-dark-3 dark:text-dark-6">
                      Follow Me:
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button className="shadow-2xs flex h-12 w-12 items-center justify-center rounded-full bg-white text-dark duration-200 hover:bg-dark hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-dark">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 10.4972V7.70918C11 6.6299 11.8954 5.75497 13 5.75497H15V2.82365L12.285 2.63416C9.9695 2.47256 8 4.26442 8 6.53266V10.4972H5V13.4285H8V19.2907H11V13.4285H14L15 10.4972H11Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="shadow-2xs flex h-12 w-12 items-center justify-center rounded-full bg-white text-dark duration-200 hover:bg-dark hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-dark">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2140_21027)">
                            <path
                              d="M10.0005 6.45752C7.53174 6.45752 5.50049 8.45752 5.50049 10.9575C5.50049 13.4263 7.50049 15.4575 10.0005 15.4575C12.4692 15.4575 14.4692 13.4575 14.4692 10.9575C14.4692 8.48877 12.4692 6.45752 10.0005 6.45752ZM10.0005 14.0513C8.31299 14.0513 6.90674 12.6763 6.90674 10.9575C6.90674 9.27002 8.28174 7.86377 10.0005 7.86377C11.688 7.86377 13.063 9.23877 13.063 10.9575C13.063 12.645 11.688 14.0513 10.0005 14.0513Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14.6875 4.58252C14.0625 4.58252 13.5938 5.08252 13.5938 5.67627C13.5938 6.27002 14.0938 6.77002 14.6875 6.77002C15.2812 6.77002 15.7812 6.27002 15.7812 5.67627C15.7812 5.08252 15.3125 4.58252 14.6875 4.58252Z"
                              fill="currentColor"
                            />
                            <path
                              d="M14.6565 1.52002H5.344C2.68774 1.52002 0.562744 3.64502 0.562744 6.30127V15.645C0.562744 18.27 2.71899 20.4263 5.344 20.4263H14.6877C17.3127 20.4263 19.469 18.27 19.469 15.645V6.30127C19.469 3.64502 17.3127 1.52002 14.6565 1.52002ZM18.0627 15.6138C18.0627 17.4888 16.5627 18.9888 14.6877 18.9888H5.344C3.469 18.9888 1.96899 17.4888 1.96899 15.6138V6.30127C1.96899 4.42627 3.50025 2.92627 5.344 2.92627H14.6565C16.5315 2.92627 18.0315 4.45752 18.0315 6.30127V15.6138H18.0627Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2140_21027">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.95752)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button className="shadow-2xs flex h-12 w-12 items-center justify-center rounded-full bg-white text-dark duration-200 hover:bg-dark hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-dark">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.7119 18.4575L8.92813 13.0644L4.19144 18.4575H2.1875L8.03909 11.7969L2.1875 3.45752H7.33247L10.8986 8.54049L15.3667 3.45752H17.3707L11.7906 9.80968L17.8568 18.4575H12.7119ZM14.9435 16.937H13.5943L5.05681 4.97799H6.40613L9.82547 9.76652L10.4167 10.5975L14.9435 16.937Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="shadow-2xs flex h-12 w-12 items-center justify-center rounded-full bg-white text-dark duration-200 hover:bg-dark hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-dark">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_2140_21031)">
                            <path
                              d="M10.0003 1.52002C4.7815 1.52002 0.562744 5.73877 0.562744 10.9575C0.562744 16.1763 4.7815 20.4263 10.0003 20.4263C15.219 20.4263 19.469 16.1763 19.469 10.9575C19.469 5.73877 15.219 1.52002 10.0003 1.52002ZM18.0315 11.2388C16.1878 11.1138 14.2502 11.3013 12.344 11.77C12.0628 11.02 11.7815 10.3013 11.469 9.58252C13.4378 8.92627 15.2815 7.95752 16.8752 6.80127C17.6252 8.02002 18.0315 9.45752 18.0315 10.9888C18.0627 11.0513 18.0315 11.145 18.0315 11.2388ZM16.0315 5.64502C14.5315 6.77002 12.7503 7.67627 10.844 8.27002C9.844 6.27002 8.719 4.58252 7.5315 3.27002C8.31275 3.02002 9.12525 2.89502 10.0003 2.89502C12.4065 2.92627 14.5627 3.98877 16.0315 5.64502ZM6.1565 3.89502C7.344 5.08252 8.469 6.70752 9.469 8.67627C7.00025 9.27002 4.469 9.36377 2.18774 8.95752C2.78149 6.77002 4.219 4.95752 6.1565 3.89502ZM1.96899 10.3325C3.00024 10.5513 4.06275 10.645 5.12525 10.645C6.75025 10.645 8.43775 10.4263 10.094 9.98877C10.4065 10.6763 10.719 11.395 10.969 12.145C8.219 13.02 5.7815 14.395 3.844 16.1763C2.68774 14.7388 1.96899 12.9263 1.96899 10.9575C1.96899 10.7388 1.96899 10.5513 1.96899 10.3325ZM4.844 17.145C6.62525 15.52 8.9065 14.2388 11.4377 13.4575C11.5315 13.77 11.6252 14.0825 11.719 14.3638C12.1252 15.77 12.4378 17.1763 12.6565 18.52C11.8127 18.8013 10.9378 18.9888 10.0003 18.9888C8.0315 19.02 6.25025 18.3013 4.844 17.145ZM14.0002 17.9263C13.7815 16.645 13.469 15.3013 13.094 13.9575C13.0002 13.645 12.9065 13.3638 12.8127 13.0513C14.5003 12.645 16.2503 12.4888 17.8752 12.5825C17.4065 14.895 15.9377 16.8013 14.0002 17.9263Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2140_21031">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.95752)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative z-10 mx-auto aspect-432/578 max-w-[432px] rounded-full lg:mr-0">
                  <div className="absolute left-0 top-0 -z-20 h-full w-full rounded-full bg-primary"></div>
                  <div className="absolute left-0 top-0 z-10 aspect-432/595 h-full w-full -rotate-[8deg] rounded-full border border-primary bg-transparent"></div>
                  <div className="absolute inset-0 -z-10 flex h-full w-full items-end overflow-hidden rounded-full">
                    <img
                      src="https://i.ibb.co/g4bqwMB/image-01.png"
                      alt="hero image"
                    />
                  </div>
                  <div className="absolute left-0 top-0 -z-20 h-full w-full overflow-hidden rounded-full">
                    <img
                      src="./images/hero/hero-14/dots-shape.svg"
                      alt="dots-shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative z-40 -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="block w-full dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden w-full dark:block"
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
                id="navbarCollapse"
                className={`absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none dark:lg:bg-transparent xl:ml-11 ${
                  !open && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-10 lg:inline-flex"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-10 lg:inline-flex"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-10 lg:inline-flex"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-10 lg:inline-flex"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-base font-medium text-primary duration-200 hover:bg-primary hover:text-white">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.625 9.2814C18.5 9.06265 18.3125 8.9064 18.0937 8.7814L3.6875 0.718901C3.4375 0.593901 3.15625 0.531401 2.875 0.562651C2.59375 0.593901 2.34375 0.687651 2.125 0.875151C1.90625 1.06265 1.75 1.31265 1.6875 1.56265C1.59375 1.8439 1.625 2.12515 1.71875 2.4064L4.40625 10.0002L1.71875 17.5939C1.625 17.8751 1.625 18.1564 1.6875 18.4064C1.75 18.6876 1.90625 18.9064 2.125 19.0939C2.34375 19.2814 2.59375 19.3751 2.875 19.4064C2.90625 19.4064 2.96875 19.4064 3 19.4064C3.21875 19.4064 3.46875 19.3439 3.6875 19.2189L18.0937 11.1564C18.3125 11.0314 18.5 10.8751 18.625 10.6564C18.75 10.4376 18.8125 10.1876 18.8125 9.9689C18.8125 9.75015 18.75 9.50015 18.625 9.2814ZM3.0625 1.9689L16.125 9.2814H5.65625L3.0625 1.9689ZM3.0625 18.0314L5.6875 10.7189H16.1562L3.0625 18.0314Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
