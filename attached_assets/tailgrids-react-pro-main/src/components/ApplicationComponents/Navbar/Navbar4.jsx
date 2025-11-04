import React, { useEffect, useRef, useState } from "react";

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [searchFormOpen, setSearchFormOpen] = useState(false);

  const trigger = useRef(null);
  const searchForm = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchForm.current) return;
      if (
        !searchFormOpen ||
        searchForm.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSearchFormOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!searchFormOpen || keyCode !== 27) return;
      setSearchFormOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <header className="flex w-full items-center bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5 lg:py-3">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
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
            <div className="w-full">
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
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] justify-center rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
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
            <div className="relative right-16 hidden justify-end sm:flex lg:right-0">
              <div className="flex max-w-[200px] justify-end">
                <button
                  ref={trigger}
                  onClick={() => setSearchFormOpen(!searchFormOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-dark dark:border-dark-4 dark:text-white"
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    className="fill-current"
                  >
                    <path d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7187 3.875 13.2812 2.4375C10.3437 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5937 13.2187 13.1875L18.75 17.6562C18.8437 17.75 18.9687 17.7812 19.0937 17.7812C19.25 17.7812 19.4062 17.7187 19.5312 17.5937C19.6875 17.3437 19.6562 17 19.4062 16.8125ZM3.375 12.3437C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7187 11.125 12.5 12.3437C10 14.8437 5.90625 14.8437 3.375 12.3437Z" />
                  </svg>
                </button>
                <div
                  ref={searchForm}
                  onFocus={() => setSearchFormOpen(true)}
                  onBlur={() => setSearchFormOpen(false)}
                  className={`absolute right-0 top-full mt-5 w-[330px] rounded-md bg-white dark:bg-dark-2 ${
                    !searchFormOpen && "hidden"
                  }`}
                >
                  <form className="flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Search Components or UI"
                      className="w-full rounded-md border border-transparent bg-white py-4 pl-5 pr-8 text-body-color shadow-xs outline-hidden focus-visible:shadow-none dark:bg-dark-2 dark:text-white"
                    />
                    <button className="absolute right-5 top-1/2 -translate-y-1/2 text-dark dark:text-white">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        className="fill-current"
                      >
                        <path d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7187 3.875 13.2812 2.4375C10.3437 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5937 13.2187 13.1875L18.75 17.6562C18.8437 17.75 18.9687 17.7812 19.0937 17.7812C19.25 17.7812 19.4062 17.7187 19.5312 17.5937C19.6875 17.3437 19.6562 17 19.4062 16.8125ZM3.375 12.3437C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7187 11.125 12.5 12.3437C10 14.8437 5.90625 14.8437 3.375 12.3437Z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar4;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:mx-6 lg:inline-flex lg:py-6"
      >
        {children}
      </a>
    </li>
  );
};
