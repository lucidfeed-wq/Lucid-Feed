import React, { useState } from "react";

const Navbar3 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-primary">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
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
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none lg:dark:bg-transparent ${
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
                  className="w-full rounded-sm border border-transparent bg-[#FCFDFE]/[.2] py-2.5 pl-12 pr-5 text-white placeholder-white/50 outline-hidden focus:border-white focus-visible:shadow-none"
                />
                <button className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1062 19.1469L15.4344 14.5406C17.7719 11.3437 17.5312 6.77187 14.6094 3.88437C13.0625 2.33749 11 1.47812 8.79999 1.47812C6.59999 1.47812 4.53749 2.33749 2.99061 3.88437C-0.206262 7.08124 -0.206262 12.3062 2.99061 15.5031C4.53749 17.05 6.59999 17.9094 8.79999 17.9094C10.8969 17.9094 12.8562 17.1187 14.4031 15.7094L20.1437 20.35C20.2812 20.4531 20.4531 20.5219 20.625 20.5219C20.8656 20.5219 21.0719 20.4187 21.2094 20.2469C21.4844 19.9031 21.45 19.4219 21.1062 19.1469ZM8.79999 16.3625C7.01249 16.3625 5.36249 15.675 4.09061 14.4031C1.47811 11.7906 1.47811 7.56249 4.09061 4.98437C5.36249 3.71249 7.01249 3.02499 8.79999 3.02499C10.5875 3.02499 12.2375 3.71249 13.5094 4.98437C16.1219 7.59687 16.1219 11.825 13.5094 14.4031C12.2719 15.675 10.5875 16.3625 8.79999 16.3625Z"
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
  );
};

export default Navbar3;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex lg:py-6 lg:text-white/80 lg:hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};
