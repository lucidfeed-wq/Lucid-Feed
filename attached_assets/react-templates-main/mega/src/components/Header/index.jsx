import PropTypes from "prop-types";
import country from "../../assets/images/countries/usa.svg";
import UserDropdown from "./UserDropdown.jsx";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <header className="w-full bg-white dark:bg-dark-2">
        <div className="relative flex items-center justify-end bg-white py-3 pl-[70px] pr-3 dark:bg-dark-2 sm:justify-between md:pl-20 md:pr-8 xl:pl-8">
          <button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
            className="absolute left-4 top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-lg border border-stroke bg-white text-dark hover:bg-gray dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:bg-dark-3 xl:hidden"
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

          <div className="hidden items-center sm:flex">
            <div className="mr-3 hidden lg:block">
              <h5 className="mb-0.5 text-xl font-semibold text-dark dark:text-white">
                Hello user!
              </h5>
              <p className="text-sm text-body-color dark:text-dark-6">
                Welcome back to dashboard.
              </p>
            </div>

            <div>
              <div className="relative mr-3 w-full max-w-[250px] md:max-w-[385px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-stroke bg-gray-2 py-[10px] pl-5 pr-10 text-secondary-color outline-hidden focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2813 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1563 18.5625 19.2813 18.4063C19.5313 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2813 4.53125C14.6563 6.90625 14.6563 10.75 12.2813 13.0938C11.1563 14.25 9.625 14.875 8 14.875Z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <div className="relative">
              <button className="relative flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke text-body-color hover:bg-gray-2 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-dark">
                <span className="absolute right-3 top-[10px] block h-2 w-2 rounded-full border border-white bg-red-600 dark:border-dark-2"></span>
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
              </button>
            </div>

            <div className="relative">
              <button className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-stroke text-body-color hover:bg-gray-2 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-dark">
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                  4
                </span>
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
              </button>
            </div>

            <div className="relative hidden md:block">
              <select className="appearance-none bg-transparent pl-6 pr-5 text-sm font-medium text-body-color outline-hidden dark:text-dark-6">
                <option value="" className="dark:bg-dark-2">
                  English
                </option>
                <option value="" className="dark:bg-dark-2">
                  Hindi
                </option>
              </select>
              <img
                src={country}
                alt="usa"
                className="absolute left-0 top-1/2 h-3 w-5 -translate-y-1/2 rounded-xs"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-body-color dark:text-dark-6">
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M7.78663 9.97501C7.65538 9.97501 7.546 9.93126 7.43663 9.84376L2.40538 4.90001C2.2085 4.70314 2.2085 4.39689 2.40538 4.20001C2.60225 4.00314 2.9085 4.00314 3.10538 4.20001L7.78663 8.77189L12.4679 4.15626C12.6648 3.95939 12.971 3.95939 13.1679 4.15626C13.3648 4.35314 13.3648 4.65939 13.1679 4.85626L8.13663 9.80001C8.02725 9.90939 7.91788 9.97501 7.78663 9.97501Z" />
                </svg>
              </span>
            </div>

            <UserDropdown />
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
