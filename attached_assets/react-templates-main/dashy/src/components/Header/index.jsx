import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown.jsx";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <header className="w-full bg-white dark:bg-dark">
        <div className="relative flex items-center justify-end bg-white py-3 pl-[70px] pr-3 dark:bg-dark sm:justify-between md:pl-20 md:pr-8 xl:pl-8">
          <button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="absolute left-4 top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-lg
          border border-stroke bg-white text-dark hover:bg-gray dark:border-dark-3 dark:bg-dark-2 dark:text-white
          dark:hover:bg-dark-3 xl:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 11.175H1.5C1.05 11.175 0.637497 11.55 0.637497 12.0375C0.637497 12.4875 1.0125 12.9 1.5 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"
                fill="currentColor"
              />
              <path
                d="M22.5 17.55H1.5C1.05 17.55 0.637497 17.925 0.637497 18.4125C0.637497 18.9 1.0125 19.275 1.5 19.275H22.5C22.95 19.275 23.3625 18.9 23.3625 18.4125C23.3625 17.925 22.95 17.55 22.5 17.55Z"
                fill="currentColor"
              />
              <path
                d="M1.5 6.44998H22.5C22.95 6.44998 23.3625 6.07498 23.3625 5.58748C23.3625 5.09998 22.9875 4.72498 22.5 4.72498H1.5C1.05 4.72498 0.637497 5.09998 0.637497 5.58748C0.637497 6.07498 1.05 6.44998 1.5 6.44998Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <div className="hidden sm:block">
            <div className="flex items-center">
              <span className="mr-4 text-body-color dark:text-dark-6">
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
                    d="M9.16666 3.33268C5.94499 3.33268 3.33332 5.94435 3.33332 9.16602C3.33332 12.3877 5.94499 14.9993 9.16666 14.9993C12.3883 14.9993 15 12.3877 15 9.16602C15 5.94435 12.3883 3.33268 9.16666 3.33268ZM1.66666 9.16602C1.66666 5.02388 5.02452 1.66602 9.16666 1.66602C13.3088 1.66602 16.6667 5.02388 16.6667 9.16602C16.6667 13.3082 13.3088 16.666 9.16666 16.666C5.02452 16.666 1.66666 13.3082 1.66666 9.16602Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2851C13.6112 12.9597 14.1388 12.9597 14.4642 13.2851L18.0892 16.9101C18.4147 17.2355 18.4147 17.7632 18.0892 18.0886C17.7638 18.414 17.2362 18.414 16.9107 18.0886L13.2857 14.4636C12.9603 14.1382 12.9603 13.6105 13.2857 13.2851Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent text-base text-body-color outline-hidden dark:text-dark-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <div className="mr-5 hidden md:block">
                <Link
                  to="#"
                  className="text-body-color hover:text-primary dark:text-dark-6"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.58334 4.58333C4.07708 4.58333 3.66668 4.99374 3.66668 5.5V18.3333C3.66668 18.8396 4.07708 19.25 4.58334 19.25H17.4167C17.9229 19.25 18.3333 18.8396 18.3333 18.3333V5.5C18.3333 4.99374 17.9229 4.58333 17.4167 4.58333H4.58334ZM1.83334 5.5C1.83334 3.98122 3.06456 2.75 4.58334 2.75H17.4167C18.9355 2.75 20.1667 3.98122 20.1667 5.5V18.3333C20.1667 19.8521 18.9355 21.0833 17.4167 21.0833H4.58334C3.06456 21.0833 1.83334 19.8521 1.83334 18.3333V5.5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.6667 0.916016C15.1729 0.916016 15.5833 1.32642 15.5833 1.83268V5.49935C15.5833 6.00561 15.1729 6.41602 14.6667 6.41602C14.1604 6.41602 13.75 6.00561 13.75 5.49935V1.83268C13.75 1.32642 14.1604 0.916016 14.6667 0.916016Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.33332 0.916016C7.83958 0.916016 8.24999 1.32642 8.24999 1.83268V5.49935C8.24999 6.00561 7.83958 6.41602 7.33332 6.41602C6.82706 6.41602 6.41666 6.00561 6.41666 5.49935V1.83268C6.41666 1.32642 6.82706 0.916016 7.33332 0.916016Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.83334 9.16667C1.83334 8.66041 2.24375 8.25 2.75001 8.25H19.25C19.7563 8.25 20.1667 8.66041 20.1667 9.16667C20.1667 9.67293 19.7563 10.0833 19.25 10.0833H2.75001C2.24375 10.0833 1.83334 9.67293 1.83334 9.16667Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>

              <div className="relative mr-5 hidden md:block">
                <Link
                  to="#"
                  className="text-body-color hover:text-primary dark:text-dark-6"
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.05024 4.05025C8.36299 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14349 19 9C19 12.3527 19.7171 14.4346 20.3779 15.6461C20.7097 16.2544 21.0328 16.6535 21.2572 16.8904C21.3697 17.0091 21.458 17.0878 21.5113 17.1322C21.5379 17.1544 21.5557 17.168 21.5634 17.1737C21.5646 17.1746 21.5656 17.1753 21.5663 17.1758C21.9248 17.4221 22.0834 17.8725 21.9571 18.2898C21.8294 18.7115 21.4407 19 21 19H2.99999C2.55932 19 2.17059 18.7115 2.04289 18.2898C1.91655 17.8725 2.07519 17.4221 2.43368 17.1758C2.43438 17.1753 2.43533 17.1746 2.43653 17.1737C2.44423 17.168 2.46209 17.1544 2.48871 17.1322C2.54192 17.0878 2.63031 17.0091 2.74278 16.8904C2.96721 16.6535 3.2903 16.2544 3.62209 15.6461C4.28292 14.4346 4.99999 12.3527 4.99999 9C4.99999 7.14348 5.73748 5.36301 7.05024 4.05025ZM2.44378 17.169C2.44386 17.1689 2.44394 17.1688 2.44402 17.1688C2.44402 17.1688 2.44401 17.1688 2.44401 17.1688L2.44378 17.169ZM5.14931 17H18.8507C18.7746 16.8753 18.6982 16.7434 18.6221 16.6039C17.7829 15.0654 17 12.6473 17 9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5978 4.52678 13.3261 4 12 4C10.6739 4 9.40213 4.52678 8.46445 5.46447C7.52677 6.40215 6.99999 7.67392 6.99999 9C6.99999 12.6473 6.21705 15.0654 5.37788 16.6039C5.30178 16.7434 5.2254 16.8753 5.14931 17Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.76823 21.1352C10.246 20.858 10.8579 21.0207 11.135 21.4984C11.2229 21.6499 11.3491 21.7757 11.5009 21.8632C11.6527 21.9506 11.8248 21.9966 12 21.9966C12.1752 21.9966 12.3473 21.9506 12.4991 21.8632C12.6509 21.7757 12.7771 21.6499 12.865 21.4984C13.1421 21.0207 13.754 20.858 14.2318 21.1352C14.7095 21.4123 14.8721 22.0242 14.595 22.5019C14.3313 22.9566 13.9528 23.3339 13.4973 23.5962C13.0419 23.8586 12.5256 23.9966 12 23.9966C11.4744 23.9966 10.9581 23.8586 10.5027 23.5962C10.0472 23.3339 9.66872 22.9566 9.405 22.5019C9.12788 22.0242 9.2905 21.4123 9.76823 21.1352Z"
                      fill="currentColor"
                    />
                    <circle
                      cx="17"
                      cy="4"
                      r="3.5"
                      fill="#DC3545"
                      stroke="white"
                    />
                  </svg>
                </Link>
              </div>

              <div className="relative mr-5 hidden md:block">
                <Link
                  to="#"
                  className="text-body-color hover:text-primary dark:text-dark-6"
                >
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.18076 5.42662C1.49748 4.97417 2.12101 4.86414 2.57346 5.18085L12 11.7794L21.4265 5.18085C21.879 4.86414 22.5025 4.97417 22.8192 5.42662C23.1359 5.87907 23.0259 6.5026 22.5735 6.81932L12.5735 13.8193C12.2291 14.0603 11.7709 14.0603 11.4265 13.8193L1.42653 6.81932C0.974083 6.5026 0.864048 5.87907 1.18076 5.42662Z"
                      fill="currentColor"
                    />
                    <circle
                      cx="22"
                      cy="4"
                      r="3.5"
                      fill="#DC3545"
                      stroke="white"
                    />
                  </svg>
                </Link>
              </div>

              <UserDropdown />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Header;
