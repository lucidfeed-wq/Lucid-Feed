import { useState, useRef, useEffect } from "react";

const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative z-20" ref={searchRef}>
        <div className="flex max-w-[200px] justify-end">
          <button
            onClick={toggleDropdown}
            className="text-dark flex items-center justify-center dark:text-white"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path d="M24.9437 22.6281L18.2406 17.1843C21.0031 13.4062 20.7187 8.00308 17.2656 4.59058C15.4375 2.76245 13 1.74683 10.4 1.74683C7.79999 1.74683 5.36249 2.76245 3.53437 4.59058C-0.243756 8.3687 -0.243756 14.5437 3.53437 18.3218C5.36249 20.15 7.79999 21.1656 10.4 21.1656C12.8781 21.1656 15.1937 20.2312 17.0219 18.5656L23.8062 24.05C23.9687 24.1718 24.1719 24.2531 24.375 24.2531C24.6594 24.2531 24.9031 24.1312 25.0656 23.9281C25.3906 23.5218 25.35 22.9531 24.9437 22.6281ZM10.4 19.3375C8.28749 19.3375 6.33749 18.525 4.83437 17.0218C1.74687 13.9343 1.74687 8.93745 4.83437 5.89058C6.33749 4.38745 8.28749 3.57495 10.4 3.57495C12.5125 3.57495 14.4625 4.38745 15.9656 5.89058C19.0531 8.97808 19.0531 13.975 15.9656 17.0218C14.5031 18.525 12.5125 19.3375 10.4 19.3375Z" />
            </svg>
          </button>
        </div>

        <div
          className={`absolute top-full right-0 mt-[23px] w-[330px] ${isOpen ? "block" : "hidden"}`}
        >
          <form className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search Components or UI"
              className="text-body-color shadow-1 focus:border-primary dark:bg-dark-2 dark:text-dark-6 w-full rounded-md border border-transparent bg-white py-4 pr-8 pl-5 outline-hidden focus-visible:shadow-none dark:shadow-none"
            />
            <button className="text-body-color absolute top-1/2 right-5 -translate-y-1/2">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M24.9437 22.6281L18.2406 17.1843C21.0031 13.4062 20.7187 8.00308 17.2656 4.59058C15.4375 2.76245 13 1.74683 10.4 1.74683C7.79999 1.74683 5.36249 2.76245 3.53437 4.59058C-0.243756 8.3687 -0.243756 14.5437 3.53437 18.3218C5.36249 20.15 7.79999 21.1656 10.4 21.1656C12.8781 21.1656 15.1937 20.2312 17.0219 18.5656L23.8062 24.05C23.9687 24.1718 24.1719 24.2531 24.375 24.2531C24.6594 24.2531 24.9031 24.1312 25.0656 23.9281C25.3906 23.5218 25.35 22.9531 24.9437 22.6281ZM10.4 19.3375C8.28749 19.3375 6.33749 18.525 4.83437 17.0218C1.74687 13.9343 1.74687 8.93745 4.83437 5.89058C6.33749 4.38745 8.28749 3.57495 10.4 3.57495C12.5125 3.57495 14.4625 4.38745 15.9656 5.89058C19.0531 8.97808 19.0531 13.975 15.9656 17.0218C14.5031 18.525 12.5125 19.3375 10.4 19.3375Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
