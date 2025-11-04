import logo from "../../assets/images/logo/logo.svg";
import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

const navList = [
  {
    link: "#",
    text: "Home",
  },
  {
    link: "#",
    text: "About",
  },
  {
    link: "#",
    text: "Pricing",
  },
  {
    link: "#",
    text: "Features",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);
  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`absolute top-0 left-0 z-50 w-full ${
        sticky &&
        "dark:bg-dark/80 sticky bg-white/80 shadow-sm backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link
              to="/"
              className={`block w-full py-5 ${sticky ? "py-2" : "py-5"}`}
            >
              <img src={logo} alt="logo" className="block w-full dark:hidden" />
              <img
                src={logoWhite}
                alt="logo"
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div ref={navRef}>
              <button
                onClick={handleNavbarToggle}
                className={`ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden ${navbarOpen ? "navbarTogglerActive" : ""}`}
              >
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
              </button>

              <nav
                className={`dark:bg-dark absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11 lg:dark:bg-transparent ${navbarOpen ? "" : "hidden"}`}
              >
                <ul className="block lg:flex">
                  {navList.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-dark hover:text-primary dark:hover:text-primary flex py-2 text-base font-medium lg:ml-10 lg:inline-flex dark:text-white"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                to="#"
                className="text-dark hover:text-primary dark:hover:text-primary px-5 py-2 text-base font-medium dark:text-white"
              >
                Login
              </Link>
              <Link
                to="#"
                className="bg-dark hover:bg-body-color dark:bg-dark-2 rounded-md px-6 py-2 text-base font-medium text-white"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
