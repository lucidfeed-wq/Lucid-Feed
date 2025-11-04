import logoWhite from "../../assets/images/logo/logo-white.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useEffect, useState, useRef } from "react";

const navList = [
  {
    link: "#",
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
      className={`fixed top-0 left-0 z-9999 w-full ${
        sticky ? "bg-dark py-2" : "py-6"
      }`}
    >
      <div className="container mx-auto">
        <div className="rounded-full border border-transparent bg-linear-to-t from-transparent to-white/10 px-5 backdrop-blur-[10px]">
          <div className="relative flex items-center justify-between -mx-4">
            <div className="max-w-full px-4 w-60">
              <Link
                to="/"
                className={`${sticky ? "py-1" : "py-5"} block w-full`}
              >
                <img src={logoWhite} alt="logo" className="block" />
              </Link>
            </div>

            <div className="flex items-center justify-between w-full px-4">
              <div ref={navRef}>
                <button
                  onClick={handleNavbarToggle}
                  className={`ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden ${
                    navbarOpen ? "navbarTogglerActive" : ""
                  }`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>

                <div>
                  <nav
                    className={`bg-dark-2 absolute top-full right-4 z-40 w-full max-w-[250px] rounded-lg px-6 py-4 shadow-sm lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${navbarOpen ? "" : "hidden"}`}
                  >
                    <ul className="block lg:flex lg:gap-2">
                      {navList.map((item, index) => (
                        <li key={index}>
                          <Link
                            to={item.link}
                            className="flex rounded-full border border-transparent px-3.5 py-1.5 text-base font-medium text-white/50 hover:border-white/15 hover:bg-white/5 hover:text-white lg:inline-flex"
                          >
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="justify-end hidden gap-3 pr-16 sm:flex lg:pr-0">
                <Link
                  to="#"
                  className="hover:text-primary rounded-full px-5 py-2.5 text-base font-medium text-white"
                >
                  Login
                </Link>
                <Link
                  to="#"
                  className="text-dark rounded-full bg-white px-5 py-2.5 text-base font-medium hover:bg-white/90"
                >
                  Sign Up
                </Link>
              </div>
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
