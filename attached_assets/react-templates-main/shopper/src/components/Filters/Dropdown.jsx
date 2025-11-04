import PropTypes from "prop-types";

import { useRef, useState, useRef } from "react";

const Dropdown = ({ name, options, selectedOption, toggleOptionSelect }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropDownToggle = () => {
    setOpenDropDown(!openDropDown);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mb-4 inline-flex items-center md:mb-0 lg:mr-[22px]">
        <span className="text-dark mr-4 text-base font-medium dark:text-white">
          {name}
        </span>
        <div className="relative">
          <button
            onClick={handleDropDownToggle}
            className="border-stroke text-dark dark:border-dark-3 inline-flex items-center gap-[6px] rounded-[5px] border bg-transparent py-[7px] pr-[14px] pl-4 text-base font-medium dark:text-white"
          >
            {selectedOption
              ? options.find((option) => option.value === selectedOption)
                  ?.name || selectedOption
              : "Please select"}

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`fill-current duration-200 ease-out ${openDropDown ? "rotate-180" : ""}`}
            >
              <path
                d="M7.00001 9.97495C6.86876 9.97495 6.75938 9.9312 6.65001 9.8437L1.61876 4.89995C1.42188 4.70308 1.42188 4.39683 1.61876 4.19995C1.81563 4.00308 2.12188 4.00308 2.31876 4.19995L7.00001 8.77183L11.6813 4.1562C11.8781 3.95933 12.1844 3.95933 12.3813 4.1562C12.5781 4.35308 12.5781 4.65933 12.3813 4.8562L7.35001 9.79995C7.24063 9.90933 7.13126 9.97495 7.00001 9.97495Z"
                fill=""
              />
            </svg>
          </button>
          {openDropDown && (
            <div ref={dropdownRef}>
              <div className="border-stroke dark:border-dark-3 dark:bg-dark-2 absolute top-full left-0 mt-2 w-full max-w-[150px] min-w-[150px] rounded-[5px] border bg-white py-5">
                <ul className="flex flex-col">
                  {options.map((option, optionIndex) => (
                    <li
                      key={optionIndex}
                      className="text-body-color hover:text-primary dark:text-dark-6 dark:hover:bg-dark-3 cursor-pointer px-5 py-[7px] text-base hover:bg-[#F5F7FD]"
                      onClick={() => toggleOptionSelect(optionIndex)}
                    >
                      {option.name || option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  selectedOption: PropTypes.string,
  toggleOptionSelect: PropTypes.func.isRequired,
};

export default Dropdown;
