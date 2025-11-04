import logo from "../../assets/images/logo/logo.svg";
import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

const navList = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "#",
    text: "Payment",
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

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      className={`dark:bg-dark sticky top-0 left-0 z-50 w-full bg-white ${
        sticky && "bg-white/80 shadow-xs backdrop-blur-xs"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <Link to="/" className="block w-full py-5">
              <img src={logo} alt="logo" className="w-full dark:hidden" />
              <img
                src={logoWhite}
                alt="logo"
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                onClick={handleNavbarToggle}
                className={`ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden ${
                  navbarOpen ? "navbarTogglerActive" : ""
                }`}
              >
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px] dark:bg-white"></span>
              </button>

              <nav
                className={`dark:bg-dark-2 absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow-sm transition-all lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${navbarOpen ? "" : "hidden"}`}
              >
                <ul className="block lg:flex">
                  {navList.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="flex py-2 text-base font-medium text-dark hover:text-primary dark:hover:text-primary lg:ml-12 lg:inline-flex dark:text-white"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="justify-end hidden pr-16 sm:flex lg:pr-0">
              <Link
                to="#"
                className="py-3 text-base font-medium text-dark hover:text-primary dark:hover:text-primary px-7 dark:text-white"
              >
                Login
              </Link>
              <Link
                to="#"
                className="py-3 text-base font-medium text-white rounded-lg bg-primary hover:bg-primary/90 px-7"
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

Navbar.propTypes = {
  navbarOpen: PropTypes.bool.isRequired,
  setNavbarOpen: PropTypes.func.isRequired,
};

export default Navbar;
