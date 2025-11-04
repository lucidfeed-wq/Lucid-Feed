import React, { useState } from "react";

const Hero8 = () => {
  return (
    <>
      <Navbar />

      {/* <!-- ====== Hero Section Start --> */}
      <div className="relative bg-[#090E34] pt-[120px] md:pt-[150px] lg:pt-[180px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="mb-14 lg:mb-0">
                <span className="mb-4 block text-base font-medium text-white">
                  We are creative team.
                </span>
                <h1 className="mb-3 text-4xl font-bold leading-[1.208]! text-white md:text-5xl lg:text-[40px] xl:text-5xl">
                  The best way to promote business
                </h1>
                <p className="mb-9 max-w-[460px] text-base font-medium text-gray-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
                <ul className="flex flex-wrap items-center gap-4">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-blue-dark"
                    >
                      Discover More
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-primary shadow-1 hover:bg-gray-2 hover:text-body-color"
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-7/12">
              <div className="mx-auto text-center">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-08.svg"
                  alt="image"
                  className="mx-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ====== Hero Section End -->    */}
    </>
  );
};

export default Hero8;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <!-- ====== Navbar Section Start --> */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="container mx-auto">
          <div className="rrelative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5 lg:py-3">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="w-full"
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
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <nav
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none lg:dark:bg-transparent ${
                    !open && "hidden"
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#">Home</ListItem>
                    <ListItem NavLink="/#">About Us</ListItem>
                    <ListItem NavLink="/#">Services</ListItem>
                    <ListItem NavLink="/#">Blog</ListItem>
                    <ListItem NavLink="/#">Contact</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <form className="relative flex max-w-[180px] md:max-w-[230px] lg:max-w-[120px] xl:max-w-[230px]">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full rounded-full border border-white/30 bg-transparent py-2 pl-5 pr-10 text-gray-7 outline-hidden focus:border-white focus-visible:shadow-none"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7187 3.875 13.2812 2.4375C10.3437 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5937 13.2187 13.1875L18.75 17.6562C18.8437 17.75 18.9687 17.7812 19.0937 17.7812C19.25 17.7812 19.4062 17.7187 19.5312 17.5937C19.6875 17.3437 19.6562 17 19.4062 16.8125ZM3.375 12.3437C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7187 11.125 12.5 12.3437C10 14.8437 5.90625 14.8437 3.375 12.3437Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </form>
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
          className="flex border-transparent py-2 text-base font-medium text-dark hover:border-primary hover:text-primary dark:text-white lg:ml-10 lg:inline-flex lg:border-t-[3px] lg:py-6 lg:text-white"
        >
          {children}
        </a>
      </li>
    </>
  );
};
