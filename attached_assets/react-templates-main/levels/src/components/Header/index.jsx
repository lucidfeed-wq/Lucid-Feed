import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-white.svg";
import country from "../../assets/images/countries/usa.svg";
import UserDropdown from "./UserDropdown.jsx";
import NavDropdown from "./NavDropdown.jsx";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <header className="w-full bg-primary">
        <div className="relative mx-auto w-full pl-[60px] md:pl-[70px] xl:pl-0">
          <button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="absolute flex items-center justify-center text-white -translate-y-1/2 rounded-sm top-1/2 left-4 h-9 w-9 bg-white/8 xl:hidden"
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

          <div className="flex items-center justify-between px-4 xl:px-[30px]">
            <div className="mr-4 max-w-[100px] lg:mr-12">
              <Link to="/" className="block py-4">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center mr-4">
                <NavDropdown />

                <div className="relative mr-11 hidden w-full max-w-[250px] lg:block">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 text-sm font-medium text-white border border-transparent rounded-sm h-9 bg-white/8 placeholder-white/50 outline-hidden focus:border-white"
                  />
                  <button className="absolute text-white -translate-y-1/2 opacity-50 top-1/2 left-4">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.41666 2.33268C4.16149 2.33268 2.33332 4.16085 2.33332 6.41602C2.33332 8.67118 4.16149 10.4993 6.41666 10.4993C8.67182 10.4993 10.5 8.67118 10.5 6.41602C10.5 4.16085 8.67182 2.33268 6.41666 2.33268ZM1.16666 6.41602C1.16666 3.51652 3.51716 1.16602 6.41666 1.16602C9.31615 1.16602 11.6667 3.51652 11.6667 6.41602C11.6667 9.31551 9.31615 11.666 6.41666 11.666C3.51716 11.666 1.16666 9.31551 1.16666 6.41602Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.3 9.29976C9.52781 9.07195 9.89716 9.07195 10.125 9.29976L12.6625 11.8373C12.8903 12.0651 12.8903 12.4344 12.6625 12.6622C12.4347 12.89 12.0653 12.89 11.8375 12.6622L9.3 10.1247C9.0722 9.89691 9.0722 9.52757 9.3 9.29976Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-end">
                  <div className="relative hidden mr-7 sm:block">
                    <div className="w-6 h-4">
                      <img
                        src={country}
                        alt="country"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="relative hidden mr-3 sm:block">
                    <button>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.80126 1.80062C2.20759 1.39429 2.75869 1.16602 3.33332 1.16602H5.33332C5.79356 1.16602 6.16666 1.53911 6.16666 1.99935C6.16666 2.45959 5.79356 2.83268 5.33332 2.83268H3.33332C3.20071 2.83268 3.07354 2.88536 2.97977 2.97913C2.886 3.0729 2.83332 3.20007 2.83332 3.33268V5.33268C2.83332 5.79292 2.46023 6.16602 1.99999 6.16602C1.53975 6.16602 1.16666 5.79292 1.16666 5.33268V3.33268C1.16666 2.75805 1.39493 2.20695 1.80126 1.80062ZM9.83332 1.99935C9.83332 1.53911 10.2064 1.16602 10.6667 1.16602H12.6667C13.2413 1.16602 13.7924 1.39429 14.1987 1.80062C14.605 2.20695 14.8333 2.75805 14.8333 3.33268V5.33268C14.8333 5.79292 14.4602 6.16602 14 6.16602C13.5398 6.16602 13.1667 5.79292 13.1667 5.33268V3.33268C13.1667 3.20007 13.114 3.0729 13.0202 2.97913C12.9264 2.88536 12.7993 2.83268 12.6667 2.83268H10.6667C10.2064 2.83268 9.83332 2.45959 9.83332 1.99935ZM1.99999 9.83268C2.46023 9.83268 2.83332 10.2058 2.83332 10.666V12.666C2.83332 12.7986 2.886 12.9258 2.97977 13.0196C3.07354 13.1133 3.20072 13.166 3.33332 13.166H5.33332C5.79356 13.166 6.16666 13.5391 6.16666 13.9993C6.16666 14.4596 5.79356 14.8327 5.33332 14.8327H3.33332C2.75869 14.8327 2.20759 14.6044 1.80126 14.1981C1.39493 13.7918 1.16666 13.2407 1.16666 12.666V10.666C1.16666 10.2058 1.53975 9.83268 1.99999 9.83268ZM14 9.83268C14.4602 9.83268 14.8333 10.2058 14.8333 10.666V12.666C14.8333 13.2407 14.605 13.7918 14.1987 14.1981C13.7924 14.6044 13.2413 14.8327 12.6667 14.8327H10.6667C10.2064 14.8327 9.83332 14.4596 9.83332 13.9993C9.83332 13.5391 10.2064 13.166 10.6667 13.166H12.6667C12.7993 13.166 12.9264 13.1133 13.0202 13.0196C13.114 12.9258 13.1667 12.7986 13.1667 12.666V10.666C13.1667 10.2058 13.5398 9.83268 14 9.83268Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="relative hidden mr-4 sm:block">
                    <Link to="#" className="relative block">
                      <span className="absolute -top-2 -right-[6px] block rounded-full bg-red-400 px-[6px] text-xs font-medium text-white">
                        3
                      </span>
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
                          d="M5.87524 2.54253C6.9692 1.44857 8.45293 0.833984 10 0.833984C11.5471 0.833984 13.0309 1.44857 14.1248 2.54253C15.2188 3.63649 15.8334 5.12022 15.8334 6.66732C15.8334 9.4612 16.4309 11.1962 16.9816 12.2058C17.2581 12.7127 17.5273 13.0452 17.7144 13.2426C17.8081 13.3416 17.8817 13.4072 17.9261 13.4441C17.9483 13.4626 17.9632 13.474 17.9696 13.4787C17.9706 13.4795 17.9714 13.4801 17.9719 13.4805C18.2707 13.6857 18.4029 14.0611 18.2976 14.4088C18.1912 14.7603 17.8672 15.0007 17.5 15.0007H2.50002C2.1328 15.0007 1.80886 14.7603 1.70245 14.4088C1.59716 14.0611 1.72936 13.6857 2.0281 13.4805C2.02868 13.4801 2.02948 13.4795 2.03048 13.4787C2.0369 13.474 2.05177 13.4626 2.07396 13.4441C2.11831 13.4072 2.19196 13.3416 2.28569 13.2426C2.47271 13.0452 2.74195 12.7127 3.01844 12.2058C3.56913 11.1962 4.16669 9.4612 4.16669 6.66732C4.16669 5.12022 4.78127 3.63649 5.87524 2.54253ZM2.03652 13.4748C2.03659 13.4747 2.03665 13.4747 2.03672 13.4746C2.03672 13.4746 2.03671 13.4747 2.03671 13.4747L2.03652 13.4748ZM4.29113 13.334H15.7089C15.6455 13.2301 15.5819 13.1201 15.5184 13.0039C14.8191 11.7218 14.1667 9.70677 14.1667 6.66732C14.1667 5.56225 13.7277 4.50244 12.9463 3.72104C12.1649 2.93964 11.1051 2.50065 10 2.50065C8.89496 2.50065 7.83515 2.93964 7.05375 3.72104C6.27234 4.50244 5.83336 5.56225 5.83336 6.66732C5.83336 9.70677 5.18091 11.7218 4.4816 13.0039C4.41819 13.1201 4.35453 13.2301 4.29113 13.334Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.14018 16.7787C8.53829 16.5477 9.04822 16.6832 9.27916 17.0813C9.35241 17.2076 9.45756 17.3124 9.58406 17.3853C9.71057 17.4582 9.854 17.4965 9.99999 17.4965C10.146 17.4965 10.2894 17.4582 10.4159 17.3853C10.5424 17.3124 10.6476 17.2076 10.7208 17.0813C10.9518 16.6832 11.4617 16.5477 11.8598 16.7787C12.2579 17.0096 12.3934 17.5195 12.1625 17.9176C11.9427 18.2965 11.6273 18.6109 11.2478 18.8295C10.8683 19.0481 10.438 19.1632 9.99999 19.1632C9.56202 19.1632 9.13173 19.0481 8.75221 18.8295C8.37269 18.6109 8.05725 18.2965 7.83749 17.9176C7.60656 17.5195 7.74208 17.0096 8.14018 16.7787Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>

                  <UserDropdown />
                </div>
              </div>
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
