import React, { useState } from "react";

function NavbarOne() {
  const [open, setOpen] = useState(false);

  return (
    <header>
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

export default NavbarOne;
