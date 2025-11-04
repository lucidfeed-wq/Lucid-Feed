import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

const navList = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "#",
    text: "About",
  },
  {
    link: "#",
    text: "Features",
  },
  {
    link: "#",
    text: "Contact",
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
      className={`bg-primary sticky top-0 left-0 z-50 w-full ${
        sticky && "bg-primary/80 shadow-xs backdrop-blur-xs"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="block w-full py-5">
              <img src={logoWhite} alt="logo" className="max-w-full" />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            <div ref={navRef}>
              <button
                onClick={handleNavbarToggle}
                className={`ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden ${
                  navbarOpen ? "navbarTogglerActive" : ""
                } `}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>

              <nav
                className={`absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow-sm lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${navbarOpen ? "" : "hidden"}`}
              >
                <ul className="block lg:flex">
                  {navList.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-dark hover:text-primary flex py-2 text-base font-medium hover:opacity-100 lg:ml-12 lg:inline-flex lg:text-white lg:hover:text-white lg:hover:opacity-50"
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
                className="bg-primary mr-3 rounded-lg px-7 py-3 text-base font-medium text-white hover:opacity-50"
              >
                Login
              </Link>
              <Link
                to="#"
                className="hover:text-dark rounded-lg bg-white/20 px-7 py-3 text-base font-medium text-white hover:bg-white/100"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
