import { useState, useRef, useEffect } from "react";

const DropdownOne = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-toggle")
      ) {
        setOpenDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative">
        <button
          onClick={handleDropDownToggle}
          className="text-body-color dark:text-dark-6 dropdown-toggle"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" />
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
            <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" />
          </svg>
        </button>

        <div ref={dropdownRef}>
          {openDropDown && (
            <div
              className={`shadow-card dark:bg-dark absolute top-full right-0 z-40 w-[150px] space-y-1 rounded-sm bg-white p-2 ${openDropDown ? "block" : "hidden"}`}
            >
              <button className="text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2 w-full rounded-sm px-3 py-1.5 text-left text-sm">
                Edit
              </button>
              <button className="text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2 w-full rounded-sm px-3 py-1.5 text-left text-sm">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropdownOne;
