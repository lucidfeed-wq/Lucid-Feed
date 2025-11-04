import React, { useEffect, useRef, useState } from "react";

const ChatBox4 = () => {
  const active = true;

  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="mx-auto w-full max-w-[480px] rounded-[10px] border border-stroke bg-white dark:border-dark-3 dark:bg-dark-2">
          <div className="flex items-center justify-between border-b border-stroke px-[30px] py-4 dark:border-dark-3">
            <div className="flex items-center">
              <div className="relative mr-5 h-[56px] w-full max-w-[56px] rounded-full">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/dashboard/images/chat-box/chat-box-04/image-01.jpg"
                  alt="avatar"
                  className="h-full w-full rounded-full object-cover object-center"
                />
                <span
                  className={`absolute bottom-[2px] right-0 inline-block h-[14px] w-[14px] rounded-full border-2 border-white dark:border-dark-2 ${
                    active ? "bg-green" : "bg-red"
                  }`}
                ></span>
              </div>
              <div>
                <h5 className="text-base font-medium text-dark dark:text-white">
                  Robert Henry
                </h5>
                <p className="text-sm text-body-color dark:text-dark-6">
                  {active ? "Active" : "last seen 5m ago"}
                </p>
              </div>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>

          <div className="p-[30px]">
            <div className="mb-[30px] space-y-[10px]">
              <Chat
                width="270px"
                time="18:03"
                text="Hi Saif, How are you doing? You are so cute."
              />
              <Reply
                seen
                width="270px"
                time="18:03"
                text="Yoo..! I am doing great. Owww Leon Thanks."
              />
              <Chat
                width="270px"
                time="18:03"
                text="I'm waiting for you response!"
              />
              <Reply
                seen
                width="270px"
                time="18:03"
                text="Yes, I am here now, please tell me how can I help you?"
              />
            </div>

            <form className="relative">
              <input
                type="text"
                placeholder="Type something here..."
                className="h-[58px] w-full rounded-[10px] border border-transparent bg-white pl-[60px] pr-[100px] text-base text-body-color shadow-chat-box outline-hidden focus:border-secondary dark:bg-dark dark:text-dark-6"
              />

              <button className="absolute left-6 top-1/2 -translate-y-1/2 text-body-color hover:text-primary dark:text-dark-6">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M8.99999 10.6594C10.7437 10.6594 12.1781 9.22497 12.1781 7.48123V3.68435C12.1781 1.9406 10.7437 0.506226 8.99999 0.506226C7.25624 0.506226 5.82187 1.9406 5.82187 3.68435V7.48123C5.82187 9.22497 7.25624 10.6594 8.99999 10.6594ZM7.08749 3.68435C7.08749 2.6156 7.95937 1.77185 8.99999 1.77185C10.0687 1.77185 10.9125 2.64373 10.9125 3.68435V7.48123C10.9125 8.54998 10.0406 9.39373 8.99999 9.39373C7.93124 9.39373 7.08749 8.52185 7.08749 7.48123V3.68435Z" />
                  <path d="M14.3437 7.6219C14.3437 7.2844 14.0625 6.97502 13.6969 6.97502C13.3312 6.97502 13.05 7.25627 13.05 7.6219C13.0781 9.84377 11.25 11.6438 8.99999 11.6438C6.74999 11.6438 4.92186 9.84377 4.92186 7.59377C4.92186 7.25627 4.64061 6.9469 4.27499 6.9469C3.90936 6.9469 3.62811 7.22815 3.62811 7.59377C3.62811 10.2938 5.68124 12.5438 8.32499 12.8531V16.875C8.32499 17.2125 8.60624 17.5219 8.97186 17.5219C9.30936 17.5219 9.61874 17.2406 9.61874 16.875V12.8813C12.2906 12.5719 14.3437 10.3219 14.3437 7.6219Z" />
                </svg>
              </button>

              <div className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-[18px]">
                <button className="text-body-color hover:text-primary dark:text-dark-6">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M9.225 17.5218C9.16875 17.5218 9.14062 17.5218 9.08437 17.5218C7.79062 17.5218 6.38438 16.9874 5.5125 16.1718C4.58438 15.2999 4.07812 14.1187 4.07812 12.9093V4.19057C4.07812 2.9812 4.66875 1.88432 5.70937 1.1812C6.72187 0.478073 7.9875 0.309323 9.16875 0.731198L9.225 0.759323C9.36562 0.815573 9.53438 0.843698 9.70312 0.956198C10.9969 1.6312 11.7844 2.84057 11.7844 4.2187V11.6718C11.7844 12.4312 11.5312 13.1343 11.0531 13.6968C10.9688 13.8093 10.9125 13.8656 10.8562 13.8937C10.3219 14.3718 9.70312 14.6249 9 14.6249C8.2125 14.6249 7.45313 14.2593 6.94688 13.6687C6.46875 13.1062 6.1875 12.3749 6.1875 11.6156V5.39995C6.1875 5.06245 6.46875 4.75307 6.83437 4.75307C7.2 4.75307 7.48125 5.03432 7.48125 5.39995V11.6437C7.48125 12.0937 7.65 12.5437 7.93125 12.8812C8.18438 13.1906 8.60625 13.3874 9 13.3874C9.36562 13.3874 9.675 13.2468 9.95625 12.9937C9.98438 12.9656 10.0125 12.9374 10.0687 12.8812C10.35 12.5437 10.5188 12.1218 10.5188 11.6718V4.19057C10.5188 3.29057 10.0125 2.50307 9.1125 2.05307L9.08437 2.02495C9.02812 1.99682 8.97188 1.9687 8.85938 1.94057L8.775 1.91245C7.95938 1.6312 7.11562 1.7437 6.4125 2.22182C5.70937 2.67182 5.34375 3.37495 5.34375 4.16245V12.8812C5.34375 13.7249 5.7375 14.5968 6.38438 15.2156C7.03125 15.8062 8.12813 16.2281 9.1125 16.2281C10.0688 16.2562 10.9688 15.8906 11.6719 15.2437C12.3469 14.5968 12.7125 13.7531 12.6844 12.8812V6.10307C12.6844 5.76557 12.9656 5.4562 13.3313 5.4562C13.6969 5.4562 13.9781 5.73745 13.9781 6.10307V12.8812C14.0063 14.0906 13.5 15.2718 12.5719 16.1718C11.6438 17.0156 10.4344 17.5218 9.225 17.5218Z" />
                  </svg>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary hover:bg-secondary/90">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1061_11654)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1975 0.803044C15.4904 1.09594 15.4904 1.57081 15.1975 1.8637L7.86415 9.19704C7.57126 9.48993 7.09639 9.48993 6.80349 9.19704C6.5106 8.90415 6.5106 8.42927 6.80349 8.13638L14.1368 0.803044C14.4297 0.510151 14.9046 0.510151 15.1975 0.803044Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1975 0.802943C15.4012 1.00667 15.4702 1.3091 15.375 1.58104L10.7084 14.9144C10.6068 15.2046 10.3383 15.4034 10.0311 15.416C9.7238 15.4285 9.44002 15.2522 9.31513 14.9712L6.76562 9.23481L1.02922 6.6853C0.748206 6.5604 0.571908 6.27663 0.584444 5.96937C0.596979 5.66211 0.795807 5.39363 1.08606 5.29205L14.4194 0.625379C14.6913 0.5302 14.9938 0.599214 15.1975 0.802943ZM3.36713 6.08289L7.63842 7.98125C7.8081 8.05666 7.94377 8.19233 8.01918 8.362L9.91753 12.6333L13.4447 2.55575L3.36713 6.08289Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1061_11654">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.000488281)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox4;

const Chat = ({ width, time, text }) => {
  return (
    <div className={`w-full max-w-[${width}]`}>
      <div className="relative">
        <div className="relative mb-1 ml-4 rounded-[10px] rounded-bl-none bg-[#EBECF2] px-4 py-2 dark:bg-dark-3">
          <span className="absolute -left-3 bottom-0 text-[#EBECF2] dark:text-dark-3">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 13H13V0L0 13Z" fill="currentColor" />
            </svg>
          </span>
          <p className="text-base text-body-color dark:text-dark-6">{text}</p>
        </div>
        <p className="ml-5 text-sm text-body-color dark:text-dark-6">{time}</p>
      </div>
    </div>
  );
};

const Reply = ({ width, seen, time, text }) => {
  return (
    <div className={`w-ful ml-auto max-w-[${width}]`}>
      <div className="relative">
        <div className="relative mb-1 mr-4 rounded-[10px] rounded-br-none bg-secondary px-4 py-2">
          <span className="absolute -right-3 bottom-0 text-secondary">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.53674e-07 -5.68248e-07L3.85426e-07 13L13 13L9.53674e-07 -5.68248e-07Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <p className="text-base text-white">{text}</p>
        </div>
        <p className="ml-5 flex items-center justify-end text-right text-sm text-body-color dark:text-dark-6">
          <span>{time}</span>
          {seen && (
            <span className="inline-block pl-1 text-secondary">
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0791 3.08748C12.307 3.31529 12.307 3.68463 12.0791 3.91244L5.66248 10.3291C5.43467 10.5569 5.06533 10.5569 4.83752 10.3291L1.92085 7.41244C1.69305 7.18463 1.69305 6.81529 1.92085 6.58748C2.14866 6.35967 2.51801 6.35967 2.74581 6.58748L5.25 9.09167L11.2542 3.08748C11.482 2.85967 11.8513 2.85967 12.0791 3.08748Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.0791 3.08748C22.307 3.31529 22.307 3.68463 22.0791 3.91244L15.6625 10.3291C15.4347 10.5569 15.0653 10.5569 14.8375 10.3291L11.9209 7.41244C11.693 7.18463 11.693 6.81529 11.9209 6.58748C12.1487 6.35967 12.518 6.35967 12.7458 6.58748L15.25 9.09167L21.2542 3.08748C21.482 2.85967 21.8513 2.85967 22.0791 3.08748Z"
                />
              </svg>
            </span>
          )}
        </p>
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
        className="flex text-body-color dark:text-dark-6"
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
