import ClickOutside from "../ClickOutside.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    link: "#",
    text: "Dashboard",
  },
  {
    link: "#",
    text: "Products",
  },
  {
    link: "#",
    text: "Analytics",
  },
  {
    link: "#",
    text: "Support",
  },
];

const NavDropdown = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="relative hidden mr-4 group sm:block">
      <button
        onClick={handleDropDownToggle}
        className="flex items-center justify-center text-white rounded-sm h-9 w-9 bg-white/8"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.45833 10.0007C1.45833 9.42535 1.9247 8.95898 2.49999 8.95898H17.5C18.0753 8.95898 18.5417 9.42535 18.5417 10.0007C18.5417 10.5759 18.0753 11.0423 17.5 11.0423H2.49999C1.9247 11.0423 1.45833 10.5759 1.45833 10.0007Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.45833 5.00065C1.45833 4.42535 1.9247 3.95898 2.49999 3.95898H17.5C18.0753 3.95898 18.5417 4.42535 18.5417 5.00065C18.5417 5.57595 18.0753 6.04232 17.5 6.04232H2.49999C1.9247 6.04232 1.45833 5.57595 1.45833 5.00065Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.45833 15.0007C1.45833 14.4254 1.9247 13.959 2.49999 13.959H17.5C18.0753 13.959 18.5417 14.4254 18.5417 15.0007C18.5417 15.5759 18.0753 16.0423 17.5 16.0423H2.49999C1.9247 16.0423 1.45833 15.5759 1.45833 15.0007Z"
            fill="white"
          />
        </svg>
      </button>

      <ClickOutside onClick={() => setOpenDropDown(false)}>
        <nav
          className={`bg-primary shadow-card-2 absolute left-0 mt-2 w-[250px] rounded-sm duration-200 ${openDropDown ? "visible top-full opacity-100" : "invisible top-[120%] opacity-0"}`}
        >
          <ul className="px-5 py-6 space-y-5">
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="relative block text-sm font-medium text-white duration-200 opacity-70 hover:opacity-100"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ClickOutside>
    </div>
  );
};

export default NavDropdown;
