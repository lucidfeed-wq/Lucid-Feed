import React, { useState } from "react";

const Navbar5 = () => {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <div
        className={`w-full bg-linear-to-r from-primary to-secondary py-3 ${
          !showAlert && "hidden"
        }`}
      >
        <div className="container mx-auto">
          <div className="relative w-full">
            <p className="text-center text-sm font-medium text-white">
              50% Flat Discount on TailGrids UI - Grab it Now!
            </p>
            <button
              onClick={() => setShowAlert(!showAlert)}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M17 7L7 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 7L17 17L7 7Z"
                    fill="white"
                  />
                  <path
                    d="M7 7L17 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
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
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-secondary focus:ring-2 lg:hidden`}
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
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <div className="flex justify-end">
                  <a
                    href="/#"
                    className="inline-block whitespace-nowrap rounded-md border border-secondary px-7 py-3 text-base font-medium text-secondary transition hover:bg-secondary hover:text-white"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar5;

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
