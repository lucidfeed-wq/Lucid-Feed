import React, { useState } from "react";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="order-last px-4 lg:order-first lg:w-6/12 xl:w-5/12 2xl:w-4/12">
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
              className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                !open && "hidden"
              } `}
            >
              <ul className="block lg:flex">
                <ListItem NavLink="/#">Home</ListItem>
                <ListItem NavLink="/#">Payment</ListItem>
                <ListItem NavLink="/#">Features</ListItem>
              </ul>
            </nav>
          </div>
          <div className="px-4 lg:w-3/12 xl:w-3/12 2xl:w-4/12">
            <a href="/#" className="block w-[150px] max-w-full py-5 lg:mx-auto">
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
          <div className="w-full px-4 lg:w-3/12 xl:w-4/12 2xl:w-4/12">
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-6 py-2.5 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign In
              </a>
              <a
                href="/#"
                className="whitespace-nowrap rounded-md bg-dark px-6 py-2.5 text-base font-medium text-white hover:bg-dark/90 dark:bg-white dark:text-dark"
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

export default Navbar2;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
