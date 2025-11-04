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
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 12.5234C10 11.4189 10.8954 10.5234 12 10.5234C13.1046 10.5234 14 11.4189 14 12.5234C14 13.628 13.1046 14.5234 12 14.5234C10.8954 14.5234 10 13.628 10 12.5234Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5.52344C10 4.41887 10.8954 3.52344 12 3.52344C13.1046 3.52344 14 4.41887 14 5.52344C14 6.62801 13.1046 7.52344 12 7.52344C10.8954 7.52344 10 6.62801 10 5.52344Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 19.5234C10 18.4189 10.8954 17.5234 12 17.5234C13.1046 17.5234 14 18.4189 14 19.5234C14 20.628 13.1046 21.5234 12 21.5234C10.8954 21.5234 10 20.628 10 19.5234Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <ClickOutside onClick={() => setOpenDropDown(false)}>
          <div
            className={`absolute right-0 top-full z-40 w-[150px] space-y-1 rounded-sm bg-white p-2 shadow-card dark:bg-dark ${openDropDown ? "block" : "hidden"}`}
          >
            <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Edit
            </button>
            <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
              Delete
            </button>
          </div>
        </ClickOutside>
      </div>
    </>
  );
};

export default DropdownTwo;
