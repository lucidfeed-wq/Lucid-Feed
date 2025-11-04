import React, { useState } from "react";

function NavbarTwo() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-dark py-12">
      <div className="container mx-auto">
        <div className="rounded-full border border-transparent bg-linear-to-t from-transparent to-white/10 px-5 backdrop-blur-[10px]">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="#" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="block"
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
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-dark-2 px-6 py-4 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                    !open && "hidden"
                  }`}
                >
                  <ul className="block lg:flex lg:gap-2">
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
                      >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:border-white/15 flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:bg-white/5 hover:text-white lg:inline-flex"
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
                  className="rounded-full px-5 py-2.5 text-base font-medium text-white hover:text-primary"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white px-5 py-2.5 text-base font-medium text-dark hover:bg-white/90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarTwo;
