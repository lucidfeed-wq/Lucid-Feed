import React, { useEffect, useRef, useState } from "react";

const DashboardDropdown3 = () => {
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
              <span className="absolute -top-0.5 -right-0.5 z-10 h-2 w-2 rounded-full bg-red-500">
                <span className="absolute left-0 top-0 -z-10 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
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
                  d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.18085 5.42662C1.49757 4.97417 2.1211 4.86414 2.57355 5.18085L12.0001 11.7794L21.4266 5.18085C21.8791 4.86414 22.5026 4.97417 22.8193 5.42662C23.136 5.87907 23.026 6.5026 22.5735 6.81932L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81932C0.974174 6.5026 0.864139 5.87907 1.18085 5.42662Z"
                  fill=""
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
              <div className="border-b border-stroke dark:border-dark-3 py-[22px] px-6">
                <h5 className="font-semibold text-dark dark:text-white">Message (02)</h5>
              </div>
              <ul className="no-scrollbar flex h-auto flex-col gap-2 overflow-y-auto px-4 pb-20 pt-4">
                <DropdownItem
                  active
                  totalMsg="03"
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-01.jpg"
                  name="Craig Baptista"
                  text="Lorem ipsum has been th..."
                >
                  <InnerDropdown>
                    <InnerItem>View Profile</InnerItem>
                    <InnerItem>Mark As Unread</InnerItem>
                    <InnerItem>Delete Message</InnerItem>
                    <InnerItem>Block Message</InnerItem>
                  </InnerDropdown>
                </DropdownItem>
                <DropdownItem
                  active
                  totalMsg="01"
                  link="/#"
                  img="https://cdn.tailgrids.com/2.0/image/dashboard/images/avatar/image-02.jpg"
                  name="Maren Lipshutz"
                  text="Lorem ipsum has been th..."
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
                  name="Craig Baptista"
                  text="Lorem ipsum has been th..."
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
                  name="Maren Lipshutz"
                  text="Lorem ipsum has been th..."
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
                  View All Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDropdown3;

const DropdownItem = ({
  link,
  img,
  name,
  text,
  children,
  totalMsg,
  active,
}) => {
  return (
    <li className="group relative flex cursor-pointer items-center justify-between rounded-md p-3 hover:bg-gray-2 dark:hover:bg-dark-3">
      <a className="flex items-center gap-5" href={link}>
        <div className="relative z-10 h-9 w-9 shrink-0 rounded-full border border-primary p-1 sm:h-11 sm:w-11">
          <img
            src={img}
            alt="User"
            className="h-full w-full rounded-full object-cover object-center"
          />
          {active && (
            <span className="absolute bottom-0 right-0 z-50 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 bg-green"></span>
          )}
          {!active && (
            <span className="absolute bottom-0 right-0 z-50 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 bg-red"></span>
          )}
        </div>

        <div>
          <h6 className="font-medium text-dark dark:text-white">{name}</h6>
          <p className="mt-0.5 text-sm text-body-color dark:text-dark-6">{text}</p>
        </div>
      </a>
      <div className="flex items-center gap-2">
        {totalMsg && (
          <span className="rounded-3xl bg-primary py-1 px-2 text-xs font-semibold text-white">
            {totalMsg}
          </span>
        )}
        {children}
      </div>
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
        className={`absolute right-0 top-full z-999 mt-5 w-40 space-y-1 rounded border border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 p-2 shadow group-last:bottom-full group-last:top-auto group-last:mb-5 ${
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
