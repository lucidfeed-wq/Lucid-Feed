import React, { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-lg border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
          <div className="flex items-center justify-between border-b border-stroke px-6 py-[18px] dark:border-dark-3">
            <div className="flex items-center">
              <div className="mr-[18px] h-[52px] w-full max-w-[52px] overflow-hidden rounded-full">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-04/image-01.jpg"
                  alt="avatar"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <h5 className="text-base font-medium text-dark dark:text-white">
                  Andri Thomas
                </h5>
                <p className="text-sm text-body-color dark:text-dark-6">
                  Reply to message
                </p>
              </div>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>

          <div className="space-y-3 px-6 pb-[30px] pt-6">
            <Chat
              name="Andri Thomas"
              time="1:55pm"
              text="I want to make an appointment tomorrow from 2:00 to 5:00pm?"
            />
            <Reply
              time="1:55pm"
              text="Hello, Thomas! I will check the schedule and inform you"
            />
            <Chat
              name="Andri Thomas"
              time="1:55pm"
              text="Ok, Thanks for your reply."
            />
            <Reply time="1:55pm" text="You are welcome!" />
          </div>

          <div className="border-t border-stroke px-6 py-5 dark:border-dark-3">
            <form className="flex items-center justify-between space-x-[18px]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Type something here"
                  className="h-[52px] w-full rounded-md border border-stroke bg-gray-1 pl-5 pr-[75px] text-body-color outline-hidden placeholder:text-secondary-color focus:border-primary dark:border-dark-3 dark:bg-transparent dark:text-dark-6"
                />
                <div className="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-3">
                  <button className="text-body-color hover:text-primary dark:text-dark-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M9.225 17.5219C9.16875 17.5219 9.14062 17.5219 9.08437 17.5219C7.79062 17.5219 6.38438 16.9875 5.5125 16.1719C4.58438 15.3 4.07812 14.1188 4.07812 12.9094V4.19063C4.07812 2.98126 4.66875 1.88438 5.70937 1.18126C6.72187 0.478134 7.9875 0.309384 9.16875 0.731259L9.225 0.759384C9.36562 0.815634 9.53438 0.843759 9.70312 0.956259C10.9969 1.63126 11.7844 2.84063 11.7844 4.21876V11.6719C11.7844 12.4313 11.5312 13.1344 11.0531 13.6969C10.9688 13.8094 10.9125 13.8656 10.8562 13.8938C10.3219 14.3719 9.70312 14.625 9 14.625C8.2125 14.625 7.45313 14.2594 6.94688 13.6688C6.46875 13.1063 6.1875 12.375 6.1875 11.6156V5.40001C6.1875 5.06251 6.46875 4.75313 6.83437 4.75313C7.2 4.75313 7.48125 5.03438 7.48125 5.40001V11.6438C7.48125 12.0938 7.65 12.5438 7.93125 12.8813C8.18438 13.1906 8.60625 13.3875 9 13.3875C9.36562 13.3875 9.675 13.2469 9.95625 12.9938C9.98438 12.9656 10.0125 12.9375 10.0687 12.8813C10.35 12.5438 10.5188 12.1219 10.5188 11.6719V4.19063C10.5188 3.29063 10.0125 2.50313 9.1125 2.05313L9.08437 2.02501C9.02812 1.99688 8.97188 1.96876 8.85938 1.94063L8.775 1.91251C7.95938 1.63126 7.11562 1.74376 6.4125 2.22188C5.70937 2.67188 5.34375 3.37501 5.34375 4.16251V12.8813C5.34375 13.725 5.7375 14.5969 6.38438 15.2156C7.03125 15.8063 8.12813 16.2281 9.1125 16.2281C10.0688 16.2563 10.9688 15.8906 11.6719 15.2438C12.3469 14.5969 12.7125 13.7531 12.6844 12.8813V6.10313C12.6844 5.76563 12.9656 5.45626 13.3313 5.45626C13.6969 5.45626 13.9781 5.73751 13.9781 6.10313V12.8813C14.0063 14.0906 13.5 15.2719 12.5719 16.1719C11.6438 17.0156 10.4344 17.5219 9.225 17.5219Z" />
                    </svg>
                  </button>

                  <button className="text-body-color hover:text-primary dark:text-dark-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <g clipPath="url(#clip0_1055_11356)">
                        <path d="M13.0219 9.9281H4.97812C4.78125 9.9281 4.58437 10.0125 4.47187 10.1812C4.35937 10.35 4.30312 10.5469 4.35937 10.7437C4.95 12.825 6.8625 14.2875 9 14.2875C11.1937 14.2875 13.05 12.8812 13.6406 10.7437C13.6969 10.5469 13.6687 10.35 13.5281 10.1812C13.4156 10.0125 13.2187 9.9281 13.0219 9.9281ZM9 12.9937C7.70625 12.9937 6.55312 12.2906 5.90625 11.1937H12.0937C11.475 12.2906 10.3219 12.9937 9 12.9937Z" />
                        <path d="M9 0.224976C4.1625 0.224976 0.224998 4.16248 0.224998 8.99998C0.224998 13.8375 4.1625 17.8031 9.02812 17.8031C13.8937 17.8031 17.8312 13.8656 17.8312 8.99998C17.8312 4.13435 13.8375 0.224976 9 0.224976ZM9 16.5375C4.8375 16.5375 1.4625 13.1625 1.4625 8.99998C1.4625 4.83748 4.86562 1.4906 9 1.4906C13.1344 1.4906 16.5375 4.8656 16.5375 9.0281C16.5375 13.1906 13.1625 16.5375 9 16.5375Z" />
                        <path d="M5.625 7.53748C6.24632 7.53748 6.75 7.0338 6.75 6.41248C6.75 5.79116 6.24632 5.28748 5.625 5.28748C5.00368 5.28748 4.5 5.79116 4.5 6.41248C4.5 7.0338 5.00368 7.53748 5.625 7.53748Z" />
                        <path d="M12.375 7.53748C12.9963 7.53748 13.5 7.0338 13.5 6.41248C13.5 5.79116 12.9963 5.28748 12.375 5.28748C11.7537 5.28748 11.25 5.79116 11.25 6.41248C11.25 7.0338 11.7537 7.53748 12.375 7.53748Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1055_11356">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <button className="flex h-[52px] w-full max-w-[52px] items-center justify-center rounded-md bg-primary text-white hover:bg-blue-dark">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4875 10.2094C20.35 9.96875 20.1438 9.79687 19.9031 9.65937L4.05626 0.79062C3.78126 0.65312 3.47188 0.58437 3.16251 0.618745C2.85313 0.65312 2.57813 0.756245 2.33751 0.962495C2.09688 1.16875 1.92501 1.44375 1.85626 1.71875C1.75313 2.02812 1.78751 2.3375 1.89063 2.64687L4.84688 11L1.89063 19.3531C1.78751 19.6625 1.78751 19.9719 1.85626 20.2469C1.92501 20.5562 2.09688 20.7969 2.33751 21.0031C2.57813 21.2094 2.85313 21.3125 3.16251 21.3469C3.19688 21.3469 3.26563 21.3469 3.30001 21.3469C3.54063 21.3469 3.81563 21.2781 4.05626 21.1406L19.9031 12.2719C20.1438 12.1344 20.35 11.9625 20.4875 11.7219C20.625 11.4812 20.6938 11.2062 20.6938 10.9656C20.6938 10.725 20.625 10.45 20.4875 10.2094ZM3.36876 2.16562L17.7375 10.2094H6.22188L3.36876 2.16562ZM3.36876 19.8344L6.25626 11.7906H17.7719L3.36876 19.8344Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;

const Chat = ({ name, time, text }) => {
  return (
    <div className={`max-w-[355px]`}>
      <p className="mb-2 text-sm font-medium text-body-color dark:text-dark-6">
        {name}
      </p>
      <div className="mb-2 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-dark-3">
        <p className="text-base text-body-color dark:text-dark-6">{text}</p>
      </div>
      <p className="text-xs text-body-color dark:text-dark-6">{time}</p>
    </div>
  );
};
const Reply = ({ time, text }) => {
  return (
    <div className={`ml-auto max-w-[355px]`}>
      <div className="mb-2 rounded-2xl rounded-br-none bg-primary px-5 py-3">
        <p className="text-base text-white">{text}</p>
      </div>
      <p className="text-right text-xs text-body-color dark:text-dark-6">
        {time}
      </p>
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
        className="flex h-[30px] w-10 items-center justify-center rounded-sm border border-stroke bg-[#F8FAFC] text-body-color dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M4.58333 12.8333C5.59586 12.8333 6.41667 12.0125 6.41667 11C6.41667 9.98744 5.59586 9.16663 4.58333 9.16663C3.57081 9.16663 2.75 9.98744 2.75 11C2.75 12.0125 3.57081 12.8333 4.58333 12.8333Z" />
          <path d="M11 12.8333C12.0125 12.8333 12.8333 12.0125 12.8333 11C12.8333 9.98744 12.0125 9.16663 11 9.16663C9.98748 9.16663 9.16667 9.98744 9.16667 11C9.16667 12.0125 9.98748 12.8333 11 12.8333Z" />
          <path d="M17.4167 12.8333C18.4292 12.8333 19.25 12.0125 19.25 11C19.25 9.98744 18.4292 9.16663 17.4167 9.16663C16.4041 9.16663 15.5833 9.98744 15.5833 11C15.5833 12.0125 16.4041 12.8333 17.4167 12.8333Z" />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Edit
        </button>
        <button className="w-full rounded-sm px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2">
          Delete
        </button>
      </div>
    </div>
  );
};
