import { useState } from "react";
import ClickOutside from "../ClickOutside.jsx";

const DropdownTwo = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={handleDropDownToggle}
          className="text-body-color dark:text-dark-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <ClickOutside onClick={() => setOpenDropDown(false)}>
          <div
            className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded-sm border border-stroke bg-white p-2 shadow-card dark:border-dark-3 dark:bg-dark ${openDropDown ? "block" : "hidden"}`}
          >
            <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Edit
            </button>
            <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Delete
            </button>
          </div>
        </ClickOutside>
      </div>
    </>
  );
};

export default DropdownTwo;
