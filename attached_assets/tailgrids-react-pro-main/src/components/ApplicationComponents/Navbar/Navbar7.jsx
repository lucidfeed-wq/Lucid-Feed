import React, { useState } from "react";

const Navbar7 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-dark">
      <div className="container">
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
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-dark-2 px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
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
                  className="w-full rounded-sm border border-transparent bg-[#FCFDFE]/[.2] py-2 pl-12 pr-5 text-white placeholder-white/50 outline-hidden focus:border-stroke focus-visible:shadow-none"
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
                      d="M21.1062 19.1469L15.4344 14.5407C17.7719 11.3438 17.5312 6.7719 14.6094 3.8844C13.0625 2.33752 11 1.47815 8.79999 1.47815C6.59999 1.47815 4.53749 2.33752 2.99061 3.8844C-0.206262 7.08127 -0.206262 12.3063 2.99061 15.5031C4.53749 17.05 6.59999 17.9094 8.79999 17.9094C10.8969 17.9094 12.8562 17.1188 14.4031 15.7094L20.1437 20.35C20.2812 20.4532 20.4531 20.5219 20.625 20.5219C20.8656 20.5219 21.0719 20.4188 21.2094 20.2469C21.4844 19.9032 21.45 19.4219 21.1062 19.1469ZM8.79999 16.3625C7.01249 16.3625 5.36249 15.675 4.09061 14.4032C1.47811 11.7907 1.47811 7.56252 4.09061 4.9844C5.36249 3.71252 7.01249 3.02502 8.79999 3.02502C10.5875 3.02502 12.2375 3.71252 13.5094 4.9844C16.1219 7.5969 16.1219 11.825 13.5094 14.4032C12.2719 15.675 10.5875 16.3625 8.79999 16.3625Z"
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

export default Navbar7;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-white/70 hover:text-white lg:ml-12 lg:inline-flex lg:py-6"
        >
          {children}
        </a>
      </li>
    </>
  );
};
