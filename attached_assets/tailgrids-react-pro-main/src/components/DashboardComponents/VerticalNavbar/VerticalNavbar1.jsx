import React, { useEffect, useRef, useState } from "react";

const VerticalNavbar = () => {
  return (
    <section className="h-screen bg-gray-2">
      <div className="flex h-screen w-full max-w-[300px] flex-col justify-between overflow-y-scroll bg-white shadow-card">
        <div>
          <div className="px-10 pt-10 pb-9">
            <a href="/#">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
                alt="logo"
              />
            </a>
          </div>

          <nav>
            <ul>
              <NavItem link="/#" menu="Home" />
              <NavItem link="/#" menu="Dashboard" />
              <NavItem link="/#" menu="Products" submenu>
                <DropdownItem link="/#" menu="Dropdown One" />
                <DropdownItem link="/#" menu="Dropdown Two" />
                <DropdownItem link="/#" menu="Dropdown Three" />
              </NavItem>
              <NavItem link="/#" menu="Messages" />
              <NavItem link="/#" menu="Order" />
              <NavItem link="/#" menu="Calendar " />
              <NavItem link="/#" menu="Static  " />
              <NavItem link="/#" menu="Documents  " />
              <Divider />
              <NavItem link="/#" menu="Chat " />
              <NavItem link="/#" menu="Settings   " />
              <NavItem link="/#" menu="Log out  " />
            </ul>
          </nav>
        </div>
        <div className="p-10">
          <div className="flex items-center">
            <div className="mr-4 h-[50px] w-full max-w-[50px] rounded-full">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-05.jpg"
                alt="profile"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div>
              <h6 className="text-base font-medium text-body-color">
                Musharof
              </h6>
              <p className="text-sm text-body-color">hello@tailgrids.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalNavbar;

const NavItem = ({ menu, link, submenu, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <li className="relative">
      <a
        href={link}
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`${
          dropdownOpen
            ? "border-primary bg-gray-2 text-primary"
            : "border-transparent text-body-color"
        } relative flex items-center border-r-4 py-[10px] pl-10 pr-11 text-base font-medium duration-200 hover:border-primary hover:bg-gray-2 hover:text-primary border-transparent text-body-color`}
      >
        {menu}
        {submenu && (
          <span
            className={`${
              dropdownOpen === true ? "rotate-0" : "rotate-180"
            } absolute top-1/2 right-10 -translate-y-1/2`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5899 13.0899C15.2645 13.4153 14.7368 13.4153 14.4114 13.0899L10.0006 8.67916L5.58991 13.0899C5.26447 13.4153 4.73683 13.4153 4.41139 13.0899C4.08596 12.7645 4.08596 12.2368 4.41139 11.9114L9.41139 6.9114C9.73683 6.58596 10.2645 6.58596 10.5899 6.9114L15.5899 11.9114C15.9153 12.2368 15.9153 12.7645 15.5899 13.0899Z"
              ></path>
            </svg>
          </span>
        )}
      </a>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`${dropdownOpen === true ? "block" : "hidden"} `}
      >
        <ul className="py-1 pl-14 pr-10">{children}</ul>
      </div>
    </li>
  );
};

const DropdownItem = ({ link, menu }) => {
  return (
    <li>
      <a
        href={link}
        className="flex items-center border-r-4 border-transparent py-[10px] text-base font-medium text-body-color duration-200 hover:text-primary"
      >
        {menu}
      </a>
    </li>
  );
};

const Divider = () => {
  return <div className="mx-10 my-3 h-[1px] bg-[#e7e7e7]"></div>;
};
