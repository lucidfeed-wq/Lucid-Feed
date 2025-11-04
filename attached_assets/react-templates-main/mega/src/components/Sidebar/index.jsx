import { Link } from "react-router-dom";
import logoWhite from "../../assets/images/logo/logo-white.svg";
import logo from "../../assets/images/logo/logo.svg";
import user from "../../assets/images/avatar/image-02.jpg";
import PropTypes from "prop-types";
import { useState } from "react";

const navList = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "#",
    text: "Dashboard",
  },
  {
    link: "#",
    text: "Products",
    children: [
      {
        link: "#",
        text: "Dropdown One",
      },
      {
        link: "#",
        text: "Dropdown Two",
      },
      {
        link: "#",
        text: "Dropdown Three",
      },
    ],
  },
  {
    link: "/",
    text: "Messages",
  },
  {
    link: "/",
    text: "Order",
  },
  {
    link: "/",
    text: "Calender",
  },
  {
    link: "/",
    text: "Static",
  },
  {
    link: "/",
    text: "Documents",
  },
  {
    divider: true,
  },
  {
    link: "/",
    text: "Chat",
  },
  {
    link: "/",
    text: "Settings",
  },
  {
    link: "/",
    text: "Log out",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <div
        className={`shadow-card dark:bg-dark-2 fixed top-0 left-0 z-40 flex h-screen w-full max-w-[300px] flex-col justify-between overflow-y-scroll bg-white duration-200 xl:translate-x-0 ${sidebarOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div>
          <div className="px-10 pt-10 pb-9">
            <Link to="/">
              <img src={logo} alt="logo" className="dark:hidden" />
              <img src={logoWhite} alt="logo" className="hidden dark:block" />
            </Link>
          </div>

          <nav>
            <ul>
              {navList.map((item, index) =>
                item?.divider ? (
                  <li key={index}>
                    <div className="bg-stroke dark:bg-dark-3 mx-9 my-5 h-px"></div>
                  </li>
                ) : item?.children ? (
                  <li key={index} className="relative">
                    <Link
                      to={item.link}
                      onClick={handleDropDownToggle}
                      className={`text-body-color hover:border-primary hover:bg-primary/5 dark:text-dark-6 relative flex items-center border-r-4 py-[10px] pr-10 pl-9 text-base font-medium duration-200 ${openDropDown === true ? "border-primary bg-primary/5" : "border-transparent"} `}
                    >
                      {item.text}
                      <span
                        className={`absolute top-1/2 right-10 -translate-y-1/2 ${
                          openDropDown ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" />
                        </svg>
                      </span>
                    </Link>

                    {openDropDown && (
                      <div>
                        <ul className="py-[6px] pr-10 pl-[50px]">
                          {item?.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                to={child.link}
                                className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary flex items-center border-r-4 border-transparent py-[9px] text-base font-medium duration-200"
                              >
                                {child.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-body-color hover:border-primary hover:bg-primary/5 dark:text-dark-6 relative flex items-center border-r-4 border-transparent py-[10px] pr-10 pl-9 text-base font-medium duration-200"
                    >
                      {item.text}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="p-10">
          <div className="flex items-center">
            <div className="mr-4 h-[50px] w-full max-w-[50px] rounded-full">
              <img
                src={user}
                alt="profile"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div>
              <h6 className="text-dark text-base font-medium dark:text-white">
                Musharof
              </h6>
              <p className="text-body-color dark:text-dark-6 text-sm">
                hello@tailgrids.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleSidebarToggle}
        className={`bg-dark/80 fixed top-0 left-0 z-30 h-screen w-full xl:hidden ${sidebarOpen ? "-translate-x-full" : "translate-x-0"}`}
      ></div>
    </>
  );
};

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
