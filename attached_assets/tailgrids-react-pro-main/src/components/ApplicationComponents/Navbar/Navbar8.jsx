import React, { useState } from "react";

const Navbar8 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
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
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-6 lg:py-0 lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem>
                    <LinkItem dropdown="true" NavLink="/#">
                      Home
                    </LinkItem>
                    <Dropdown>
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Creative Homepage"
                      />
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Business Homepage"
                      />
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Corporate Homepage"
                      />
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Personal Homepage"
                      />
                    </Dropdown>
                  </ListItem>
                  <ListItem>
                    <LinkItem NavLink="/#">Payment</LinkItem>
                  </ListItem>
                  <ListItem>
                    <LinkItem NavLink="/#">Features</LinkItem>
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-6 py-2.5 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign In
              </a>

              <a
                href="/#"
                className="rounded-md bg-primary px-6 py-2.5 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar8;

const ListItem = ({ children }) => {
  const [subMenu, setSubMenu] = useState(true);

  const childWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      subMenu: subMenu,
      setSubMenu: setSubMenu,
    });
  });

  return (
    <li className="submenu-item group relative lg:ml-12">{childWithProps}</li>
  );
};

const LinkItem = ({ children, NavLink, subMenu, setSubMenu, dropdown }) => {
  const handleClick = () => {
    event.preventDefault();
    setSubMenu(!subMenu);
  };

  return (
    <a
      href={NavLink}
      onClick={handleClick}
      className={`relative flex px-6 py-2 text-base font-medium text-body-color group-hover:text-dark dark:text-dark-6 dark:group-hover:text-white  lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 ${
        dropdown &&
        "after:absolute after:right-5 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:translate-y-[-50%] after:rotate-45 after:border-b-2 after:border-r-2 after:border-current lg:after:right-0"
      }`}
    >
      {children}
    </a>
  );
};

const Dropdown = ({ children, subMenu }) => {
  return (
    <div
      className={`relative left-0 top-full rounded-lg bg-white px-4 transition-all group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full 
      ${subMenu ? "hidden lg:block" : "block"}`}
    >
      {children}
    </div>
  );
};

const DropdownItem = ({ dropdownLink, dropdownText }) => {
  return (
    <a
      href={dropdownLink}
      className="block rounded-sm px-4 py-[10px] text-sm font-medium text-body-color hover:bg-primary hover:text-white dark:text-dark-6"
    >
      {dropdownText}
    </a>
  );
};
