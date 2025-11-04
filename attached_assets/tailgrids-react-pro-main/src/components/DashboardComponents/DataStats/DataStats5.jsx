import React, { useEffect, useRef, useState } from "react";

const DataStats5 = () => {
  return (
    <section className="bg-gray-2 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="-mx-4 flex flex-wrap">
          <DataStatsCard
            name="Earned this month"
            number="$4,350"
            icon={
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5156 14.4688H11.4844C9.1875 14.4688 7.26562 12.6875 7.26562 10.4844C7.26562 8.28125 9.14062 6.5 11.4844 6.5H21.8438C22.4063 6.5 22.875 6.03125 22.875 5.46875C22.875 4.90625 22.4063 4.4375 21.8438 4.4375H16.9688V2.375C16.9688 1.8125 16.5 1.34375 15.9375 1.34375C15.375 1.34375 14.9062 1.8125 14.9062 2.375V4.34375H11.5313C8.0625 4.34375 5.20312 7.0625 5.20312 10.4375C5.20312 13.8125 8.01563 16.5313 11.5313 16.5313H18.5625C20.8594 16.5313 22.7813 18.3125 22.7813 20.5156C22.7813 22.7188 20.9062 24.5 18.5625 24.5H6.65625C6.09375 24.5 5.625 24.9688 5.625 25.5313C5.625 26.0938 6.09375 26.5625 6.65625 26.5625H14.8594V28.625C14.8594 29.1875 15.3281 29.6563 15.8906 29.6563C16.4531 29.6563 16.9219 29.1875 16.9219 28.625V26.6563H18.4219C21.8906 26.6563 24.75 23.9375 24.75 20.5625C24.75 17.1875 21.9844 14.4688 18.5156 14.4688Z"
                  fill="white"
                />
              </svg>
            }
          />

          <DataStatsCard
            name="New clients"
            number="350"
            icon={
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0625 16.4375C21.6562 14.75 19.875 13.5781 17.9062 12.9687C19.875 11.9375 21.1875 9.875 21.1875 7.48437C21.1875 4.0625 18.4219 1.25 14.9531 1.25C11.4844 1.25 8.76563 4.10937 8.76563 7.53125C8.76563 9.875 10.0781 11.9375 12.0469 13.0156C10.0781 13.625 8.34375 14.7969 6.89062 16.4844C4.82812 18.9219 3.65625 22.2969 3.60938 26C3.60938 26.4219 3.84375 26.7969 4.17187 26.9375C5.4375 27.5937 10.0313 29.6562 14.9531 29.6562C20.2969 29.6562 24.5625 27.5469 25.7812 26.8906C26.1094 26.7031 26.3438 26.3281 26.3438 25.9531C26.2969 22.2969 25.125 18.9219 23.0625 16.4375ZM15 3.45312C17.25 3.45312 19.125 5.28125 19.125 7.57812C19.125 9.875 17.2969 11.7031 15 11.7031C12.7031 11.7031 10.875 9.875 10.875 7.57812C10.875 5.28125 12.75 3.45312 15 3.45312ZM15 27.5937C11.1094 27.5937 7.3125 26.0937 5.76563 25.3437C5.95313 22.3906 6.89063 19.7656 8.53125 17.7969C10.2188 15.7813 12.5156 14.6562 15 14.6562C17.4844 14.6562 19.7812 15.7813 21.4687 17.7969C23.1094 19.7188 24.0937 22.3906 24.2344 25.3437C22.7813 26.0937 19.2187 27.5937 15 27.5937Z"
                  fill="white"
                />
              </svg>
            }
          />

          <DataStatsCard
            name="New sales"
            number="$4,350"
            icon={
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3906 22.9062C15.5156 22.9062 14.0156 24.4063 14.0156 26.2812C14.0156 28.1562 15.5156 29.6562 17.3906 29.6562C19.2656 29.6562 20.7656 28.1562 20.7656 26.2812C20.7656 24.4531 19.2187 22.9062 17.3906 22.9062ZM17.3906 27.5937C16.6875 27.5937 16.125 27.0312 16.125 26.3281C16.125 25.625 16.6875 25.0625 17.3906 25.0625C18.0937 25.0625 18.6562 25.625 18.6562 26.3281C18.6562 26.9844 18.0469 27.5937 17.3906 27.5937Z"
                  fill="white"
                />
                <path
                  d="M8.48437 22.9062C6.60938 22.9062 5.10938 24.4063 5.10938 26.2812C5.10938 28.1562 6.60938 29.6562 8.48437 29.6562C10.3594 29.6562 11.8594 28.1562 11.8594 26.2812C11.8594 24.4531 10.3125 22.9062 8.48437 22.9062ZM8.48437 27.5937C7.78125 27.5937 7.21875 27.0312 7.21875 26.3281C7.21875 25.625 7.78125 25.0625 8.48437 25.0625C9.1875 25.0625 9.75 25.625 9.75 26.3281C9.75 26.9844 9.1875 27.5937 8.48437 27.5937Z"
                  fill="white"
                />
                <path
                  d="M27.2812 1.34375H24.75C23.625 1.34375 22.6406 2.1875 22.5 3.3125L21.75 8.70312H3.23437C2.76562 8.70312 2.29687 8.9375 1.96874 9.3125C1.68749 9.6875 1.54687 10.2031 1.68749 10.6719C1.68749 10.7188 1.68749 10.7188 1.68749 10.7656L4.59374 19.5312C4.78124 20.1875 5.39062 20.6563 6.09374 20.6563H19.0312C20.7656 20.6563 22.2656 19.3438 22.5 17.6094L24.4687 3.59375C24.4687 3.5 24.5625 3.45312 24.6562 3.45312H27.1875C27.75 3.45312 28.2656 2.98438 28.2656 2.375C28.2656 1.76563 27.8437 1.34375 27.2812 1.34375ZM20.4844 17.2812C20.3906 17.9844 19.7812 18.5 19.0781 18.5H6.51562L3.98437 10.8125H21.4219L20.4844 17.2812Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DataStats5;

const DataStatsCard = ({ icon, name, number }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative mb-8 flex items-center rounded-[10px] bg-white px-6 py-10 shadow-1 dark:bg-dark-2 dark:shadow-box-dark sm:px-10 md:px-6 xl:px-10">
        <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-full bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px] md:mr-4 md:h-[50px] md:max-w-[50px] xl:mr-6 xl:h-[60px] xl:max-w-[60px]">
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-dark dark:text-white xl:text-[28px] xl:leading-[35px]">
            {number}
          </p>
          <p className="mt-1 text-base text-body-color dark:text-dark-6">
            {name}
          </p>
        </div>
        <div className="absolute right-6 top-6">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

const Dropdown = () => {
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
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-body-color dark:text-dark-6"
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
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[150px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Edit
        </button>
        <button className="w-full rounded-sm px-3 py-1.5 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Delete
        </button>
      </div>
    </div>
  );
};
