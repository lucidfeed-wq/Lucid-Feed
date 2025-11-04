import React, { useEffect, useRef, useState } from "react";

const HorizontalMenu6 = () => {
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
    <header className="bg-gray-2 py-16 dark:bg-dark">
      <div className="mx-auto w-full px-4 xl:container">
        <div className="flex items-center justify-between bg-primary px-4 xl:px-[30px]">
          <div className="mr-4 max-w-[100px] lg:mr-12">
            <a href="/#" className="block py-4">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="mr-4 flex items-center">
              <div className="group relative mr-4">
                <button
                  ref={trigger}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/[8%] text-white"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <g clipPath="url(#clip0_1052_7440)">
                      <path d="M19.3854 9.3125H1.88538C1.51038 9.3125 1.16663 9.625 1.16663 10.0312C1.16663 10.4062 1.47913 10.75 1.88538 10.75H19.3854C19.7604 10.75 20.1041 10.4375 20.1041 10.0312C20.1041 9.625 19.7604 9.3125 19.3854 9.3125Z" />
                      <path d="M19.3854 14.625H1.88538C1.51038 14.625 1.16663 14.9375 1.16663 15.3437C1.16663 15.75 1.47913 16.0625 1.88538 16.0625H19.3854C19.7604 16.0625 20.1041 15.75 20.1041 15.3437C20.1041 14.9375 19.7604 14.625 19.3854 14.625Z" />
                      <path d="M1.88538 5.375H19.3854C19.7604 5.375 20.1041 5.0625 20.1041 4.65625C20.1041 4.25 19.7916 3.9375 19.3854 3.9375H1.88538C1.51038 3.9375 1.16663 4.25 1.16663 4.65625C1.16663 5.0625 1.51038 5.375 1.88538 5.375Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1052_7440">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.635376)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <nav
                  ref={dropdown}
                  onFocus={() => setDropdownOpen(true)}
                  onBlur={() => setDropdownOpen(false)}
                  className={`${
                    dropdownOpen === true
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  } absolute left-0 mt-2 w-[250px] rounded bg-primary shadow-card-2 duration-200`}
                >
                  <ul className="space-y-5 px-5 py-6">
                    <NavItem link="/#" menu="Dashboard" />
                    <NavItem link="/#" menu="Products" />
                    <NavItem link="/#" menu="Analytics" />
                    <NavItem link="/#" menu="Support" />
                  </ul>
                </nav>
              </div>
              <div className="relative mr-11 hidden w-full max-w-[250px] lg:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-9 w-full rounded-sm border border-transparent bg-white/[0.08] pl-10 pr-4 text-sm font-medium text-white/50 outline-hidden focus:border-white"
                />
                <button className="absolute left-[14px] top-1/2 -translate-y-1/2 text-white/50">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.05203 2.33332C4.79687 2.33332 2.9687 4.16149 2.9687 6.41666C2.9687 8.67182 4.79687 10.5 7.05203 10.5C9.3072 10.5 11.1354 8.67182 11.1354 6.41666C11.1354 4.16149 9.3072 2.33332 7.05203 2.33332ZM1.80203 6.41666C1.80203 3.51716 4.15254 1.16666 7.05203 1.16666C9.95153 1.16666 12.302 3.51716 12.302 6.41666C12.302 9.31615 9.95153 11.6667 7.05203 11.6667C4.15254 11.6667 1.80203 9.31615 1.80203 6.41666Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.93538 9.3C10.1632 9.0722 10.5325 9.0722 10.7603 9.3L13.2978 11.8375C13.5256 12.0653 13.5256 12.4347 13.2978 12.6625C13.07 12.8903 12.7007 12.8903 12.4729 12.6625L9.93538 10.125C9.70757 9.89716 9.70757 9.52781 9.93538 9.3Z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="relative mr-7 hidden sm:block">
                <div className="h-4 w-6">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/countries/usa.svg"
                    alt="country"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative mr-3 hidden sm:block">
                <button>
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1050_7423)">
                      <path
                        d="M6.06351 0.506256H2.85726C1.90101 0.506256 1.14163 1.26563 1.14163 2.22188V5.42813C1.14163 5.76563 1.42288 6.07501 1.78851 6.07501C2.15413 6.07501 2.43538 5.79376 2.43538 5.42813V2.22188C2.40726 1.96876 2.60413 1.77188 2.85726 1.77188H6.06351C6.40101 1.77188 6.71038 1.49063 6.71038 1.12501C6.71038 0.759381 6.40101 0.506256 6.06351 0.506256Z"
                        fill="white"
                      />
                      <path
                        d="M16.4135 0.506256H13.2072C12.8697 0.506256 12.5604 0.787506 12.5604 1.15313C12.5604 1.51876 12.8416 1.80001 13.2072 1.80001H16.4135C16.6666 1.80001 16.8635 1.99688 16.8635 2.25001V5.45626C16.8635 5.79376 17.1447 6.10313 17.5104 6.10313C17.876 6.10313 18.1572 5.82188 18.1572 5.45626V2.22188C18.1572 1.26563 17.3697 0.506256 16.4135 0.506256Z"
                        fill="white"
                      />
                      <path
                        d="M17.5104 11.9531C17.1729 11.9531 16.8635 12.2344 16.8635 12.6V15.8063C16.8635 16.0594 16.6666 16.2562 16.4135 16.2562H13.2072C12.8697 16.2562 12.5604 16.5375 12.5604 16.9031C12.5604 17.2687 12.8416 17.55 13.2072 17.55H16.4135C17.3697 17.55 18.1291 16.7906 18.1291 15.8344V12.5719C18.1572 12.2344 17.8479 11.9531 17.5104 11.9531Z"
                        fill="white"
                      />
                      <path
                        d="M6.06349 16.2563H2.85724C2.60412 16.2563 2.40724 16.0594 2.40724 15.8063V12.5719C2.40724 12.2344 2.12599 11.925 1.76037 11.925C1.39474 11.925 1.11349 12.2063 1.11349 12.5719V15.7781C1.11349 16.7344 1.87287 17.4938 2.82912 17.4938H6.03537C6.37287 17.4938 6.68224 17.2125 6.68224 16.8469C6.68224 16.4813 6.40099 16.2563 6.06349 16.2563Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1050_7423">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.635376)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="relative mr-4 hidden sm:block">
                <button className="relative block">
                  <span className="absolute -right-[6px] -top-2 block rounded-full bg-[#FF6756] px-[6px] text-xs font-medium text-white">
                    3
                  </span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6354 16.5937L18.0104 15.625C17.8854 15.4375 17.8229 15.25 17.8229 15.0312V8.53125C17.8229 6.6875 17.0416 4.96875 15.6041 3.6875C14.4479 2.65625 12.9479 2 11.3541 1.875V1.25C11.3541 0.875 11.0416 0.53125 10.6354 0.53125C10.2604 0.53125 9.91663 0.84375 9.91663 1.25V1.84375C9.85413 1.84375 9.79163 1.84375 9.72913 1.875C6.10413 2.28125 3.38538 5.1875 3.38538 8.65625V15.0312C3.35413 15.3437 3.29163 15.5 3.22913 15.5937L2.63538 16.5937C2.44788 16.9062 2.44788 17.2812 2.63538 17.5937C2.82288 17.875 3.13538 18.0625 3.47913 18.0625H9.94788V18.75C9.94788 19.125 10.2604 19.4687 10.6666 19.4687C11.0416 19.4687 11.3854 19.1562 11.3854 18.75V18.0625H17.8229C18.1666 18.0625 18.4791 17.875 18.6666 17.5937C18.8541 17.2812 18.8541 16.9062 18.6354 16.5937ZM4.22913 16.6562L4.44788 16.2812C4.63538 15.9687 4.72913 15.5937 4.79163 15.1562V8.65625C4.79163 5.90625 6.97913 3.59375 9.88538 3.28125C11.6666 3.09375 13.4166 3.625 14.6979 4.75C15.8229 5.75 16.4479 7.09375 16.4479 8.53125V15.0312C16.4479 15.5 16.5729 15.9375 16.8541 16.375L17.0416 16.6562H4.22913Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div className="group relative">
                <div className="flex cursor-pointer items-center">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/avatar/image-04.jpg"
                    alt="avatar"
                    className="h-8 w-8 rounded-full border-2 border-white/20 object-cover object-center"
                  />
                  <span className="pl-[10px] pr-[5px] text-sm font-medium text-white">
                    Patrick
                  </span>
                  <span>
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.63535 9.97501C7.5041 9.97501 7.39473 9.93126 7.28535 9.84376L2.2541 4.90001C2.05723 4.70314 2.05723 4.39689 2.2541 4.20001C2.45098 4.00314 2.75723 4.00314 2.9541 4.20001L7.63535 8.77189L12.3166 4.15626C12.5135 3.95939 12.8197 3.95939 13.0166 4.15626C13.2135 4.35314 13.2135 4.65939 13.0166 4.85626L7.98535 9.80001C7.87598 9.90939 7.7666 9.97501 7.63535 9.97501Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
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

export default HorizontalMenu6;

const NavItem = ({ link, menu }) => {
  return (
    <li>
      <a
        href={link}
        className="relative block text-sm font-medium text-white opacity-70 duration-200 hover:opacity-100"
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
