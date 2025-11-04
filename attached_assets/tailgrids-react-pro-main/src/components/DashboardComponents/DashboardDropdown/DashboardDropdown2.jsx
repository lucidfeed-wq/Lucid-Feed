import React, { useEffect, useRef, useState } from "react";

const DashboardDropdown2 = () => {
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
    <section className="bg-gray-2 dark:bg-dark py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="relative">
            <button
              className="relative"
              ref={trigger}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="z-1 absolute -top-0.5 right-0 h-2 w-2 rounded-full bg-red-500">
                <span className="-z-1 absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
              </span>

              <svg
                className="fill-body-color dark:fill-dark-6 duration-300 ease-in-out hover:fill-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.05033 3.05025C8.36309 1.7375 10.1436 1 12.0001 1C13.8566 1 15.6371 1.7375 16.9498 3.05025C18.2626 4.36301 19.0001 6.14349 19.0001 8C19.0001 11.3527 19.7171 13.4346 20.378 14.6461C20.7098 15.2544 21.0329 15.6535 21.2573 15.8904C21.3698 16.0091 21.4581 16.0878 21.5114 16.1322C21.538 16.1544 21.5558 16.168 21.5635 16.1737C21.5647 16.1746 21.5657 16.1753 21.5664 16.1758C21.9249 16.4221 22.0835 16.8725 21.9572 17.2898C21.8295 17.7115 21.4407 18 21.0001 18H3.00008C2.55941 18 2.17068 17.7115 2.04299 17.2898C1.91664 16.8725 2.07528 16.4221 2.43377 16.1758C2.43447 16.1753 2.43542 16.1746 2.43663 16.1737C2.44432 16.168 2.46218 16.1544 2.4888 16.1322C2.54202 16.0878 2.6304 16.0091 2.74288 15.8904C2.9673 15.6535 3.29039 15.2544 3.62218 14.6461C4.28301 13.4346 5.00008 11.3527 5.00008 8C5.00008 6.14348 5.73758 4.36301 7.05033 3.05025ZM2.44388 16.169C2.44395 16.1689 2.44403 16.1688 2.44411 16.1688C2.44411 16.1688 2.4441 16.1688 2.4441 16.1688L2.44388 16.169ZM5.1494 16H18.8508C18.7747 15.8753 18.6983 15.7434 18.6222 15.6039C17.783 14.0654 17.0001 11.6473 17.0001 8C17.0001 6.67392 16.4733 5.40215 15.5356 4.46447C14.5979 3.52678 13.3262 3 12.0001 3C10.674 3 9.40223 3.52678 8.46454 4.46447C7.52686 5.40215 7.00008 6.67392 7.00008 8C7.00008 11.6473 6.21715 14.0654 5.37797 15.6039C5.30188 15.7434 5.22549 15.8753 5.1494 16Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.76792 20.1352C10.2457 19.858 10.8576 20.0207 11.1347 20.4984C11.2226 20.6499 11.3488 20.7757 11.5006 20.8632C11.6524 20.9506 11.8245 20.9966 11.9997 20.9966C12.1749 20.9966 12.347 20.9506 12.4988 20.8632C12.6506 20.7757 12.7768 20.6499 12.8647 20.4984C13.1418 20.0207 13.7537 19.858 14.2315 20.1352C14.7092 20.4123 14.8718 21.0242 14.5947 21.5019C14.331 21.9566 13.9525 22.3339 13.497 22.5962C13.0416 22.8586 12.5253 22.9966 11.9997 22.9966C11.4741 22.9966 10.9578 22.8586 10.5024 22.5962C10.0469 22.3339 9.66841 21.9566 9.4047 21.5019C9.12758 21.0242 9.2902 20.4123 9.76792 20.1352Z"
                  fill="#"
                />
              </svg>
            </button>
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute -right-[120px] mt-4 flex h-[460px] w-[290px] flex-col gap-1 rounded-lg bg-white dark:bg-dark-2 shadow-card sm:-right-[34px] sm:w-[360px] ${
                dropdownOpen === true ? "block" : "hidden"
              }`}
            >
              <div className="border-b border-stroke dark:border-dark-3 py-[18px] px-6">
                <h5 className="font-semibold text-dark dark:text-white">Notifications (02)</h5>
              </div>
              <ul className="flex h-auto flex-col gap-2 overflow-y-auto px-4 pb-20 pt-4">
                <DropdownItem
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg"
                  name="Mahmudul added"
                  text="to his favorite list"
                  addedName="Leather Belt Steve Madden"
                  time="12 min ago."
                >
                  <InnerDropdown>
                    <InnerItem>View Profile</InnerItem>
                    <InnerItem>Mark As Unread</InnerItem>
                    <InnerItem>Delete Message</InnerItem>
                    <InnerItem>Block Message</InnerItem>
                  </InnerDropdown>
                </DropdownItem>
                <DropdownItem
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg"
                  name="Mahmudul added"
                  text="to his favorite list"
                  addedName="Leather Belt Steve Madden"
                  time="12 min ago."
                >
                  <InnerDropdown>
                    <InnerItem>View Profile</InnerItem>
                    <InnerItem>Mark As Unread</InnerItem>
                    <InnerItem>Delete Message</InnerItem>
                    <InnerItem>Block Message</InnerItem>
                  </InnerDropdown>
                </DropdownItem>
                <DropdownItem
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-03.jpg"
                  name="Mahmudul added"
                  text="to his favorite list"
                  addedName="Leather Belt Steve Madden"
                  time="12 min ago."
                >
                  <InnerDropdown>
                    <InnerItem>View Profile</InnerItem>
                    <InnerItem>Mark As Unread</InnerItem>
                    <InnerItem>Delete Message</InnerItem>
                    <InnerItem>Block Message</InnerItem>
                  </InnerDropdown>
                </DropdownItem>
                <DropdownItem
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-04.jpg"
                  name="Mahmudul added"
                  text="to his favorite list"
                  addedName="Leather Belt Steve Madden"
                  time="12 min ago."
                >
                  <InnerDropdown>
                    <InnerItem>View Profile</InnerItem>
                    <InnerItem>Mark As Unread</InnerItem>
                    <InnerItem>Delete Message</InnerItem>
                    <InnerItem>Block Message</InnerItem>
                  </InnerDropdown>
                </DropdownItem>
              </ul>
              <div className="absolute bottom-0 z-50 w-full rounded-b-lg border-t border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-3">
                <a
                  href="/#"
                  className="flex items-center justify-center rounded-md bg-primary p-2 font-medium text-white hover:bg-blue-dark"
                >
                  View All Notifications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDropdown2;

const DropdownItem = ({
  link,
  img,
  name,
  text,
  children,
  totalMsg,
  time,
  addedName,
}) => {
  return (
    <li className="group relative flex cursor-pointer items-center justify-between gap-4 rounded-md p-3 hover:bg-gray dark:hover:bg-dark-3">
      <a className="flex items-center gap-5" href={link}>
        <div className="h-9 w-9 shrink-0 rounded-full sm:h-11 sm:w-11">
          <img
            src={img}
            alt="User"
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>

        <div>
          <p className="mt-1 text-sm text-dark dark:text-white">
            <span className="font-semibold">{name}</span>
            {text}
            <span className="font-semibold">{addedName}</span>
          </p>
          <span className="text-sm font-medium text-primary">{time}</span>
        </div>
      </a>
      <div className="flex items-center">{children}</div>
    </li>
  );
};

const InnerDropdown = ({ children }) => {
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
        className="flex items-center justify-center text-dark dark:text-white"
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <svg
          className="fill-current"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4662_3241)">
            <path
              d="M8.75 12.25C8.75 11.2835 7.9665 10.5 7 10.5C6.0335 10.5 5.25 11.2835 5.25 12.25C5.25 13.2165 6.0335 14 7 14C7.9665 14 8.75 13.2165 8.75 12.25Z"
              fill=""
            />
            <path
              d="M8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75C7.9665 8.75 8.75 7.9665 8.75 7Z"
              fill=""
            />
            <path
              d="M8.75 1.75C8.75 0.783502 7.9665 1.19677e-07 7 1.61924e-07C6.0335 2.04171e-07 5.25 0.783502 5.25 1.75C5.25 2.7165 6.0335 3.5 7 3.5C7.9665 3.5 8.75 2.7165 8.75 1.75Z"
              fill=""
            />
          </g>
          <defs>
            <clipPath id="clip0_4662_3241">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0 14) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-999 mt-5 w-[180px] space-y-1 rounded border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-2 shadow group-last:bottom-full group-last:top-auto group-last:mb-5 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const InnerItem = ({ children }) => {
  return (
    <button className="w-full rounded-sm py-2 px-3 text-left text-dark dark:text-white text-sm hover:bg-gray-2 dark:hover:bg-dark">
      {children}
    </button>
  );
};
