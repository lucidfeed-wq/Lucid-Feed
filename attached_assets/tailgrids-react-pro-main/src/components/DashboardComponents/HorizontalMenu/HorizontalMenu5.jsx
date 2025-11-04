import React from "react";

const HorizontalMenu5 = () => {
  return (
    <header className="bg-gray-2 py-16 dark:bg-dark">
      <div className="mx-auto w-full px-4 xl:container">
        <div className="flex items-center justify-between bg-white px-4 dark:bg-dark-2 xl:px-[30px]">
          <div className="mr-4 max-w-[100px] lg:mr-12">
            <a href="/#" className="block py-4">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-primary.svg"
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
          <div className="flex w-full items-center justify-end md:justify-between">
            <div className="mr-4 hidden md:block">
              <nav>
                <ul className="flex items-center space-x-10">
                  <NavItem link="/#" menu="Dashboard" />
                  <NavItem link="/#" menu="Products" />
                  <NavItem link="/#" menu="Analytics" />
                  <NavItem link="/#" menu="Support" />
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-end">
              <div className="relative mr-9 hidden w-full max-w-[250px] lg:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-full border border-stroke bg-gray-2 py-[6px] pl-[18px] pr-8 text-sm text-body-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <g clipPath="url(#clip0_1050_7313)">
                      <path d="M13.4313 12.1844L9.82188 9.25311C11.3094 7.21874 11.1563 4.30936 9.29688 2.47186C8.31251 1.48749 7.00001 0.940613 5.60001 0.940613C4.20001 0.940613 2.88751 1.48749 1.90313 2.47186C-0.131244 4.50624 -0.131244 7.83124 1.90313 9.86561C2.88751 10.85 4.20001 11.3969 5.60001 11.3969C6.93438 11.3969 8.18126 10.8937 9.16563 9.99686L12.8188 12.95C12.9063 13.0156 13.0156 13.0594 13.125 13.0594C13.2781 13.0594 13.4094 12.9937 13.4969 12.8844C13.6719 12.6656 13.65 12.3594 13.4313 12.1844ZM5.60001 10.4125C4.46251 10.4125 3.41251 9.97499 2.60313 9.16561C0.940631 7.50311 0.940631 4.81249 2.60313 3.17186C3.41251 2.36249 4.46251 1.92499 5.60001 1.92499C6.73751 1.92499 7.78751 2.36249 8.59688 3.17186C10.2594 4.83436 10.2594 7.52499 8.59688 9.16561C7.80938 9.97499 6.73751 10.4125 5.60001 10.4125Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1050_7313">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <div className="relative mr-[18px] hidden sm:block">
                <a
                  href="/#"
                  className="relative block text-body-color hover:text-primary dark:text-dark-6"
                >
                  <span className="absolute -right-0.5 -top-0.5 block h-[10px] w-[10px] rounded-full border border-white bg-[#DC3545] dark:border-dark-2"></span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M21.6 20.076L20.85 18.96C20.7 18.744 20.625 18.528 20.625 18.276V10.788C20.625 8.66399 19.6875 6.68399 17.9625 5.20799C16.575 4.01999 14.775 3.26399 12.8625 3.11999V2.39999C12.8625 1.96799 12.4875 1.57199 12 1.57199C11.55 1.57199 11.1375 1.93199 11.1375 2.39999V3.08399C11.0625 3.08399 10.9875 3.08399 10.9125 3.11999C6.56251 3.58799 3.30001 6.93599 3.30001 10.932V18.276C3.26251 18.636 3.18751 18.816 3.11251 18.924L2.40001 20.076C2.17501 20.436 2.17501 20.868 2.40001 21.228C2.62501 21.552 3.00001 21.768 3.41251 21.768H11.175V22.56C11.175 22.992 11.55 23.388 12.0375 23.388C12.4875 23.388 12.9 23.028 12.9 22.56V21.768H20.625C21.0375 21.768 21.4125 21.552 21.6375 21.228C21.8625 20.868 21.8625 20.436 21.6 20.076ZM4.31251 20.148L4.57501 19.716C4.80001 19.356 4.91251 18.924 4.98751 18.42V10.932C4.98751 7.76399 7.61251 5.09999 11.1 4.73999C13.2375 4.52399 15.3375 5.13599 16.875 6.43199C18.225 7.58399 18.975 9.13199 18.975 10.788V18.276C18.975 18.816 19.125 19.32 19.4625 19.824L19.6875 20.148H4.31251V20.148Z" />
                  </svg>
                </a>
              </div>

              <div className="relative mr-6 hidden sm:block">
                <a
                  href="/#"
                  className="relative block text-body-color hover:text-primary dark:text-dark-6"
                >
                  <span className="absolute -right-0.5 -top-0.5 block h-[10px] w-[10px] rounded-full border border-white bg-[#DC3545] dark:border-dark-2"></span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M21 3.60001H3.00001C1.72501 3.60001 0.637512 4.65001 0.637512 5.96251V18.1125C0.637512 19.3875 1.68751 20.475 3.00001 20.475H21C22.275 20.475 23.3625 19.425 23.3625 18.1125V5.92501C23.3625 4.65001 22.275 3.60001 21 3.60001ZM21 5.28751C21.0375 5.28751 21.075 5.28751 21.1125 5.28751L12 11.1375L2.88751 5.28751C2.92501 5.28751 2.96251 5.28751 3.00001 5.28751H21ZM21 18.7125H3.00001C2.62501 18.7125 2.32501 18.4125 2.32501 18.0375V6.93751L11.1 12.5625C11.3625 12.75 11.6625 12.825 11.9625 12.825C12.2625 12.825 12.5625 12.75 12.825 12.5625L21.6 6.93751V18.075C21.675 18.45 21.375 18.7125 21 18.7125Z" />
                  </svg>
                </a>
              </div>

              <div className="group relative">
                <button className="h-8 w-8 cursor-pointer rounded-full sm:h-10 sm:w-10">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-04.jpg"
                    alt="avatar"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </button>
                <div className="invisible absolute right-0 top-[120%] mt-3 w-[200px] space-y-2 rounded-sm bg-white p-3 opacity-0 shadow-card-2 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100 dark:bg-dark-2">
                  <DropdownItem link="/#" name="Account Settings" />
                  <DropdownItem link="/#" name="Dashboard" />
                  <DropdownItem link="/#" name="Sign Out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HorizontalMenu5;

const NavItem = ({ link, menu }) => {
  return (
    <li>
      <a
        href={link}
        className="after relative block px-[2px] py-[23px] text-base font-medium text-body-color duration-200 after:absolute after:bottom-0 after:left-0 after:block after:h-0.5 after:w-full after:rounded-t hover:text-primary hover:after:bg-primary dark:text-dark-6"
      >
        {menu}
      </a>
    </li>
  );
};

const DropdownItem = ({ link, name }) => {
  return (
    <a
      href={link}
      className="block rounded-sm px-4 py-2 text-sm font-medium text-body-color hover:bg-gray-2 hover:text-primary dark:text-dark-6 dark:hover:bg-dark"
    >
      {name}
    </a>
  );
};
